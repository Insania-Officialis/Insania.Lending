//Объявление переменной ссылки на api работы с политикиой
const baseUrl = 'http://192.168.31.234:7083/';

//Функция получения стран
async function getCountriesList(has_coordinates = null) {
    try {
        //Формирование строки запроса
        const url = new URL(baseUrl + 'countries/list');

        //Добавление query-параметров
        url.searchParams.append('has_coordinates', has_coordinates);

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

        //Возврат ответа
        return data;
    } catch (error) {
        //Вывод ошибки
        console.error('Ошибка:', error);
    }
}

//Функция получения координат стран
export async function getCountriesCoordinatesList(countryId = null) {
    try {
        //Проверки
        if (countryId === null && countryId === undefined) throw new Error('Не указан идентификатор страны');

        //Формирование строки запроса
        const url = new URL(baseUrl + 'countries_coordinates/list');

        //Добавление query-параметров
        url.searchParams.append('country_id', countryId);

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
export const politicsApi = {
    baseUrl,
    getCountriesList,
    getCountriesCoordinatesList
};