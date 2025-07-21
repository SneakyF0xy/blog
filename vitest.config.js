/// <reference types="vitest" />
import { getViteConfig } from 'astro/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default getViteConfig({
    test: {
        include: ['**/*.{test,spec}.{js,ts}'],
        exclude: ['node_modules', 'dist', 'build', 'public'],
    },
    plugins: [tsconfigPaths()]
})