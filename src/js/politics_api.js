//Объявление переменной ссылки на api работы с политикиой
const baseUrl = 'http://192.168.31.234:7083/';

//Функция получения стран
async function getCountriesList() {
    try {
        //Формирование строки запроса
        const url = new URL(baseUrl + 'countries/list');

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
export const politicsApi = {
    baseUrl,
    getCountriesList
};