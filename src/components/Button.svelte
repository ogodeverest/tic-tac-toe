<script lang="ts">
  import clickSound from "../actions/clickSound";
  import toCSSVariables from "../utils/CSSVariables";

  export let type: "button" | "submit" | "reset" = "button";
  export let sound: "button" | "grid" = "button";
  export let theme: "primary" | "warm" | "cold" | "neutral" = "primary";
  export let disabled: boolean = false;
  export let color: string = "var(--clr-body)";
  export let fontSize: string = "1em";
  export let style: string = "";

  let bgColor: string = `var(--clr-${theme})`;
  let shadowColor: string = `var(--clr-${theme}-darker)`;
  style += toCSSVariables({ color, bgColor, shadowColor, fontSize });
</script>

<button
  class="button"
  {...{ disabled, type, style }}
  on:click
  use:clickSound={sound}
>
  <slot />
</button>

<style lang="scss">
  @import "../scss/mixins";

  .button {
    appearance: none;
    font-size: var(--fontSize);
    text-transform: uppercase;
    color: var(--color);
    font-weight: 900;
    letter-spacing: inherit;
    @include box(var(--bgColor));
    @include key-button(var(--shadowColor), 5px);
    padding: 1em 1.5em;
  }
</style>
