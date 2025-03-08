import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  {
    text: '指南',
    items: [{ text: '部署', link: '/notes/1.' }]
  },
])
