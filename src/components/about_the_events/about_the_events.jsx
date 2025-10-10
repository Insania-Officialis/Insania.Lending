//Компонент информации о событиях
export function AboutTheEvents({ events }) {
    //Получение активного события
    const event = events.find(x => x.active);

    //Возврат компонента
    return (
        <div className='about-the-events__block'>
            <span className='about-the-events__text-title'>Актуальные события</span>
            <span>Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, в текст-«рыба»</span>
            <div className='about-the-events__block-event' style={{ backgroundImage: `url(${event?.url}` }}>
                <div className='about-the-events__block-event-description'>
                    <div className='about-the-events__block-inner-event-description'>
                        <span className='about-the-events__text-title'>{event?.title}</span>
                        <span>{event?.description}</span>
                    </div>
                </div>
                <div className='about-the-events__block-event-pagination'>
                    <div className='about-the-events__block-inner-event-pagination'>
                        {events.map(x => {
                            return (
                                <div key={x.id} className='base__circle'></div>
                            )
                        })}
                        <a className='about-the-events__button-event-pagination'>
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 9C16.5523 9 17 8.55228 17 8C17 7.44772 16.5523 7 16 7V8V9ZM0.292893 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM16 8V7L1 7V8V9L16 9V8Z" fill="white" />
                            </svg>
                        </a>
                        <a className='about-the-events__button-event-pagination'>
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 9C0.447715 9 0 8.55228 0 8C0 7.44772 0.447715 7 1 7L1 8L1 9ZM16.7071 7.29289C17.0976 7.68342 17.0976 8.31658 16.7071 8.70711L10.3431 15.0711C9.95262 15.4616 9.31946 15.4616 8.92893 15.0711C8.53841 14.6805 8.53841 14.0474 8.92893 13.6569L14.5858 8L8.92893 2.34315C8.53841 1.95262 8.53841 1.31946 8.92893 0.928932C9.31946 0.538408 9.95262 0.538408 10.3431 0.928932L16.7071 7.29289ZM1 8L1 7L16 7V8V9L1 9L1 8Z" fill="white" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}