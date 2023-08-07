import {defineConfig} from 'astro/config';
import svelte from "@astrojs/svelte";
import vue from "@astrojs/vue";
import customClientDirective from './src/directives/astro'
import nodejs from '@astrojs/node';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    output: "server",
    adapter: nodejs({
        mode: 'middleware'
    }),
    integrations: [svelte(), vue(), tailwind(), customClientDirective()],
    experimental: {
        assets: true
    },
});