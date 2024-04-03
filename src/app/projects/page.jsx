"use client";

import ProjectCard from "@/components/ui/ProjectCard";

const Projects = () => {
  return (
    <main className="flex min-h-screen w-screen sm:w-screen box-border flex-col items-center sm:pl-[13rem]">
      <div>
        <p className="text-4xl pt-[150px] sm:pt-[50px] mb-10">Featured Work</p>
      </div>
      <div className="flex sm:w-100 justify-around sm:box-border">
        <div className="flex flex-wrap h-[500px] justify-around sm:px-10">
          <ProjectCard
            imageUrl={"project_images/Maineum2.png"}
            videoUrl={"/project_images/Maineum-Demo-2.mov"}
            title="Maineum"
            description={
              "A full-stack website inspired by the popular blog website Medium. Features include creating a user accout, creating/updating/deleting articles with text and images.  The backend is built with Ruby on Rails, and the frontend with React-Redux."
            }
          />
          <ProjectCard
            videoUrl="/project_images/Track-Shack-medium.mov"
            title="Track Shack"
            description="I project managed and flex-engineered this web application for musicians and producers to collaborate on projects. Users can upload audio files, album art, and descriptions of the project. Each project allows other users to download the associated audio files, upload their own audio files as contributions, and leave comments to discuss the project. Users must create accounts and log in to be able to upload/download audio files and leave comments. Built with React, Redux, Express.js, MongoDB, Mongoose."
            gitUrl="https://github.com/KooShnoo/track-shack"
            liveUrl="https://track-shack.netlify.app/"
          />
          <ProjectCard
            videoUrl="/project_images/Cats 2.mov"
            title="Cute Cat Club"
            description="A fun webpage which shares interesting facts about different cat breeds. Built in Vanilla JS. Cat lovers unite!"
            gitUrl="https://github.com/David-Maine-Floated/Cute-Cat-Club"
            liveUrl="https://david-maine-floated.github.io/Cute-Cat-Club/"
          />
        </div>
      </div>
    </main>
  );
};

export default Projects;
