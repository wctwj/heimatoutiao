<template>
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">
        评论列表
      </template>
    </bread-crumb>
    <el-table :data="list">
      <el-table-column width="700" label="标题" prop="title"></el-table-column>
      <el-table-column :formatter="test" label="评论状态" prop="comment_status"></el-table-column>
      <el-table-column label="总评论数" prop="total_comment_count"></el-table-column>
      <el-table-column label="粉丝评论数" prop="fans_comment_count"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="obj">
        <el-button type="text" size="small">修改</el-button>
        <el-button @click="openClose(obj.row)" type="text" size="small" :style="{color:obj.row.comment_status?'brown':'blue'}">{{obj.row.comment_status?'关闭评论':'打开评论'}}</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data(){
    return{
      list:[]
    }
  },
  methods:{
    openClose(row){
      let mess = row.comment_status ? '关闭' : '打开'
       this.$confirm(`是否${mess}?`, '提示').then(() => {
          this.$axios({
            method:'put',
            url:'/comments/status',
            params:{article_id: row.id.toString()},
            data:{allow_comment: !row.comment_status}
          }).then(result =>{
            this.getComments()
          })
        })
    },
    test(row,column,cellValue,index){
      return row.comment_status ? '正常' : '关闭'
    },
    getComments(){
      this.$axios({
        url:'/articles',
        params:{response_type:'comment'}
      }).then(result=>{
        this.list = result.data.results
      })
    }
  },
  created(){
    this.getComments()
  }
}
</script>

<style>

</style>
