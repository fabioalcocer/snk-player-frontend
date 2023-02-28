"use client";
import { useState } from "react";
import { TbMusic, TbMusicOff } from "react-icons/tb";

const URL =
  "https://res.cloudinary.com/daobmfotr/video/upload/v1676518022/anime-imgs/TKT_ozo7id.mp3";

function AudioPlayer() {
  const [isPlaying, togglePlaying] = useState(true);
  const [audio, setAudio] = useState(
    typeof Audio !== "undefined" && new Audio(URL)
  );

  const handlePlay = () => {
    audio.volume = 0.1;
    audio.paused ? audio.play() : audio.pause();
    togglePlaying(!isPlaying);
  };

  return (
    <button
      className="rounded-full bg-gradient-to-r from-yellow-500 to-red-600 p-2 transition-colors duration-500 hover:bg-orange-500"
      onClick={handlePlay}
    >
      {isPlaying ? (
        <TbMusicOff className="text-xl text-zinc-100" />
      ) : (
        <TbMusic className="text-xl text-zinc-100" />
      )}
    </button>
  );
}

export default AudioPlayer;
