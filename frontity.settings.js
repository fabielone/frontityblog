const settings = {
  name: "f-app",
  state: {
    frontity: {
      url: "https://fabiel.mx/",
      title: "Fabiel Ramirez",
      description: "Mobile and Web Development",
    },
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            ["Web Dev", "/category/webdev/"],
            ["Game Dev", "/category/gamedev/"],
            ["Art", "/category/art"],
            ["About", "/about-us/"],
            ["Another Ta", "/"],
          ],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "https://fabielramirez.com/wpinstallxyz/wp-json",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
