<template>
  <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="changeCollapse" />
</template>

<script>
export default {
  data() {
    return {
      collapsed: false
    };
  },
  methods: {
    changeCollapse() {
      this.collapsed = !this.collapsed;
      this.$emit("changeCollapse", this.collapsed);
    }
  }
};
</script>