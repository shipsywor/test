(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[5370],{1410:function(e,t,r){var a=r(4132),n=a.Agile,o=a.generateId,i=r(9582),l=i.AgileHOC,s=i.useAgile,c=i.useWatcher,u=i.useProxy,m=r(6413),p=m.Event,g=m.useEvent,d=r(671).toast,f="https://github.com/agile-ts",h={copyright:"Created with \ud83d\udc9c in Germany     |    Copyright \xa9 "+(new Date).getFullYear()+' <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/DevBenno">BennoDev</a>',meta:{title:"Spacy State Manager",image:"/img/meta.png",description:"AgileTs is a global open source State and Logic Framework, which makes State Management fast, easy and overall fun.",color:"#6c69a0"},domain:"https://agile-ts.org",githubOrgUrl:f,githubUrl:f+"/agile",githubDocsUrl:f+"/documentation",npmCoreUrl:"https://www.npmjs.com/package/@agile-ts/core",discordUrl:"https://discord.gg/T9GzreAwPH",stackoverflowUrl:"https://stackoverflow.com/questions/tagged/agile-ts",twitterUrl:"https://twitter.com/AgileFramework",redditUrl:"https://www.reddit.com/r/AgileTs/",version:"0.0.1",announcementBar:{id:"announcement",content:['\u2753 If you have any questions, don\'t hesitate joining our <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/T9GzreAwPH">Community Discord</a> \ufe0f','\ud83c\udf89 !\ufe0fIf you like AgileTs, give us a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/agile-ts/agile">GitHub</a>','\u23f0 If you want to stay update to date, follow use on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/AgileFramework">Twitter</a>'],random:!1,interval:1e5},liveCodeScope:{Agile:n,useAgile:s,useProxy:u,useEvent:g,useWatcher:c,AgileHOC:l,generateId:o,toast:d,Event:p}},b={title:"AgileTs",tagline:"AgileTs is a global, simple, spacy State and Logic Framework",url:"https://shipsywor.github.io",baseUrlIssueBanner:!1,baseUrl:"/test/",onBrokenLinks:"throw",favicon:"img/favicon.ico",organizationName:"shipsywor",projectName:"test",themes:["@docusaurus/theme-live-codeblock"],scripts:[{src:"https://snack.expo.io/embed.js",async:!0}],plugins:["docusaurus-plugin-sass"],customFields:Object.assign({},h),themeConfig:{hideableSidebar:!1,algolia:{apiKey:"6b7b98565bb82e16996fd185f378d618",indexName:"agile-ts"},colorMode:{defaultMode:"dark",disableSwitch:!1,respectPrefersColorScheme:!1},prism:{theme:r(7694),darkTheme:r(3618)},navbar:{title:" ",hideOnScroll:!0,logo:{alt:"My Site Logo",src:"/img/logo.svg"},items:[{label:"Get Started",position:"left",items:[{label:"Installation",to:"/docs/installation/"},{label:"React",to:"/docs/quick-start/react/"},{label:"Style Guide",to:"/docs/style-guide/"},{label:"Examples",to:"/docs/examples/"}]},{label:"Community",position:"left",items:[{label:"GitHub",href:h.githubUrl},{label:"Discord",href:h.discordUrl},{label:"Stack Overflow",href:h.stackoverflowUrl},{label:"Twitter",href:h.twitterUrl},{label:"Reddit",href:h.redditUrl}]},{label:"Documentation",position:"left",to:"docs/introduction/"}]},footer:{copyright:h.copyright,style:"dark",links:[{title:"Docs",items:[{label:"Get Started",to:"docs/introduction"},{label:"Examples",to:"docs/examples"},{label:"React",to:"docs/quick-start/react"}]},{title:"Community",items:[{label:"GitHub",href:h.githubUrl},{label:"Stack Overflow",href:h.stackoverflowUrl},{label:"Discord",href:h.discordUrl},{label:"Twitter",href:h.twitterUrl}]},{title:"More",items:[{label:"Privacy Policy",to:"/legal/privacy-notice"},{label:"Cookie Policy",to:"/legal/cookie-notice"},{label:"Blog",to:"/blog/"}]}]},googleAnalytics:{trackingID:"UA-189394644-1",anonymizeIP:!0}},presets:[["@docusaurus/preset-classic",{docs:{path:"docs",admonitions:{icons:"emoji"},sidebarPath:6679,editUrl:h.githubDocsUrl+"/tree/develop",showLastUpdateAuthor:!1,showLastUpdateTime:!0,remarkPlugins:[[r(7487),{sync:!0}]]},blog:{showReadingTime:!0,editUrl:h.githubDocsUrl+"/tree/develop"},theme:{customCss:[3878]}}]]};e.exports=Object.assign({},b)},6679:function(e){e.exports={docs:[{type:"category",label:"AgileTs",collapsed:!1,items:["main/introduction","main/installation","main/style-guide","main/frameworks","main/contributing"]},{type:"category",label:"Quick Start",collapsed:!1,items:["quick_start/react","quick_start/vue","quick_start/angular"]},{type:"category",label:"Packages",items:[{type:"category",label:"core",items:["packages/core/introduction","packages/core/installation",{type:"category",label:"Features",items:[{type:"category",label:"Agile Instance",items:["packages/core/features/agile-instance/introduction","packages/core/features/agile-instance/methods","packages/core/features/agile-instance/properties"]},{type:"category",label:"State",items:["packages/core/features/state/introduction","packages/core/features/state/properties","packages/core/features/state/methods"]},{type:"category",label:"Collection",items:["packages/core/features/collection/introduction","packages/core/features/collection/methods","packages/core/features/collection/properties",{type:"category",label:"Group",items:["packages/core/features/collection/group/introduction","packages/core/features/collection/group/methods","packages/core/features/collection/group/properties"]},{type:"category",label:"Selector",items:["packages/core/features/collection/selector/introduction","packages/core/features/collection/selector/methods","packages/core/features/collection/selector/properties"]}]},{type:"category",label:"Computed",items:["packages/core/features/computed/introduction","packages/core/features/computed/methods","packages/core/features/computed/properties"]},{type:"category",label:"Storage",items:["packages/core/features/storage/introduction","packages/core/features/storage/persisting-data"]},"packages/core/features/integration/introduction"]}]},{type:"category",label:"react",items:["packages/react/introduction","packages/react/installation",{type:"category",label:"Features",items:["packages/react/features/hooks","packages/react/features/agileHOC"]}]},{type:"category",label:"\u26a0\ufe0f WIP",items:[{type:"category",label:"\u26a0\ufe0f vue",items:["packages/vue/introduction","packages/vue/installation"]},{type:"category",label:"\u26a0\ufe0f api",items:["packages/api/introduction","packages/api/installation"]},{type:"category",label:"\u26a0\ufe0f event",items:["packages/event/introduction","packages/event/installation",{type:"category",label:"Features",items:["packages/event/features/hooks"]}]},{type:"category",label:"\u26a0\ufe0f multieditor",items:["packages/multieditor/introduction","packages/multieditor/installation"]}]}]},{type:"category",label:"Examples",items:["examples/introduction","examples/react/introduction","examples/react-native/introduction","examples/vue/introduction"]},"interfaces"]}},6660:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var a=r(7294),n=r(9583),o=r(5977),i="ButtonContainer_oPl2",l="GithubIcon_3htU",s=r(6010),c=function(e){var t=e.to,r=e.className,c=(0,o.k6)();return a.createElement("button",{className:(0,s.Z)(i,r),onClick:function(){t.startsWith("http")?window.open(t,"_blank"):c.push(t)}},a.createElement(n.hJX,{className:l}),a.createElement("div",null,"GITHUB"))}},947:function(){},6337:function(e,t,r){"use strict";r.d(t,{Z:function(){return R}});var a={};r.r(a),r.d(a,{ASTRONAUT_DARK:function(){return y},THEME:function(){return v},THEME_TYPE:function(){return k}});var n={};r.r(n),r.d(n,{assignDefaultCssProperties:function(){return C},mutateThemeCssProperties:function(){return w},toggleAstronautColor:function(){return E},toggleTheme:function(){return _}});var o={};r.r(o),r.d(o,{GET_GITHUB_STATS:function(){return U},GET_NPM_DOWNLOADS_IN_RANGE:function(){return I}});var i={};r.r(i),r.d(i,{GITHUB_FORKS:function(){return P},GITHUB_STARS:function(){return B},NPM_DOWNLOADS:function(){return L}});var l={};r.r(l),r.d(l,{getGithubStats:function(){return G},getNPMDownloads:function(){return O}});var s=r(4132),c=r(9582),u=r.n(c),m=r(1446),p=new s.Agile({logConfig:{active:(0,m.E)(),level:s.Logger.level.WARN}}).integrate(u()),g={black:"#18191a",blackLight:"#202026",blackLighter:"#2a2a32",white:"#ffffff",whiteDark:"#e6e6fd",whiteDarker:"#c5c5e9",purpleLightest:"#9C9ABF",purpleLighter:"#8481AF",purpleLight:"#7C79AA",purple:"#6C69A0",purpleDark:"#5F5C92",purpleDarker:"#5A578A",purpleDarkest:"#4A4872",orange:"#EE8030",green:"#00CCB1",greenDark:"#00B89F",red:"#FF6262",redDark:"#DE5B5B",yellow:"#FEEC4C",grayDarkest:"#262630",grayDark:"#3c3c4c"},d={12:".75rem",14:".875rem",16:"1rem",18:"1.125rem",20:"1.25rem",24:"1.5rem",28:"1.75rem",30:"1.875rem",32:"2rem",36:"2.25rem",40:"2.5rem",48:"3rem",56:"3.5rem",64:"4rem",72:"4.5rem"},f=Object.assign({},d,{small:d[14],body:d[16],large:d[20],display:d[48],displaySmall:d[24],displayLarge:d[72]}),h={themes:{dark:{fontSizes:f,primitiveColors:g,colors:{primary:g.purpleLight,primary_2:g.purpleLighter,on_primary:g.black,background:g.black,background_2:g.blackLight,background_3:g.blackLighter,on_background:g.white,on_background_2:g.purpleLightest,on_background_3:g.purpleLight,surface:g.grayDarkest,surface_2:g.grayDark,on_surface:g.white,on_surface_2:g.purpleLightest,on_surface_3:g.purpleLighter,success:g.green,on_success:g.black,error:g.red,on_error:g.black}},light:{fontSizes:f,primitiveColors:g,colors:{primary:g.purpleDark,primary_2:g.purpleDarker,on_primary:g.white,background:g.white,background_2:g.whiteDark,background_3:g.whiteDarker,on_background:g.black,on_background_2:g.purpleDarkest,on_background_3:g.purpleDarker,surface:g.whiteDark,surface_2:g.whiteDarker,on_surface:g.black,on_surface_2:g.purpleDarkest,on_surface_3:g.purpleDarker,success:g.greenDark,on_success:g.white,error:g.redDark,on_error:g.white}}},primitiveColors:g,fontSizes:f},b=r(1410),k=p.createState(b.themeConfig.colorMode.defaultMode).persist("theme").watch("mutateColor",(function(e){v.set(h.themes[e])})),v=p.createState(h.themes[k.value]).watch("mutateColor",(function(e){w(e)})),y=p.createState(!1),_=function(e){k.set(e?"dark":"light")},E=function(e){y.set(e)},w=function(e){document.documentElement.style.setProperty("--ifm-background-color",e.colors.background),document.documentElement.style.setProperty("--ifm-background-color-light",e.colors.background_2),document.documentElement.style.setProperty("--ifm-background-color-lighter",e.colors.background_3),document.documentElement.style.setProperty("--ifm-font-color-base",e.colors.on_background)},C=function(e){w(e),document.documentElement.style.setProperty("--ifm-color-primary",e.primitiveColors.purple),document.documentElement.style.setProperty("--ifm-color-primary-dark",e.primitiveColors.purpleDark),document.documentElement.style.setProperty("--ifm-color-primary-darker",e.primitiveColors.purpleDarker),document.documentElement.style.setProperty("--ifm-color-primary-darkest",e.primitiveColors.purpleDarkest),document.documentElement.style.setProperty("--ifm-color-primary-light",e.primitiveColors.purpleLight),document.documentElement.style.setProperty("--ifm-color-primary-lighter",e.primitiveColors.purpleLighter),document.documentElement.style.setProperty("--ifm-color-primary-lightest",e.primitiveColors.purpleLightest)},N=Object.assign({},n,a),D=r(2137),A=r(7757),T=r.n(A),S=r(5121),Z=new(r.n(S)())({timeout:1e4,options:{credentials:void 0}}),U=function(){var e=(0,D.Z)(T().mark((function e(){var t;return T().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.with({baseURL:"https://api.github.com"}).get("repos/agile-ts/agile");case 2:return t=e.sent,e.abrupt("return",{stars:t.data.stargazers_count||0,forks:t.data.forks_count||0});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=(0,D.Z)(T().mark((function e(t){var r;return T().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.with({baseURL:"https://api.npmjs.org"}).get("downloads/point/"+t+"/@agile-ts/core");case 2:return r=e.sent,e.abrupt("return",r.data.downloads||0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=p.createState(0).persist("npm-downloads"),B=p.createState(0).persist("github-stars"),P=p.createState(0).persist("github-forks"),x=function(e){return e.toISOString().slice(0,10)},F=function(e,t){for(var r,a=[];e<t;)a.push(x(e)+":"+x(((r=e).setMonth(r.getMonth()+1),r)));return a},G=function(){var e=(0,D.Z)(T().mark((function e(){var t;return T().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U();case 2:return t=e.sent,B.set(t.stars),P.set(t.forks),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=(0,D.Z)(T().mark((function e(t,r){var a,n,o,i;return T().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===t&&(t=new Date("2020-08-24")),void 0===r&&(r=new Date),a=F(t,r),n=a.pop(),e.next=6,Promise.all(a.map((function(e){return I(e)})).concat(I(n)));case 6:return o=e.sent,i=o.reduce((function(e,t){return e+t}),0),L.set(i),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),M=r(947),H={ui:N,stats:Object.assign({},l,i,o,M)};(0,s.globalBind)("__core__",H);var R=H},9499:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var a=r(7294),n=r(6010),o=r(944),i=r(4973),l="AnnouncementBar_2Au9",s="AnnouncementBarClose_2G6_",c="AnnouncementBarContent_3her",u="AnnouncementBarCloseable_34XP",m=r(2263);var p=function(){var e,t=(0,o.Z)(),r=t.isAnnouncementBarClosed,p=t.closeAnnouncementBar,g=(0,m.default)().siteConfig.customFields.announcementBar;if(!g)return null;var d,f,h,b=g.id,k=g.content,v=g.isCloseable,y=g.random,_=g.interval,E=Array.isArray(k),w=(0,a.useState)(E?k[0]:k),C=w[0],N=w[1];return!k||v&&r?null:(null!=_&&(d=function(){if(E)if(y&&E)N(k[Math.floor(Math.random()*k.length)]);else{var e=k.indexOf(C),t=e+1<k.length?e+1:0;N(k[t])}},f=_,h=(0,a.useRef)(),(0,a.useEffect)((function(){h.current=d}),[d]),(0,a.useEffect)((function(){if(null!==f){var e=setInterval((function(){return h.current()}),f);return function(){return clearInterval(e)}}}),[f])),a.createElement("div",{className:l,role:"banner"},a.createElement("div",{className:(0,n.Z)(c,(e={},e[u]=v,e)),dangerouslySetInnerHTML:{__html:C}}),v?a.createElement("button",{type:"button",className:s,onClick:p,"aria-label":(0,i.I)({id:b,message:"Close",description:"The ARIA label for close button of announcement bar"})},a.createElement("span",{"aria-hidden":"true"},"\xd7")):null))}},7453:function(e,t,r){"use strict";r.d(t,{Z:function(){return D}});var a=r(7294),n=r(6010),o=r(2263),i="Container_ZO7N",l="InnerContainer_kEOB",s="ContentContainer_Bd2W",c="FooterLeft_UU7Q",u="FooterRight_1NHD",m="BrandContainer_37NB",p="BrandImage_1lbV",g="BrandText_SiY7",d="Tagline_2AGk",f="GithubButton_1Y3L",h="SectionContainer_2QT6",b="LinkItemTitle_1y09",k="LinkItemContainer_2Lmc",v="BottomContainer_1let",y="CopyrightText_25Fq",_=r(6660),E=r(2122),w=r(4996),C="LinkText_1B0E",N=function(e){var t=e.href,r=e.to,n=e.label,o=(0,w.Z)(null!=t?t:"",{forcePrependBaseUrl:void 0}),i=(0,w.Z)(null!=r?r:"");return a.createElement("a",(0,E.Z)({className:C},null!=t?{href:o,rel:"noopener noreferrer",target:"_blank"}:{href:i},e),n)},D=function(){var e=(0,o.default)().siteConfig,t=e.themeConfig.footer,r=t.copyright,E=t.links,w=void 0===E?[]:E;return!!e.themeConfig.footer?a.createElement("footer",{className:(0,n.Z)("footer",i)},a.createElement("div",{className:l},a.createElement("div",{className:s},a.createElement("div",{className:c},a.createElement("div",{className:m},a.createElement("img",{className:p,alt:"AgileTs Logo",height:35,width:35,src:"../static/img/logo.svg",title:e.tagline}),a.createElement("div",{className:g},"AgileTs")),a.createElement("div",{className:d},e.tagline),a.createElement(_.Z,{className:f,to:e.customFields.githubUrl})),a.createElement("div",{className:u},w.map((function(e,t){var r;return a.createElement("div",{className:h,key:t},null!=e.title&&a.createElement("li",{className:b},e.title),null==(r=e.items)?void 0:r.map((function(e){var t;return a.createElement("ul",{className:k,key:null!=(t=e.href)?t:e.to},a.createElement(N,e))})))})))),a.createElement("div",{className:v},a.createElement("div",{className:y,dangerouslySetInnerHTML:{__html:r}})))):null}},426:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var a=r(7294),n=r(3759),o=r(8245),i=r(9163),l=r(6337),s=r(9582),c=r(671),u=r(3194),m=r(3946),p=r(9499),g=r(9542),d=r(7453),f=r(6010),h="Wrapper_ReNv",b=function(e){var t=e.children,r=e.noFooter,b=e.wrapperClassName;(0,o.Z)();var k=(0,s.useAgile)(l.Z.ui.THEME);return(0,a.useEffect)((function(){l.Z.ui.assignDefaultCssProperties(k)}),[]),a.createElement(i.f6,{theme:k},a.createElement(n.Z,null,a.createElement(c.ToastContainer,null),a.createElement(u.Z,e),a.createElement(m.Z,null),a.createElement(p.Z,null),a.createElement(g.Z,null),a.createElement("div",{className:(0,f.Z)(h,b)},t),!r&&a.createElement(d.Z,null)))}},9542:function(e,t,r){"use strict";r.d(t,{Z:function(){return S}});var a=r(2122),n=r(7294),o=r(6010),i=r(6173),l=r(9189),s=r(5350),c=r(1839),u=r(3783),m=r(4322),p=r(8030),g="InnerContainer_1wkI",d="BrandText_6CDH",f="displayOnlyInLargeViewport_2uzv",h=r(2263),b=r(4478),k=r(5977),v=r(6337),y="right",_="IconContainer_aWwG",E="Icon_3e04",w=r(9583),C=function(e){var t=e.className,r=(0,h.default)().siteConfig;return n.createElement("div",{className:(0,o.Z)(t,_)},n.createElement(w.hJX,{className:E,onClick:function(){window.open(r.customFields.githubUrl,"_blank")}}),n.createElement(w.j2d,{className:E,onClick:function(){window.open(r.customFields.discordUrl,"_blank")}}))},N=r(1262),D="ProgressbarContainer_2_mz",A="Progressbar_3cuE";var T=function(e){var t=(0,n.useState)("scrollbar2000")[0];return function(e){window.onscroll=function(){var t=(document.body.scrollTop||document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100;document.getElementById(e).style.width=t+"%"}}(t),n.createElement("div",{className:D},n.createElement("div",{className:A,id:t}))},S=function(){var e=(0,h.default)().siteConfig,t=e.themeConfig.navbar.items,r=(0,n.useState)(!1),_=r[0],E=r[1],w=(0,n.useState)(!1),D=w[0],A=w[1],S=(0,u.Z)(),Z=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:y)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:y)}))}}(t),U=Z.leftItems,I=Z.rightItems,L=(0,s.Z)(),B=L.isDarkTheme,P=L.setLightTheme,x=L.setDarkTheme,F=(0,k.k6)();(0,c.Z)(_);var G=(0,n.useCallback)((function(){E(!0)}),[]),O=(0,n.useCallback)((function(){E(!1)}),[]),M=(0,n.useCallback)((function(e){e.target.checked?(x(),v.Z.ui.toggleTheme(!0)):(P(),v.Z.ui.toggleTheme(!1))}),[P,x]);return(0,n.useEffect)((function(){S===u.D.desktop&&E(!1)}),[S]),n.createElement("nav",{className:(0,o.Z)("navbar","navbar--fixed-top",{"navbar-sidebar--show":_})},n.createElement("div",{className:(0,o.Z)("navbar__inner",g)},n.createElement("div",{className:"navbar__items"},n.createElement(p.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),n.createElement("a",{className:(0,o.Z)("navbar__brand",d),onClick:function(){return F.push("/")}},e.title),U.map((function(e,t){return n.createElement(m.Z,(0,a.Z)({},e,{key:t}))}))),n.createElement("div",{className:"navbar__items navbar__items--right"},I.map((function(e,t){return n.createElement(m.Z,(0,a.Z)({},e,{key:t}))})),n.createElement(C,{className:f}),n.createElement(l.Z,{"aria-label":"Dark mode toggle",checked:B,onChange:M}),n.createElement(i.Z,{handleSearchBarToggle:A,isSearchBarExpanded:D})),n.createElement(N.Z,null,(function(){return n.createElement(T,null)}))),null!=t&&0!==t.length&&n.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:G,onKeyDown:G},n.createElement(b.Z,null)),n.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:O}),n.createElement("div",{className:"navbar-sidebar"},n.createElement("div",{className:"navbar-sidebar__brand"},n.createElement("a",{className:(0,o.Z)("navbar__brand",d),href:"/"},e.title),n.createElement(C,null)),n.createElement("div",{className:"navbar-sidebar__items"},n.createElement("div",{className:"menu"},n.createElement("ul",{className:"menu__list"},t.map((function(e,t){return n.createElement(m.Z,(0,a.Z)({mobile:!0},e,{onClick:O,key:t}))})))))))}},1446:function(e,t,r){"use strict";function a(e){for(var t=e.length,r=null,a=0;0!==t;)a=Math.floor(Math.random()*t),r=e[t-=1],e[t]=e[a],e[a]=r;return e}function n(){return!1}r.d(t,{T:function(){return a},E:function(){return n}})}}]);