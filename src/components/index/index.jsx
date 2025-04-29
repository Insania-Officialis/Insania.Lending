import AboutUs from '../about_us/about_us.jsx'
import Country from '../country/country.jsx'
import Fraction from '../fraction/fraction.jsx'
import NavigationMenu from '../navigation/navigation_menu.jsx'
import News from '../news/news.jsx'
import Race from '../race/race.jsx'
import Project from '../project/project.jsx'

export default function Index() {
    //Когда страница сгенерирована
    $(document).ready(function () {
        //Получение списка элементов меню
        var memuItems = document.getElementsByName('section');

        //Создание коллекции расположений пунктов меню
        var items = {};

        //Проход по списку элементов меню
        Array.prototype.forEach.call(memuItems, function (e) {
            //Получение стиля элемента
            const style = getComputedStyle(e);

            //Запись расположения пунктов меню за вычетом отсутпа из стиля
            items[e.id] = e.offsetTop - parseInt(style.scrollMarginTop, 10);
        });

        //Выставление первого элемента активным
        ReplaceActive(Object.keys(items)[0]);

        //Добавление события прокрутки в документ
        $(document).on("scroll", function () {
            //Получение положения полосы прокрутки
            var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

            //Если конец страницы
            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
                //Замена активности элемента
                ReplaceActive(Object.keys(items).reverse()[0]);
            }
            //Иначе
            else {
                //Проход по каждому элементу коллекции расположений пунктов меню
                for (let i in items) {
                    //Если расположение пункта меню меньше текущего положения полосы прокрутки
                    if (items[i] <= scrollPosition) {
                        //Замена активности элемента
                        ReplaceActive(i);
                    }
                }
            }
        });
    });

    //Функция замены активности элемента
    function ReplaceActive(i) {
        //Получение активных элементов
        let activeElement = document.querySelector('.main-menu__item--active');

        //Если такие есть - удаление активности
        if (activeElement !== null && activeElement !== undefined) activeElement.classList.remove('main-menu__item--active');

        //Получение пункта меню
        let newActiveElement = document.querySelector('a[href*=' + i + ']');

        //Если пункт меню найден - запись активности
        if (newActiveElement !== null && newActiveElement !== undefined) newActiveElement.classList.add('main-menu__item--active');
    }

    return (
        <div className="main__block">
            <NavigationMenu />
            <Project />
            <Race />
            <Country />
            <Fraction />
            <News />
            <AboutUs />
        </div>
    )
}