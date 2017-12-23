<template>
<div class="bar-container">
    <div class="tab-container">

      <div class="main-tab">
          <tab v-model="index" custom-bar-width="20%" bar-active-color="rgb(3,175,254)" active-color="rgb(3,175,254)">
          <tab-item @on-item-click="onItemClick" v-for="(item, index) in list" :key="index">{{item.name}}</tab-item>
          </tab>
      </div>
      <swiper v-model="index" :show-dots="false" class="swiper-con" ref="swiper" :height="swiperHeight">
          <swiper-item v-for="(item, index) in list" :key="index" class="swiper-item" :ref="item.ref" :style="heightStyle">
            <div class="list-container">
              <div class="list-box" v-for="n in 5" :key="n" @click="seeDetail">
                <div class="box-tit">
                  <div class="box-ava">
                    <img src="../../assets/avatar_small.jpg">
                  </div>
                  <div class="box-alia">纯属虚构</div>
                  <div class="box-close"><i class="iconfont icon-close"></i></div>
                </div>
                <div class="box-content">
                  <div class="con-des">什么鬼内容？</div>
                  <div class="con-media">
                    <img src="../../assets/sb.jpg">
                  </div>
                  <span class="con-tag">这都是套路</span>
                </div>
                <div class="comments-area">
                  
                </div>
              </div>
              
            </div>
          </swiper-item>
      </swiper>
       
    </div>

    <PageDetail :show="show9"></PageDetail>

</div>
</template>

<script>
// import Vue from 'vue'
import { TransferDom, Tab, TabItem, Swiper, SwiperItem, Popup } from 'vux'
import PageDetail from '@/components/PageDetail'
import BScroll from 'better-scroll'

export default {
  name: 'Recommend',
  directives: {
    TransferDom
  },
  components: {
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    Popup,
    PageDetail
  },
  data () {
    return {
      index: 0,
      list: [
        {
          name: '推荐',
          ref: 'scroller1'
        },
        {
          name: '跟拍',
          ref: 'scroller2'
        },
        {
          name: '视频',
          ref: 'scroller3'
        },
        {
          name: '图文',
          ref: 'scroller4'
        }
      ],
      swiperHeight: '',
      heightStyle: '',
      scroller1: null,
      show9: false
    }
  },
  methods: {
    onItemClick () {},
    seeDetail () {
      // this.show9 = !this.show9
      // this.$router.push({path: '', query: { plan: 'private' }})
    }
  },
  mounted () {
    this.swiperHeight = this.$refs.swiper.$el.offsetHeight + 'px'
    this.heightStyle = 'height:' + this.$refs.swiper.$el.offsetHeight + 'px'
    this.$nextTick(() => {
      setTimeout(() => {
        this.scroller1 = new BScroll(this.$refs.scroller1[0].$el, {
          probeType: 3,
          deceleration: 0.001,
          pullDownRefresh: true,
          bounce: true,
          bounceTime: 400,
          swipeBounceTime: 300,
          swipeTime: 2000
        })
        this.scroller1.on('pullingDown', () => {
          console.log('pullingDown')
        })
      }, 0)
    })
  }
}
</script>

<style scoped lang="less">
@primaryBlue: #03AFFE;
.hello {
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
//list style
.list-container {
  // min-height: 100%;
}
.list-box {
  padding: 0 10px;
  margin-bottom: 5px;
  font-size: .7rem;
  text-align: left;
  background-color: #fff;
  .box-tit {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px 0;
    height: 2.24rem;
  }
  .box-ava {
    height: 100%;
    img {
      display: block;
      height: 100%;
      border-radius: 50%;
    }
  }
  .box-ava {
    flex-grow: 1;
  }
  .box-alia {
    flex-grow: 9;
  }
  .box-close {
    flex-grow: 1;
    height: 100%;
    text-align: right;
  }
  .con-media {
    img {
      display: block;
      width: 100%;
    }
  }
  .con-tag {
    display: inline-block;
    margin: 6px 0;
    padding: 2px 6px;
    font-size: .4rem;
    color: #fff;
    border-radius: 3px;
    background-color: @primaryBlue;
  }
  .comments-area {
    min-height: 3.41rem;
  }
}
</style>
<style lang="less">
// .vux-tab .vux-tab-item.vux-tab-selected {
//     color: #03AFFE !important;
//     border-color: #03AFFE !important;
// }
// .vux-tab-ink-bar {
//   background-color: #03AFFE !important;
// }
</style>

