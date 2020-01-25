<template>
  <div class="login-form-container">
    <span class="login-form-title">V2RayPanel</span>
    <Form ref="formInline" :model="formInline" :rules="ruleInline">
      <FormItem prop="email">
        <Input type="text" v-model="formInline.email" placeholder="请输入邮箱" size="large">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
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
      <FormItem prop="rePassword">
        <Input type="password" v-model="formInline.rePassword" placeholder="重新输入密码" size="large">
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem :style="{'margin-top':'30px'}">
        <Button type="primary" size="large" long @click="handleSubmit('formInline')">注册</Button>
      </FormItem>
    </Form>
    <span>已有账户？请<router-link to="/auth/login">登录</router-link></span>
  </div>
</template>
<script>
  export default {
    name: 'Signup',
    data () {
      const userValidator = (rule, value, callback) => {
        callback()
      }
      const passwordValidator = (rule, value, callback) => {
        // callback(new Error('Please enter your password'));
        if (this.formInline.rePassword !== '') {
          // 对第二个密码框单独验证
          this.$refs.formInline.validateField('rePassword')
        }
        callback()
      }
      const rePasswordValidator = (rule, value, callback) => {
        if (value !== this.formInline.password) {
          callback(new Error('两次输入密码不一致'))
        } else {
          callback()
        }
      }
      return {
        formInline: {
          user: '',
          email: '',
          password: '',
          rePassword: ''
        },
        ruleInline: {
          user: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {validator: userValidator, trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {validator: passwordValidator, trigger: 'blur'}
          ],
          rePassword: [
            {required: true, message: '请重新输入密码', trigger: 'blur'},
            {validator: rePasswordValidator, trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            let username = this.formInline.user
            let password = this.formInline.password
            let email = this.formInline.email
            this.$api.signup(username, password, email, 0).then(res => {
              console.log(res)
            }).catch(res => {
              console.log(res)
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
