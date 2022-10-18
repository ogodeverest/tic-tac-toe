import playAudio, { type AudioOptions } from "../utils/audioPlayer";

export default function clickSound(node: HTMLElement, audio: AudioOptions) {
  const handleClick = () => {
    playAudio(audio);
  };

  node.addEventListener("click", handleClick, true);

  return {
    destroy() {
      node.removeEventListener("click", handleClick, true);
    },
  };
}
