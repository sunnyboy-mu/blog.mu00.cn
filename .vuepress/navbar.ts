import { defineNavbarConfig } from "vuepress-theme-plume";

export default defineNavbarConfig([
  { text: "首页", link: "/", icon: "material-symbols:home" },
  { text: "Projects", link: "/projects/", icon: "ri:open-source-fill" },
  {
    text: "Web 笔记",
    link: "/web-notes/",
    icon: "icon-park-outline:web-page",
    activeMatch: "^/web-notes/",
  },
  {
    text: "备忘录",
    link: "/memorandum/",
    icon: "twemoji:memo",
    activeMatch: "^/memorandum/",
  },
  {
    text: "更多",
    icon: "mingcute:more-3-fill",
    items: [
      {
        text: "站点导航",
        link: "/sites-nav/",
        icon: "ix:navigation",
        activeMatch: "^/sites-nav/",
      },
      {
        text: "阅读清单",
        link: "/ebooks/",
        icon: "emojione:books",
        activeMatch: "^/ebooks/",
      },
    ],
  },
]);
