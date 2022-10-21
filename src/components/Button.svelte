<script lang="ts">
  import type Color from "@types/Color";
  import clickSound from "@actions/clickSound";
  import type { AudioOptions } from "@utils/audioPlayer";

  type Size = "sm" | "md" | "lg";

  export let type: "button" | "submit" | "reset" = "button";
  export let sound: AudioOptions = "button";
  export let theme: Color = "primary";
  export let color: Color = "body";
  export let size: Size = "md";
  export let style: string = "";
  export let disabled: boolean = false;
</script>

<button
  class={`button box bg-${theme} clr-${color} fs-${size} fw-bolder shadow-${theme}-darker`}
  {...{ disabled, type, style }}
  on:click
  use:clickSound={sound}
>
  <slot />
</button>

<style lang="scss">
  .button {
    appearance: none;
    outline: 0;
    border: none;
    text-transform: inherit;
    letter-spacing: inherit;
    cursor: pointer;
    padding: 1em 1.5em;
  }
</style>
