import playAudio from "../utils/audioPlayer";

export default function clickSound(
  node: HTMLElement,
  audio: "button" | "grid"
) {
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
