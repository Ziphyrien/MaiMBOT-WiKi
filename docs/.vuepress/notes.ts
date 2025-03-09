import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const root = defineNoteConfig({
  dir: '',
  link: '/docs/',
  sidebar: [
    '项目介绍',
    {
      text: '开始部署',
      prefix: '/deploy/',
      items: [
        '部署教程/准备工作'
      ],  
    },
  ],  
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [root], 
})
