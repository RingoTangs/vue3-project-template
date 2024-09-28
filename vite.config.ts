import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    legacy(),
    AutoImport({
      imports: ['vue'],
      dts: './types/auto-imports.d.ts',
      dirs: ['./src/**'],
      eslintrc: { enabled: true },
    }),
  ],
  build: {
    cssTarget: 'chrome49',
  },
})
