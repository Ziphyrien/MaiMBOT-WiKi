import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const root = defineNoteConfig({
  dir: '',
  link: '/',
  sidebar: [
    '项目介绍',
    'How-To-Ask-Questions-The-Smart-Way',
    {
      text: '开始部署',      
      link: '/deploy/reademe/',
      items: [
        '部署教程/准备工作',
      ],  
    },
    {
      text: '工具',      
      items: [
        '工具/编辑器',
        '工具/dev-sidecar',
      ],  
    },    
  ],  
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [root], 
})
