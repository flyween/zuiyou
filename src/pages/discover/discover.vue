<template>
    <div class="scroller" ref="scroller">
      <div class="scroll-con">
        <div class="slides-holder"></div>
        <div class="dis-slides">
          <swiper dots-position="center" class="dis-swiper" height="100%">
            <swiper-item>1</swiper-item>
            <swiper-item>2</swiper-item>
          </swiper>
        </div>
        <div>
          <div>tabs</div>
          <div>swipers</div>
          <div>swipers</div>
          <div>swipers</div>
          <div>swipers</div>
          <div>swipers</div>
          <div>swipers</div>
          <div>swipers</div>
          <div>swipers</div>
          <div>swipers</div>
          <div>swipers</div>
          <div>swipers</div>
          <div>swipers</div>
          <div>swipers</div>
          <div>swipers</div>
          <div>swipers</div>
          <div>swipers</div>
        </div>
      </div>

      <div class="top-bar">
        searchbar
      </div>
    </div>
</template>

<script>
import { Swiper, SwiperItem } from 'vux'
import BScroll from 'better-scroll'

export default {
  name: 'discover',
  components: {
    Swiper,
    SwiperItem
  },
  data () {
    return {
      mainScroll: null
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
        // let swiper = document.querySelector('.dis-swiper')
        // swiper.style.height = '1000px'
        let swiper = document.querySelector('.dis-slides')
        console.log(swiper.style.height)
        swiper.style.height = '1000px'
      })
    }
  },
  mounted () {
    this.$nextTick(() => {
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
  }
  .slides-holder {
    height: 9.5rem;
  }
</style>
