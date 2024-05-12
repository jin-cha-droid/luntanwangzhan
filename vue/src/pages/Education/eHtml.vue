<template>
    <div>
        <div class="textbox">
            <h1>Vue</h1>
            <p>
                Vue 是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript
                构建，并提供了一套声明式的、组件化的编程模型，可以高效地开发用户界面。无论是简单还是复杂的界面，Vue 都可以胜任。
                Vue是一个独立的社区驱动的项目，它是由尤雨溪在2014年作为其个人项目创建，是一个成熟的、经历了无数实战考验的框架，它是目前生产环境中使用最广泛的JavaScript框架之一，可以轻松处理大多数web应用的场景，并且几乎不需要手动优化，并且Vue完全有能力处理大规模的应用。

            </p>
        </div>
        <div class="textbox">
            <h1>Vue2的OptionsAPI与Vue3的CompositionAPI</h1>
            <p>
                - `Vue2`的`API`设计是`Options`（配置）风格的。<br>
                - `Vue3`的`API`设计是`Composition`（组合）风格的。<br><br>
                ### Options API 的弊端 ###<br>
                `Options`类型的
                `API`，数据、方法、计算属性等，是分散在：`data`、`methods`、`computed`中的，若想新增或者修改一个需求，就需要分别修改：`data`、`methods`、`computed`，不便于维护和复用。

            </p>
            <div style="width: 100%; 
        display: flex; 
        justify-content: center;
        ">
                <img src="../../../public/img/edu/vue201.gif" alt="" style="width: 40%;">
                <img src="../../../public/img/edu/vue202.gif" alt="" style="width: 40%;">
            </div>
            <p>
                ### Composition API 的优势 ###<br>
                可以用函数的方式，更加优雅的组织代码，让相关功能的代码更加有序的组织在一起。

            </p>
            <div style="width: 100%; 
        display: flex; 
        justify-content: center;
        ">
                <img src="../../../public/img/edu/vue301.gif" alt="" style="width: 40%;">
                <img src="../../../public/img/edu/vue301.gif" alt="" style="width: 40%;">
            </div>
            <p>
                说明：以上四张动图原创作者：大帅老猿

            </p>
        </div>

    </div>
</template>

<script >
export default {
    name: "eHtml",
}
</script>

<style scoped>
@import '../../../public/css/Education/common.less'
</style>