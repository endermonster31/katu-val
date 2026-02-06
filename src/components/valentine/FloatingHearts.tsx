import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const hearts = ["💕", "💖", "💗", "💓", "❤️", "🩷", "💌"];

interface Heart {
  id: number;
  emoji: string;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

const FloatingHearts = () => {
  const [floatingHearts, setFloatingHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const initialHearts: Heart[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      emoji: hearts[Math.floor(Math.random() * hearts.length)],
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 4,
      size: 16 + Math.random() * 20,
    }));
    setFloatingHearts(initialHearts);

    const interval = setInterval(() => {
      setFloatingHearts((prev) => [
        ...prev,
        {
          id: Date.now(),
          emoji: hearts[Math.floor(Math.random() * hearts.length)],
          left: Math.random() * 100,
          delay: 0,
          duration: 3 + Math.random() * 4,
          size: 16 + Math.random() * 20,
        },
      ]);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {floatingHearts.map((heart) => (
        <motion.span
          key={heart.id}
          initial={{ y: "100vh", opacity: 0.8 }}
          animate={{ y: "-10vh", opacity: 0 }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            ease: "easeOut",
          }}
          onAnimationComplete={() => {
            setFloatingHearts((prev) => prev.filter((h) => h.id !== heart.id));
          }}
          className="absolute"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
          }}
        >
          {heart.emoji}
        </motion.span>
      ))}
    </div>
  );
};

export default FloatingHearts;
