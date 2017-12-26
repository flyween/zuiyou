<template>
    <div class="scroller" ref="scroller">
      <div class="scroll-con">
        <div class="slides-holder"></div>
        <div class="dis-slides">
          <swiper dots-position="center" class="dis-swiper" height="100%" dots-class="banner-dots">
            <swiper-item class="dis-img-wrap" v-for="(item, index) in bannerList" :key="index">
              <!-- please make sure that your img's aspect ratio is greater than 16 / 9.5 -->
              <!-- 请确保你的图片宽高比大于 16 / 9.5 -->
              <img :src="item.img" class="d-banner">
            </swiper-item>
            <!-- <swiper-item>2</swiper-item> -->
            <!-- <swiper-item>2</swiper-item> -->
          </swiper>
        </div>
        <div class="bot-con">
          <div class="tab-wrap">
            <div class="tab-con" ref="tabScroller">
              <tab class="tabs" v-model="index" custom-bar-width="20%" bar-active-color="rgb(3,175,254)" active-color="rgb(3,175,254)">
                <tab-item class="bot-tab" v-for="(item, index) in tabList" :key="index" @on-item-click="moveTab(index)">{{item.name}}</tab-item>
              </tab>
            </div>
          </div>
          <swiper class="swiper-con" v-model="index" ref="swiper" :show-dots="false" :height="swiperHeight" @on-index-change="changeSwiper">
            <swiper-item v-for="(item, index) in tabList" :key="index" :ref="item.ref" :style="heightStyle">
              <div class="dis-item" v-for="(list, index) in item.lists" :key="index">
                <img :src="list.img" class="sw-img">
                {{list.name}}
                <badge :text="list.num" class="f-r"></badge>
                </div>
            </swiper-item>
          </swiper>
        </div>
      </div>

      <div class="top-bar">
        <div class="bar-con">
          <div class="bar-input">
            <i class="iconfont icon-fangdajing"></i>
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
import { Tab, TabItem, Swiper, SwiperItem, Badge } from 'vux'
import BScroll from 'better-scroll'

