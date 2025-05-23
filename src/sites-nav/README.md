---
pageLayout: home
title: 站点导航
icon: /images/memorandum.svg
pageClass: page-sites-nav
config:
  - type: doc-hero
    hero:
      name: 站点导航
      tagline: 收集和整理有关前后端、运维、在线工具等相关资源
      image: /images/memorandum.svg

  - type: features
    features:
      - title: Web 资源
        icon: hugeicons:web-validation
        details: Web 框架、工具、组件、可视化
        link: ./web-sites.md

      - title: 综合服务
        icon: ri:service-line
        details: 博客、论坛、在线工具、影视影音
        link: ./service-sites.md

      - title: Ops 运维
        icon: grommet-icons:cloud-computer
        details: 云平台、云原生、部署
        link: ./ops-sites.md

      - title: AIGC
        icon: ph:open-ai-logo-light
        details: 大模型、人工智能、深度思考
        link: ./aigc-sites.md

  - type: custom
permalink: /sites-nav/
createTime: 2025/05/22 11:00:04
---

<style>
.page-sites-nav {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient(120deg, #ff8736 30%, #ffdf85);
  --vp-home-hero-image-background-image: linear-gradient(
    45deg,
    rgb(255, 246, 215) 50%,
    rgb(239, 216, 177) 50%
  );
  --vp-home-hero-image-filter: blur(44px);
}

[data-theme="dark"] .page-sites-nav {
  --vp-home-hero-image-background-image: linear-gradient(
    45deg,
    rgba(255, 246, 215, 0.07) 50%,
    rgba(239, 216, 177, 0.15) 50%
  );
}
</style>
