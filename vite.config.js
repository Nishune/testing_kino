import { defineConfig } from 'vite';

export default defineConfig({
  base: '/testing_kino/', // Här sätter vi basvägen för GitHub Pages
  css: {
    devSourcemap: true,
  },
});
