<script lang="ts">
  import type { PageData } from "./$types.js";
  export let data: PageData;
  const formatDate = (dateStr: string) => {
    let fDate = new Date(dateStr);
    const month = fDate.toLocaleString("default", { month: "long" });
    let date = fDate.getDate();
    let year = fDate.getFullYear();
    return `${date} ${month} ${year}`;
  };
</script>

<div class="card p-4">
  <header class="card-header flex justify-between">
    <h2 class="h2">
      <span class="gradient-heading"
        >{data.vehicle.year} {data.vehicle.make} {data.vehicle.model}</span
      >
    </h2>
    <a href="/{data.vehicle.id}/edit">
      <button class="btn variant-soft-primary">Edit</button>
    </a>
  </header>
  <section class="p-4">
    <div>Cost: ${data.vehicle.cost}</div>
    <div>Purchase Date: {data.vehicle.purchaseDate}</div>
    <div>Miles: {data.vehicle.miles}</div>
  </section>

  <div class="table-container">
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Maintenance</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {#each data.maintLog as row, i}
          <tr>
            <td>{row.title}</td>
            <td>{formatDate(row.created)}</td>
          </tr>
        {/each}
      </tbody>
    </table>
    <a href="/{data.vehicle.id}/addLog">
      <button class="btn">+Maintenance</button>
    </a>
  </div>
</div>
