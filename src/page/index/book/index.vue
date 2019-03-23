<template>
  <div class="book">
    <search-top/>
    <mt-index-list class="list">
      <mt-index-section class="features" index="">
        <mt-cell title="新的朋友">
          <img slot="icon" src="../../../assets/images/icon/new-firends.jpg">
        </mt-cell>
        <mt-cell title="群聊">
          <img slot="icon" src="../../../assets/images/icon/group.jpg">
        </mt-cell>
        <mt-cell title="标签">
          <img slot="icon" src="../../../assets/images/icon/tag.jpg">
        </mt-cell>
        <mt-cell title="公众号">
          <img slot="icon" src="../../../assets/images/icon/public.jpg">
        </mt-cell>
      </mt-index-section>
      <mt-index-section index="A">
        <mt-cell-swipe
          v-for="(item, index) in 5"
          :key="index"
          title="杨可儿"
          :right="[
            {
              content: '备注',
              style: { background: '#a1a1a1', color: '#fff' },
              handler: () => remark(index)
            }
          ]">
            <img slot="icon" src="../../../../static/avatar/avatar2.jpg">
          </mt-cell-swipe>
      </mt-index-section>
      <mt-index-section index="B">
        <mt-cell-swipe
          v-for="(item, index) in 5"
          :key="index"
          title="杨可儿"
          :right="[
            {
              content: '备注',
              style: { background: '#a1a1a1', color: '#fff' },
              handler: () => remark(index)
            }
          ]">
          <img slot="icon" src="../../../../static/avatar/avatar1.jpg">
          </mt-cell-swipe>
      </mt-index-section>
      <mt-index-section index="C">
        <mt-cell-swipe
          v-for="(item, index) in 5"
          :key="index"
          title="杨可儿"
          :right="[
            {
              content: '备注',
              style: { background: '#a1a1a1', color: '#fff' },
              handler: () => remark(index)
            }
          ]">
            <img slot="icon" src="../../../../static/avatar/avatar4.jpg">
          </mt-cell-swipe>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>
<script>
import { IndexList, IndexSection, CellSwipe, Cell } from 'mint-ui';
import SearchTop from '@/components/SearchTop.vue'
export default {
  data() {
    return {
    };
  },
  components: {
    [IndexList.name]: IndexList,
    [IndexSection.name]: IndexSection,
    [CellSwipe.name]: CellSwipe,
    [Cell.name]: Cell,
    SearchTop
  },
  methods: {
    remark(index) {
      console.log(index)
    }
  }
}
</script>
<style lang="scss">
@import '~@/assets/css/mixin.scss';
@import './index.scss';
</style>

