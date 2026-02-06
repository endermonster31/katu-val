import { motion } from "framer-motion";
import PageTransition from "@/components/valentine/PageTransition";
import FloatingHearts from "@/components/valentine/FloatingHearts";

const ConfirmYes = () => {
  return (
    <PageTransition>
      <div className="relative w-full max-w-2xl mx-auto px-6 py-12 text-center z-10">
        <FloatingHearts />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-6xl mb-8"
          >
            💌
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-6 leading-snug"
          >
            You've made me the happiest person.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-xl text-foreground/70 font-body italic leading-relaxed"
          >
            Happy Valentine's Day, my love. 💕
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-10 inline-block bg-primary/10 rounded-2xl px-8 py-4"
          >
            <p className="text-foreground/60 font-body text-sm">
              Forever & always yours ♥
            </p>
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default ConfirmYes;
