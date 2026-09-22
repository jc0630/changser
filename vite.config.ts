import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

function syncAssetsPlugin() {
  return {
    name: 'sync-assets-plugin',
    buildStart() {
      try {
        const srcDir = path.resolve(__dirname, 'src/assets/images');
        const pubSrcDir = path.resolve(__dirname, 'public/src/assets/images');
        const pubImgDir = path.resolve(__dirname, 'public/images');
        if (fs.existsSync(srcDir)) {
          fs.mkdirSync(pubSrcDir, { recursive: true });
          fs.mkdirSync(pubImgDir, { recursive: true });
          fs.cpSync(srcDir, pubSrcDir, { recursive: true });
          fs.cpSync(srcDir, pubImgDir, { recursive: true });
        }
      } catch (err) {
        console.warn('Sync assets warning:', err);
      }
    },
  };
}

export default defineConfig(() => {
  return {
    base: '/',
    plugins: [react(), tailwindcss(), syncAssetsPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
