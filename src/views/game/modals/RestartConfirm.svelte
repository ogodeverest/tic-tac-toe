<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { Button } from "../../../components";
  import Dialog from "./Dialog.svelte";
  import store from "../../../store";
  export let show: boolean = false;

  const dispatch = createEventDispatcher();

  function handleCancel() {
    dispatch("toggleConfirm");
  }

  function handleRestart() {
    handleCancel();
    store.restart();
  }
</script>

<Dialog {show}>
  <svelte:fragment slot="content">
    <h2 class="message clr-neutral">Restart game?</h2>
  </svelte:fragment>
  <svelte:fragment slot="footer">
    <Button theme="neutral" on:click={handleCancel}>No, cancel</Button>
    <Button theme="warm" on:click={handleRestart}>Yes, restart</Button>
  </svelte:fragment>
</Dialog>

<style lang="scss">
  .message {
    font-size: inherit;
  }
</style>
