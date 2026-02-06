import { motion } from "framer-motion";

interface ResponseBubbleProps {
  message: string;
  visible: boolean;
}

const ResponseBubble = ({ message, visible }: ResponseBubbleProps) => {
  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mx-auto max-w-md mt-6"
    >
      <div className="relative bg-card border border-primary/20 rounded-2xl px-6 py-4 shadow-sm">
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-card border-l border-t border-primary/20 rotate-45" />
        <p className="text-foreground/80 text-center font-body italic leading-relaxed">
          {message}
        </p>
      </div>
    </motion.div>
  );
};

export default ResponseBubble;
