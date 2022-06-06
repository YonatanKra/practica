"use strict";(self.webpackChunkpractica_docs=self.webpackChunkpractica_docs||[]).push([[491],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return g}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(r),g=a,m=f["".concat(c,".").concat(g)]||f[g]||u[g]||i;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3808:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],s={id:"features",sidebar_position:3},c="Features and practices",l={unversionedId:"features",id:"features",title:"Features and practices",description:"This list outlines all the capabilities and roadmap of Practica.js",source:"@site/docs/features-reference.md",sourceDirName:".",slug:"/features",permalink:"/features",editUrl:"https://github.com/practicajs/practica/tree/main/docs/docs/features-reference.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"features",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Practica.js intro",permalink:"/the-basics/getting-started-in-5-min"},next:{title:"README",permalink:"/decisions/"}},p={},u=[{value:"1.1.1 Logger",id:"111-logger",level:2},{value:"1.1.2 Prevent infinite logger serialization loop",id:"112-prevent-infinite-logger-serialization-loop",level:2}],f={toc:u};function g(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"features-and-practices"},"Features and practices"),(0,i.kt)("p",null,"This list outlines all the capabilities and roadmap of Practica.js"),(0,i.kt)("p",null,"Here will come a filter panel to search by categories, what's strategic, and more"),(0,i.kt)("h2",{id:"111-logger"},"1.1.1 Logger"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"What:")," A reputable and hardened logger"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Tags:")," #strategic #logger"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\ud83d\udc77\ud83c\udffe Status:")," ",(0,i.kt)("img",{src:"https://raw.githubusercontent.com/practicajs/practica/main/docs/static/img/docs/decisions/full.png"}),"  Production-ready, more hardening is welcome"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\ud83c\udfc6 Chosen libraries:")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pinojs/pino"},"Pino.js")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com"},"(Decision log here)")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\ud83c\udf81 Bundles:")," example-flow, full-flow"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\ud83c\udfc1 CLI flags:")," --logger=true|false"),(0,i.kt)("h2",{id:"112-prevent-infinite-logger-serialization-loop"},"1.1.2 Prevent infinite logger serialization loop"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"What:")," Limit logged JSON depth when cyclic reference is introduced"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Tags:")," #logger"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\ud83d\udc77\ud83c\udffe Status:")," ",(0,i.kt)("img",{src:"https://raw.githubusercontent.com/practicajs/practica/main/docs/static/img/docs/decisions/partial.png"}),"  Idea, not implemented"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\ud83c\udfc6 Chosen libraries:")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pinojs/pino"},"Pino.js")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com"},"(Decision log here)")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\ud83c\udf81 Bundles:")," example-flow, full-flow"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\ud83c\udfc1 CLI flags:")," None, always true"))}g.isMDXComponent=!0}}]);