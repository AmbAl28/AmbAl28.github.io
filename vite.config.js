import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// export default defineConfig({
//   base: '/ProjectGame/', // Укажите свой путь, если разворачиваетесь не в корень домена
//   plugins: [react()],
// });
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
