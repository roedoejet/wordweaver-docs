module.exports = {
    title: 'WordWeaver Documentation',
    tagline: 'Weave beautiful verb conjugation websites',
    url: 'https://docs.wordweaver.ca',
    baseUrl: '/',
    favicon: 'img/favicon.ico',
    organizationName: 'roedoejet', // Usually your GitHub org/user name.
    projectName: 'wordweaver-docs', // Usually your repo name.
    themeConfig: {
        // algolia: {
        //   apiKey: 'YOUR_API_KEY',
        //   indexName: 'YOUR_INDEX_NAME',
        //   searchParameters: {}, // Optional (if provided by Algolia)
        // },
        announcementBar: {
            id: 'do_not_use', // Any value that will identify this message.
            content: "Please do not attempt to use these docs. We're working hard on it, but they're not quite ready yet.",
            backgroundColor: '#DB7093', // Defaults to `#fff`.
            textColor: '#091E42', // Defaults to `#000`.
        },
        navbar: {
            title: 'WordWeaver',
            logo: {
                alt: 'Wordweaver',
                src: 'img/android-chrome-512x512.png',
            },
            items: [{
                    to: 'docs/intro',
                    activeBasePath: 'docs',
                    label: 'Docs',
                    position: 'left',
                },
                {
                    href: 'https://github.com/nrc-cnrc/wordweaver',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [{
                    title: 'Docs',
                    items: [{
                            label: 'Introduction',
                            to: 'docs/intro',
                        },
                        {
                            label: 'Guides',
                            to: 'docs/installation',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/roedoejet/wordweaver-docs',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} National Research Council Canada. Docs built with Docusaurus.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/roedoejet/wordweaver-docs/edit/main/',
                },
                blog: false,
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};