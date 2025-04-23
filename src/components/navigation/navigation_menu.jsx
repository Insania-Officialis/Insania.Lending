import Logo from '../logo/logo.jsx'
import AuthorizationButton from '../authorization/authorization_button.jsx'
import NavigationItems from './navigation_menu_items.jsx'

export default function NavigationMenu() {
    return (
        <div className="main-menu">
            <Logo />
            <div className="main-menu__items">
                <NavigationItems />
            </div>
            <AuthorizationButton text = "Войти" />
        </div>
    )
}