import AboutUsItem from './about_us_item.jsx'
import Information from '../information/information.jsx'

export default function AboutUs() {
    return (
        <div id="about_us" name="section" className="information__block">
            <Information title="О НАС" text="Администрация проекта Инсания всегда готова ответить на вопросы пользователей об игре. Вы можете обратиться к любому администратору в ВК по ссылкам указанным ниже. В списке представлены члены Главного капитула проекта. Мы ценим анонимность в нашем проекте и не разглашаем контакты администраторов без их согласия" />
            <table className="about-us__table">
                <tbody>
                    <AboutUsItem postion_title="Демиург" naming="Альтаир фон Альфхейм" link_vk="https://vk.com/altair_fon_alfheim" />
                    <AboutUsItem postion_title="Великий магистр" naming="Иван Хачко" link_vk="https://vk.com/khachko09" />
                    <AboutUsItem postion_title="Верховный архивариус" naming="Николай Льдинин" link_vk="https://vk.com/dartusmortem" />
                    <AboutUsItem postion_title="Верховный картограф" naming="Аллен О'Брайен" link_vk="https://vk.com/allenobrien" />
                </tbody>
            </table>
        </div>
    )
}