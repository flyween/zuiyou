<template>
  <div class="scroller" ref="scroller">
    <div>
      <div class="info-area">
        <img src="" class="info-bg">
        <div class="info-file">
          <div class="info-box">
            <div class="ava-box">
              <img src="" class="">
            </div>
            <div class="info-lines">
              <div class="name-lines">
                叫什么呢
              </div>
              <div>
                这个人很懒，什么都没有写~
              </div>
            </div>
          </div>
        </div>
        <div class="info-data">
          <div class="data-item">
            <div>2</div>
            <div class="grey">帖子</div>
          </div>
          <div class="data-item">
            <div>4444</div>
            <div class="grey">获赞</div>
          </div>
          <div class="data-item">
            <div>0</div>
            <div class="grey">关注</div>
          </div>
          <div class="data-item">
            <div>0</div>
            <div class="grey">粉丝</div>
          </div>
        </div>
      </div>
      <div class="pl15 bg-white mt10">
        <div class="cat-line">
          <div class="cat-left">
            <div class="cat-item"><i class="iconfont icon-Good green"></i></div>
            <div class="cat-item">审帖专区</div>
          </div>
          <div class="cat-right">
          <div class="cat-item">11</div>
          <div class="cat-item"><i class="iconfont icon-right"></i></div>
          </div>
        </div>
        <div class="cat-line">
          <div class="cat-left">
            <div class="cat-item"><i class="iconfont icon-Good yellow"></i></div>
            <div class="cat-item">我的跟拍</div>
          </div>
          <div class="cat-right">
          <div class="cat-item">11</div>
          <div class="cat-item"><i class="iconfont icon-right"></i></div>
          </div>
        </div>
        <div class="cat-line">
          <div class="cat-left">
            <div class="cat-item"><i class="iconfont icon-tiezi green"></i></div>
            <div class="cat-item">我发表的帖子</div>
          </div>
          <div class="cat-right">
          <div class="cat-item">11</div>
          <div class="cat-item"><i class="iconfont icon-right"></i></div>
          </div>
        </div>
        <div class="cat-line" @click="routerTo('/comments')">
          <div class="cat-left">
            <div class="cat-item"><i class="iconfont icon-msg blue"></i></div>
            <div class="cat-item">我的评论</div>
          </div>
          <div class="cat-right">
          <div class="cat-item">11</div>
          <div class="cat-item"><i class="iconfont icon-right"></i></div>
          </div>
        </div>
        <div class="cat-line" @click="routerTo('/comments')">
          <div class="cat-left">
            <div class="cat-item"><i class="iconfont icon-shoucangjia yellow"></i></div>
            <div class="cat-item">我的收藏夹</div>
          </div>
          <div class="cat-right">
          <div class="cat-item">11</div>
          <div class="cat-item"><i class="iconfont icon-right"></i></div>
          </div>
        </div>
        <div class="cat-line" @click="routerTo('/comments')">
          <div class="cat-left">
            <div class="cat-item"><i class="iconfont icon-top blue"></i></div>
            <div class="cat-item">我顶过的帖子</div>
          </div>
          <div class="cat-right">
          <div class="cat-item">11</div>
          <div class="cat-item"><i class="iconfont icon-right"></i></div>
          </div>
        </div>
        <div class="cat-line" @click="routerTo('/comments')">
          <div class="cat-left">
            <div class="cat-item"><i class="iconfont icon-eye yellow"></i></div>
            <div class="cat-item">浏览历史</div>
          </div>
          <div class="cat-right">
          <div class="cat-item">11</div>
          <div class="cat-item"><i class="iconfont icon-right"></i></div>
          </div>
        </div>
      </div>
      <div class="pl15 bg-white mt10">
        <div class="cat-line">
          <div class="cat-left">
            <div class="cat-item"><i class="iconfont icon-moon_n yellow"></i></div>
            <div class="cat-item">夜间模式</div>
          </div>
          <div class="cat-right">
          <!-- <div class="cat-item">11</div>
          <div class="cat-item"><i class="iconfont icon-right"></i></div> -->
            <group>
              <x-switch title="title" v-model="nightMode" @on-change="changeTheme"></x-switch>
            </group>
          </div>
        </div>
        <div class="cat-line">
          <div class="cat-left">
            <div class="cat-item"><i class="iconfont icon-guide blue"></i></div>
            <div class="cat-item">推荐给好友</div>
          </div>
          <div class="cat-right">
          <div class="cat-item">11</div>
          <div class="cat-item"><i class="iconfont icon-right"></i></div>
          </div>
        </div>
        <div class="cat-line">
          <div class="cat-left">
            <div class="cat-item"><i class="iconfont icon-flag green"></i></div>
            <div class="cat-item">反馈建议</div>
          </div>
          <div class="cat-right">
          <div class="cat-item">11</div>
          <div class="cat-item"><i class="iconfont icon-right"></i></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { XSwitch, Group } from 'vux'
