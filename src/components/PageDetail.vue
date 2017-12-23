<template>
  <div v-transfer-dom>
    <popup v-model="show" position="right" width="100%" :show-mask="false">
      <div>
        <popup-header title="详情"></popup-header>
      </div>
    </popup>
  </div>
</template>

<script>
import { TransferDom, Popup, PopupHeader } from 'vux'

export default {
  name: 'PageDetail',
  directives: {
    TransferDom
  },
  components: {
    Popup,
    PopupHeader
  },
  props: {
    show: false
  },
  data () {
    return {
    }
  },
  watch: {
    $route (to, from) {
      if (to.query.plan !== 'private') {
        this.show = false
      }
    }
  }
}
</script>

<style scoped>
</style>
