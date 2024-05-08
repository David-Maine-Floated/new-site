"use client";

// import { Button } from "@/components/ui/button";
import PageWrapper from "../components/ui/pageWrapper";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <PageWrapper>
      <main className="flex w-full sm:box-border mt-[50px] sm:mt-0 flex-col justify-between sm:pl-[240px]">
        <div className="flex justify-center w-full flex-col">
          <div className="flex w-full justify-evenly flex-wrap pt-[4px] sm:pt-0">
            <img
              className="rounded-full w-[250px] sm:w-[300px] sm:h-[310px] sm:mt-10"
              src="/david_images/david-pic.png"
              alt="Picture of me"
            />
            <div>
              <div className="flex justify-center">
                <p className="text-4xl pt-5 sm:pl-0 sm:pb-5">Hello!</p>
              </div>
              <div className="flex justify-center">
                <p className="text-4xl ">I'm David Maine</p>
              </div>
              <div className="flex justify-betweeen">
            </div>

              <p className="text-lg mt-10 max-w-[600px]">
                I'm NYC based full stack software engineer who specializes in
                React. I would love to help you build whatever it is your
                dreaming of.
              </p>
              <p className="text-lg mt-10 max-w-[600px]">
                Currently I do freelance code projects, like building websites
                for art galleries or artists. I also work at
                hellomusictheory.com where I debug the codebase, am working on a
                band name generator, and update/maintain the website.
              </p>
            </div>
          </div>
          <motion.div
            animate={{ opacity: 1, y: 15 }}
            transition={{ delay: 0.25 }}
            initial={{ opacity: 0, y: 15 }}
            exist={{ opacity: 0, y: 15 }}
          >
            <div className="w-full mt-10 ">
              <div className="flex justify-center text-xl ">
                <p>Favorite Tools:</p>
              </div>
              <div className="flex justify-evenly flex-wrap">
                <img
                  className="w-[200px] h-auto"
                  src="/david_images/React.png"
                  alt=""
                />
                <img
                  className="w-[200px] h-auto"
                  src="/david_images/Redux.png"
                  alt=""
                />
                <img
                  className="w-[200px] h-auto"
                  src="/david_images/Rails.png"
                  alt=""
                />
                <img
                  className="w-[200px] h-auto"
                  src="/david_images/Next.js.avif"
                  alt=""
                />
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </PageWrapper>
  );
}
