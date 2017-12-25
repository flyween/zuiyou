<template>
  <div class="scroller-wrap">
    <div class="scroller" ref="scroller">
      <div class="scroll-con"  v-if="index === 0">
        <swipeout v-for="msg in alerts" :key="msg.name">
          <swipeout-item transition-mode="follow">
            <div slot="right-menu">
              <swipeout-button @click.native="onButtonClick('delete')" type="warn">删除</swipeout-button>
            </div>
            <div slot="content" class="vux-1px-t ms-item">
              <div class="ms-1-item">
                <img src="../../assets/avatar_small.jpg" class="ava">
              </div>
              <div class="ms-4-item">
                <div>{{msg.person}} 等人</div>
                <div><i class="iconfont icon-up1 blue"></i> {{msg.num}}</div>
              </div>
              <div class="ms-1-item">
                <div class="ms-com">
                  {{msg.comment}}
                </div>
              </div>
            </div>
          </swipeout-item>
        </swipeout>
      </div>

      <div class="scroll-con" v-if="index === 1">
        <swipeout>
          <swipeout-item transition-mode="follow">
            <div slot="right-menu">
              <swipeout-button @click.native="onButtonClick('delete')" type="warn">删除</swipeout-button>
            </div>
            <div slot="content" class="vux-1px-t ms-item">
              <div class="ms-1-item">
                <img src="../../assets/avatar_small.jpg" class="ava">
              </div>
              <div class="ms-4-item">
                <div>小d、小e、小f 等人</div>
                <div>999</div>
              </div>
              <div class="ms-1-item">
                <div class="ms-com">
                  asdasdasdasdasdasdasdasdsdasdasdasdasdasdasdasdasdsdasdasdasdasdasdasdasdasdsdasdasdasdasdasdasdasdasdsd
                </div>
              </div>
            </div>
          </swipeout-item>
        </swipeout>
      </div>

      <div class="common-tip">无更多信息</div>

    </div>
    <div class="top-bar">
      <tab v-model="index" custom-bar-width="20%" bar-active-color="rgb(3,175,254)" active-color="rgb(3,175,254)">
          <tab-item v-for="(item, index) in list" :key="index">{{item.name}}</tab-item>
      </tab>
    </div>
  </div>
</template>

<script>
import { Tab, TabItem, Swipeout, SwipeoutItem, SwipeoutButton } from 'vux'
import BScroll from 'better-scroll'

export default {
  name: 'message',
  components: {
    Tab,
    TabItem,
    Swipeout,
    SwipeoutItem,
    SwipeoutButton
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
      ],
      alerts: [
        {
          person: '小瓶子',
          num: 999,
          comment: '这里的天气好冷啊'
        },
        {
          person: '小瓶子的妈妈',
          num: 999,
          comment: '抬头看看天，皇冠不会掉'
        },
        {
          person: '小瓶子的爸爸',
          num: 999,
          comment: '世上只有爸爸好'
        },
        {
          person: '小瓶子的哥哥',
          num: 999,
          comment: '我送你离开，千里之外'
        }
      ]
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
      this.mainScroll.on('pullingDown', () => {
        setTimeout(() => {
          this.mainScroll.finishPullDown()
        }, 1000)
      })
    },
    onButtonClick (type) {
      alert('on button click ' + type)
    }
  },
  created () {
    // this.alerts = this.alerts.concat(this.alerts).concat(this.alerts)
  },
  mounted () {
    this.$nextTick(() => {
      this.initScroller()
    })
  }
}
</script>

<style scoped lang="less">
.scroller-wrap {
  position: relative;
  padding-top: 2rem;
  height: 100%;
}
.scroller {
  height: 100%;
  text-align: left;
  overflow: hidden;
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
  font-size: .8rem;
  text-align: center;
}
.ms-item {
  display: flex;
  padding: 0 .4rem;
  height: 3.2rem;
  border-bottom: 1px solid #efefef;
  .ms-1-item {
    flex: 1;
  }
  .ms-4-item {
    flex: 4;
    padding: .5rem 0;
    font-size: .6rem;
  }
}
.ava {
  display: inline-block;
  margin-top: .55rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
}
.ms-com {
  margin: .3rem 0;
  padding: .2rem;
  max-width: 2.7rem;
  height: 2.5rem;
  color: #aaa;
  font-size: .5rem;
  border-radius: .1rem;
  background-color: #efefef;
  word-break: break-all;
  overflow: hidden;
}
.common-tip {
  padding: .4rem 0;
  color: #03AFFE;
  font-size: .6rem;
  line-height: .8rem;
  text-align: center;
}
.iconfont {
  &.blue {
    color: #03AFFE;
  }
}
</style>
