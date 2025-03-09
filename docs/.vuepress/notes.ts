import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const root = defineNoteConfig({
  dir: '',
  link: '/',
  sidebar: [
    '项目介绍',
    {
      text: '开始部署',      
      link: '/deploy/reademe/',
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
