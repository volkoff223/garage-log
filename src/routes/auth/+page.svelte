<script lang="ts">
  import PocketBase from "pocketbase";

  const pb = new PocketBase("https://garage-log.pockethost.io/");

  async function login(form: HTMLFormElement) {
    try {
      await pb.collection("users").authWithOAuth2({ provider: "github" });
      form.token.value = pb.authStore.token;
      form.submit();
    } catch (err) {
      console.error(err);
    }
  }
</script>

<h1 class="text-lg">Login</h1>
<div class="container m-auto flex justify-center">
  <form method="post" on:submit|preventDefault={(e) => login(e.currentTarget)}>
    <input name="token" type="hidden" />
    <button class="btn variant-filled">Github</button>
  </form>
</div>
