<script lang="ts">
  import { CircleMark, CrossMark } from "../../../components";
  import type { Mark } from "../../../utils/Player";
  import clickSound from "../../../actions/clickSound";

  export let group: Mark;
  export let value: Mark;
  let theme: "body" | "neutral";

  $: theme = value === group ? "body" : "neutral";
  const size: string = "1.6rem";
</script>

<label class="mark-radio box" use:clickSound={"grid"}>
  {#if value === "O"}
    <CircleMark {theme} {size} />
  {:else}
    <CrossMark {theme} {size} />
  {/if}
  <input type="radio" name="mark" bind:group {value} />
</label>

<style lang="scss">
  .mark-radio {
    flex-basis: 50%;
    cursor: pointer;
    height: 100%;
    &:has(input[type="radio"]:checked) {
      background-color: var(--clr-neutral);
    }

    & > input {
      display: none;
    }
  }
</style>
