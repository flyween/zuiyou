<template>
    <div class="scroller" ref="scroller">
      <div class="scroll-con">
      </div>

      <div class="top-bar">
        <tab v-model="index" custom-bar-width="30%" bar-active-color="#03AFFE" active-color="#03AFFE">
           <tab-item v-for="(item, index) in list" :key="index">{{item.name}}</tab-item>
        </tab>
      </div>
    </div>
</template>

<script>
import { Tab, TabItem } from 'vux'
import BScroll from 'better-scroll'

export default {
  name: 'message',
  components: {
    Tab,
    TabItem
  },
  data () {
    return {
      mainScroll: null,
      index: 0,
      list: [
        {
          name: '提醒'
        },
        {
          name: '消息'
        }
      ]
    }
  },
  methods: {
    initScroller () {
      this.mainScroll = new BScroll(this.$refs.scroller, {
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
}
.top-bar {
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  width:100%;
  height: 1.6rem;
  line-height: 1.6rem;
  background-color: #fff;
  opacity: 0.4;
  font-size: .8rem;
  text-align: center;
}
</style>
