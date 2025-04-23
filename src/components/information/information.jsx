export default function Information({ title, text }) {
    return (
        <div className="information__block">
            <span>{title}</span>
            <span className="information__text">{text}</span>
        </div>
    )
}