<template>
    <div>
        <div class="textbox">
            <h1>CSS</h1>
            <p>
                层叠样式表(英文全称：Cascading Style
                Sheets)是一种用来表现HTML（标准通用标记语言的一个应用）或XML（标准通用标记语言的一个子集）等文件样式的计算机语言。CSS不仅可以静态地修饰网页，还可以配合各种脚本语言动态地对网页各元素进行格式化。
                CSS 能够对网页中元素位置的排版进行像素级精确控制，支持几乎所有的字体字号样式，拥有对网页对象和模型样式编辑的能力。

            </p>
        </div>
        <div class="textbox">
            <h1>CSS实例</h1>
            <img src="../../../public/img/edu/css.jpg" alt="">
            <p>
                CSS 规则由两个主要的部分构成：选择器，以及一条或多条声明:
                选择器通常是您需要改变样式的 HTML 元素。
                每条声明由一个属性和一个值组成。
                属性（property）是您希望设置的样式属性（style attribute）。每个属性有一个值。属性和值被冒号分开。
            </p>
        </div>
    </div>
</template>

<script>
    export default {
    name: "eCss",
}
</script>

<style scoped>
@import '../../../public/css/Education/common.less';
</style>