'use client';
import { motion } from "framer-motion";

export default function PageWrapper({children}) {


    return (
      <>
        <motion.div 
            animate={{opacity: 1, y: 15 }} 
            transition={{ delay: 0.25 }}
            initial={{opacity: 0, y: 15}}
            exist={{ opacity: 0, y: 15}}
            >
          {children}
        </motion.div>
      </>
    );
}