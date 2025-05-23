import process from "node:process";
import { viteBundler } from "@vuepress/bundler-vite";
import { baiduAnalyticsPlugin } from "@vuepress/plugin-baidu-analytics";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import dotenv from "dotenv";
import isCI from "is-ci";
import { globSync } from "tinyglobby";
import { defineUserConfig } from "vuepress";
import { fs, getDirname, path } from "vuepress/utils";
import theme from "./.vuepress/theme.js";

const __dirname = getDirname(import.meta.url);
const resolve = (...dirs: string[]) => path.resolve(__dirname, ...dirs);

const isProd = process.env.NODE_ENV === "production";

if (!isCI) {
  dotenv.config({ path: ".env.local" });
}

export default defineUserConfig({
  lang: "zh-CN",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "沐沐物语",
      description: "一个小白立志成为全栈开发工程师的的成长物语！",
    },
  },
  dest: "docs",
  public: resolve("public"),
  temp: resolve(".vuepress/.temp"),
  cache: resolve(".vuepress/.cache"),
  shouldPrefetch: false,
  head: [
    ["link", { ref: "icon", href: "/favicon.ico", type: "image/x-icon" }],
    ["meta", { "http-equiv": "X-UA-Compatible", content: "IE=edg" }],
    ["meta", { name: "msapplication-TileColor", content: "#da532c" }],
    ["meta", { name: "theme-color", content: "#ffffff" }],
  ],
  plugins: [
    isProd ? googleAnalyticsPlugin({ id: "G-TMXNCJR2K7" }) : [],
    isProd
      ? baiduAnalyticsPlugin({ id: "49ebcb8d1abfcde890ef6f320a101db7" })
      : [],
  ],

  alias: {
    "~theme": resolve("./.vuepress/theme"),
  },

  define: {
    __VUEPRESS_GAODE_MAP_KEY__: process.env.VUEPRESS_GAODE_MAP_KEY,
  },

  bundler: viteBundler(),

  theme,

  onGenerated: async (app) => {
    const names = ["Ma-Shan-Zheng", "Londrina-Sketch"];
    const dest = app.dir.dest("assets");
    const indexPath = app.dir.dest("index.html");
    const assets = globSync("*.ttf", { cwd: dest }) || [];
    const fonts = assets.filter((asset) =>
      names.some((name) => asset.includes(name))
    );
    let links = "";
    fonts.forEach((font) => {
      links += `<link rel="preload" href="/assets/${font}" as="font" type="font/ttf" crossorigin="anonymous">`;
    });
    const content = fs.readFileSync(indexPath, "utf-8");
    fs.writeFileSync(indexPath, content.replace("<head>", `<head>${links}`));
  },
});
