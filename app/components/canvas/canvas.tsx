// import {useEffect, useRef} from "react";
// import type p5 from 'p5';
//
// class Particle {
//     private position:p5.Vector;
//     private velocity:p5.Vector
//     private radius:number;
//     private alpha:number;
//     private symbol:p5.Vector;
//
//     private get top(){
//         return this.position.y - this.radius
//     }
//
//     private get bottom(){
//         return this.position.y + this.radius
//     }
//
//     private get left(){
//         return this.position.x - this.radius
//     }
//
//     private get right(){
//         return this.position.x + this.radius
//     }
//     constructor(private p:p5) {
//         const symbolX = Math.floor(Math.random() * 2) === 0 ? 1: -1;
//
//         this.symbol = this.p.createVector(symbolX, 1);
//         this.velocity = this.p.createVector(this.p.random(0,20), this.p.random(40,80));
//         this.radius = this.p.random(5,20);
//         this.position = this.p.createVector(this.p.width / 3, 0 + this.radius);
//         this.alpha = 255;
//     }
//
//     update() {
//         const velocity =  this.p.createVector(this.symbol.x * this.velocity.x,this.symbol.y * this.velocity.y)
//
//         this.position.add(velocity);
//         this.alpha -= 1;
//         this.checkBoundry();
//     }
//
//     display() {
//         this.p.noStroke();
//         this.p.fill(255, this.alpha);
//         this.p.ellipse(this.position.x, this.position.y, this.radius * 2, this.radius * 2);
//     }
//
//     isOffscreen() {
//         return (this.position.x < 0 || this.position.x > this.p.width || this.position.y < 0 || this.position.y > this.p.height);
//     }
//
//     isFaded() {
//         return this.alpha < 0 ;
//     }
//
//     private checkBoundry(){
//         const exceedsContainerLeft = this.left < 0;
//         const exceedsContainerRight = this.right > this.p.width;
//         const exceedsContainerTop = this.top < 0;
//         const exceedsContainerBottom = this.bottom > this.p.height;
//
//         if(exceedsContainerLeft || exceedsContainerRight){
//             this.exceedsContainer('x', exceedsContainerLeft);
//
//             this.inverseVelocity();
//             this.addFriction();
//             this.velocity.x = this.p.random(0,3);
//         }
//
//         if(exceedsContainerTop){
//             this.exceedsContainer('y', exceedsContainerTop);
//             this.addFriction();
//             this.velocity.x += this.p.random(0,0.5)
//         }
//
//         if(exceedsContainerBottom){
//             this.exceedsContainer('y', exceedsContainerTop);
//
//             this.inverseVelocity();
//             this.addFriction();
//             this.velocity.y = this.p.random(0,2);
//         }
//     }
//
//     private exceedsContainer(axis:'x'|'y', exceedsZeroContainerLimit:boolean){
//         this.symbol[axis] = -this.symbol[axis];
//         this.position[axis] = exceedsZeroContainerLimit ? 0 + this.radius: (axis === 'x' ?  this.p.width : this.p.height) - this.radius;
//     }
//
//     private inverseVelocity(){
//         const velocityX = this.velocity.x;
//
//         this.velocity.x = this.velocity.y;
//         this.velocity.y = velocityX;
//     }
//
//     private addFriction(){
//         const friction = 0.25;
//
//         this.velocity.x = this.velocity.x * friction;
//         this.velocity.y = this.velocity.y * friction;
//     }
// }
// export function Canvas() {
//     // create a reference to the container in which the p5 instance should place the canvas
//     const p5ContainerRef = useRef<HTMLDivElement|null>(null);
//
//
//     useEffect(() => {
//
//         const p5 = require('p5');
//         const p5Container = p5ContainerRef.current;
//
//         if (!p5Container) return;
//         const sketch = (p: p5) => {
//             const particles: Array<Particle> = [];
//             // p is a reference to the p5 instance this sketch is attached to
//             p.setup = function () {
//                 p.createCanvas(p5Container.clientWidth, p5Container.clientHeight);
//                 // let particle = new Particle(p);
//                 // particles.push(particle);
//             }
//             p.draw = function () {
//                 p.clear();
//
//                 // Create a new particle each frame
//                 particles.push(new Particle(p));
//                 particles.push(new Particle(p));
//                 particles.push(new Particle(p));
//                 particles.push(new Particle(p));
//
//                 // Loop through particles and update/draw each one
//                 for (let i = particles.length - 1; i >= 0; i--) {
//                     particles[i].display();
//                     particles[i].update();
//
//                     // Remove particles that are off-screen
//                     if (particles[i].isFaded()) {
//                         particles.splice(i, 1);
//                     }
//                 }
//             }
//
//             p.windowResized = function () {
//                 p.resizeCanvas(p5Container.clientWidth, 250);
//             }
//         }
//
//         // On component creation, instantiate a p5 object with the sketch and container reference
//         const p5Instance = new p5(sketch, p5Container) as p5;
//
//         // On component destruction, delete the p5 instance
//         return () => {
//             p5Instance.remove();
//         }
//     }, []);
//
//     return (
//         <div className={'w-full relative fixed'} style={{height:'400px'}} ref={p5ContainerRef} />
//     );
// }