import { races } from '../../data/races.js'

import Information from '../information/information.jsx'
import Collection from '../collection/collection.jsx'

export default function Race() {
    return (
        <div id="race" name="section" className="information__block">
            <Information title="О РАСАХ" text="Выберите одну из 15 рас и 54 наций. Каждая из них обладает своими особенностями и своей неповторимой историей. Станьте долгоживущим эльфом, воинственным орком, трудолюбивым дворфом или попробуйте более экзотичную расу. Но помните, что ваша судьба неразрывно будет связана с этим выбором." />
            <Collection collection={races} maxElement={9} />
        </div>
    )
}