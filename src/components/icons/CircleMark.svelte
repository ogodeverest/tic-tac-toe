<script lang="ts">
  import type { Color } from "../../models/styleUtils";

  export let style: string = "";
  export let size: string | number = "1rem";
  export let theme: Color = "warm";
</script>

<svg
  class={`stroke-${theme}`}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="17.322 17.321 463.358 463.359"
  width={size}
  height={size}
  {style}
>
  <ellipse
    fill="none"
    stroke-width="125px"
    cx="249"
    cy="249"
    rx="170"
    ry="170"
  />
</svg>
