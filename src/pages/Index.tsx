import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import PageTransition from "@/components/valentine/PageTransition";
import ValentinePage from "@/components/valentine/ValentinePage";
import PhotoFrame from "@/components/valentine/PhotoFrame";
import { Button } from "@/components/ui/button";

const pages = [
  {
    headline: "Do you remember the first time we met?",
    photoLabel: "Add a photo of when you first met",
    question: "What did you feel in that moment?",
    optionA: "Butterflies",
    optionB: "Instantly at home",
    responseA: "I felt them too… like the whole world paused just for us.",
    responseB: "That's the most beautiful thing — feeling home in someone's eyes from the very first moment.",
  },
  {
    headline: "Every moment with you feels like a story worth telling.",
    photoLabel: "Add a photo of your favorite adventure",
    question: "What's your favorite memory of us?",
    optionA: "Our late-night talks",
    optionB: "That spontaneous trip",
    responseA: "Those 3 AM conversations where we forgot the world existed… those are my favorite chapters too.",
    responseB: "The best adventures are the unplanned ones — especially when they're with you.",
  },
  {
    headline: "You make the ordinary feel extraordinary.",
    photoLabel: "Add a photo that captures your love",
    question: "What's the little thing I do that makes you smile?",
    optionA: "The way you laugh",
    optionB: "Your handwritten notes",
    responseA: "Your laugh is my favorite sound in the entire universe. I'd do anything to hear it every day.",
    responseB: "Every little note you write is a treasure I'll keep forever. Your words mean the world to me.",
  },
];

const Index = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentPage < 3) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  // Pages 1-3 content
  if (currentPage < 3) {
    const page = pages[currentPage];
    return (
      <AnimatePresence mode="wait">
        <PageTransition key={currentPage}>
          <ValentinePage
            headline={page.headline}
            photoLabel={page.photoLabel}
            question={page.question}
            optionA={page.optionA}
            optionB={page.optionB}
            responseA={page.responseA}
            responseB={page.responseB}
            onNext={handleNext}
          />
        </PageTransition>
      </AnimatePresence>
    );
  }

  // Page 4 — The Question
  return (
    <AnimatePresence mode="wait">
      <PageTransition key="question">
        <div className="w-full max-w-2xl mx-auto px-6 py-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-10 leading-snug"
          >
            I have one more question for you...
          </motion.h1>

          <PhotoFrame label="Add your favorite photo of you two" />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 text-xl text-foreground/80 font-body italic"
          >
            Will you be my Valentine? 💕
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex gap-5 justify-center mt-8"
          >
            <Button
              onClick={() => navigate("/yes")}
              className="rounded-full px-8 py-3 text-lg font-body bg-primary text-primary-foreground hover:shadow-lg hover:scale-105 transition-all duration-300"
              size="lg"
            >
              Yes 💕
            </Button>
            <Button
              onClick={() => navigate("/no")}
              variant="outline"
              className="rounded-full px-8 py-3 text-lg font-body hover:shadow-md hover:scale-105 transition-all duration-300"
              size="lg"
            >
              No
            </Button>
          </motion.div>
        </div>
      </PageTransition>
    </AnimatePresence>
  );
};

export default Index;
