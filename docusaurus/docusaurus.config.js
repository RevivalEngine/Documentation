const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'RevivalEngine Docs',
  tagline: 'We\'re building a free and open-source platform for creating web-based games.',
  url: 'https://revivalengine.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo_JFA_icon.ico',
  organizationName: 'RevivalEngine', // Usually your GitHub org/user name.
  projectName: 'RevivalEngine', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'RevivalEngine',
      logo: {
        alt: 'RevivalEngine Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: '/about/',
          position: 'left',
          label: 'About',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    colorMode: {
      disableSwitch: true,
    },
    footer: {
      style: 'light',
      links: [
      ],
      copyright: `Copyright © 2019-${new Date().getFullYear()} RevivalEngine Team and Contributors: Anonymous Citizens of the Internet`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['lua'],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/RevivalEngine/Documentation/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/RevivalEngine/Documentation/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
