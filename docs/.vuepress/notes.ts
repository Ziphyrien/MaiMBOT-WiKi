import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const root = defineNoteConfig({
  dir: '',
  link: '/docs/',
  sidebar: [
    '项目介绍.md', // 修正为字符串格式
    {
      dir: '部署教程',
      link: '/deploy/',
      text: '部署'
      sidebar: [
        '项目介绍'
        'README'
      ],  
    },
  ],  
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [root], 
})
