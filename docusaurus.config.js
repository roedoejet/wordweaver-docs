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
      content:
        "Please do not attempt to use these docs. We're working hard on it, but they're not quite ready yet.",
      backgroundColor: '#DB7093', // Defaults to `#fff`.
      textColor: '#091E42', // Defaults to `#000`.
    },
    navbar: {
      title: 'WordWeaver',
      logo: {
        alt: 'Wordweaver',
        src: 'img/android-chrome-512x512.png',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/nrc-cnrc/wordweaver',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: 'docs/',
            },
            {
              label: 'Guides',
              to: 'docs/firststeps',
            },
          ],
        },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
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
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'intro',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/roedoejet/wordweaver-docs/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/roedoejet/wordweaver-docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
