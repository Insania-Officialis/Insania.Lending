import LogoImage from './logo_image.jsx'
import LogoText from './logo_text.jsx'

export default function Logo() {
    return (
        <div className="logo">
            <LogoImage />
            <LogoText text="ИНСАНИЯ" />
        </div>
    )
}