import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      Components: "/src/components",
      Pages: "/src/pages",
      Layout: "/src/layout",
      Images: "/src/assets/images",
    },
  },
})
