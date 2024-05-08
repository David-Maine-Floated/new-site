"use client";
import { motion } from "framer-motion";

export default function RotationWrapper({ children }) {
  return (
    <div>
      <motion.div
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{
          scale: 0.8,
          rotate: -90,
          borderRadius: "100%",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
