<script lang="ts">
  import type { PageData } from "./$types.js";
  export let data: PageData;
</script>

<div class="card p-4">
  <header class="card-header">
    <h2 class="h2">
      <span class="gradient-heading">{data.year} {data.make} {data.model}</span>
    </h2>
  </header>
  <section class="p-4">
    <div>Cost: ${data.cost}</div>
    <div>Purchase Date: {data.purchaseDate}</div>
    <div>Miles: {data.miles}</div>
    <a href="/{data.id}/edit">
      <button class="btn variant-soft-primary">Edit</button>
    </a>
    <form method="POST">
      <button class="btn variant-soft-error">Delete</button>
    </form>
  </section>
</div>
