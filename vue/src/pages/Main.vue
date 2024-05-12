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
                    <!-- <li><RouterLink to ="/Blog">论坛后台</RouterLink></li> -->
                </ul>
            </div>
        </div>
        <div class="MainContent">
            <div class="main">
                <div class="logo">
                    <img src="../../public//img/logo.png" alt="logo" title="照亮前路，自由翱翔">
                    <div class="des">
                        高阁凌云，日月当空，照鸢前行
                    </div>
                </div>
            </div>
        </div>

        <div class="maintext">
            <div class="teacher" id="study">
                <h1>前端教学</h1>
                <ul class="teacher-nav">
                    <RouterLink to="/Education/ehtml" class="study-item">
                        <span>Html</span>
                        <img src="../../public//img/icon/html.png" alt="">
                    </RouterLink>
                    <RouterLink to="/Education/ecss" class="study-item">
                        <span>CSS</span>
                        <img src="../../public//img/icon/CSS3.png" alt="">
                    </RouterLink>
                    <RouterLink to="/Education/ejs" class="study-item">
                        <span>JavaScript</span>
                        <img src="../../public//img/icon/js.png" alt="">
                    </RouterLink>
                    <RouterLink to="/Education/evue" class="study-item">
                        <span>Vue</span>
                        <img src="../../public//img/icon/Vue.png" alt="">
                    </RouterLink>
                </ul>
                <p>"学无止境，不积跬步，无以至千里；不积小流，无以成江海。" ——《荀子·劝学》</p>
            </div>
            <hr>
            <div class="forumtext">
                <div class="left">
                    <div class="text">
                        <h1>前端交流论坛the Forum</h1>
                        <p>&nsubset;欢迎来到曌鸢阁前端交流论坛，在这里你可以学到Html5，CSS3，JavaScript，Vue3等内容，包括教程、案例、代码示例、书籍或工具推荐，新闻资讯，行业趋势等等。
                        </p>
                    </div>
                    <RouterLink to="/front/home"><button>点击进入</button></RouterLink>
                </div>
                <div class="line"></div>
                <div class="right">
                    <img src="../../public/img/icon/MAKE.png" alt="">
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="footer-text">
                <p>Copyright © 2024 曌鸢阁. All Rights Reserved.</p>
                <p>本网站由夜萝卜制作</p>
                <p>不乱于心，不困于情，不畏将来，不念过往，如此安好 ———丰子恺</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Main"
}
</script>

<style lang="less" scoped>
.mianc {
    background-image: url('../../public/img/bg02.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
}

ul,
ol {
    list-style: none;
}

h1 {
    font-size: 40px;
    color: white;
}

p {
    font-size: 20px;
    color: white;
}

@import url('../../public//css/Education/nav.css');
@import url('../../public//css/Main/item1.css');
@import url('../../public//css/Main/item2.css');
@import url('../../public/css/Main/footer.css');
</style>