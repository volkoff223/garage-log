<script lang="ts">
  import "../app.postcss";
  import { initializeStores, Drawer, Toast } from "@skeletonlabs/skeleton";
  import type { DrawerSettings, DrawerStore } from "@skeletonlabs/skeleton";

  initializeStores();

  import { getDrawerStore } from "@skeletonlabs/skeleton";
  import { draw } from "svelte/transition";

  const settings: DrawerSettings = {
    position: "right",
    width: "w-[220px] md:w-[380px]",
  };

  const drawerStore = getDrawerStore();
</script>

<Toast />
<Drawer>
  <div class="flex-col p-3">
    <button
      class="btn btn-sm variant-soft my-4"
      on:click={() => drawerStore.close()}
    >
      X
    </button>
    <nav class="list-nav">
      <!-- (optionally you can provide a label here) -->
      <ul>
        <li>
          <button class="btn btn-sm variant-ghost-primary my-3">
            <a href="/" on:click={() => drawerStore.close()}>
              <span> View Garage </span>
            </a>
          </button>
        </li>
        <li>
          <button class="btn btn-sm variant-ghost-primary my-3">
            <a href="/add" on:click={() => drawerStore.close()}>
              <span> Add Vehicle </span>
            </a>
          </button>
        </li>
        <li>
          <a href="/auth" on:click={() => (window.location.href = "/auth")}>
            <span> Logout </span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</Drawer>

<div class="flex items-center justify-between">
  <h1 class="h1 m-3">
    <!-- svelte-ignore a11y-missing-attribute -->
    <a
      href="/"
      class="bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone"
      >Garage Log</a
    >
  </h1>
  <button
    class="btn btn-sm variant-soft mx-3"
    on:click={() => drawerStore.open(settings)}>Menu</button
  >
</div>
<hr />
<div class=" h-full p-8 md:px-40 lg:px-80">
  <slot />
</div>
