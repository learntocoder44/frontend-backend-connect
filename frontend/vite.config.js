import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

   server:{
     proxy:{
       '/api':'https://287123ac-a39f-47c7-a1b4-6c93ae0b2488-00-1pm68821bm66l.pike.replit.dev/'
     }
   },
  plugins: [react()],
})
