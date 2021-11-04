<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'WorkPlusFE',
  meta: [
    { property: 'og:title', content: 'WorkPlusFE' },
    { property: 'og:image', content: 'https://fe-blog.workplus.io/avatar.png' },
    { property: 'og:type', content: 'website' },
    { name: 'description', content: '恒拓高科前端技术部博客，分享前端技术及项目经验' },
  ],
})
</script>

<template>
  <Header />
  <main class="pt-4.5rem">
    <div class="px-6 py-10 md:py-16">
      <router-view />
    </div>
  </main>
  <Footer />
</template>
