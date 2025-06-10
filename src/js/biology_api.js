//Объявление переменной ссылки на api работы с биологией
const baseUrl = 'http://192.168.31.234:8081/';

//Функция получения списка рас
export async function getRacesList() {
    try {
        //Формирование строки запроса
        const url = new URL(baseUrl + 'races/list');

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

//Функция получения списка наций
export async function getNationsList(raceId) {
    try {
        //Формирование строки запроса
        const url = new URL(baseUrl + 'nations/list');

        //Добавление query-параметров
        url.searchParams.append('race_id', raceId);

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

//Экспорт всех методов API
export const biologyApi = {
    getRacesList,
    getNationsList
};