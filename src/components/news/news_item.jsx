export default function NewsItem({ name, image, active, click }) {
    let classes = "news__item-block";

    if (active) classes += ' news__item-block--active'
    return (
        <div className={classes} onClick={click}>
            <img src={image} alt="" className="news__image" />
            <span>{name}</span>
        </div>
    )
}