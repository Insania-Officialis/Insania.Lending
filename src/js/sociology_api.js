//Объявление переменной ссылки на api работы с социологией
const baseUrl = 'http://192.168.31.234:7084/';

//Функция получения фракций
async function getFactionsList() {
    try {
        //Формирование строки запроса
        const url = new URL(baseUrl + 'factions/list');

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
export const sociologyApi = {
    baseUrl,
    getFactionsList
};