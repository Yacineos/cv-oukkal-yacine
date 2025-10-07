import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/cv-oukkal-yacine/',
  title: "Yacine Oukkal — CV",
  description: "Curriculum vitae",
  buildEnd: async (siteConfig) => {
    // Create .nojekyll file to disable Jekyll processing
    const fs = await import('fs')
    const path = await import('path')
    const nojekyllPath = path.join(siteConfig.outDir, '.nojekyll')
    fs.writeFileSync(nojekyllPath, '')
  }
})
