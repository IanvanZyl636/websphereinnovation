import MenuLogo from "@/app/components/menu/components/menu-logo";

export default function MainMenu() {
    return (
        <menu className={'menu-container'}>
            <nav className={'menu-nav wrapper-container-fluid relative mx-auto'}>
                <a href={'/#section0'}>
                    <li className={'menu-logo-container'}>
                        <MenuLogo></MenuLogo>
                    </li>
                </a>
                <a href={'/#section2'}>
                    <li>
                        About Us
                    </li>
                </a>
                <a href={'/#section1'}>
                    <li>
                        Our Services
                    </li>
                </a>
                <a>
                    <li>
                        Contact Us
                    </li>
                </a>
            </nav>
        </menu>)
}