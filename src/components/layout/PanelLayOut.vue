<template>
  <div class="layout">
    <Layout>
      <Header>
        <div class="layout-logo-title">
          <div class="layout-logo"/>
          <div class="layout-title">V2RayPanel</div>
        </div>
        <Menu class="header-menu" mode="horizontal" theme="dark" active-name="1" @on-select="click">
          <div class="layout-nav">
            <MenuItem name="1">
              <Dropdown>
                <div>
                  <Icon type="md-contact"></Icon>
                  {{currentUserName}}
                </div>
                <DropdownMenu slot="list">
                  <DropdownItem @click.native="$router.push('/me/details')">账户详情</DropdownItem>
                  <DropdownItem @click.native="$router.push('/me/change-password')">修改密码</DropdownItem>
                  <DropdownItem @click.native="$router.push('/me/change-email')">变更邮箱</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </MenuItem>
            <MenuItem name="logout">
              <Icon type="md-log-out"></Icon>
              退出登录
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout :style="{padding: '0 50px','min-width': '800px'}">
        <Breadcrumb :style="{margin: '16px 0'}">
          <BreadcrumbItem v-for="(item,index) in breadcrumbs" :key="index" :to="item.path">
            {{item.title}}
          </BreadcrumbItem>
        </Breadcrumb>
        <Content :style="{padding: '24px 0', minHeight: '280px', background: '#fff'}">
          <Layout>
            <Sider hide-trigger class="layout-sider">
              <Menu ref="left-menu" :active-name="activeMenu" theme="light" width="auto" :open-names="openMenu">
                <div v-for="submenu in menus" :key="submenu.name">
                  <Submenu v-if="submenu.children" :name="submenu.name">
                    <template slot="title">
                      <Icon v-if="submenu.icon" :type="submenu.icon"></Icon>
                      {{submenu.title}}
                    </template>
                    <MenuItem v-for="children in submenu.children" :key="children.name" :name="children.name"
                              @click.native="selectMenu(children)">
                      <Icon v-if="children.icon" :type="children.icon"></Icon>
                      {{children.title}}
                    </MenuItem>
                  </Submenu>
                  <MenuItem v-else :name="submenu.name" @click.native="selectMenu(submenu)">
                    <Icon v-if="submenu.icon" :type="submenu.icon"></Icon>
                    {{submenu.title}}
                  </MenuItem>
                </div>
              </Menu>
            </Sider>
            <Content class="layout-content">
              <router-view/>
            </Content>
          </Layout>
        </Content>
      </Layout>
      <Footer class="layout-footer-center">V2RayPanel @
        <a target="_blank" href="https://github.com/McLeeX">McLeeX</a>
      </Footer>
    </Layout>
  </div>
</template>
<script>
  import {mapState} from "vuex";

  export default {
    name: 'PanelLayOut',
    data() {
      return {
        currentUserName: '',
        currentUserId: '',
        breadcrumbs: [],
        menus: [{
          name: 'home',
          icon: 'md-home',
          title: '欢迎使用',
          to: '/welcome'
        }, {
          name: 'me',
          icon: 'md-contact',
          title: '我的账户',
          children: [{
            name: 'meDetails',
            title: '账户详情',
            to: '/me/details'
          }, {
            name: 'meChangePassword',
            title: '修改密码',
            to: '/me/change-password'
          }, {
            name: 'meChangeEmail',
            title: '变更邮箱',
            to: '/me/change-email'
          }]
        }]
      }
    },
    methods: {
      click(method) {
        let theMethod = this[method];
        if (theMethod && typeof theMethod === "function") {
          theMethod();
        }
      },
      logout() {
        this.$api.logout().finally(res => {
          this.$router.replace({
            name: "Login"
          })
        })
      },
      updateBreadcrumbs(route) {
        let breadcrumbs = [];
        let routeMatched = route ? route.matched : this.$route.matched;
        for (let i = 0; i < routeMatched.length; i++) {
          let route = routeMatched[i];
          let meta = route.meta;
          if (meta && meta.breadcrumb) {
            breadcrumbs.push({
              path: i === routeMatched.length - 1 ? null : route.path,
              title: meta.breadcrumb.title
            })
          }
        }
        this.breadcrumbs = breadcrumbs;
      },
      selectMenu(menu) {
        if (menu.to) {
          this.$router.push(menu.to);
        }
      }
    },
    computed: {
      ...mapState(['activeMenu', 'openMenu'])
    },
    watch: {
      openMenu(value) {
        this.$nextTick(() => {
          this.$refs['left-menu'].updateOpened();
        });
      }
    },
    created() {
      this.updateBreadcrumbs();
      this.$api.getMyAuthentication().then(res => {
        let user = res.data.data;
        this.currentUserId = user.id;
        this.currentUserName = user.name;
      });
      this.$on("active-menu", (value) => {
        this.activeMenu = value;
      });
      this.$on("open-menu", (value) => {
        this.openMenu = value;
      });
    },
    beforeRouteUpdate(to, from, next) {
      this.updateBreadcrumbs(to);
      next();
    },
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
