


const MusicItem = ({href, imageSrc}) => {
    

    return (
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
    
    )
}

export default MusicItem 