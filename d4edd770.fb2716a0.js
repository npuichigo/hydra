(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{220:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return s}));var a=t(2),i=t(10),r=(t(0),t(246)),o={id:"command_line_overrides",title:"Command line overrides"},l={id:"advanced/command_line_overrides",isDocsHomePage:!1,title:"Command line overrides",description:"You can manipulate your configuration via the command line. This includes:",source:"@site/docs/advanced/command_line_overrides.md",permalink:"/docs/next/advanced/command_line_overrides",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/advanced/command_line_overrides.md",version:"next",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1591643677,sidebar:"docs",previous:{title:"Overriding packages",permalink:"/docs/next/advanced/overriding_packages"},next:{title:"Config Search Path",permalink:"/docs/next/advanced/search_path"},latestVersionMainDocPermalink:"/docs/intro"},c=[{value:"Config values",id:"config-values",children:[]},{value:"Defaults list",id:"defaults-list",children:[]}],d={rightToc:c};function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"You can manipulate your configuration via the command line. This includes:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Manipulation of the defaults list"),Object(r.b)("li",{parentName:"ul"},"Manipulation of the resulting config object")),Object(r.b)("p",null,"Both of those looks similar in the command line.\nCommand line overrides matching a Config group are manipulating the Defaults List; The rest are manipulating the resulting config object."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text",metastring:'title="Defaults List overrides"',title:'"Defaults',List:!0,'overrides"':!0}),"PACKAGE   : PATH[.PATH]*\nPATH      : [A-Za-z0-9_-]+ \nOPTION    : .*\n\n# Changing an existing item\nGROUP[@SRC_PKG[:DEST_PKG]][=OPTION]\n\n# Appending a new item\n+GROUP@[SRC_PKG]=OPTION\n\n# Deleting an existing item\n~GROUP[@PACKAGE][=OPTION]\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text",metastring:'title="Config overrides"',title:'"Config','overrides"':!0}),"KEY=VALUE\nKEY   : .+\nVALUE : .+\n\n# Changing an existing item\nKEY=VALUE\n\n# Appending a new item\n+KEY=VALUE\n\n# Deleting an existing item\n~KEY[=VALUE]\n")),Object(r.b)("h1",{id:"examples"},"Examples"),Object(r.b)("h2",{id:"config-values"},"Config values"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Overriding a config value : ",Object(r.b)("inlineCode",{parentName:"li"},"foo.bar=value")),Object(r.b)("li",{parentName:"ul"},"Appending a config value : ",Object(r.b)("inlineCode",{parentName:"li"},"+foo.bar=value")),Object(r.b)("li",{parentName:"ul"},"Removing a config value : ",Object(r.b)("inlineCode",{parentName:"li"},"~foo.bar"),", ",Object(r.b)("inlineCode",{parentName:"li"},"~foo.bar=value"))),Object(r.b)("h2",{id:"defaults-list"},"Defaults list"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Overriding selected Option: ",Object(r.b)("inlineCode",{parentName:"li"},"db=mysql")),Object(r.b)("li",{parentName:"ul"},"Overriding selected Option and renaming package: ",Object(r.b)("inlineCode",{parentName:"li"},"db@src_pkg:dst_pkg=mysql")),Object(r.b)("li",{parentName:"ul"},"Renaming package: ",Object(r.b)("inlineCode",{parentName:"li"},"db@src_pkg:dst_pkg")),Object(r.b)("li",{parentName:"ul"},"Appending to defaults: ",Object(r.b)("inlineCode",{parentName:"li"},"+experiment=exp1")),Object(r.b)("li",{parentName:"ul"},"Deleting from defaults: ",Object(r.b)("inlineCode",{parentName:"li"},"~db"),", ",Object(r.b)("inlineCode",{parentName:"li"},"~db=mysql"))),Object(r.b)("p",null,"When renaming a package, if the current item in the defaults list does not have a package,\nuse the empty string for the source package, e.g: ",Object(r.b)("inlineCode",{parentName:"p"},"db@:dst_package"),".  "))}s.isMDXComponent=!0},246:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=i.a.createContext({}),s=function(e){var n=i.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return i.a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(t),b=a,m=p["".concat(o,".").concat(b)]||p[b]||u[b]||r;return t?i.a.createElement(m,l(l({ref:n},d),{},{components:t})):i.a.createElement(m,l({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=b;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=t[d];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);