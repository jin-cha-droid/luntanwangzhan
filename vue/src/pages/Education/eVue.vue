<template>
    <div>
        <div class="container">
            <div class="container-nav">
                <el-tree style="color:black;" node-key="label" default-expand-all :expand-on-click-node="false"
                    :data="treeList" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
            </div>
            <div class="markdown-body">
                <div class="hljs-line-numbers">
                    <UpdateDocsComp ref="markdownRef" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import UpdateDocsComp from '../../../public/markdowns/Vue3快速上手.md';
import 'github-markdown-css';
// import 'highlightjs-line-numbers.js';
import _ from 'lodash';

export default {
    name: "eVue",
    components: {
        UpdateDocsComp
    }, data() {
        return {

            treeList: [],
            defaultProps: { children: 'children', label: 'label' },
        }
    },
    mounted() {
        // 通过观察 markdown 渲染出来的 DOM 元素，我发现 heading 元素都是平铺的
        // 所以以下逻辑都是可操作的
        var markdownDOM = this.$refs.markdownRef.$el;
        var headingReg = /^H(\d)$/i;
        var headingList = _.filter(markdownDOM.querySelector('body').children, ele => headingReg.test(ele.tagName));

        var treeList = []
        var tree = null;
        var preNode = null;
        _.forEach(headingList, ele => withElement(preNode, ele));
        this.treeList = [...treeList, tree].filter(tree => !!tree);

        function withElement(pNode, element) {
            const weight = element.tagName.replace(headingReg, '$1');
            const node = {
                label: element.innerText,
                children: [],
                weight,
                element,
                parent: null,
            }

            if (!pNode) {
                // 老的 tree
                treeList.push(tree);
                // 新的 tree
                tree = node;
                preNode = node;
                return;
            }

            if (pNode.weight >= weight) {
                return withElement(pNode.parent, element)
            }

            node.parent = pNode;
            pNode.children = [...pNode.children, node];
            preNode = node;
        }

    },
    methods: {
        handleNodeClick(data, node) {
            const ele = data.element;
            (ele).scrollIntoView({ behavior: 'smooth', block: 'center' });
        },
    },
}



</script>

<style scoped>
@import '../../../public/css/Education/common.less';
</style>