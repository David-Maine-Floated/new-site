const Music = () => {
  return (
    <div className="w-100 h-screen flex flex-col justify-normal sm:ml-[200px]">
      <div className="flex justify-center">
        <p className="text-4xl mt-[140px] mx-10">
          When I'm not coding I'm making Music
        </p>
      </div>
      <div className="flex justify-around flex-wrap mt-[75px] ">
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
      </div>
    </div>
  );
};

export default Music;
