//Компонент информации о проекте
export function AboutTheProject({ image }) {
    //Возврат компонента
    return (
        <div className='about-the-project__block'>
            <div className='about-the-project__block-inner'>
                <div className='about-the-project__block-title'>
                    <span className='about-the-project__text-title'>Insania</span>
                    <div className='about-the-project__block-subtitle'>
                        <svg width="70" height="10" viewBox="0 0 70 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.5 4.93301H60.5M60.5 4.93301L64.5 0.933014L68.5 4.93301L64.5 9.06699L60.5 4.93301Z" stroke="url(#paint0_linear_27_81)" />
                            <defs>
                                <linearGradient id="paint0_linear_27_81" x1="0.5" y1="4.93301" x2="67.5" y2="4.93301" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="white" stopOpacity="0" />
                                    <stop offset="1" stopColor="white" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <span className='about-the-project__text-description'>Текстовая ролевая фэнтези-игра</span>
                        <svg width="70" height="10" viewBox="0 0 70 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M69.5 4.93301H9.5M9.5 4.93301L5.5 0.933014L1.5 4.93301L5.5 9.06699L9.5 4.93301Z" stroke="url(#paint0_linear_27_82)" />
                            <defs>
                                <linearGradient id="paint0_linear_27_82" x1="69.5" y1="4.93301" x2="2.50001" y2="4.93301" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="white" stopOpacity="0" />
                                    <stop offset="1" stopColor="white" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
                <span className='about-the-project__text-description'>Мир, где множество разумных творят магию и искусства, ведут торговлю и ремёсла, поклоняются богам, воюют и интригуют. Мир, ставший домом для множества рас. Мир, где каждый может побороться за место под солнцем, но не каждый победит.</span>
                <a className='base__button'>Начать игру</a>
            </div>
        </div>
    )
}