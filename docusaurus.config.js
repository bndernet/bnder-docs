const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
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
                googleAnalytics: {
                    trackingID: 'UA-115344867-1',
                    anonymizeIP: true,
                },
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/bndernet/bnder-docs/edit/main/',
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                    routeBasePath: "/"
                },
                theme: {
                    customCss: [require.resolve('./src/css/custom.css')],
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'bnder.net',
                logo: {
                    alt: 'bnder Logo',
                    src: 'img/bnder_logo.jpg',
                    href: "https://bnder.net",
                    target: '_parent'
                },
                items: [
                    {
                        label: 'Our Discord',
                        href: '../../../../../../../../discord',
                        position: 'right',
                        target: '_parent'
                    },
                    {
                        label: 'Donate',
                        href: '../../../../../../../../donate',
                        position: 'right',
                        target: '_parent'
                    },
                    {
                        label: 'Documentation',
                        href: '/',
                        position: 'right',
                        target: '_parent'
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
                                label: 'Join our Discord',
                                to: 'https://bnder.net/discord',
                            },
                        ],
                    },
                    {
                        title: 'Task Manager',
                        items: [
                            {
                                label: 'Task Manager',
                                to: '../../../../../../../../',
                                target: '_parent'
                            },
                            {
                                label: 'Getting started',
                                to: '/tmb/getting-started',
                            },
                            {
                                label: 'All Commands',
                                to: '/tmb/all-commands',
                            }
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
