import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
     NodeGlobalsPolyfillPlugin({
        buffer: true,
     })
  ],
  resolve: {
    alias: {
      process: 'process/browser',
      stream: 'stream-browserify',
      util: 'util',
    },
  },
  define: {
    'process.env': {} // or provide specific env variables if needed
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    }
  }
})