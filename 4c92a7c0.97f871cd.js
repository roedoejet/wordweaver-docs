(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{147:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(2),o=r(9),a=(r(0),r(173)),i={id:"firststeps",title:"Taking your first steps with WordWeaver",sidebar_label:"First Steps"},c={id:"firststeps",title:"Taking your first steps with WordWeaver",description:"Going through your first steps with WordWeaver assumes you've first installed the necessary requirements.",source:"@site/docs/ww-firststeps.md",permalink:"/docs/firststeps",editUrl:"https://github.com/roedoejet/wordweaver-docs/edit/master/docs/ww-firststeps.md",sidebar_label:"First Steps",sidebar:"someSidebar",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"Configuring your WordWeaver",permalink:"/docs/ww-custom-intro"}},s=[{value:"WordWeaver",id:"wordweaver",children:[]},{value:"WordWeaver-UI",id:"wordweaver-ui",children:[]}],u={rightToc:s};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Going through your first steps with WordWeaver assumes you've first ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/installation"}),"installed")," the necessary requirements."),Object(a.b)("p",null,"Each WordWeaver instance will have two main parts, the main ",Object(a.b)("em",{parentName:"p"},"WordWeaver")," API, and the user interface, ",Object(a.b)("em",{parentName:"p"},"WordWeaver-UI"),". Each guide will make note of which part it is talking about."),Object(a.b)("h3",{id:"wordweaver"},"WordWeaver"),Object(a.b)("p",null,"In order to run WordWeaver using the stock data, first ",Object(a.b)("inlineCode",{parentName:"p"},"cd wordweaver")," and then run ",Object(a.b)("inlineCode",{parentName:"p"},"docker-compose up"),". This will start a docker container with the WordWeaver API backend."),Object(a.b)("p",null,"To customize your WordWeaver, please follow the instructions ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"ww-customization.md"}),"on configuring your WordWeaver"),"."),Object(a.b)("h3",{id:"wordweaver-ui"},"WordWeaver-UI"),Object(a.b)("p",null,"Then, you should be able to go to ",Object(a.b)("inlineCode",{parentName:"p"},"localhost/docs")," in your browser and look at the documentation for your WordWeaver API."),Object(a.b)("p",null,"In order to run the WordWeaver-UI, first ",Object(a.b)("inlineCode",{parentName:"p"},"cd wordweaver-UI")," and then run ",Object(a.b)("inlineCode",{parentName:"p"},"npm start"),". This will build the site using the development configuration. You should now be able to go to ",Object(a.b)("inlineCode",{parentName:"p"},"localhost:4200")," and view your instance of WordWeaver."),Object(a.b)("p",null,"To customize your WordWeaver-UI, please follow the instructions ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/wwui-custom-intro"}),"on configuring your WordWeaver-UI")))}l.isMDXComponent=!0},173:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),b=n,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return r?o.a.createElement(f,c(c({ref:t},u),{},{components:r})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);