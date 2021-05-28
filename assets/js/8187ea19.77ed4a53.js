(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[7375],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},305:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i={id:"introduction",title:"Computed",sidebar_label:"Introduction",slug:"/core/computed"},l={unversionedId:"packages/core/features/computed/introduction",id:"packages/core/features/computed/introduction",isDocsHomePage:!1,title:"Computed",description:"A Computed is an extension of the State Class that computes its value from a provided function.",source:"@site/docs/packages/core/features/computed/Introduction.md",sourceDirName:"packages/core/features/computed",slug:"/core/computed",permalink:"/test/docs/core/computed",editUrl:"https://github.com/agile-ts/documentation/tree/develop/docs/packages/core/features/computed/Introduction.md",version:"current",lastUpdatedAt:1619282145,formattedLastUpdatedAt:"4/25/2021",sidebar_label:"Introduction",frontMatter:{id:"introduction",title:"Computed",sidebar_label:"Introduction",slug:"/core/computed"},sidebar:"docs",previous:{title:"Properties",permalink:"/test/docs/core/collection/selector/properties"},next:{title:"Methods",permalink:"/test/docs/core/computed/methods"}},p=[{value:"\ud83d\udd28 Use case",id:"-use-case",children:[]},{value:"\u26f3\ufe0f Sandbox",id:"\ufe0f-sandbox",children:[]},{value:"\ud83d\udced Props",id:"-props",children:[{value:"<code>computedFunction</code>",id:"computedfunction",children:[]},{value:"<code>deps</code>",id:"deps",children:[]}]},{value:"<code>config</code>",id:"config",children:[]},{value:"\ud83d\udfe6 Typescript",id:"\ud83d\udfe6-typescript",children:[]}],s={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"Computed")," is an extension of the ",(0,o.kt)("inlineCode",{parentName:"p"},"State Class")," that computes its value from a provided function.\nIt automatically caches the computed value to avoid unnecessary recomputations.\nWe instantiate a Computed with help of an instantiated ",(0,o.kt)("a",{parentName:"p",href:"/test/docs/core/agile-instance"},"Agile Instance")," often called ",(0,o.kt)("inlineCode",{parentName:"p"},"App"),".\nBy doing so, the Computed is automatically bound to the Agile Instance it was created from."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const MY_COMPUTED = App.createComputed(() => {\n    return `My name is '${MY_NAME.value}' and I am ${MY_AGE.value} years old.`;\n});\n")),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"Computed")," will magically track used dependencies (such as ",(0,o.kt)("a",{parentName:"p",href:"/test/docs/introduction/#agile-sub-instance"},"Agile Sub Instances")," like ",(0,o.kt)("a",{parentName:"p",href:"/test/docs/core/state"},"States")," or ",(0,o.kt)("a",{parentName:"p",href:"/test/docs/core/collection"},"Collections"),")\nand recomputes when any of its dependencies mutates. For instance, in the above example, it would recompute when the ",(0,o.kt)("inlineCode",{parentName:"p"},"MY_NAME")," value changes from 'jeff' to 'hans'."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"MY_COMPUTED.value; // Returns \"My name is 'jeff' and I am 10 years old\"\nMY_NAME.set('hans');\nMY_COMPUTED.value; // Returns \"My name is 'hans' and I am 10 years old\"\n")),(0,o.kt)("p",null,"A Computed is an extension of the ",(0,o.kt)("inlineCode",{parentName:"p"},"State Class")," and offers the same powerful functionalities."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'MY_COMPUTED.undo(); // Undo latest change\nMY_COMPUTED.is("Hello World"); // Check if Compute has a specific Value\n')),(0,o.kt)("p",null,"If you want to find out more about the Computed's specific methods, check out the ",(0,o.kt)("a",{parentName:"p",href:"/test/docs/core/computed/methods"},"Methods")," Section.\nMost methods we use to modify, mutate and access the Computed are chainable."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"MY_COMPUTED.undo().recompute().watch(() => {}).reset().type(String).undo();\n")),(0,o.kt)("h2",{id:"-use-case"},"\ud83d\udd28 Use case"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"Computed State")," is useful whenever we need a State that is computed depending on other States."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const IS_AUTHENTICATED = App.Computed(() => {\n    return TOKEN.exists && USER_ID.exists && EXPIRATION_TIME.value > 0;\n});\n")),(0,o.kt)("p",null,"This is the case for our ",(0,o.kt)("inlineCode",{parentName:"p"},"IS_AUTHENTICATED")," State, which depends on several other States determining whether the current user is authenticated.\nThese include the ",(0,o.kt)("inlineCode",{parentName:"p"},"TOKEN"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"CURRENT_USER")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"EXPIRATION_TIME"),".\nIf, for instance, the ",(0,o.kt)("inlineCode",{parentName:"p"},"USER_ID")," value changes, the Computed Class will recompute the ",(0,o.kt)("inlineCode",{parentName:"p"},"IS_AUTHENTICATED")," value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"IS_AUTHENTICATE.value; // Returns 'true'\nUSER_ID.set(undefined);\nIS_AUTHENTICATE.value; // Returns 'false'\n")),(0,o.kt)("h2",{id:"\ufe0f-sandbox"},"\u26f3\ufe0f Sandbox"),(0,o.kt)("p",null,"Test the Computed Class yourself. It's only one click away. Just select your preferred Framework below."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://codesandbox.io/s/agilets-first-computed-kisgr"},"React")),(0,o.kt)("li",{parentName:"ul"},"Vue (coming soon)"),(0,o.kt)("li",{parentName:"ul"},"Angular (coming soon)")),(0,o.kt)("h2",{id:"-props"},"\ud83d\udced Props"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"App.createComputed(computedFunction, deps);\n// or\nApp.createComputed(computedFunction, config, deps);\n")),(0,o.kt)("h3",{id:"computedfunction"},(0,o.kt)("inlineCode",{parentName:"h3"},"computedFunction")),(0,o.kt)("p",null,"Method used to compute the ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," of the Computed Class."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{1}","{1}":!0},"const MY_COMPUTED = App.createComputed(() => 1 + 1);\nMY_COMPUTED.value; // Returns '2'\n")),(0,o.kt)("p",null,"This function will be called on each dependency mutation.\nDependencies can for example be ",(0,o.kt)("a",{parentName:"p",href:"/test/docs/core/state"},"States")," or ",(0,o.kt)("a",{parentName:"p",href:"/test/docs/core/collection"},"Collections"),".\nIn the above code snippet ",(0,o.kt)("inlineCode",{parentName:"p"},"MY_COMPUTED")," is independent,\nbut in the blow example it depends on the ",(0,o.kt)("inlineCode",{parentName:"p"},"CURRENT_USER_ID")," State and ",(0,o.kt)("inlineCode",{parentName:"p"},"USERS")," Collection."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const MY_COMPUTED = App.createComputed(() => {\n    const user = USERS.getItemValue(CURRENT_USER_ID.value);\n    return `My name is '${user?.name} and I am ${user?.age} years old.`;\n});\nMY_COMPUTED.value; // Returns \"My name is 'hans' and I am 10 years old.\"\nUSERS.update(CURRENT_USER_ID.value, {name: 'jeff'})\nMY_COMPUTED.value; // Returns \"My name is 'jeff' and I am 10 years old.\" \n")),(0,o.kt)("h3",{id:"deps"},(0,o.kt)("inlineCode",{parentName:"h3"},"deps")),(0,o.kt)("p",null,"In order not to rely 100% on the automatic detection of dependencies,\nwe can pass an optional array of hard coded dependencies into the Computed Class."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{3}","{3}":!0},"const MY_COMPUTED = App.createComputed(() => {\n    return `My name is '${MY_NAME.value}' and I am ${MY_AGE.value} years old.`;\n}, [MY_NAME, MY_AGE]);\nMY_COMPUTED.value; // Returns \"My name is 'hans' and I am 10 years old.\" \nMY_NAME.set('jeff');\nMY_COMPUTED.value; // Returns \"My name is 'jeff' and I am 10 years old.\"\n")),(0,o.kt)("p",null,"In most cases, it isn't necessary to provide any hard-coded dependency.\nHowever, it might occur that the Computed Class fails to autodetect a particular dependency.\nYou can check if all dependencies got correctly noticed by giving each used ",(0,o.kt)("a",{parentName:"p",href:"/test/docs/introduction/#agile-sub-instance"},"Agile Sub Instance")," a unique key\nand reviewing the ",(0,o.kt)("inlineCode",{parentName:"p"},"deps")," array."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"MY_COMPUTED.deps; // Returns '[Observer('myName'), Observer('myAge')]'\n")),(0,o.kt)("h2",{id:"config"},(0,o.kt)("inlineCode",{parentName:"h2"},"config")),(0,o.kt)("p",null,"Beside the computed function and deps array a ",(0,o.kt)("inlineCode",{parentName:"p"},"Computed")," takes an optional configuration object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'App.createComputed(() => {}, {\n    key: "myKey",\n    dependents: [MY_STATE_2]\n});\n')),(0,o.kt)("p",null,"Here is a Typescript Interface for quick reference. However,\neach property is explained in more detail below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export interface StateConfigInterface {\n    key?: StateKey;\n    dependents?: Array<Observer>;\n    isPlaceholder?: boolean;\n}\n")),(0,o.kt)("br",null),(0,o.kt)("h4",{id:"key"},(0,o.kt)("inlineCode",{parentName:"h4"},"key")),(0,o.kt)("p",null,"The optional property ",(0,o.kt)("inlineCode",{parentName:"p"},"key/name")," should be a unique ",(0,o.kt)("inlineCode",{parentName:"p"},"string/number")," to identify the Computed later."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'App.createComputed(() => {}, {\n    key: "myKey"\n});\n')),(0,o.kt)("p",null,"We recommend giving each Computed a unique ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," since it has only advantages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"helps us during debug sessions"),(0,o.kt)("li",{parentName:"ul"},"makes it easier to identify the Computed"),(0,o.kt)("li",{parentName:"ul"},"no need for separate persist Key")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string \\| number")),(0,o.kt)("td",{parentName:"tr",align:null},"undefined"),(0,o.kt)("td",{parentName:"tr",align:null},"No")))),(0,o.kt)("br",null),(0,o.kt)("h4",{id:"dependents"},(0,o.kt)("inlineCode",{parentName:"h4"},"dependents")),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},"\ud83d\udd25"),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This property is mainly thought for the internal use."))),(0,o.kt)("p",null,"Specifies which States depend on this Computed Class."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"App.createComputed(() => {}, {\n    dependents: [MY_STATE_2]\n});\n")),(0,o.kt)("p",null,"So if this Computed Class mutes and is ingested into the ",(0,o.kt)("inlineCode",{parentName:"p"},"runtime"),",\nthe depending States are ingested into the ",(0,o.kt)("inlineCode",{parentName:"p"},"runtime")," too."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Array<Observer>")),(0,o.kt)("td",{parentName:"tr",align:null},"[]"),(0,o.kt)("td",{parentName:"tr",align:null},"No")))),(0,o.kt)("br",null),(0,o.kt)("h4",{id:"isplaceholder"},(0,o.kt)("inlineCode",{parentName:"h4"},"isPlaceholder")),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},"\ud83d\udd25"),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This property is mainly thought for the internal use."))),(0,o.kt)("p",null,"Defines whether the Computed is a ",(0,o.kt)("inlineCode",{parentName:"p"},"placeholder"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const MY_COMPUTED = App.createComputed(() => {}, {\n    isPlaceholder: true\n});\n\nMY_COMPUTED.exists(); // false\n")),(0,o.kt)("p",null,"Computed Classes are, for example, ",(0,o.kt)("inlineCode",{parentName:"p"},"placeholder")," when AgileTs needs to hold a reference to them,\neven though they aren't instantiated yet."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null},"No")))),(0,o.kt)("h2",{id:"\ud83d\udfe6-typescript"},"\ud83d\udfe6 Typescript"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Computed Class")," is almost 100% typesafe and takes an optional generic type for type safety of its ",(0,o.kt)("inlineCode",{parentName:"p"},"value"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{1}","{1}":!0},"const MY_COMPUTED = App.createComputed<string>(() => {\n    return 'Now Compute Function has to return String!';\n});\n")))}d.isMDXComponent=!0}}]);