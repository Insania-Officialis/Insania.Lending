//Компонент информации о расах
export function AboutTheRaces({ races, nations }) {
    //Моковый массив рас
    const mockRaces = [
        {
            "id": 1,
            "name": "Ихтид",
            "description": "Ихтиды - "
        },
        {
            "id": 4,
            "name": "Мраат",
            "description": "Мрааты - "
        },
        {
            "id": 5,
            "name": "Человек",
            "description": "Люди - "
        },
        {
            "id": 6,
            "name": "Вампир",
            "description": "Вампиры - "
        },
        {
            "id": 7,
            "name": "Эльф",
            "description": "Эльфы - "
        },
        {
            "id": 8,
            "name": "Метаморф",
            "description": "Метаморфы - "
        },
        {
            "id": 9,
            "name": "Орк",
            "description": "Орки - "
        },
        {
            "id": 10,
            "name": "Дварф",
            "description": "Дварфы - "
        },
        {
            "id": 11,
            "name": "Тролль",
            "description": "Тролли - "
        },
        {
            "id": 12,
            "name": "Гоблин",
            "description": "Гоблины - "
        },
        {
            "id": 13,
            "name": "Огр",
            "description": "Огры - "
        },
        {
            "id": 14,
            "name": "Альв",
            "description": "Альвы - "
        },
        {
            "id": 15,
            "name": "Антропозавр",
            "description": "Антропозавры - "
        },
        {
            "id": 16,
            "name": "Элвин",
            "description": "Элвины - "
        },
        {
            "id": 17,
            "name": "Дану",
            "description": "Дану - "
        }
    ];

    //Возврат компонента
    return (
        <div className='about-the-races__block'>
            <div className='about-the-races__block-description'>
                <span className='about-the-races__text-title'>Добро пожаловать в новый мир!</span>
                <span>Выбери из множества легендарных рас - каждая из которых обладает уникальной историей и началом игры</span>
            </div>
            <span className='about-the-races__text-title'>Расы</span>
            <div className='about-the-races__block-races'>
                <div className='about-the-races__block-races-list'>
                    {mockRaces.map(race => {
                        return (
                            <div>
                                {/*<img hr*/}
                                <span>{race.name}</span>
                            </div>
                        )
                    })}
                </div>
                <div className='about-the-races__block-race'>
                </div>
            </div>
        </div>
    );
}