<script>
  import axiosConfig from "../../config/AxiosConfig.ts";

  let loginData = {
    username: 'mor_2314',
    password: '83r5^_'
  };

  const onSubmit = async () => {
    const response = await axiosConfig.post(`/api/login`, loginData)
    if (!!Object.keys(response).length) {
      const {token, username} = response;
      const expire = new Date().getTime() + (1000 * 60 * 60 * 24);
      document.cookie = `token=${JSON.stringify(token)}; expires=${expire}; path=/`;
      document.cookie = `username=${JSON.stringify(username)}; expires=${expire}; path=/`;
      window.location.href = "/"
    }
  }
</script>

<form on:submit|preventDefault={onSubmit} autocomplete="off">
  <div class="space-y-2">
    <div>
      <label for="username" class="text-gray-600 mb-2 block">Username</label>
      <input type="text" name="username" id="username"
             bind:value="{loginData.username}"
             class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
             placeholder="Username">
    </div>
    <div>
      <label for="password" class="text-gray-600 mb-2 block">Password</label>
      <input type="password" name="password" id="password"
             bind:value={loginData.password}
             class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
             placeholder="*******">
    </div>
  </div>
  <div class="flex items-center justify-between mt-6">
    <div class="flex items-center">
      <input type="checkbox" name="remember" id="remember"
             class="text-primary focus:ring-0 rounded-sm cursor-pointer">
      <label for="remember" class="text-gray-600 ml-3 cursor-pointer">Remember
        me</label>
    </div>
    <a href="/" class="text-primary">Forgot password</a>
  </div>
  <div class="mt-4">
    <button type="submit"
            class="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">
      Login
    </button>
  </div>
</form>