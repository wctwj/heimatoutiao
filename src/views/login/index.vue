<template>
  <div class="login">
      <el-card class="login-card">
          <div class="logo">
              <img src="../../assets/img/logo_index.png" alt="">
          </div>
          <el-form ref="loginForm" style="margin-top:20px" :model="loginForm" :rules='loginRules'>
              <el-form-item prop='mobile'>
                  <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
              </el-form-item>
              <el-form-item prop='code'>
                  <el-input style="width:280px" v-model="loginForm.code" placeholder="请输入验证码"></el-input>
                  <el-button style="float:right">发送验证码</el-button>
              </el-form-item>
              <el-form-item prop='check'>
                  <el-checkbox v-model="loginForm.check">我已阅读并同意用户协议和隐私条款</el-checkbox>
              </el-form-item>
              <el-form-item>
                  <el-button style="width:100%" type='primary' @click="login">登录</el-button>
              </el-form-item>
          </el-form>
      </el-card>
  </div>
</template>

<script>
export default {
    data(){
        let validator = function(rule,value,callBack){
            if(value){
                callBack()
            } else{
                callBack(new Error('您必须同意'))
            }
        }
        return{
            loginForm:{
                mobile:'',
                code:'',
                check:false
            },
            loginRules:{
                mobile:[{
                    required:true,
                    message:'手机号不能为空'
                },{
                    pattern:/^1[3456789]\d{9}$/,
                    message:'手机号格式不正确'
                }],
                code:[{
                    required:true,
                    message:'验证码不能为空'
                },{
                    pattern:/^\d{6}$/,
                    message:'验证码必须为6位'
                }],
                check:[{
                    validator
                }]
            }
        }
    },
    methods:{
        login(){
            this.$refs.loginForm.validate((isOk,obj)=>{
                if(isOk){
                    this.$message({type:'success',message:'成功'})
                }else{
                    this.$message({type:'warning',message:'失败'})
                }
            })
        }
    }
}
</script>

<style lang='less' scoped>
    .login{
        background: url('../../assets/img/login_bg.jpg');
        height: 100vh;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        .login-card{
            width: 450px;
            height: 350px;
            .logo{
                text-align: center;
                img{
                    height: 45px;
                }
            }
        }
    }
</style>
