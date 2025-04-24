export default function CollectionItem({ name, image, active, click }) {
    let classes = "collection__item-block";

    if (active) classes += ' collection__item-block--active'
    return (
        <div className={classes} onClick={click}>
            <img src={image} alt="" className="collection__image" />
            <span>{name}</span>
        </div>
    )
}