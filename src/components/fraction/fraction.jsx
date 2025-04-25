import { fractions } from '../../data/fractions.js'

import Information from '../information/information.jsx'
import Collection from '../collection/collection.jsx'

export default function Fraction() {
    return (
        <div id="fraction" name="section" className="information__block">
            <Information title="О ФРАКЦИЯХ" text="9 фракций определяют ту деятельность, которой вы желаете заниматься в игре. Зачастую профессия определят вашу фракцию. Но всегда есть возможность её изменить" />
            <Collection collection={fractions} maxElement={9} />
        </div>
    )
}