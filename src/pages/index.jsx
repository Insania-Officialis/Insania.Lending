import { QueryClient, QueryClientProvider } from 'react-query';

import { Menu } from '../components/menu/menu.jsx';
import { AboutTheProject } from '../components/about_the_project/about_the_project.jsx';
import { AboutTheRaces } from '../components/about_the_races/about_the_races.jsx';
import { AboutTheCountries } from '../components/about_the_countries/about_the_countries.jsx';
import { CallToAction } from '../components/call_to_action/call_to_action.jsx';
import { AboutTheCharacters } from '../components/about_the_characters/about_the_characters.jsx';
import { AboutTheEvents } from '../components/about_the_events/about_the_events.jsx';

export default function Index() {
    //Формирование клиента запросов
    const queryClient = new QueryClient();

    //Моковый массив рас
    const mockRaces = [
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
    const mockNations = [
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
    const mockCountries = [
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
    const mockFractions = [
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
    const mockCharacters = [
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
    const mockEvents = [
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

    //Вывод основного содержимого
    return (
        <QueryClientProvider client={queryClient}>
            <div className='index__block'>
                <div className='index__block-inner'>
                    <Menu />
                    <AboutTheProject />
                    <AboutTheRaces races={mockRaces} nations={mockNations} />
                    <AboutTheCountries countries={mockCountries} />
                    <CallToAction />
                    <AboutTheCharacters characters={mockCharacters} races={mockRaces} nations={mockNations} countries={mockCountries} fractions={mockFractions} />
                    <AboutTheEvents events={mockEvents} />
                </div>
            </div>
        </QueryClientProvider>
    )
}