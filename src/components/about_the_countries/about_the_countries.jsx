import { useEffect } from 'react';

import mapImage from '../../../public/images/map/map.png';

export default function AboutTheCountries({ coordinatesGeographyObjects, coordinatesCountries }) {
    useEffect(() => {
        //Запуск инициализации карты, при её готовности
        ymaps.ready(init);

        //Функция инициализации карты
        async function init() {
            //Создание собственного слоя
            const layer = function () { return new ymaps.Layer(function () { return mapImage }) }

            //Добавление слоя в коллекцию слоёв карты
            ymaps.layer.storage.add('my#layer', layer);

            //Добавление нового типа на основании слоя в коллекцию типов карты
            ymaps.mapType.storage.add('my#type', new ymaps.MapType(
                'Пусто',
                ['my#layer']
            ));

            //Создание карты
            const map = new ymaps.Map("map", {
                type: 'my#type', //тип карты
                center: [39,3], //центр позиционирования
                zoom: 2, //коэффициент масштабирования
                controls: [], //элементы управления
            }, {
                restrictMapArea: [[-25, -170], [75, 170]], //ограничение области карты прямоугольной областью
                minZoom: 2, //минимальный масштаб
                suppressMapOpenBlock: true, //кнопка "Открыть в Яндекс картах"
            });

            //Ограничение пользовательского передвижения карты
            map.action.setCorrection(function (tick) {
                //Получение проекции
                var projection = map.options.get('projection');

                //Получение размера картыв
                var mapSize = map.container.getSize();

                //Получение центра
                var tickCenter = projection.fromGlobalPixels(tick.globalPixelCenter, tick.zoom);

                //Получение границ
                var top = [tick.globalPixelCenter[0], tick.globalPixelCenter[1] - mapSize[1] / 2];
                var bot = [tick.globalPixelCenter[0], tick.globalPixelCenter[1] + mapSize[1] / 2];
                var tickTop = projection.fromGlobalPixels(top, tick.zoom);
                var tickBot = projection.fromGlobalPixels(bot, tick.zoom);

                //Проверка пересечения границы по горизонтали
                if (tickTop[0] > 85) {
                    //Передвижение пользователя
                    tick.globalPixelCenter = projection.toGlobalPixels([85, tickCenter[1]], tick.zoom);
                    tick.globalPixelCenter = [tick.globalPixelCenter[0], tick.globalPixelCenter[1] + mapSize[1] / 2];
                    tick.duration = 0;
                }

                //Проверка пересечения по горизонтали
                if (tickBot[0] < -85) {
                    //Передвижение пользователя
                    tick.globalPixelCenter = projection.toGlobalPixels([-85, tickCenter[1]], tick.zoom);
                    tick.globalPixelCenter = [tick.globalPixelCenter[0], tick.globalPixelCenter[1] - mapSize[1] / 2];
                    tick.duration = 0;
                }

                //Возврат положения
                return tick;
            });

            map.events.add('boundschange', function (e) {
                const newCenter = map.getCenter();
                //console.log('Новый центр карты:', newCenter);
            });

            //Отрисовка полигонов
            try {
                //Создание коллекции координат
                let coordinates = [...coordinatesGeographyObjects, ...coordinatesCountries];

                //Проверки
                if (!coordinates?.length) throw new Error('Не указан массив координат географических объектов');

                //Проход по массиву координат географических объектов
                for (const geographyObjectCoordinates of coordinates) {
                    try {
                        //Проверки
                        if (!geographyObjectCoordinates?.items?.length) throw new Error('Не указаны координаты географического объекта');

                        //Проход по массиву координат географического объекта
                        for (const geographyObjectCoordinate of geographyObjectCoordinates.items) {
                            //Проверки
                            if (!geographyObjectCoordinate?.coordinates?.length) throw new Error('Не указана координата географического объекта');

                            //Создание полигона
                            const polygon = new ymaps.GeoObject(
                                {
                                    //Описание геометрии объекта
                                    geometry: {
                                        type: "Polygon", //тип
                                        coordinates: geographyObjectCoordinate.coordinates //координаты вершин
                                    },
                                    //Описание свойств геоообъекта
                                    properties: {
                                        id: geographyObjectCoordinate.id, //идентификатор координаты географического объекта
                                        geographyObjectId: geographyObjectCoordinates.id, //идентификатор географического объекта
                                        coordinateId: geographyObjectCoordinate.coordinate_id, //идентификатор координаты
                                        name: geographyObjectCoordinates.Name, //наименование географического объекта
                                        center: geographyObjectCoordinates.center, //центр географического объекта
                                        zoom: geographyObjectCoordinates.zoom //масштаб географического объекта
                                    }
                                },
                                //Описание опций геообъекта
                                {
                                    fillColor: geographyObjectCoordinate.background_color, //цвет заливки
                                    strokeColor: geographyObjectCoordinate.border_color, //цвет обводки
                                    opacity: 1, //общая прозрачность
                                    strokeWidth: 0.1 //ширина обводка
                                }
                            );

                            //Добавление полигона в коллекцию геообъектов карты
                            map.geoObjects.add(polygon);
                        }
                    }
                    catch (error) {
                        console.error(`Ошибка обработки координат ${error}`);
                    }
                }
            }
            catch (error) {
                console.error(`Ошибка получения координат ${error}`);
            }
        }
    }, []);

    //Вывод основного содержимого
    return (
        <div className="about-the-countries__block">
            <div id="map" className="about-the-countries__map-block"></div>
        </div>
    )
}