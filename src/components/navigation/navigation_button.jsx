export default function NavigationButton({ href, children, click }) {
    return (
        <div className="main-menu__item-block">
            <a href={href} className='main-menu__item' onClick={click}>{children}</a>
        </div>
    )
}