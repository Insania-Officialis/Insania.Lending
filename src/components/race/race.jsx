import Information from '../information/information.jsx'
import Collection from '../collection/collection.jsx'

export default function Race() {
    return (
        <div id="race" className="information__block">
            <Information title="О РАСАХ" text="Выберите одну из 22 рас и 56 наций. Каждая из них обладает своими особенностями и своей неповторимой историей. Станьте долгоживущим эльфом, воинственным орком, трудолюбивым дварфом или попробуйте более экзотичную расу. Но помните, что ваша судьба неразрывно будет связана с этим выбором." />
            <Collection />
        </div>
    )
}