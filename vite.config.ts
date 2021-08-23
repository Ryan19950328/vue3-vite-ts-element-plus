import { UserConfigExport, ConfigEnv } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'
import styleImport from 'vite-plugin-style-import'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    plugins: [
      vue(),
      styleImport({
        libs: [
          {
            libraryName: 'element-plus',
            esModule: true,
            ensureStyleFile: true,
            resolveStyle: (name: any) => {
              return `element-plus/lib/theme-chalk/${name}.css`
            },
            resolveComponent: (name: any) => {
              return `element-plus/lib/${name}`
            }
          }
        ]
      }),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: command === 'serve'
      })
    ],
    server: {
      proxy: {
        '/company': {
          target: 'https://tyb.nucarf.tech',
          changeOrigin: true //是否跨域
        }
      }
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "src/assets/styles/var.scss";`
        }
      },
      postcss: {
        plugins: [require('autoprefixer'), require('tailwindcss'), require('postcss-import')]
      }
    }
  }
}
