import { vitePreprocess } from '@astrojs/svelte';

export default {
	preprocess: vitePreprocess(),
    onwarn: (warning, handler) => {
        if (warning.code.startsWith('a11y-')) return
        handler(warning)
    },
};
