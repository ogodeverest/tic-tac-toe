<script lang="ts">
  import toCSSVariables from "../utils/CSSVariables";

  export let style: string = "";
  export let type: "button" | "submit" | "reset" = "button";
  export let theme: "primary" | "warm" | "cold" | "neutral" = "primary";
  export let disabled: boolean = false;
  export let color: string = "var(--clr-body)";
  export let fontSize: string = "1em";

  let bgColor: string = `var(--clr-${theme})`;
  let shadowColor: string = `var(--clr-${theme}-darker)`;
  style += toCSSVariables({ color, bgColor, shadowColor, fontSize });
</script>

<button class="button" {...{ disabled, type, style }} on:click>
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
    letter-spacing: 1px;
    @include box(var(--bgColor));
    @include key-button(var(--shadowColor), 5px);
    padding: 1em 1.5em;
  }
</style>
