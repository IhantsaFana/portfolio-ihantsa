import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import sitemap from 'vite-plugin-sitemap'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sitemap({
      hostname: 'https://oeka.mg',
      dynamicRoutes: [
        '/en',
        '/fr',
        '/en/about',
        '/fr/about',
        '/en/projects',
        '/fr/projects',
        '/en/contact',
        '/fr/contact'
      ]
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    chunkSizeWarningLimit: 1000, // Augmenter la limite à 1MB
    rollupOptions: {
      output: {
        manualChunks: {
          // Séparer les vendors en chunks
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['framer-motion', 'react-helmet-async'],
          'i18n-vendor': ['react-i18next', 'i18next'],
          'icons-vendor': ['react-icons']
        }
      }
    }
  }
})
