<template>
  <div v-if="!item.hidden">
    <template v-if="!item.children || !item.children.length">
      <app-link v-if="item.meta" :to="item.path">
        <el-menu-item :index="item.path">
          <item :icon="item.meta.icon||(item.meta&&item.meta.icon)" :title="item.meta.title" />
        </el-menu-item>
      </app-link>
    </template>

    <el-submenu v-else ref="subMenu" :index="item.path" popper-append-to-body>
      <template v-slot:title>
        <item v-if="item.meta" :icon="item.meta && item.meta.icon" :title="item.meta.title" />
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="child.path"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script>
// import { computed } from "vue";
// import { useRoute } from 'vue-router'
export default {
  props: {
    item: Object,
    isNest: Boolean,
    basePath: String
  },


  setup() {

    

    return {  }
  }
}
</script>