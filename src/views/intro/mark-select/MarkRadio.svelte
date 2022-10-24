<script lang="ts">
  import clickSound from "@actions/clickSound";
  import PlayerMark from "@components/PlayerMark.svelte";
  import type Player from "@utils/Player";

  export let group: Player;
  export let value: Player;
</script>

<label class="mark-radio box" use:clickSound={"grid"}>
  <PlayerMark
    player={value}
    size="1.6rem"
    theme={value === group ? "body" : "neutral"}
  />

  <input type="radio" name="mark" bind:group {value} />
</label>

<style lang="scss">
  .mark-radio {
    flex-basis: 100%;
    cursor: pointer;
    height: 4em;
    &:has(input[type="radio"]:checked) {
      background-color: var(--clr-neutral);
    }

    & > input {
      display: none;
    }
  }
</style>
