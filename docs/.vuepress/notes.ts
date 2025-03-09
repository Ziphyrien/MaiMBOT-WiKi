import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  theme: plumeTheme({
    notes: {
      notes: [
        // 根目录笔记配置
        {
          dir: '.',          // 对应 /notes/ 根目录
          link: '/',         // 文档链接直接位于站点根路径
          sidebar: [
            {
              text: '项目文档',
              items: ['1.项目介绍']  // 对应 /notes/1.项目介绍.md
            }
          ]
        },
        // 部署教程笔记配置
        {
          dir: '部署教程',    // 对应 /notes/部署教程 目录
          link: '/deploy/',  // 文档链接前缀为 /deploy/
          sidebar: 'auto'     // 自动生成层级侧边栏
        }
      ]
    }
  })
})
