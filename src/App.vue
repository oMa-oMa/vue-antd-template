<template>
  <div id="app">
    <a-spin class="spin" :spinning="spinning" :delay="delayTime" tip="Loading...">
      <router-view />
    </a-spin>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['spinning', 'delayTime'])
  }
}
</script>

<style>
.ant-spin-nested-loading > div > .ant-spin {
  max-height: 80vh !important;
}
</style>