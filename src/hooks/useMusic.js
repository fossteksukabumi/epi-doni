import { useRef } from "react";

export const useMusic = (musicSrc) => {
  const audioRef = useRef(new Audio(musicSrc));
  audioRef.current.loop = true;

  const play = () => {
    audioRef.current.play();
  };

  return { play };
};
