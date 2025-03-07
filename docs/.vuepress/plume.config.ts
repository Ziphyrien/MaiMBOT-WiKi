import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { notes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'https://zip-image.pages.dev/file/AgACAgUAAyEGAASIL8CVAAMSZ8shj5Csuj7E-bNV8POK_LF6v0gAAurGMRuICVlWac5rIkYU0sYBAAMCAAN3AAM2BA.png',

  appearance: true,  // 配置 深色模式

  social: [
    { icon: 'github', link: 'https://github.com/SengokuCola/MaiMBot/' },
    { icon: 'qq', link: 'https://qm.qq.com/q/kdJox0XMXK' },
  ],
  navbarSocialInclude: ['github','qq'], // 允许显示在导航栏的 social 社交链接
  // aside: true, // 页内侧边栏， 默认显示在右侧
  // outline: [2, 3], // 页内大纲， 默认显示 h2, h3

  /**
   * 文章版权信息
   * @see https://theme-plume.vuejs.press/guide/features/copyright/
   */
  // copyright: true,

  // prevPage: true,   // 是否启用上一页链接
  // nextPage: true,   // 是否启用下一页链接
  // createTime: true, // 是否显示文章创建时间

  /* 站点页脚 */
  footer: {
    message: 'WiKi by <a target="_blank" href="https://space.bilibili.com/517481506?spm_id_from=333.1007.0.0">Ziphyrien ©2025</a>',
  //   copyright: '',    
  },



  /**
   * @see https://theme-plume.vuejs.press/config/basic/#profile
   */
  profile: {
    avatar: 'https://i0.hdslb.com/bfs/new_dyn/d14f344139afb6bb2ef24a905d184a691344099355.png@1052w_!web-dynamic.webp',
    name: 'MaiMBOT 8aka WiKi',
    description: '',
    // circle: true,
    // location: '',
    // organization: '',
  },

  navbar,
  notes,

  /**
   * 公告板
   * @see https://theme-plume.vuejs.press/guide/features/bulletin/
   */
  // bulletin: {
  //   layout: 'top-right',
  //   contentType: 'markdown',
  //   title: '公告板标题',
  //   content: '公告板内容',
  // },

  /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
  // transition: {
  //   page: true,        // 启用 页面间跳转过渡动画
  //   postList: true,    // 启用 博客文章列表过渡动画
  //   appearance: 'fade',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
  // },

})
