import { useState, useEffect } from 'react';

import { biologyApi } from '../../js/biology_api.js';
import { filesApi } from '../../js/files_api.js';

import Information from '../information/information.jsx';
import Collection from '../collection/collection.jsx';

export default function Race() {
    //Добавление состояния отслеживания загрузки
    const [isLoading, setIsLoading] = useState(true);

    //Добавление состояния отслеживания коллекции рас
    const [races, setRaces] = useState([]);

    //Добавление состояния отслеживания выбранной расы
    const [currentRaceId, setCurrentRaceId] = useState(1);

    //Добавление состояния отслеживания коллекции наций
    const [nations, setNations] = useState([]);

    useEffect(() => {
        //Асинхронная функция для получения списка рас
        const fetchData = async () => {
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
                const filesRacesPromises = racesData.items.map(async (item) => {
                    //Получение списка файлов
                    const files = await filesApi.getFilesListByEntityId(item.id, 1);

                    //Проверка списка файлов
                    if (!files?.items?.length || !files?.success) {
                        throw new Error("Не получены файлы расы или список пуст");
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
                const filesRaces = await Promise.all(filesRacesPromises);

                //Запись коллекции рас
                setRaces(filesRaces);

                //Получение наций
                const nationsData = await biologyApi.getNationsList(currentRaceId);

                //Проверка наций
                if (!nationsData?.items?.length || !nationsData?.success) {
                    throw new Error("Не получены нации или список пуст");
                }

                //Проход по списку наций
                const filesNationsPromises = nationsData.items.map(async (item) => {
                    //Получение списка файлов
                    const files = await filesApi.getFilesListByEntityId(item.id, 2);

                    //Проверка списка файлов
                    if (!files?.items?.length || !files?.success) {
                        throw new Error("Не получены файлы нации или список пуст");
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
                const filesNations = await Promise.all(filesNationsPromises);

                //Запись коллекции наций
                setNations(filesNations);

            } catch (error) {
                console.error('Ошибка при загрузке рас:', error);
            }
            finally {
                //Выключение загрузки
                setIsLoading(false);
            }
        };

        //Получение данных
        fetchData();
    }, []);

    if (isLoading) {
        return (
            <p>Загрузка данных...</p>
        );
    }
    console.log(nations);

    return (
        <div id="race" name="section" className="information__block">
            <Information title="О РАСАХ" text="Выберите одну из 15 рас и 54 наций. Каждая из них обладает своими особенностями и своей неповторимой историей. Станьте долгоживущим эльфом, воинственным орком, трудолюбивым дворфом или попробуйте более экзотичную расу. Но помните, что ваша судьба неразрывно будет связана с этим выбором." />
            <Collection collection={races} maxElement={9} />
            <Collection collection={nations} maxElement={9} />
        </div>
    )
}