//Объявление переменной ссылки на api работы с файлами
const baseUrl = 'http://192.168.1.104:7082/';

//Функция получения файлов по идентификтору сущности и идентификатору типа
async function getFilesListByEntityIdAndTypeId(entityId, typeId) {
    try {
        //Формирование строки запроса
        const url = new URL(baseUrl + 'files/list');

        //Добавление query-параметров
        url.searchParams.append('entity_id', entityId);
        url.searchParams.append('type_id', typeId);

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
export const filesApi = {
    baseUrl,
    getFilesListByEntityIdAndTypeId
};