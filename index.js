import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [stage, setStage] = useState(0);
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (stage === 1 && count < 7000000000) {
      const interval = setInterval(() => setCount((c) => c * 2), 100);
      return () => clearInterval(interval);
    }
    if (count >= 7000000000) setStage(2);
  }, [stage, count]);

  return (
    <div className="h-screen w-screen bg-black text-white flex items-center justify-center flex-col font-mono">
      {stage === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          onAnimationComplete={() => setStage(1)}
          className="text-4xl"
        >
          0- <span className="mx-4">:</span> 0+
        </motion.div>
      )}

      {stage === 1 && (
        <motion.div
          key="count"
          className="text-2xl mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {count.toLocaleString("de-CH")}
        </motion.div>
      )}

      {stage === 2 && (
        <AnimatePresence>
          <motion.div
            key="tree"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="mt-10 text-center"
          >
            <div className="text-5xl tracking-widest">RKΑPΩ</div>
            <div className="mt-4 text-sm">dal centro nasce il fulmine</div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
