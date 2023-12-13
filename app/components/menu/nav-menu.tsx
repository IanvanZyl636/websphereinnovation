import MainMenu from "@/app/components/menu/components/main-menu";
import MobileMenu from "@/app/components/menu/components/mobile-menu";

export default function NavMenu() {
    return (<>
        <MainMenu className={'hidden md:block'}></MainMenu>
        <MobileMenu className={'visible md:hidden'}></MobileMenu>
    </>)
}
