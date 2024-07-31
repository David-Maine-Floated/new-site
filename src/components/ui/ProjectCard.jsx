// "use client";

import { useRef } from "react";
import { Button } from "./button";

const ProjectCard = ({
  imageUrl,
  description,
  title,
  videoUrl,
  gitUrl,
  liveUrl,
}) => {
  let videoRef = useRef(null);

  const restartVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <div className=" w-full sm:w-[450px] px-5 pt-[40px] box-border">
      {videoUrl && (
        <video
          src={videoUrl}
          autoPlay
          muted
          onEnded={restartVideo}
          ref={videoRef}
        ></video>
      )}
      {imageUrl && (
        <img style={{ height: "225px", width: "500px" }} src={imageUrl}></img>
      )}
      <div className="flex justify-center">
        <p className="text-3xl mt-5 mb-5">{title}</p>
      </div>
      <p className="sm:h-[300px] px-5">{description}</p>
      <div className="mt-5 flex justify-evenly">
        <a className="w-[200px]" href={liveUrl} target="_blank">
          <Button>
            <p>Visit the Live site</p>{" "}
          </Button>
        </a>
        {gitUrl && (
          <a className="w-[200px]" href={gitUrl} target="_blank">
            <Button>
              <p>See the code</p>
            </Button>
          </a>
        )}
      </div>
      <div className="border-b-[1px] mt-10"></div>
    </div>
  );
};

export default ProjectCard;
