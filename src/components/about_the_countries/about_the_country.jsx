//��������� ���������� � ������
export default function AboutTheCountry({ isOpen, setIsOpen, country }) {
    //������� ������� ��������, ���� ���� �� �������
    if (!isOpen) return null;

    //����� ��������� �����������
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