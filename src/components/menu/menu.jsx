import MenuItem from './menu_item.jsx';

export default function Menu({ logo }) {
    //Вывод основного содержимого
    return (
        <div className="menu__block">
            <div className="menu-logo__block">
                <img src={logo} alt="" className="menu-logo__image" />
                <span className='menu-logo__text'>ИНСАНИЯ</span>
            </div>
            <div className="menu-navigation__block">
                <MenuItem href='#project' text='О ПРОЕКТЕ' />
                <MenuItem href='#race' text='О РАСАХ' />
                <MenuItem href='#country' text='О СТРАНАХ' />
                <MenuItem href='#fraction' text='О ФРАКЦИЯХ' />
                <MenuItem href='#news' text='НОВОСТИ' />
                <MenuItem href='#about_us' text='О НАС' />
            </div>
            <div className="menu-action__block">
                <a className="menu-action__button">Войти</a>
            </div>
        </div>
    )
}