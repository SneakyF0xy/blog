// plugin for wrapping pre-headings, headings h1 and h2 in sections, for beautiful indentation
import { visit } from 'unist-util-visit';

export default function remarkWrap() {
  console.log('remarkWrap')
  return (tree) => {
    const sections = [];
    let currentSection = null;

    const createSection = () => ({
      type: 'container',
      data: { hName: 'section' },
      children: []
    });

    const finishSection = () => {
      if (currentSection?.children.length) {
        sections.push(currentSection);
      }
    };

    tree.children.forEach((node) => {
      const isHeading = node.type === 'heading' && node.depth <= 2;

      if (isHeading) {
        finishSection();
        currentSection = createSection();
      }

      currentSection = currentSection || createSection();
      currentSection.children.push(node);
    });

    finishSection();
    tree.children = sections;
  };
}

export function rehypeHandleSections() {
    return (tree) => {
        visit(tree, 'containerSection', (node) => {
            node.type = 'element';
            node.tagName = 'section';
            node.properties = node.data?.hProperties || {};
            delete node.data;
        });
    };
}