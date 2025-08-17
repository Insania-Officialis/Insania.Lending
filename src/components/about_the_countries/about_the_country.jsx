//Компонент информации о стране
export default function AboutTheCountry({ isOpen, setIsOpen, country }) {
    //Возврат пустого элемента, если окно не открыто
    if (!isOpen) return null;

    //Вывод основного содержимого
    return (
        <div className='about-the-country__block' onClick={() => setIsOpen(false)}>
            <div className='about-the-country__block-content'>
                <span style={{ textAlign: 'center' }} >{country.name}</span>
                <div className='about-the-country__block-info'>
                    <img className='about-the-country__image' src={country.image} />
                    <span>{country.description}</span>
                </div>
            </div>
        </div>
    )
}