"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function FormulaLayer() {
  const { scrollYProgress } = useScroll();
  const driftX = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const driftY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const driftXAlt = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const driftYAlt = useTransform(scrollYProgress, [0, 1], ["-4%", "12%"]);

  return (
    <div className="formula-layer" aria-hidden="true">
      <motion.div
        className="formula formula--large"
        style={{ x: driftX, y: driftY }}
      >
        P(A|B) = (P(B|A) * P(A)) / P(B)
      </motion.div>
      <motion.div
        className="formula formula--medium"
        style={{ x: driftXAlt, y: driftYAlt }}
      >
        posterior ~ likelihood * prior
      </motion.div>
      <motion.div
        className="formula formula--small"
        style={{ x: driftX, y: driftYAlt }}
      >
        argmax P(theta|D) -&gt; clarity
      </motion.div>
      <motion.svg
        className="bayes-graph"
        viewBox="0 0 600 200"
        style={{ y: driftY }}
      >
        <path
          d="M20 160 C120 40, 240 40, 340 140 S520 200, 580 60"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M40 150 L140 110 L240 130 L340 80 L440 100 L560 70"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          strokeLinecap="round"
        />
      </motion.svg>
    </div>
  );
}
