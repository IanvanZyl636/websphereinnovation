import Image from "next/image";
import logo from '@/public/logo.png'

export default function MenuLogo() {
    return (
        <div className={'menu-logo'}>
            <Image
                alt="Website logo"
                src={logo}
                style={{
                    width: 'auto',
                    height: '100%',
                    display: 'inline-block',
                }}
            />
            <span style={{
                display: 'inline-block',
                marginLeft:'16px',
                fontWeight:'600',
                color:'white'
            }}>
                Websphere Innovations
            </span>
        </div>
    )
}
