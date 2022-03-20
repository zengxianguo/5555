<template>
  <div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
			<el-menu
				:default-active="activeMenu"
				:unique-opened="false"
				:collapse-transition="false"
				mode="vertical"
			>
				<ComponentSidebarItem v-for="routes in route" :key="routes.path" :item="routes" :base-path="routes.path" />
			</el-menu>
		</el-scrollbar>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from 'vuex'
import ComponentSidebarItem from './ComponentSidebarItem.vue'
export default {
  components: {
    ComponentSidebarItem
  },

  setup() {

    // 仓库
    let store = useStore()

    const route = computed(() => {
      return store.getters.getCount
    })

    console.log(route.value)

    return { route }
  }
}
</script>

<style lang="scss" scoped>
/deep/.el-scrollbar__view {
  height: 100%;
}
/deep/.el-menu-item {
  height: 56px;
  line-height: 56px;
  font-size: 14px;
  color: #303133;
  padding: 0 20px;
  list-style: none;
  cursor: pointer;
  position: relative;
  -webkit-transition: border-color .3s,background-color .3s,color .3s;
  transition: border-color .3s,background-color .3s,color .3s;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  white-space: nowrap;
}
</style>