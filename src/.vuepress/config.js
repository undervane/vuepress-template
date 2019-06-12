module.exports = {
  title: "Vuepress Template",
  description: "My ready to go solution for every vuepress site",
  dest: "docs",
  base: "/my-deployed-github-pages/",
  plugins: [
    ["@vuepress/back-to-top", true],
    [
      "container",
      {
        type: "vue",
        before: '<pre class="vue-container"><code>',
        after: "</code></pre>"
      }
    ]
  ],
  themeConfig: {
    sidebar: {
      "/": [
        ""
      ]
    }
  }
};
