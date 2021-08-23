<template>
  <el-scrollbar class="menu-container">
    <el-menu :collapse="isCollapse" :default-active="activeMenu" unique-opened>
      <el-menu-item index="/home" @click="handleSelect({ path: '/home' })">
        <i class="iconfont icon-xshouye"></i>
        <template #title>首页</template>
      </el-menu-item>
      <!-- 这里不能用div，否则折叠时文字不会折叠起来 -->
      <template v-for="item in vueMenus" :key="item.id">
        <el-menu-item
          v-if="!item.children && defaultMenus[item.id]"
          :index="defaultMenus[item.id].path"
          @click="handleSelect(defaultMenus[item.id])"
        >
          <i class="iconfont" :class="defaultMenus[item.id].icon"></i>
          <template #title>{{ item.name }}</template>
        </el-menu-item>
        <el-submenu
          v-if="item.children && defaultMenus[item.id]"
          class="nf-submenu"
          :index="item.name"
        >
          <template #title>
            <i class="iconfont" :class="defaultMenus[item.id].icon"></i>
            <span>{{ item.name }}</span>
          </template>
          <template v-for="child in item.children" :key="child.id">
            <template v-if="!child.children && defaultMenus[item.id].children[child.id]">
              <el-menu-item
                :index="defaultMenus[item.id].children[child.id].path"
                @click="handleSelect(defaultMenus[item.id].children[child.id])"
              >
                <template #title>{{ child.name }}</template>
              </el-menu-item>
            </template>
            <el-submenu v-if="child.children" :index="child.name">
              <template #title>{{ child.name }}</template>
              <template v-for="grandchild in child.children" :key="grandchild.id">
                <el-menu-item
                  v-if="defaultMenus[item.id].children[child.id].children[grandchild.id]"
                  :index="defaultMenus[item.id].children[child.id].children[grandchild.id].path"
                  @click="
                    handleSelect(defaultMenus[item.id].children[child.id].children[grandchild.id])
                  "
                >
                  <template #title>{{ grandchild.name }}</template>
                </el-menu-item>
              </template>
            </el-submenu>
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { ElScrollbar, ElMenu, ElSubmenu, ElMenuItem } from 'element-plus'
import menus from '@/utils/menus'
import { getMenus } from '@/api/index'

export default defineComponent({
  components: {
    ElScrollbar,
    ElMenu,
    ElSubmenu,
    ElMenuItem
  },
  props: {
    activeMenu: {
      type: String,
      default: '/'
    }
  },
  setup() {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()

    const menu = reactive({
      vueMenus: <any>[]
    })

    // 获取菜单
    const getMenuList = () => {
      getMenus().then((res: any) => {
        menu.vueMenus = res
      })
    }
    getMenuList()

    // 点击菜单
    const handleSelect = (item) => {
      if (item.path === route.path) return
      router.push(item.path)
    }
    return {
      ...toRefs(menu),
      defaultMenus: menus,
      isCollapse: computed(() => store.state.layout.isCollapse),
      handleSelect
    }
  }
})
</script>

<style lang="scss" scoped>
.menu-container {
  position: fixed;
  left: 0;
  top: 50px;
  bottom: 0;
  z-index: 1500;
  box-sizing: border-box;
  background-color: #2e3759;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
}

.el-menu {
  border-right: 0;
  padding-bottom: 60px;

  &:not(.el-menu--collapse) {
    width: 220px;
  }

  .iconfont {
    margin-right: 18px;
    text-align: center;
    font-size: 16px;
    vertical-align: middle;
  }
}

.rightMenuBox {
  padding: 0 10px;
  text-align: center;

  .rightMenu {
    cursor: pointer;
  }
}
</style>
