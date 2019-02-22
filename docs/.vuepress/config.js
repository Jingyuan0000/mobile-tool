module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'article1',
        items: [{
            text: 'article1-1',
            link: '/article1/part1-1'
          },
          {
            text: 'article1-2',
            link: '/article1/part1-2'
          }
        ]
      },
      {
        text: 'article2',
        items: [{
            text: 'article2-1',
            link: '/article2/part2-1'
          },
          {
            text: 'article2-2',
            link: '/article2/part2-2'
          }
        ]
      },
    ],
    sidebar: [{
        title: '文章一',
        path: '/docs/article1/',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          ['/article1/part1-1', "part1-1"],
          ['/article1/part1-2', "part1-2"],
          ['/article1/part1-3', "part1-3"],
          ['/article1/part1-4', "part1-4"]
        ]
      },
      {
        title: '文章二',
        path: '/docs/article2/',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          ['/article2/part2-1', 'part2-1'],
          ['/article2/part2-2', 'part2-2']
        ]
      }

    ]
    // sidebar: {
    //   '/A/': [
    //     '',
    //     'one',
    //     'two'
    //   ],
    //   '/B/': [
    //     '',
    //     'three',
    //     'four'
    //   ],
    //   '/': [
    //     '',
    //     'appid',
    //     'install',
    //     'start',
    //     'guide'
    //   ],
    //   '/install': 'install',
    //   '/start': 'start',
    //   '/guide': 'guide',
    //   'appid': 'appid',
    //   '/article1': {
    //     title: '文章一',
    //     path: '/docs/article1/',
    //     collapsable: false,
    //     sidebarDepth: 1,
    //     children: [
    //       ['/article1/part1-1', "part1-1"],
    //       ['/article1/part1-2', "part1-2"],
    //       ['/article1/part1-3', "part1-3"],
    //       ['/article1/part1-4', "part1-4"]
    //     ]
    //   },
    //   'article2': {
    //     title: '文章二',
    //     path: '/docs/article2/',
    //     collapsable: false,
    //     sidebarDepth: 1,
    //     children: [
    //       ['/article2/part2-1', 'part2-1'],
    //       ['/article2/part2-2', 'part2-2']
    //     ]
    //   }
    // },

    // "install", "start", "guide", "appid",

  }
}