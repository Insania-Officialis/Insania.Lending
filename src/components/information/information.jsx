export default function Information({ title, text }) {
    return (
        <div className="information__block">
            <span>{title}</span>
            {
                (text !== null && text !== undefined && text.length) && <span className="information__text">{text}</span>
            }
        </div>
    )
}