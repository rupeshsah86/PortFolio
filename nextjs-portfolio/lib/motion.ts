import type { Variants, Transition } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 20 },
  animate:     { opacity: 1, y: 0 },
  transition:  { duration: 0.6, ease, delay } as Transition,
});

export const inView = (delay = 0) => ({
  initial:     { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true },
  transition:  { duration: 0.5, ease, delay } as Transition,
});

export const inViewX = (delay = 0) => ({
  initial:     { opacity: 0, x: -16 },
  whileInView: { opacity: 1, x: 0 },
  viewport:    { once: true },
  transition:  { duration: 0.5, ease, delay } as Transition,
});

export const scaleIn = (delay = 0) => ({
  initial:    { opacity: 0, scale: 0.96 },
  animate:    { opacity: 1, scale: 1 },
  transition: { duration: 0.7, ease, delay } as Transition,
});
