import { countries } from '../../data/countries.js'

import Information from '../information/information.jsx'
import Collection from '../collection/collection.jsx'

export default function Country() {
    return (
        <div id="country" name="section" className="information__block">
            <Information title="О СТРАНАХ" text="Выберите одну из 22 стран. От островной и холодной Альвраатской империи на севере до жаркоого Мерегрской Унии. От племенного княжества Ректа до просвящённой Орлиадарской конфедерации. Горы, равнины, болота, заснеженные пустоши и пустыни. Для каждого найдётся место в этом огромном мире" />
            <Collection collection={countries} maxElement={5} />
        </div>
    )
}