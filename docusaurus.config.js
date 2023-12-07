// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Oficina Temas Turbo',
    tagline: 'Tudo pela Metade do Dobro!',
    favicon: 'img/favicon.png',

    // Set the production url of your site here
    url: 'https://github.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/Site_Oficina/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'Grupo A', // Usually your GitHub org/user name.
    projectName: 'Site_Oficina', // Usually your repo name.
    deploymentBranch: 'gh-pages',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            navbar: {
                title: 'Oficina Temas Turbo',
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/favicon.png',
                },
                items: [
                    {to: "contacto", label: "Contactos", position: "left"},
                    {to: "sobre_nos", label: "Sobre Nós", position: "left"},
                ],
                style: 'dark',
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Redes Sociais',
                        items: [
                            {
                                label: 'Facebook',
                                href: 'https://www.facebook.com/seu-usuario',
                            },
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/seu-usuario',
                            },
                            {
                                label: 'LinkedIn',
                                href: 'https://www.linkedin.com/in/seu-usuario',
                            },
                        ],
                    },
                    {
                        title: 'Contactos',
                        items: [
                            {
                                label: 'Endereço',
                                href: 'Rua Dr. José Neves Júnior, Pan, 8000-332 Faro',
                            },
                            {
                                label: 'Telefone',
                                href: '(11) 1234-5678',
                            },
                            {
                                label: 'E-mail',
                                href: 'info@temasturbo.com',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Oficina Temas Turbo, Inc. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
