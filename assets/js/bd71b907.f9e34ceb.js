(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[677],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),g=o,h=p["".concat(c,".").concat(g)]||p[g]||m[g]||a;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8935:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],l={slug:"changelog-2020-08",title:"Changelog August, 2020",author:"RDW",author_title:"Core Developer",author_url:"https://github.com/Duckwhale",author_image_url:"https://github.com/Duckwhale.png",date:new Date("2020-09-01T00:00:00.000Z"),tags:["changelog","archive"]},c=void 0,u={permalink:"/Documentation/blog/changelog-2020-08",editUrl:"https://github.com/RevivalEngine/Documentation/blog/2020-08-changelog.md",source:"@site/blog/2020-08-changelog.md",title:"Changelog August, 2020",description:"From the archives I was summoned to bring thee.... this ancient changelog.",date:"2020-09-01T00:00:00.000Z",formattedDate:"September 1, 2020",tags:[{label:"changelog",permalink:"/Documentation/blog/tags/changelog"},{label:"archive",permalink:"/Documentation/blog/tags/archive"}],readingTime:.425,truncated:!1,prevItem:{title:"Changelog December, 2020",permalink:"/Documentation/blog/changelog-2020-12"},nextItem:{title:"Changelog July, 2020",permalink:"/Documentation/blog/changelog-2020-07"}},s=[{value:"Summary",id:"summary",children:[]},{value:"Lessons learned",id:"lessons-learned",children:[]}],m={toc:s};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"From the archives I was summoned to bring thee.... this ancient changelog."),(0,a.kt)("h3",{id:"summary"},"Summary"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed various synchronization issues in the sprite animation system"),(0,a.kt)("li",{parentName:"ul"},"Increased rendering performance of the sprite animation system"),(0,a.kt)("li",{parentName:"ul"},"Added tools to migrate LibConfig databases to Lua")),(0,a.kt)("h3",{id:"lessons-learned"},"Lessons learned"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Synchronizing animations requires a full-blown event scheduler, which I didn't expect"),(0,a.kt)("li",{parentName:"ul"},"Sprite animation scales poorly if you don't have access to proper hardware instances"),(0,a.kt)("li",{parentName:"ul"},"It's still too easy to get sidetracked and waste time on exploratory features")))}p.isMDXComponent=!0}}]);