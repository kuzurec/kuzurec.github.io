(self.webpackChunkgatsby_starter_blog_theme=self.webpackChunkgatsby_starter_blog_theme||[]).push([[177],{7228:function(t){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n},t.exports.default=t.exports,t.exports.__esModule=!0},3646:function(t,e,r){var n=r(7228);t.exports=function(t){if(Array.isArray(t))return n(t)},t.exports.default=t.exports,t.exports.__esModule=!0},9100:function(t,e,r){var n=r(9489),o=r(7067);function u(e,r,i){return o()?(t.exports=u=Reflect.construct,t.exports.default=t.exports,t.exports.__esModule=!0):(t.exports=u=function(t,e,r){var o=[null];o.push.apply(o,e);var u=new(Function.bind.apply(t,o));return r&&n(u,r.prototype),u},t.exports.default=t.exports,t.exports.__esModule=!0),u.apply(null,arguments)}t.exports=u,t.exports.default=t.exports,t.exports.__esModule=!0},9713:function(t){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},t.exports.default=t.exports,t.exports.__esModule=!0},7067:function(t){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}},t.exports.default=t.exports,t.exports.__esModule=!0},6860:function(t){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.default=t.exports,t.exports.__esModule=!0},8206:function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.default=t.exports,t.exports.__esModule=!0},319:function(t,e,r){var n=r(3646),o=r(6860),u=r(379),i=r(8206);t.exports=function(t){return n(t)||o(t)||u(t)||i()},t.exports.default=t.exports,t.exports.__esModule=!0},379:function(t,e,r){var n=r(7228);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}},t.exports.default=t.exports,t.exports.__esModule=!0},3881:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return M}});var n=r(6156),o=r(7294),u=r(6994),i=r(6802),a=r(6725),l=r(9754),s=r(1282),c=r(1679),p=r(3431),f=function(t){return(0,p.tZ)(c.Ge.h1,t)},x=r(2122),d=r(3113),b=function(t){return(0,d.tZ)(c.Ge.p,(0,x.Z)({sx:{fontSize:1,mt:-3,mb:3}},t))},y=r(5444),m=r(2448),g=r(4780),v=function(t){var e=t.previous,r=t.next;return(0,p.tZ)("footer",{css:(0,u.iv)({mt:4,pt:3})},(0,p.tZ)(c.Ge.hr,null),(0,p.tZ)(g.Z,{isFooter:!0}),(e||r)&&(0,p.tZ)(m.kC,{as:"ul",css:(0,u.iv)({flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0})},(0,p.tZ)("li",null,e&&(0,p.tZ)(c.Ge.a,{as:y.Link,to:e.slug,rel:"prev"},"← ",e.title)),(0,p.tZ)("li",null,r&&(0,p.tZ)(c.Ge.a,{as:y.Link,to:r.slug,rel:"next"},r.title," →"))))},O=function(t){var e=t.text,r=t.url;return(0,p.tZ)(o.Fragment,null,e&&(0,p.tZ)(m.kC,null,r?(0,p.tZ)(c.Ge.a,{css:(0,u.iv)({margin:"auto",fontStyle:"italic"}),href:r,target:"_blank"},e):(0,p.tZ)(c.Ge.i,{css:(0,u.iv)({margin:"auto"})},e)))},Z=function(t){var e,r=t.post;return(0,p.tZ)(o.Fragment,null,(null==r||null===(e=r.image)||void 0===e?void 0:e.childImageSharp)&&(0,p.tZ)(o.Fragment,null,(0,p.tZ)(i.G,{image:(0,i.d)(r.image),alt:r.imageAlt?r.imageAlt:r.excerpt}),(0,p.tZ)(O,{text:r.imageCaptionText,url:r.imageCaptionLink})))},h=r(3910),_=r(2114),j=function(t){var e=t.data,r=e.post,n=e.site.siteMetadata.title,o=t.location,c=t.previous,x=t.next;return(0,p.tZ)(l.Z,{location:o,title:n},(0,p.tZ)(s.Z,{title:r.title,description:r.excerpt,imageSource:r.socialImage?(0,i.e)(r.socialImage):(0,i.e)(r.image),imageAlt:r.imageAlt}),(0,p.tZ)("main",null,(0,p.tZ)("article",null,(0,p.tZ)("header",{css:(0,u.iv)({"@media (max-width: 1366px)":{mt:4}})},(0,p.tZ)(Z,{post:r}),(0,p.tZ)(f,null,r.title),(0,p.tZ)(b,null,r.date),(0,p.tZ)(_.Z,{tags:r.tags})),(0,p.tZ)("section",null,(0,p.tZ)(a.MDXRenderer,null,r.body))),(0,p.tZ)(h.Z,null)),(0,p.tZ)(v,{previous:c,next:x}))};function w(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function P(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?w(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var M=function(t){var e=t.location,r=t.data,n=r.blogPost,o=r.previous,u=r.next;return(0,p.tZ)(j,{data:P(P({},r),{},{post:n}),location:e,previous:o,next:u})}},6725:function(t,e,r){var n=r(3395);t.exports={MDXRenderer:n}},3395:function(t,e,r){var n=r(9100),o=r(319),u=r(9713),i=r(7316),a=["scope","children"];function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var c=r(7294),p=r(4983).mdx,f=r(9480).useMDXScope;t.exports=function(t){var e=t.scope,r=t.children,u=i(t,a),l=f(e),x=c.useMemo((function(){if(!r)return null;var t=s({React:c,mdx:p},l),e=Object.keys(t),u=e.map((function(e){return t[e]}));return n(Function,["_fn"].concat(o(e),[""+r])).apply(void 0,[{}].concat(o(u)))}),[r,e]);return c.createElement(x,s({},u))}}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-blog-core-src-templates-post-query-js-b45e99857aee3a04ca33.js.map