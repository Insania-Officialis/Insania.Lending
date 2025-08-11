import { useEffect } from 'react';

import mapImage from '../../../public/images/map/map.png';

export default function AboutTheCountries({ coordinatesGeographyObjects, coordinatesCountries }) {
    useEffect(() => {
        //Запуск инициализации карты, при её готовности
        ymaps.ready(init);

        //Координаты географических объектов
        var geographyObjectsCoordinates;

        //Координаты стран
        var countriesCoordinates;

        //Полгионы географических объектов
        var geographyObjectsPolygons;

        //Полгионы стран
        var countriesPolygons;

        //Карта
        var map;

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

            //Инициализации коллекций объектов
            geographyObjectsPolygons = new ymaps.GeoObjectCollection();
            countriesPolygons = new ymaps.GeoObjectCollection();

            //Добавление полигонов в коллекции геообъектов карты
            map.geoObjects.add(geographyObjectsPolygons);
            geographyObjectsPolygons.add(createPolygon(coordinatesGeographyObjects, 'geographyObjects'));
            map.geoObjects.add(countriesPolygons);
            countriesPolygons.add(createPolygon(coordinatesCountries, 'politics'));

            //Подписки на изменение маркера видимости
            document.querySelector('input[value="objects"]').addEventListener('change', updateVisibility);
            document.querySelector('input[value="countries"]').addEventListener('change', updateVisibility);
        }

        //Функция создания полигонов
        function createPolygon(coordinates, type) {
            //Проверки
            if (!coordinates?.length) throw new Error('Не указан массив координат');

            //Формирование переменной результата
            var polygons = new ymaps.GeoObjectCollection();

            //Проход по массиву координат
            for (const itemCoordinates of coordinates) {
                try {
                    //Проверки
                    if (!itemCoordinates?.items?.length) throw new Error('Не указаны координаты объекта');

                    //Проход по массиву координат объекта
                    for (const coordinate of itemCoordinates.items) {
                        //Проверки
                        if (!coordinate?.coordinates?.length) throw new Error('Не указана координата географического объекта');

                        //Создание полигона
                        const polygon = new ymaps.GeoObject(
                            {
                                //Описание геометрии объекта
                                geometry: {
                                    type: 'Polygon', //тип
                                    coordinates: coordinate.coordinates //координаты вершин
                                },
                                //Описание свойств геоообъекта
                                properties: {
                                    id: coordinate.id, //идентификатор координаты географического объекта
                                    objectId: itemCoordinates.id, //идентификатор географического объекта
                                    coordinateId: coordinate.coordinate_id, //идентификатор координаты
                                    type: type, //тип координат
                                    name: itemCoordinates.name, //наименование географического объекта
                                    center: coordinate.center, //центр географического объекта
                                    zoom: coordinate.zoom //масштаб географического объекта
                                }
                            },
                            //Описание опций геообъекта
                            {
                                draggable: false, //Добавление возможности перетаскивания
                                fillColor: coordinate.background_color, //цвет заливки
                                strokeColor: coordinate.border_color, //цвет обводки
                                fillOpacity: 0.75, //общая прозрачность
                                strokeWidth: 0.1 //ширина обводка
                            }
                        );

                        ////Добавление события нажатия
                        //polygon.events.add('contextmenu', viewMenuAction);

                        ////Добавление события наведение курсора
                        //polygon.events.add('mouseenter', function (e) {
                        //    //Полученик параметров объекта
                        //    const id = e.get('target').properties.get('objectId');
                        //    const type = e.get('target').properties.get('type');

                        //    //Увеличение прозрачности
                        //    highlightPolygons(id, type, 1);
                        //});

                        ////Добавление события уведения курсора
                        //polygon.events.add('mouseleave', function (e) {
                        //    //Полученик параметров объекта
                        //    const id = e.get('target').properties.get('objectId');
                        //    const type = e.get('target').properties.get('type');

                        //    //Сброс прозрачности
                        //    resetPolygonsOpacity(id, type);
                        //});

                        //Добавление полигона в массив
                        polygons.add(polygon);
                    }
                }
                catch (error) {
                    console.error(`Ошибка обработки координат ${error}`);
                }
            }

            //Возврат результата
            return polygons;
        }

        //Функция обновления видимости
        function updateVisibility() {
            //Получение нажатия элементов
            const objectsChecked = document.querySelector('input[value="objects"]').checked;
            const countriesChecked = document.querySelector('input[value="countries"]').checked;

            //Изменение видимости
            geographyObjectsPolygons.options.set('visible', objectsChecked);
            countriesPolygons.options.set('visible', countriesChecked);

            //Выход, если просто выключили географические объекты
            if (!objectsChecked) return;

            //Перевключение видимости нижестоящих объектов, если они включены
            if (countriesChecked) {
                countriesPolygons.options.set('visible', false);
                countriesPolygons.options.set('visible', true);
            }
        }
    }, []);

    //Вывод основного содержимого
    return (
        <div className='about-the-countries__block'>
            <div id='map' className='about-the-countries__map-block'></div>
            <div id='layerPanel' className='about-the-countries__block-layer'>
                <h3>Слои:</h3>
                <label className='about-the-countries__label-layer'>
                    <input className='about-the-countries__checkbox-layer' type='checkbox' name='filter' value='objects' defaultChecked={true} /> Показать объекты
                </label>
                <label className='about-the-countries__label-layer'>
                    <input className='about-the-countries__checkbox-layer' type='checkbox' name='filter' value='countries' defaultChecked={true} /> Показать страны
                </label>
            </div>
        </div>
    )
}