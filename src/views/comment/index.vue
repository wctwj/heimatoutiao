<template>
  <el-card v-loading='loading'>
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
    <el-row type="flex" justify="center" style="margin:10px 0">
      <el-pagination
      background
      layout="prev, pager, next"
      :total="page.total"
      :current-page="page.page" 
      :page-size="page.pageSize"
      @current-change="changePage">
      </el-pagination>
    </el-row>
    
  </el-card>
</template>

<script>
export default {
  data(){
    return{
      loading:false,
      list:[],
      page:{
        page:1,
        pageSize:10,
        total:0
      }
      
    }
  },
  methods:{
    changePage(newPage){
      this.page.page = newPage
      this.getComments()
    },
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
      this.loading = true
      this.$axios({
        url:'/articles',
        params:{response_type:'comment',page:this.page.page,per_page:this.page.pageSize}
      }).then(result=>{
        this.loading = false
        this.list = result.data.results
        this.page.total = result.data.total_count
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
