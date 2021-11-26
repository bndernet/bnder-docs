const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  title: 'bnder Docs',
  url: 'https://docs.bnder.net',
  baseUrl: '/docs/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'bndernet',
  projectName: 'bnder-docs',

  clientModules: [
    require.resolve("./removeTrailingSlash.js")
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/bndernet/bnder-docs/edit/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          routeBasePath: "/"
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'bnder Docs',
        logo: {
          alt: 'bnder Logo',
          src: 'img/bnder_logo.jpg',
        },
        items: [
          {
            label: "Back to main page",
            to: "https://bnder.net",
            target: "_self"
          },
          {
            href: 'https://github.com/bndernet/bnder-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Direct invites',
            items: [
              {
                label: 'Invite Task Manager',
                to: 'https://bnder.net/@tmb',
              },
              {
                label: 'Invite Discord Wellbeing',
                to: 'https://bnder.net/@dwb',
              },
              {
                label: 'Join our Discord',
                to: 'https://bnder.net/discord',
              },
            ],
          },
          {
            title: 'Our Discord Bots',
            items: [
              {
                label: 'Task Manager',
                to: 'https://bnder.net/tmb',
              },
              {
                label: 'Discord Wellbeing',
                to: 'https://bnder.net/dwb',
              },
            ],
          },
          {
            title: 'Social Media',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/bnderde',
              },
              {
                label: 'Instagram',
                href: 'https://instagram.com/bnder.de',
              },
              {
                label: 'Discord',
                href: 'https://bnder.net/discord',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/bndernet',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UCn3Dk1AqdOR1bt3dUESHw2w',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Imprint',
                to: 'https://bnder.net/imprint',
              },
              {
                label: 'Privacy policy',
                to: 'https://bnder.net/privacy',
              },
              {
                label: 'Terms of Use',
                to: 'https://bnder.net/termsofuse',
              },
              {
                label: 'Community Guidelines',
                to: 'https://bnder.dev/guidelines',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} bnder`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
