"use client";
import Maineum from "@/app/projects/maineum/page";
import { useRef } from "react";
import { Button } from "./button";

const ProjectCard = ({ imageUrl, description, title, videoUrl, codeUrl, liveUrl }) => {
  let videoRef = useRef(null);

  const restartVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <div className="w-[450px]">
      {/* <img src={imageUrl} alt="" /> */}
      <video
        src={videoUrl}
        autoPlay
        muted
        onEnd={restartVideo}
        ref={videoRef}
      ></video>
      <div className="flex justify-center">
        <p className="text-3xl mt-5 mb-5">{title}</p>
      </div>
      <p>{description}</p>
      <div className="mt-5 flex justify-evenly">
        <a
          className="w-[200px]"
          href={liveUrl}
          target="_blank"
        >
          <Button>
            <p>Visit the Live site</p>{" "}
          </Button>
        </a>
        <a
          className="w-[200px]"
          href={codeUrl}
          target="_blank"
        >
          <Button>
            <p>See the code</p>
          </Button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
