import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const root = defineNoteConfig({
  dir: '',
  link: '/docs/',
  sidebar: [
    '项目介绍.md',
    {
      dir: '部署教程',
      link: '/deploy/',
      text: '部署', 
      sidebar: [    
        '准备工作.md'
      ],  
    },
  ],  
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [root], 
})
