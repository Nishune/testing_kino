import { defineConfig } from 'vite';

export default defineConfig({
  base: '/testing_kino/', // Basvägen för GitHub Pages
  css: {
    devSourcemap: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html', // Huvudindexfilen
        kids: './pages/kids/kids.html', // Barnsida
        about: './pages/about/about.html', // Om-sidan
      },
    },
  },
});
