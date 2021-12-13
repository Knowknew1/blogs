module.exports = {
  title: "Knowknew1",
  description: "休息一下",
  theme: "reco",
  base: "/",
  dest: "dist",
  search: true,
  searchMaxSuggestions: 10,
  head: [
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
    ["link", { rel: "icon", href: "/assets/img/小丑.png" }],
    [
      "script",
      {
        language: "javascript",
        type: "text/javascript",
        src: "/js/MouseClickEffect.js",
      },
    ],
    [
      "script",
      {
        language: "javascript",
        type: "text/javascript",
        src: "/js/canvas-nest.min.js",
      },
    ],
  ],
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  plugins: {
    "go-top": true,
    "@vuepress-reco/vuepress-plugin-back-to-top": false,
    "dynamic-title": {
      showIcon: "/assets/img/小丑.png",
      showText: "(/≧▽≦/)咦！又好了！",
      hideIcon: "/assets/img/小丑.png",
      hideText: "(●—●)喔哟，崩溃啦！",
      recoverTime: 1000,
    },
    "@vuepress-reco/vuepress-plugin-kan-ban-niang": {
      theme: [
        "blackCat",
        "miku",
        "z16",
        "whiteCat",
        "haru1",
        "haru2",
        "haruto",
        "koharu",
        "izumi",
        "shizuku",
        "wanko",
      ],
      clean: true,
    },
    meting: {
      meting: {
        server: "netease", // netease:网易云，tencent:qq音乐，xiami:虾米音乐
        type: "playlist",
        mid: "2479541880",
      },
      aplayer: {
        autoplay: true,
        mini: true,
        order: "random",
        theme: "#282c34",
      },
      mobile: {
        cover: false,
        lrc: false,
      },
    },
  },
  themeConfig: {
    author: "Knowknew1",
    logo: "/assets/img/小丑.png",
    type: "blog",
    authorAvatar: "/assets/img/picture.jpg",
    noFoundPageByTencent: false,
    nav: [
      { text: "主页", link: "/", icon: "reco-home" },
      { text: "TimeLine", link: "/timeline/", icon: "reco-date" },
      {
        text: "关于我",
        icon: "reco-account",
        items: [
          { text: "关于我", link: "/view/vue/about.md" },
          { text: "其他", link: "/views/About/示例一.md" },
        ],
      },
    ],
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "分类", // 默认文案 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "标签", // 默认文案 “标签”
      },
      socialLinks: [
        // 信息栏展示社交信息
        // { icon: "reco-github", link: "https://github.com/recoluan" },
      ],
    },
  },
  markdown: {
    lineNumbers: false,
  },
};
