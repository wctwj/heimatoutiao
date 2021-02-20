<template>
  <div>
    <div class="header">
      <div class="p-box">
        <p>李子桉的个人网站</p>
        <p>Welcome To Li Zian's Personal Website</p>
      </div>
      <div class="wx">
        <p class="xuanfu">
          悬浮此处扫描二维码添加我为好友~！
          <img src="../../assets/img/pwx.png" alt="" class="pwx">
          <img src="../../assets/img/jiantou.png" alt="" class="jiantou">
          <span>扫他！扫他！！</span>
        </p>
        <img src="../../assets/img/wx.jpg" alt="">
        <p>llizian</p>
      </div>
    </div>
    <div class="wenzhang-box">
      <div class="title">优秀文章展示！</div>
      <a target="_blank" href="https://juejin.cn/post/6931204993395621895"><div class="item">今天聊：前端工程师的晋升逻辑到底是什么</div></a>
      <a target="_blank" href="https://juejin.cn/post/6930419481835470861"><div class="item">2021前端学习路径书单—自我成长之路</div></a>
      <a target="_blank" href="https://juejin.cn/post/6927481938831736839"><div class="item">我从 Vuejs 中学到了什么</div></a>
      <a target="_blank" href="https://juejin.cn/post/6930412294149472269"><div class="item">十分钟教你用svg做出精美的动画！</div></a>
      <a target="_blank" href="https://juejin.cn/post/6930897845369356295"><div class="item">化身面试官出30+Vue面试题，超级干货（附答案）｜牛气冲天新年征文</div></a>
      <a target="_blank" href="https://juejin.cn/post/6930428551091109896"><div class="item">你真的了解ES6中的函数特性么？</div></a>
    </div>
    <div class="shengyu-box">
      <p>剩余模块待开发中！。。。</p>
    </div>
    <div class="dongtu">
      <img src="https://nie.res.netease.com/r/pic/20180913/e8985f58-81c3-4366-8fef-791423c01b3e.gif" alt="">
    </div>
  </div>
</template>

<script>
import '../../style/index.less'
export default {
  data () {
    return {
    }
  }
}
</script>
<style>
body {
  background: url('../../assets/img/bg.jpg') repeat;
}
</style>
<style lang="less" scoped>
  .header {
    width: 100%;
    height: 100px;
    background-color: #eee;
    box-shadow: 0px 5px 10px #ccc;
    padding-top: 10px;
    box-sizing: border-box;
    position: fixed;
    .p-box {
      float: left;
      width: 50%;
    }
    p {
      padding-left: 100px;
      font-size: 24px;
      margin-bottom: 5px;
    }
    .wx {
      float: right;
      padding-top: 10px;
      margin-right: 100px;
      position: relative;
      img {
        width: 50px;
        height: 50px;
        float: left;
      }
      p {
        float: left;
        padding-left: 30px;
        margin-top: 20px;
      }
      .xuanfu {
        background-color: #bbb;
        color: #fff;
        margin-right: 30px;
        font-size: 16px;
        // margin-top: 25px;
        padding: 5px 10px;
        cursor: pointer;
      }
      .xuanfu:hover .pwx,
      .xuanfu:hover .jiantou,
      .xuanfu:hover span {
        display: block;
      }
      .pwx {
        position: absolute;
        bottom: -110px;
        left: 100px;
        width: 100px;
        height: 100px;
        display: none;
      }
      .jiantou {
        position: absolute;
        bottom: -150px;
        left: 200px;
        transform: rotate(40deg);
        display: none;
      }
      span {
        position: absolute;
        bottom: -150px;
        left: 270px;
        color: red;
        display: none;
      }
    }
  }

  .wenzhang-box {
    width:60%;
    height: 1000px;
    margin: 0 auto;
    background-color: #fff4db;
    padding-top: 200px;
    box-sizing: border-box;
    padding-right: 100px;
    .title {
      font-size: 24px;
      margin-left: 50px;
      font-weight: bold;
      margin-bottom: 80px;
    }
    .item {
      font-size: 20px;
      margin-left: 100px;
      margin-bottom: 40px;
      padding-bottom: 40px;
      border-bottom: 1px solid #ccc;
    }
  }
  .shengyu-box {
    background-color: #fff4db;
    padding-top: 100px;
    box-sizing: border-box;
    height: 200px;
    width: 60%;
    margin: 0 auto;
    margin-top: 50px;
    p {
      text-align: center;
      color: #aaa;
    }
  }
  .dongtu {
    position: fixed;
    bottom: 0;
    left: 0;
  }
</style>
