import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";

interface PhotoFrameProps {
  label?: string;
  className?: string;
}

const PhotoFrame = ({ label = "Add your photo", className = "" }: PhotoFrameProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`relative mx-auto w-72 h-72 rounded-2xl border-2 border-dashed border-primary/30 bg-rose-soft flex flex-col items-center justify-center gap-3 overflow-hidden ${className}`}
    >
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
        <ImageIcon className="w-6 h-6 text-primary/50" />
      </div>
      <p className="text-sm text-muted-foreground font-body italic">{label}</p>
    </motion.div>
  );
};

export default PhotoFrame;
