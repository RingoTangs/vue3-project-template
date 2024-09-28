import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import viteLegacy from '@vitejs/plugin-legacy'
import autoImport from 'unplugin-auto-import/vite'
import unoCSS from 'unocss/vite'
import vueDevTools from 'vite-plugin-vue-devtools'
import viteInspect from 'vite-plugin-inspect'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    viteLegacy(),
    autoImport({
      imports: ['vue'],
      dts: './types/auto-imports.d.ts',
      dirs: ['./src/**'],
      eslintrc: { enabled: true },
    }),
    unoCSS(),
    vueDevTools(),
    viteInspect(),
  ],
  build: {
    cssTarget: 'chrome49',
  },
})
