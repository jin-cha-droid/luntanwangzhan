<template>
    <div class="mianc">
        <div class="header-nav" :v-if=false>
            <div class="topnav clearfix">
                <span class="nav-text">欢迎来到曌鸢阁的前端技术交流社区~</span>
                <ul class="right-nav clearfix">
                    <li>
                        <RouterLink to="/Main">网站主页</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/Education">前端教学</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/front/home">前端论坛</RouterLink>
                    </li>
                    <!-- <li><RouterLink to ="/home" >论坛后台</RouterLink></li> -->
                    <!-- <li><RouterLink to ="/Blog">论坛后台</RouterLink></li> -->
                </ul>
            </div>
        </div>
        <div class="Education-nav">
            <a href="#" class="box" v-scroll-to="{ el: `.${'Education-banner'}`, offset: 0 }">
                <img src="../../public/img/icon/banner.png" alt="">
                <span>Banner</span>
            </a>

            <RouterLink to="/Education/ehtml" class="box" v-scroll-to="{ el: `.${'Education'}`, offset: -100 }">
                <img src="../../public/img/icon/html.png" alt="">
                <span>Html</span>
            </RouterLink>
            <RouterLink to="/Education/ecss" class="box" v-scroll-to="{ el: `.${'Education'}`, offset: -100 }">
                <img src="../../public/img/icon/CSS3.png" alt="">
                <span>CSS</span>
            </RouterLink>
            <RouterLink to="/Education/ejs" class="box" v-scroll-to="{ el: `.${'Education'}`, offset: -100 }">
                <img src="../../public/img/icon/js.png" alt="">
                <span>JS</span>
            </RouterLink>
            <RouterLink to="/Education/evue" class="box" v-scroll-to="{ el: `.${'Education'}`, offset: -100 }">
                <img src="../../public/img/icon/Vue.png" alt="">
                <span>Vue</span>
            </RouterLink>
            <div class="box" v-scroll-to="{ el: `.${'Education'}`, offset: -100 }">
                <img src="../../public/img/icon/回到顶部.png" alt="">
                <span>top</span>
            </div>
        </div>

        <div class="Education-banner">
            <div class="banner">
                <Carousel />
            </div>
        </div>
        <div class="Education" id="Education">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'

export default {
name: "Education",
components: {
    Carousel
  },
  data() {
    return {
      carouselImages: [
            { src: '../../public/img/banner/banner1.png', alt: 'Image 1' },
            { src: '../../public/banner/banner1.png', alt: 'Image 2' },
            { src: '../../public/banner/banner1.png', alt: 'Image 3' },
        // 更多图片...
      ]
    };
  }
};

</script>

<style lang="less" scoped>
.mianc {
  background-image: url('../../public/img/bg02.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
.Education-banner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    .banner {
        margin-top: 25vh;
        width:80%;
        height: 80%;
    }

}

ul,ol {
    list-style: none;
}
.Education{
    min-height: 100vh;
    margin:auto;
    width: 80vw;
    border: 1px solid #142052;
    border-radius: 30px;
    background-color: white;
    margin-bottom: 20px;
    box-shadow: 0 0 20px #61749C;
    display: flex;
}


@import url('../../public/css/Education/nav.css');
@import url('../../public/css/Education/Education-nav.less');

</style>