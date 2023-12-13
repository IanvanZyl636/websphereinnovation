import rocket_smoke from "@/public/rocket_smoke.svg";

import Image from "next/image";

export function Rocket() {

    return (
        <div className={'flex w-full h-full flex-col justify-center'}>
            <Image src={rocket_smoke} alt={'rocket'}
                   style={{
                       maxWidth:'100%',
                       width:"100%",
                       height:"auto",
                       zIndex:2,
                       bottom:-2,
                       left:0,
                       position:'absolute'
                   }}/>
        </div>
    );
}