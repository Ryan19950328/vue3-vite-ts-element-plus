<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onMounted } from 'vue'
import { useStore } from 'vuex'
import { debounce } from 'lodash-es'

export default defineComponent({
  setup() {
    const { commit } = useStore()
    const resizeFun = () => {
      const baseWidth = 768
      const clientWidth = document.documentElement.clientWidth
      commit('layout/updateCollapse', clientWidth < baseWidth ? true : false)
    }

    const debounceResize = debounce(resizeFun, 300)

    onMounted(() => {
      // 视图发生变化更新菜单折叠状态
      window.addEventListener('resize', debounceResize)
    })
    onBeforeMount(() => {
      window.removeEventListener('resize', debounceResize)
    })
    return {}
  }
})
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
