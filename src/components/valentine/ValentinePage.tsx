import { useState } from "react";
import { motion } from "framer-motion";
import PhotoFrame from "./PhotoFrame";
import ResponseBubble from "./ResponseBubble";
import { Button } from "@/components/ui/button";

interface ValentinePageProps {
  headline: string;
  photoLabel?: string;
  question: string;
  optionA: string;
  optionB: string;
  responseA: string;
  responseB: string;
  onNext: () => void;
}

const ValentinePage = ({
  headline,
  photoLabel,
  question,
  optionA,
  optionB,
  responseA,
  responseB,
  onNext,
}: ValentinePageProps) => {
  const [selected, setSelected] = useState<"a" | "b" | null>(null);

  const response = selected === "a" ? responseA : selected === "b" ? responseB : "";

  return (
    <div className="w-full max-w-2xl mx-auto px-6 py-12 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-10 leading-snug"
      >
        {headline}
      </motion.h1>

      <PhotoFrame label={photoLabel} />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-10 text-lg text-foreground/70 font-body italic"
      >
        {question}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex gap-4 justify-center mt-6"
      >
        <Button
          variant={selected === "a" ? "default" : "outline"}
          onClick={() => setSelected("a")}
          className="rounded-full px-6 py-2 text-base font-body transition-all duration-300 hover:shadow-md hover:scale-105"
        >
          {optionA}
        </Button>
        <Button
          variant={selected === "b" ? "default" : "outline"}
          onClick={() => setSelected("b")}
          className="rounded-full px-6 py-2 text-base font-body transition-all duration-300 hover:shadow-md hover:scale-105"
        >
          {optionB}
        </Button>
      </motion.div>

      <ResponseBubble message={response} visible={selected !== null} />

      {selected && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-8"
        >
          <Button
            onClick={onNext}
            variant="ghost"
            className="text-primary font-body text-base hover:text-primary/80 transition-all duration-300 hover:scale-105"
          >
            Next →
          </Button>
        </motion.div>
      )}
    </div>
  );
};

export default ValentinePage;
