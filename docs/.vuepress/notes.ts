import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const root = defineNoteConfig({
  dir: '',
  link: '/',
  sidebar: [
    '项目介绍',
    '提问的智慧',
    '麦麦形象授权',
    {
      text: '部署',    
      icon: 'material-symbols:deployed-code-outline',  
      link: '/deploy/reademe/',
      items: [
        '部署/准备工作',
      ],  
    },
    {
      text: '工具',    
      icon: 'mdi:tools',  
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
