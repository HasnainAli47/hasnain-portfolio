"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/* Custom cursor: dot + trailing ring that swells over anything clickable.
   Uses motion values only — no re-renders on mousemove. */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const hotMv = useMotionValue(1);
  const rx = useSpring(x, { stiffness: 300, damping: 28 });
  const ry = useSpring(y, { stiffness: 300, damping: 28 });
  const ringScale = useSpring(hotMv, { stiffness: 260, damping: 20 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    const raf = requestAnimationFrame(() => setEnabled(true));
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const hot = !!(e.target as HTMLElement).closest("a, button, .chip, [data-hot]");
      hotMv.set(hot ? 2.4 : 1);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => { cancelAnimationFrame(raf); window.removeEventListener("mousemove", move); };
  }, [x, y, hotMv]);

  if (!enabled) return null;
  return (
    <>
      <motion.div aria-hidden style={{
        position: "fixed", left: 0, top: 0, x, y, translateX: "-50%", translateY: "-50%",
        width: 6, height: 6, borderRadius: "50%", background: "var(--signal)",
        zIndex: 400, pointerEvents: "none",
      }} />
      <motion.div aria-hidden style={{
        position: "fixed", left: 0, top: 0, x: rx, y: ry, translateX: "-50%", translateY: "-50%",
        scale: ringScale, opacity: 0.55,
        width: 34, height: 34, borderRadius: "50%", border: "1px solid var(--signal)",
        zIndex: 400, pointerEvents: "none",
      }} />
    </>
  );
}
