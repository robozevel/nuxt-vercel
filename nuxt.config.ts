import { NuxtConfig } from '@nuxt/types'

export const config = <NuxtConfig>{
  target: 'static',
  buildModules: [
    ['@nuxt/typescript-build', {
      typeCheck: true
    }]
  ]
}