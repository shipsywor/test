(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[874],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5448:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i={id:"introduction",title:"Introduction",sidebar_label:"Introduction",slug:"/event"},l={unversionedId:"packages/event/introduction",id:"packages/event/introduction",isDocsHomePage:!1,title:"Introduction",description:"WIP Package currently only supporting React!",source:"@site/docs/packages/event/Introduction.md",sourceDirName:"packages/event",slug:"/event",permalink:"/test/docs/event",editUrl:"https://github.com/agile-ts/documentation/tree/develop/docs/packages/event/Introduction.md",version:"current",lastUpdatedAt:1617080270,formattedLastUpdatedAt:"3/30/2021",sidebar_label:"Introduction",frontMatter:{id:"introduction",title:"Introduction",sidebar_label:"Introduction",slug:"/event"},sidebar:"docs",previous:{title:"Installation",permalink:"/test/docs/api/installation"},next:{title:"Installation",permalink:"/test/docs/event/installation"}},c=[],s={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},"\ud83d\udd25"),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"WIP Package currently only supporting React!"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Handy package for emitting UI updates")),(0,o.kt)("br",null),(0,o.kt)("a",{href:"https://github.com/agile-ts/agile"},(0,o.kt)("img",{src:"https://img.shields.io/github/license/agile-ts/agile.svg?label=license&style=flat&colorA=293140&colorB=4a4872",alt:"GitHub License"})),(0,o.kt)("a",{href:"https://npm.im/@agile-ts/event"},(0,o.kt)("img",{src:"https://img.shields.io/npm/v/@agile-ts/event.svg?label=npm&style=flat&colorA=293140&colorB=4a4872",alt:"npm version"})),(0,o.kt)("a",{href:"https://npm.im/@agile-ts/event"},(0,o.kt)("img",{src:"https://img.shields.io/bundlephobia/min/@agile-ts/event.svg?label=minified%20size&style=flat&colorA=293140&colorB=4a4872",alt:"npm minified size"})),(0,o.kt)("a",{href:"https://npm.im/@agile-ts/event"},(0,o.kt)("img",{src:"https://img.shields.io/npm/dt/@agile-ts/event.svg?label=downloads&style=flat&colorA=293140&colorB=4a4872",alt:"npm total downloads"})),(0,o.kt)("p",null,"Events are handy for emitting UI updates and passing data with them."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const MY_EVENT = new Event(App);\nMY_EVENT.on((data) => {console.log("hello there " + data.name)}); // Print \'hello there jeff\' if Event gets triggered\nMY_EVENT.trigger({name: "jeff"}); // Trigger Event\n')))}p.isMDXComponent=!0}}]);