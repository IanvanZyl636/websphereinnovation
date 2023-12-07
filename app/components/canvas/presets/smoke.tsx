// export function smoke(containerSize: {
//     height: number,
//     width: number
// }, ctx: CanvasRenderingContext2D, frameCount: number,) {
//     const smoke = new Smoke(containerSize, ctx);
// }
//
// export class Smoke {
//     private reverse: boolean = false;
//     private pause = false;
//     private canvas: CanvasRenderingContext2D;
//     private containerSize: { height: number, width: number };
//     private fps:number;
//     private particles: Particle[];
//     private previousTime:Date = new Date();
//     private fpsAdjustment = 0;
//
//     private fpsTriggerInterval: NodeJS.Timeout
//
//     constructor(containerSize: { height: number, width: number }, canvas: CanvasRenderingContext2D, fps: number = 60) {
//         this.containerSize = containerSize;
//         this.canvas = canvas;
//         this.fps = fps;
//         this.fpsAdjustment = fps;
//         const gravity = 100;
//
//         this.particles = [
//             new Particle(canvas, gravity,0 + 20 , 0 + 20, 20, 'blue', 0, 0, this.fpsAdjustment)
//         ];
//
//         this.fpsTriggerInterval = this.fpsTrigger();
//         this.registerKeyEvents();
//     }
//
//     private fpsTrigger() {
//         return setInterval(() => {
//             this.particleFrameEvent();
//         }, 1000 / this.fps);
//     }
//
//     particleFrameEvent(reverse: boolean = false) {
//         this.canvas.clearRect(0, 0, this.containerSize.width, this.containerSize.height);
//
//         this.particles.forEach((particle) => {
//             const exceedsContainerLeft = particle.leftEdge + particle.velocityX < 0;
//             const exceedsContainerRight = particle.rightEdge + particle.velocityX > this.containerSize.width;
//             const exceedsContainerTop = particle.topEdge + particle.velocityY < 0;
//             const exceedsContainerBottom = particle.bottomEdge + particle.velocityY > this.containerSize.height;
//
//             let remainderX = 0;
//             let remainderY = 0;
//
//             if (exceedsContainerLeft) {
//                 remainderX = particle.leftEdge;
//                 particle.x = 0 + particle.radius;
//             }
//
//             if (exceedsContainerRight) {
//                 remainderX = (this.containerSize.width - particle.rightEdge) *-1;
//                 particle.x = this.containerSize.width - particle.radius;
//             }
//
//             if (exceedsContainerTop) {
//                 remainderY = particle.topEdge;
//                 particle.y = 0 + particle.radius;
//             }
//
//             if (exceedsContainerBottom) {
//                 remainderY = (this.containerSize.height - particle.bottomEdge) * -1;
//                 particle.y = this.containerSize.height - particle.radius;
//             }
//
//             particle.particleAction(exceedsContainerLeft || exceedsContainerRight || reverse, exceedsContainerTop || exceedsContainerBottom || reverse, remainderX, remainderY);
//         });
//     }
//
//     registerKeyEvents() {
//         window.addEventListener('keypress', (e) => {
//             if (e.code === 'Space') {
//                 if (this.pause === false) {
//                     clearInterval(this.fpsTriggerInterval);
//                     this.pause = true;
//                 } else {
//                     this.pause = false;
//                     this.fpsTriggerInterval = this.fpsTrigger();
//                 }
//             }
//
//             if (e.code === 'Period') {
//                 if (this.reverse) {
//                     this.particleFrameEvent(true);
//                     this.reverse = false;
//                 } else {
//                     this.particleFrameEvent();
//                 }
//             }
//
//             if (e.code === 'Comma') {
//                 if (!this.reverse) {
//                     this.particleFrameEvent(true);
//                     this.reverse = true;
//                 } else {
//                     this.particleFrameEvent();
//                 }
//             }
//         })
//     }
// }
//
// class Particle {
//     public get leftEdge() {return this.x - this.radius;}
//     public get rightEdge(){return this.x + this.radius;}
//     public get topEdge(){ return this.y - this.radius;}
//     public get bottomEdge(){ return this.y + this.radius;}
//     public get velocityX(){return this._velocityX / this.fpsAdjustment;};
//     public get velocityY(){return this._velocityY / this.fpsAdjustment;};
//     public get gravity(){return this._gravity / this.fpsAdjustment;}
//
//     public x: number;
//     public y: number;
//     public radius: number;
//
//     private color: string;
//     private _velocityX: number = 0;
//     private _velocityY: number = 0;
//     private _gravity:number = 0;
//     private fpsAdjustment = 0;
//
//     constructor(private ctx: CanvasRenderingContext2D, gravity:number, x: number, y: number, initialRadius: number, color: string, initialVelocitX: number, initialVelocitY: number,fpsAdjustment:number = 1) {
//         this.x = x;
//         this.y = y;
//         this.radius = initialRadius;
//         this.color = color;
//         this.fpsAdjustment = fpsAdjustment;
//         this._velocityX = initialVelocitX;
//         this._velocityY = initialVelocitY;
//         this._gravity = gravity;
//     }
//
//     public particleAction(velocityReverseX: boolean = false, velocityReverseY: boolean = false, remainderX: number = 0, remainderY:number = 0) {
//         this.drawParticle();
//
//         if (velocityReverseY) {
//             if(this.velocityY <= 0.03 && this.velocityY >= -0.03){
//                 this._velocityY = 0;
//             }
//             this._velocityY = this.reverseVelocity(this._velocityY);
//             this.applyGravity();
//         }
//
//         this.y += this.velocityY + remainderY;
//
//         this.applyGravity();
//
//     }
//
//     private applyGravity(){
//         this._velocityY += this.gravity;
//     }
//
//     private drawParticle(){
//         this.ctx.beginPath();
//         this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
//         this.ctx.fillStyle = this.color;
//         this.ctx.fill();
//     }
//
//     private reverseVelocity(velocity:number){
//         return velocity * -1;
//     }
// }