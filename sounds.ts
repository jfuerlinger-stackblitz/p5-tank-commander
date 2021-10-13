export let backgroundMusic: HTMLAudioElement;

export function preload() {
  backgroundMusic = new Audio(
    'https://satankcommander.blob.core.windows.net/assets/bensound-epic.mp3'
  );
}
