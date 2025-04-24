import project from '/images/project.jpg'

import Information from '../information/information.jsx'

export default function Project() {
    return (
        <div id="project" name="section" className="information__block">
            <Information title="О ПРОЕКТЕ" text="Инсания - мир, где множество разумных творят магию и искусства, ведут торговлю и ремёсла, поклоняются богам воюют и интригуют. Мир, ставший домом для множества рас. Мир, где каждый может побороться за место под солнцем,  о не каждый победит." />
            <img src={project} alt="" className="project__image" />
        </div>
    )
}