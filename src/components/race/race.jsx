import { useState, useEffect } from 'react';

import { racesList } from '../../data/races.js';
import { biologyApi } from '../../js/biology_api.js';
import { filesApi } from '../../js/files_api.js';

import Information from '../information/information.jsx';
import Collection from '../collection/collection.jsx';

export default function Race() {
    //Добавление состояния отслеживания коллекции рас
    const [races, setRaces] = useState([]);

    //Добавление состояния отслеживания загрузки
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        //Асинхронная функция для получения списка рас
        const fetchRaces = async () => {
            try {
                //Включение загрузки
                setIsLoading(true);

                //Получение рас
                const racesData = await biologyApi.getRacesList();

                //Проверка рас
                if (!racesData?.items?.length || !racesData?.success) {
                    throw new Error("Не получены расы или список пуст");
                }

                //Проход по списку рас
                const filesPromises = racesData.items.map(async (item) => {
                    //Получение списка файлов
                    const files = await filesApi.getFilesListByEntityId(item.id);

                    //Проверка списка файлов
                    if (!files?.items?.length || !files?.success) {
                        throw new Error("Не получены расы или список пуст");
                    }

                    //Возврат результата
                    return {
                        id: item.id,
                        name: item.name,
                        description: item.description || '',
                        image: filesApi.baseUrl + 'files/by_id?id=' + files?.items[files?.items?.length - 1]?.id || null
                    };
                });

                //Получение результатов
                const results = await Promise.all(filesPromises);

                //Запись коллекции рас
                setRaces(results);

            } catch (error) {
                console.error('Ошибка при загрузке рас:', error);
            }
            finally {
                //Выключение загрузки
                setIsLoading(false);
            }
        };

        fetchRaces();
    }, []);


    if (isLoading) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
                <p>Загрузка данных...</p>
            </div>
        );
    }

    return (
        <div id="race" name="section" className="information__block">
            <Information title="О РАСАХ" text="Выберите одну из 15 рас и 54 наций. Каждая из них обладает своими особенностями и своей неповторимой историей. Станьте долгоживущим эльфом, воинственным орком, трудолюбивым дворфом или попробуйте более экзотичную расу. Но помните, что ваша судьба неразрывно будет связана с этим выбором." />
            <Collection collection={races} maxElement={9} />
        </div>
    )
}