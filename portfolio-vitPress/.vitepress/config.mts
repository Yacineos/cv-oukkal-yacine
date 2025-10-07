import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "OUKKAL Yacine portfolio",
  description: "This is my portfolio using vitepress",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { 
        text: 'CV', 
        items: [
          { text: '🇬🇧 English CV', link: '/cv-en' },
          { text: '🇫🇷 CV Français', link: '/cv-fr' }
        ]
      }
    ],

    sidebar: [
      {
        text: 'CV',
        items: [
          { text: '🇬🇧 English Version', link: '/cv-en' },
          { text: '🇫🇷 Version Française', link: '/cv-fr' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Yacineos' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/yacine-oukkal' }
    ]
  }
})
