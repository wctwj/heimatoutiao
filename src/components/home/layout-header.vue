<template>
  <el-row type='flex' justify='space-between' class="layout-header">
      <el-col class="left" :span=6>
          <i class="el-icon-s-unfold icon"></i>
          <span>江苏传智播客教育科技股份有限公司</span>
      </el-col>
      <el-col :span=3 class="right">
          <img class="head-img" :src="userInfo.photo ? userInfo.photo : defaultImg" alt="">
      <el-dropdown trigger="click" @command='handleMenuItem'>
      <span class="el-dropdown-link">
        {{userInfo.name}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command='accout'>个人信息</el-dropdown-item>
        <el-dropdown-item command='git'>git地址</el-dropdown-item>
        <el-dropdown-item command='lgout'>退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
      </el-col>
  </el-row>
</template>

<script>
export default {
  data(){
    return{
      userInfo:{},
      defaultImg:require('../../assets/img/avatar.jpg')
    }
  },
  methods:{
    getUserInfo(){
      this.$axios({
        url:'/user/profile'
      }).then(result=>{
        this.userInfo = result.data
      })
    },
    handleMenuItem(command){
      if( command === 'accout'){

      }else if( command === 'git'){
        window.location.href = 'https://github.com/wctwj/heimatoutiao'
      }else{
        window.localStorage.clear()
        this.$router.push('/login')
      }
    }
  },
  created(){
    this.getUserInfo()
  }
}
</script>

<style lang='less' scoped>
    .layout-header{
        padding: 8px 0;
        .left{
          .icon{
          font-size: 22px;
          margin-right:5px;
          margin-top: 2px;
        }
        display: flex;
        align-items: center;
        }
        .right{
          display: flex;
          align-items: center;
          .head-img{
            border-radius: 50%;
            margin-right: 5px;
            width: 40px;
            height: 40px;
        }
        }
        
    }
    
</style>