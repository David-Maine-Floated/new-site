"use client";

import PageWrapper from "@/components/ui/pageWrapper";

import { motion } from "framer-motion";
import MusicItem from "./musicItem";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Music = () => {
  return (
    // <PageWrapper>
    <>
      <div className="w-full sm:w-full h-full flex flex-col justify-normal sm:pl-[200px]">
        <div className="flex justify-center">
          <p className="text-4xl mt-[140px] sm:mt-[100px] mx-10">
            When I'm not coding I'm making Music
          </p>
        </div>
        <div >
          <motion.ul
            className="flex justify-around flex-wrap mt-[75px] px-5 sm:px-0"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.li key={0} className="item" variants={item}>
              <a
                href="https://open.spotify.com/artist/0x4xCoWaOFd3WsKarzaxnW?si=zs1qwjt3QKGBLPoy8mlbHQ"
                target="_blank"
                className="mb-10 hover:translate-x-1 hover:-translate-y-1  transition-transform duration-300"
              >
                <div className="flex justify-center">
                  <p className="text-lg">Frankie Cosmos</p>
                </div>
                <img
                  className="w-[385.5px] h-auto"
                  src="/david_images/Frankie.png"
                  alt=""
                />
              </a>
            </motion.li>
            <motion.li key={0} className="item" variants={item}></motion.li>
            <a
              className="mb-10 hover:translate-x-1 hover:-translate-y-1  transition-transform duration-300"
              href="https://open.spotify.com/artist/4440TTGblbIlIldFRFVktf?si=UgyAli1zSa6PXpNLduzH7g"
              target="_blank"
            >
              <div className="flex justify-center">
                <p className="text-lg">David AM</p>
              </div>
              <img
                className="w-[400px] h-auto"
                src="/david_images/DavidAm.png"
                alt=""
              />
            </a>
          </motion.ul>
        </div>
      </div>
      {/* </PageWrapper> */}
    </>
  );
};

export default Music;
