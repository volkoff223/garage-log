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
    <form method="POST">
      <label class="label">
        <span>Year</span>
        <input name="year" class="input" type="text" value={data.year} />
      </label>
      <label class="label">
        <span>Make</span>
        <input name="make" class="input" type="text" value={data.make} />
      </label>
      <label class="label">
        <span>Model</span>
        <input name="model" class="input" type="text" value={data.model} />
      </label>
      <label class="label">
        <span>Cost</span>
        <input name="cost" class="input" type="text" value={data.cost} />
      </label>
      <label class="label">
        <span>Purchase Date</span>
        <input
          name="purchaseDate"
          class="input"
          type="date"
          value={data.purchaseDate}
        />
      </label>
      <label class="label">
        <span>Miles</span>
        <input name="miles" class="input" type="text" value={data.miles} />
      </label>
      <button class="btn variant-filled-primary">Save</button>
    </form>
  </section>
</div>
