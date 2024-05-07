// import { useEffect, useRef } from 'react';

// export default function PrivacyAnimation() {
//     const canvasRef = useRef(null);
//     const images = [
//         '/privacy-animation-1.webp',
//         '/privacy-animation-2.webp',
//         '/privacy-animation-3.webp',
//         '/privacy-animation-4.webp',
//         '/privacy-animation-5.webp',
//         '/privacy-animation-6.webp',
//         '/privacy-animation-7.webp',
//       ];

//     useEffect(() => {
//         const canvas = canvasRef.current;
//         const ctx = canvas.getContext('2d');
//         const imageObjects = [];

//         const animate = () => {
//             ctx.clearRect(0, 0, canvas.width, canvas.height);
//             imageObjects.forEach(image => {
//                 image.update(canvas.width, canvas.height);
//                 image.draw(ctx);
//             });
//             requestAnimationFrame(animate);
//         };

//         const resizeCanvas = () => {
//             canvas.width = window.innerWidth;
//             canvas.height = window.innerHeight;
//         };

//         const ImageObject = class {
//             constructor(src, x, y, speed, width, height) {
//                 this.image = new Image();
//                 this.image.src = src;
//                 this.image.onload = () => {
//                     this.isLoaded = true;
//                 };
//                 this.x = x;
//                 this.y = y;
//                 this.speed = speed;
//                 this.width = width;
//                 this.height = height;
//                 this.isLoaded = false;
//             }

//             draw(ctx) {
//                 if (this.isLoaded) {
//                     ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
//                 }
//             }

//             update(canvasWidth, canvasHeight) {
//                 this.x += this.speed;
//                 if (this.x > canvasWidth) {
//                     this.x = -this.width;
//                     this.y = Math.random() * (canvasHeight - this.height);
//                     this.speed = 1 + Math.random() * 3; // Random speed between 1 and 3
//                 }
//             }
//         };

//         for (let i = 0; i < images.length; i++) {
//             const maxWidth = Math.min(200, Math.random() * 200);
//             const aspectRatio = canvas.width / canvas.height;
//             const width = maxWidth;
//             const height = maxWidth / aspectRatio;
//             const image = new ImageObject(images[i], Math.random() * canvas.width, Math.random() * canvas.height, 1 + Math.random() * 3, width, height);
//             imageObjects.push(image);
//         }

//         resizeCanvas();
//         animate();

//         window.addEventListener('resize', resizeCanvas);

//         return () => {
//             window.removeEventListener('resize', resizeCanvas);
//         };
//     }, []);

//     return <canvas ref={canvasRef}></canvas>;
// }

'use client'
import { useEffect, useRef } from 'react';

export default function PrivacyAnimation() {
    const canvasRef = useRef(null);
    const images = [
        '/privacy-animation-1.webp',
        '/privacy-animation-2.webp',
        '/privacy-animation-3.webp',
        '/privacy-animation-4.webp',
        '/privacy-animation-5.webp',
        '/privacy-animation-6.webp',
        '/privacy-animation-7.webp',
    ];

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const imageObjects = [];

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            imageObjects.forEach(image => {
                image.update(canvas.width, canvas.height);
                image.draw(ctx);
            });
            requestAnimationFrame(animate);
        };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const ImageObject = class {
            constructor(src, x, y, speed, width, height) {
                this.image = new Image();
                this.image.src = src;
                this.image.onload = () => {
                    this.isLoaded = true;
                };
                this.x = x;
                this.y = y;
                this.speed = speed;
                this.width = 40; // Set width to 40px
                this.height = 40; // Set height to 40px
                this.isLoaded = false;
            }

            draw(ctx) {
                if (this.isLoaded) {
                    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
                }
            }

            update(canvasWidth, canvasHeight) {
                this.x += this.speed;
                if (this.x > canvasWidth) {
                    this.x = -this.width;
                    this.y = Math.random() * (canvasHeight - this.height);
                    this.speed = 1 + Math.random() * 3; // Random speed between 1 and 3
                }
            }
        };

        for (let i = 0; i < images.length; i++) {
            const maxWidth = Math.min(200, Math.random() * 200);
            const aspectRatio = canvas.width / canvas.height;
            const width = 40; // Set width to 40px
            const height = 40; // Set height to 40px
            const image = new ImageObject(images[i], Math.random() * canvas.width, Math.random() * canvas.height, 1 + Math.random() * 3, width, height);
            imageObjects.push(image);
        }

        resizeCanvas();
        animate();

        window.addEventListener('resize', resizeCanvas);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return <canvas ref={canvasRef}></canvas>;
}
