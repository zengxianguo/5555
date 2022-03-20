<template>
	<div class="app-wrapper">
		<!-- 顶部内容 -->
		<ComponentHeader class="header-container"/>

		<!-- 菜单 -->
		<ComponentSidebar class="sidebar-container" />

		<!-- 中间内容 -->
		<div class="main-container">
			<ComponentAppMain />
		</div>

		<!-- 底部内容 -->
		<!-- <ComponentFooter /> -->
	</div>
</template>

<script>
import { reactive } from "vue";
import ComponentHeader from '@/layout/components/ComponentHeader'
import ComponentSidebar from '@/layout/components/ComponentSidebar.vue'
import ComponentAppMain from '@/layout/components/ComponentAppMain.vue'
// import ComponentFooter from '@/layout/components/ComponentFooter.vue'
import './layoutIndex.scss'
export default {
  components: {
    ComponentHeader,
    ComponentSidebar,
    ComponentAppMain
    // ComponentFooter
  },

  setup() {
    let state = reactive({
      count: 2
    })

    return { state }
  }
}
</script>

<style>

</style>