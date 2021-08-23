<template>
  <div class="text-right mt-2.5">
    <el-pagination
      v-if="defaultOptions.isPagination"
      v-model:current-page="defaultOptions.currentPage"
      v-model:page-size="defaultOptions.pageSize"
      v-bind="$attrs"
      background
      :total="total"
      :page-sizes="defaultOptions.pageSizes"
      :layout="defaultOptions.layout"
    />
  </div>
</template>

<script lang="ts">
/**
 * @Description: 分页组件
 * @Author: wjw
 * @Date: 2021-08-19 16:45:56
 */
import { ElPagination } from 'element-plus'
import { defineComponent, reactive, onUpdated } from 'vue'
interface OPTIONS {
  isPagination: boolean
  currentPage: number
  pageSize: number
  pageSizes: number[]
  layout: string
}
export default defineComponent({
  name: 'NfPagination',
  components: {
    ElPagination
  },
  props: {
    total: {
      type: Number,
      default: 10
    }
  },
  setup(props, { attrs }) {
    const defaultOptions = reactive<OPTIONS>({
      isPagination: true,
      currentPage: 1,
      pageSize: 20,
      pageSizes: [10, 20, 30, 40, 50, 100],
      layout: 'total, sizes, prev, pager, next, jumper'
    })

    onUpdated(() => {
      Object.assign(defaultOptions, attrs)
      defaultOptions.currentPage = Number(defaultOptions.currentPage)
      defaultOptions.pageSize = Number(defaultOptions.pageSize)
    })

    return {
      defaultOptions
    }
  }
})
</script>

<style lang="scss" scoped>
.el-pagination {
  &::after,
  &::before {
    display: initial;
    content: '';
  }
}
</style>
