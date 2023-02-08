module.exports = {
    title: 'LexSign Portfolio Page',
    description: 'My Portfolio',
    themeConfig: {
        nav: [
            {
                text: 'Home',
                link: '/'
            },
            {
                text: 'Blog',
                link: '/blog/'
            },
            {
                text: 'Git',
                link: 'https://github.com/LEXSIGNDE'
            }
        ]
    },
    extraWatchFiles: [

    ],
    plugins: [
        ['social-share',
            {
                networks: ['twitter', 'facebook','whatsapp']
            }
        ],
        ['go-top'],
    ],
}