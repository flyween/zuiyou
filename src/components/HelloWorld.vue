<template>
  <div class="root">
    <div class="bar-container">
      <div class="tab-container">
        <div class="main-tab">
          <tab v-model="index">
            <tab-item @on-item-click="onItemClick" v-for="(item, index) in list" :key="index">{{item}}</tab-item>
          </tab>
        </div>
        <swiper v-model="index" :show-dots="false" class="swiper-con" ref="swiper" height="swiperHeight">
          <swiper-item v-for="(item, index) in list" :key="index" class="swiper-item">
            <div class="tab-swiper vux-center">{{item}} Container</div>
          </swiper-item>
        </swiper>
      </div>
    </div>
    <div class="tabbar">
    </div>
  </div>
</template>

<script>
import { Tab, TabItem, Swiper, SwiperItem } from 'vux'
// import BScroll from 'better-scroll'

export default {
  name: 'HelloWorld',
  components: {
    Tab,
    TabItem,
    Swiper,
    SwiperItem
  },
  data () {
    return {
      index: 0,
      list: ['推荐', '跟拍', '视频', '图文'],
      swiperHeight: 0
    }
  },
  methods: {
    onItemClick () {}
  },
  mounted () {
    this.swiperHeight = this.$refs.swiper.$el.offsetHeight + 'px'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.root {
  height: 100%;
  padding-bottom: 50px;  
}
.bar-container {
  position: relative;
  padding-top: 50px;  
  height: 100%;
}
.tab-container {
  height: 100%;
}
.tabbar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: #eee;
}
.main-tab {
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 2rem;
  width: 100%;
  background-color: #fff;
}
.swiper-con {
  height: 100%;
}
.vux-swiper {
  height: 100%;
}
.swiper-item {
  height: 100%;
}
</style>
