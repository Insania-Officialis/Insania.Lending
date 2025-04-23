export default function CollectionItem({ title, text }) {
    return (
        <div className="information__block">
            <span>{title}</span>
            <span className="collection__text">{text}</span>
        </div>
    )
}