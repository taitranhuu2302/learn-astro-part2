<script lang="ts">
  import type {ToastItemType} from "../../../types/toast";
  import {removeToast} from "../../../stores/toastStore";
  import {slide} from 'svelte/transition'
  import {quintOut} from "svelte/easing";

  export let toast: ToastItemType
  let slideAnimate = {
    duration: 300,
    opacity: 0.5,
    easing: quintOut
  }
</script>

<li class={`toast-item ${toast.type}`} in:slide={slideAnimate} out:slide={slideAnimate}>
  <div class="flex items-center gap-2.5">
    {#if toast.type === 'success'}
      <i class="toast-icon fas fa-check-circle"></i>
    {:else if toast.type === 'error'}
      <i class="toast-icon fas fa-exclamation-circle"></i>
    {/if}
    <p>{toast.message}</p>
  </div>
  <button class="btn-close" on:click={() => removeToast(toast.id)}>
    <i class="far fa-times"></i>
  </button>
</li>

<style lang="scss">
  .toast-item {
    @apply p-3 flex items-center gap-2.5 rounded relative w-full justify-between shadow max-w-[320px];

    &:before {
      content: "";
      @apply absolute left-[-1px] top-0 h-full w-[3px];
    }

    p {
      @apply font-medium;
    }

    &.success {
      @apply bg-[#d7eddc] border border-[#96cfa2];

      &:before {
        @apply bg-[#17a44a];
      }

      .toast-icon {
        @apply text-[#17a44a];
      }
    }

    &.error {
      @apply bg-[#fbd6db] border border-[#f393a2];

      &:before {
        @apply bg-[#e21c48];
      }

      .toast-icon {
        @apply text-[#e21c48];
      }
    }
  }
</style>