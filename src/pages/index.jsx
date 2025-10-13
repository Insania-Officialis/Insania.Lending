import { QueryClient, QueryClientProvider } from 'react-query';

import { Menu } from '../components/menu/menu.jsx';
import { AboutTheProject } from '../components/about_the_project/about_the_project.jsx';
import { AboutTheRaces } from '../components/about_the_races/about_the_races.jsx';
import { AboutTheCountries } from '../components/about_the_countries/about_the_countries.jsx';
import { CallToAction } from '../components/call_to_action/call_to_action.jsx';
import { AboutTheCharacters } from '../components/about_the_characters/about_the_characters.jsx';
import { AboutTheEvents } from '../components/about_the_events/about_the_events.jsx';
import { Footer } from '../components/footer/footer.jsx';

export default function Index() {
    //Формирование клиента запросов
    const queryClient = new QueryClient();

    //Моковый массив рас
    const races = [
        {
            id: 1,
            name: 'Ихтид',
            'active': false,
            description: 'Ихтиды - ',
            countries: ['Царство Банду']
        },
        {
            id: 4,
            name: 'Мраат',
            'active': false,
            description: 'Мрааты - '
        },
        {
            id: 5,
            name: 'Человек',
            'active': false,
            description: 'Люди - '
        },
        {
            id: 6,
            name: 'Вампир',
            'active': false,
            description: 'Вампиры - '
        },
        {
            id: 7,
            name: 'Эльф',
            'active': false,
            description: 'Эльфы - '
        },
        {
            id: 8,
            name: 'Метаморф',
            'active': false,
            description: 'Метаморфы - '
        },
        {
            id: 9,
            name: 'Орк',
            'active': false,
            description: 'Орки - '
        },
        {
            id: 10,
            name: 'Дварф',
            'active': true,
            description: 'Дварфы - ',
            countries: ['Королевство Нордер', 'Королевство Вервирунг']
        },
        {
            id: 11,
            name: 'Тролль',
            'active': false,
            description: 'Тролли - '
        },
        {
            id: 12,
            name: 'Гоблин',
            'active': false,
            description: 'Гоблины - '
        },
        {
            id: 13,
            name: 'Огр',
            'active': false,
            description: 'Огры - '
        },
        {
            id: 14,
            name: 'Альв',
            'active': false,
            description: 'Альвы - '
        },
        {
            id: 16,
            name: 'Элвин',
            'active': false,
            description: 'Элвины - '
        },
        {
            id: 17,
            name: 'Дану',
            'active': false,
            description: 'Дану - '
        },
        {
            id: 15,
            name: 'Антропозавр',
            'active': false,
            description: 'Антропозавры - '
        },
    ];

    //Моковый массив наций
    const nations = [
        {
            id: 1,
            name: 'Отвергунтый ихтид',
            description: 'Баккеры - ',
            'active': true
        },
        {
            id: 40,
            name: 'Баккер',
            description: 'Баккеры - ',
            'active': true
        },
        {
            id: 41,
            name: 'Нордерец',
            description: 'Нордерцы - '
        },
        {
            id: 42,
            name: 'Вервирунгец',
            description: 'Вервирунгцы - '
        },
        {
            id: 43,
            name: 'Шмид',
            description: 'Шмиды - '
        },
        {
            id: 44,
            name: 'Кригер',
            description: 'Кригеры - '
        },
        {
            id: 45,
            name: 'Куфман',
            description: 'Куфманы - '
        },
    ];

    //Моковый массив стран
    const countries = [
        {
            id: 1,
            name: 'Альвраатская империя',
            description: 'Альвраатская империя - '
        },
        {
            id: 2,
            name: 'Княжество Саорса',
            description: 'Княжество Саорса - '
        },
        {
            id: 3,
            name: 'Королевство Берген',
            description: 'Королевство Берген - '
        },
        {
            id: 4,
            name: 'Фесгарское княжество',
            description: 'Фесгарское княжество - '
        },
        {
            id: 5,
            name: 'Сверденский каганат',
            description: 'Сверденский каганат - '
        },
        {
            id: 6,
            name: 'Ханство Тавалин',
            description: 'Ханство Тавалин - '
        },
        {
            id: 7,
            name: 'Княжество Саргиб',
            description: 'Княжество Саргиб - '
        },
        {
            id: 8,
            name: 'Царство Банду',
            description: 'Царство Банду - '
        },
        {
            id: 9,
            name: 'Королевство Нордер',
            description: 'Королевство Нордер - '
        },
        {
            id: 10,
            name: 'Альтерское княжество',
            description: 'Альтерское княжество - '
        },
        {
            id: 11,
            name: 'Орлиадарская конфедерация',
            description: 'Орлиадарская конфедерация - '
        },
        {
            id: 12,
            name: 'Королевство Удстир',
            description: 'Королевство Удстир - '
        },
        {
            id: 13,
            name: 'Королевство Вервирунг',
            description: 'Королевство Вервирунг - '
        },
        {
            id: 14,
            name: 'Дестинский орден',
            description: 'Дестинский орден - '
        },
        {
            id: 15,
            name: 'Вольный город Лийсет',
            description: 'Вольный город Лийсет - '
        },
        {
            id: 16,
            name: 'Лисцийская империя',
            description: 'Лисцийская империя - '
        },
        {
            id: 17,
            name: 'Королевство Вальтир',
            description: 'Королевство Вальтир - '
        },
        {
            id: 18,
            name: 'Вассальное княжество Гратис',
            description: 'Вассальное княжество Гратис - '
        },
        {
            id: 19,
            name: 'Княжество Ректа',
            description: 'Княжество Ректа - '
        },
        {
            id: 20,
            name: 'Волар',
            description: 'Волар - '
        },
        {
            id: 21,
            name: 'Союз Иль-Ладро',
            description: 'Союз Иль-Ладро - '
        },
        {
            id: 22,
            name: 'Мергерская Уния',
            description: 'Мергерская Уния - '
        }
    ];

    //Моковый массив фракций
    const fractions = [
        {
            "id": 2,
            "name": "Правительство",
            "description": "Правители государств, судебные, законодательные и исполнительные органы (если они есть), представители в других государствах, который определяют внутреннюю и внешнюю политику, управляют различными сферами государства, осуществляют контроль за исполнением приказов и судебные дела высшего уровня"
        },
        {
            "id": 3,
            "name": "Знать",
            "description": "Знать -"
        },
        {
            "id": 4,
            "name": "Духовенство",
            "description": "Духовенство -"
        },
        {
            "id": 5,
            "name": "Маги",
            "description": "Маги -"
        },
        {
            "id": 6,
            "name": "Военные",
            "description": "Военные -"
        },
        {
            "id": 7,
            "name": "Купечество",
            "description": "Купечество -"
        },
        {
            "id": 8,
            "name": "Преступность",
            "description": "Преступность -"
        },
        {
            "id": 9,
            "name": "Интеллигенция",
            "description": "Интеллигенция -"
        },
        {
            "id": 10,
            "name": "Бесфракционники",
            "description": "Бесфракционники -"
        }
    ];

    //Моковый массив персонажей
    const characters = [
        {
            id: 1,
            name: 'Клаавин из дома Миритрант',
            biography: 'Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, в текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель',
            age: 21,
            raceId: 1,
            nationId: 1,
            countryId: 1,
            fractionId: 2,
            active: true
        },
        {
            id: 2,
            name: 'Клаавин из дома Миритрант',
            biography: 'Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, в текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель',
            age: 21,
            countryId: 1,
            fractionId: 1,
            active: false
        },
        {
            id: 3,
            name: 'Клаавин из дома Миритрант',
            biography: 'Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, в текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель',
            age: 21,
            countryId: 1,
            fractionId: 1,
            active: false
        },
        {
            id: 4,
            name: 'Клаавин из дома Миритрант',
            biography: 'Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, в текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель',
            age: 21,
            countryId: 1,
            fractionId: 1,
            active: false
        },
        {
            id: 5,
            name: 'Клаавин из дома Миритрант',
            biography: 'Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, в текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель',
            age: 21,
            countryId: 1,
            fractionId: 1,
            active: false
        },
        {
            id: 6,
            name: 'Клаавин из дома Миритрант',
            biography: 'Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, в текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель',
            age: 21,
            countryId: 1,
            fractionId: 1,
            active: false
        },
        {
            id: 7,
            name: 'Клаавин из дома Миритрант',
            biography: 'Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, в текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель',
            age: 21,
            countryId: 1,
            fractionId: 1,
            active: false
        },
        {
            id: 8,
            name: 'Клаавин из дома Миритрант',
            biography: 'Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, в текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель',
            age: 21,
            countryId: 1,
            fractionId: 1,
            active: false
        },
        {
            id: 9,
            name: 'Клаавин из дома Миритрант',
            biography: 'Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, в текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель',
            age: 21,
            countryId: 1,
            fractionId: 1,
            active: false
        },
        {
            id: 10,
            name: 'Клаавин из дома Миритрант',
            biography: 'Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, в текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель',
            age: 21,
            countryId: 1,
            fractionId: 1,
            active: false
        },
    ];

    //Моковый массив событий
    const events = [
        {
            id: 1,
            url: '/images/background.png',
            active: true,
            title: 'Заголовок',
            description: 'Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, вставляемый в макет страницы). Используется для образца шрифта и текста, а также для заполнения полей на странице.',
        },
        {
            id: 2,
            url: '/images/background.png',
            active: true,
            title: 'Заголовок',
            description: 'Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, вставляемый в макет страницы). Используется для образца шрифта и текста, а также для заполнения полей на странице.',
        },
        {
            id: 3,
            url: '/images/background.png',
            active: true,
            title: 'Заголовок',
            description: 'Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, вставляемый в макет страницы). Используется для образца шрифта и текста, а также для заполнения полей на странице.',
        },
        {
            id: 4,
            url: '/images/background.png',
            active: true,
            title: 'Заголовок',
            description: 'Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, вставляемый в макет страницы). Используется для образца шрифта и текста, а также для заполнения полей на странице.',
        },
        {
            id: 5,
            url: '/images/background.png',
            active: true,
            title: 'Заголовок',
            description: 'Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, вставляемый в макет страницы). Используется для образца шрифта и текста, а также для заполнения полей на странице.',
        }
    ];

    //Ромбы пагинации
    let pagination = [];

    //Заполнение массива ромбов пагинации
    for (let i = 0; i < countries.length / 4 + 1; i++) {
        pagination.push({
            id: i,
            active: i === 0 ? true : false
        });
    }

    //Получение активного события
    const event = events.find(x => x.active);

    //Вывод основного содержимого
    return (
        <QueryClientProvider client={queryClient}>
            <div className='index__block'>
                <div className='index__block-inner'>
                    <div className='menu__block'>
                        <div className='menu__block-content'>
                            <div className='menu__block-logo'>
                                <img src='favicon.ico' alt='' className='menu__image-logo' />
                                <span>ИНСАНИЯ</span>
                            </div>
                            <div className='menu__block-action'>
                                <a href='#race' className='menu__link'>Расы</a>
                                <a href='#country' className='menu__link'>Страны</a>
                                <a href='#character' className='menu__link'>Персонажи</a>
                                <a href='#events' className='menu__link'>Ивенты</a>
                                <a className='base__button'>Вступить</a>
                            </div>
                        </div>
                        <div className='menu__block-tag'>
                            <span className='menu__tag'>RolePlay</span>
                            <span className='menu__tag'>Original</span>
                            <span className='menu__tag'>Fantasy</span>
                        </div>
                    </div>
                    <div className='about-the-project__block'>
                        <div className='about-the-project__block-inner'>
                            <div className='about-the-project__block-title'>
                                <span className='about-the-project__text-title'>Insania</span>
                                <div className='about-the-project__block-subtitle'>
                                    <svg width="70" height="10" viewBox="0 0 70 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4.93301H60.5M60.5 4.93301L64.5 0.933014L68.5 4.93301L64.5 9.06699L60.5 4.93301Z" stroke="url(#paint0_linear_27_81)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_27_81" x1="0.5" y1="4.93301" x2="67.5" y2="4.93301" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="white" stopOpacity="0" />
                                                <stop offset="1" stopColor="white" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <span className='about-the-project__text-description'>Текстовая ролевая фэнтези-игра</span>
                                    <svg width="70" height="10" viewBox="0 0 70 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M69.5 4.93301H9.5M9.5 4.93301L5.5 0.933014L1.5 4.93301L5.5 9.06699L9.5 4.93301Z" stroke="url(#paint0_linear_27_82)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_27_82" x1="69.5" y1="4.93301" x2="2.50001" y2="4.93301" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="white" stopOpacity="0" />
                                                <stop offset="1" stopColor="white" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <span className='about-the-project__text-description'>Мир, где множество разумных творят магию и искусства, ведут торговлю и ремёсла, поклоняются богам, воюют и интригуют. Мир, ставший домом для множества рас. Мир, где каждый может побороться за место под солнцем, но не каждый победит.</span>
                            <a className='base__button'>Начать игру</a>
                        </div>
                    </div>
                    <div className='about-the-races__block'>
                        <div className='about-the-races__block-description'>
                            <span className='about-the-races__text-title'>Добро пожаловать в новый мир!</span>
                            <span>Выбери из множества легендарных рас - каждая из которых обладает уникальной историей и началом игры</span>
                        </div>
                        <span className='about-the-races__text-title'>Расы</span>
                        <div className='about-the-races__block-races'>
                            <div className='about-the-races__block-races-list'>
                                {races.map(race => {
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
                                <span className='about-the-races__text-title'>{races.find(x => x.active)?.name}</span>
                                <svg width='278' height='5' viewBox='0 0 278 5' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <path d='M277.753 2.5H3.75342M3.75342 2.5L2.25342 1L0.753418 2.5L2.25342 4L3.75342 2.5Z' stroke='url(#paint0_linear_29_320)' />
                                    <defs>
                                        <linearGradient id='paint0_linear_29_320' x1='277.753' y1='2.5' x2='-3.24659' y2='2.5' gradientUnits='userSpaceOnUse'>
                                            <stop stopColor='white' stopOpacity='0' />
                                            <stop offset='1' stopColor='white' />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <span>{races.find(x => x.active)?.description}</span>
                                <span>{races.find(x => x.active)?.countries?.join(', ')}</span>
                                <svg height='6' viewBox='0 0 515 6' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <path d='M0.866667 3L3.75342 5.88675L6.64017 3L3.75342 0.113249L0.866667 3ZM514.64 3.00004L511.753 0.113293L508.867 3.00004L511.753 5.8868L514.64 3.00004ZM3.75342 3L3.75342 3.5L511.753 3.50004L511.753 3.00004L511.753 2.50004L3.75342 2.5L3.75342 3Z' fill='#C0C0C0' fillOpacity='0.4' />
                                </svg>
                                <span className='about-the-races__text-title'>{nations.find(x => x.active)?.name}</span>
                                <div className='about-the-races__block-nations'>
                                    <div className='about-the-races__block-nations-images'>
                                        {nations.map(nation => {
                                            return (
                                                <img key={nation.id} src='favicon.ico' alt='' className={'about-the-races__image-nation' + (nation.active === true ? ' about-the-races__image-nation--active' : '')} />
                                            )
                                        })}
                                    </div>
                                    <div className='about-the-races__block-nations-actions'>
                                        <a>
                                            <svg width='22' height='39' viewBox='0 0 22 39' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                <path d='M16.2552 34.9595C16.3394 34.8738 16.3394 34.7346 16.2552 34.6489L4.8769 23.0734C4.79263 22.9877 4.65585 22.9877 4.57159 23.0734C4.48733 23.1591 4.48733 23.2983 4.57159 23.384L15.9498 34.9595C16.0341 35.0463 16.1703 35.0458 16.2552 34.9595Z' fill='#C0C0C0' />
                                                <path d='M16.2552 34.9595C16.3394 34.8738 16.3394 34.7346 16.2552 34.6489L4.8769 23.0734C4.79263 22.9877 4.65585 22.9877 4.57159 23.0734C4.48733 23.1591 4.48733 23.2983 4.57159 23.384L15.9498 34.9595C16.0341 35.0463 16.1703 35.0458 16.2552 34.9595Z' fill='url(#paint0_linear_40_3267)' />
                                                <path d='M17.7822 33.4059C17.8665 33.3201 17.8665 33.181 17.7822 33.0953L6.16487 21.2765C6.08061 21.1908 5.94382 21.1908 5.85955 21.2765C5.77529 21.3622 5.77528 21.5014 5.85954 21.5871L17.4769 33.4059C17.5617 33.4922 17.6974 33.4921 17.7822 33.4059Z' fill='#C0C0C0' />
                                                <path d='M17.7822 33.4059C17.8665 33.3201 17.8665 33.181 17.7822 33.0953L6.16487 21.2765C6.08061 21.1908 5.94382 21.1908 5.85955 21.2765C5.77529 21.3622 5.77528 21.5014 5.85954 21.5871L17.4769 33.4059C17.5617 33.4922 17.6974 33.4921 17.7822 33.4059Z' fill='url(#paint1_linear_40_3267)' />
                                                <path d='M17.7822 34.96C17.8211 34.9205 17.8457 34.8654 17.8452 34.8047L17.8452 33.2506C17.8452 33.1292 17.7483 33.0307 17.629 33.0307C17.5097 33.0307 17.4129 33.1292 17.4129 33.2506L17.4129 34.5843L16.1019 34.5843C15.9826 34.5843 15.8858 34.6828 15.8858 34.8042C15.8858 34.9255 15.9826 35.0241 16.1019 35.0241L17.6296 35.0241C17.6892 35.0246 17.7434 34.9996 17.7822 34.96Z' fill='#C0C0C0' />
                                                <path d='M17.7822 34.96C17.8211 34.9205 17.8457 34.8654 17.8452 34.8047L17.8452 33.2506C17.8452 33.1292 17.7483 33.0307 17.629 33.0307C17.5097 33.0307 17.4129 33.1292 17.4129 33.2506L17.4129 34.5843L16.1019 34.5843C15.9826 34.5843 15.8858 34.6828 15.8858 34.8042C15.8858 34.9255 15.9826 35.0241 16.1019 35.0241L17.6296 35.0241C17.6892 35.0246 17.7434 34.9996 17.7822 34.96Z' fill='url(#paint2_linear_40_3267)' />
                                                <path d='M19.3094 36.5136C19.3482 36.4741 19.3729 36.419 19.3723 36.3583L19.3723 34.8042C19.3723 34.6828 19.2755 34.5843 19.1562 34.5843L17.6285 34.5843C17.5092 34.5843 17.4124 34.6828 17.4124 34.8041L17.4124 36.3583C17.4124 36.4797 17.5092 36.5782 17.6285 36.5782L19.1562 36.5782C19.2164 36.5782 19.2705 36.5531 19.3094 36.5136ZM18.9406 35.024L18.9406 36.1384L17.8452 36.1384L17.8452 35.024L18.9406 35.024Z' fill='#C0C0C0' />
                                                <path d='M19.3094 36.5136C19.3482 36.4741 19.3729 36.419 19.3723 36.3583L19.3723 34.8042C19.3723 34.6828 19.2755 34.5843 19.1562 34.5843L17.6285 34.5843C17.5092 34.5843 17.4124 34.6828 17.4124 34.8041L17.4124 36.3583C17.4124 36.4797 17.5092 36.5782 17.6285 36.5782L19.1562 36.5782C19.2164 36.5782 19.2705 36.5531 19.3094 36.5136ZM18.9406 35.024L18.9406 36.1384L17.8452 36.1384L17.8452 35.024L18.9406 35.024Z' fill='url(#paint3_linear_40_3267)' />
                                                <path d='M20.8365 38.0672C20.8753 38.0277 20.8999 37.9726 20.8994 37.9119L20.8994 36.3577C20.8994 36.2364 20.8026 36.1379 20.6833 36.1379L19.1556 36.1379C19.0363 36.1379 18.9395 36.2364 18.9395 36.3577L18.9395 37.9119C18.9395 38.0333 19.0363 38.1318 19.1556 38.1318L20.6833 38.1318C20.7435 38.1318 20.7976 38.1067 20.8365 38.0672ZM20.4682 36.5782L20.4682 37.6926L19.3728 37.6926L19.3728 36.5782L20.4682 36.5782Z' fill='#C0C0C0' />
                                                <path d='M20.8365 38.0672C20.8753 38.0277 20.8999 37.9726 20.8994 37.9119L20.8994 36.3577C20.8994 36.2364 20.8026 36.1379 20.6833 36.1379L19.1556 36.1379C19.0363 36.1379 18.9395 36.2364 18.9395 36.3577L18.9395 37.9119C18.9395 38.0333 19.0363 38.1318 19.1556 38.1318L20.6833 38.1318C20.7435 38.1318 20.7976 38.1067 20.8365 38.0672ZM20.4682 36.5782L20.4682 37.6926L19.3728 37.6926L19.3728 36.5782L20.4682 36.5782Z' fill='url(#paint4_linear_40_3267)' />
                                                <path d='M4.87695 15.9271L16.2552 4.35166C16.3395 4.26594 16.3395 4.12677 16.2552 4.04105C16.1709 3.95533 16.0341 3.95532 15.9499 4.04104L4.57162 15.6165C4.48736 15.7023 4.48737 15.8414 4.57163 15.9271C4.65589 16.0129 4.79268 16.0129 4.87695 15.9271Z' fill='#C0C0C0' />
                                                <path d='M4.87695 15.9271L16.2552 4.35166C16.3395 4.26594 16.3395 4.12677 16.2552 4.04105C16.1709 3.95533 16.0341 3.95532 15.9499 4.04104L4.57162 15.6165C4.48736 15.7023 4.48737 15.8414 4.57163 15.9271C4.65589 16.0129 4.79268 16.0129 4.87695 15.9271Z' fill='url(#paint5_linear_40_3267)' />
                                                <path d='M6.13212 17.7574L17.7823 5.90525C17.8666 5.81952 17.8666 5.68036 17.7823 5.59464C17.698 5.50892 17.5612 5.50891 17.477 5.59463L5.8268 17.4468C5.74253 17.5325 5.74252 17.6717 5.82679 17.7574C5.91105 17.8431 6.04731 17.8437 6.13212 17.7574Z' fill='#C0C0C0' />
                                                <path d='M6.13212 17.7574L17.7823 5.90525C17.8666 5.81952 17.8666 5.68036 17.7823 5.59464C17.698 5.50892 17.5612 5.50891 17.477 5.59463L5.8268 17.4468C5.74253 17.5325 5.74252 17.6717 5.82679 17.7574C5.91105 17.8431 6.04731 17.8437 6.13212 17.7574Z' fill='url(#paint6_linear_40_3267)' />
                                                <path d='M17.7823 5.90522C17.8211 5.8657 17.8458 5.81059 17.8452 5.74992L17.8452 4.19576C17.8452 4.07441 17.7484 3.97589 17.6291 3.97589L16.1014 3.97588C15.9821 3.97588 15.8853 4.0744 15.8853 4.19575C15.8853 4.3171 15.9821 4.41562 16.1014 4.41562L17.4124 4.41562L17.4124 5.74935C17.4124 5.8707 17.5093 5.96923 17.6285 5.96923C17.6893 5.96978 17.7434 5.94474 17.7823 5.90522Z' fill='#C0C0C0' />
                                                <path d='M17.7823 5.90522C17.8211 5.8657 17.8458 5.81059 17.8452 5.74992L17.8452 4.19576C17.8452 4.07441 17.7484 3.97589 17.6291 3.97589L16.1014 3.97588C15.9821 3.97588 15.8853 4.0744 15.8853 4.19575C15.8853 4.3171 15.9821 4.41562 16.1014 4.41562L17.4124 4.41562L17.4124 5.74935C17.4124 5.8707 17.5093 5.96923 17.6285 5.96923C17.6893 5.96978 17.7434 5.94474 17.7823 5.90522Z' fill='url(#paint7_linear_40_3267)' />
                                                <path d='M19.3094 4.35165C19.3488 4.31157 19.3729 4.257 19.3723 4.19633L19.3723 2.64217C19.3723 2.52082 19.2755 2.4223 19.1562 2.4223L17.6285 2.42229C17.5092 2.42229 17.4124 2.52083 17.4124 2.64217L17.4124 4.19634C17.4124 4.31769 17.5092 4.41621 17.6285 4.41621L19.1562 4.41622C19.2169 4.41566 19.2705 4.39117 19.3094 4.35165ZM18.9406 2.86205L18.9406 3.97646L17.8452 3.97645L17.8452 2.86205L18.9406 2.86205Z' fill='#C0C0C0' />
                                                <path d='M19.3094 4.35165C19.3488 4.31157 19.3729 4.257 19.3723 4.19633L19.3723 2.64217C19.3723 2.52082 19.2755 2.4223 19.1562 2.4223L17.6285 2.42229C17.5092 2.42229 17.4124 2.52083 17.4124 2.64217L17.4124 4.19634C17.4124 4.31769 17.5092 4.41621 17.6285 4.41621L19.1562 4.41622C19.2169 4.41566 19.2705 4.39117 19.3094 4.35165ZM18.9406 2.86205L18.9406 3.97646L17.8452 3.97645L17.8452 2.86205L18.9406 2.86205Z' fill='url(#paint8_linear_40_3267)' />
                                                <path d='M20.8371 2.79743C20.876 2.75791 20.9006 2.7028 20.9 2.64213L20.9 1.08797C20.9 0.966618 20.8032 0.868098 20.6839 0.868098L19.1562 0.868089C19.0369 0.868089 18.9401 0.96661 18.9401 1.08796L18.9401 2.64214C18.9401 2.76349 19.0369 2.86201 19.1562 2.86201L20.6839 2.862C20.7441 2.862 20.7977 2.83751 20.8371 2.79743ZM20.4683 1.30785L20.4683 2.42224L19.3729 2.42225L19.3729 1.30784L20.4683 1.30785Z' fill='#C0C0C0' />
                                                <path d='M20.8371 2.79743C20.876 2.75791 20.9006 2.7028 20.9 2.64213L20.9 1.08797C20.9 0.966618 20.8032 0.868098 20.6839 0.868098L19.1562 0.868089C19.0369 0.868089 18.9401 0.96661 18.9401 1.08796L18.9401 2.64214C18.9401 2.76349 19.0369 2.86201 19.1562 2.86201L20.6839 2.862C20.7441 2.862 20.7977 2.83751 20.8371 2.79743ZM20.4683 1.30785L20.4683 2.42224L19.3729 2.42225L19.3729 1.30784L20.4683 1.30785Z' fill='url(#paint9_linear_40_3267)' />
                                                <path d='M4.87739 23.3846C6.98288 21.2426 6.98288 17.758 4.87739 15.616C4.79313 15.5303 4.65634 15.5303 4.57208 15.616C4.48781 15.7017 4.48782 15.8409 4.57209 15.9266C6.50904 17.8971 6.50903 21.1034 4.57208 23.074C4.48781 23.1597 4.48782 23.2988 4.57209 23.3846C4.65635 23.4703 4.79258 23.4708 4.87739 23.3846Z' fill='#C0C0C0' />
                                                <path d='M4.87739 23.3846C6.98288 21.2426 6.98288 17.758 4.87739 15.616C4.79313 15.5303 4.65634 15.5303 4.57208 15.616C4.48781 15.7017 4.48782 15.8409 4.57209 15.9266C6.50904 17.8971 6.50903 21.1034 4.57208 23.074C4.48781 23.1597 4.48782 23.2988 4.57209 23.3846C4.65635 23.4703 4.79258 23.4708 4.87739 23.3846Z' fill='url(#paint10_linear_40_3267)' />
                                                <path d='M3.75513 22.2429L6.29835 19.6556C6.38262 19.5698 6.38261 19.4307 6.29834 19.345L3.75458 16.7571C3.67032 16.6714 3.53354 16.6714 3.44927 16.7571L0.906056 19.3444C0.821793 19.4301 0.821793 19.5693 0.906056 19.655L3.44982 22.2429C3.53353 22.3291 3.67032 22.3292 3.75513 22.2429ZM5.83983 19.5008L3.60194 21.7775L1.36404 19.5008L3.60194 17.2241L5.83983 19.5008Z' fill='#C0C0C0' />
                                                <path d='M3.75513 22.2429L6.29835 19.6556C6.38262 19.5698 6.38261 19.4307 6.29834 19.345L3.75458 16.7571C3.67032 16.6714 3.53354 16.6714 3.44927 16.7571L0.906056 19.3444C0.821793 19.4301 0.821793 19.5693 0.906056 19.655L3.44982 22.2429C3.53353 22.3291 3.67032 22.3292 3.75513 22.2429ZM5.83983 19.5008L3.60194 21.7775L1.36404 19.5008L3.60194 17.2241L5.83983 19.5008Z' fill='url(#paint11_linear_40_3267)' />
                                                <defs>
                                                    <linearGradient id='paint0_linear_40_3267' x1='4.57159' y1='23.0734' x2='16.4559' y2='34.7552' gradientUnits='userSpaceOnUse'>
                                                        <stop stopColor='white' />
                                                        <stop offset='1' stopColor='#C0C0C0' />
                                                    </linearGradient>
                                                    <linearGradient id='paint1_linear_40_3267' x1='5.85954' y1='21.2765' x2='17.9871' y2='33.1974' gradientUnits='userSpaceOnUse'>
                                                        <stop stopColor='white' />
                                                        <stop offset='1' stopColor='#C0C0C0' />
                                                    </linearGradient>
                                                    <linearGradient id='paint2_linear_40_3267' x1='16.7127' y1='33.8719' x2='17.8006' y2='34.9414' gradientUnits='userSpaceOnUse'>
                                                        <stop stopColor='white' />
                                                        <stop offset='1' stopColor='#C0C0C0' />
                                                    </linearGradient>
                                                    <linearGradient id='paint3_linear_40_3267' x1='17.4757' y1='34.6487' x2='19.3406' y2='36.4818' gradientUnits='userSpaceOnUse'>
                                                        <stop stopColor='white' />
                                                        <stop offset='1' stopColor='#C0C0C0' />
                                                    </linearGradient>
                                                    <linearGradient id='paint4_linear_40_3267' x1='19.0028' y1='36.2023' x2='20.8677' y2='38.0354' gradientUnits='userSpaceOnUse'>
                                                        <stop stopColor='white' />
                                                        <stop offset='1' stopColor='#C0C0C0' />
                                                    </linearGradient>
                                                    <linearGradient id='paint5_linear_40_3267' x1='10.2608' y1='9.82879' x2='10.5713' y2='10.1341' gradientUnits='userSpaceOnUse'>
                                                        <stop stopColor='white' />
                                                        <stop offset='1' stopColor='#C0C0C0' />
                                                    </linearGradient>
                                                    <linearGradient id='paint6_linear_40_3267' x1='11.6519' y1='11.5207' x2='11.9625' y2='11.826' gradientUnits='userSpaceOnUse'>
                                                        <stop stopColor='white' />
                                                        <stop offset='1' stopColor='#C0C0C0' />
                                                    </linearGradient>
                                                    <linearGradient id='paint7_linear_40_3267' x1='16.3305' y1='3.65177' x2='18.1954' y2='5.48491' gradientUnits='userSpaceOnUse'>
                                                        <stop stopColor='white' />
                                                        <stop offset='1' stopColor='#C0C0C0' />
                                                    </linearGradient>
                                                    <linearGradient id='paint8_linear_40_3267' x1='17.4757' y1='2.48673' x2='19.3406' y2='4.31987' gradientUnits='userSpaceOnUse'>
                                                        <stop stopColor='white' />
                                                        <stop offset='1' stopColor='#C0C0C0' />
                                                    </linearGradient>
                                                    <linearGradient id='paint9_linear_40_3267' x1='19.0034' y1='0.932527' x2='20.8683' y2='2.76567' gradientUnits='userSpaceOnUse'>
                                                        <stop stopColor='white' />
                                                        <stop offset='1' stopColor='#C0C0C0' />
                                                    </linearGradient>
                                                    <linearGradient id='paint10_linear_40_3267' x1='2.73935' y1='17.4805' x2='6.77835' y2='21.4507' gradientUnits='userSpaceOnUse'>
                                                        <stop stopColor='white' />
                                                        <stop offset='1' stopColor='#C0C0C0' />
                                                    </linearGradient>
                                                    <linearGradient id='paint11_linear_40_3267' x1='2.17766' y1='18.0508' x2='5.0757' y2='20.8994' gradientUnits='userSpaceOnUse'>
                                                        <stop stopColor='white' />
                                                        <stop offset='1' stopColor='#C0C0C0' />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </a>
                                        <a>
                                            <svg width='22' height='39' viewBox='0 0 22 39' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                <path d='M6.25168 34.9595C6.16741 34.8738 6.16742 34.7346 6.25169 34.6489L17.6299 23.0734C17.7142 22.9877 17.851 22.9877 17.9352 23.0734C18.0195 23.1591 18.0195 23.2983 17.9352 23.384L6.55699 34.9595C6.47273 35.0463 6.33649 35.0458 6.25168 34.9595Z' fill='#C0C0C0' />
                                                <path d='M6.25168 34.9595C6.16741 34.8738 6.16742 34.7346 6.25169 34.6489L17.6299 23.0734C17.7142 22.9877 17.851 22.9877 17.9352 23.0734C18.0195 23.1591 18.0195 23.2983 17.9352 23.384L6.55699 34.9595C6.47273 35.0463 6.33649 35.0458 6.25168 34.9595Z' fill='url(#paint0_linear_40_3239)' />
                                                <path d='M4.7246 33.4059C4.64033 33.3201 4.64034 33.181 4.7246 33.0953L16.342 21.2765C16.4262 21.1908 16.563 21.1908 16.6473 21.2765C16.7315 21.3622 16.7316 21.5014 16.6473 21.5871L5.02993 33.4059C4.94512 33.4922 4.80941 33.4921 4.7246 33.4059Z' fill='#C0C0C0' />
                                                <path d='M4.7246 33.4059C4.64033 33.3201 4.64034 33.181 4.7246 33.0953L16.342 21.2765C16.4262 21.1908 16.563 21.1908 16.6473 21.2765C16.7315 21.3622 16.7316 21.5014 16.6473 21.5871L5.02993 33.4059C4.94512 33.4922 4.80941 33.4921 4.7246 33.4059Z' fill='url(#paint1_linear_40_3239)' />
                                                <path d='M4.72459 34.96C4.68575 34.9205 4.66113 34.8654 4.66168 34.8047L4.66168 33.2506C4.66168 33.1292 4.75853 33.0307 4.87781 33.0307C4.99709 33.0307 5.09393 33.1292 5.09393 33.2506L5.09393 34.5843L6.40493 34.5843C6.52421 34.5843 6.62107 34.6828 6.62107 34.8042C6.62107 34.9255 6.52422 35.0241 6.40494 35.0241L4.87726 35.0241C4.81762 35.0246 4.76344 34.9996 4.72459 34.96Z' fill='#C0C0C0' />
                                                <path d='M4.72459 34.96C4.68575 34.9205 4.66113 34.8654 4.66168 34.8047L4.66168 33.2506C4.66168 33.1292 4.75853 33.0307 4.87781 33.0307C4.99709 33.0307 5.09393 33.1292 5.09393 33.2506L5.09393 34.5843L6.40493 34.5843C6.52421 34.5843 6.62107 34.6828 6.62107 34.8042C6.62107 34.9255 6.52422 35.0241 6.40494 35.0241L4.87726 35.0241C4.81762 35.0246 4.76344 34.9996 4.72459 34.96Z' fill='url(#paint2_linear_40_3239)' />
                                                <path d='M3.19745 36.5136C3.1586 36.4741 3.13399 36.419 3.13453 36.3583L3.13453 34.8042C3.13453 34.6828 3.23138 34.5843 3.35066 34.5843L4.87834 34.5843C4.99762 34.5843 5.09446 34.6828 5.09446 34.8041L5.09448 36.3583C5.09448 36.4797 4.99763 36.5782 4.87835 36.5782L3.35066 36.5782C3.29047 36.5782 3.2363 36.5531 3.19745 36.5136ZM3.56625 35.024L3.56624 36.1384L4.66166 36.1384L4.66166 35.024L3.56625 35.024Z' fill='#C0C0C0' />
                                                <path d='M3.19745 36.5136C3.1586 36.4741 3.13399 36.419 3.13453 36.3583L3.13453 34.8042C3.13453 34.6828 3.23138 34.5843 3.35066 34.5843L4.87834 34.5843C4.99762 34.5843 5.09446 34.6828 5.09446 34.8041L5.09448 36.3583C5.09448 36.4797 4.99763 36.5782 4.87835 36.5782L3.35066 36.5782C3.29047 36.5782 3.2363 36.5531 3.19745 36.5136ZM3.56625 35.024L3.56624 36.1384L4.66166 36.1384L4.66166 35.024L3.56625 35.024Z' fill='url(#paint3_linear_40_3239)' />
                                                <path d='M1.67035 38.0672C1.6315 38.0277 1.60689 37.9726 1.60743 37.9119L1.60743 36.3577C1.60743 36.2364 1.70428 36.1379 1.82356 36.1379L3.35124 36.1379C3.47052 36.1379 3.56736 36.2364 3.56736 36.3577L3.56738 37.9119C3.56738 38.0333 3.47053 38.1318 3.35125 38.1318L1.82356 38.1318C1.76337 38.1318 1.7092 38.1067 1.67035 38.0672ZM2.0386 36.5782L2.03859 37.6926L3.13401 37.6926L3.13401 36.5782L2.0386 36.5782Z' fill='#C0C0C0' />
                                                <path d='M1.67035 38.0672C1.6315 38.0277 1.60689 37.9726 1.60743 37.9119L1.60743 36.3577C1.60743 36.2364 1.70428 36.1379 1.82356 36.1379L3.35124 36.1379C3.47052 36.1379 3.56736 36.2364 3.56736 36.3577L3.56738 37.9119C3.56738 38.0333 3.47053 38.1318 3.35125 38.1318L1.82356 38.1318C1.76337 38.1318 1.7092 38.1067 1.67035 38.0672ZM2.0386 36.5782L2.03859 37.6926L3.13401 37.6926L3.13401 36.5782L2.0386 36.5782Z' fill='url(#paint4_linear_40_3239)' />
                                                <path d='M17.6299 15.9271L6.25163 4.35166C6.16736 4.26594 6.16737 4.12677 6.25163 4.04105C6.3359 3.95533 6.47269 3.95532 6.55695 4.04104L17.9352 15.6165C18.0195 15.7023 18.0195 15.8414 17.9352 15.9271C17.8509 16.0129 17.7142 16.0129 17.6299 15.9271Z' fill='#C0C0C0' />
                                                <path d='M17.6299 15.9271L6.25163 4.35166C6.16736 4.26594 6.16737 4.12677 6.25163 4.04105C6.3359 3.95533 6.47269 3.95532 6.55695 4.04104L17.9352 15.6165C18.0195 15.7023 18.0195 15.8414 17.9352 15.9271C17.8509 16.0129 17.7142 16.0129 17.6299 15.9271Z' fill='url(#paint5_linear_40_3239)' />
                                                <path d='M16.3747 17.7574L4.72453 5.90525C4.64026 5.81952 4.64027 5.68036 4.72453 5.59464C4.8088 5.50892 4.94559 5.50891 5.02985 5.59463L16.68 17.4468C16.7643 17.5325 16.7643 17.6717 16.68 17.7574C16.5958 17.8431 16.4595 17.8437 16.3747 17.7574Z' fill='#C0C0C0' />
                                                <path d='M16.3747 17.7574L4.72453 5.90525C4.64026 5.81952 4.64027 5.68036 4.72453 5.59464C4.8088 5.50892 4.94559 5.50891 5.02985 5.59463L16.68 17.4468C16.7643 17.5325 16.7643 17.6717 16.68 17.7574C16.5958 17.8431 16.4595 17.8437 16.3747 17.7574Z' fill='url(#paint6_linear_40_3239)' />
                                                <path d='M4.72454 5.90522C4.68569 5.8657 4.66108 5.81059 4.66162 5.74992L4.66163 4.19576C4.66163 4.07441 4.75847 3.97589 4.87776 3.97589L6.40544 3.97588C6.52472 3.97588 6.62156 4.0744 6.62156 4.19575C6.62156 4.3171 6.52471 4.41562 6.40543 4.41562L5.09443 4.41562L5.09443 5.74935C5.09443 5.8707 4.99758 5.96923 4.8783 5.96923C4.81756 5.96978 4.76339 5.94474 4.72454 5.90522Z' fill='#C0C0C0' />
                                                <path d='M4.72454 5.90522C4.68569 5.8657 4.66108 5.81059 4.66162 5.74992L4.66163 4.19576C4.66163 4.07441 4.75847 3.97589 4.87776 3.97589L6.40544 3.97588C6.52472 3.97588 6.62156 4.0744 6.62156 4.19575C6.62156 4.3171 6.52471 4.41562 6.40543 4.41562L5.09443 4.41562L5.09443 5.74935C5.09443 5.8707 4.99758 5.96923 4.8783 5.96923C4.81756 5.96978 4.76339 5.94474 4.72454 5.90522Z' fill='url(#paint7_linear_40_3239)' />
                                                <path d='M3.19746 4.35165C3.15806 4.31157 3.13398 4.257 3.13452 4.19633L3.13453 2.64217C3.13453 2.52082 3.23137 2.4223 3.35066 2.4223L4.87834 2.42229C4.99762 2.42229 5.09448 2.52083 5.09448 2.64217L5.09447 4.19634C5.09447 4.31769 4.99763 4.41621 4.87835 4.41621L3.35066 4.41622C3.28993 4.41566 3.23631 4.39117 3.19746 4.35165ZM3.56625 2.86205L3.56625 3.97646L4.66166 3.97645L4.66167 2.86205L3.56625 2.86205Z' fill='#C0C0C0' />
                                                <path d='M3.19746 4.35165C3.15806 4.31157 3.13398 4.257 3.13452 4.19633L3.13453 2.64217C3.13453 2.52082 3.23137 2.4223 3.35066 2.4223L4.87834 2.42229C4.99762 2.42229 5.09448 2.52083 5.09448 2.64217L5.09447 4.19634C5.09447 4.31769 4.99763 4.41621 4.87835 4.41621L3.35066 4.41622C3.28993 4.41566 3.23631 4.39117 3.19746 4.35165ZM3.56625 2.86205L3.56625 3.97646L4.66166 3.97645L4.66167 2.86205L3.56625 2.86205Z' fill='url(#paint8_linear_40_3239)' />
                                                <path d='M1.66973 2.79743C1.63088 2.75791 1.60627 2.7028 1.60681 2.64213L1.60682 1.08797C1.60682 0.966618 1.70366 0.868098 1.82295 0.868098L3.35063 0.868089C3.46991 0.868089 3.56675 0.96661 3.56675 1.08796L3.56676 2.64214C3.56676 2.76349 3.46992 2.86201 3.35064 2.86201L1.82294 2.862C1.76275 2.862 1.70913 2.83751 1.66973 2.79743ZM2.03854 1.30785L2.03853 2.42224L3.13395 2.42225L3.13395 1.30784L2.03854 1.30785Z' fill='#C0C0C0' />
                                                <path d='M1.66973 2.79743C1.63088 2.75791 1.60627 2.7028 1.60681 2.64213L1.60682 1.08797C1.60682 0.966618 1.70366 0.868098 1.82295 0.868098L3.35063 0.868089C3.46991 0.868089 3.56675 0.96661 3.56675 1.08796L3.56676 2.64214C3.56676 2.76349 3.46992 2.86201 3.35064 2.86201L1.82294 2.862C1.76275 2.862 1.70913 2.83751 1.66973 2.79743ZM2.03854 1.30785L2.03853 2.42224L3.13395 2.42225L3.13395 1.30784L2.03854 1.30785Z' fill='url(#paint9_linear_40_3239)' />
                                                <path d='M17.6294 23.3846C15.524 21.2426 15.524 17.758 17.6294 15.616C17.7137 15.5303 17.8505 15.5303 17.9348 15.616C18.019 15.7017 18.019 15.8409 17.9348 15.9266C15.9978 17.8971 15.9978 21.1034 17.9348 23.074C18.019 23.1597 18.019 23.2988 17.9348 23.3846C17.8505 23.4703 17.7143 23.4708 17.6294 23.3846Z' fill='#C0C0C0' />
                                                <path d='M17.6294 23.3846C15.524 21.2426 15.524 17.758 17.6294 15.616C17.7137 15.5303 17.8505 15.5303 17.9348 15.616C18.019 15.7017 18.019 15.8409 17.9348 15.9266C15.9978 17.8971 15.9978 21.1034 17.9348 23.074C18.019 23.1597 18.019 23.2988 17.9348 23.3846C17.8505 23.4703 17.7143 23.4708 17.6294 23.3846Z' fill='url(#paint10_linear_40_3239)' />
                                                <path d='M18.7517 22.2429L16.2085 19.6556C16.1242 19.5698 16.1242 19.4307 16.2085 19.345L18.7523 16.7571C18.8365 16.6714 18.9733 16.6714 19.0576 16.7571L21.6008 19.3444C21.685 19.4301 21.685 19.5693 21.6008 19.655L19.057 22.2429C18.9733 22.3291 18.8365 22.3292 18.7517 22.2429ZM16.667 19.5008L18.9049 21.7775L21.1428 19.5008L18.9049 17.2241L16.667 19.5008Z' fill='#C0C0C0' />
                                                <path d='M18.7517 22.2429L16.2085 19.6556C16.1242 19.5698 16.1242 19.4307 16.2085 19.345L18.7523 16.7571C18.8365 16.6714 18.9733 16.6714 19.0576 16.7571L21.6008 19.3444C21.685 19.4301 21.685 19.5693 21.6008 19.655L19.057 22.2429C18.9733 22.3291 18.8365 22.3292 18.7517 22.2429ZM16.667 19.5008L18.9049 21.7775L21.1428 19.5008L18.9049 17.2241L16.667 19.5008Z' fill='url(#paint11_linear_40_3239)' />
                                                <defs>
                                                    <linearGradient id='paint0_linear_40_3239' x1='17.9352' y1='23.0734' x2='6.05092' y2='34.7552' gradientUnits='userSpaceOnUse'>
                                                        <stop stopColor='white' />
                                                        <stop offset='1' stopColor='#C0C0C0' />
                                                    </linearGradient>
                                                    <linearGradient id='paint1_linear_40_3239' x1='16.6473' y1='21.2765' x2='4.51973' y2='33.1974' gradientUnits='userSpaceOnUse'>
                                                        <stop stopColor='white' />
                                                        <stop offset='1' stopColor='#C0C0C0' />
                                                    </linearGradient>
                                                    <linearGradient id='paint2_linear_40_3239' x1='5.79417' y1='33.8719' x2='4.70622' y2='34.9414' gradientUnits='userSpaceOnUse'>
                                                        <stop stopColor='white' />
                                                        <stop offset='1' stopColor='#C0C0C0' />
                                                    </linearGradient>
                                                    <linearGradient id='paint3_linear_40_3239' x1='5.03114' y1='34.6487' x2='3.16623' y2='36.4818' gradientUnits='userSpaceOnUse'>
                                                        <stop stopColor='white' />
                                                        <stop offset='1' stopColor='#C0C0C0' />
                                                    </linearGradient>
                                                    <linearGradient id='paint4_linear_40_3239' x1='3.50404' y1='36.2023' x2='1.63913' y2='38.0354' gradientUnits='userSpaceOnUse'>
                                                        <stop stopColor='white' />
                                                        <stop offset='1' stopColor='#C0C0C0' />
                                                    </linearGradient>
                                                    <linearGradient id='paint5_linear_40_3239' x1='12.2461' y1='9.82879' x2='11.9355' y2='10.1341' gradientUnits='userSpaceOnUse'>
                                                        <stop stopColor='white' />
                                                        <stop offset='1' stopColor='#C0C0C0' />
                                                    </linearGradient>
                                                    <linearGradient id='paint6_linear_40_3239' x1='10.855' y1='11.5207' x2='10.5444' y2='11.826' gradientUnits='userSpaceOnUse'>
                                                        <stop stopColor='white' />
                                                        <stop offset='1' stopColor='#C0C0C0' />
                                                    </linearGradient>
                                                    <linearGradient id='paint7_linear_40_3239' x1='6.17631' y1='3.65177' x2='4.3114' y2='5.48491' gradientUnits='userSpaceOnUse'>
                                                        <stop stopColor='white' />
                                                        <stop offset='1' stopColor='#C0C0C0' />
                                                    </linearGradient>
                                                    <linearGradient id='paint8_linear_40_3239' x1='5.03114' y1='2.48673' x2='3.16622' y2='4.31987' gradientUnits='userSpaceOnUse'>
                                                        <stop stopColor='white' />
                                                        <stop offset='1' stopColor='#C0C0C0' />
                                                    </linearGradient>
                                                    <linearGradient id='paint9_linear_40_3239' x1='3.50343' y1='0.932527' x2='1.63851' y2='2.76567' gradientUnits='userSpaceOnUse'>
                                                        <stop stopColor='white' />
                                                        <stop offset='1' stopColor='#C0C0C0' />
                                                    </linearGradient>
                                                    <linearGradient id='paint10_linear_40_3239' x1='19.7675' y1='17.4805' x2='15.7285' y2='21.4507' gradientUnits='userSpaceOnUse'>
                                                        <stop stopColor='white' />
                                                        <stop offset='1' stopColor='#C0C0C0' />
                                                    </linearGradient>
                                                    <linearGradient id='paint11_linear_40_3239' x1='20.3292' y1='18.0508' x2='17.4311' y2='20.8994' gradientUnits='userSpaceOnUse'>
                                                        <stop stopColor='white' />
                                                        <stop offset='1' stopColor='#C0C0C0' />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <span>{nations.find(x => x.active)?.description}</span>
                            </div>
                        </div>
                    </div>
                    <div className='about-the-countries__block'>
                        <div className='about-the-countries__block-title'>
                            <span className='about-the-countries__text-title'>Страны</span>
                            <div className='about-the-countries__block-actions'>
                                <a>
                                    <svg width='22' height='39' viewBox='0 0 22 39' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                        <path d='M16.2552 34.9595C16.3394 34.8738 16.3394 34.7346 16.2552 34.6489L4.8769 23.0734C4.79263 22.9877 4.65585 22.9877 4.57159 23.0734C4.48733 23.1591 4.48733 23.2983 4.57159 23.384L15.9498 34.9595C16.0341 35.0463 16.1703 35.0458 16.2552 34.9595Z' fill='#C0C0C0' />
                                        <path d='M16.2552 34.9595C16.3394 34.8738 16.3394 34.7346 16.2552 34.6489L4.8769 23.0734C4.79263 22.9877 4.65585 22.9877 4.57159 23.0734C4.48733 23.1591 4.48733 23.2983 4.57159 23.384L15.9498 34.9595C16.0341 35.0463 16.1703 35.0458 16.2552 34.9595Z' fill='url(#paint0_linear_40_3267)' />
                                        <path d='M17.7822 33.4059C17.8665 33.3201 17.8665 33.181 17.7822 33.0953L6.16487 21.2765C6.08061 21.1908 5.94382 21.1908 5.85955 21.2765C5.77529 21.3622 5.77528 21.5014 5.85954 21.5871L17.4769 33.4059C17.5617 33.4922 17.6974 33.4921 17.7822 33.4059Z' fill='#C0C0C0' />
                                        <path d='M17.7822 33.4059C17.8665 33.3201 17.8665 33.181 17.7822 33.0953L6.16487 21.2765C6.08061 21.1908 5.94382 21.1908 5.85955 21.2765C5.77529 21.3622 5.77528 21.5014 5.85954 21.5871L17.4769 33.4059C17.5617 33.4922 17.6974 33.4921 17.7822 33.4059Z' fill='url(#paint1_linear_40_3267)' />
                                        <path d='M17.7822 34.96C17.8211 34.9205 17.8457 34.8654 17.8452 34.8047L17.8452 33.2506C17.8452 33.1292 17.7483 33.0307 17.629 33.0307C17.5097 33.0307 17.4129 33.1292 17.4129 33.2506L17.4129 34.5843L16.1019 34.5843C15.9826 34.5843 15.8858 34.6828 15.8858 34.8042C15.8858 34.9255 15.9826 35.0241 16.1019 35.0241L17.6296 35.0241C17.6892 35.0246 17.7434 34.9996 17.7822 34.96Z' fill='#C0C0C0' />
                                        <path d='M17.7822 34.96C17.8211 34.9205 17.8457 34.8654 17.8452 34.8047L17.8452 33.2506C17.8452 33.1292 17.7483 33.0307 17.629 33.0307C17.5097 33.0307 17.4129 33.1292 17.4129 33.2506L17.4129 34.5843L16.1019 34.5843C15.9826 34.5843 15.8858 34.6828 15.8858 34.8042C15.8858 34.9255 15.9826 35.0241 16.1019 35.0241L17.6296 35.0241C17.6892 35.0246 17.7434 34.9996 17.7822 34.96Z' fill='url(#paint2_linear_40_3267)' />
                                        <path d='M19.3094 36.5136C19.3482 36.4741 19.3729 36.419 19.3723 36.3583L19.3723 34.8042C19.3723 34.6828 19.2755 34.5843 19.1562 34.5843L17.6285 34.5843C17.5092 34.5843 17.4124 34.6828 17.4124 34.8041L17.4124 36.3583C17.4124 36.4797 17.5092 36.5782 17.6285 36.5782L19.1562 36.5782C19.2164 36.5782 19.2705 36.5531 19.3094 36.5136ZM18.9406 35.024L18.9406 36.1384L17.8452 36.1384L17.8452 35.024L18.9406 35.024Z' fill='#C0C0C0' />
                                        <path d='M19.3094 36.5136C19.3482 36.4741 19.3729 36.419 19.3723 36.3583L19.3723 34.8042C19.3723 34.6828 19.2755 34.5843 19.1562 34.5843L17.6285 34.5843C17.5092 34.5843 17.4124 34.6828 17.4124 34.8041L17.4124 36.3583C17.4124 36.4797 17.5092 36.5782 17.6285 36.5782L19.1562 36.5782C19.2164 36.5782 19.2705 36.5531 19.3094 36.5136ZM18.9406 35.024L18.9406 36.1384L17.8452 36.1384L17.8452 35.024L18.9406 35.024Z' fill='url(#paint3_linear_40_3267)' />
                                        <path d='M20.8365 38.0672C20.8753 38.0277 20.8999 37.9726 20.8994 37.9119L20.8994 36.3577C20.8994 36.2364 20.8026 36.1379 20.6833 36.1379L19.1556 36.1379C19.0363 36.1379 18.9395 36.2364 18.9395 36.3577L18.9395 37.9119C18.9395 38.0333 19.0363 38.1318 19.1556 38.1318L20.6833 38.1318C20.7435 38.1318 20.7976 38.1067 20.8365 38.0672ZM20.4682 36.5782L20.4682 37.6926L19.3728 37.6926L19.3728 36.5782L20.4682 36.5782Z' fill='#C0C0C0' />
                                        <path d='M20.8365 38.0672C20.8753 38.0277 20.8999 37.9726 20.8994 37.9119L20.8994 36.3577C20.8994 36.2364 20.8026 36.1379 20.6833 36.1379L19.1556 36.1379C19.0363 36.1379 18.9395 36.2364 18.9395 36.3577L18.9395 37.9119C18.9395 38.0333 19.0363 38.1318 19.1556 38.1318L20.6833 38.1318C20.7435 38.1318 20.7976 38.1067 20.8365 38.0672ZM20.4682 36.5782L20.4682 37.6926L19.3728 37.6926L19.3728 36.5782L20.4682 36.5782Z' fill='url(#paint4_linear_40_3267)' />
                                        <path d='M4.87695 15.9271L16.2552 4.35166C16.3395 4.26594 16.3395 4.12677 16.2552 4.04105C16.1709 3.95533 16.0341 3.95532 15.9499 4.04104L4.57162 15.6165C4.48736 15.7023 4.48737 15.8414 4.57163 15.9271C4.65589 16.0129 4.79268 16.0129 4.87695 15.9271Z' fill='#C0C0C0' />
                                        <path d='M4.87695 15.9271L16.2552 4.35166C16.3395 4.26594 16.3395 4.12677 16.2552 4.04105C16.1709 3.95533 16.0341 3.95532 15.9499 4.04104L4.57162 15.6165C4.48736 15.7023 4.48737 15.8414 4.57163 15.9271C4.65589 16.0129 4.79268 16.0129 4.87695 15.9271Z' fill='url(#paint5_linear_40_3267)' />
                                        <path d='M6.13212 17.7574L17.7823 5.90525C17.8666 5.81952 17.8666 5.68036 17.7823 5.59464C17.698 5.50892 17.5612 5.50891 17.477 5.59463L5.8268 17.4468C5.74253 17.5325 5.74252 17.6717 5.82679 17.7574C5.91105 17.8431 6.04731 17.8437 6.13212 17.7574Z' fill='#C0C0C0' />
                                        <path d='M6.13212 17.7574L17.7823 5.90525C17.8666 5.81952 17.8666 5.68036 17.7823 5.59464C17.698 5.50892 17.5612 5.50891 17.477 5.59463L5.8268 17.4468C5.74253 17.5325 5.74252 17.6717 5.82679 17.7574C5.91105 17.8431 6.04731 17.8437 6.13212 17.7574Z' fill='url(#paint6_linear_40_3267)' />
                                        <path d='M17.7823 5.90522C17.8211 5.8657 17.8458 5.81059 17.8452 5.74992L17.8452 4.19576C17.8452 4.07441 17.7484 3.97589 17.6291 3.97589L16.1014 3.97588C15.9821 3.97588 15.8853 4.0744 15.8853 4.19575C15.8853 4.3171 15.9821 4.41562 16.1014 4.41562L17.4124 4.41562L17.4124 5.74935C17.4124 5.8707 17.5093 5.96923 17.6285 5.96923C17.6893 5.96978 17.7434 5.94474 17.7823 5.90522Z' fill='#C0C0C0' />
                                        <path d='M17.7823 5.90522C17.8211 5.8657 17.8458 5.81059 17.8452 5.74992L17.8452 4.19576C17.8452 4.07441 17.7484 3.97589 17.6291 3.97589L16.1014 3.97588C15.9821 3.97588 15.8853 4.0744 15.8853 4.19575C15.8853 4.3171 15.9821 4.41562 16.1014 4.41562L17.4124 4.41562L17.4124 5.74935C17.4124 5.8707 17.5093 5.96923 17.6285 5.96923C17.6893 5.96978 17.7434 5.94474 17.7823 5.90522Z' fill='url(#paint7_linear_40_3267)' />
                                        <path d='M19.3094 4.35165C19.3488 4.31157 19.3729 4.257 19.3723 4.19633L19.3723 2.64217C19.3723 2.52082 19.2755 2.4223 19.1562 2.4223L17.6285 2.42229C17.5092 2.42229 17.4124 2.52083 17.4124 2.64217L17.4124 4.19634C17.4124 4.31769 17.5092 4.41621 17.6285 4.41621L19.1562 4.41622C19.2169 4.41566 19.2705 4.39117 19.3094 4.35165ZM18.9406 2.86205L18.9406 3.97646L17.8452 3.97645L17.8452 2.86205L18.9406 2.86205Z' fill='#C0C0C0' />
                                        <path d='M19.3094 4.35165C19.3488 4.31157 19.3729 4.257 19.3723 4.19633L19.3723 2.64217C19.3723 2.52082 19.2755 2.4223 19.1562 2.4223L17.6285 2.42229C17.5092 2.42229 17.4124 2.52083 17.4124 2.64217L17.4124 4.19634C17.4124 4.31769 17.5092 4.41621 17.6285 4.41621L19.1562 4.41622C19.2169 4.41566 19.2705 4.39117 19.3094 4.35165ZM18.9406 2.86205L18.9406 3.97646L17.8452 3.97645L17.8452 2.86205L18.9406 2.86205Z' fill='url(#paint8_linear_40_3267)' />
                                        <path d='M20.8371 2.79743C20.876 2.75791 20.9006 2.7028 20.9 2.64213L20.9 1.08797C20.9 0.966618 20.8032 0.868098 20.6839 0.868098L19.1562 0.868089C19.0369 0.868089 18.9401 0.96661 18.9401 1.08796L18.9401 2.64214C18.9401 2.76349 19.0369 2.86201 19.1562 2.86201L20.6839 2.862C20.7441 2.862 20.7977 2.83751 20.8371 2.79743ZM20.4683 1.30785L20.4683 2.42224L19.3729 2.42225L19.3729 1.30784L20.4683 1.30785Z' fill='#C0C0C0' />
                                        <path d='M20.8371 2.79743C20.876 2.75791 20.9006 2.7028 20.9 2.64213L20.9 1.08797C20.9 0.966618 20.8032 0.868098 20.6839 0.868098L19.1562 0.868089C19.0369 0.868089 18.9401 0.96661 18.9401 1.08796L18.9401 2.64214C18.9401 2.76349 19.0369 2.86201 19.1562 2.86201L20.6839 2.862C20.7441 2.862 20.7977 2.83751 20.8371 2.79743ZM20.4683 1.30785L20.4683 2.42224L19.3729 2.42225L19.3729 1.30784L20.4683 1.30785Z' fill='url(#paint9_linear_40_3267)' />
                                        <path d='M4.87739 23.3846C6.98288 21.2426 6.98288 17.758 4.87739 15.616C4.79313 15.5303 4.65634 15.5303 4.57208 15.616C4.48781 15.7017 4.48782 15.8409 4.57209 15.9266C6.50904 17.8971 6.50903 21.1034 4.57208 23.074C4.48781 23.1597 4.48782 23.2988 4.57209 23.3846C4.65635 23.4703 4.79258 23.4708 4.87739 23.3846Z' fill='#C0C0C0' />
                                        <path d='M4.87739 23.3846C6.98288 21.2426 6.98288 17.758 4.87739 15.616C4.79313 15.5303 4.65634 15.5303 4.57208 15.616C4.48781 15.7017 4.48782 15.8409 4.57209 15.9266C6.50904 17.8971 6.50903 21.1034 4.57208 23.074C4.48781 23.1597 4.48782 23.2988 4.57209 23.3846C4.65635 23.4703 4.79258 23.4708 4.87739 23.3846Z' fill='url(#paint10_linear_40_3267)' />
                                        <path d='M3.75513 22.2429L6.29835 19.6556C6.38262 19.5698 6.38261 19.4307 6.29834 19.345L3.75458 16.7571C3.67032 16.6714 3.53354 16.6714 3.44927 16.7571L0.906056 19.3444C0.821793 19.4301 0.821793 19.5693 0.906056 19.655L3.44982 22.2429C3.53353 22.3291 3.67032 22.3292 3.75513 22.2429ZM5.83983 19.5008L3.60194 21.7775L1.36404 19.5008L3.60194 17.2241L5.83983 19.5008Z' fill='#C0C0C0' />
                                        <path d='M3.75513 22.2429L6.29835 19.6556C6.38262 19.5698 6.38261 19.4307 6.29834 19.345L3.75458 16.7571C3.67032 16.6714 3.53354 16.6714 3.44927 16.7571L0.906056 19.3444C0.821793 19.4301 0.821793 19.5693 0.906056 19.655L3.44982 22.2429C3.53353 22.3291 3.67032 22.3292 3.75513 22.2429ZM5.83983 19.5008L3.60194 21.7775L1.36404 19.5008L3.60194 17.2241L5.83983 19.5008Z' fill='url(#paint11_linear_40_3267)' />
                                        <defs>
                                            <linearGradient id='paint0_linear_40_3267' x1='4.57159' y1='23.0734' x2='16.4559' y2='34.7552' gradientUnits='userSpaceOnUse'>
                                                <stop stopColor='white' />
                                                <stop offset='1' stopColor='#C0C0C0' />
                                            </linearGradient>
                                            <linearGradient id='paint1_linear_40_3267' x1='5.85954' y1='21.2765' x2='17.9871' y2='33.1974' gradientUnits='userSpaceOnUse'>
                                                <stop stopColor='white' />
                                                <stop offset='1' stopColor='#C0C0C0' />
                                            </linearGradient>
                                            <linearGradient id='paint2_linear_40_3267' x1='16.7127' y1='33.8719' x2='17.8006' y2='34.9414' gradientUnits='userSpaceOnUse'>
                                                <stop stopColor='white' />
                                                <stop offset='1' stopColor='#C0C0C0' />
                                            </linearGradient>
                                            <linearGradient id='paint3_linear_40_3267' x1='17.4757' y1='34.6487' x2='19.3406' y2='36.4818' gradientUnits='userSpaceOnUse'>
                                                <stop stopColor='white' />
                                                <stop offset='1' stopColor='#C0C0C0' />
                                            </linearGradient>
                                            <linearGradient id='paint4_linear_40_3267' x1='19.0028' y1='36.2023' x2='20.8677' y2='38.0354' gradientUnits='userSpaceOnUse'>
                                                <stop stopColor='white' />
                                                <stop offset='1' stopColor='#C0C0C0' />
                                            </linearGradient>
                                            <linearGradient id='paint5_linear_40_3267' x1='10.2608' y1='9.82879' x2='10.5713' y2='10.1341' gradientUnits='userSpaceOnUse'>
                                                <stop stopColor='white' />
                                                <stop offset='1' stopColor='#C0C0C0' />
                                            </linearGradient>
                                            <linearGradient id='paint6_linear_40_3267' x1='11.6519' y1='11.5207' x2='11.9625' y2='11.826' gradientUnits='userSpaceOnUse'>
                                                <stop stopColor='white' />
                                                <stop offset='1' stopColor='#C0C0C0' />
                                            </linearGradient>
                                            <linearGradient id='paint7_linear_40_3267' x1='16.3305' y1='3.65177' x2='18.1954' y2='5.48491' gradientUnits='userSpaceOnUse'>
                                                <stop stopColor='white' />
                                                <stop offset='1' stopColor='#C0C0C0' />
                                            </linearGradient>
                                            <linearGradient id='paint8_linear_40_3267' x1='17.4757' y1='2.48673' x2='19.3406' y2='4.31987' gradientUnits='userSpaceOnUse'>
                                                <stop stopColor='white' />
                                                <stop offset='1' stopColor='#C0C0C0' />
                                            </linearGradient>
                                            <linearGradient id='paint9_linear_40_3267' x1='19.0034' y1='0.932527' x2='20.8683' y2='2.76567' gradientUnits='userSpaceOnUse'>
                                                <stop stopColor='white' />
                                                <stop offset='1' stopColor='#C0C0C0' />
                                            </linearGradient>
                                            <linearGradient id='paint10_linear_40_3267' x1='2.73935' y1='17.4805' x2='6.77835' y2='21.4507' gradientUnits='userSpaceOnUse'>
                                                <stop stopColor='white' />
                                                <stop offset='1' stopColor='#C0C0C0' />
                                            </linearGradient>
                                            <linearGradient id='paint11_linear_40_3267' x1='2.17766' y1='18.0508' x2='5.0757' y2='20.8994' gradientUnits='userSpaceOnUse'>
                                                <stop stopColor='white' />
                                                <stop offset='1' stopColor='#C0C0C0' />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </a>
                                <a>
                                    <svg width='22' height='39' viewBox='0 0 22 39' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                        <path d='M6.25168 34.9595C6.16741 34.8738 6.16742 34.7346 6.25169 34.6489L17.6299 23.0734C17.7142 22.9877 17.851 22.9877 17.9352 23.0734C18.0195 23.1591 18.0195 23.2983 17.9352 23.384L6.55699 34.9595C6.47273 35.0463 6.33649 35.0458 6.25168 34.9595Z' fill='#C0C0C0' />
                                        <path d='M6.25168 34.9595C6.16741 34.8738 6.16742 34.7346 6.25169 34.6489L17.6299 23.0734C17.7142 22.9877 17.851 22.9877 17.9352 23.0734C18.0195 23.1591 18.0195 23.2983 17.9352 23.384L6.55699 34.9595C6.47273 35.0463 6.33649 35.0458 6.25168 34.9595Z' fill='url(#paint0_linear_40_3239)' />
                                        <path d='M4.7246 33.4059C4.64033 33.3201 4.64034 33.181 4.7246 33.0953L16.342 21.2765C16.4262 21.1908 16.563 21.1908 16.6473 21.2765C16.7315 21.3622 16.7316 21.5014 16.6473 21.5871L5.02993 33.4059C4.94512 33.4922 4.80941 33.4921 4.7246 33.4059Z' fill='#C0C0C0' />
                                        <path d='M4.7246 33.4059C4.64033 33.3201 4.64034 33.181 4.7246 33.0953L16.342 21.2765C16.4262 21.1908 16.563 21.1908 16.6473 21.2765C16.7315 21.3622 16.7316 21.5014 16.6473 21.5871L5.02993 33.4059C4.94512 33.4922 4.80941 33.4921 4.7246 33.4059Z' fill='url(#paint1_linear_40_3239)' />
                                        <path d='M4.72459 34.96C4.68575 34.9205 4.66113 34.8654 4.66168 34.8047L4.66168 33.2506C4.66168 33.1292 4.75853 33.0307 4.87781 33.0307C4.99709 33.0307 5.09393 33.1292 5.09393 33.2506L5.09393 34.5843L6.40493 34.5843C6.52421 34.5843 6.62107 34.6828 6.62107 34.8042C6.62107 34.9255 6.52422 35.0241 6.40494 35.0241L4.87726 35.0241C4.81762 35.0246 4.76344 34.9996 4.72459 34.96Z' fill='#C0C0C0' />
                                        <path d='M4.72459 34.96C4.68575 34.9205 4.66113 34.8654 4.66168 34.8047L4.66168 33.2506C4.66168 33.1292 4.75853 33.0307 4.87781 33.0307C4.99709 33.0307 5.09393 33.1292 5.09393 33.2506L5.09393 34.5843L6.40493 34.5843C6.52421 34.5843 6.62107 34.6828 6.62107 34.8042C6.62107 34.9255 6.52422 35.0241 6.40494 35.0241L4.87726 35.0241C4.81762 35.0246 4.76344 34.9996 4.72459 34.96Z' fill='url(#paint2_linear_40_3239)' />
                                        <path d='M3.19745 36.5136C3.1586 36.4741 3.13399 36.419 3.13453 36.3583L3.13453 34.8042C3.13453 34.6828 3.23138 34.5843 3.35066 34.5843L4.87834 34.5843C4.99762 34.5843 5.09446 34.6828 5.09446 34.8041L5.09448 36.3583C5.09448 36.4797 4.99763 36.5782 4.87835 36.5782L3.35066 36.5782C3.29047 36.5782 3.2363 36.5531 3.19745 36.5136ZM3.56625 35.024L3.56624 36.1384L4.66166 36.1384L4.66166 35.024L3.56625 35.024Z' fill='#C0C0C0' />
                                        <path d='M3.19745 36.5136C3.1586 36.4741 3.13399 36.419 3.13453 36.3583L3.13453 34.8042C3.13453 34.6828 3.23138 34.5843 3.35066 34.5843L4.87834 34.5843C4.99762 34.5843 5.09446 34.6828 5.09446 34.8041L5.09448 36.3583C5.09448 36.4797 4.99763 36.5782 4.87835 36.5782L3.35066 36.5782C3.29047 36.5782 3.2363 36.5531 3.19745 36.5136ZM3.56625 35.024L3.56624 36.1384L4.66166 36.1384L4.66166 35.024L3.56625 35.024Z' fill='url(#paint3_linear_40_3239)' />
                                        <path d='M1.67035 38.0672C1.6315 38.0277 1.60689 37.9726 1.60743 37.9119L1.60743 36.3577C1.60743 36.2364 1.70428 36.1379 1.82356 36.1379L3.35124 36.1379C3.47052 36.1379 3.56736 36.2364 3.56736 36.3577L3.56738 37.9119C3.56738 38.0333 3.47053 38.1318 3.35125 38.1318L1.82356 38.1318C1.76337 38.1318 1.7092 38.1067 1.67035 38.0672ZM2.0386 36.5782L2.03859 37.6926L3.13401 37.6926L3.13401 36.5782L2.0386 36.5782Z' fill='#C0C0C0' />
                                        <path d='M1.67035 38.0672C1.6315 38.0277 1.60689 37.9726 1.60743 37.9119L1.60743 36.3577C1.60743 36.2364 1.70428 36.1379 1.82356 36.1379L3.35124 36.1379C3.47052 36.1379 3.56736 36.2364 3.56736 36.3577L3.56738 37.9119C3.56738 38.0333 3.47053 38.1318 3.35125 38.1318L1.82356 38.1318C1.76337 38.1318 1.7092 38.1067 1.67035 38.0672ZM2.0386 36.5782L2.03859 37.6926L3.13401 37.6926L3.13401 36.5782L2.0386 36.5782Z' fill='url(#paint4_linear_40_3239)' />
                                        <path d='M17.6299 15.9271L6.25163 4.35166C6.16736 4.26594 6.16737 4.12677 6.25163 4.04105C6.3359 3.95533 6.47269 3.95532 6.55695 4.04104L17.9352 15.6165C18.0195 15.7023 18.0195 15.8414 17.9352 15.9271C17.8509 16.0129 17.7142 16.0129 17.6299 15.9271Z' fill='#C0C0C0' />
                                        <path d='M17.6299 15.9271L6.25163 4.35166C6.16736 4.26594 6.16737 4.12677 6.25163 4.04105C6.3359 3.95533 6.47269 3.95532 6.55695 4.04104L17.9352 15.6165C18.0195 15.7023 18.0195 15.8414 17.9352 15.9271C17.8509 16.0129 17.7142 16.0129 17.6299 15.9271Z' fill='url(#paint5_linear_40_3239)' />
                                        <path d='M16.3747 17.7574L4.72453 5.90525C4.64026 5.81952 4.64027 5.68036 4.72453 5.59464C4.8088 5.50892 4.94559 5.50891 5.02985 5.59463L16.68 17.4468C16.7643 17.5325 16.7643 17.6717 16.68 17.7574C16.5958 17.8431 16.4595 17.8437 16.3747 17.7574Z' fill='#C0C0C0' />
                                        <path d='M16.3747 17.7574L4.72453 5.90525C4.64026 5.81952 4.64027 5.68036 4.72453 5.59464C4.8088 5.50892 4.94559 5.50891 5.02985 5.59463L16.68 17.4468C16.7643 17.5325 16.7643 17.6717 16.68 17.7574C16.5958 17.8431 16.4595 17.8437 16.3747 17.7574Z' fill='url(#paint6_linear_40_3239)' />
                                        <path d='M4.72454 5.90522C4.68569 5.8657 4.66108 5.81059 4.66162 5.74992L4.66163 4.19576C4.66163 4.07441 4.75847 3.97589 4.87776 3.97589L6.40544 3.97588C6.52472 3.97588 6.62156 4.0744 6.62156 4.19575C6.62156 4.3171 6.52471 4.41562 6.40543 4.41562L5.09443 4.41562L5.09443 5.74935C5.09443 5.8707 4.99758 5.96923 4.8783 5.96923C4.81756 5.96978 4.76339 5.94474 4.72454 5.90522Z' fill='#C0C0C0' />
                                        <path d='M4.72454 5.90522C4.68569 5.8657 4.66108 5.81059 4.66162 5.74992L4.66163 4.19576C4.66163 4.07441 4.75847 3.97589 4.87776 3.97589L6.40544 3.97588C6.52472 3.97588 6.62156 4.0744 6.62156 4.19575C6.62156 4.3171 6.52471 4.41562 6.40543 4.41562L5.09443 4.41562L5.09443 5.74935C5.09443 5.8707 4.99758 5.96923 4.8783 5.96923C4.81756 5.96978 4.76339 5.94474 4.72454 5.90522Z' fill='url(#paint7_linear_40_3239)' />
                                        <path d='M3.19746 4.35165C3.15806 4.31157 3.13398 4.257 3.13452 4.19633L3.13453 2.64217C3.13453 2.52082 3.23137 2.4223 3.35066 2.4223L4.87834 2.42229C4.99762 2.42229 5.09448 2.52083 5.09448 2.64217L5.09447 4.19634C5.09447 4.31769 4.99763 4.41621 4.87835 4.41621L3.35066 4.41622C3.28993 4.41566 3.23631 4.39117 3.19746 4.35165ZM3.56625 2.86205L3.56625 3.97646L4.66166 3.97645L4.66167 2.86205L3.56625 2.86205Z' fill='#C0C0C0' />
                                        <path d='M3.19746 4.35165C3.15806 4.31157 3.13398 4.257 3.13452 4.19633L3.13453 2.64217C3.13453 2.52082 3.23137 2.4223 3.35066 2.4223L4.87834 2.42229C4.99762 2.42229 5.09448 2.52083 5.09448 2.64217L5.09447 4.19634C5.09447 4.31769 4.99763 4.41621 4.87835 4.41621L3.35066 4.41622C3.28993 4.41566 3.23631 4.39117 3.19746 4.35165ZM3.56625 2.86205L3.56625 3.97646L4.66166 3.97645L4.66167 2.86205L3.56625 2.86205Z' fill='url(#paint8_linear_40_3239)' />
                                        <path d='M1.66973 2.79743C1.63088 2.75791 1.60627 2.7028 1.60681 2.64213L1.60682 1.08797C1.60682 0.966618 1.70366 0.868098 1.82295 0.868098L3.35063 0.868089C3.46991 0.868089 3.56675 0.96661 3.56675 1.08796L3.56676 2.64214C3.56676 2.76349 3.46992 2.86201 3.35064 2.86201L1.82294 2.862C1.76275 2.862 1.70913 2.83751 1.66973 2.79743ZM2.03854 1.30785L2.03853 2.42224L3.13395 2.42225L3.13395 1.30784L2.03854 1.30785Z' fill='#C0C0C0' />
                                        <path d='M1.66973 2.79743C1.63088 2.75791 1.60627 2.7028 1.60681 2.64213L1.60682 1.08797C1.60682 0.966618 1.70366 0.868098 1.82295 0.868098L3.35063 0.868089C3.46991 0.868089 3.56675 0.96661 3.56675 1.08796L3.56676 2.64214C3.56676 2.76349 3.46992 2.86201 3.35064 2.86201L1.82294 2.862C1.76275 2.862 1.70913 2.83751 1.66973 2.79743ZM2.03854 1.30785L2.03853 2.42224L3.13395 2.42225L3.13395 1.30784L2.03854 1.30785Z' fill='url(#paint9_linear_40_3239)' />
                                        <path d='M17.6294 23.3846C15.524 21.2426 15.524 17.758 17.6294 15.616C17.7137 15.5303 17.8505 15.5303 17.9348 15.616C18.019 15.7017 18.019 15.8409 17.9348 15.9266C15.9978 17.8971 15.9978 21.1034 17.9348 23.074C18.019 23.1597 18.019 23.2988 17.9348 23.3846C17.8505 23.4703 17.7143 23.4708 17.6294 23.3846Z' fill='#C0C0C0' />
                                        <path d='M17.6294 23.3846C15.524 21.2426 15.524 17.758 17.6294 15.616C17.7137 15.5303 17.8505 15.5303 17.9348 15.616C18.019 15.7017 18.019 15.8409 17.9348 15.9266C15.9978 17.8971 15.9978 21.1034 17.9348 23.074C18.019 23.1597 18.019 23.2988 17.9348 23.3846C17.8505 23.4703 17.7143 23.4708 17.6294 23.3846Z' fill='url(#paint10_linear_40_3239)' />
                                        <path d='M18.7517 22.2429L16.2085 19.6556C16.1242 19.5698 16.1242 19.4307 16.2085 19.345L18.7523 16.7571C18.8365 16.6714 18.9733 16.6714 19.0576 16.7571L21.6008 19.3444C21.685 19.4301 21.685 19.5693 21.6008 19.655L19.057 22.2429C18.9733 22.3291 18.8365 22.3292 18.7517 22.2429ZM16.667 19.5008L18.9049 21.7775L21.1428 19.5008L18.9049 17.2241L16.667 19.5008Z' fill='#C0C0C0' />
                                        <path d='M18.7517 22.2429L16.2085 19.6556C16.1242 19.5698 16.1242 19.4307 16.2085 19.345L18.7523 16.7571C18.8365 16.6714 18.9733 16.6714 19.0576 16.7571L21.6008 19.3444C21.685 19.4301 21.685 19.5693 21.6008 19.655L19.057 22.2429C18.9733 22.3291 18.8365 22.3292 18.7517 22.2429ZM16.667 19.5008L18.9049 21.7775L21.1428 19.5008L18.9049 17.2241L16.667 19.5008Z' fill='url(#paint11_linear_40_3239)' />
                                        <defs>
                                            <linearGradient id='paint0_linear_40_3239' x1='17.9352' y1='23.0734' x2='6.05092' y2='34.7552' gradientUnits='userSpaceOnUse'>
                                                <stop stopColor='white' />
                                                <stop offset='1' stopColor='#C0C0C0' />
                                            </linearGradient>
                                            <linearGradient id='paint1_linear_40_3239' x1='16.6473' y1='21.2765' x2='4.51973' y2='33.1974' gradientUnits='userSpaceOnUse'>
                                                <stop stopColor='white' />
                                                <stop offset='1' stopColor='#C0C0C0' />
                                            </linearGradient>
                                            <linearGradient id='paint2_linear_40_3239' x1='5.79417' y1='33.8719' x2='4.70622' y2='34.9414' gradientUnits='userSpaceOnUse'>
                                                <stop stopColor='white' />
                                                <stop offset='1' stopColor='#C0C0C0' />
                                            </linearGradient>
                                            <linearGradient id='paint3_linear_40_3239' x1='5.03114' y1='34.6487' x2='3.16623' y2='36.4818' gradientUnits='userSpaceOnUse'>
                                                <stop stopColor='white' />
                                                <stop offset='1' stopColor='#C0C0C0' />
                                            </linearGradient>
                                            <linearGradient id='paint4_linear_40_3239' x1='3.50404' y1='36.2023' x2='1.63913' y2='38.0354' gradientUnits='userSpaceOnUse'>
                                                <stop stopColor='white' />
                                                <stop offset='1' stopColor='#C0C0C0' />
                                            </linearGradient>
                                            <linearGradient id='paint5_linear_40_3239' x1='12.2461' y1='9.82879' x2='11.9355' y2='10.1341' gradientUnits='userSpaceOnUse'>
                                                <stop stopColor='white' />
                                                <stop offset='1' stopColor='#C0C0C0' />
                                            </linearGradient>
                                            <linearGradient id='paint6_linear_40_3239' x1='10.855' y1='11.5207' x2='10.5444' y2='11.826' gradientUnits='userSpaceOnUse'>
                                                <stop stopColor='white' />
                                                <stop offset='1' stopColor='#C0C0C0' />
                                            </linearGradient>
                                            <linearGradient id='paint7_linear_40_3239' x1='6.17631' y1='3.65177' x2='4.3114' y2='5.48491' gradientUnits='userSpaceOnUse'>
                                                <stop stopColor='white' />
                                                <stop offset='1' stopColor='#C0C0C0' />
                                            </linearGradient>
                                            <linearGradient id='paint8_linear_40_3239' x1='5.03114' y1='2.48673' x2='3.16622' y2='4.31987' gradientUnits='userSpaceOnUse'>
                                                <stop stopColor='white' />
                                                <stop offset='1' stopColor='#C0C0C0' />
                                            </linearGradient>
                                            <linearGradient id='paint9_linear_40_3239' x1='3.50343' y1='0.932527' x2='1.63851' y2='2.76567' gradientUnits='userSpaceOnUse'>
                                                <stop stopColor='white' />
                                                <stop offset='1' stopColor='#C0C0C0' />
                                            </linearGradient>
                                            <linearGradient id='paint10_linear_40_3239' x1='19.7675' y1='17.4805' x2='15.7285' y2='21.4507' gradientUnits='userSpaceOnUse'>
                                                <stop stopColor='white' />
                                                <stop offset='1' stopColor='#C0C0C0' />
                                            </linearGradient>
                                            <linearGradient id='paint11_linear_40_3239' x1='20.3292' y1='18.0508' x2='17.4311' y2='20.8994' gradientUnits='userSpaceOnUse'>
                                                <stop stopColor='white' />
                                                <stop offset='1' stopColor='#C0C0C0' />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className='about-the-countries__block-countries'>
                            {countries.slice(0, 4).map((country, index) => {
                                return (
                                    <div key={country.id} className={'about-the-countries__block-country' + (index % 2 === 0 ? ' about-the-countries__block-country--even' : ' about-the-countries__block-country--odd')}>
                                        <img src='favicon.ico' alt='' className='about-the-countries__image-country' />
                                        <div className='about-the-countries__block-text-country'>
                                            <span className='about-the-countries__text-title'>{country.name}</span>
                                            <svg height='6' viewBox='0 0 515 6' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                <path d='M0.866667 3L3.75342 5.88675L6.64017 3L3.75342 0.113249L0.866667 3ZM514.64 3.00004L511.753 0.113293L508.867 3.00004L511.753 5.8868L514.64 3.00004ZM3.75342 3L3.75342 3.5L511.753 3.50004L511.753 3.00004L511.753 2.50004L3.75342 2.5L3.75342 3Z' fill='#C0C0C0' fillOpacity='0.4' />
                                            </svg>
                                            <span>{country.description}</span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='about-the-countries__block-pagination'>
                            {pagination.map(x => {
                                return (
                                    x.active
                                        ? <svg key={x.id} width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="11.3137" width="16" height="16" transform="rotate(45 11.3137 0)" fill="white" />
                                        </svg>
                                        : <svg key={x.id} width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="12.0208" y="0.707107" width="15" height="15" transform="rotate(45 12.0208 0.707107)" stroke="white" />
                                        </svg>
                                )
                            })}
                        </div>
                        <div className='about-the-countries__block-button'>
                            <a className='base__button'>Интерактивная карта</a>
                        </div>
                    </div>
                    <div className='call-to-action__block'>
                        <div className='call-to-action__block-inner'>
                            <div className='call-to-action__block-title'>
                                <span>Начните играть</span>
                                <span className='call-to-action__text-title'>СЕЙЧАС</span>
                            </div>
                            <span>Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, вставляемый в макет страницы). Используется для образца шрифта и текста, а также для заполнения полей на странице.</span>
                            <a className='base__button'>Пройти регистрацию</a>
                        </div>
                    </div>
                    <div className='about-the-characters__block'>
                        <span className='about-the-characters__text-title'>Персонажи</span>
                        <div className='about-the-characters__block-description'>
                            <span className='about-the-characters__text-description'>Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, вставляемый в макет страницы). Используется для образца шрифта и текста, а также для заполнения полей на странице.</span>
                            <div className='about-the-characters__block-actions'>
                                <a>
                                    <svg width='22' height='39' viewBox='0 0 22 39' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                        <path d='M16.2552 34.9595C16.3394 34.8738 16.3394 34.7346 16.2552 34.6489L4.8769 23.0734C4.79263 22.9877 4.65585 22.9877 4.57159 23.0734C4.48733 23.1591 4.48733 23.2983 4.57159 23.384L15.9498 34.9595C16.0341 35.0463 16.1703 35.0458 16.2552 34.9595Z' fill='#C0C0C0' />
                                        <path d='M16.2552 34.9595C16.3394 34.8738 16.3394 34.7346 16.2552 34.6489L4.8769 23.0734C4.79263 22.9877 4.65585 22.9877 4.57159 23.0734C4.48733 23.1591 4.48733 23.2983 4.57159 23.384L15.9498 34.9595C16.0341 35.0463 16.1703 35.0458 16.2552 34.9595Z' fill='url(#paint0_linear_40_3267)' />
                                        <path d='M17.7822 33.4059C17.8665 33.3201 17.8665 33.181 17.7822 33.0953L6.16487 21.2765C6.08061 21.1908 5.94382 21.1908 5.85955 21.2765C5.77529 21.3622 5.77528 21.5014 5.85954 21.5871L17.4769 33.4059C17.5617 33.4922 17.6974 33.4921 17.7822 33.4059Z' fill='#C0C0C0' />
                                        <path d='M17.7822 33.4059C17.8665 33.3201 17.8665 33.181 17.7822 33.0953L6.16487 21.2765C6.08061 21.1908 5.94382 21.1908 5.85955 21.2765C5.77529 21.3622 5.77528 21.5014 5.85954 21.5871L17.4769 33.4059C17.5617 33.4922 17.6974 33.4921 17.7822 33.4059Z' fill='url(#paint1_linear_40_3267)' />
                                        <path d='M17.7822 34.96C17.8211 34.9205 17.8457 34.8654 17.8452 34.8047L17.8452 33.2506C17.8452 33.1292 17.7483 33.0307 17.629 33.0307C17.5097 33.0307 17.4129 33.1292 17.4129 33.2506L17.4129 34.5843L16.1019 34.5843C15.9826 34.5843 15.8858 34.6828 15.8858 34.8042C15.8858 34.9255 15.9826 35.0241 16.1019 35.0241L17.6296 35.0241C17.6892 35.0246 17.7434 34.9996 17.7822 34.96Z' fill='#C0C0C0' />
                                        <path d='M17.7822 34.96C17.8211 34.9205 17.8457 34.8654 17.8452 34.8047L17.8452 33.2506C17.8452 33.1292 17.7483 33.0307 17.629 33.0307C17.5097 33.0307 17.4129 33.1292 17.4129 33.2506L17.4129 34.5843L16.1019 34.5843C15.9826 34.5843 15.8858 34.6828 15.8858 34.8042C15.8858 34.9255 15.9826 35.0241 16.1019 35.0241L17.6296 35.0241C17.6892 35.0246 17.7434 34.9996 17.7822 34.96Z' fill='url(#paint2_linear_40_3267)' />
                                        <path d='M19.3094 36.5136C19.3482 36.4741 19.3729 36.419 19.3723 36.3583L19.3723 34.8042C19.3723 34.6828 19.2755 34.5843 19.1562 34.5843L17.6285 34.5843C17.5092 34.5843 17.4124 34.6828 17.4124 34.8041L17.4124 36.3583C17.4124 36.4797 17.5092 36.5782 17.6285 36.5782L19.1562 36.5782C19.2164 36.5782 19.2705 36.5531 19.3094 36.5136ZM18.9406 35.024L18.9406 36.1384L17.8452 36.1384L17.8452 35.024L18.9406 35.024Z' fill='#C0C0C0' />
                                        <path d='M19.3094 36.5136C19.3482 36.4741 19.3729 36.419 19.3723 36.3583L19.3723 34.8042C19.3723 34.6828 19.2755 34.5843 19.1562 34.5843L17.6285 34.5843C17.5092 34.5843 17.4124 34.6828 17.4124 34.8041L17.4124 36.3583C17.4124 36.4797 17.5092 36.5782 17.6285 36.5782L19.1562 36.5782C19.2164 36.5782 19.2705 36.5531 19.3094 36.5136ZM18.9406 35.024L18.9406 36.1384L17.8452 36.1384L17.8452 35.024L18.9406 35.024Z' fill='url(#paint3_linear_40_3267)' />
                                        <path d='M20.8365 38.0672C20.8753 38.0277 20.8999 37.9726 20.8994 37.9119L20.8994 36.3577C20.8994 36.2364 20.8026 36.1379 20.6833 36.1379L19.1556 36.1379C19.0363 36.1379 18.9395 36.2364 18.9395 36.3577L18.9395 37.9119C18.9395 38.0333 19.0363 38.1318 19.1556 38.1318L20.6833 38.1318C20.7435 38.1318 20.7976 38.1067 20.8365 38.0672ZM20.4682 36.5782L20.4682 37.6926L19.3728 37.6926L19.3728 36.5782L20.4682 36.5782Z' fill='#C0C0C0' />
                                        <path d='M20.8365 38.0672C20.8753 38.0277 20.8999 37.9726 20.8994 37.9119L20.8994 36.3577C20.8994 36.2364 20.8026 36.1379 20.6833 36.1379L19.1556 36.1379C19.0363 36.1379 18.9395 36.2364 18.9395 36.3577L18.9395 37.9119C18.9395 38.0333 19.0363 38.1318 19.1556 38.1318L20.6833 38.1318C20.7435 38.1318 20.7976 38.1067 20.8365 38.0672ZM20.4682 36.5782L20.4682 37.6926L19.3728 37.6926L19.3728 36.5782L20.4682 36.5782Z' fill='url(#paint4_linear_40_3267)' />
                                        <path d='M4.87695 15.9271L16.2552 4.35166C16.3395 4.26594 16.3395 4.12677 16.2552 4.04105C16.1709 3.95533 16.0341 3.95532 15.9499 4.04104L4.57162 15.6165C4.48736 15.7023 4.48737 15.8414 4.57163 15.9271C4.65589 16.0129 4.79268 16.0129 4.87695 15.9271Z' fill='#C0C0C0' />
                                        <path d='M4.87695 15.9271L16.2552 4.35166C16.3395 4.26594 16.3395 4.12677 16.2552 4.04105C16.1709 3.95533 16.0341 3.95532 15.9499 4.04104L4.57162 15.6165C4.48736 15.7023 4.48737 15.8414 4.57163 15.9271C4.65589 16.0129 4.79268 16.0129 4.87695 15.9271Z' fill='url(#paint5_linear_40_3267)' />
                                        <path d='M6.13212 17.7574L17.7823 5.90525C17.8666 5.81952 17.8666 5.68036 17.7823 5.59464C17.698 5.50892 17.5612 5.50891 17.477 5.59463L5.8268 17.4468C5.74253 17.5325 5.74252 17.6717 5.82679 17.7574C5.91105 17.8431 6.04731 17.8437 6.13212 17.7574Z' fill='#C0C0C0' />
                                        <path d='M6.13212 17.7574L17.7823 5.90525C17.8666 5.81952 17.8666 5.68036 17.7823 5.59464C17.698 5.50892 17.5612 5.50891 17.477 5.59463L5.8268 17.4468C5.74253 17.5325 5.74252 17.6717 5.82679 17.7574C5.91105 17.8431 6.04731 17.8437 6.13212 17.7574Z' fill='url(#paint6_linear_40_3267)' />
                                        <path d='M17.7823 5.90522C17.8211 5.8657 17.8458 5.81059 17.8452 5.74992L17.8452 4.19576C17.8452 4.07441 17.7484 3.97589 17.6291 3.97589L16.1014 3.97588C15.9821 3.97588 15.8853 4.0744 15.8853 4.19575C15.8853 4.3171 15.9821 4.41562 16.1014 4.41562L17.4124 4.41562L17.4124 5.74935C17.4124 5.8707 17.5093 5.96923 17.6285 5.96923C17.6893 5.96978 17.7434 5.94474 17.7823 5.90522Z' fill='#C0C0C0' />
                                        <path d='M17.7823 5.90522C17.8211 5.8657 17.8458 5.81059 17.8452 5.74992L17.8452 4.19576C17.8452 4.07441 17.7484 3.97589 17.6291 3.97589L16.1014 3.97588C15.9821 3.97588 15.8853 4.0744 15.8853 4.19575C15.8853 4.3171 15.9821 4.41562 16.1014 4.41562L17.4124 4.41562L17.4124 5.74935C17.4124 5.8707 17.5093 5.96923 17.6285 5.96923C17.6893 5.96978 17.7434 5.94474 17.7823 5.90522Z' fill='url(#paint7_linear_40_3267)' />
                                        <path d='M19.3094 4.35165C19.3488 4.31157 19.3729 4.257 19.3723 4.19633L19.3723 2.64217C19.3723 2.52082 19.2755 2.4223 19.1562 2.4223L17.6285 2.42229C17.5092 2.42229 17.4124 2.52083 17.4124 2.64217L17.4124 4.19634C17.4124 4.31769 17.5092 4.41621 17.6285 4.41621L19.1562 4.41622C19.2169 4.41566 19.2705 4.39117 19.3094 4.35165ZM18.9406 2.86205L18.9406 3.97646L17.8452 3.97645L17.8452 2.86205L18.9406 2.86205Z' fill='#C0C0C0' />
                                        <path d='M19.3094 4.35165C19.3488 4.31157 19.3729 4.257 19.3723 4.19633L19.3723 2.64217C19.3723 2.52082 19.2755 2.4223 19.1562 2.4223L17.6285 2.42229C17.5092 2.42229 17.4124 2.52083 17.4124 2.64217L17.4124 4.19634C17.4124 4.31769 17.5092 4.41621 17.6285 4.41621L19.1562 4.41622C19.2169 4.41566 19.2705 4.39117 19.3094 4.35165ZM18.9406 2.86205L18.9406 3.97646L17.8452 3.97645L17.8452 2.86205L18.9406 2.86205Z' fill='url(#paint8_linear_40_3267)' />
                                        <path d='M20.8371 2.79743C20.876 2.75791 20.9006 2.7028 20.9 2.64213L20.9 1.08797C20.9 0.966618 20.8032 0.868098 20.6839 0.868098L19.1562 0.868089C19.0369 0.868089 18.9401 0.96661 18.9401 1.08796L18.9401 2.64214C18.9401 2.76349 19.0369 2.86201 19.1562 2.86201L20.6839 2.862C20.7441 2.862 20.7977 2.83751 20.8371 2.79743ZM20.4683 1.30785L20.4683 2.42224L19.3729 2.42225L19.3729 1.30784L20.4683 1.30785Z' fill='#C0C0C0' />
                                        <path d='M20.8371 2.79743C20.876 2.75791 20.9006 2.7028 20.9 2.64213L20.9 1.08797C20.9 0.966618 20.8032 0.868098 20.6839 0.868098L19.1562 0.868089C19.0369 0.868089 18.9401 0.96661 18.9401 1.08796L18.9401 2.64214C18.9401 2.76349 19.0369 2.86201 19.1562 2.86201L20.6839 2.862C20.7441 2.862 20.7977 2.83751 20.8371 2.79743ZM20.4683 1.30785L20.4683 2.42224L19.3729 2.42225L19.3729 1.30784L20.4683 1.30785Z' fill='url(#paint9_linear_40_3267)' />
                                        <path d='M4.87739 23.3846C6.98288 21.2426 6.98288 17.758 4.87739 15.616C4.79313 15.5303 4.65634 15.5303 4.57208 15.616C4.48781 15.7017 4.48782 15.8409 4.57209 15.9266C6.50904 17.8971 6.50903 21.1034 4.57208 23.074C4.48781 23.1597 4.48782 23.2988 4.57209 23.3846C4.65635 23.4703 4.79258 23.4708 4.87739 23.3846Z' fill='#C0C0C0' />
                                        <path d='M4.87739 23.3846C6.98288 21.2426 6.98288 17.758 4.87739 15.616C4.79313 15.5303 4.65634 15.5303 4.57208 15.616C4.48781 15.7017 4.48782 15.8409 4.57209 15.9266C6.50904 17.8971 6.50903 21.1034 4.57208 23.074C4.48781 23.1597 4.48782 23.2988 4.57209 23.3846C4.65635 23.4703 4.79258 23.4708 4.87739 23.3846Z' fill='url(#paint10_linear_40_3267)' />
                                        <path d='M3.75513 22.2429L6.29835 19.6556C6.38262 19.5698 6.38261 19.4307 6.29834 19.345L3.75458 16.7571C3.67032 16.6714 3.53354 16.6714 3.44927 16.7571L0.906056 19.3444C0.821793 19.4301 0.821793 19.5693 0.906056 19.655L3.44982 22.2429C3.53353 22.3291 3.67032 22.3292 3.75513 22.2429ZM5.83983 19.5008L3.60194 21.7775L1.36404 19.5008L3.60194 17.2241L5.83983 19.5008Z' fill='#C0C0C0' />
                                        <path d='M3.75513 22.2429L6.29835 19.6556C6.38262 19.5698 6.38261 19.4307 6.29834 19.345L3.75458 16.7571C3.67032 16.6714 3.53354 16.6714 3.44927 16.7571L0.906056 19.3444C0.821793 19.4301 0.821793 19.5693 0.906056 19.655L3.44982 22.2429C3.53353 22.3291 3.67032 22.3292 3.75513 22.2429ZM5.83983 19.5008L3.60194 21.7775L1.36404 19.5008L3.60194 17.2241L5.83983 19.5008Z' fill='url(#paint11_linear_40_3267)' />
                                        <defs>
                                            <linearGradient id='paint0_linear_40_3267' x1='4.57159' y1='23.0734' x2='16.4559' y2='34.7552' gradientUnits='userSpaceOnUse'>
                                                <stop stopColor='white' />
                                                <stop offset='1' stopColor='#C0C0C0' />
                                            </linearGradient>
                                            <linearGradient id='paint1_linear_40_3267' x1='5.85954' y1='21.2765' x2='17.9871' y2='33.1974' gradientUnits='userSpaceOnUse'>
                                                <stop stopColor='white' />
                                                <stop offset='1' stopColor='#C0C0C0' />
                                            </linearGradient>
                                            <linearGradient id='paint2_linear_40_3267' x1='16.7127' y1='33.8719' x2='17.8006' y2='34.9414' gradientUnits='userSpaceOnUse'>
                                                <stop stopColor='white' />
                                                <stop offset='1' stopColor='#C0C0C0' />
                                            </linearGradient>
                                            <linearGradient id='paint3_linear_40_3267' x1='17.4757' y1='34.6487' x2='19.3406' y2='36.4818' gradientUnits='userSpaceOnUse'>
                                                <stop stopColor='white' />
                                                <stop offset='1' stopColor='#C0C0C0' />
                                            </linearGradient>
                                            <linearGradient id='paint4_linear_40_3267' x1='19.0028' y1='36.2023' x2='20.8677' y2='38.0354' gradientUnits='userSpaceOnUse'>
                                                <stop stopColor='white' />
                                                <stop offset='1' stopColor='#C0C0C0' />
                                            </linearGradient>
                                            <linearGradient id='paint5_linear_40_3267' x1='10.2608' y1='9.82879' x2='10.5713' y2='10.1341' gradientUnits='userSpaceOnUse'>
                                                <stop stopColor='white' />
                                                <stop offset='1' stopColor='#C0C0C0' />
                                            </linearGradient>
                                            <linearGradient id='paint6_linear_40_3267' x1='11.6519' y1='11.5207' x2='11.9625' y2='11.826' gradientUnits='userSpaceOnUse'>
                                                <stop stopColor='white' />
                                                <stop offset='1' stopColor='#C0C0C0' />
                                            </linearGradient>
                                            <linearGradient id='paint7_linear_40_3267' x1='16.3305' y1='3.65177' x2='18.1954' y2='5.48491' gradientUnits='userSpaceOnUse'>
                                                <stop stopColor='white' />
                                                <stop offset='1' stopColor='#C0C0C0' />
                                            </linearGradient>
                                            <linearGradient id='paint8_linear_40_3267' x1='17.4757' y1='2.48673' x2='19.3406' y2='4.31987' gradientUnits='userSpaceOnUse'>
                                                <stop stopColor='white' />
                                                <stop offset='1' stopColor='#C0C0C0' />
                                            </linearGradient>
                                            <linearGradient id='paint9_linear_40_3267' x1='19.0034' y1='0.932527' x2='20.8683' y2='2.76567' gradientUnits='userSpaceOnUse'>
                                                <stop stopColor='white' />
                                                <stop offset='1' stopColor='#C0C0C0' />
                                            </linearGradient>
                                            <linearGradient id='paint10_linear_40_3267' x1='2.73935' y1='17.4805' x2='6.77835' y2='21.4507' gradientUnits='userSpaceOnUse'>
                                                <stop stopColor='white' />
                                                <stop offset='1' stopColor='#C0C0C0' />
                                            </linearGradient>
                                            <linearGradient id='paint11_linear_40_3267' x1='2.17766' y1='18.0508' x2='5.0757' y2='20.8994' gradientUnits='userSpaceOnUse'>
                                                <stop stopColor='white' />
                                                <stop offset='1' stopColor='#C0C0C0' />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </a>
                                <a>
                                    <svg width='22' height='39' viewBox='0 0 22 39' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                        <path d='M6.25168 34.9595C6.16741 34.8738 6.16742 34.7346 6.25169 34.6489L17.6299 23.0734C17.7142 22.9877 17.851 22.9877 17.9352 23.0734C18.0195 23.1591 18.0195 23.2983 17.9352 23.384L6.55699 34.9595C6.47273 35.0463 6.33649 35.0458 6.25168 34.9595Z' fill='#C0C0C0' />
                                        <path d='M6.25168 34.9595C6.16741 34.8738 6.16742 34.7346 6.25169 34.6489L17.6299 23.0734C17.7142 22.9877 17.851 22.9877 17.9352 23.0734C18.0195 23.1591 18.0195 23.2983 17.9352 23.384L6.55699 34.9595C6.47273 35.0463 6.33649 35.0458 6.25168 34.9595Z' fill='url(#paint0_linear_40_3239)' />
                                        <path d='M4.7246 33.4059C4.64033 33.3201 4.64034 33.181 4.7246 33.0953L16.342 21.2765C16.4262 21.1908 16.563 21.1908 16.6473 21.2765C16.7315 21.3622 16.7316 21.5014 16.6473 21.5871L5.02993 33.4059C4.94512 33.4922 4.80941 33.4921 4.7246 33.4059Z' fill='#C0C0C0' />
                                        <path d='M4.7246 33.4059C4.64033 33.3201 4.64034 33.181 4.7246 33.0953L16.342 21.2765C16.4262 21.1908 16.563 21.1908 16.6473 21.2765C16.7315 21.3622 16.7316 21.5014 16.6473 21.5871L5.02993 33.4059C4.94512 33.4922 4.80941 33.4921 4.7246 33.4059Z' fill='url(#paint1_linear_40_3239)' />
                                        <path d='M4.72459 34.96C4.68575 34.9205 4.66113 34.8654 4.66168 34.8047L4.66168 33.2506C4.66168 33.1292 4.75853 33.0307 4.87781 33.0307C4.99709 33.0307 5.09393 33.1292 5.09393 33.2506L5.09393 34.5843L6.40493 34.5843C6.52421 34.5843 6.62107 34.6828 6.62107 34.8042C6.62107 34.9255 6.52422 35.0241 6.40494 35.0241L4.87726 35.0241C4.81762 35.0246 4.76344 34.9996 4.72459 34.96Z' fill='#C0C0C0' />
                                        <path d='M4.72459 34.96C4.68575 34.9205 4.66113 34.8654 4.66168 34.8047L4.66168 33.2506C4.66168 33.1292 4.75853 33.0307 4.87781 33.0307C4.99709 33.0307 5.09393 33.1292 5.09393 33.2506L5.09393 34.5843L6.40493 34.5843C6.52421 34.5843 6.62107 34.6828 6.62107 34.8042C6.62107 34.9255 6.52422 35.0241 6.40494 35.0241L4.87726 35.0241C4.81762 35.0246 4.76344 34.9996 4.72459 34.96Z' fill='url(#paint2_linear_40_3239)' />
                                        <path d='M3.19745 36.5136C3.1586 36.4741 3.13399 36.419 3.13453 36.3583L3.13453 34.8042C3.13453 34.6828 3.23138 34.5843 3.35066 34.5843L4.87834 34.5843C4.99762 34.5843 5.09446 34.6828 5.09446 34.8041L5.09448 36.3583C5.09448 36.4797 4.99763 36.5782 4.87835 36.5782L3.35066 36.5782C3.29047 36.5782 3.2363 36.5531 3.19745 36.5136ZM3.56625 35.024L3.56624 36.1384L4.66166 36.1384L4.66166 35.024L3.56625 35.024Z' fill='#C0C0C0' />
                                        <path d='M3.19745 36.5136C3.1586 36.4741 3.13399 36.419 3.13453 36.3583L3.13453 34.8042C3.13453 34.6828 3.23138 34.5843 3.35066 34.5843L4.87834 34.5843C4.99762 34.5843 5.09446 34.6828 5.09446 34.8041L5.09448 36.3583C5.09448 36.4797 4.99763 36.5782 4.87835 36.5782L3.35066 36.5782C3.29047 36.5782 3.2363 36.5531 3.19745 36.5136ZM3.56625 35.024L3.56624 36.1384L4.66166 36.1384L4.66166 35.024L3.56625 35.024Z' fill='url(#paint3_linear_40_3239)' />
                                        <path d='M1.67035 38.0672C1.6315 38.0277 1.60689 37.9726 1.60743 37.9119L1.60743 36.3577C1.60743 36.2364 1.70428 36.1379 1.82356 36.1379L3.35124 36.1379C3.47052 36.1379 3.56736 36.2364 3.56736 36.3577L3.56738 37.9119C3.56738 38.0333 3.47053 38.1318 3.35125 38.1318L1.82356 38.1318C1.76337 38.1318 1.7092 38.1067 1.67035 38.0672ZM2.0386 36.5782L2.03859 37.6926L3.13401 37.6926L3.13401 36.5782L2.0386 36.5782Z' fill='#C0C0C0' />
                                        <path d='M1.67035 38.0672C1.6315 38.0277 1.60689 37.9726 1.60743 37.9119L1.60743 36.3577C1.60743 36.2364 1.70428 36.1379 1.82356 36.1379L3.35124 36.1379C3.47052 36.1379 3.56736 36.2364 3.56736 36.3577L3.56738 37.9119C3.56738 38.0333 3.47053 38.1318 3.35125 38.1318L1.82356 38.1318C1.76337 38.1318 1.7092 38.1067 1.67035 38.0672ZM2.0386 36.5782L2.03859 37.6926L3.13401 37.6926L3.13401 36.5782L2.0386 36.5782Z' fill='url(#paint4_linear_40_3239)' />
                                        <path d='M17.6299 15.9271L6.25163 4.35166C6.16736 4.26594 6.16737 4.12677 6.25163 4.04105C6.3359 3.95533 6.47269 3.95532 6.55695 4.04104L17.9352 15.6165C18.0195 15.7023 18.0195 15.8414 17.9352 15.9271C17.8509 16.0129 17.7142 16.0129 17.6299 15.9271Z' fill='#C0C0C0' />
                                        <path d='M17.6299 15.9271L6.25163 4.35166C6.16736 4.26594 6.16737 4.12677 6.25163 4.04105C6.3359 3.95533 6.47269 3.95532 6.55695 4.04104L17.9352 15.6165C18.0195 15.7023 18.0195 15.8414 17.9352 15.9271C17.8509 16.0129 17.7142 16.0129 17.6299 15.9271Z' fill='url(#paint5_linear_40_3239)' />
                                        <path d='M16.3747 17.7574L4.72453 5.90525C4.64026 5.81952 4.64027 5.68036 4.72453 5.59464C4.8088 5.50892 4.94559 5.50891 5.02985 5.59463L16.68 17.4468C16.7643 17.5325 16.7643 17.6717 16.68 17.7574C16.5958 17.8431 16.4595 17.8437 16.3747 17.7574Z' fill='#C0C0C0' />
                                        <path d='M16.3747 17.7574L4.72453 5.90525C4.64026 5.81952 4.64027 5.68036 4.72453 5.59464C4.8088 5.50892 4.94559 5.50891 5.02985 5.59463L16.68 17.4468C16.7643 17.5325 16.7643 17.6717 16.68 17.7574C16.5958 17.8431 16.4595 17.8437 16.3747 17.7574Z' fill='url(#paint6_linear_40_3239)' />
                                        <path d='M4.72454 5.90522C4.68569 5.8657 4.66108 5.81059 4.66162 5.74992L4.66163 4.19576C4.66163 4.07441 4.75847 3.97589 4.87776 3.97589L6.40544 3.97588C6.52472 3.97588 6.62156 4.0744 6.62156 4.19575C6.62156 4.3171 6.52471 4.41562 6.40543 4.41562L5.09443 4.41562L5.09443 5.74935C5.09443 5.8707 4.99758 5.96923 4.8783 5.96923C4.81756 5.96978 4.76339 5.94474 4.72454 5.90522Z' fill='#C0C0C0' />
                                        <path d='M4.72454 5.90522C4.68569 5.8657 4.66108 5.81059 4.66162 5.74992L4.66163 4.19576C4.66163 4.07441 4.75847 3.97589 4.87776 3.97589L6.40544 3.97588C6.52472 3.97588 6.62156 4.0744 6.62156 4.19575C6.62156 4.3171 6.52471 4.41562 6.40543 4.41562L5.09443 4.41562L5.09443 5.74935C5.09443 5.8707 4.99758 5.96923 4.8783 5.96923C4.81756 5.96978 4.76339 5.94474 4.72454 5.90522Z' fill='url(#paint7_linear_40_3239)' />
                                        <path d='M3.19746 4.35165C3.15806 4.31157 3.13398 4.257 3.13452 4.19633L3.13453 2.64217C3.13453 2.52082 3.23137 2.4223 3.35066 2.4223L4.87834 2.42229C4.99762 2.42229 5.09448 2.52083 5.09448 2.64217L5.09447 4.19634C5.09447 4.31769 4.99763 4.41621 4.87835 4.41621L3.35066 4.41622C3.28993 4.41566 3.23631 4.39117 3.19746 4.35165ZM3.56625 2.86205L3.56625 3.97646L4.66166 3.97645L4.66167 2.86205L3.56625 2.86205Z' fill='#C0C0C0' />
                                        <path d='M3.19746 4.35165C3.15806 4.31157 3.13398 4.257 3.13452 4.19633L3.13453 2.64217C3.13453 2.52082 3.23137 2.4223 3.35066 2.4223L4.87834 2.42229C4.99762 2.42229 5.09448 2.52083 5.09448 2.64217L5.09447 4.19634C5.09447 4.31769 4.99763 4.41621 4.87835 4.41621L3.35066 4.41622C3.28993 4.41566 3.23631 4.39117 3.19746 4.35165ZM3.56625 2.86205L3.56625 3.97646L4.66166 3.97645L4.66167 2.86205L3.56625 2.86205Z' fill='url(#paint8_linear_40_3239)' />
                                        <path d='M1.66973 2.79743C1.63088 2.75791 1.60627 2.7028 1.60681 2.64213L1.60682 1.08797C1.60682 0.966618 1.70366 0.868098 1.82295 0.868098L3.35063 0.868089C3.46991 0.868089 3.56675 0.96661 3.56675 1.08796L3.56676 2.64214C3.56676 2.76349 3.46992 2.86201 3.35064 2.86201L1.82294 2.862C1.76275 2.862 1.70913 2.83751 1.66973 2.79743ZM2.03854 1.30785L2.03853 2.42224L3.13395 2.42225L3.13395 1.30784L2.03854 1.30785Z' fill='#C0C0C0' />
                                        <path d='M1.66973 2.79743C1.63088 2.75791 1.60627 2.7028 1.60681 2.64213L1.60682 1.08797C1.60682 0.966618 1.70366 0.868098 1.82295 0.868098L3.35063 0.868089C3.46991 0.868089 3.56675 0.96661 3.56675 1.08796L3.56676 2.64214C3.56676 2.76349 3.46992 2.86201 3.35064 2.86201L1.82294 2.862C1.76275 2.862 1.70913 2.83751 1.66973 2.79743ZM2.03854 1.30785L2.03853 2.42224L3.13395 2.42225L3.13395 1.30784L2.03854 1.30785Z' fill='url(#paint9_linear_40_3239)' />
                                        <path d='M17.6294 23.3846C15.524 21.2426 15.524 17.758 17.6294 15.616C17.7137 15.5303 17.8505 15.5303 17.9348 15.616C18.019 15.7017 18.019 15.8409 17.9348 15.9266C15.9978 17.8971 15.9978 21.1034 17.9348 23.074C18.019 23.1597 18.019 23.2988 17.9348 23.3846C17.8505 23.4703 17.7143 23.4708 17.6294 23.3846Z' fill='#C0C0C0' />
                                        <path d='M17.6294 23.3846C15.524 21.2426 15.524 17.758 17.6294 15.616C17.7137 15.5303 17.8505 15.5303 17.9348 15.616C18.019 15.7017 18.019 15.8409 17.9348 15.9266C15.9978 17.8971 15.9978 21.1034 17.9348 23.074C18.019 23.1597 18.019 23.2988 17.9348 23.3846C17.8505 23.4703 17.7143 23.4708 17.6294 23.3846Z' fill='url(#paint10_linear_40_3239)' />
                                        <path d='M18.7517 22.2429L16.2085 19.6556C16.1242 19.5698 16.1242 19.4307 16.2085 19.345L18.7523 16.7571C18.8365 16.6714 18.9733 16.6714 19.0576 16.7571L21.6008 19.3444C21.685 19.4301 21.685 19.5693 21.6008 19.655L19.057 22.2429C18.9733 22.3291 18.8365 22.3292 18.7517 22.2429ZM16.667 19.5008L18.9049 21.7775L21.1428 19.5008L18.9049 17.2241L16.667 19.5008Z' fill='#C0C0C0' />
                                        <path d='M18.7517 22.2429L16.2085 19.6556C16.1242 19.5698 16.1242 19.4307 16.2085 19.345L18.7523 16.7571C18.8365 16.6714 18.9733 16.6714 19.0576 16.7571L21.6008 19.3444C21.685 19.4301 21.685 19.5693 21.6008 19.655L19.057 22.2429C18.9733 22.3291 18.8365 22.3292 18.7517 22.2429ZM16.667 19.5008L18.9049 21.7775L21.1428 19.5008L18.9049 17.2241L16.667 19.5008Z' fill='url(#paint11_linear_40_3239)' />
                                        <defs>
                                            <linearGradient id='paint0_linear_40_3239' x1='17.9352' y1='23.0734' x2='6.05092' y2='34.7552' gradientUnits='userSpaceOnUse'>
                                                <stop stopColor='white' />
                                                <stop offset='1' stopColor='#C0C0C0' />
                                            </linearGradient>
                                            <linearGradient id='paint1_linear_40_3239' x1='16.6473' y1='21.2765' x2='4.51973' y2='33.1974' gradientUnits='userSpaceOnUse'>
                                                <stop stopColor='white' />
                                                <stop offset='1' stopColor='#C0C0C0' />
                                            </linearGradient>
                                            <linearGradient id='paint2_linear_40_3239' x1='5.79417' y1='33.8719' x2='4.70622' y2='34.9414' gradientUnits='userSpaceOnUse'>
                                                <stop stopColor='white' />
                                                <stop offset='1' stopColor='#C0C0C0' />
                                            </linearGradient>
                                            <linearGradient id='paint3_linear_40_3239' x1='5.03114' y1='34.6487' x2='3.16623' y2='36.4818' gradientUnits='userSpaceOnUse'>
                                                <stop stopColor='white' />
                                                <stop offset='1' stopColor='#C0C0C0' />
                                            </linearGradient>
                                            <linearGradient id='paint4_linear_40_3239' x1='3.50404' y1='36.2023' x2='1.63913' y2='38.0354' gradientUnits='userSpaceOnUse'>
                                                <stop stopColor='white' />
                                                <stop offset='1' stopColor='#C0C0C0' />
                                            </linearGradient>
                                            <linearGradient id='paint5_linear_40_3239' x1='12.2461' y1='9.82879' x2='11.9355' y2='10.1341' gradientUnits='userSpaceOnUse'>
                                                <stop stopColor='white' />
                                                <stop offset='1' stopColor='#C0C0C0' />
                                            </linearGradient>
                                            <linearGradient id='paint6_linear_40_3239' x1='10.855' y1='11.5207' x2='10.5444' y2='11.826' gradientUnits='userSpaceOnUse'>
                                                <stop stopColor='white' />
                                                <stop offset='1' stopColor='#C0C0C0' />
                                            </linearGradient>
                                            <linearGradient id='paint7_linear_40_3239' x1='6.17631' y1='3.65177' x2='4.3114' y2='5.48491' gradientUnits='userSpaceOnUse'>
                                                <stop stopColor='white' />
                                                <stop offset='1' stopColor='#C0C0C0' />
                                            </linearGradient>
                                            <linearGradient id='paint8_linear_40_3239' x1='5.03114' y1='2.48673' x2='3.16622' y2='4.31987' gradientUnits='userSpaceOnUse'>
                                                <stop stopColor='white' />
                                                <stop offset='1' stopColor='#C0C0C0' />
                                            </linearGradient>
                                            <linearGradient id='paint9_linear_40_3239' x1='3.50343' y1='0.932527' x2='1.63851' y2='2.76567' gradientUnits='userSpaceOnUse'>
                                                <stop stopColor='white' />
                                                <stop offset='1' stopColor='#C0C0C0' />
                                            </linearGradient>
                                            <linearGradient id='paint10_linear_40_3239' x1='19.7675' y1='17.4805' x2='15.7285' y2='21.4507' gradientUnits='userSpaceOnUse'>
                                                <stop stopColor='white' />
                                                <stop offset='1' stopColor='#C0C0C0' />
                                            </linearGradient>
                                            <linearGradient id='paint11_linear_40_3239' x1='20.3292' y1='18.0508' x2='17.4311' y2='20.8994' gradientUnits='userSpaceOnUse'>
                                                <stop stopColor='white' />
                                                <stop offset='1' stopColor='#C0C0C0' />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className='about-the-characters__block-characters'>
                            {characters.map(x => {
                                return (
                                    <div key={x.id} className={x.active === true ? 'about-the-characters__block-image-character--active' : '-'}>
                                        <img src='favicon.ico' alt='' className='about-the-characters__image-character' />
                                    </div>
                                );
                            })}
                        </div>
                        <div className='about-the-characters__block-character-information'>
                            <div className='about-the-characters__block-character-characteristics'>
                                <div className='about-the-characters__block-character-characteristic'>
                                    <span>Имя</span>
                                    <span>{characters.find(x => x.active)?.name}</span>
                                </div>
                                <div className='about-the-characters__block-character-characteristic'>
                                    <span>Возраст</span>
                                    <span>{characters.find(x => x.active)?.age} цикл</span>
                                </div>
                                <div className='about-the-characters__block-character-characteristic'>
                                    <span>Раса (Нация)</span>
                                    <span>{races.find(x => x.id === characters.find(x => x.active)?.raceId)?.name} ({nations.find(x => x.id === characters.find(x => x.active)?.nationId)?.name})</span>
                                </div>
                                <div className='about-the-characters__block-character-characteristic'>
                                    <span>Страна</span>
                                    <span>{countries.find(x => x.id === characters.find(x => x.active)?.countryId)?.name}</span>
                                </div>
                                <div className='about-the-characters__block-character-characteristic'>
                                    <span>Фракция</span>
                                    <span>{fractions.find(x => x.id === characters.find(x => x.active)?.fractionId)?.name}</span>
                                </div>
                            </div>
                            <div className='about-the-characters__block-character-biography'>
                                <span>{characters.find(x => x.active)?.biography}</span>
                            </div>
                            <div className='about-the-characters__block-character-action'>
                                <a className='base__button'>Играть</a>
                            </div>
                        </div>
                    </div>
                    <div className='about-the-events__block'>
                        <span className='about-the-events__text-title'>Актуальные события</span>
                        <span>Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, в текст-«рыба»</span>
                        <div className='about-the-events__block-event' style={{ backgroundImage: `url(${event?.url}` }}>
                            <div className='about-the-events__block-event-description'>
                                <div className='about-the-events__block-inner-event-description'>
                                    <span className='about-the-events__text-title'>{event?.title}</span>
                                    <span>{event?.description}</span>
                                </div>
                            </div>
                            <div className='about-the-events__block-event-pagination'>
                                <div className='about-the-events__block-inner-event-pagination'>
                                    {events.map(x => {
                                        return (
                                            <div key={x.id} className='base__circle'></div>
                                        )
                                    })}
                                    <a className='about-the-events__button-event-pagination'>
                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 9C16.5523 9 17 8.55228 17 8C17 7.44772 16.5523 7 16 7V8V9ZM0.292893 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM16 8V7L1 7V8V9L16 9V8Z" fill="white" />
                                        </svg>
                                    </a>
                                    <a className='about-the-events__button-event-pagination'>
                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 9C0.447715 9 0 8.55228 0 8C0 7.44772 0.447715 7 1 7L1 8L1 9ZM16.7071 7.29289C17.0976 7.68342 17.0976 8.31658 16.7071 8.70711L10.3431 15.0711C9.95262 15.4616 9.31946 15.4616 8.92893 15.0711C8.53841 14.6805 8.53841 14.0474 8.92893 13.6569L14.5858 8L8.92893 2.34315C8.53841 1.95262 8.53841 1.31946 8.92893 0.928932C9.31946 0.538408 9.95262 0.538408 10.3431 0.928932L16.7071 7.29289ZM1 8L1 7L16 7V8V9L1 9L1 8Z" fill="white" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='footer__block'>
                        <div className='footer__block-inner'>
                            <span>Сомневаетесь? Не можете выбрать подходящего персонажа или хотите создать своего? Обратитесь к Создателю.</span>
                            <div className='footer__block-actions'>
                                <a className='base__button'>Задать вопрос</a>
                                <a className='base__button'>Начать путешествие</a>
                            </div>
                        </div>
                        <div className='footer__block-contacts'>
                            <a>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_43_3724)">
                                        <path d="M32.0047 16C32.0047 20.2435 30.319 24.3131 27.3184 27.3137C24.3178 30.3143 20.2482 32 16.0047 32C11.7612 32 7.69157 30.3143 4.69099 27.3137C1.69041 24.3131 0.00469971 20.2435 0.00469971 16C0.00469971 11.7565 1.69041 7.68687 4.69099 4.68629C7.69157 1.68571 11.7612 0 16.0047 0C20.2482 0 24.3178 1.68571 27.3184 4.68629C30.319 7.68687 32.0047 11.7565 32.0047 16ZM16.5787 11.812C15.0214 12.46 11.9107 13.8 7.2467 15.832C6.4907 16.132 6.09403 16.4267 6.0567 16.716C5.9967 17.202 6.6067 17.394 7.4367 17.656L7.7867 17.766C8.6027 18.032 9.7027 18.342 10.2727 18.354C10.7927 18.3673 11.3714 18.154 12.0087 17.714C16.3674 14.7727 18.6167 13.286 18.7567 13.254C18.8567 13.23 18.9967 13.202 19.0887 13.286C19.1807 13.37 19.1727 13.526 19.1627 13.568C19.1027 13.826 16.7087 16.05 15.4707 17.202C15.0847 17.562 14.8107 17.816 14.7547 17.874C14.6314 18.0001 14.5061 18.1241 14.3787 18.246C13.6187 18.978 13.0507 19.526 14.4087 20.422C15.0627 20.854 15.5867 21.208 16.1087 21.564C16.6767 21.952 17.2447 22.338 17.9807 22.822C18.1674 22.9447 18.3474 23.0693 18.5207 23.196C19.1827 23.668 19.7807 24.092 20.5147 24.024C20.9427 23.984 21.3847 23.584 21.6087 22.384C22.1387 19.55 23.1807 13.412 23.4207 10.882C23.4358 10.6717 23.4271 10.4604 23.3947 10.252C23.3753 10.084 23.294 9.92929 23.1667 9.818C22.9845 9.69287 22.7677 9.62784 22.5467 9.632C21.9467 9.642 21.0207 9.964 16.5787 11.812Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_43_3724">
                                            <rect width="32" height="32" fill="white" transform="translate(0.00469971)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                        </div>
                        <div className='footer__block-logo'>
                            <img src='favicon.ico' alt='' className='menu__image-logo' />
                            <span>INSANIA</span>
                            <span>2025</span>
                        </div>
                    </div>
                </div>
            </div>
        </QueryClientProvider>
    )
}