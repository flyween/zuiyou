<template>
  <div class="root">
    <nav-bar></nav-bar>
    <app-main></app-main>
  </div>
</template>
<script>
import { NavBar, AppMain } from '../../pages/layout'
export default {
  name: 'root',
  components: {
    NavBar,
    AppMain
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped lang="less">
.root {
  position: relative;
  height: 100%;
  padding-bottom: 1.87rem;  
}
</style>