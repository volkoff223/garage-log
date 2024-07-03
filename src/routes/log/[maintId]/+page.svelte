<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<div class="card p-4 mt-10">
  <h3 class="h3 text-center">Update maintenance log</h3>
  <form action="?/update" method="POST">
    <div class="container mx-auto w-60 my-10">
      <label class="label">
        <span>Title</span>
        <input
          id="title"
          name="title"
          class="input"
          type="text"
          value={data.title}
        />
      </label>
      <label class="label">
        <span>Description</span>
        <textarea
          id="description"
          name="description"
          class="textarea"
          rows="4"
          value={data.description}
        />
      </label>

      <button class="btn variant-soft mt-3">Save</button>
      <form action="?/delete" method="POST">
        <button class="btn variant-soft-error mt-8">Delete log</button>
      </form>
    </div>
  </form>
</div>
