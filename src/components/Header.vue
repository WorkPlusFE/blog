<template>
  <header
    class="
      fixed top-0 inset-x-0 z-50
      h-4.5rem px-6
      bg-white dark:bg-dark-800 !bg-opacity-80
      backdrop-blur"
  >
    <div class="max-w-screen-lg mx-auto h-full flex justify-between items-center">
      <router-link
        class="text-2xl font-bold select-none outline-none"
        to="/"
        focusable="false"
      >
        <span class="lt-md:hidden">
          WorkPlusFE's Blog
          <sup class="text-xs subpixel-antialiased bg-green-500 px-1 rounded-sm not-italic text-normal text-white">beta</sup>
        </span>
        <span class="md:hidden text-xl">@w6s/blog</span>
      </router-link>
      <nav class="nav">
        <router-link to="/" title="Post">
          <span class="lt-md:hidden">文章</span>
          <ri-article-line class="md:hidden" />
        </router-link>
        <router-link to="/about" title="About">
          <span class="lt-md:hidden">关于</span>
          <ri-bookmark-line class="md:hidden" />
        </router-link>
        <a href="https://github.com/workplusfe" target="_blank" rel="noopener" title="GitHub">
          <ri-github-line />
        </a>
        <ToggleTheme />
      </nav>
    </div>
  </header>
</template>

<style scoped>
.nav {
  display: flex;
  align-items: center;
  gap: 0.2rem;
}

.nav img {
  margin-bottom: 0;
}

.nav a {
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: opacity 0.2s ease;
  opacity: 0.7;
  outline: none;
  padding: .8rem;
}

.nav a:hover {
  opacity: 1;
  text-decoration-color: inherit;
}

.backdrop-blur {
  backdrop-filter: blur(8px);
}
</style>
