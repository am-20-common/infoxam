module.exports =  {
    base: '/infoxam/',
    title: 'Infoxam',
    description: 'Infoxam is a static site made to spread the information that applies to AM-201 and AM-202',
    head: [
        ['meta', { name: 'theme-color', content: '#ffffff' }],
        ['link', { rel: 'icon', href: 'favicon.svg' }],
        ['link', { rel: 'mask-icon', href: 'mask-icon.svg', color: '#000000' }],
        ['link', { rel: 'apple-touch-icon', href: 'apple-touch-icon.png' }],
        ['link', { rel: 'manifest', href: 'manifest.json' }],
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