export default {
  name: 'discover',
  components: {
    Swiper,
    SwiperItem,
    Tab,
    TabItem,
    Badge
  },
  data () {
    return {
      mainScroll: null,
      tabScroll: null,
      oriHeight: '',
      tabHeight: '',
      index: 0,
      bannerList: [
        {img: require('../../assets/d1.jpg')},
        {img: require('../../assets/d2.jpg')},
        {img: require('../../assets/d3.jpg')}
      ],
      tabList: [
        {
          name: '关注',
          ref: 'scroller1',
          lists: [
            {name: '一起来吐槽', img: require('../../assets/t1.jpg'), num: '99+'},
            {name: '聊天不能缺表情', img: require('../../assets/t2.png'), num: '10086+'},
            {name: '突然觉得哪里不对', img: require('../../assets/t3.jpg'), num: '520+'},
            {name: '当时我就震惊了', img: require('../../assets/t4.jpg'), num: '1770+'},
            {name: '又有话说', img: require('../../assets/t5.jpg'), num: '987654321+'},
            {name: '每天为生活拍张照', img: require('../../assets/t6.jpg'), num: '1234567+'},
            {name: '笑着活下去', img: require('../../assets/t1.jpg'), num: '999+'}
          ]
        },
        {
          name: '热门',
          ref: 'scroller2',
          lists: [
            {name: '一起来吐槽', img: require('../../assets/t2.png'), num: '99+'}
          ]
        },
        {
          name: '搞笑',
          ref: 'scroller3',
          lists: [
            {name: '一起来吐槽', img: require('../../assets/t1.jpg'), num: '99+'},
            {name: '聊天不能缺表情', img: require('../../assets/t2.png'), num: '10086+'}
          ]
        },
        {
          name: '娱乐',
          ref: 'scroller4',
          lists: [
            {name: '一起来吐槽', img: require('../../assets/t1.jpg'), num: '99+'},
            {name: '聊天不能缺表情', img: require('../../assets/t2.png'), num: '10086+'},
            {name: '突然觉得哪里不对', img: require('../../assets/t3.jpg'), num: '520+'}
          ]
        },
        {
          name: '互动',
          ref: 'scroller2',
          lists: [
            {name: '一起来吐槽', img: require('../../assets/t1.jpg'), num: '99+'},
            {name: '聊天不能缺表情', img: require('../../assets/t2.png'), num: '10086+'},
            {name: '突然觉得哪里不对', img: require('../../assets/t3.jpg'), num: '520+'},
            {name: '当时我就震惊了', img: require('../../assets/t4.jpg'), num: '1770+'}
          ]
        },
        {
          name: '情感',
          ref: 'scroller3',
          lists: [
            {name: '一起来吐槽', img: require('../../assets/t1.jpg'), num: '99+'},
            {name: '聊天不能缺表情', img: require('../../assets/t2.png'), num: '10086+'},
            {name: '突然觉得哪里不对', img: require('../../assets/t3.jpg'), num: '520+'},
            {name: '当时我就震惊了', img: require('../../assets/t4.jpg'), num: '1770+'},
            {name: '又有话说', img: require('../../assets/t5.jpg'), num: '987654321+'}
          ]
        },
        {
          name: '萌物',
          ref: 'scroller4',
          lists: [
            {name: '一起来吐槽', img: require('../../assets/t1.jpg'), num: '99+'},
            {name: '聊天不能缺表情', img: require('../../assets/t2.png'), num: '10086+'},
            {name: '突然觉得哪里不对', img: require('../../assets/t3.jpg'), num: '520+'},
            {name: '当时我就震惊了', img: require('../../assets/t4.jpg'), num: '1770+'},
            {name: '又有话说', img: require('../../assets/t5.jpg'), num: '987654321+'},
            {name: '每天为生活拍张照', img: require('../../assets/t6.jpg'), num: '1234567+'}
          ]
        },
        {
          name: '游戏',
          ref: 'scroller2',
          lists: []
        }
      ],
      swiperHeight: '', // bot swiper's height
      heightStyle: '' // bot swiper item's height
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
        let barCon = document.querySelector('.bar-con')
        barBg.style.opacity = Math.round((-e.y / 120) * 10) / 10
        if (e.y < -120) {
          barCon.classList.add('dark')
        } else {
          barCon.classList.remove('dark')
        }
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
    },
    changeSwiper () {
      // change view when
      let sw = document.querySelectorAll('.vux-swiper')
      let disItem = document.querySelector('.dis-item')
      let scroller = document.querySelector('.scroller')
      let botCon = document.querySelector('.bot-con')
      let swiperCon = document.querySelector('.swiper-con')
      // I have noway but using timeOut to get the correct index number
      setTimeout(() => {
        var botSwiperShownHeight = 0
        let botAvaliable = scroller.offsetHeight - botCon.offsetTop - swiperCon.offsetTop
        if (this.tabList[this.index].lists) {
          // dis-item's total height
          botSwiperShownHeight = disItem.offsetHeight * (this.tabList[this.index].lists.length || 0)
        }
        // scroll to perfect position
        let posY = botAvaliable - botSwiperShownHeight
        if (posY >= 0) {
          posY = 0
          this.mainScroll.scrollTo(0, posY, 500)
        }
        // then change bot swiper's height
        if (botSwiperShownHeight < botAvaliable) botSwiperShownHeight = botAvaliable
        if (!this.tabList[this.index].lists || this.tabList[this.index].lists.length === 0) {
          botSwiperShownHeight = scroller.offsetHeight - botCon.offsetTop - swiperCon.offsetTop
        }
        sw[1].style.height = botSwiperShownHeight + 'px'
        this.heightStyle = 'height: ' + botSwiperShownHeight + 'px'
        // change tabs's style
        this.moveTab(this.index)
        // refresh vertical scroller
        this.mainScroll.refresh()
      }, 0)
    },
    moveTab (index) {
      let singleTab = document.querySelector('.bot-tab')
      let tabs = document.querySelector('.tabs')
      let tabCon = document.querySelector('.tab-con')
      let midNum = tabCon.offsetWidth / singleTab.offsetWidth
      var posX = 0
      if (index + 1 > Math.ceil(midNum) / 2) {
        if (index + 1 <= this.tabList.length - Math.floor(midNum) / 2) {
          posX = -(index + 1 - Math.ceil(midNum) / 2) * singleTab.offsetWidth
        } else {
          posX = -(tabs.offsetWidth - tabCon.offsetWidth)
        }
      }
      this.tabScroll.scrollTo(posX, 0, 500)
    }
  },
  mounted () {
    let disItem = document.querySelector('.dis-item')
    this.swiperHeight = disItem.offsetHeight * this.tabList[0].lists.length + 'px'
    this.heightStyle = 'height:' + disItem.offsetHeight * this.tabList[0].lists.length + 'px'
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
      // codes blow were supposed tober here, but they definatly don't work here, so I moved them out of the $nextTick
      // let disItem = document.querySelector('.dis-item')
      // this.swiperHeight = disItem.offsetHeight * this.tabList[0].lists.length + 'px'
      // this.heightStyle = 'height:' + disItem.offsetHeight * this.tabList[0].lists.length + 'px'
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
      color: #fff;
      &.dark {
        color: #ccc;
        .iconfont {
          color: #ccc;
        }
      }
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
      .iconfont {
        color: #fff;
      }
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
    .dis-img-wrap {
      overflow: hidden;
    }
    .d-banner {
      position: relative;
      height: 100%;
      left: 50%;
      transform: translate(-50%, 0)
    }
  }
  .slides-holder {
    height: 9.5rem;
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
    }
    .tabs {
      height: 1.5rem;
      .vux-tab-item {
        line-height: 1.5rem;
      }
    }
  }
  .dis-item {
    margin-left: .7rem;
    padding-right: 1rem;
    height: 3rem;
    line-height: 3rem;
    border-bottom: 1px solid #efefef;
    font-size: .6rem;
    // &:last-child {
    //   border: none;
    // }
    .sw-img {
      display: inline-block;
      width: 2.2rem;
      height: 2.2rem;
      border-radius: 4px;
      vertical-align: middle;
    }
    .f-r {
      margin-top: 1.2rem;
      float: right;
    }
  }
  .swiper-con {
    color: #2e2e2e;
    background-color: #fff;
  }
</style>
<style lang="less">
  .banner-dots {
    .active {
      background-color: #03AFFE !important;
    }
    bottom: 0 !important;
  }

</style>

