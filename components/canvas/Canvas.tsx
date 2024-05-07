"use client"
import { useEffect, useRef } from 'react';
import image1 from '../../assets/cookies-animation-1.webp';
import image2 from '../../assets/cookies-animation-2.webp';
import image3 from '../../assets/cookies-animation-3.webp';
import image4 from '../../assets/cookies-animation-4.webp';
import image5 from '../../assets/cookies-animation-5.webp';

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas: any = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let position = 0;
    let direction = 1;
    const images = [image1, image2, image3, image4, image5];
    let currentImage = 0;

    const draw = () => {
      if (!ctx) return;

      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the current image
      const img:any = new Image();
      img.src = images[currentImage];
      ctx.drawImage(img, position, 0);

      // Update position and direction
      position += direction * 5;
      if (position >= canvas.width) {
        position = canvas.width;
        direction = -1;
      } else if (position <= 0) {
        position = 0;
        direction = 1;
        currentImage = (currentImage + 1) % images.length;
      }

      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return <canvas ref={canvasRef} width={800} height={600} />;
};

export default Canvas;
