<script script lang="ts">
  import { getToastStore, initializeStores } from "@skeletonlabs/skeleton";
  import type { ToastSettings } from "@skeletonlabs/skeleton";
  const toastStore = getToastStore();
  initializeStores();

  let vin: string;
  let year: number;
  let toggleVis = true;

  const searchVin = async () => {
    const response = await fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvalues/${vin}?format=json&modelyear=${year}`
    );
    let data = await response.json();

    if (data.Results[0].ErrorText[0] !== "0") {
      const t: ToastSettings = {
        message: data.Results[0].ErrorText,
        background: "variant-filled-error",
        timeout: 10000,
      };
      toastStore.trigger(t);
    } else {
      (<HTMLInputElement>document.getElementById("year_input")).value =
        data.Results[0].ModelYear;
      (<HTMLInputElement>document.getElementById("make_input")).value =
        data.Results[0].Make;
      (<HTMLInputElement>document.getElementById("model_input")).value =
        data.Results[0].Model;

      toggleVis = !toggleVis;
    }
  };
</script>

{#if toggleVis}
  <div id="vin_search_div" class="card p-4">
    <h3 class="h3 text-center">Search for vehicle by VIN</h3>

    <form on:submit={searchVin}>
      <div class="container mx-auto w-60 my-10">
        <label class="label">
          <span>VIN</span>
          <input
            bind:value={vin}
            name="vin"
            class="input"
            type="text"
            placeholder=""
          />
        </label>

        <button type="submit" class="btn variant-soft mt-3">Search</button>
      </div>
    </form>
    <a href="https://randomvin.com/" target="_blank"><u>Get a random VIN</u></a>
  </div>
{/if}
<div class="card p-4 mt-10">
  {#if toggleVis}
    <h3 id="manula_search_title" class="h3 text-center">Add vehicle manualy</h3>
  {:else}
    <h3 id="manula_search_title" class="h3 text-center">Add vehicle</h3>
  {/if}
  <!-- Manualy enter vehicle -->
  <form action="?/manualEntry" method="POST">
    <div class="container mx-auto w-60 my-10">
      <label class="label">
        <span>Year</span>
        <input id="year_input" name="year" class="input" type="text" />
      </label>
      <label class="label">
        <span>Make</span>
        <input id="make_input" name="make" class="input" type="text" />
      </label>
      <label class="label">
        <span>Model</span>
        <input id="model_input" name="model" class="input" type="text" />
      </label>

      <button class="btn variant-soft mt-3">Add</button>
    </div>
  </form>
</div>
