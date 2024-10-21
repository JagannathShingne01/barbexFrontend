"use client"
import { createContext, useContext } from "react";
import { motion, useReducedMotion } from "framer-motion";

const FadeInStaggerContext = createContext(false);
const viewport = { once: true, margin: "0px 0px -200px" };

export function Fade(props) {
  let shouldReduceMotion = useReducedMotion();
  let isInStaggerGroup = useContext(FadeInStaggerContext);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: "hidden",
            whileInView: "visible",
            viewport,
            
          })}
      {...props}
    />
  );
}

export function FadeUp(props) {
  let shouldReduceMotion = useReducedMotion();
  let isInStaggerGroup = useContext(FadeInStaggerContext);

  return (
    <motion.div
    
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6}}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: true, amount: 0.5 },
          })}
      {...props}
    />
  );
}
