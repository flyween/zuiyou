<template>
  <div class="nav-bar">
    <div class="bar-item" @click="routerTo('/')" :class="{on: routerName === ''}"><div><i class="iconfont icon-me"></i></div><div>推荐</div></div>
    <div class="bar-item" @click="routerTo('/follow')" :class="{on: routerName === 'follow'}"><div><i class="iconfont icon-guanzhu"></i></div><div>关注</div></div>
    <div class="bar-item" @click="routerTo('/discover')" :class="{on: routerName === 'discover'}"><div><i class="iconfont icon-paperplane"></i></div><div>发现</div></div>
    <div class="bar-item" @click="routerTo('/message')" :class="{on: routerName === 'message'}"><div><i class="iconfont icon-weibiaoti302"></i></div><div>消息</div></div>
    <div class="bar-item" @click="routerTo('/me')" :class="{on: routerName === 'me'}"><div><i class="iconfont icon-me"></i></div><div>我</div></div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'NavBar',
  data () {
    return {
    }
  },
  methods: {
    routerTo (param) {
      this.$router.push(param)
    }
  },
  computed: {
    ...mapState({
      routerName: state => state.routerName
    })
  },
  mounted () {}
}
</script>
<style scoped lang="less">
.nav-bar {
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 1.87rem;
  align-items: center;
  background: #fff;
}
.bar-item {
  flex: 1;
  font-size: .5rem;
  &.on {
    color: #03AFFE;
  }
  i {
    font-size: 1rem;
  }
}
</style>