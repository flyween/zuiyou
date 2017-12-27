<template>
  <div id="app" :class="{ night: nightMode}">
    <transition :name="'vux-pop-' + (noSlide ? 'fade' : direction === 'forward' ? 'in' : 'out')">
      <router-view class="router-view"></router-view>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapState({
      nightMode: state => state.nightMode,
      direction: state => state.direction,
      noSlide: state => state.noSlide
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 640px;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
}
</style>
<style lang="less">
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