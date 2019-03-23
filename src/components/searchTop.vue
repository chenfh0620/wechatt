<template>
  <section class="search-bar border-1px">
      <div class="inner">
        <i class="iconfont icon-search"></i>
        <span>搜索</span>
        <i class="iconfont icon-translation_fill"></i>
      </div>
    </section>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
@import '~@/assets/css/mixin.scss';
.search-bar {
  height: 0.76rem;
  background-color: #efeef4;
  padding: 0.2rem 0.16rem;
  @include border-1px(bottom,#d6d5db);
  .inner {
    position: relative;
    font-size: 14px;
    text-align: center;
    height: 100%;
    background-color: #ffffff;
    line-height: 0.7rem;
    border-radius: 5px;
    border: 1px solid #dcdcde;
    color: #8e8e90;
    .icon-translation_fill {
      position: absolute;
      right: 0.2rem;
      font-size: 22px;
    }
  }
}
</style>
