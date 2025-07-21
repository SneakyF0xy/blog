// test/plugins/wrap.test.js
import { test, expect } from 'vitest';
import { unified } from 'unified';
import dedent from 'ts-dedent';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import remarkWrap from '../../src/plugins/wrap.js';

function processMarkdown(markdown) {
    const processor = unified()
        .use(remarkParse)
        .use(remarkWrap);

    const ast = processor.parse(markdown);
    return processor.runSync(ast);
}

function markdownToHtml(markdown) {
    return unified()
        .use(remarkParse)
        .use(remarkWrap)
        .use(remarkRehype)
        .use(rehypeStringify)
        .processSync(markdown)
        .toString();
}

function expectSectionContainer(node) {
    expect(node.type).toBe('container');
    expect(node.data?.hName).toBe('section');
}

test('wraps h2+ sections in containers', () => {
    const markdown = dedent`
        # Title
        ## Section 1
        Text A
        ## Section 2
        Text B
    `;
    const ast = processMarkdown(markdown);
    console.dir(ast, { depth: null })
    // 3 sections: 1st is the title, 2nd is the first section, 3rd is the second section
    expect(ast.children).toHaveLength(3);
    ast.children.forEach(expectSectionContainer);
});

test('wraps content before first heading', () => {
    const markdown = dedent`
        Text before heading
        ## Section Start
        Content here
    `;

    const ast = processMarkdown(markdown);

    expect(ast.children).toHaveLength(2);

    // First section contains paragraph
    expectSectionContainer(ast.children[0]);
    expect(ast.children[0].children[0].type).toBe('paragraph');

    // Second section starts with heading
    expectSectionContainer(ast.children[1]);
    expect(ast.children[1].children[0].type).toBe('heading');
});

test('wraps standalone content without headings', () => {
    const markdown = 'Just a paragraph.';

    const ast = processMarkdown(markdown);

    expect(ast.children).toHaveLength(1);
    expectSectionContainer(ast.children[0]);
    expect(ast.children[0].children[0].type).toBe('paragraph');
});

test('handles empty content', () => {
    const ast = processMarkdown('');
    expect(ast.children).toHaveLength(0);
});

test('handles multiple paragraphs in section', () => {
    const markdown = dedent`
        ## Heading
        First paragraph.

        Second paragraph.
    `;

    const ast = processMarkdown(markdown);

    expect(ast.children).toHaveLength(1);
    expectSectionContainer(ast.children[0]);

    const section = ast.children[0];
    expect(section.children[0].type).toBe('heading');
    expect(section.children[1].type).toBe('paragraph');
    expect(section.children[2].type).toBe('paragraph');
});

test('converts to HTML with proper sections', () => {
    const markdown = dedent`
        # Main Title
        Some intro text.

        ## First Section
        Content here.

        ## Second Section
        More content.
    `;

    const html = markdownToHtml(markdown);
    console.log(html)
    expect(html).toContain('<section>');
    expect(html).toContain('<h1>Main Title</h1>');
    expect(html).toContain('<h2>First Section</h2>');
    expect(html).toContain('<h2>Second Section</h2>');

    // Count sections
    const sectionCount = (html.match(/<section>/g) || []).length;
    expect(sectionCount).toBe(3);
});

test('wraps content before headings in section', () => {
    const markdown = dedent`
        Content before heading.

        ## Section Start
        Section content.
    `;

    const html = markdownToHtml(markdown);

    expect(html).toContain('<section><p>Content before heading.</p></section>');
    expect(html).toContain('<section><h2>Section Start</h2>');
});

test('handles nested headings correctly', () => {
    const markdown = dedent`
        ## Main Section
        Content here.

        ### Subsection
        Sub content.

        #### Deep heading
        Deep content.
    `;

    const html = markdownToHtml(markdown);

    // Should only have one section (h3, h4 don't create new sections)
    const sectionCount = (html.match(/<section>/g) || []).length;
    expect(sectionCount).toBe(1);

    expect(html).toContain('<h2>Main Section</h2>');
    expect(html).toContain('<h3>Subsection</h3>');
    expect(html).toContain('<h4>Deep heading</h4>');
});

test('produces clean HTML structure', () => {
    const markdown = dedent`
        # Title
        ## Section
        Content.
    `;

    const html = markdownToHtml(markdown);

    // Should have proper nesting
    expect(html).toMatch(/<section><h1>Title<\/h1><\/section>/);
    expect(html).toMatch(/<section><h2>Section<\/h2><p>Content\.<\/p><\/section>/);
});