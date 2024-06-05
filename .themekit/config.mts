import { defineConfig } from 'themekit-js'

 
const siteBase="/e-facility"
export default defineConfig({
  title: "eFACILITY",  
  base:siteBase,
  themeName: "default theme + customization",
  description: "A VitePress Site",
  
  themeConfig: { 
    nav: [ ], 
    socialLinks: [
      { icon: 'github', link: 'https://github.com/e-facility/e-facility' }
      ],
    footer: {
      message: '',
      copyright: 'Copyright © 2019-2024 eFACILITY'
    }
  }
})
