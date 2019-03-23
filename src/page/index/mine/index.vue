<template>
  <div class="mine">
    <mt-cell 
      class="top" 
      is-link>
      <img class="avatar" slot="icon" src="../../../../static/avatar/avatar1.jpg" alt="">
      <div class="info">
        <div class="title">chenfh</div>
        <div class="id">微信号：123456</div>
      </div>
      <img class="qrcode" src="../../../../static/images/qrcode.jpg" alt="">
    </mt-cell>
    <section class="property">
      <mt-cell 
        title="钱包"
        is-link>
        <img slot="icon" src="../../../assets/images/icon/wallet.jpg" alt="">
      </mt-cell>
    </section>
    <section class="collection">
      <mt-cell 
        title="收藏"
        is-link>
        <img slot="icon" src="../../../assets/images/icon/collection.jpg" alt="">
      </mt-cell>
      <mt-cell 
        title="相册"
        is-link>
        <img slot="icon" src="../../../assets/images/icon/album.jpg" alt="">
      </mt-cell>
      <mt-cell 
        title="卡包"
        is-link>
        <img slot="icon" src="../../../assets/images/icon/cardPackage.jpg" alt="">
      </mt-cell>
      <mt-cell 
        title="表情"
        is-link>
        <img slot="icon" src="../../../assets/images/icon/emoji.jpg" alt="">
      </mt-cell>
    </section>
    <section class="setting">
      <mt-cell 
        title="设置"
        is-link>
        <img slot="icon" src="../../../assets/images/icon/setting.jpg" alt="">
      </mt-cell>
    </section>
  </div>
</template>
<script>
import { Cell } from 'mint-ui';
export default {
  data() {
    return {}
  },
  components: {
    [Cell.name]: Cell
  }
}
</script>
<style lang="scss">
@import '~@/assets/css/mixin.scss';
@import './index.scss';
</style>

