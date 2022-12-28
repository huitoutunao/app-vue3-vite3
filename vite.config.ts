import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const pathResolve = (dir: string) => resolve(__dirname, dir)

export default defineConfig({
  plugins: [vue()],
  build: {
    minify: 'esbuild',
    sourcemap: false,
    chunkSizeWarningLimit: 2000, // chunk 大小警告的限制（以 kbs 为单位）
    rollupOptions: {
      output: {
        entryFileNames: 'js/[name]-[hash].js',
        chunkFileNames: 'js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash][extname]',
      },
    },
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
