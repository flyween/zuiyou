<template>
    <div class="scroller" ref="scroller">
      <div class="scroll-con">
        <div class="slides-holder"></div>
        <div class="dis-slides">
          <swiper dots-position="center" class="dis-swiper" height="100%">
            <swiper-item>
              <img src="../../assets/d1.jpg" class="d-banner">
            </swiper-item>
            <swiper-item>2</swiper-item>
            <swiper-item>2</swiper-item>
          </swiper>
        </div>
        <div class="bot-con">
          <div class="tab-wrap">
            <div class="tab-con" ref="tabScroller">
              <tab class="tabs" v-model="index" custom-bar-width="20%" bar-active-color="rgb(3,175,254)" active-color="rgb(3,175,254)">
                <tab-item v-for="(item, index) in tabList" :key="index">{{item.name}}</tab-item>
              </tab>
            </div>
          </div>
          <swiper class="swiper-con" v-model="index" ref="swiper" :show-dots="false" :height="swiperHeight">
            <swiper-item v-for="(item, index) in tabList" :key="index" :ref="item.ref" :style="heightStyle">
              <div class="dis-item" v-for="(list, index) in item.lists" :key="index">{{list.name}}</div>
            </swiper-item>
          </swiper>
        </div>
      </div>

      <div class="top-bar">
        <div class="bar-con">
          <div class="bar-input">
            <i class="iconfont icon-fangdajing white"></i>
            搜索内容
          </div>
          <div class="bar-add">
            <span class="add-wrap">+</span>
          </div>
        </div>
        <div class="bar-bg"></div>
      </div>
    </div>
</template>

<script>
import { Tab, TabItem, Swiper, SwiperItem } from 'vux'
import BScroll from 'better-scroll'

export default {
  name: 'discover',
  components: {
    Swiper,
    SwiperItem,
    Tab,
    TabItem
  },
  data () {
    return {
      mainScroll: null,
      tabScroll: null,
      oriHeight: '',
      tabHeight: '',
      index: 0,
      tabList: [
        {
          name: '关注',
          ref: 'scroller1',
          lists: [
            {name: '一起来吐槽', img: '../../assets/logo.png', num: '99+'},
            {name: '一起来吐槽', img: '../../assets/logo.png', num: '99+'},
            {name: '一起来吐槽', img: '../../assets/logo.png', num: '99+'},
            {name: '一起来吐槽', img: '../../assets/logo.png', num: '99+'},
            {name: '一起来吐槽', img: '../../assets/logo.png', num: '99+'},
            {name: '一起来吐槽', img: '../../assets/logo.png', num: '99+'},
            {name: '一起来吐槽', img: '../../assets/logo.png', num: '99+'}
          ]
        },
        {
          name: '热门',
          ref: 'scroller2'
        },
        {
          name: '搞笑',
          ref: 'scroller3'
        },
        {
          name: '娱乐',
          ref: 'scroller4'
        },
        {
          name: '互动',
          ref: 'scroller2'
        },
        {
          name: '情感',
          ref: 'scroller3'
        },
        {
          name: '萌物',
          ref: 'scroller4'
        },
        {
          name: '游戏',
          ref: 'scroller2'
        }
      ],
      swiperHeight: '', // bot swipers height
      heightStyle: '' // bot swiper item height
    }
  },
  methods: {
    initScroller () {
      this.mainScroll = new BScroll(this.$refs.scroller, {
        probeType: 3,
        deceleration: 0.001,
        pullDownRefresh: true,
        bounce: true,
        bounceTime: 400,
        swipeBounceTime: 300,
        swipeTime: 2000,
        click: true
      })
      this.mainScroll.on('scroll', (e) => {
        // banner's changes
        let swiper = document.querySelector('.dis-slides')
        if (e.y > 0) swiper.style.height = e.y + this.oriHeight + 'px'
        // topbar's changes
        let barBg = document.querySelector('.bar-bg')
        barBg.style.opacity = Math.round((-e.y / 120) * 10) / 10
        // bot tabs's change
        let wrapLine = document.querySelector('.tab-wrap')
        if (e.y < -(this.oriHeight - this.tabHeight)) {
          wrapLine.style.top = -e.y - this.oriHeight + this.tabHeight + 'px'
        } else {
          wrapLine.style.top = '0'
        }
      })
      this.mainScroll.on('pullingDown', (e) => {
        this.mainScroll.finishPullDown()
      })
      setTimeout(() => {
        this.mainScroll.refresh()
      }, 0)
      // tabScroller
      this.tabScroll = new BScroll(this.$refs.tabScroller, {
        scrollX: true,
        probeType: 3,
        deceleration: 0.001,
        bounce: true,
        bounceTime: 400,
        swipeBounceTime: 300,
        swipeTime: 2000,
        click: true
      })
    }
  },
  mounted () {
    let scroller = document.querySelector('.scroller')
    let topBar = document.querySelector('.top-bar')
    let tabs = document.querySelector('.tabs')
    this.swiperHeight = (scroller.offsetHeight - topBar.offsetHeight - tabs.offsetHeight) + 'px'
    this.heightStyle = 'height:' + (scroller.offsetHeight - topBar.offsetHeight - tabs.offsetHeight) + 'px'
    this.$nextTick(() => {
      // get banner's height and toptab's height
      let swiper = document.querySelector('.dis-slides')
      let topBar = document.querySelector('.top-bar')
      let tabs = document.querySelector('.tabs')
      let botCon = document.querySelector('.bot-con')
      // this.oriHeight = +window.getComputedStyle(swiper).height.slice(0, window.getComputedStyle(swiper).height.length - 2)
      this.oriHeight = swiper.offsetHeight
      // this.tabHeight = +window.getComputedStyle(topBar).height.slice(0, window.getComputedStyle(topBar).height.length - 2)
      this.tabHeight = topBar.offsetHeight
      // init center tabs's width
      tabs.style.width = botCon.offsetWidth * 3 / 2 + 'px'
      // init bot swiper's height
      // let scroller = document.querySelector('.scroller')
      // this.swiperHeight = (scroller.offsetHeight - topBar.offsetHeight - tabs.offsetHeight) + 'px'
      // this.heightStyle = 'height:' + (scroller.offsetHeight - topBar.offsetHeight - tabs.offsetHeight) + 'px'
      this.initScroller()
    })
  }
}
</script>

