import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/francisco-web/',
    plugins: [
        vue({
            template: {
                compilerOptions: {
                    isCustomElement: (tag) => ['swiper-container', 'swiper-slide'].includes(tag),
                }
            }
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
