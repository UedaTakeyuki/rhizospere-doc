module.exports = {
  title: 'Rhizospere documents',
  description: 'Provides a way to control your Raspberry Pi working somewhere in the world.',
  dest: 'public/docs',
  base: '/docs/',
  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
      md.use(require('markdown-it-footnote'))
    }
  },
  plugins: [
    [ 
      '@vuepress/google-analytics',
      {
        'ga': 'UA-43410269-6' // UA-00000000-0
      }
    ],
    [
      'vuepress-plugin-google-adsense',
      {
        'google_ad_client': 'ca-pub-1717720203982550', // ca-pub-0000000000000000
        'enable_page_level_ads': true
      }
    ],
    ['mermaidjs']
  ],
  themeConfig: {
    nav: [
      {text: 'back to App', link: '/'}
    ]
  }
}
