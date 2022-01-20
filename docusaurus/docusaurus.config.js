const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Rain Zora Integration",
  tagline: "Make It Rain",
  url: "https://beehive-innovation.github.io",
  baseUrl: "/rain-zora/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  // favicon: "img/favicon.ico",
  organizationName: "beehive-innovation", // Usually your GitHub org/user name.
  projectName: "rain-zora", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Rain Zora Integration",
      // logo: {
      //   alt: "Rain Protocol Logo",
      //   src: "img/logo.svg",
      // },
      items: [
        {
          to: "/glossary",
          label: "Glossary",
          position: "left",
        },
        {
          to: "/api",
          // activeBasePath: "/API",
          label: "API",
          position: "left",
        },
        {
          type: "docsVersionDropdown",
          position: "left",
        },
        {
          href: "https://github.com/beehive-innovation/rain-zora",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Beehive Innovation`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "../docs",
          routeBasePath: "/",
          exclude: ["**/*/test/**/*.md"],
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        docsRouteBasePath: "/",
      },
    ],
  ],
};
