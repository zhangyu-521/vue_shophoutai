<template>
  <el-container>
    <!-- 头部区域 -->
    <el-header>
      <div style="">
        <img style="height:8vh"  src="../assets/logo.png" alt="">
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button></el-header
    >
    <!-- 主体区域 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '64px' :'200px'">
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <!-- 侧边栏菜单区域 -->
        <el-menu
        :default-active="activePath"
      router
      :collapse-transition="false"
      unique-opened
      :collapse="isCollapse"
      background-color="#333744"
      text-color="#fff"
      active-text-color="#409EFF">
      <!-- 一级菜单 -->
      <!-- index控制点击后的展开，index只接收字符串  -->
      <el-submenu :index="item.id+''" v-for="item in menuList" :key="item.id">
        <!-- 一级菜单模板区域 -->
        <template slot="title">
          <!-- 图标 -->
          <i class="iconfont" :class="iconObj[item.id]"></i>
          <!-- 文本 -->
          <span>{{item.authName}}</span>
        </template>
        <!-- 二级菜单 -->
        <el-menu-item @click="saveNavState('/'+item2.path)" :index="'/'+item2.path" v-for="item2 in item.children" :key="item2.id">
          <template slot="title">
          <!-- 图标 -->
          <i class="el-icon-menu"></i>
          <!-- 文本 -->
          <span>{{item2.authName}}</span>
        </template></el-menu-item>
       
      </el-submenu>
     
    </el-menu>
  
      </el-aside>
      <!-- 右侧内容布局 -->
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "HomePart",
  data(){
    return {
      // 左侧菜单数据
      menuList:[],
      iconObj:{
        '125':'el-icon-user-solid',
        '103':'el-icon-lock',
        '101':'el-icon-s-shop',
        '102':'el-icon-date',
        '145':'el-icon-s-data'
      },
      // 是否折叠
      isCollapse:false,
      // 激活链接地址
      activePath:''

    }

  },
  created(){
   this.getMenuList()
   this.activePath = sessionStorage.getItem('activePath')
  },
  methods: {
    // 退出
    logout() {
      sessionStorage.clear("token");
      this.$router.push("/login");
    },
    // 获取所有菜单
   async getMenuList(){
    const {data:res} =  await this.$http.get('menus')
    if(res.meta.status !== 200) return this.$message.error(res.meta.msg)
    this.menuList = res.data
    console.log(res);
    },
  // 控制侧边栏得展开与折叠
    toggleCollapse(){
      this.isCollapse = !this.isCollapse

    },
    // 获取路径名在会话中存储，保证连接的激活状态
    saveNavState(activePath){
      sessionStorage.setItem('activePath',activePath)
      this.activePath = activePath
    }
  },
};
</script>

<style scoped lang="less">
.el-container {
  height: 100%;
}
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
  div {
    display: flex;
    align-items: center;
    span {
      margin-left: 20px;
    }
  }
}

.el-aside {
  background-color: #333744;
  .el-menu{
    border: 0;
  }
}

.el-main {
  background-color: #eaedf1;
}

.iconfont {
  margin-right: 10px;
}
.toggle-button{
  background-color: #4A5064;
  font-size: 10px;
  line-height: 24px;
  color:#fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
  
  }
</style>