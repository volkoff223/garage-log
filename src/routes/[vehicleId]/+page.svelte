<script lang="ts">
  import type { PageData } from "./$types.js";
  export let data: PageData;
  console.log(data.vehicle.purchaseDate);
  const formatDate = (dateStr: string) => {
    if (dateStr !== "") {
      let fDate = new Date(dateStr);
      const month = fDate.toLocaleString("default", { month: "long" });
      let date = fDate.getDate();
      let year = fDate.getFullYear();
      return `${date} ${month} ${year}`;
    } else {
      return "";
    }
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
    <div>Purchase Date: {formatDate(data.vehicle.purchaseDate)}</div>
    <div>Miles: {data.vehicle.miles}</div>
  </section>

  {#if data.maintLog.length === 0}
    You have not completed any maintenance on this vehicle.
  {:else}
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
              <a href="/log/{data.maintLog[i].id}">
                <td>{row.title}</td>
              </a>
              <td>{formatDate(row.created)}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {/if}
  <div class="mt-4">
    <a href="/{data.vehicle.id}/addLog">
      <button class="btn btn-sm variant-soft-secondary">+Maintenance</button>
    </a>
  </div>
</div>