import BScroll from 'better-scroll'
import store from '@/store'

export default {
  name: 'Me',
  components: {
    XSwitch,
    Group
  },
  data () {
    return {
      mainScroll: null,
      nightMode: false
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
      this.mainScroll.on('scroll', (e) => {
        console.log(e)
      })
    },
    routerTo (param) {
      this.$router.push(param)
    },
    changeTheme () {
      // this.$emit('nightMode', this.nightMode)
      store.commit('TOGGLE_NIGHT', {nightMode: this.nightMode})
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
  @bgc: #fff;
  @grey3: #C1C7D1;
  .scroller {
    height: 100%;
    text-align: left;
    overflow-y: auto;
  }
  .info-bg {
    display: block;
    height: 7.33rem;
    background-color: #000;
  }
  .info-file {
    position: relative;
    padding-top: 1.74rem;
    background-color: #fff;
  }
  .info-box {
    position: absolute;
    top: -1.73rem;
    left: 0;
    padding-left: 20%;
    width: 100%;
    height: 3.47rem;
    line-height: 1.74rem;
    color: #000;
    font-size: .6rem;
  }
  .ava-box {
    position: absolute;
    top: 0.5rem;
    left: 3%;
    width: 2.5rem;
    height: 2.5rem;
    background-color: #fff;
    border-radius: 50%;
  }
  .info-lines {
  }
  .name-lines {
    color: #fff;
    font-size: 0.8rem;
  }
  .info-data {
    display: flex;
    padding: 5px 0 10px;
    text-align: center;
    font-size: 0.6rem;
    background-color: #fff;
  }
  .data-item {
    position: relative;
    flex: 1;
    &:after {
      display: block;
      content: '';
      position: absolute;
      right: 0;
      top: 0.3rem;
      width: 1px;
      height: 0.8rem;
      background-color: #EBEDEB;
    }
    .grey {
      color: #ABACAB;
    }
  }
  .pl15 {
    padding-left: 15px;
    line-height: 2.14rem;
  }
  .mt10 {
    margin-top: 10px;
  }
  .bg-white {
    background-color: #fff;
  }
  .cat-line {
    display: flex;
    padding-right: 0.51rem;
    justify-content: space-between;
    font-size: .7rem;
    color: #878887;
    border-bottom: 1px solid #F9FAFC;
  }
  .cat-left {
    display: flex;
    justify-content: flex-start;
  }
  .cat-right {
    display: flex;
    justify-content: flex-end;
    color: @grey3;
  }
  .iconfont {
    margin-right: 10px;
    &.yellow {
      color: #F8B92B;
    }
    &.green {
      color: #83DD5E;
    }
    &.blue {
      color: #5BC0FE;
    }
  }
</style>
<style lang="less">
  .cat-right {
    .weui-cells {
      margin-top: 0;
    }
  }
  .weui-switch:checked {
    // border-color: 
  }
</style>

