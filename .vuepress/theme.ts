import { plumeTheme } from "vuepress-theme-plume";

export default plumeTheme({
  hostname: "https://blog.mu00.cn/",
  docsRepo: "https://github.com/sunnyboy-mu",
  docsDir: "src",

  blog: false,

  codeHighlighter: {
    twoslash: {
      twoslashOptions: {
        compilerOptions: {
          paths: {},
        },
      },
    },
    lineNumbers: 10,
  },

  markdown: {
    mermaid: true,
    caniuse: true,
    jsfiddle: true,
    demo: true,
  },

  search: {
    provider: "local",
    // provider: "algolia",
    // appId: "KRJOJ00KBL",
    // apiKey: "3f3b13613235873fbcbc9d304de18126",
    // indexName: "pengzhanbo",
  },

  // comment: {
  //   provider: "Giscus",
  //   comment: true,
  //   repo: "pengzhanbo/pengzhanbo.cn",
  //   repoId: "MDEwOlJlcG9zaXRvcnkxNDgwMzY4MDc=",
  //   category: "Blog-Comment",
  //   categoryId: "DIC_kwDOCNLcx84CUulO",
  //   mapping: "pathname",
  //   reactionsEnabled: true,
  //   inputPosition: "top",
  //   darkTheme: "dark_protanopia",
  //   lightTheme: "light_protanopia",
  // },
  comment: false,
});
