import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import viteLegacy from '@vitejs/plugin-legacy'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import unoCSS from 'unocss/vite'
import vueDevTools from 'vite-plugin-vue-devtools'
import viteInspect from 'vite-plugin-inspect'
import { visualizer } from 'rollup-plugin-visualizer'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    viteLegacy(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: './types/auto-imports.d.ts',
      dirs: ['./src/**'],
      eslintrc: { enabled: true },
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dirs: [],
      dts: './types/components.d.ts',
      resolvers: [ElementPlusResolver()],
    }),
    unoCSS(),
    vueDevTools(),
    viteInspect(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    cssTarget: 'chrome85',
    rollupOptions: {
      plugins: [visualizer()],
    },
  },
})
