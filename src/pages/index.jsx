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
            active: false,
            description: 'Ихтиды - ',
            countries: ['Царство Банду'],
            image: 'images/ichthyid.png'
        },
        {
            id: 4,
            name: 'Мраат',
            active: false,
            description: 'Мрааты - ',
            image: 'images/ichthyid.png'
        },
        {
            id: 5,
            name: 'Человек',
            active: false,
            description: 'Люди - ',
            image: 'images/ichthyid.png'
        },
        {
            id: 6,
            name: 'Вампир',
            active: false,
            description: 'Вампиры - ',
            image: 'images/ichthyid.png'
        },
        {
            id: 7,
            name: 'Эльф',
            active: false,
            description: 'Эльфы - ',
            image: 'images/ichthyid.png'
        },
        {
            id: 8,
            name: 'Метаморф',
            active: false,
            description: 'Метаморфы - ',
            image: 'images/ichthyid.png'
        },
        {
            id: 9,
            name: 'Орк',
            active: false,
            description: 'Орки - ',
            image: 'images/ichthyid.png'
        },
        {
            id: 10,
            name: 'Дварф',
            active: true,
            description: 'Дварфы - Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, в текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель',
            countries: ['Королевство Нордер', 'Королевство Вервирунг'],
            image: 'images/ichthyid.png'
        },
        {
            id: 11,
            name: 'Тролль',
            active: false,
            description: 'Тролли - ',
            image: 'images/ichthyid.png'
        },
        {
            id: 12,
            name: 'Гоблин',
            active: false,
            description: 'Гоблины - ',
            image: 'images/ichthyid.png'
        },
        {
            id: 13,
            name: 'Огр',
            active: false,
            description: 'Огры - ',
            image: 'images/ichthyid.png'
        },
        {
            id: 14,
            name: 'Альв',
            active: false,
            description: 'Альвы - ',
            image: 'images/ichthyid.png'
        },
        {
            id: 15,
            name: 'Антропозавр',
            active: false,
            description: 'Антропозавры - ',
            image: 'images/ichthyid.png'
        },
        {
            id: 16,
            name: 'Элвин',
            active: false,
            description: 'Элвины - ',
            image: 'images/ichthyid.png'
        },
        {
            id: 17,
            name: 'Дану',
            active: false,
            description: 'Дану - ',
            image: 'images/ichthyid.png'
        },
    ];

    //Моковый массив наций
    const nations = [
        {
            id: 1,
            name: 'Отвергунтый ихтид',
            description: 'Отвергунтые ихтиды - Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, в текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель',
            active: true,
            image: 'images/ichthyid.png'
        },
        {
            id: 5,
            name: 'Дикий мраат',
            description: 'Дикие мрааты - ',
            active: false,
            image: 'images/ichthyid.png'
        },
        {
            id: 6,
            name: 'Цивилизованный мраат',
            description: 'Цивилизованные мрааты - ',
            active: false,
            image: 'images/ichthyid.png'
        },
        {
            id: 7,
            name: 'Лисциец',
            description: 'Лисцийцы - ',
            active: false,
            image: 'images/ichthyid.png'
        },
        {
            id: 8,
            name: 'Рифут',
            description: 'Рифуты - ',
            active: false,
            image: 'images/ichthyid.png'
        },
        {
            id: 9,
            name: 'Ластат',
            description: 'Ластаты - ',
            active: false,
            image: 'images/ichthyid.png'
        },
        {
            id: 10,
            name: 'Дестинец',
            description: 'Дестинцы - ',
            active: false,
            image: 'images/ichthyid.png'
        },
        {
            id: 11,
            name: 'Илмариец',
            description: 'Илмарийцы - ',
            active: false,
            image: 'images/ichthyid.png'
        },
        {
            id: 12,
            name: 'Асуд',
            description: 'Асуды - ',
            active: false
        },
        {
            id: 13,
            name: 'Вальтирец',
            description: 'Вальтирцы - ',
            active: false
        },
        {
            id: 14,
            name: 'Саорсин',
            description: 'Саорсины - ',
            active: false
        },
        {
            id: 15,
            name: 'Теоранец',
            description: 'Теоранцы - ',
            active: false
        },
        {
            id: 16,
            name: 'Анкостец',
            description: 'Анкостцы - ',
            active: false
        },
        {
            id: 17,
            name: 'Тавалинец',
            description: 'Тавалинцы - ',
            active: false
        },
        {
            id: 18,
            name: 'Иглессиец',
            description: 'Иглессийцы - ',
            active: false
        },
        {
            id: 19,
            name: 'Плекиец',
            description: 'Плекийцы - ',
            active: false
        },
        {
            id: 20,
            name: 'Сиервин',
            description: 'Сиервины - ',
            active: false
        },
        {
            id: 21,
            name: 'Виегиец',
            description: 'Виегийцы - ',
            active: false
        },
        {
            id: 22,
            name: 'Западный вампир',
            description: 'Западные вампиры - ',
            active: false
        },
        {
            id: 23,
            name: 'Восточный вампир',
            description: 'Восточные вампиры - ',
            active: false
        },
        {
            id: 24,
            name: 'Высший эльф',
            description: 'Высшие эльфы - ',
            active: false
        },
        {
            id: 25,
            name: 'Ночной эльф',
            description: 'Ночные эльфы - ',
            active: false
        },
        {
            id: 26,
            name: 'Кровавый эльф',
            description: 'Кровавые эльфы - ',
            active: false
        },
        {
            id: 27,
            name: 'Лесной эльф',
            description: 'Лесные эльфы - ',
            active: false
        },
        {
            id: 28,
            name: 'Горный эльф',
            description: 'Горные эльфы - ',
            active: false
        },
        {
            id: 29,
            name: 'Речной эльф',
            description: 'Речные эльфы - ',
            active: false
        },
        {
            id: 30,
            name: 'Солнечный эльф',
            description: 'Солнечные эльфы - ',
            active: false
        },
        {
            id: 31,
            name: 'Морской эльф',
            description: 'Морские эльфы - ',
            active: false
        },
        {
            id: 32,
            name: 'Волчий метаморф',
            description: 'Волчьи метаморфы - ',
            active: false
        },
        {
            id: 33,
            name: 'Медвежий метаморф',
            description: 'Медвежьи метаморфы - ',
            active: false
        },
        {
            id: 34,
            name: 'Кошачий метаморф',
            description: 'Кошачьи метаморфы - ',
            active: false
        },
        {
            id: 35,
            name: 'Серый орк',
            description: 'Серые орки - ',
            active: false
        },
        {
            id: 36,
            name: 'Чёрный орк',
            description: 'Чёрные орки - ',
            active: false
        },
        {
            id: 37,
            name: 'Зелёный орк',
            description: 'Зелёные орки - ',
            active: false
        },
        {
            id: 38,
            name: 'Белый орк',
            description: 'Белые орки - ',
            active: false
        },
        {
            id: 39,
            name: 'Южный орк',
            description: 'Южные орки - ',
            active: false
        },
        {
            id: 40,
            name: 'Баккер',
            description: 'Баккеры - ',
            active: false
        },
        {
            id: 41,
            name: 'Нордерец',
            description: 'Нордерцы - ',
            active: false
        },
        {
            id: 42,
            name: 'Вервирунгец',
            description: 'Вервирунгцы - ',
            active: false
        },
        {
            id: 43,
            name: 'Шмид',
            description: 'Шмиды - ',
            active: false
        },
        {
            id: 44,
            name: 'Кригер',
            description: 'Кригеры - ',
            active: false
        },
        {
            id: 45,
            name: 'Куфман',
            description: 'Куфманы - ',
            active: false
        },
        {
            id: 46,
            name: 'Горный тролль',
            description: 'Горные тролли - ',
            active: false
        },
        {
            id: 47,
            name: 'Снежный тролль',
            description: 'Снежные тролли - ',
            active: false
        },
        {
            id: 48,
            name: 'Болотный тролль',
            description: 'Болотные тролли - ',
            active: false
        },
        {
            id: 49,
            name: 'Лесной тролль',
            description: 'Лесные тролли - ',
            active: false
        },
        {
            id: 50,
            name: 'Удстирец',
            description: 'Удстирцы - ',
            active: false
        },
        {
            id: 51,
            name: 'Фискирец',
            description: 'Фискирйцы - ',
            active: false
        },
        {
            id: 52,
            name: 'Монт',
            description: 'Монты - ',
            active: false
        },
        {
            id: 53,
            name: 'Огр',
            description: 'Огры - ',
            active: false
        },
        {
            id: 54,
            name: 'Альв',
            description: 'Альвы - ',
            active: false
        },
        {
            id: 55,
            name: 'Антропозавр',
            description: 'Антропозавры - ',
            active: false
        },
        {
            id: 56,
            name: 'Элвин',
            description: 'Элвины - ',
            active: false
        },
        {
            id: 57,
            name: 'Дану',
            description: 'Дану - ',
            active: false
        }
    ];

    //Моковый массив стран
    const countries = [
        {
            id: 1,
            name: 'Альвраатская империя',
            description: 'Альвраатская империя - Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, в текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель',
            image: 'images/alvraat.png'
        },
        {
            id: 2,
            name: 'Княжество Саорса',
            description: 'Княжество Саорса - ',
            image: 'images/alvraat.png'
        },
        {
            id: 3,
            name: 'Королевство Берген',
            description: 'Королевство Берген - ',
            image: 'images/alvraat.png'
        },
        {
            id: 4,
            name: 'Фесгарское княжество',
            description: 'Фесгарское княжество - ',
            image: 'images/alvraat.png'
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
            id: 2,
            name: "Правительство",
            description: "Правители государств, судебные, законодательные и исполнительные органы (если они есть), представители в других государствах, который определяют внутреннюю и внешнюю политику, управляют различными сферами государства, осуществляют контроль за исполнением приказов и судебные дела высшего уровня"
        },
        {
            id: 3,
            name: "Знать",
            description: "Знать -"
        },
        {
            id: 4,
            name: "Духовенство",
            description: "Духовенство -"
        },
        {
            id: 5,
            name: "Маги",
            description: "Маги -"
        },
        {
            id: 6,
            name: "Военные",
            description: "Военные -"
        },
        {
            id: 7,
            name: "Купечество",
            description: "Купечество -"
        },
        {
            id: 8,
            name: "Преступность",
            description: "Преступность -"
        },
        {
            id: 9,
            name: "Интеллигенция",
            description: "Интеллигенция -"
        },
        {
            id: 10,
            name: "Бесфракционники",
            description: "Бесфракционники -"
        }
    ];

    //Моковый массив персонажей
    const characters = [
        {
            id: 1,
            name: 'Клаавин из дома Миритрант',
            biography: 'Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, в текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель. Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, в текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель. Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, в текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель. Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, в текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель. Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, в текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель. Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, в текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель. Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, в текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель. Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, в текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель. Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, в текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель. Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, в текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель. Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, в текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель. Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, в текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель. Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, в текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель. Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, в текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель. Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, в текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель. Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, в текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель. Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, в текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель. Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, в текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель',
            age: 21,
            raceId: 1,
            nationId: 1,
            countryId: 1,
            fractionId: 2,
            active: true,
            image: 'images/ichthyid.png'
        },
        {
            id: 2,
            name: 'Клаавин из дома Миритрант',
            biography: 'Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, в текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель',
            age: 21,
            countryId: 1,
            fractionId: 1,
            active: false,
            image: 'images/ichthyid.png'
        },
        {
            id: 3,
            name: 'Клаавин из дома Миритрант',
            biography: 'Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, в текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель',
            age: 21,
            countryId: 1,
            fractionId: 1,
            active: false,
            image: 'images/ichthyid.png'
        },
        {
            id: 4,
            name: 'Клаавин из дома Миритрант',
            biography: 'Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, в текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель',
            age: 21,
            countryId: 1,
            fractionId: 1,
            active: false,
            image: 'images/ichthyid.png'
        },
        {
            id: 5,
            name: 'Клаавин из дома Миритрант',
            biography: 'Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, в текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель',
            age: 21,
            countryId: 1,
            fractionId: 1,
            active: false,
            image: 'images/ichthyid.png'
        },
        {
            id: 6,
            name: 'Клаавин из дома Миритрант',
            biography: 'Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, в текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель',
            age: 21,
            countryId: 1,
            fractionId: 1,
            active: false,
            image: 'images/ichthyid.png'
        },
        {
            id: 7,
            name: 'Клаавин из дома Миритрант',
            biography: 'Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, в текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель',
            age: 21,
            countryId: 1,
            fractionId: 1,
            active: false,
            image: 'images/ichthyid.png'
        },
        {
            id: 8,
            name: 'Клаавин из дома Миритрант',
            biography: 'Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, в текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель',
            age: 21,
            countryId: 1,
            fractionId: 1,
            active: false,
            image: 'images/ichthyid.png'
        },
        {
            id: 9,
            name: 'Клаавин из дома Миритрант',
            biography: 'Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, в текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель',
            age: 21,
            countryId: 1,
            fractionId: 1,
            active: false,
            image: 'images/ichthyid.png'
        },
        {
            id: 10,
            name: 'Клаавин из дома Миритрант',
            biography: 'Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, в текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель',
            age: 21,
            countryId: 1,
            fractionId: 1,
            active: false,
            image: 'images/ichthyid.png'
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

    //Формирование списка меню
    const menuItems = [
        { href: '#race', title: 'Расы' },
        { href: '#country', title: 'Страны' },
        { href: '#character', title: 'Персонажи' },
        { href: '#events', title: 'Ивенты' },
    ];

    //Получение видимых наций
    let visibleNations = [...nations];
    if (nations.length > 6) visibleNations = nations.slice(0, 6);

    //Вывод основного содержимого
    return (
        <QueryClientProvider client={queryClient}>
            <div className='index__block'>
                <div className='menu__block'>
                    <div className='menu__block-content'>
                        <div className='menu__block-logo'>
                            <img src='favicon.ico' alt='' className='menu__image-logo' />
                            <span>Инсания</span>
                        </div>
                        <div className='menu__block-action'>
                            {menuItems.map(item => (<a key={item.href} href={item.href} className='menu__link'>{item.title}</a>))}
                            <a className='base__button'>Вступить</a>
                        </div>
                    </div>
                </div>
                <div className='index__block-inner'>
                    <div className='base__block-center'>
                        <div className='base__block-center-inner'>
                            <div className='about-the-project__block-title'>
                                <h1>Insania</h1>
                                <div className='about-the-project__block-subtitle'>
                                    <div className='base__line--left'></div>
                                    <h4>Текстовая ролевая фэнтези-игра</h4>
                                    <div className='base__line--right'></div>
                                </div>
                            </div>
                            <h4>Мир, где множество разумных творят магию и искусства, ведут торговлю и ремёсла, поклоняются богам, воюют и интригуют. Мир, ставший домом для множества рас. Мир, где каждый может побороться за место под солнцем, но не каждый победит.</h4>
                            <a className='base__button'>Начать игру</a>
                        </div>
                    </div>
                    <div id='race' className='base__block'>
                        <div className='base__block-description'>
                            <div className='base__block-text-description'>
                                <h2>Расы</h2>
                                <h4>Выбери из множества легендарных рас - каждая из которых обладает уникальной историей и началом игры</h4>
                            </div>
                            <div className='base__block-actions-description'>
                                <div className='base__block-arrow--left'>
                                    <a className='base__arrow--left'></a>
                                </div>
                                <div className='base__block-arrow--right'>
                                    <a className='base__arrow--right'></a>
                                </div>
                            </div>
                        </div>
                        <div className='about-the-races__block-races'>
                            <div className='about-the-races__block-races-list'>
                                {races.map(race => {
                                    return (
                                        <div key={race.id} className='about-the-races__block-races-list-item'>
                                            <img src={race.image} alt='' className={'about-the-races__image-race' + (race.active ? '' : ' base__image--inactive')} />
                                            <span>{race.name}</span>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='about-the-races__block-race'>
                                <h3>{races.find(x => x.active)?.name}</h3>
                                <h4>{races.find(x => x.active)?.description}</h4>
                                <div className='base__block-tags'>
                                    {races.find(x => x.active)?.countries?.map(item => (<div key={item} className='base__tag'>{item}</div>))}
                                </div>
                                <div className='base__line'></div>
                                <div className='about-the-races__block-title-nation'>
                                    <h5>Подрасы</h5>
                                    <div className='base__block-actions-description'>
                                        <div className='base__block-arrow--left base__block-arrow--small'>
                                            <a className='base__arrow--left'></a>
                                        </div>
                                        <div className='base__block-arrow--right base__block-arrow--small'>
                                            <a className='base__arrow--right'></a>
                                        </div>
                                    </div>
                                </div>
                                <div className='about-the-races__block-nations-images'>
                                    {visibleNations.map((nation, index) => {
                                        return (
                                            <img
                                                key={nation.id}
                                                src={nation.image}
                                                alt=''
                                                className={'about-the-races__image-nation' + (nation.active === true ? ' about-the-races__image-nation--active' : '')}
                                                style={
                                                    index === visibleNations.length - 1
                                                        ? {
                                                            maskImage: 'linear-gradient(to right, $background__body--primary 10%, transparent 100%)',
                                                            WebkitMaskImage: 'linear-gradient(to right, $background__body--primary 10%, transparent 100%)'
                                                        }
                                                        : null
                                                }
                                            />
                                        )
                                    })}
                                </div>
                                <h3>{nations.find(x => x.active)?.name}</h3>
                                <h4>{nations.find(x => x.active)?.description}</h4>
                            </div>
                        </div>
                    </div>
                    <div id='country' className='base__block'>
                        <div className='base__block-description'>
                            <div className='base__block-text-description'>
                                <h2>Страны</h2>
                                <h4>Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, в текст-«рыба»</h4>
                            </div>
                            <div className='base__block-actions-description'>
                                <div className='base__block-arrow--left'>
                                    <a className='base__arrow--left'></a>
                                </div>
                                <div className='base__block-arrow--right'>
                                    <a className='base__arrow--right'></a>
                                </div>
                            </div>
                        </div>
                        <div className='about-the-countries__block-countries'>
                            {countries.slice(0, 4).map(country => (
                                <div key={country.id} className='about-the-countries__block-country'>
                                    <img src={country.image} alt='' className='about-the-countries__image-country' />
                                    <div className='about-the-countries__block-description-country'>
                                        <h4>{country.name}</h4>
                                        <div className='base__line'></div>
                                        <h4>{country.description}</h4>
                                    </div>
                                    <a className='base__button-simple'>Подробнее</a>
                                </div>
                            ))}
                        </div>
                        <div className='about-the-countries__block-button-map'>
                            <a className='base__button-simple'>Посмотреть интерактивную карту</a>
                        </div>
                    </div>
                    <div className='base__block-center'>
                        <div className='base__block-center-inner'>
                            <h4>Начните играть</h4>
                            <h1>СЕЙЧАС</h1>
                            <h4>Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, вставляемый в макет страницы). Используется для образца шрифта и текста, а также для заполнения полей на странице.</h4>
                            <a className='base__button'>Пройти регистрацию</a>
                        </div>
                    </div>
                    <div id='character' className='base__block'>
                        <div className='base__block-description'>
                            <div className='base__block-text-description'>
                                <h2>Персонажи</h2>
                                <h4>Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, в текст-«рыба»</h4>
                            </div>
                            <div className='base__block-actions-description'>
                                <div className='base__block-arrow--left'>
                                    <a className='base__arrow--left'></a>
                                </div>
                                <div className='base__block-arrow--right'>
                                    <a className='base__arrow--right'></a>
                                </div>
                            </div>
                        </div>
                        <div className='about-the-characters__block-characters'>
                            {characters.map(character => {
                                return (
                                    <img key={character.id} src={character.image} alt='' className={'about-the-characters__image-character' + (character.active ? '' : ' base__image--inactive')} />
                                );
                            })}
                        </div>
                        <div className='about-the-characters__block-character-information'>
                            <div className='about-the-characters__block-character-biography'>
                                <span>{characters.find(x => x.active)?.biography}</span>
                            </div>
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
                                <div className='about-the-characters__block-character-action'>
                                    <a className='base__button'>Играть</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='events' className='base__block'>
                        <div className='base__block-description'>
                            <div className='base__block-text-description'>
                                <h2>Актуальные события</h2>
                                <h4>Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, в текст-«рыба»</h4>
                            </div>
                        </div>
                        <div className='about-the-events__block-event' style={{ backgroundImage: `url(${event?.url}` }}>
                            <div className='about-the-events__block-event-description'>
                                <div className='about-the-events__block-inner-event-description'>
                                    <span>{event?.title}</span>
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
                                    <div className='base__block-arrow--left'>
                                        <a className='base__arrow--left'></a>
                                    </div>
                                    <div className='base__block-arrow--right'>
                                        <a className='base__arrow--right'></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </QueryClientProvider>
    )
}