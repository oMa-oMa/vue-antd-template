<template>
  <div id="login">
    <a-card title="欢迎登录" class="card-style" :bordered="false">
      <a-form
        id="components-form-demo-normal-login"
        :form="form"
        class="login-form"
        @submit="handleSubmit"
      >
        <a-form-item>
          <a-input
            v-decorator="[
          'username',
          { rules: [{ required: true, message: 'Please input your username!' }] },
        ]"
            placeholder="Username"
          >
            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] },
        ]"
            type="password"
            placeholder="Password"
          >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-checkbox
            v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
        ]"
          >Remember me</a-checkbox>
          <a-button type="primary" html-type="submit" :loading="loading" class="login-form-button">Log in</a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script>
import {  mapActions } from 'vuex'
export default {
  data() {
    return {
      form: this.$form.createForm(this, { name: "normal_login" }),
      loading: false
    }
  },
  mounted() {
    this.form.setFieldsValue({
      username: 'Admin',
      password: '123456'
    })
  },
  methods: {
    ...mapActions({
      login: 'user/login'
    }),
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.loading = true;
          this.login(values).then(async() => {
            await this.$router.push({path: this.redirect || '/'});
            this.loading = false;
          }).catch(err => {
            console.log(err);
            this.loading = false;
          })
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
#login {
  background: #333333;
  height: 100vh;
  position: relative;
  .card-style {
    width: 600px;
    background: #ffffff;
    position: absolute;
    top: 400px;
    left: 0;
    right: 0;
    margin: auto;
  }

  #components-form-demo-normal-login .login-form {
    max-width: 300px;
  }
  #components-form-demo-normal-login .login-form-forgot {
    float: right;
  }
  #components-form-demo-normal-login .login-form-button {
    width: 100%;
  }
}
</style>
