//Компонент призыва к действию
export function CallToAction({ image }) {
    //Возврат компонента
    return (
        <div className='call-to-action__block'>
            <div className='call-to-action__block-inner'>
                <div className='call-to-action__block-title'>
                    <span>Начните играть</span>
                    <span className='call-to-action__text-title'>СЕЙЧАС</span>
                </div>
                <span>Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, вставляемый в макет страницы). Используется для образца шрифта и текста, а также для заполнения полей на странице.</span>
                <a className='base__button'>Пройти регистрацию</a>
            </div>
        </div>
    );
}