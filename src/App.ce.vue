<template>
  <DebugBar v-if="debug"></DebugBar>
  <div class="flex flex-col justify-center items-center gap-8">
    <Panel :panel="treemap" :deployed="true"></Panel>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import WrapperEventDispatcher from "./WrapperEventDispatcher.js"
import { mapState, mapWritableState } from 'pinia'
import Store from './stores/store.js'
import Panel from "./components/Panel.vue"
const DebugBar = defineAsyncComponent(() =>
  import("./components/DebugBar.vue")
);

export default {
  computed: {

    ...mapWritableState(Store, ['language']),
    ...mapState(Store, ['strings', 'treemap']),
    debug() {
      return this.$root.debug;
    },
  },

  components: {
    DebugBar,
    Panel
  },
  mounted() {
    this.setPageTitle();
  },
  methods: {
    setPageTitle() {
      (new WrapperEventDispatcher(this.strings.title, null)).dispatch();
    }
  },
  watch: {
    language() {
      this.setPageTitle();
    }
  }
};
</script>
<style>
@import "./index.css";
</style>
