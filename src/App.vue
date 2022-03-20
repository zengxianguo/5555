<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
import { routes } from '@/router/index'
import { useStore } from 'vuex'
import '@/style/index.scss'
export default {
  name: 'App',
  components: {},
	setup() {
    // 仓库
    let store = useStore()
		store.dispatch('generateRoutes', routes)
	}
}
</script>

<style>
</style>
