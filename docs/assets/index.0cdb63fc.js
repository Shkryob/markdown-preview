import{j as c,e as l,r as d,R as f,a as m}from"./vendor.1b528349.js";const p=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const t of r.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&i(t)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}};p();const h=`# Welcome to my React Markdown Previewer!\r
\r
## This is a sub-heading...\r
### And here's some other cool stuff:\r
\r
Heres some code, \`<div></div>\`, between 2 backticks.\r
\r
\`\`\`\r
// this is multi-line code:\r
\r
function anotherExample(firstLine, lastLine) {\r
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {\r
    return multiLineCode;\r
  }\r
}\r
\`\`\`\r
\r
You can also make text **bold**... whoa!\r
Or _italic_.\r
Or... wait for it... **_both!_**\r
And feel free to go crazy ~~crossing stuff out~~.\r
\r
There's also [links](https://www.freecodecamp.org), and\r
> Block Quotes!\r
\r
And if you want to get really crazy, even tables:\r
\r
Wild Header | Crazy Header | Another Header?\r
------------ | ------------- | -------------\r
Your content can | be here, and it | can be here....\r
And here. | Okay. | I think we get it.\r
\r
- And of course there are lists.\r
    - Some are bulleted.\r
        - With different indentation levels.\r
            - That look like this.\r
\r
\r
1. And there are numbered lists too.\r
1. Use just 1s if you want!\r
1. And last but not least, let's not forget embedded images:\r
\r
![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\r
`,s=c.exports.jsx,g=c.exports.jsxs;l.setOptions({breaks:!0});function u(n){return l(n)}function y(){const[n,o]=d.exports.useState(h),a=u(n),[i,e]=d.exports.useState(a);function r(t){o(t.target.value),e(u(t.target.value))}return s("div",{className:"App",children:g("header",{className:"App-header",children:[s("textarea",{id:"editor",onChange:r,value:n}),s("div",{id:"preview",dangerouslySetInnerHTML:{__html:i}})]})})}f.render(s(m.StrictMode,{children:s(y,{})}),document.getElementById("root"));
