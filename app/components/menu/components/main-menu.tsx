import MenuLogo from "@/app/components/menu/components/menu-logo";

export default function MainMenu({className}:{className: string | undefined}) {
    return (
        <div className={`menu-container ${className}`}>
            <menu className={' menu-nav wrapper-container-fluid relative mx-auto w-full'}>
                <a href={'/#section0'}>
                    <div className={'menu-logo-container'}>
                        <MenuLogo></MenuLogo>
                    </div>
                </a>
                <a href={'/#section1'}>
                    <div>
                        Our Services
                    </div>
                </a>
                <a href={'/#section2'}>
                    <div>
                        About Us
                    </div>
                </a>
                <a href={'/#section4'}>
                    <div>
                        Contact Us
                    </div>
                </a>
        </menu>
        </div>)
}