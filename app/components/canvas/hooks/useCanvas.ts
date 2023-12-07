// import {useRef, useEffect, MutableRefObject, LegacyRef, RefObject} from 'react'
//
// const useCanvas = (draw: (containerSize:{height:number,width:number},context:CanvasRenderingContext2D,frameCount:number) => void, containerRef: RefObject<HTMLDivElement>) => {
//
//     const canvasRef = useRef<HTMLCanvasElement | null>(null);
//
//     useEffect(() => {
//         render(canvasRef, draw, containerRef);
//
//         const listener = ()=>render(canvasRef, draw, containerRef)
//         window.addEventListener('resize', listener, false);
//
//         return () =>{
//             window.removeEventListener('resize', listener);
//         }
//
//         // return () => {
//         //     renderReturn();
//         // }
//     }, [draw])
//
//     return canvasRef;
// }
//
// export const render = (canvasRef: MutableRefObject<HTMLCanvasElement | null>, draw: (containerSize:{height:number,width:number}, context:CanvasRenderingContext2D,frameCount:number) => void, containerRef: RefObject<HTMLDivElement>) => {
//     const canvas = canvasRef.current;
//     const context = canvas?.getContext('2d');
//     const container = containerRef.current;
//
//     if(!canvas || !context || !container) return () => {};
//
//     canvas.width = container.clientWidth;
//     canvas.height = container.clientHeight;
//
//     let frameCount = 0;
//     let animationFrameId = 0;
//
//     const renderer = () => {
//         frameCount++;
//         draw(
//             {
//                 height:container.clientHeight,
//                 width:container.clientWidth
//             },
//             context,
//             frameCount);
//         // animationFrameId = window.requestAnimationFrame(render);
//     }
//     renderer();
//
//     // return () => {
//     //     window.cancelAnimationFrame(animationFrameId);
//     // }
// }
//
// export default useCanvas;
