# zuiyou-web

> zuiyou mobile web page

本项目主要使用到的库或者工具如下：

> * vue 2.5 + vuex + [vux](https://vux.li) + [better-scroll](https://github.com/ustbhuangyi/better-scroll)
> * 图片压缩工具 [智图](http://zhitu.isux.us/) 的 [桌面版](http://zhitu.isux.us/index.php/preview/download)

------

## Features
- 漂亮的UI(详情见下列Gif)，完美的体验
- nice VUX && nice Better-scroll
- etc
## Todo

- [ ] ~~视频播放及弹幕~~(:confounded:mobile端web视频是真的不好做，尤其mobileSafari默认使用自己的video控制面板)
- [ ] ~~Popup Component~~(考虑到弹窗时浏览器后退不是隐藏弹窗而是后退地址，所以某些组件取消popup形式)
- [x] 夜间模式

## Overview
![overview](./static/overview.gif)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```