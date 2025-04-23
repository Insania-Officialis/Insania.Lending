import { useState } from 'react'

import NavigationButton from './navigation_button.jsx'

export default function NavigationItems() {
    const [id, setId] = useState(1);

    function Click(id) {
        setId(id);
    }

    return (
        <div className="main-menu__items">
            <NavigationButton href="#project" active={id === 1} click={() => Click(1)}>О ПРОЕКТЕ</NavigationButton>
            <NavigationButton href="#race" active={id === 2} click={() => Click(2)}>О РАСАХ</NavigationButton>
            <NavigationButton active={id === 3} click={() => Click(3)}>О СТРАНАХ</NavigationButton>
            <NavigationButton active={id === 4} click={() => Click(4)}>О ФРАКЦИЯХ</NavigationButton>
            <NavigationButton active={id === 5} click={() => Click(5)}>О НАС</NavigationButton>
            <NavigationButton active={id === 6} click={() => Click(6)}>НОВОСТИ</NavigationButton>
        </div>
    )
}