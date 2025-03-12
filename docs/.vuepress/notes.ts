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
        '部署教程/Windows',
        {text: '面向新手的Linux部署', link: 'https://github.com/SengokuCola/MaiMBot/blob/main/docs/linux_deploy_guide_for_beginners.md'},
        {text: 'Linux部署', link: 'https://github.com/SengokuCola/MaiMBot/blob/debug/docs/manual_deploy_linux.md'}
      ],  
    },
    {
      text: '配置文件说明',
      link: '/config/readme/',
      items: [
        '配置文件教程/Config'
      ]
    },
    {
      text: '工具',
      items: [
        '工具/编辑器',
        '工具/连不上Github怎么办'
      ]
    }
  ],  
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [root], 
})
