"use client";
import { useRef, ReactNode } from "react";
import {
  motion, useScroll, useVelocity, useSpring, useTransform,
  useMotionValue, useAnimationFrame, useReducedMotion,
} from "framer-motion";

/* Marquee that speeds up and flips direction with your scroll velocity. */
const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

export default function VelocityMarquee({ children, baseVelocity = 2.4 }: { children: ReactNode; baseVelocity?: number }) {
  const reduced = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smooth = useSpring(scrollVelocity, { damping: 50, stiffness: 380 });
  const factor = useTransform(smooth, [-1200, 0, 1200], [-4, 1, 4], { clamp: false });
  const x = useTransform(baseX, v => `${wrap(-25, 0, v)}%`);
  const dir = useRef(1);

  useAnimationFrame((_, delta) => {
    if (reduced) return;
    let move = dir.current * baseVelocity * (delta / 1000);
    const f = factor.get();
    if (f < 0) dir.current = -1;
    else if (f > 0) dir.current = 1;
    move += dir.current * Math.abs(f) * baseVelocity * (delta / 1000);
    baseX.set(baseX.get() + move);
  });

  return (
    <div className="marquee" style={{ whiteSpace: "nowrap" }}>
      <motion.div style={{ x, display: "flex", flexShrink: 0 }}>
        {[0, 1, 2, 3].map(i => (
          <div key={i} aria-hidden={i > 0} style={{ display: "flex", flexShrink: 0 }}>{children}</div>
        ))}
      </motion.div>
    </div>
  );
}
