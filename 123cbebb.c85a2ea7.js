(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{103:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return c}));var n=a(2),r=(a(0),a(139));const l={id:"gramble-intro",title:"Gramble & Language Modelling",sidebar_label:"Language Modelling with Gramble"},b={id:"gramble-intro",title:"Gramble & Language Modelling",description:"This page assumes you are comfortable with Git, Command Line, and NPM). You must have all of these installed on your machine.",source:"@site/docs/gramble-intro.md",permalink:"/docs/gramble-intro",editUrl:"https://github.com/roedoejet/wordweaver-docs/edit/master/docs/gramble-intro.md",sidebar_label:"Language Modelling with Gramble",sidebar:"someSidebar",previous:{title:"Configuring your WordWeaver-UI",permalink:"/docs/wwui-custom-intro"},next:{title:"Styling your WordWeaver",permalink:"/docs/ww-ui-style"}},o=[{value:"What is Gramble?",id:"what-is-gramble",children:[]},{value:"Adding your gramble model to WordWeaver",id:"adding-your-gramble-model-to-wordweaver",children:[{value:"Installation",id:"installation",children:[]},{value:"Add/edit WordWeaver keywords in your Gramble model",id:"addedit-wordweaver-keywords-in-your-gramble-model",children:[]},{value:"Update your WordWeaver configuration",id:"update-your-wordweaver-configuration",children:[]},{value:"Exporting your conjugations",id:"exporting-your-conjugations",children:[]},{value:"Initialize your WordWeaver",id:"initialize-your-wordweaver",children:[]}]}],i={rightToc:o};function c({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"This page assumes you are comfortable with ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://en.wikipedia.org/wiki/Git"}),"Git"),", ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://en.wikipedia.org/wiki/Command-line_interface"}),"Command Line"),", and ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://en.wikipedia.org/wiki/Npm_(software)"}),"NPM"),". You must have all of these installed on your machine.")),Object(r.b)("h2",{id:"what-is-gramble"},"What is Gramble?"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/littell/gramble_ts"}),"Gramble")," is a TypeScript library, Google Sheets Add-On and command line interface for writing your grammar as a spreadsheet. It is the ",Object(r.b)("strong",{parentName:"p"},"recommended")," solution for most WordWeavers."),Object(r.b)("h2",{id:"adding-your-gramble-model-to-wordweaver"},"Adding your gramble model to WordWeaver"),Object(r.b)("p",null,"Assuming you have made your gramble model and exported it to CSV, you can generate the files necessary for initializing your WordWeaver with the following steps."),Object(r.b)("h3",{id:"installation"},"Installation"),Object(r.b)("p",null,"You must have the Gramble CLI installed. Install it with npm: ",Object(r.b)("inlineCode",{parentName:"p"},"npm install -g @gramble/cli")),Object(r.b)("h3",{id:"addedit-wordweaver-keywords-in-your-gramble-model"},"Add/edit WordWeaver keywords in your Gramble model"),Object(r.b)("p",null,"You must ensure that all relevant special keywords for WordWeaver are included in your Gramble model. By default, this includes verb roots (",Object(r.b)("inlineCode",{parentName:"p"},"root"),"), pronouns (",Object(r.b)("inlineCode",{parentName:"p"},"agent")," & ",Object(r.b)("inlineCode",{parentName:"p"},"patient"),"), and other options (",Object(r.b)("inlineCode",{parentName:"p"},"option"),"). "),Object(r.b)("p",null,"Have a look at the example verbs in a hypothetical Gramble model below - we will illustrate the instructions referring to this example."),Object(r.b)("h5",{id:"example-verbs"},"Example Verbs"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"text"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"gloss"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"gloss"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ayaa"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"be there"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"VAI")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"pashikoo"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"get up"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"VAI")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"paahpi"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"laugh"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"VAI")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ayaa"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"have"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"VAIT")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"oshiihtaa"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"make"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"VAIT")))),Object(r.b)("p",null,"Sometimes, this is as simple as just adding the keyword to a pre-existing column header as in:"),Object(r.b)("h5",{id:"example-verbs-with-added-root-keyword"},"Example Verbs with added root keyword"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"text, ",Object(r.b)("em",{parentName:"th"},"root")),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"gloss"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"gloss"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ayaa"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"be there"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"VAI")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"pashikoo"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"get up"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"VAI")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"paahpi"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"laugh"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"VAI")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ayaa"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"have"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"VAIT")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"oshiihtaa"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"make"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"VAIT")))),Object(r.b)("p",null,"Note that the values here must be unique and there is a conflict here as 'ayaa' occurs twice. In this case, you must create a separate unique identifier:"),Object(r.b)("h5",{id:"example-verbs-with-added-root-keyword-column"},"Example Verbs with added root keyword column"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"text"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"gloss"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"gloss"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"th"},"root")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ayaa"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"be there"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"VAI"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ayaa-vai")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"pashikoo"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"get up"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"VAI"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"pahikoo-vai")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"paahpi"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"laugh"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"VAI"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"paahpi-vai")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ayaa"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"have"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"VAIT"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ayaa-vait")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"oshiihtaa"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"make"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"VAIT"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"oshiihtaa-vait")))),Object(r.b)("h3",{id:"update-your-wordweaver-configuration"},"Update your WordWeaver configuration"),Object(r.b)("p",null,"Once you have updated your Gramble language model to include all necessary keywords, you can make any necessary changes to your ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/ww-custom-intro"}),"WordWeaver Configuration"),". You must also add ",Object(r.b)("inlineCode",{parentName:"p"},"json")," files with your all of your verb roots, pronouns and options. So, the 'Example Verbs' table above might become:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'[\n   {\n        "gloss": "be there (vii)",\n        "tag": "ashtee-vii"\n    },\n    {\n        "gloss": "melt",\n        "tag": "tihkitee-vii"\n    },\n    {\n        "gloss": "be there (vai)",\n        "tag": "ayaa-vai"\n    },\n    {\n        "gloss": "get up",\n        "tag": "pashikoo-vai"\n    },\n    {\n        "gloss": "laugh",\n        "tag": "paahpi-vai"\n    },\n    {\n        "gloss": "have",\n        "tag": "ayaa-vait"\n    },\n    {\n        "gloss": "make",\n        "tag": "oshiihtaa-vait"\n    }\n]\n')),Object(r.b)("p",null,"You will need to do this for all possible verb roots, pronouns and options."),Object(r.b)("h3",{id:"exporting-your-conjugations"},"Exporting your conjugations"),Object(r.b)("p",null,"Export your conjugations: ",Object(r.b)("inlineCode",{parentName:"p"},"gramble generate <yourGrambleFile.csv> --wordweaver > conjugations.json")),Object(r.b)("h3",{id:"initialize-your-wordweaver"},"Initialize your WordWeaver"),Object(r.b)("p",null,"Follow the guide to setting up a new language (",Object(r.b)("em",{parentName:"p"},"...guide forthcoming..."),") by moving all of your new files (",Object(r.b)("inlineCode",{parentName:"p"},"verbs.json"),", ",Object(r.b)("inlineCode",{parentName:"p"},"pronouns.json"),", ",Object(r.b)("inlineCode",{parentName:"p"},"options.json")," and ",Object(r.b)("inlineCode",{parentName:"p"},"conjugations.json"),") into your language's folder in the WordWeaver folder. Set the ",Object(r.b)("inlineCode",{parentName:"p"},"WWLANG")," variable in ",Object(r.b)("inlineCode",{parentName:"p"},".env")," to your language's ISO code, or alternatively set it manually in your environment.\nThen, ensure your data matches your type definitions by running ",Object(r.b)("inlineCode",{parentName:"p"},"wordweaver validate-data"),". If all is well, you can ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/firststeps"}),"spin up your new WordWeaver "),". "),Object(r.b)("p",null,"Congratulations, you're all done!"))}c.isMDXComponent=!0},139:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(a),m=n,j=p["".concat(b,".").concat(m)]||p[m]||u[m]||l;return a?r.a.createElement(j,o(o({ref:t},c),{},{components:a})):r.a.createElement(j,o({ref:t},c))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,b[1]=o;for(var c=2;c<l;c++)b[c]=a[c];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);