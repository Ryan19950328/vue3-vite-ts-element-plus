<template>
  <el-container>
    <!-- 侧边菜单栏 -->
    <div class="aside">
      <el-menu :default-active="$route.path">
        <el-menu-item
          v-for="(route, index) in routes"
          :key="index"
          :index="route.path"
          @click="handleMenuItem(route.path)"
        >
          <span>{{ route.title }}</span>
        </el-menu-item>
      </el-menu>
    </div>

    <!-- 主体内容 -->
    <el-main id="nucarf-main">
      <el-scrollbar>
        <!-- 主体部分 -->
        <router-view />
      </el-scrollbar>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import menus from '@/utils/menus'

export default defineComponent({
  setup() {
    const router = useRouter()
    const routes = ref(menus)

    // 点击菜单
    const handleMenuItem = (path: string) => {
      router.push(path)
    }

    return {
      routes,
      handleMenuItem
    }
  }
})
</script>

<style scoped lang="scss">
.el-container {
  height: 100%;
}

.aside {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  box-sizing: border-box;
  background-color: #2e3759;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
}

.el-menu:not(.el-menu--collapse) {
  width: 220px;
}

.el-main {
  height: 100%;
  margin-left: 220px;
  padding: 0;
  overflow: hidden;
  position: relative;
  perspective: none;
  backface-visibility: hidden;

  :deep(.el-scrollbar__view:not(.el-time-spinner__list)) {
    padding: 10px;
  }
}
</style>
