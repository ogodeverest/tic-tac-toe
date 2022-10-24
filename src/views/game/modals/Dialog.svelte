<script lang="ts">
  import { fade } from "svelte/transition";

  export let show: boolean = false;
  let dialog: HTMLDialogElement;

  $: if (show) {
    dialog?.showModal();
  } else {
    dialog?.close();
  }
</script>

<dialog class="dialog bg-primary" bind:this={dialog}>
  {#if show}
    <center in:fade class="flex-column flex-center">
      {#if $$slots.title}
        <header>
          <h1 class="fs-md clr-neutral">
            <slot name="title" />
          </h1>
        </header>
      {/if}
      <section class="fs-lg">
        <slot name="content" />
      </section>
      <footer class="dialog__footer flex-row">
        <slot name="footer" />
      </footer>
    </center>
  {/if}
</dialog>

<style lang="scss">
  @keyframes expand {
    from {
      height: 0;
    }
    to {
      height: 43vh;
    }
  }
  .dialog {
    position: fixed;
    top: 50%;
    left: 0;
    right: 0;
    width: 100%;
    max-width: 100%;
    margin: 0;
    border: none;
    transform: translateY(-50%);
    overflow: hidden;
    padding: 0;

    &[open] {
      animation: expand 0.4s ease-in-out forwards;
    }

    &::backdrop {
      background-color: rgba(0, 0, 0, 0.45);
      backdrop-filter: blur(5px);
    }

    & > center {
      display: flex;
      gap: 2em;
      height: 100%;
    }

    &__footer {
      gap: 1em;
    }
  }
</style>
