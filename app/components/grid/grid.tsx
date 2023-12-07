export function Grid({children,className, gridCols='lg:grid-cols-3'}:{children:any, className?:string, gridCols?:string}){
    return <div className={`grid gap-6 ${gridCols} justify-center ${className}`}>
        {children}
    </div>
}