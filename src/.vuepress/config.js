const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'MistSwap',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  theme: 'antdocs',
  backToTop: true,

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: '/assets/img/logo.png',
    repo: 'https://github.com/mistswapdex/docs',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'tokenomics',
        link: '/tokenomics/',
      },
      {
        text: 'products',
        link: '/products/',
      },
      {
        text: 'exchange',
        link: 'https://app.mistswap.fi'
      },
    ],
    sidebar: [
      '/',
      ['/tokenomics/', 'Tokenomics'],
      {
        title: 'Products',
        collapsable: false,
        children: [ 
          {
            title: 'MistyLake',
            children: [
              ['/products/mistylake/', 'Overview'],
            ],
          },
          {
            title: 'Exchange',
            children: [
              ['/products/amm-exchange/', 'Overview'],
              ['/products/amm-exchange/liquidity-pools/', 'Liquidity Pools'],
            ],
          },
          {
            title: 'Yield Farming',
            children: [
              ['/products/yield-farming/', 'Overview'],
              ['/products/yield-farming/the-mistbar/', 'MistBar'],
            ],
          },
        ],
      },
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    ['homebadge', {
      selector: '.hero',
      repoLink: 'https://github.com/mistswapdex/docs',
      badgeLink: 'https://img.shields.io/github/stars/mistswapdex/docs?style=social',
    }],
  ]
}
