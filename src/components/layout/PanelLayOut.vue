<template>
  <div class="layout">
    <Layout>
      <Header>
        <div class="layout-logo-title">
          <div class="layout-logo"/>
          <div class="layout-title">V2RayPanel</div>
        </div>
        <Menu class="header-menu" mode="horizontal" theme="dark" active-name="1">
          <div class="layout-nav">
            <MenuItem name="1">
              <Dropdown>
                <div>
                  <Icon type="md-contact"></Icon>
                  McLeeX
                </div>
                <DropdownMenu slot="list">
                  <DropdownItem>账户详情</DropdownItem>
                  <DropdownItem>修改密码</DropdownItem>
                  <DropdownItem>变更邮箱</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </MenuItem>
            <MenuItem name="2">
              <Icon type="md-log-out"></Icon>
              退出登录
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout :style="{padding: '0 50px'}">
        <Breadcrumb :style="{margin: '16px 0'}">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem>Layout</BreadcrumbItem>
        </Breadcrumb>
        <Content :style="{padding: '24px 0', minHeight: '280px', background: '#fff'}">
          <Layout>
            <Sider hide-trigger class="layout-sider">
              <Menu :active-name="activeMenu" theme="light" width="auto" :open-names="openMenus">
                <Submenu v-for="submenu in menus" :key="submenu.name" :name="submenu.name">
                  <template slot="title">
                    <Icon :type="submenu.icon"></Icon>
                    {{submenu.title}}
                  </template>
                  <MenuItem v-for="children in submenu.children" :key="children.name" :name="children.name">
                    {{children.title}}
                  </MenuItem>
                </Submenu>
              </Menu>
            </Sider>
            <Content class="layout-content">
              <router-view/>
            </Content>
          </Layout>
        </Content>
      </Layout>
      <Footer class="layout-footer-center">V2RayPanel @<a target="_blank" href="https://github.com/McLeeX">McLeeX</a>
      </Footer>
    </Layout>
  </div>
</template>
<script>
  export default {
    name: 'PanelLayOut',
    data () {
      return {
        activeMenu: 'test1',
        openMenus: ['test'],
        menus: [{
          name: 'test',
          icon: 'ios-search',
          title: '测试',
          children: [{
            name: 'test1',
            title: '测试',
          }]
        }]
      }
    }
  }
</script>
<style lang="less" scoped>
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;

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

    .header-menu {
      width: 75%;
      float: right;
    }

    .layout-sider {
      background: #ffffff;
    }

    .layout-sider:before {
      content: "";
      display: block;
      width: 1px;
      background: #d7dde4;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
    }

    .layout-content {
      padding: 24px;
      background: #ffffff;
      min-height: 725px;
      position: relative;
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
