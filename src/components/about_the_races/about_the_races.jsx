import { useState } from 'react';

export default function AboutTheRaces({ races, nations }) {
    const visibleCountRace = 7; //Количество отображаемых элементов рас
    const visibleCountNation = 3; //Количество отображаемых элементов наций
    const centerRace = Math.floor(visibleCountRace / 2); //центральный элемент расы
    const [activeRace, setActiveRace] = useState(races[0]?.id || 1); //идентификатор активной расы
    const [activeNation, setActiveNation] = useState(nations?.find(x => x.raceId === (races[0]?.id || 1))?.id); //идентификатор активной нации

    //Метод получения видимых рас
    const getVisibleRaces = function (id) {
        //Поиск индекса по идентификатору
        const index = races.findIndex(x => x.id === id);
        if (index === -1) return [];

        //Формирование переменной результата
        const result = [];

        //Получение длины коллекции
        const length = races.length;
        if (length === 0) return result;

        //Получение начального индекса
        const startIndex = (index - centerRace + length) % length;

        //Проход циклом по количеству элементов
        for (let i = 0; i < visibleCountRace; i++) {
            //Получение индекса элемента
            const currentIndex = (startIndex + i) % length;

            //Добавление индекса элементов
            result.push(races[currentIndex]);
        }

        //Возврат результата
        return result;
    };

    //Метод получения видимых наций
    const getVisibleNations = function (id) {
        //Формирование отфлиьтрованных наций
        const filteredNations = nations.filter(x => x.raceId === activeRace);

        //Если не передана нация, получение первого индекса
        let index = 0;

        //Иначе поиск индекса по идентификатору
        if (id !== null) {
            //Поиск индекса по идентификатору
            index = filteredNations.findIndex(x => x.id === id);
        }
        if (index === -1) return [];

        //Формирование переменной результата
        const result = [];

        //Получение длины коллекции
        const length = filteredNations.length;
        if (length === 0) return result;

        //Получение начального индекса
        const startIndex = (index + length) % length;

        //Проход циклом по количеству элементов
        for (let i = 0; i < (visibleCountNation < length ? visibleCountNation : length); i++) {
            //Получение индекса элемента
            const currentIndex = (startIndex + i) % length;

            //Добавление индекса элементов
            result.push(filteredNations[currentIndex]);
        }

        //Возврат результата
        return result;
    };

    //Коллекция видимых элементов
    const visibleRaces = getVisibleRaces(activeRace);
    const visibleNations = getVisibleNations(activeNation);

    //Вывод основного содержимого
    return (
        <div className='about-the-races__block'>
            <div className='about-the-races__race-block'>
                {visibleRaces.map((race, index) => (
                    <div key={`${race.id}-${activeRace}-${index}`}
                        className='about-the-races__collection-item-block'
                        onClick={() => {
                            setActiveRace(race.id);
                            getVisibleRaces(race.id);
                            setActiveNation(nations?.find(x => x.raceId === race.id)?.id);
                        }}>
                        <img className={`about-the-races__race-item-image ${race.id === activeRace ? 'about-the-races__race-item-image--active' : ''}`} alt={race.name} src={race.image} />
                        <span>{race.name || `Раса ${index + 1}`}</span>
                    </div>
                ))}
            </div>
            <div className='about-the-races__race-detail-block'>
                <div className='about-the-races__race-text-block'>
                    <div className='about-the-races__race-text'>
                        <span style={{ flexGrow: '1', overflow: 'hidden' }}>
                            {races?.find(x => x.id === activeRace)?.description}
                            {/*Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit*/}
                        </span>
                    </div>
                    <div className='about-the-races__race-text-block-inner'/>
                </div>
                <div className='about-the-races__nation-block'>
                    {visibleNations.map((nation, index) => (
                        <div key={`${nation.id}-${activeNation}-${index}`}
                            className='about-the-races__collection-item-block'
                            onClick={() => {
                                setActiveNation(nation.id);
                                getVisibleNations(nation.id);
                            }}>
                            <img className={`about-the-races__nation-item-image ${nation.id === activeNation ? 'about-the-races__nation-item-image--active' : ''}`} alt={nation.name} src={nation.image} />
                            <span>{nation.name || `Раса ${index + 1}`}</span>
                        </div>
                    ))}
                </div>
                <div style={{ position: 'relative', display: 'flex' }}>
                    <div className='about-the-races__nation-text-block'>
                        <div className='about-the-races__nation-text'>
                            <span style={{ flexGrow: '1', overflow: 'hidden' }}>
                                {nations?.find(x => x.id === activeNation)?.description}
                                {/*Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.*/}
                            </span>
                        </div>
                        <div className='about-the-races__nation-text-block-inner'/>
                    </div>
                    <img className='about-the-races__nation-image' alt={nations?.find(x => x.id === activeNation)?.name} src={nations?.find(x => x.id === activeNation)?.image} />
                </div>
            </div>
        </div>
    )
}