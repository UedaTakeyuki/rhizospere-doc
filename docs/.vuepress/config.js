module.exports = {
  title: 'Koshinto documents',
  description: 'Prevent casual tampering casually.',
  dest: 'public/docs',
  base: '/docs/',
  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
      md.use(require('markdown-it-footnote'))
    }
  },
}
