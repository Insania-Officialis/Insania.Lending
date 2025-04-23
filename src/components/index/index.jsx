import NavigationMenu from '../navigation/navigation_menu.jsx'
import Project from '../project/project.jsx'
import Race from '../race/race.jsx'

export default function Index() {
    return (
        <div className="main__block">
            <NavigationMenu />
            <Project />
            <Race />
        </div>
    )
}