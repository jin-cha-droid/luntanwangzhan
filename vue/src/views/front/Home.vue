<template>
  <div class="main-content" style="width: 90%;">
    <div style="display: flex; align-items: flex-start; grid-gap: 10px">

      <div style="width: 150px" class="card">
        <div class="category-item" :class="{ 'category-item-active': item.name === current }"
             v-for="item in categoryList" :key="item.id" @click="selectCategory(item.name)">{{ item.name }}</div>
      </div>
      <div style="flex: 1;">
        <BlogList :categoryName="current"/>

        <Footer />
      </div>

      <div style="width: 260px">
        <div class="card" style="margin-bottom: 10px">
          <div style="font-size: 20px; font-weight: bold; margin-bottom: 10px">欢迎来到曌鸢阁论坛！</div>
          <a href="/front/person"><div style="color: #666">书山有路勤为径，学海无涯苦作舟</div></a>
        </div>

        <div class="card" style="margin-bottom: 10px">
          <div style="display: flex; align-items: center; padding-bottom: 10px; border-bottom: 1px solid #ddd">
            <div style="font-size: 20px; flex: 1">文章榜单</div>
            <div style="font-size: 12px; color: #666; cursor: pointer;" @click="refreshTop"><i class="el-icon-refresh"></i> 换一换</div>
          </div>
          <div>
            <div v-for="item in showList" :key="item.id" style="margin: 15px 0" class="line1">
              <a :href="'/front/blogDetail?blogId='+ item.id" target="_blank">
              <span style="width: 18px; display: inline-block; text-align: right; margin-right: 10px">
                <span style="color: orangered" v-if="item.index === 1">{{ item.index }}</span>
                <span style="color: goldenrod" v-else-if="item.index === 2">{{ item.index }}</span>
                <span style="color: dodgerblue" v-else-if="item.index === 3">{{ item.index }}</span>
                <span style="color: #666" v-else>{{ item.index }}</span>
              </span>
              <span style="color: #666;">{{ item.title }}</span>
              </a>
            </div>
          </div>

        </div>

        <div style="margin-bottom: 10px">
          <div v-for="item in topActivityList" :key="item.id" style="margin-bottom: 10px">
            <a :href="'/front/activityDetail?activityId=' + item.id" target="_blank"><img :src="item.cover" alt="" style="width: 100%; border-radius: 5px"></a>
          </div>
        </div>

        <!-- <div style="line-height: 30px; color: #666; padding: 0 10px">
          <div>举报邮箱： </div>
          <div> 座机电话： </div>
          <div> </div>
        </div> -->

      </div>

    </div>
  </div>
</template>

<script>

import Footer from "@/components/Footer";
import BlogList from "@/components/BlogList";
export default {
  components: {
    Footer,
    BlogList
  },
  data() {
    return {
      current: '全部帖子',  //当前选中的分类名称
      categoryList: [],

      topList: [],
      showList: [],
      lastIndex: 0,
      topActivityList: []
    }
  },
  mounted() {
    this.load()

    this.refreshTop()

    this.loadTopActivity()

  },
  // methods：本页面所有的点击事件或者其他函数定义区
  methods: {
    loadTopActivity() {
      this.$request.get('/activity/selectTop').then(res => {
        this.topActivityList = res.data || []
      })
    },
    refreshTop() {
      this.$request.get('/blog/selectTop').then(res => {
        this.topList = res.data || []
        let i = 1
        this.topList.forEach(item => item.index = i++)

        // 0  5  0
        if (this.lastIndex === 10) {
          this.lastIndex = 0
        }
        this.showList = this.topList.slice(this.lastIndex, this.lastIndex+5)  // 0-5   5- 10  // 0-5
        this.lastIndex += 5  // 5  10  5
      })
    },
    selectCategory(categoryName) {
      this.current = categoryName
    },
    load() {
      // 请求分类的数据
      this.$request.get('/category/selectAll').then(res => {
        this.categoryList = res.data || []
        this.categoryList.unshift({ name: '全部帖子' })
      })
    },

    handleCurrentChange(pageNum) {
      this.load(pageNum)
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
  color: white !important; 
}
.category-item {
  background-color: #188fff00;
  text-align: center;
  padding: 10px 0;
  font-size: 16px;
  cursor: pointer;
}
.category-item-active {
  border: 1px solid white;
  color: white;
  border-radius: 5px;
}

a{
  color: #000b17;
}
</style>
