(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[917],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),g=a,h=m["".concat(u,".").concat(g)]||m[g]||p[g]||o;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1937:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],l={slug:"changelog-2020-07",title:"Changelog July, 2020",author:"RDW",author_title:"Core Developer",author_url:"https://github.com/Duckwhale",author_image_url:"https://github.com/Duckwhale.png",date:new Date("2020-08-01T00:00:00.000Z"),tags:["changelog","archive"]},u=void 0,c={permalink:"/Documentation/blog/changelog-2020-07",editUrl:"https://github.com/RevivalEngine/Documentation/blog/2020-07-changelog.md",source:"@site/blog/2020-07-changelog.md",title:"Changelog July, 2020",description:"From the archives I was summoned to bring thee.... this ancient changelog.",date:"2020-08-01T00:00:00.000Z",formattedDate:"August 1, 2020",tags:[{label:"changelog",permalink:"/Documentation/blog/tags/changelog"},{label:"archive",permalink:"/Documentation/blog/tags/archive"}],readingTime:.54,truncated:!1,prevItem:{title:"Changelog August, 2020",permalink:"/Documentation/blog/changelog-2020-08"},nextItem:{title:"Changelog June, 2020",permalink:"/Documentation/blog/changelog-2020-06"}},s=[{value:"Summary",id:"summary",children:[]},{value:"Lessons learned",id:"lessons-learned",children:[]}],p={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"From the archives I was summoned to bring thee.... this ancient changelog."),(0,o.kt)("h3",{id:"summary"},"Summary"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Added support for rendering shadow sprites on existing units"),(0,o.kt)("li",{parentName:"ul"},"Reworked the asset exporter to eliminate translation errors and streamline the Assets folder's structure automatically"),(0,o.kt)("li",{parentName:"ul"},"Added functionality to automatically adjust unit sprites based on their position relative to the camera"),(0,o.kt)("li",{parentName:"ul"},"Introduced framework to support management and rendering of attached sprites for known units")),(0,o.kt)("h3",{id:"lessons-learned"},"Lessons learned"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Managing the assets pipeline is a major pain and likely requires more thought than I gave it"),(0,o.kt)("li",{parentName:"ul"},"2.5D interactions are an unexpected source of major headache, with no great solution I could find")))}m.isMDXComponent=!0}}]);