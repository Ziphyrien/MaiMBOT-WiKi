import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const root = defineNoteConfig({
  dir: '',
  link: '/',
  sidebar: [
    '项目介绍',
    '提问的智慧',
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
    {
      text: '开发文档',      
      items: [
        {
          text: '麦麦 GraphQL API 草案',
          link: '/Development/GraphQL-API/README/',
          items: [
            // 未来添加子项
          ],  
        },

      ],  
    },    
  ],  
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [root], 
})
