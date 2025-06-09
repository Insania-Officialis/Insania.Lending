//Объявление переменной ссылки на api работы с файлами
const baseUrl = 'http://192.168.31.234:8082/';

//Функция получения файлов по идентификтору сущности
async function getFilesListByEntityId(entityId) {
    try {
        //Формирование строки запроса
        const url = new URL(baseUrl + 'files/list');

        //Добавление query-параметров
        url.searchParams.append('entity_id', entityId);

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