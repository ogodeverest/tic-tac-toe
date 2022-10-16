import button from "../assets/audios/button.wav";
import grid from "../assets/audios/grid.wav";
import win from "../assets/audios/win.wav";
import tie from "../assets/audios/tie.wav";

export type AudioOptions = "button" | "grid" | "win" | "tie";

const sounds: Map<AudioOptions, HTMLAudioElement> = new Map();
sounds.set("button", new Audio(button));
sounds.set("grid", new Audio(grid));
sounds.set("win", new Audio(win));
sounds.set("tie", new Audio(tie));

export default function playAudio(sound: AudioOptions) {
  return sounds.get(sound).play();
}
