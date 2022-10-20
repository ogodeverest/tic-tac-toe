<script lang="ts">
  import clickSound from "../../../actions/clickSound";
  import marks from "../../../utils/marks";
  import type { Mark } from "../../../utils/Player";

  export let group: Mark;
  export let value: Mark;
</script>

<label class="mark-radio box" use:clickSound={"grid"}>
  <svelte:component
    this={marks.get(value)}
    size="1.6rem"
    theme={value === group ? "body" : "neutral"}
  />
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
