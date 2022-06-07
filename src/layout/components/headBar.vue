<template>
  <div id="header-bar">
    <a-icon
      class="trigger"
      :type="collapsed ? 'menu-unfold' : 'menu-fold'"
      @click="changeCollapse"
    />
    <a-popover placement="bottomRight">
      <template slot="content">
        <a-menu
          style="border-right: 0px;"
          v-for="item in btn"
          :key="item.name"
        >
          <a-menu-item @click="handleClick(item.func)" :key="item.name">{{ item.name }}</a-menu-item>
        </a-menu>
      </template>
      <a-avatar class="avatar" shape="square" :size="50" :src="avatar" />
    </a-popover>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      collapsed: false,
      avatar: "../assets/images/404.png",
      btn: [
        {
          name: "home",
          func: "toHome"
        },
        {
          name: "gitHub",
          func: "toGitHub"
        },
        {
          name: "logout",
          func: "toLogout"
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["token"])
  },
  methods: {
    ...mapActions({
      logout: "user/logout"
    }),
    changeCollapse() {
      this.collapsed = !this.collapsed;
      this.$emit("changeCollapse", this.collapsed);
    },
    handleClick(func) {
      switch (func) {
        case "toHome":
          this.toHome();
          break;
        case "toGithub":
          this.toGitHub();
          break;
        case "toLogout":
          this.toLogout();
          break;
      }
    },
    toGitHub() {
      location.href = "https://github.com";
    },
    toHome() {
      this.$router.push({ path: "/" });
    },
    toLogout() {
      this.logout().then(() => {
        this.$router.push({ path: `/login?redirect=${this.$route.fullPath}` });
      });
    }
  }
};
</script>