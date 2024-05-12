import MarkdownIt from 'markdown-it';
import anchor from 'markdown-it-anchor';

const markdownIt = new MarkdownIt().use(anchor);

function extractHeadings(text) {
  const tokens = markdownIt.parse(text, {});
  const headings = [];

  tokens.forEach(token => {
    if (token.type === 'heading_open' && token.tag.match(/^h[1-6]$/)) {
      const heading = {
        level: parseInt(token.tag.charAt(1)),
        text: tokens[tokens.indexOf(token) + 1].children
          .filter(child => child.type === 'text')
          .map(child => child.content)
          .join(''),
        slug: tokens[tokens.indexOf(token) - 1].attrs.find(attr => attr[0] === 'id')[1],
      };

      headings.push(heading);
    }
  });

  return headings;
}

export default extractHeadings;