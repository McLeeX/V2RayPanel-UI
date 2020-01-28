<template>
  <div class="login-form-container">
    <span class="login-form-title">V2RayPanel</span>
    <Form ref="formInline" :model="formInline" :rules="ruleInline">
      <FormItem prop="user">
        <Input type="text" v-model="formInline.user" placeholder="请输入用户名" size="large">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input type="password" v-model="formInline.password" placeholder="请输入密码" size="large">
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem :style="{'margin-top':'30px'}">
        <Button type="primary" size="large" long @click="handleSubmit('formInline')">登录</Button>
      </FormItem>
    </Form>
    <span>没有账户？请<router-link to="/auth/signup">注册</router-link></span>
  </div>
</template>
<script>
  export default {
    name: 'Login',
    data() {
      return {
        formInline: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [
            {required: true, message: '请输入用户名', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            let username = this.formInline.user;
            let password = this.formInline.password;
            this.$api.login(username, password).then(res => {
              let targetRoute;
              if (this.$route.query && this.$route.query.redirect) {
                targetRoute = this.$route.query.redirect
              } else {
                targetRoute = '/welcome'
              }
              this.$router.replace({
                path: targetRoute
              })
            }).catch(res => {
              if (res && res.data && res.data.message) {
                this.$Message.error(res.data.message)
              }
            })
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>

  .login-form-container {
    min-height: 350px;
    width: 350px;
    border: white 1px solid;

    .login-form-title {
      display: block;
      font-size: 24px;
      text-align: center;
      margin: 15px 0 35px 0;
    }
  }
</style>
