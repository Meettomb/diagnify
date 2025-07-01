import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/diagnify",
  plugins: [react()],
   server: {
    host: '0.0.0.0',  //  This allows access from other devices on the network 192.168.29.91
    port: 5173        // Optional: ensure you're using the same port
  }
})
