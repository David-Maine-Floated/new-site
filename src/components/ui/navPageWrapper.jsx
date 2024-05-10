"use client";
import { motion } from "framer-motion";

export default function NavPageWrapper({ children }) {
  return (
    <>
      <motion.div
        className="flex flex-wrap justify-center items-start"
        animate={{ opacity: 1, y: 15 }}
        transition={{ delay: 0.25 }}
        initial={{ opacity: 0, y: 15 }}
        exist={{ opacity: 0, y: 15 }}
      >
        {children}
      </motion.div>
    </>
  );
}
