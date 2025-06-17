export default function MenuItem({ href, text, onClick }) {
    //Вывод основного содержимого
    return (
        <a href={href} className='menu-navigation__item' onClick={onClick}>{text}</a>
    )
}