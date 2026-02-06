import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PageTransition from "@/components/valentine/PageTransition";
import { Button } from "@/components/ui/button";

const ConfirmNo = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="w-full max-w-2xl mx-auto px-6 py-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl mb-8"
          >
            🥺
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-3xl md:text-4xl font-display font-semibold text-foreground/70 mb-6 leading-snug"
          >
            That's okay…
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-lg text-muted-foreground font-body italic leading-relaxed max-w-md mx-auto"
          >
            But just know, my heart will always be yours. 💔
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="mt-10"
          >
            <Button
              onClick={() => navigate("/")}
              variant="ghost"
              className="text-primary/70 font-body text-sm hover:text-primary transition-colors duration-300"
            >
              ← Are you sure? Go back…
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default ConfirmNo;
