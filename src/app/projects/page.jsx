"use client";

import ProjectCard from "@/components/ui/ProjectCard";
import PageWrapper from "@/components/ui/pageWrapper";
import { motion } from "framer-motion";

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

const Projects = () => {
  return (
    <main className="flex h-full w-screen box-border sm:w-full sm:pl-[20px] flex-col items-center ">
      <PageWrapper>
        <div>
          <p className="text-4xl pt-[150px] sm:pt-[50px] mb-10">
            Featured Work
          </p>
        </div>
      </PageWrapper>
      <div className="w-full box-border">
        <div className="flex w-full flex-wrap box-border h-[500px] sm:px-10">
          <motion.ul
            className="container flex flex-wrap h-[500px] justify-around"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.li key={1} className="item" variants={item}>
              <ProjectCard
                imageUrl={"project_images/Maineum2.png"}
                videoUrl={"/project_images/Maineum-Demo-2.mov"}
                title="Maineum"
                description={
                  "A full-stack website inspired by the popular blog website Medium. Features include creating a user accout, creating/updating/deleting articles with text and images. Tech Stack: React, Redux, Ruby on Rails, Active Record, PostgreSQL, AWS. Jquery"
                }
              />
            </motion.li>
            <motion.li key={2} className="item" variants={item}>
              <ProjectCard
                videoUrl="/project_images/Track-Shack-medium.mov"
                title="Track Shack"
                description="I project managed and flex-engineered this web application for musicians and producers to collaborate on projects. Users can upload audio files, album art, and descriptions of the project. Each project allows other users to download the associated audio files, upload their own audio files as contributions, and leave comments to discuss the project. Users must create accounts and log in to be able to upload/download audio files and leave comments. Tech Stack: React, Redux, Express.js, MongoDB, Mongoose, AWS."
                gitUrl="https://github.com/KooShnoo/track-shack"
                liveUrl="https://track-shack.netlify.app/"
              />
            </motion.li>
            <motion.li key={3} className="item" variants={item}>
              <ProjectCard
                videoUrl="/project_images/Turquoise.mov"
                title="Turquoise Gallery"
                description="I was brought in as the single engineer to build a website, database, and admin system for NYC art gallery: Turquoise Gallery. I worked with their designer, turning their mockups into pixel perfect/dynamic UI's. Currently I'm building out their admin system + database, which will give the ability for the admin to create new shows, upload artworks, and display them on the website. Tech Stack: Next.js, TypeScript, PostgreSQL, Prisma ORM, AWS"
                gitUrl="https://github.com/David-Maine-Floated/Turquoise"
                liveUrl="https://www.turquoisenyc.com/"
              />
            </motion.li>
            <motion.li key={4} className="item" variants={item}>
              <ProjectCard
                videoUrl="/project_images/Cats 2.mov"
                title="Cute Cat Club"
                description="A fun webpage which shares interesting facts about different cat breeds. Cat lovers unite! Built in Vanilla JS. "
                gitUrl="https://github.com/David-Maine-Floated/Cute-Cat-Club"
                liveUrl="https://david-maine-floated.github.io/Cute-Cat-Club/"
              />
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </main>
  );
};

export default Projects;
