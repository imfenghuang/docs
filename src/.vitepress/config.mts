import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [['link', { rel: 'icon', href: '../assets/logo.svg' }]],
  ignoreDeadLinks: true,
  cleanUrls: true,
  title: "Zen Brower Docs",
  description: "A VitePress Site",
  themeConfig: {
    logo: '../assets/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs' }
    ],

    sidebar: [
      {
        text: 'Contribution Guides 🌟',
        collapsed: false,
        items: [
          { text: 'desktop', link: '/contribute/desktop' },
          { text: 'docs', link: '/contribute/docs' },
          { text: 'www', link: '/contribute/www' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zen-browser/docs' }
    ],

  },
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    cn: {
      label: '简体中文',
      lang: 'cn',
      link: '/cn',
      themeConfig: {
        outlineTitle: '页面导航',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Docs', link: '/cn/docs' }
        ],
        sidebar: [
          {
            text: '共建',
            collapsed: false,
            items: [
              { text: '客户端', link: '/contribute/desktop' },
              { text: '文档', link: '/contribute/docs' },
              { text: '官网', link: '/contribute/www' },
            ]
          }
        ],
      }
    }
  }
})
