module.exports =  {
    base: '/infoxam/',
    title: 'Infoxam',
    description: 'Infoxam - это веб-приложение для распространения информациия касательно AM-201 и AM-202.',
    head: [
        // Icons
        ['link', { rel: 'icon', href: 'favicon.svg' }],
        ['link', { rel: 'mask-icon', href: 'mask-icon.svg', color: '#000000' }],
        ['link', { rel: 'apple-touch-icon', href: 'apple-touch-icon.png' }],

        //Manifest
        ['link', { rel: 'manifest', href: 'manifest.json' }],

        // PWA settings
        ['meta', { name: 'theme-color', content: '#ffffff' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ],
    plugins: [
        [
          '@vuepress/pwa',
          {
            serviceWorker: true,
            updatePopup: true
          }
        ]
    ],
    themeConfig: {
        sidebar: [
            {
                title: 'Общее',
                collapsable: false,
                children: [
                    '/',
                    '/subjects-schedule',
                    '/call-schedule'
                ]
            },
            {
                title: 'Предметы',
                collapsable: false,
                children: [
                    '/english.md',
                    '/further-math.md',
                    '/discrete-computing.md',
                    '/computer-logic.md',
                    '/programming.md',
                    '/web-programming.md',
                    '/physics.md'
                ]
            }
        ]
    }
}