<style scoped lang="less">
  .scroller {
    position: relative;
    height: 100%;
    text-align: left;
    overflow: hidden;
  }
  .scroll-con {
    position: relative;
  }
  .top-bar {
    position: absolute;
    z-index: 3;
    top: 0;
    left: 0;
    width:100%;
    height: 1.6rem;
    line-height: 1.6rem;
    font-size: .8rem;
    text-align: center;
    .bar-bg {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
      background-color: #fff;
      opacity: 0;
    }
    .bar-con {
      display: flex;
      position: relative;
      z-index: 2;
      padding: 0 .8rem;
      font-size: .6rem;
    }
    .bar-input {
      flex: 6;
      margin-top: 0.2rem;
      padding-left: .5rem;
      height: 1.2rem;
      line-height: 1.2rem;
      color: #ccc;
      border-radius: 1.2rem;
      background-color: rgba(0,0,0,.05);
      text-align: left;
    }
    .bar-add {
      flex: 1;
      text-align: right;
    }
    .add-wrap {
      display: inline-block;
      width: 1.2rem;
      height: 1.2rem;
      line-height: 1.2rem;
      border-radius: 1.2rem;
      background-color: rgba(0,0,0,.05);
      text-align: center;
      color: #fff;
    }
  }
  .dis-slides {
    position: absolute;
    bottom: 100%;
    left: 0;
    z-index: 2;
    margin-bottom: -9.5rem;
    width: 100%;
    height: 9.5rem;
    background-color: #abc;
  }
  .dis-swiper {
    height: 100%;
    .d-banner {
      min-width: 100%;
      height: 100%;
    }
  }
  .slides-holder {
    height: 9.5rem;
  }
  .iconfont {
    &.white {
      color: #fff;
    }
  }
  .bot-con {
    position: relative;
    padding-top: 1.5rem;
    .tab-wrap {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      width: 100%;
      height: 1.5rem;
      background-color: #fff;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }
    .tabs {
      height: 1.5rem;
      .vux-tab-item {
        line-height: 1.5rem;
      }
    }
  }
  .dis-item {
    height: 3rem;
  }
  // .swiper-con {
  //   height: 400px;
  // }
</style>
