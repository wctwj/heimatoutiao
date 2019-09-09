<template>
  <div>
      <el-container>
        <!-- 左侧 -->
        <el-aside style="width:200px;background-color:#323745;overflow: hidden">
          <layout-aside></layout-aside>
        </el-aside>
        <el-container>
          <!-- 右侧 -->
          <el-header>
            <layout-header></layout-header>
          </el-header>
          <el-main style="margin:0;padding:0">
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
  </div>
</template>

<script>
export default {
}
</script>

<style>

</style>