<template>
    <ClientOnly>
      <div class="view-counter">
        <!-- 使用规范的图标组件 -->
        <Icon name="hugeicons:view" class="icon" />
        <span id="busuanzi_container_page_pv" v-pre>
          阅读量 <span id="busuanzi_value_page_pv">{{ count }}</span>
        </span>
      </div>
    </ClientOnly>
  </template>
  
  <script>
  export default {
    data: () => ({ count: 0 }),
    mounted() {
      if (typeof window !== 'undefined') {
        window.busuanziCallback = (res) => this.count = res.count
        const script = document.createElement('script')
        script.src = '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'
        document.body.appendChild(script)
      }
    }
  }
  </script>
  
  <style scoped>
  /* 组件样式 */
  .view-counter {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 0.9rem;
    color: var(--c-text-light);
    margin: 1rem 0 2rem;
    padding: 8px 16px;
    background: var(--c-bg-soft);
    border-radius: 999px;
  }
  </style>
  