//Объявление переменной ссылки на api работы с географией
const baseUrl = 'http://192.168.1.104:7086/';

//Функция получения списка географических объектов
export async function getGeographyObjectsList(has_coordinates = null, type_ids = null) {
    try {
        //Формирование строки запроса
        const url = new URL(baseUrl + 'geography_objects/list');

        //Добавление query-параметров
        url.searchParams.append('has_coordinates', has_coordinates);
        if (type_ids && type_ids.length) {
            type_ids.forEach(id => {
                url.searchParams.append('type_ids', id.toString());
            });
        }

        //Отправка запроса
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        //Проверка статуса ответа
        if (!response.ok) {
            throw new Error('Некорректный статус ответа: ${response.status}');
        }

        //Преобразование ответа в json
        const data = await response.json();

        //Проверка структуры ответа
        if (!data?.success) throw new Error(`Неуспешный ответ: ${response.message}`);
        if (!data?.items?.length) throw new Error('Не указаны географические объекты');

        //Возврат ответа
        return data;
    } catch (error) {
        //Вывод ошибки
        console.error('Ошибка:', error);
    }
}

//Функция получения координат географических объектов
export async function getGeographyObjectsCoordinatesList(geographyObjectId = null) {
    try {
        //Проверки
        if (geographyObjectId === null && geographyObjectId === undefined) throw new Error('Не указан идентификатор географического объекта');

        //Формирование строки запроса
        const url = new URL(baseUrl + 'geography_objects_coordinates/list');

        //Добавление query-параметров
        url.searchParams.append('geography_object_id', geographyObjectId);

        //Отправка запроса
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        //Проверка статуса ответа
        if (!response.ok) throw new Error(`Некорректный статус ответа: ${response.status}`);

        //Преобразование ответа в json
        const data = await response.json();

        //Проверка структуры ответа
        if (!data?.success) throw new Error(`Неуспешный ответ: ${response.message}`);
        if (!data?.items?.length) throw new Error('Не указаны координаты географического объекта');

        //Возврат ответа
        return data;
    } catch (error) {
        //Вывод ошибки
        console.error(`Ошибка: ${error}`);
    }
}

//Экспорт всех методов API
export const geographyApi = {
    getGeographyObjectsList,
    getGeographyObjectsCoordinatesList
};