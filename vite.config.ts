import { defineConfig } from 'vite';
import qiankun from 'vite-plugin-qiankun';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
const useDevMode = true;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    ...(useDevMode ? [] : [react()]),
    qiankun('react-sub-app', {
      useDevMode,
    }),
  ],
  base: '//localhost:3000',
  server: {
    port: 3000,
    origin: '//localhost:3000',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './public/assets'),
    },
  },
});
