"use strict";(self.webpackChunkwhk_wiki=self.webpackChunkwhk_wiki||[]).push([[1494],{4665:(e,t,n)=>{n.d(t,{Z:()=>g});n(7294);var i=n(6905),r=n(1976),c=n(5013),s=n(1699),a=n(1614),o=n(4055);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(5893);function m(e){let{href:t,children:n}=e;return(0,d.jsx)(c.Z,{href:t,className:(0,i.Z)("card padding--lg",l.cardContainer),children:n})}function u(e){let{href:t,icon:n,title:r,description:c}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(o.Z,{as:"h2",className:(0,i.Z)("text--truncate",l.cardTitle),title:r,children:[n," ",r]}),c&&(0,d.jsx)("p",{className:(0,i.Z)("text--truncate",l.cardDescription),title:c,children:c})]})}function h(e){let{item:t}=e;const n=(0,r.LM)(t);return n?(0,d.jsx)(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,a.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,r.xz)(t.docId??void 0);return(0,d.jsx)(u,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(p,{item:t});case"category":return(0,d.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,r.jA)();return(0,d.jsx)(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const c=(0,r.MN)(t);return(0,d.jsx)("section",{className:(0,i.Z)("row",n),children:c.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(f,{item:e})},t)))})}},3050:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=n(5893),r=n(1151),c=n(4665);const s={},a="\u76f4\u7ebf",o={id:"math/geometry/line-and-circle/line/index",title:"\u76f4\u7ebf",description:"\u8fd9\u4e00\u90e8\u5206\u4e3a\u76f4\u7ebf\u6709\u5173\u7684\u5185\u5bb9\uff0e",source:"@site/docs/math/geometry/line-and-circle/line/index.md",sourceDirName:"math/geometry/line-and-circle/line",slug:"/math/geometry/line-and-circle/line/",permalink:"/whk-wiki/math/geometry/line-and-circle/line/",draft:!1,unlisted:!1,editUrl:"https://github.com/whk-wiki/whk-wiki/tree/main/docs/math/geometry/line-and-circle/line/index.md",tags:[],version:"current",lastUpdatedBy:"dbxxx",lastUpdatedAt:1707677138,formattedLastUpdatedAt:"2024\u5e742\u670811\u65e5",frontMatter:{},sidebar:"geometrySidebar",previous:{title:"\u89e3\u6790\u51e0\u4f55\u57fa\u7840",permalink:"/whk-wiki/math/geometry/line-and-circle/basics"},next:{title:"\u91cf\u5316\u76f4\u7ebf\u65b9\u5411\u7684\u5de5\u5177",permalink:"/whk-wiki/math/geometry/line-and-circle/line/direction"}},l={},d=[];function m(e){const t={h1:"h1",p:"p",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"\u76f4\u7ebf",children:"\u76f4\u7ebf"}),"\n","\n","\n",(0,i.jsx)(t.p,{children:"\u8fd9\u4e00\u90e8\u5206\u4e3a\u76f4\u7ebf\u6709\u5173\u7684\u5185\u5bb9\uff0e"}),"\n",(0,i.jsx)(c.Z,{})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var i=n(7294);const r={},c=i.createContext(r);function s(e){const t=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);