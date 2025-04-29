export default function AboutUs({ postion_title, naming, link_vk, email }) {
    return (
        <>
            <tr>
                <td>
                    <span>{postion_title}</span>
                </td>
                <td>
                    <span>{naming}</span>
                </td>
                <td>
                    <span>{link_vk}</span>
                </td>
            </tr>
        </>
    )
}