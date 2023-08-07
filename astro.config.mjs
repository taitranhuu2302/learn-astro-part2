import {defineConfig} from 'astro/config';
import svelte from "@astrojs/svelte";
import vue from "@astrojs/vue";
import customClientDirective from './src/directives/astro'

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    output: "server",
    integrations: [svelte(), vue(), tailwind(), customClientDirective()],
    experimental: {
        assets: true
    },
});