import React, { useRef, useEffect } from "react";
import styles from '../sections/styles/HeroSection.module.css'; // Importing the CSS Module

const HeroSection = ({ children }) => {
  // Reference to the canvas element
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    const mouse = { x: 0, y: 0 };

    const handleMouseMove = (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    };
    window.addEventListener("mousemove", handleMouseMove);

    let bubbleCord = [];
    const balls = 100;

    for (let i = 0; i < balls; i++) {
      bubbleCord.push({
        x: Math.random() * innerWidth,
        y: Math.random() * innerHeight,
        radius: Math.random() * 5 + 2,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
      });
    }

    function draw() {
      for (let i = 0; i < bubbleCord.length; i++) {
        const bubble = bubbleCord[i];
        c.beginPath();
        c.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2, false);
        c.strokeStyle = "#fff";
        c.stroke();
        c.fillStyle = "#404040";
        c.fill();
      }

      c.beginPath();
      for (let i = 0; i < bubbleCord.length; i++) {
        const l1 = bubbleCord[i];
        c.moveTo(l1.x, l1.y);

        if (distance(mouse, l1) < 70) {
          c.lineTo(mouse.x, mouse.y);
        }

        for (let j = 0; j < bubbleCord.length; j++) {
          const l2 = bubbleCord[j];
          if (distance(l1, l2) < 100) {
            c.lineTo(l2.x, l2.y);
          }
        }
      }

      c.lineWidth = 0.05;
      c.strokeStyle = "#fff";
      c.stroke();
    }

    function update() {
      for (let i = 0; i < bubbleCord.length; i++) {
        const s = bubbleCord[i];
        if (s.x < 0 || s.x > canvas.width) {
          s.dx = -s.dx;
        }
        if (s.y < 0 || s.y > canvas.height) {
          s.dy = -s.dy;
        }
        s.x += s.dx;
        s.y += s.dy;
      }

      draw();
    }

    function distance(point1, point2) {
      const dx = point2.x - point1.x;
      const dy = point2.y - point1.y;
      return Math.sqrt(dx * dx + dy * dy);
    }

    function animate() {
      c.clearRect(0, 0, canvas.width, canvas.height);
      update();
      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className={styles.heroSection}>
      {/* Canvas for the background animation */}
      <canvas ref={canvasRef} className={styles.canvas} />
      
      {/* Foreground content */}
      <div className={styles.content}>
        {children}
        <h2 className={styles.title}>My name is <span className={styles.highlight}>Adam Tanweer<span className={styles.bulletpoint}>.</span></span></h2>        
        <p className={styles.description}>University student with an interest in Software Engineering</p>
        <button className={styles.button}>Find out more!</button>
      </div>
    </div>
  );
};

export default HeroSection;
