
import {remark} from 'remark';
import html from 'remark-html';
import rehypeSlug from 'rehype-slug'


interface Props {
  content: string;
}

const MarkdownRenderer: React.FC<Props> = ({ content }) => {
    const processedContent = remark().use(html).use(rehypeSlug).processSync(content).toString();
    return <div dangerouslySetInnerHTML={{ __html: processedContent }} />;
  };

export default MarkdownRenderer;

// components/MarkdownRenderer.tsx
// import React from 'react';
// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';
// import {remark} from 'remark';
// import html from 'remark-html';
// import toc from 'remark-toc';

// interface MarkdownRendererProps {
//   filePath: string;
// }


// const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ filePath }) => {
//   const fileContent = fs.readFileSync(path.resolve(filePath), 'utf-8');
//   const { content, data } = matter(fileContent);
//   // const processedContent = remark().use(html).processSync(content).toString();
//   // components/MarkdownRenderer.tsx
// const processedContent = remark()
// .use(html)
// .use(() => {
//   return (tree:any) => {
//     const headings :any= [];
//     tree.children.forEach((node:any) => {
//       if (node.type === 'heading') {
//         headings.push(node);
//       }
//     });

//     const tocList = headings.map((heading:any) => {
//       const id = heading.children[0].value.toLowerCase().replace(/\s/g, '-');
//       heading.children.unshift({
//         type: 'link',
//         url: `#${id}`,
//         children: [{ type: 'text', value: '🔗' }],
//       });

//       return {
//         depth: heading.depth,
//         id,
//         title: heading.children[1].value,
//       };
//     });
    

//     const tocTree = {
//       type: 'list',
//       ordered: false,
//       children: tocList.map((item:any) => ({
//         type: 'listItem',
//         children: [
//           {
//             type: 'paragraph',
//             children: [
//               {
//                 type: 'link',
//                 url: `#${item.id}`,
//                 children: [{ type: 'text', value: item.title }],
//               },
//             ],
//           },
//         ],
//       })),
//     };

//     tree.children.unshift({ type: 'heading', depth: 2, children: [{ type: 'text', value: 'Table of Contents' }] });
//     tree.children.unshift(tocTree);

//     return tree;
//   };
// })
// .processSync(content)
// .toString();


//   return (
//     <div>
//       {data.title && <h1>{data.title}</h1>}
//       <div dangerouslySetInnerHTML={{ __html: processedContent }} />
//     </div>
//   );
// };

// export default MarkdownRenderer;
