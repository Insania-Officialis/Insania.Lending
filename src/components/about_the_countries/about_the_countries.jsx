import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import mapImage from '../../../public/images/map/map.png';

export default function AboutTheCountries() {
    ////Создание слоя карты
    //const layer = () => new window.ymaps.Layer(mapImage, { notFoundTile: mapImage });

    ////Добавление слоя в коллекцию
    //window.ymaps.layer.storage.add('my#layer', layer);

    ////Добавление типа карты
    //window.ymaps.mapType.storage.add('my#type', new window.ymaps.MapType('Custom Map', ['my#layer'], {}));

    //Вывод основного содержимого
    return (
        <div className="about-the-countries__block">
            <YMaps query={{ apikey: '2c0658bf-8a66-4ffa-ad14-b1df5b5311ca' }}>
                <Map className="about-the-countries__map-block"
                    defaultState={{
                        //type: 'my#type', //тип карты
                        center: [0, 0], //центр позиционирования
                        zoom: 2, //коэффициент масштабирования
                        controls: [] //элементы управления
                    }}
                    options={{
                        //restrictMapArea: true, //ограничение области карты видимой областью
                        restrictMapArea: [[-85, -180], [85, 179]], //ограничение области карты прямоугольной областью
                        minZoom: 2, //минимальный масштаб
                        suppressMapOpenBlock: true //кнопка "Открыть в Яндекс картах"
                    }}
                />
            </YMaps>
        </div>
    )
}