//Компонент меню
export function Menu({ logo }) {
    //Возврат компонента
    return (
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
    );
}