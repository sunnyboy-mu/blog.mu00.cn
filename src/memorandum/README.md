---
pageLayout: home
title: 备忘录
icon: /images/memorandum.svg
pageClass: memorandum-nav
config:
  - type: doc-hero
    hero:
      name: 备忘录
      tagline: 日常开发中，所使用的各类技术 和 工具 备忘录。
      image: /images/memorandum.svg

  - type: features
    features:
      - title: NVM
        icon: arcticons:nvm
        details: nvm 命令、安装
        link: ./1.nvm.md

      - title: npm
        icon: material-icon-theme:npm
        details: npm 命令
        link: ./2.npm.md

      - title: Git
        icon: material-icon-theme:git
        details: Git命令、分支、Tag
        link: ./3.git.md

      - title: Nginx
        icon: material-icon-theme:nginx
        details: Nginx 配置
        link: ./4.nginx.md

      - title: ZSH
        icon: devicon:zsh
        details: zsh 安装、主题、插件、配置
        link: ./5.zsh.md

      - title: VS Code
        icon: material-icon-theme:vscode
        details: 配置、插件
        link: ./6.vs-code.md

  - type: custom
permalink: /memorandum/
createTime: 2025/05/22 11:00:04
---

<style>
.memorandum-nav {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient(120deg, #ff8736 30%, #ffdf85);
  --vp-home-hero-image-background-image: linear-gradient(
    45deg,
    rgb(255, 246, 215) 50%,
    rgb(239, 216, 177) 50%
  );
  --vp-home-hero-image-filter: blur(44px);
}

[data-theme="dark"] .memorandum-nav {
  --vp-home-hero-image-background-image: linear-gradient(
    45deg,
    rgba(255, 246, 215, 0.07) 50%,
    rgba(239, 216, 177, 0.15) 50%
  );
}
</style>
