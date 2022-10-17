<script lang="ts">
  export let style: string = "";
  export let size: string | number = "1rem";
  export let theme: "primary" | "warm" | "cold" | "neutral" | "body" =
    "primary";
  $: color = `var(--clr-${theme})`;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="17.322 17.321 463.358 463.359"
  width={size}
  height={size}
  {style}
>
  <g transform="matrix(1, 0, 0, 1, -3.331085, 6.662214)">
    <rect
      transform="matrix(0.707107, 0.707107, -0.707107, 0.707107, 365.859589, -142.93132)"
      x="121.982"
      y="87.704"
      width="140"
      height="530"
      rx="14"
      ry="14"
      fill={color}
    />
    <rect
      transform="matrix(0.707107, -0.707107, 0.707107, 0.707107, -248.766296, 244.059845)"
      x="285.546"
      y="87.944"
      width="140"
      height="530"
      rx="14"
      ry="14"
      fill={color}
    />
  </g>
</svg>
