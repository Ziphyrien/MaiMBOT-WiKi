import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const root = defineNoteConfig({
  dir: '',
  link: '/docs/',
  sidebar: [
    '项目介绍',
    {
      dir: '部署教程',
      link: '/deploy/',
      sidebar: [
        {
          text: '部署',
          items: [
          '准备工作.md'
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
