//Компонент информации о расах
export function AboutTheRaces({ races, nations }) {
    //Моковый массив рас
    const mockRaces = [
        {
            'id': 1,
            'name': 'Ихтид',
            'active': false,
            'description': 'Ихтиды - ',
            countries: ['Царство Банду']
        },
        {
            'id': 4,
            'name': 'Мраат',
            'active': false,
            'description': 'Мрааты - '
        },
        {
            'id': 5,
            'name': 'Человек',
            'active': false,
            'description': 'Люди - '
        },
        {
            'id': 6,
            'name': 'Вампир',
            'active': false,
            'description': 'Вампиры - '
        },
        {
            'id': 7,
            'name': 'Эльф',
            'active': false,
            'description': 'Эльфы - '
        },
        {
            'id': 8,
            'name': 'Метаморф',
            'active': false,
            'description': 'Метаморфы - '
        },
        {
            'id': 9,
            'name': 'Орк',
            'active': false,
            'description': 'Орки - '
        },
        {
            'id': 10,
            'name': 'Дварф',
            'active': true,
            'description': 'Дварфы - ',
            countries: ['Королевство Нордер', 'Королевство Вервирунг']
        },
        {
            'id': 11,
            'name': 'Тролль',
            'active': false,
            'description': 'Тролли - '
        },
        {
            'id': 12,
            'name': 'Гоблин',
            'active': false,
            'description': 'Гоблины - '
        },
        {
            'id': 13,
            'name': 'Огр',
            'active': false,
            'description': 'Огры - '
        },
        {
            'id': 14,
            'name': 'Альв',
            'active': false,
            'description': 'Альвы - '
        },
        {
            'id': 16,
            'name': 'Элвин',
            'active': false,
            'description': 'Элвины - '
        },
        {
            'id': 17,
            'name': 'Дану',
            'active': false,
            'description': 'Дану - '
        },
        {
            'id': 15,
            'name': 'Антропозавр',
            'active': false,
            'description': 'Антропозавры - '
        },
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
                            <div key={race.id} className={'about-the-races__block-races-list-item' + (race.active ? ' about-the-races__block-image-race--active' : '')} >
                                <img src='favicon.ico' alt='' className='about-the-races__image-race' />
                                <span>{race.name}</span>
                            </div>
                        )
                    })}
                </div>
                <div className='about-the-races__block-race'>
                    <div className='about-the-races__block-image-race'>
                        <img src='favicon.ico' alt='' className='about-the-races__image-race' />
                    </div>
                    <span className='about-the-races__text-title'>{mockRaces.find(x => x.active)?.name}</span>
                    <svg width='278' height='5' viewBox='0 0 278 5' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M277.753 2.5H3.75342M3.75342 2.5L2.25342 1L0.753418 2.5L2.25342 4L3.75342 2.5Z' stroke='url(#paint0_linear_29_320)' />
                        <defs>
                            <linearGradient id='paint0_linear_29_320' x1='277.753' y1='2.5' x2='-3.24659' y2='2.5' gradientUnits='userSpaceOnUse'>
                                <stop stopColor='white' stopOpacity='0' />
                                <stop offset='1' stopColor='white' />
                            </linearGradient>
                        </defs>
                    </svg>
                    <span>{mockRaces.find(x => x.active)?.description}</span>
                    <span>{mockRaces.find(x => x.active)?.countries?.join(', ')}</span>
                    <svg height='6' viewBox='0 0 515 6' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M0.866667 3L3.75342 5.88675L6.64017 3L3.75342 0.113249L0.866667 3ZM514.64 3.00004L511.753 0.113293L508.867 3.00004L511.753 5.8868L514.64 3.00004ZM3.75342 3L3.75342 3.5L511.753 3.50004L511.753 3.00004L511.753 2.50004L3.75342 2.5L3.75342 3Z' fill='#C0C0C0' fillOpacity='0.4' />
                    </svg>

                </div>
            </div>
        </div>
    );
}