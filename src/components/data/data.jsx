import { useQueries } from 'react-query';

import { biologyApi } from '../../js/biology_api.js';
import { filesApi } from '../../js/files_api.js';
import { newsApi } from '../../js/news_api.js';
import { politicsApi } from '../../js/politics_api.js';
import { sociologyApi } from '../../js/sociology_api.js';

import AboutTheProject from '../about_the_project/about_the_project.jsx';
import AboutTheRaces from '../about_the_races/about_the_races.jsx';
import Menu from '../menu/menu.jsx';
import Spinner from '../spinner/spinner.jsx';

export default function Data() {
    //Запросы 1 уровня
    const queriesFirst = useQueries([
        {
            //Ключ кэша
            queryKey: ['races'],
            //Запрос кэша
            queryFn: async () => {
                //Получение рас
                const racesData = await biologyApi.getRacesList();
                //Проверка данных
                if (!racesData?.items?.length || !racesData?.success) throw new Error("Не получены расы или список пуст");
                //Возврат результата
                return racesData.items;
            },
            //Время кэширования в милисекундах
            staleTime: 24 * 60 * 60 * 1000
        },
        {
            //Ключ кэша
            queryKey: ['countries'],
            //Запрос кэша
            queryFn: async () => {
                //Получение стран
                const countriesData = await politicsApi.getCountriesList();
                //Проверка данных
                if (!countriesData?.items?.length || !countriesData?.success) throw new Error("Не получены страны или список пуст");
                //Возврат результата
                return countriesData.items;
            },
            //Время кэширования в милисекундах
            staleTime: 24 * 60 * 60 * 1000
        },
        {
            //Ключ кэша
            queryKey: ['factions'],
            //Запрос кэша
            queryFn: async () => {
                //Получение фракций
                const factionsData = await sociologyApi.getFactionsList();
                //Проверка данных
                if (!factionsData?.items?.length || !factionsData?.success) throw new Error("Не получены фракции или список пуст");
                //Возврат результата
                return factionsData.items;
            },
            //Время кэширования в милисекундах
            staleTime: 24 * 60 * 60 * 1000
        },
        {
            //Ключ кэша
            queryKey: ['news'],
            //Запрос кэша
            queryFn: async () => {
                //Получение фракций
                const newsData = await newsApi.getNewsList();
                //Проверка данных
                if (!newsData?.items?.length || !newsData?.success) throw new Error("Не получены нации или список пуст");
                //Возврат результата
                return newsData.items;
            },
            //Время кэширования в милисекундах
            staleTime: 24 * 60 * 60 * 1000
        },
        {
            //Ключ кэша
            queryKey: ['logo_image'],
            //Запрос кэша
            queryFn: async () => {
                //Получение изображений
                const images = await filesApi.getFilesListByEntityIdAndTypeId(1, 6);
                //Проверка данных
                if (!images?.items?.length || !images?.success) throw new Error("Не получено лого или список пуст");
                //Возврат результата
                return images?.items?.[images?.items?.length - 1] || null;
            },
            //Время кэширования в милисекундах
            staleTime: 24 * 60 * 60 * 1000
        },
        {
            //Ключ кэша
            queryKey: ['start_image'],
            //Запрос кэша
            queryFn: async () => {
                //Получение изображений
                const images = await filesApi.getFilesListByEntityIdAndTypeId(2, 6);
                //Проверка данных
                if (!images?.items?.length || !images?.success) throw new Error("Не получено стартовое изображение или список пуст");
                //Возврат результата
                return images?.items?.[images?.items?.length - 1] || null;
            },
            //Время кэширования в милисекундах
            staleTime: 24 * 60 * 60 * 1000
        }
    ]);

    //Запросы 2 уровня
    const queriesSecond = useQueries([
        //Проход по коллекции рас
        ...(queriesFirst[0]?.data || []).map(race => ({
            //Ключ кэша
            queryKey: ['race-image', race.id],
            //Запрос кэша
            queryFn: async () => {
                //Получение изображений
                const images = await filesApi.getFilesListByEntityIdAndTypeId(race.id, 1);
                //Возврат результата
                return images?.items?.[images?.items?.length - 1] || null;
            },
            //Время кэширования в милисекундах
            staleTime: 24 * 60 * 60 * 1000,
            //Добавление зависимостей
            enabled: !!queriesFirst[0]?.data
        })),
        //Проход по коллекции рас
        ...(queriesFirst[0]?.data || []).map(race => ({
            //Ключ кэша
            queryKey: ['nations', race.id],
            //Запрос кэша
            queryFn: async () => {
                //Получение наций
                const nationsData = await biologyApi.getNationsList(race.id);
                //Проверка данных
                if (!nationsData?.items?.length || !nationsData?.success) throw new Error("Не получены нации или список пуст");
                //Возврат результата
                return nationsData.items.map((nation) => ({
                    ...nation,
                    raceId: race.id
                })) || [];
            },
            //Время кэширования в милисекундах
            staleTime: 24 * 60 * 60 * 1000,
            //Добавление зависимостей
            enabled: !!queriesFirst[0]?.data
        })),
        //Проход по коллекции стран
        ...(queriesFirst[1]?.data || []).map(country => ({
            //Ключ кэша
            queryKey: ['country-image', country.id],
            //Запрос кэша
            queryFn: async () => {
                //Получение изображений
                const images = await filesApi.getFilesListByEntityIdAndTypeId(country.id, 4);
                //Возврат результата
                return images?.items?.[images?.items?.length - 1] || null;
            },
            //Время кэширования в милисекундах
            staleTime: 24 * 60 * 60 * 1000,
            //Добавление зависимостей
            enabled: !!queriesFirst[1]?.data
        })),
        //Проход по коллекции фракций
        ...(queriesFirst[2]?.data || []).map(faction => ({
            //Ключ кэша
            queryKey: ['faction-image', faction.id],
            //Запрос кэша
            queryFn: async () => {
                //Получение изображений
                const images = await filesApi.getFilesListByEntityIdAndTypeId(faction.id, 5);
                //Возврат результата
                return images?.items?.[images?.items?.length - 1] || null;
            },
            //Время кэширования в милисекундах
            staleTime: 24 * 60 * 60 * 1000,
            //Добавление зависимостей
            enabled: !!queriesFirst[2]?.data
        })),
        //Проход по коллекции новостей
        ...(queriesFirst[3]?.data || []).map(news => ({
            //Ключ кэша
            queryKey: ['news-image', news.id],
            //Запрос кэша
            queryFn: async () => {
                //Получение изображений
                const images = await filesApi.getFilesListByEntityIdAndTypeId(news.id, 7);
                //Возврат результата
                return images?.items?.[images?.items?.length - 1] || null;
            },
            //Время кэширования в милисекундах
            staleTime: 24 * 60 * 60 * 1000,
            //Добавление зависимостей
            enabled: !!queriesFirst[2]?.data
        }))
    ]);
    
    //Получение количеств данных 1 уровня
    const racesCount = queriesFirst[0]?.data?.length || 0;
    const countriesCount = queriesFirst[1]?.data?.length || 0;
    const factionsCount = queriesFirst[2]?.data?.length || 0;
    const newsCount = queriesFirst[3]?.data?.length || 0;

    //Получение запросов 2 уровня
    const racesImagesQueries = queriesSecond.slice(0, racesCount);
    const nationsQueries = queriesSecond.slice(racesCount, racesCount + racesCount);
    const countriesImagesQueries = queriesSecond.slice(racesCount + racesCount, racesCount + racesCount + countriesCount);
    const factionsImagesQueries = queriesSecond.slice(racesCount + racesCount + countriesCount, racesCount + racesCount + countriesCount + factionsCount);
    const newsImagesQueries = queriesSecond.slice(racesCount + racesCount + countriesCount + factionsCount, racesCount + racesCount + countriesCount + factionsCount + newsCount);

    //Получение наций
    const nationsData = nationsQueries.map(query => query.data).filter(Boolean).flat();

    //Запросы 3 уровня (изображения наций)
    const queriesThird = useQueries(
        //Проход по коллекции наций
        nationsData.map(nation => ({
            //Ключ кэша
            queryKey: ['nation-image', nation.id],
            //Запрос кэша
            queryFn: async () => {
                //Получение изображений
                const images = await filesApi.getFilesListByEntityIdAndTypeId(nation.id, 2);
                //Возврат результата
                return images?.items?.[images?.items?.length - 1] || null;
            },
            //Время кэширования в милисекундах
            staleTime: 24 * 60 * 60 * 1000,
            //Добавление зависимостей
            enabled: nationsData.length > 0
        }))
    );

    //Получение количества наций
    const nationsCount = nationsData?.length || 0;

    //Получение запросов изображений наций
    const nationsImagesQueries = queriesThird.slice(0, nationsCount);

    //Проверка состояния загрузки
    const isLoading = queriesFirst.some(query => query.isLoading) ||
        queriesSecond.some(query => query.isLoading) ||
        queriesThird.some(query => query.isLoading);

    //Проверка состояния ошибки
    const isError = queriesFirst.some(query => query.isError) ||
        queriesSecond.some(query => query.isError) ||
        queriesThird.some(query => query.isError);

    //Отображение колеса загрузки при установленном признаке
    if (isLoading) return <Spinner />;

    //Отображение ошибки при установленном признаке
    if (isError) return <div>Ошибка загрузки данных</div>;

    //Формирование коллекций данных с изображениями
    const racesWithImages = queriesFirst[0]?.data?.map((race, index) => ({
        ...race,
        image: racesImagesQueries[index]?.data
            ? `${filesApi.baseUrl}files/by_id?id=${racesImagesQueries[index].data.id}`
            : null
    })) || [];
    const countriesWithImages = queriesFirst[1]?.data?.map((country, index) => ({
        ...country,
        image: countriesImagesQueries[index]?.data
            ? `${filesApi.baseUrl}files/by_id?id=${countriesImagesQueries[index].data.id}`
            : null
    })) || [];
    const factionsWithImages = queriesFirst[2]?.data?.map((faction, index) => ({
        ...faction,
        image: factionsImagesQueries[index]?.data
            ? `${filesApi.baseUrl}files/by_id?id=${factionsImagesQueries[index].data.id}`
            : null
    })) || [];
    const newsWithImages = queriesFirst[3]?.data?.map((news, index) => ({
        ...news,
        image: newsImagesQueries[index]?.data
            ? `${filesApi.baseUrl}files/by_id?id=${newsImagesQueries[index].data.id}`
            : null
    })) || [];
    const nationsWithImages = nationsData?.map((nation, index) => ({
        ...nation,
        image: nationsImagesQueries[index]?.data
            ? `${filesApi.baseUrl}files/by_id?id=${nationsImagesQueries[index].data.id}`
            : null
    })) || [];
    const logo = `${filesApi.baseUrl}files/by_id?id=${queriesFirst[4]?.data?.id}`;
    const about_project = `${filesApi.baseUrl}files/by_id?id=${queriesFirst[5]?.data?.id}`;

    //Вывод основного содержимого
    return (
        <div className="main__block">
            <Menu logo={logo} />
            <AboutTheProject image={about_project} />
            <AboutTheRaces races={racesWithImages} nations={nationsWithImages} />
        </div>
    )
}