<template>
  <transition :name="'vux-pop-' + (noSlide ? 'fade' : direction === 'forward' ? 'in' : 'out')">
    <router-view class="router-view"></router-view>
  </transition>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AppMain',
  data () {
    return {
      tranStyle: ''
    }
  },
  computed: {
    ...mapState({
      direction: state => state.direction,
      noSlide: state => state.noSlide
    })
  },
  mounted () {
    // if (this.$store.state.noSlide) {
    //   this.tranStyle = 'vux-pop-fade'
    // } else {
    //   this.tranStyle = this.$store.state.direction === 'forwrad' ? 'vux-pop-in' : 'vux-pop-out'
    // }
    // console.log(this.direction === 'forward')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.router-view {
  width: 100%;
}
.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active,
.vux-pop-fade-enter-active,
.vux-pop-fade-leave-active {
  will-change: transform;
  transition: all 300ms;
  height: 100%;
  position: absolute;
  top: 0;
  backface-visibility: hidden;
  perspective: 1000;
}
.vux-pop-fade-enter {
  opacity: 0;
}
.vux-pop-fade-leave-active {
  opacity: 0;
}
.vux-pop-out-enter {
  transform: translate3d(-100%, 0, 0);
}
.vux-pop-out-leave-active {
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-enter {
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-leave-active {
  transform: translate3d(-100%, 0, 0);
}
</style>
