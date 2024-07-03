<script lang="ts">
  import PocketBase from "pocketbase";

  const pb = new PocketBase("https://garage-log.pockethost.io/");

  async function login(form: HTMLFormElement, provider: string) {
    try {
      await pb.collection("users").authWithOAuth2({ provider: provider });
      form.token.value = pb.authStore.token;
      form.submit();
    } catch (err) {
      console.error(err);
    }
  }
</script>

<div class="h3">Login or sign up in seconds</div>
<form
  method="post"
  on:submit|preventDefault={(e) => login(e.currentTarget, "github")}
>
  <input name="token" type="hidden" />
  <button class="block card card-hover my-4 p-4">Continue with Github</button>
</form>
<form
  method="post"
  on:submit|preventDefault={(e) => login(e.currentTarget, "google")}
>
  <input name="token" type="hidden" />
  <button class="block card card-hover my-4 p-4">Continue with Google</button>
</form>
