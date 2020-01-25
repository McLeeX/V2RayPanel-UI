<template>
  <div class="layout">
    <Layout>
      <Header>
        <div class="layout-logo-title">
          <div class="layout-logo"/>
          <div class="layout-title">V2RayPanel</div>
        </div>
      </Header>
      <Layout>
        <Content class="login-form-content">
          <Card :bordered="false">
            <router-view/>
          </Card>
        </Content>
      </Layout>
      <Footer class="layout-footer-center">V2RayPanel @<a target="_blank" href="https://github.com/McLeeX">McLeeX</a>
      </Footer>
    </Layout>
  </div>
</template>
<script>
  export default {
    name: 'AuthLayOut'
  }
</script>

<style lang="less" scoped>

  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: 100%;

    .ivu-layout {
      height: 100%;

      .layout-logo-title {
        float: left;

        .layout-logo {
          width: 60px;
          height: 60px;
          float: left;
          background: #5b6270;
          border-radius: 3px;
        }

        .layout-title {
          float: left;
          color: #ffffff;
          font-size: 20px;
          @media screen and (max-width: 800px) {
            display: none;
          }
        }
      }

      .login-form-content {
        background-color: #f5f7f9;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .layout-nav {
    width: 250px;
    margin: 0 20px 0 auto;
  }

  .layout-footer-center {
    text-align: center;
  }
</style>
