import human from '/images/human.png'

import CollectionItem from '../collection/collection_item.jsx'

export default function Collection() {
    return (
        <div className="information__block">
            <div className="collection__items">
                <div className="collection__item-block">
                    <img src={human} alt="" className="collection__image" />
                    <span>ЛЮДИ</span>
                </div>
                <div className="collection__item-block">
                    <img src={human} alt="" className="collection__image" />
                    <span>ЛЮДИ</span>
                </div>
                <div className="collection__item-block">
                    <img src={human} alt="" className="collection__image" />
                    <span>ЛЮДИ</span>
                </div>
                <div className="collection__item-block">
                    <img src={human} alt="" className="collection__image" />
                    <span>ЛЮДИ</span>
                </div>
                <div className="collection__item-block collection__item-block--active">
                    <img src={human} alt="" className="collection__image collection__image--active" />
                    <span>ЛЮДИ</span>
                </div>
                <div className="collection__item-block">
                    <img src={human} alt="" className="collection__image" />
                    <span>ЛЮДИ</span>
                </div>
                <div className="collection__item-block">
                    <img src={human} alt="" className="collection__image" />
                    <span>ЛЮДИ</span>
                </div>
                <div className="collection__item-block">
                    <img src={human} alt="" className="collection__image" />
                    <span>ЛЮДИ</span>
                </div>
                <div className="collection__item-block">
                    <img src={human} alt="" className="collection__image" />
                    <span>ЛЮДИ</span>
                </div>
            </div>
            <span className="information__text">Люди - самая многичесленная и разнообразная раса, проживающая на материке Асфалия. Людям принадлежат 7 стран от Барьерного хребта на севере до Южной Равнины. Они состоят из 15 самых разнообразных наций и имеют 4 официальных вероисповедания. Люди не имеют ярко-выраженных сильных сторон, но и не имеют ярких слабостей. Их век краток, но ярок.</span>
        </div>
    )
}