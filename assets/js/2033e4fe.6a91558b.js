"use strict";(self.webpackChunkwordweaver_docs=self.webpackChunkwordweaver_docs||[]).push([[573],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),m=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=m(n),d=r,h=p["".concat(i,".").concat(d)]||p[d]||c[d]||l;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var m=2;m<l;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6407:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return p}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],s={id:"ww-ui-style",title:"Customize the style of your WordWeaver",sidebar_label:"Styling your WordWeaver"},i=void 0,m={unversionedId:"ww-ui-style",id:"ww-ui-style",title:"Customize the style of your WordWeaver",description:"This guide assumes you have followed the steps for installing WordWeaver. It also assumes some familiarity with Sass*",source:"@site/docs/ww-ui-style.md",sourceDirName:".",slug:"/ww-ui-style",permalink:"/docs/ww-ui-style",draft:!1,editUrl:"https://github.com/roedoejet/wordweaver-docs/edit/main/docs/ww-ui-style.md",tags:[],version:"current",frontMatter:{id:"ww-ui-style",title:"Customize the style of your WordWeaver",sidebar_label:"Styling your WordWeaver"},sidebar:"mainSidebar",previous:{title:"Creating your WordWeaver",permalink:"/docs/wwui-custom-intro"},next:{title:"Translating your WordWeaver",permalink:"/docs/ww-i18n"}},u={},p=[{value:"Constraining available themes",id:"constraining-available-themes",level:2},{value:"Default themes",id:"default-themes",level:2},{value:"Creating a new theme",id:"creating-a-new-theme",level:2},{value:"Custom Palettes",id:"custom-palettes",level:3},{value:"Custom Themes",id:"custom-themes",level:3}],c={toc:p},d="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"*",(0,l.kt)("em",{parentName:"p"},"This guide assumes you have followed the steps for ",(0,l.kt)("a",{parentName:"em",href:"/docs/installation"},"installing")," WordWeaver. It also assumes some familiarity with ",(0,l.kt)("a",{parentName:"em",href:"https://sass-lang.com/"},"Sass"))),(0,l.kt)("p",null,"WordWeaver comes with quite a few preset themes out of the box. The default available themes (seen below) are defined in your ",(0,l.kt)("a",{parentName:"p",href:"/docs/wwui-custom-intro"},"WordWeaver configuration")," (",(0,l.kt)("inlineCode",{parentName:"p"},"projects/word-weaver/src/config/config.ts"),")"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'export const THEMES: Theme[] = [\n  {\n    value: "DEFAULT-THEME",\n    label: marker("ww.settings.themes.blue")\n  },\n  {\n    value: "LIGHT-THEME",\n    label: marker("ww.settings.themes.light")\n  },\n  {\n    value: "DARK-THEME",\n    label: marker("ww.settings.themes.dark")\n  },\n  {\n    value: "PURPLE-THEME--LIGHT",\n    label: marker("ww.settings.themes.purple-light")\n  },\n  {\n    value: "PURPLE-THEME--DARK",\n    label: marker("ww.settings.themes.purple-dark")\n  },\n  {\n    value: "PURPLE-BLUE-THEME--LIGHT",\n    label: marker("ww.settings.themes.purple-blue-light")\n  },\n  {\n    value: "PURPLE-BLUE-THEME--DARK",\n    label: marker("ww.settings.themes.purple-blue-dark")\n  },\n  {\n    value: "PURPLE-GOLD-THEME--LIGHT",\n    label: marker("ww.settings.themes.purple-gold-light")\n  },\n  {\n    value: "PURPLE-GOLD-THEME--DARK",\n    label: marker("ww.settings.themes.purple-gold-dark")\n  }\n];\n')),(0,l.kt)("h2",{id:"constraining-available-themes"},"Constraining available themes"),(0,l.kt)("p",null,"To constrain the list of available themes from your users, just remove them from your configuration. For example to remove everything except for the default theme and the dark theme you would edit your configuration file (",(0,l.kt)("inlineCode",{parentName:"p"},"projects/word-weaver/src/config/config.ts"),") as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'export const THEMES: Theme[] = [\n  {\n    value: "DEFAULT-THEME",\n    label: marker("ww.settings.themes.blue")\n  },\n  {\n    value: "DARK-THEME",\n    label: marker("ww.settings.themes.dark")\n  }\n];\n')),(0,l.kt)("h2",{id:"default-themes"},"Default themes"),(0,l.kt)("p",null,"By following our guides on configuring your WordWeaver, you can ","[constrain what themes are available to your users]",", and also set the ",(0,l.kt)("a",{parentName:"p",href:"/docs/wwui-custom-intro#theme"},"default theme")," and default night theme."),(0,l.kt)("h2",{id:"creating-a-new-theme"},"Creating a new theme"),(0,l.kt)("p",null,"Themes are built around matching two basic colours: a ",(0,l.kt)("inlineCode",{parentName:"p"},"$primary")," colour and an ",(0,l.kt)("inlineCode",{parentName:"p"},"$accent"),".\nThese colours are actually ",(0,l.kt)("a",{parentName:"p",href:"https://material.io/design/color/the-color-system.html#color-usage-and-palettes"},"material design colour palettes"),". "),(0,l.kt)("h3",{id:"custom-palettes"},"Custom Palettes"),(0,l.kt)("p",null,"You can either use Angular Material's built-in palettes, or you can make your own. Making your own requires creating an scss variable map for your colour palette.\nYou can either do that manually or provide a single colour and use a generator. The generator we recommend is ",(0,l.kt)("a",{parentName:"p",href:"http://mcg.mbitson.com/"},"this one"),".\nYou just select the colour and download the code with output format ",(0,l.kt)("inlineCode",{parentName:"p"},"ANGULAR JS 2 (MATERIAL 2)"),".\nThen, your palette can be added to ",(0,l.kt)("inlineCode",{parentName:"p"},"projects/word-weaver/src/themes/palettes.scss"),". "),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Make sure your variable for your scss map is not already defined")),(0,l.kt)("h3",{id:"custom-themes"},"Custom Themes"),(0,l.kt)("p",null,"To create a new theme:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Create a new theme file in ",(0,l.kt)("inlineCode",{parentName:"li"},"projects/word-weaver/src/themes/")),(0,l.kt)("li",{parentName:"ol"},"Define your ",(0,l.kt)("inlineCode",{parentName:"li"},"primary"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"accent"),", and ",(0,l.kt)("inlineCode",{parentName:"li"},"warn")," palettes. You can use material palettes (examples ",(0,l.kt)("inlineCode",{parentName:"li"},"$mat-deep-purple")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"mat-amber")," below) or your own custom ones (example ",(0,l.kt)("inlineCode",{parentName:"li"},"$my-custom-palette")," below):")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scss"},'@import "palettes.scss";\n\n$ww-example-theme-primary: mat-palette($mat-deep-purple, 400);\n$ww-example-theme-accent: mat-palette($mat-amber, 600);\n$ww-example-theme-warn: mat-palette($my-custom-palette, 200);\n\n')),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Then, use the ",(0,l.kt)("inlineCode",{parentName:"li"},"mat-light-theme")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"mat-dark-theme")," wrapper functions and define your themes.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scss"},"$ww-example-theme--light: mat-light-theme(\n  $ww-example-theme-primary,\n  $ww-example-theme-accent,\n  $ww-example-theme-warn\n);\n\n$ww-example-theme--dark: mat-dark-theme(\n  $ww-example-theme-primary,\n  $ww-example-theme-accent,\n  $ww-example-theme-warn\n);\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Add your theme to the main style sheet by adding it to ",(0,l.kt)("inlineCode",{parentName:"li"},"projects/word-weaver/src/styles.scss"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scss",metastring:"{7-11}","{7-11}":!0},".purple-gold-theme--dark {\n  @include angular-material-theme($ww-purple-gold-theme--dark);\n  @include custom-components-theme-common($ww-purple-gold-theme--dark);\n  @include custom-components-theme-dark($ww-purple-gold-theme--dark);\n}\n\n.example-theme--dark {\n  @include angular-material-theme($ww-example-theme--dark);\n  @include custom-components-theme-common($ww-example-theme--dark);\n  @include custom-components-theme-dark($ww-example-theme--dark);\n}\n")),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"Add your theme to the ",(0,l.kt)("inlineCode",{parentName:"li"},"THEMES")," variable in ",(0,l.kt)("a",{parentName:"li",href:"/docs/wwui-custom-intro"},"your configuration"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{38-45}","{38-45}":!0},'export const THEMES: Theme[] = [\n  {\n    value: "DEFAULT-THEME",\n    label: marker("ww.settings.themes.blue")\n  },\n  {\n    value: "LIGHT-THEME",\n    label: marker("ww.settings.themes.light")\n  },\n  {\n    value: "DARK-THEME",\n    label: marker("ww.settings.themes.dark")\n  },\n  {\n    value: "PURPLE-THEME--LIGHT",\n    label: marker("ww.settings.themes.purple-light")\n  },\n  {\n    value: "PURPLE-THEME--DARK",\n    label: marker("ww.settings.themes.purple-dark")\n  },\n  {\n    value: "PURPLE-BLUE-THEME--LIGHT",\n    label: marker("ww.settings.themes.purple-blue-light")\n  },\n  {\n    value: "PURPLE-BLUE-THEME--DARK",\n    label: marker("ww.settings.themes.purple-blue-dark")\n  },\n  {\n    value: "PURPLE-GOLD-THEME--LIGHT",\n    label: marker("ww.settings.themes.purple-gold-light")\n  },\n  {\n    value: "PURPLE-GOLD-THEME--DARK",\n    label: marker("ww.settings.themes.purple-gold-dark")\n  },\n  {\n    value: "EXAMPLE-THEME--LIGHT",\n    label: marker("ww.settings.themes.example-light")\n  },\n  {\n    value: "EXAMPLE-THEME--DARK",\n    label: marker("ww.settings.themes.example-dark")\n  }\n];\n')),(0,l.kt)("p",null,"That's it! You've added your new theme. Congratulations!"))}h.isMDXComponent=!0}}]);