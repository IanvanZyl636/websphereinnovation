import {ReactNode} from "react";

export function GridItem({children}:{children:ReactNode}){
    return <div className={'grid-item'}>
        {children}
    </div>
}