(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[490],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=u(n),p=a,h=g["".concat(c,".").concat(p)]||g[p]||m[p]||o;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6324:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return g}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],l={slug:"changelog-2020-02",title:"Changelog February, 2020",author:"RDW",author_title:"Core Developer",author_url:"https://github.com/Duckwhale",author_image_url:"https://github.com/Duckwhale.png",date:new Date("2020-03-01T00:00:00.000Z"),tags:["changelog","archive"]},c=void 0,u={permalink:"/Documentation/blog/changelog-2020-02",editUrl:"https://github.com/RevivalEngine/Documentation/blog/2020-02-changelog.md",source:"@site/blog/2020-02-changelog.md",title:"Changelog February, 2020",description:"From the archives I was summoned to bring thee.... this ancient changelog.",date:"2020-03-01T00:00:00.000Z",formattedDate:"March 1, 2020",tags:[{label:"changelog",permalink:"/Documentation/blog/tags/changelog"},{label:"archive",permalink:"/Documentation/blog/tags/archive"}],readingTime:.49,truncated:!1,prevItem:{title:"Changelog March, 2020",permalink:"/Documentation/blog/changelog-2020-03"},nextItem:{title:"Changelog January, 2020",permalink:"/Documentation/blog/changelog-2020-01"}},s=[{value:"Summary",id:"summary",children:[]},{value:"Lessons learned",id:"lessons-learned",children:[]}],m={toc:s};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"From the archives I was summoned to bring thee.... this ancient changelog."),(0,o.kt)("h3",{id:"summary"},"Summary"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Added debug menu to more easily control the various rendering options"),(0,o.kt)("li",{parentName:"ul"},"Streamlined the UI code to work with an addon-like interface system")),(0,o.kt)("h3",{id:"lessons-learned"},"Lessons learned"),(0,o.kt)("p",null,"At this time, debugging graphics issues and creating Widgets from code became much easier."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Always create a debug menu first. It's incredibly helpful in debugging visual artifacts"),(0,o.kt)("li",{parentName:"ul"},"Extension-based systems are awesome, if they've been designed like this from the start"),(0,o.kt)("li",{parentName:"ul"},"Creating a widget-based UI system is a lot more work than one would think")))}g.isMDXComponent=!0}}]);