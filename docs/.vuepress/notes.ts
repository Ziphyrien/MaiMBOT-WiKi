// .vuepress/notes.ts
import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

// 项目介绍配置
const projectIntro = defineNoteConfig({
  dir: ' ',  // 直接在notes目录下
  link: '/',
  sidebar: [
    '1.项目介绍.md'  // 直接引用根目录下的文件
  ]
})

// 部署教程配置
const deploymentTutorial = defineNoteConfig({
  dir: '部署教程',
  link: '/deploy',
  sidebar: [
    'README.md',    // 部署前言
    '准备工作.md',
    // 如果有其他部署相关文档可继续添加
  ]
})

export default defineNotesConfig({
  dir: '/notes/',
  link: '/',
  notes: [
    projectIntro,
    deploymentTutorial
  ]
})
