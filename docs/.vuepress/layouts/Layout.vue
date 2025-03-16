<!-- 该文件继承主题布局并插入阅读统计组件 -->
<script setup>
import { Layout } from 'vuepress-theme-plume/client' // 引入主题默认布局
import ViewCounter from '../components/ViewCounter.vue' // 引入自定义组件
</script>

<template>
  <Layout>
    <!-- 在标题下方插入统计组件 -->
    <template #doc-bottom>
      <ViewCounter 
        v-if="$frontmatter?.showViewCount !== false" 
        class="title-view-counter"
      />
    </template>
  </Layout>
</template>
