// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const math = require('remark-math');
const katex = require('rehype-katex');


/** @type {import('@docusaurus/types').Config} */
module.exports = {
    title: 'Blog | ekurea.net',
    tagline: 'Dinosaurs are cool',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://blog.ekurea.net',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'ekureaa', // Usually your GitHub org/user name.
    projectName: 'blog', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
      defaultLocale: 'ja',
      locales: ['ja'],
    },

    presets: [
      [
        '@docusaurus/preset-classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: false,
          blog: {
            routeBasePath: '/',
            showReadingTime: true,
            remarkPlugins: [math],
            rehypePlugins: [katex],
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
            editUrl:
              'https://github.com/ekureaa/blog/blob/main',
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }),
      ],
    ],

    stylesheets: [
      {
        href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
        type: 'text/css',
        integrity:
          'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
        crossorigin: 'anonymous',
      },
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
          title: 'エクレア',
          logo: {
            alt: 'My Site Logo',
            src: 'img/favicon.ico',
          },
          items: [
          ],
        },
        footer: {
          style: 'dark',
          links: [
            { title: 'Socials',
              items: [
                {
                  label: 'ekurea.net(準備中)',
                  href: 'https://ekurea.net',
                },
                {
                  label: 'Misskey',
                  href: 'https://misskey.ekurea.net/@ekurea',
                },
                {
                  label: 'keybase',
                  href: 'https://keybase.io/ekurea',
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} ekurea. Built with Docusaurus.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
};
