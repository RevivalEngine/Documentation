(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[731],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=u(n),p=a,f=g["".concat(c,".").concat(p)]||g[p]||m[p]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5243:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return g}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],l={slug:"changelog-2020-06",title:"Changelog June, 2020",author:"RDW",author_title:"Core Developer",author_url:"https://github.com/Duckwhale",author_image_url:"https://github.com/Duckwhale.png",date:new Date("2020-07-01T00:00:00.000Z"),tags:["changelog","archive"]},c=void 0,u={permalink:"/Documentation/blog/changelog-2020-06",editUrl:"https://github.com/RevivalEngine/Documentation/blog/2020-06-changelog.md",source:"@site/blog/2020-06-changelog.md",title:"Changelog June, 2020",description:"From the archives I was summoned to bring thee.... this ancient changelog.",date:"2020-07-01T00:00:00.000Z",formattedDate:"July 1, 2020",tags:[{label:"changelog",permalink:"/Documentation/blog/tags/changelog"},{label:"archive",permalink:"/Documentation/blog/tags/archive"}],readingTime:.465,truncated:!1,prevItem:{title:"Changelog July, 2020",permalink:"/Documentation/blog/changelog-2020-07"},nextItem:{title:"Changelog May, 2020",permalink:"/Documentation/blog/changelog-2020-05"}},s=[{value:"Summary",id:"summary",children:[]},{value:"Lessons learned",id:"lessons-learned",children:[]}],m={toc:s};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"From the archives I was summoned to bring thee.... this ancient changelog."),(0,o.kt)("h3",{id:"summary"},"Summary"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Extended debug menu to allow managing known units (and their animation state) more easily"),(0,o.kt)("li",{parentName:"ul"},"Designed initial version of the on-the-fly converter system that would later become standardized"),(0,o.kt)("li",{parentName:"ul"},"Added basic support for fog effects, dynamic lights, and water planes to the rendering API")),(0,o.kt)("h3",{id:"lessons-learned"},"Lessons learned"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"2D animations can become quite annoying if there are many moving parts"),(0,o.kt)("li",{parentName:"ul"},"Processing binary files and converting them to a usable format turned out to be easier than expected")))}g.isMDXComponent=!0}}]);