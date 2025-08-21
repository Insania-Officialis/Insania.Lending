//Объявление переменной ссылки на api работы с новостями
const baseUrl = 'http://192.168.1.104:7085/';

//Функция получения новостей
async function getNewsList() {
    try {
        //Формирование строки запроса
        const url = new URL(baseUrl + 'news/list');

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
export const newsApi = {
    baseUrl,
    getNewsList
};