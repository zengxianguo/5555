<template>
  <section class="app-min">
    <transition name="fade-transform" mode="out-in">
				<router-view :key="key" />
		</transition>
  </section>
</template>

<script>
import { computed } from "vue";
import { useRoute } from 'vue-router'
export default {
  setup() {
    // 只读的计算属性
    const key = computed(() => useRoute().path);
    return { key }
  }
}
</script>

<style>

</style>