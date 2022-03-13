import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import eslintPlugin from 'vite-plugin-eslint';
// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      "@": path.resolve(__dirname, "src"),
    },
  },
 
  plugins: [
    vue(),
    eslintPlugin(
      {
        cache: false
      }
    ),
  ]
});
