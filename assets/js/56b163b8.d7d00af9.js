"use strict";(self.webpackChunkwhk_wiki=self.webpackChunkwhk_wiki||[]).push([[6880],{4665:(e,t,i)=>{i.d(t,{Z:()=>w});i(7294);var n=i(6905),c=i(1976),s=i(8746),r=i(1699),a=i(1614),o=i(4055);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=i(5893);function h(e){let{href:t,children:i}=e;return(0,d.jsx)(s.Z,{href:t,className:(0,n.Z)("card padding--lg",l.cardContainer),children:i})}function m(e){let{href:t,icon:i,title:c,description:s}=e;return(0,d.jsxs)(h,{href:t,children:[(0,d.jsxs)(o.Z,{as:"h2",className:(0,n.Z)("text--truncate",l.cardTitle),title:c,children:[i," ",c]}),s&&(0,d.jsx)("p",{className:(0,n.Z)("text--truncate",l.cardDescription),title:s,children:s})]})}function u(e){let{item:t}=e;const i=(0,c.LM)(t);return i?(0,d.jsx)(m,{href:i,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,a.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const i=(0,r.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,c.xz)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:i,title:t.label,description:t.description??n?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(p,{item:t});case"category":return(0,d.jsx)(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const i=(0,c.jA)();return(0,d.jsx)(w,{items:i.items,className:t})}function w(e){const{items:t,className:i}=e;if(!t)return(0,d.jsx)(x,{...e});const s=(0,c.MN)(t);return(0,d.jsx)("section",{className:(0,n.Z)("row",i),children:s.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(f,{item:e})},t)))})}},1217:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=i(5893),c=i(1151),s=i(4665);const r={},a="\u673a\u68b0\u6ce2",o={id:"physics/mechanical-wave/index",title:"\u673a\u68b0\u6ce2",description:"",source:"@site/docs/physics/mechanical-wave/index.md",sourceDirName:"physics/mechanical-wave",slug:"/physics/mechanical-wave/",permalink:"/whk-wiki/physics/mechanical-wave/",draft:!1,unlisted:!1,editUrl:"https://github.com/whk-wiki/whk-wiki/tree/main/docs/physics/mechanical-wave/index.md",tags:[],version:"current",lastUpdatedBy:"dbxxx-oi",lastUpdatedAt:1701394043,formattedLastUpdatedAt:"2023\u5e7412\u67081\u65e5",frontMatter:{},sidebar:"physicsSidebar",previous:{title:"\u96c6\u5408",permalink:"/whk-wiki/physics/mechanical-vibration/set"},next:{title:"\u96c6\u5408",permalink:"/whk-wiki/physics/mechanical-wave/set"}},l={},d=[];function h(e){const t={h1:"h1",...(0,c.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"\u673a\u68b0\u6ce2",children:"\u673a\u68b0\u6ce2"}),"\n",(0,n.jsx)(s.Z,{})]})}function m(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>a,a:()=>r});var n=i(7294);const c={},s=n.createContext(c);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);