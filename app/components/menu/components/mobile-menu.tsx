'use client'

import MenuLogo from "@/app/components/menu/components/menu-logo";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import {faXmark} from "@fortawesome/free-solid-svg-icons/faXmark";
import {useState} from "react";
import {Button} from "@/app/integration/material-tailwind-react";

export default function MobileMenu({className}: { className: string | undefined }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className={`menu-container relative ${className}`}>
            <menu className={'menu-nav wrapper-container-fluid relative mx-auto w-full'}>
                <a href={'/#section0'}>
                    <div className={'menu-logo-container'}>
                        <MenuLogo></MenuLogo>
                    </div>
                </a>
                <div className={'grow'}></div>
                <div className={'flex flex-col justify-center align-middle'}>
                    <div onClick={() => setMenuOpen(!menuOpen)}
                         className={'p-2 rounded-lg burger-menu-container cursor-pointer'}>
                        {!menuOpen ? <FontAwesomeIcon icon={faBars} size={'xl'}/> : <FontAwesomeIcon icon={faXmark}/>}
                    </div>
                </div>
            </menu>
            {menuOpen ?
                <menu className={'mobile-menu-dropdown absolute bottom-0 translate-y-full bg-black w-full'}>
                    <a href={'/#section1'} onClick={() => setMenuOpen(!menuOpen)}>
                        <Button fullWidth size="lg" className={'rounded-none'}>Our Services</Button>
                    </a>
                    <a href={'/#section2'} onClick={() => setMenuOpen(!menuOpen)}>
                        <Button fullWidth size="lg" className={'rounded-none'}>About Us</Button>
                    </a>
                    <a href={'/#section4'} onClick={() => setMenuOpen(!menuOpen)}>
                        <Button fullWidth size="lg" className={'rounded-none'}>Contact Us</Button>
                    </a>
                </menu>
                :
                <></>}

        </div>)
}