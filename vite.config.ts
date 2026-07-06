import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Viteの開発サーバーと本番ビルドでReactを扱うための設定です。
export default defineConfig({
  plugins: [react()],
})

