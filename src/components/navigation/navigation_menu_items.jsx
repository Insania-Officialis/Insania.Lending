import NavigationButton from './navigation_button.jsx'

export default function NavigationItems() {
    return (
        <>
            <NavigationButton href="#project">О ПРОЕКТЕ</NavigationButton>
            <NavigationButton href="#race">О РАСАХ</NavigationButton>
            <NavigationButton href="#country">О СТРАНАХ</NavigationButton>
            <NavigationButton href="#fraction">О ФРАКЦИЯХ</NavigationButton>
            <NavigationButton>О НАС</NavigationButton>
            <NavigationButton>НОВОСТИ</NavigationButton>
        </>
    )
}