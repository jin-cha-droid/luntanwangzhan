<template>
    <el-carousel :interval="4000" type="card" height="400px">
      <el-carousel-item v-for="item in Image" :key="item">
        <img :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
  </template>
<script>
    export default {
        name: 'Carousel',
        data(){
            return{
                Image:[
                require('../../public/img/banner/banner1.png'),
                require('../../public/img/banner/banner2.png'),
                require('../../public/img/banner/banner3.png')
                ]
            }
        }
    }
</script>
<style scoped>
  img{
    width: 100%;
    height: 100%;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>