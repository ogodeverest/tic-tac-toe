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

<dialog class="dialog" bind:this={dialog}>
  {#if show}
    <center in:fade>
      {#if $$slots.title}
        <header class="dialog__header">
          <h1 class="dialog__title">
            <slot name="title" />
          </h1>
        </header>
      {/if}
      <section class="dialog__content">
        <slot name="content" />
      </section>
      <footer class="dialog__footer">
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
      height: 45vh;
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
    background-color: var(--clr-primary);
    border: none;
    transform: translateY(-50%);
    overflow: hidden;

    &[open] {
      animation: expand 0.4s ease-in-out forwards;
    }

    &::backdrop {
      background-color: rgba(0, 0, 0, 0.45);
      backdrop-filter: blur(5px);
    }

    & > center {
      display: flex;
      flex-direction: column;
      gap: 2em;
      justify-content: center;
      align-items: center;
      height: 100%;
    }

    &__header {
      color: var(--clr-neutral);
    }
    &__title {
      font-size: 1.1rem;
    }

    &__content {
      font-size: max(1.7rem, 4vw);
    }

    &__footer {
      display: flex;
      flex-direction: row;
      gap: 1em;
    }
  }
</style>
