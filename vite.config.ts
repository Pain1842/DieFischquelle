import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/DieFischquelle/',
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'primary-color': '#023047',
          'link-color': '#8ecae6',
          'border-radius-base': '4px',
          'font-family': "'Roboto', sans-serif",
          'box-shadow': '0px 2px 4px rgba(0, 0, 0, 0.2)',
        },
        javascriptEnabled: true,
      },
    },
  },
});
