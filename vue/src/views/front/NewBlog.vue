<template>
<div style="width: 50%;margin: 5px auto">
  <div class="card">
    <div style=" font-weight: bold;font-size: 24px;margin-bottom: 50px; color: white;text-align: center">发表新帖子</div>
    <el-form :model="form" label-width="100px" style="padding-right: 50px" :rules="rules" ref="formRef">
      <el-form-item  prop="title"  class="bai">
        <span slot="label">
      	  <span style="color: white;font-weight: bold;">标题</span>
        </span>
        <el-input v-model="form.title" placeholder="标题"></el-input>
      </el-form-item>
      <el-form-item  prop="descr">
        <span slot="label">
      	  <span style="color: white;font-weight: bold;">简介</span>
        </span>
        <el-input type="textarea" v-model="form.descr" placeholder="简介"></el-input>
      </el-form-item>
      <el-form-item  prop="cover">
        <span slot="label">
      	  <span style="color: white;font-weight: bold;">封面</span>
        </span>
        <el-upload
            :action="$baseUrl + '/files/upload'"
            :headers="{ token: user.token }"
            list-type="picture"
            :on-success="handleCoverSuccess"
        >
          <el-button type="primary" style="width: 100px;">上传封面</el-button>
        </el-upload>
      </el-form-item>
      <el-form-item  prop="categoryId">
        <span slot="label">
      	  <span style="color: white;font-weight: bold;">分类</span>
        </span>
        <el-select v-model="form.categoryId" style="width: 100%">
          <el-option v-for="item in categoryList" :key="item.id" :value="item.id" :label="item.name"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item  prop="tags">
        <span slot="label">
      	  <span style="color: white;font-weight: bold;">标签</span>
        </span>
        <el-select v-model="tagsArr" multiple filterable allow-create default-first-option style="width: 100%">
          <el-option value="面试"></el-option>
          <el-option value="Vue"></el-option>
          <el-option value="前端"></el-option>
          <el-option value="Html"></el-option>
          <el-option value="Css"></el-option>
          <el-option value="JavaScript"></el-option>
          <el-option value="求助"></el-option>
          <el-option value="算法"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item  prop="content">
        <span slot="label">
      	  <span style="color: white;font-weight: bold;">内容</span>
        </span>
        <div id="editor" ></div>

      </el-form-item>

    </el-form>
    <div style="text-align: center"><el-button type="primary" size="medium" style="width: 100px" @click="save">发 布</el-button> </div>
  </div>
</div>
</template>

<script>
import E from "wangeditor";
import hljs from "highlight.js";

export default {
  name: "NewBlog",
  data(){
    return{
      form: {},
      user: JSON.parse(localStorage.getItem('xm-user') || '{}'),
      rules: {

      },
      tagsArr:[],
      categoryList:[],
      editor:null,
      blogId:this.$route.query.blogId
    }
  },
  mounted() {
    this.$request.get('/category/selectAll').then(res=>{
      this.categoryList = res.data || []
    })

    this.$request.get('/blog/selectById/'+this.blogId).then(res=>{
      this.form = res.data || {}
      // console.log(this.form)
      if(this.form.id){
        console.log(this.form)
        this.tagsArr = JSON.parse(this.form.tags || '[]')
        setTimeout(()=>{
          this.editor.txt.html(this.form.content)
        },0)
      }
    })
    this.setRichText()
  },
  created() {
  },
  methods:{
    save() {   // 保存按钮触发的逻辑  它会触发新增或者更新
      this.$refs.formRef.validate((valid) => {
        if (valid) {
          this.form.tags = JSON.stringify(this.tagsArr) //把josn数组转化成json字符串输出
          this.form.content = this.editor.txt.html()
          this.$request({
            url: this.form.id ? '/blog/update' : '/blog/add',
            method: this.form.id ? 'PUT' : 'POST',
            data: this.form
          }).then(res => {
            if (res.code === '200') {  // 表示成功保存
              this.$message.success('发布成功')
              setTimeout(() => {
            this.$router.push('/front/home');
          }, 1000);
            } else {
              this.$message.error(res.msg)  // 弹出错误的信息
            }
          })
        }
      })
    },
    handleCoverSuccess(res){
      this.form.cover = res.data;
    },

    setRichText() {
      this.$nextTick(() => {
        this.editor = new E(`#editor`)
        this.editor.highlight = hljs
        this.editor.config.uploadImgServer = this.$baseUrl + '/files/editor/upload'
        this.editor.config.uploadFileName = 'file'
        this.editor.config.uploadImgHeaders = {
          token: this.user.token
        }
        this.editor.config.uploadImgParams = {
          type: 'img',
        }
        this.editor.config.zIndex=0 
        this.editor.create()  // 创建
      })
    },
  }
}
</script>

<style >
  .card {
    border: 1px solid #142052;
    border-radius: 30px;
    background-color: #142052d4;
    margin-bottom: 20px;
    box-shadow: 0 0 20px #61749C;
    /* color: white !important;  */
  }
</style>