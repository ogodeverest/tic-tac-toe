<script lang="ts">
  import type { Color } from "@models/styleUtils";

  export let style: string = "";
  export let size: string | number = "1rem";
  export let theme: Color = "warm";
</script>

<svg
  class={`stroke-${theme} fill-${theme}`}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="17.322 17.321 463.358 463.359"
  width={size}
  {style}
>
  <slot />
</svg>
