module.exports = {
    base: '/infoxam/',
    title: 'Infoxam',
    description: 'Infoxam is a static site made to spread the information that applies to AM-201 and AM-202',
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
