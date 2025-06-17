export default function AboutTheProject({ image }) {
    //Вывод основного содержимого
    return (
        <div id="project" className="about-the-project__block" style={{ background: 'url(' + image + ') center/cover' }}>
            <span className='about-the-project__title'>ИНСАНИЯ</span>
            <span className="main__text">Мир, где множество разумных творят магию и искусства, ведут торговлю и ремёсла, поклоняются богам, воюют и интригуют. Мир, ставший домом для множества рас. Мир, где каждый может побороться за место под солнцем, но не каждый победит.</span>
        </div>
    )
}