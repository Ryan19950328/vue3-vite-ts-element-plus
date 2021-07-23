<template>
  <div class="p-4 text-base">tailwindcss</div>
  <el-button type="primary" :loading="loading" @click="handleBtn">获取数据</el-button>
  <div v-for="(item, index) in list" :key="index">
    <pre>{{ item }}</pre>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { ElMessage } from 'element-plus'
import { getMenus } from '@/api/api'
interface state {
  loading: boolean
  list: any[]
}
export default defineComponent({
  setup() {
    const state = reactive<state>({
      loading: false,
      list: []
    })
    const handleBtn = async () => {
      state.loading = true
      const list = await getMenus()
      state.list = state.list.concat(list)
      state.loading = false
      ElMessage.success('获取成功')
    }

    return {
      ...toRefs(state),
      handleBtn
    }
  }
})
</script>

<style scoped lang="scss">
.title {
  text-align: center;
}
</style>
