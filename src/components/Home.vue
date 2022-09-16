<template>
  <div>
    <el-button type="info" @click="logout">退出</el-button>
  </div>
</template>

<script>
export default {
    name:'HomePart',
    methods:{
      // 退出
      logout(){
        sessionStorage.clear('token')
        this.$router.push('/login')

      }
    }


}
</script>

<style>

</style>