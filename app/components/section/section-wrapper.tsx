import Image from "next/image";
import border from "@/public/border.png";
import {ReactNode} from "react";

export type SectionWrapperProps = {
    children?: ReactNode,
    sectionType?: 'fill' | 'transparent',
    grow?:boolean
    position?: 'top' | 'bottom' | 'horizontal'
    id?: string,
    fullWidth?:boolean
};
export default function SectionWrapper({
                                           children,
                                           sectionType = 'fill',
                                           grow = true,
                                           position = 'horizontal',
                                           id = undefined,
                                           fullWidth = false
                                       }: SectionWrapperProps) {
    return (sectionType === 'transparent' ?
        (<div className='section-wrapper-transparent-container relative'>
            <div className={'h-full w-full'}>
            <div id={id} className={'section-wrapper-offset-transparent'}></div>
            <div className={`mx-auto h-full ${fullWidth ? '' : 'wrapper-container-fluid'}`}>
                {children}
            </div>
            </div>
        </div>) :
        (<div className={`${grow? '':'section-wrapper-container-no-grow'} section-wrapper-container ${position}`}>
            <div className={'section-wrapper-content'}>
                <div className={`mx-auto h-full ${fullWidth ? '' : 'wrapper-container-fluid'}`}>
                    {children}
                </div>
            </div>
            {(() => position === 'horizontal' ? (<>
                <div id={id} className={'section-wrapper-offset top'}></div>
                <Image
                    src={border}
                    alt={"Border"}
                    sizes="100vw"
                    className={`section-wrapper-boarder top`}
                />
                <Image
                    src={border}
                    alt={"Border"}
                    sizes="100vw"
                    className={`section-wrapper-boarder bottom`}
                />
            </>) : <>
                <Image
                    src={border}
                    alt={"Border"}
                    sizes="100vw"
                    className={`section-wrapper-boarder ${position}`}
                />
                <div id={id} className={`section-wrapper-offset ${position}`}></div>
            </>)()}
        </div>))
}