export default function NavigationButton({ href, children, click, active }) {
    let classes = "main-menu__item";

    if (active) classes += ' main-menu__item--active'

    return (
        <div className="main-menu__item-block">
            <a href={href} className={classes} onClick={click}>{children}</a>
        </div>
    )
}