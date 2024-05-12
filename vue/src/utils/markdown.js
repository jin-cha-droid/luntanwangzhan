import MarkdownIt from 'markdown-it';
import anchor from 'markdown-it-anchor';

const markdownIt = new MarkdownIt({
  // 可以在此处添加其他配置项，如开启表格、脚注等支持
});

markdownIt.use(anchor, {
  // anchor插件配置，例如：
  permalink: true,
  permalinkClass: 'header-anchor',
  permalinkSymbol: '#',
});

export default markdownIt;