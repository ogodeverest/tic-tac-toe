<script lang="ts">
  export let size: string | number = "1em";
  export let color: string = "#fff";
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="17.322 17.321 463.358 463.359"
  width={size}
  height={size}
>
  <ellipse cx="249" cy="249" rx="170" ry="170" stroke={color} />
</svg>

<style lang="scss">
  ellipse {
    fill: none;
    stroke-width: 125px;
  }
</style>
