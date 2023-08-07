<script lang="ts">
  import ToastItem from "./ToastItem.svelte";
  import {toastStore} from "../../../stores/toastStore";
</script>

<div class="toast-container">
  <ul class="list-toast">
    {#each $toastStore as toast}
      <ToastItem toast={toast}/>
    {/each}
  </ul>
</div>

<style lang="scss">
  .toast-container {
    @apply fixed bottom-5 right-5 z-[1000];

    .list-toast {
      @apply flex flex-col gap-2.5;
    }
  }
</style>