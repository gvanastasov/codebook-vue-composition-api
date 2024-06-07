import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html';
import { config as loadEnv } from 'dotenv';
import vue from '@vitejs/plugin-vue'

loadEnv();

const chapter = process.env.CHAPTER;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createHtmlPlugin({
      inject: {
        data: {
          chapter: chapter,
        },
      },
    }),
  ],
  define: {
    'process.env': {
      CHAPTER: JSON.stringify(chapter),
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
