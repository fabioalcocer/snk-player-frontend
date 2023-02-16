"use client";
import { useState } from "react";
import AudioPlayer from "react-audio-player"; // @ts-ignore

const ReactAudioPlayer: any = AudioPlayer.default // @ts-ignore
  ? AudioPlayer.default // @ts-ignore
  : AudioPlayer;

function AudioBtn() {
  const [isMuted, setIsMuted] = useState(false);
  return (
    <button className="bg-white p-2" onClick={() => setIsMuted(!isMuted)}>
      Play
      <ReactAudioPlayer
        src="https://res.cloudinary.com/daobmfotr/video/upload/v1676513293/anime-imgs/Attack_On_Titan_-_Vogel_im_K%C3%A4fig_c9xjvx.mp3"
        muted={isMuted}
        autoPlay
        volume={0.1}
        loop
      />
    </button>
  );
}

export default AudioBtn;
