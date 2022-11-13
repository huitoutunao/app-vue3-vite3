import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const pathResolve = (dir: string) => resolve(__dirname, dir)

export default defineConfig({
  plugins: [vue()],
  build: {
    minify: 'esbuild',
    chunkSizeWarningLimit: 1500, // chunk 大小警告的限制（以 kbs 为单位）
  },
  esbuild: {
    pure: ['console.log'], // 生产环境去除 console.log
    drop: ['debugger'], // 生产环境去除 debugger
  },
  resolve: {
    alias: {
      '@': pathResolve('./src'),
    },
  },
  base: './',
})
