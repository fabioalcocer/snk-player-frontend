"use client";
import { useState } from "react";
import { TbMusic, TbMusicOff } from "react-icons/tb";

const url =
  "https://res.cloudinary.com/daobmfotr/video/upload/v1676518022/anime-imgs/TKT_ozo7id.mp3";

function AudioBtn() {
  const [controlPlay, setControlPlay] = useState(true);
  const [song, setSong] = useState(new Audio(url));

  const handlePlay = () => {
    song.volume = 0.1;
    song.paused ? song.play() : song.pause();
    setControlPlay(!controlPlay);
  };

  return (
    <button
      className="rounded-full bg-gradient-to-r from-yellow-500 to-red-600 p-2 transition-colors duration-500 hover:bg-orange-500"
      onClick={handlePlay}
    >
      {controlPlay ? (
        <TbMusicOff className="text-xl text-zinc-100" />
      ) : (
        <TbMusic className="text-xl text-zinc-100" />
      )}
    </button>
  );
}

export default AudioBtn;
