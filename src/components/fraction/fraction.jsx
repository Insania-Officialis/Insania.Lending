import { fractions } from '../../data/fractions.js'

import Information from '../information/information.jsx'
import Collection from '../collection/collection.jsx'

export default function Fraction() {
    return (
        <div id="fraction" name="section" className="information__block">
            <Information title="О ФРАКЦИЯХ" text="9 фракций определяют направление деятельности персонажа в игре. Фракция не определяет незыблемые правила, а лишь помогает выбрать наиболее интересное направление развития. Не редко, когда персонаж может попасть сразу в несколько фракций, как и в течении своей жизни перейти из одной в другую" />
            <Collection collection={fractions} maxElement={7} />
        </div>
    )
}