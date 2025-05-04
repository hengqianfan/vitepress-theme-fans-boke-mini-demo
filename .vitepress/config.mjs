import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "界 · 衡千帆",
  description: "A VitePress Site",
  themeConfig: {
    logo: '/icon/jie.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
      {
        text: '我的宇宙', items: [
          { text: 'Bilibili', link: 'https://space.bilibili.com/3546824455489827' },
          { text: '小黑盒', link: 'https://www.xiaoheihe.cn/bbs/user_profile_share?user_id=51427625&h_src=writer' },


        ]
      },
      { text: '关于', link: '/pages/about' }
    ],

    sidebar: [],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hengqianfan' }
    ]
  },
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin)
    }
  },
  vite: {
    plugins: [
      groupIconVitePlugin()
    ]
  }
})
