<div class="card p-4 mt-10">
  <h3 class="h3 text-center">Add maintenance log</h3>
  <form method="POST">
    <div class="container mx-auto w-60 my-10">
      <label class="label">
        <span>Title</span>
        <input id="title" name="title" class="input" type="text" />
      </label>
      <label class="label">
        <span>Description</span>
        <textarea
          id="description"
          name="description"
          class="textarea"
          rows="4"
        />
      </label>

      <button class="btn variant-soft mt-3">Add</button>
    </div>
  </form>
</div>
