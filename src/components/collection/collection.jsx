import { use, useState } from 'react'

import CollectionItem from '../collection/collection_item.jsx'

export default function Collection({ collection, maxElement }) {
    //Количество элементов
    let count = collection.length;

    //Добавление состояния отслеживания активного элемента
    const [activeId, setActiveId] = useState(1);

    //Добавление состояния отслеживания идентификаторов отображаемых элементов
    const [ids, setIds] = useState(GetIds(1));

    //Добавление состояния отслеживания текста
    const [text, setText] = useState(GetText(1));

    //Отображаемый список
    let visible = [];

    //Функция получения отображаемого списка
    function GetVisible() {
        //Проход по коллекции идентификаторов
        ids.forEach((key) => {
            //Поиск элемента по индентификатору
            let item = collection.find(item => item.id === key);

            //Добавление элемента в отображаемый список
            visible.push(item);
        });
    }

    //Функция нажатия на элемент
    function Click(id) {
        //Смена состояния активного элемента
        setActiveId(id);

        //Создание коллекции идентификаторов
        let newIds = GetIds(id);

        //Смена состояния идентификаторов отображаемых элементов
        setIds(newIds);

        //Смена состояния текста
        setText(GetText(id));
    }

    //Функция рассчёта идентфиикаторов
    function GetIds(id) {
        //Создание коллекции идентификаторов
        let newIds = [];

        //Получение "крайнего значения"
        let last = Math.floor(maxElement / 2);

        //Проход по количеству отображаемых элементов
        for (let i = -last; i <= last; i++) {
            //Вычисляем новый идентификатор
            let newId = id + i;

            //Если идентификатор отрицательный, то "вычитание" из количества элементов полученного числа
            if (newId <= 0) newId = count + newId;

            //Если новый идентификатор больше количества элементов, то вычитание из полученного числа количества элементов
            if (newId > count) newId = newId - count;

            //Добавление нового идентфиикатора в коллекцию
            newIds.push(newId);
        }

        //Возврат результата
        return newIds;
    }

    //Функция получения текста
    function GetText(id) {
        //Поиск элемента по индентификатору
        let item = collection.find(item => item.id === id);

        //Возврат текста
        return item.description;
    }

    //Получение отображаемого списка
    GetVisible();

    return (
        <div className="information__block">
            <div className="collection__items">
                {visible.map((item) => {
                    return <CollectionItem key={item.id} active={item.id === activeId} {...item} click={() => Click(item.id)} />
                })}
            </div>
            <span className="information__text">{text}</span>
        </div>
    )
}