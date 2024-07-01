<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<div class="h3">Your Garage</div>
{#each data.vehicles.items as vehicle}
  <a class="block card card-hover my-4 p-4" href="/{vehicle.id}">
    <span>
      {vehicle.year}
      {vehicle.make}
      {vehicle.model}
    </span>
  </a>
{/each}
