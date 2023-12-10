import {ReactNode} from "react";

export function Grid({children,className, gridCols='lg:grid-cols-3'}:{children:ReactNode, className?:string, gridCols?:string}){
    return <div className={`grid gap-6 ${gridCols} justify-center ${className}`}>
        {children}
    </div>
}