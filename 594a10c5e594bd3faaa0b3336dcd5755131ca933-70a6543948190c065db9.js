(self.webpackChunkgatsby_starter_blog_theme=self.webpackChunkgatsby_starter_blog_theme||[]).push([[252],{8583:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/fe79452f2bf834ff9bf8cf2684783a6b/d2713/avatar.jpg","srcSet":"/static/fe79452f2bf834ff9bf8cf2684783a6b/8bfb3/avatar.jpg 204w,\\n/static/fe79452f2bf834ff9bf8cf2684783a6b/a39ba/avatar.jpg 407w,\\n/static/fe79452f2bf834ff9bf8cf2684783a6b/d2713/avatar.jpg 814w","sizes":"(min-width: 814px) 814px, 100vw"},"sources":[{"srcSet":"/static/fe79452f2bf834ff9bf8cf2684783a6b/1fe79/avatar.webp 204w,\\n/static/fe79452f2bf834ff9bf8cf2684783a6b/a575b/avatar.webp 407w,\\n/static/fe79452f2bf834ff9bf8cf2684783a6b/695ee/avatar.webp 814w","type":"image/webp","sizes":"(min-width: 814px) 814px, 100vw"}]},"width":814,"height":814}')},2448:function(e,r,t){"use strict";t.d(r,{kC:function(){return Ee}});var o=t(494);function i(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,o=new Array(r);t<r;t++)o[t]=e[t];return o}function a(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,r){if(e){if("string"==typeof e)return i(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(e,r):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c="__default",p=function(e){return"object"===l(e)&&null!==e&&c in e};function g(e,r,t,o,i){var a=r&&"string"==typeof r?r.split("."):[r];for(o=0;o<a.length;o++)e=e?e[a[o]]:i;return e===i?t:p(e)?e.__default:e}var f=function e(r,t){if(r&&r.variant){var o={};for(var i in r){var a=r[i];if("variant"===i){var n=e(g(t,"function"==typeof a?a(t):a),t);o=d(d({},o),n)}else o[i]=a}return o}return r},u=[40,52,64].map((function(e){return e+"em"})),m={space:[0,4,8,16,32,64,128,256,512],fontSizes:[12,14,16,20,24,32,48,64,72]},b={bg:"backgroundColor",m:"margin",mt:"marginTop",mr:"marginRight",mb:"marginBottom",ml:"marginLeft",mx:"marginX",my:"marginY",p:"padding",pt:"paddingTop",pr:"paddingRight",pb:"paddingBottom",pl:"paddingLeft",px:"paddingX",py:"paddingY"},h={marginX:["marginLeft","marginRight"],marginY:["marginTop","marginBottom"],paddingX:["paddingLeft","paddingRight"],paddingY:["paddingTop","paddingBottom"],scrollMarginX:["scrollMarginLeft","scrollMarginRight"],scrollMarginY:["scrollMarginTop","scrollMarginBottom"],scrollPaddingX:["scrollPaddingLeft","scrollPaddingRight"],scrollPaddingY:["scrollPaddingTop","scrollPaddingBottom"],size:["width","height"]},y={color:"colors",backgroundColor:"colors",borderColor:"colors",caretColor:"colors",columnRuleColor:"colors",opacity:"opacities",transition:"transitions",margin:"space",marginTop:"space",marginRight:"space",marginBottom:"space",marginLeft:"space",marginX:"space",marginY:"space",marginBlock:"space",marginBlockEnd:"space",marginBlockStart:"space",marginInline:"space",marginInlineEnd:"space",marginInlineStart:"space",padding:"space",paddingTop:"space",paddingRight:"space",paddingBottom:"space",paddingLeft:"space",paddingX:"space",paddingY:"space",paddingBlock:"space",paddingBlockEnd:"space",paddingBlockStart:"space",paddingInline:"space",paddingInlineEnd:"space",paddingInlineStart:"space",scrollMargin:"space",scrollMarginTop:"space",scrollMarginRight:"space",scrollMarginBottom:"space",scrollMarginLeft:"space",scrollMarginX:"space",scrollMarginY:"space",scrollPadding:"space",scrollPaddingTop:"space",scrollPaddingRight:"space",scrollPaddingBottom:"space",scrollPaddingLeft:"space",scrollPaddingX:"space",scrollPaddingY:"space",inset:"space",insetBlock:"space",insetBlockEnd:"space",insetBlockStart:"space",insetInline:"space",insetInlineEnd:"space",insetInlineStart:"space",top:"space",right:"space",bottom:"space",left:"space",gridGap:"space",gridColumnGap:"space",gridRowGap:"space",gap:"space",columnGap:"space",rowGap:"space",fontFamily:"fonts",fontSize:"fontSizes",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",border:"borders",borderTop:"borders",borderRight:"borders",borderBottom:"borders",borderLeft:"borders",borderWidth:"borderWidths",borderStyle:"borderStyles",borderRadius:"radii",borderTopRightRadius:"radii",borderTopLeftRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",borderTopWidth:"borderWidths",borderTopColor:"colors",borderTopStyle:"borderStyles",borderBottomWidth:"borderWidths",borderBottomColor:"colors",borderBottomStyle:"borderStyles",borderLeftWidth:"borderWidths",borderLeftColor:"colors",borderLeftStyle:"borderStyles",borderRightWidth:"borderWidths",borderRightColor:"colors",borderRightStyle:"borderStyles",borderBlock:"borders",borderBlockEnd:"borders",borderBlockEndStyle:"borderStyles",borderBlockEndWidth:"borderWidths",borderBlockStart:"borders",borderBlockStartStyle:"borderStyles",borderBlockStartWidth:"borderWidths",borderBlockStyle:"borderStyles",borderBlockWidth:"borderWidths",borderEndEndRadius:"radii",borderEndStartRadius:"radii",borderInline:"borders",borderInlineEnd:"borders",borderInlineEndStyle:"borderStyles",borderInlineEndWidth:"borderWidths",borderInlineStart:"borders",borderInlineStartStyle:"borderStyles",borderInlineStartWidth:"borderWidths",borderInlineStyle:"borderStyles",borderInlineWidth:"borderWidths",borderStartEndRadius:"radii",borderStartStartRadius:"radii",outlineColor:"colors",boxShadow:"shadows",textShadow:"shadows",zIndex:"zIndices",width:"sizes",minWidth:"sizes",maxWidth:"sizes",height:"sizes",minHeight:"sizes",maxHeight:"sizes",flexBasis:"sizes",size:"sizes",blockSize:"sizes",inlineSize:"sizes",maxBlockSize:"sizes",maxInlineSize:"sizes",minBlockSize:"sizes",minInlineSize:"sizes",fill:"colors",stroke:"colors"},v=function(e,r){if("number"!=typeof r||r>=0){if("string"==typeof r&&r.startsWith("-")){var t=r.substring(1),o=g(e,t,t);return"number"==typeof o?-1*o:"-".concat(o)}return g(e,r,r)}var i=Math.abs(r),a=g(e,i,i);return"string"==typeof a?"-"+a:-1*Number(a)},S=["margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginBlock","marginBlockEnd","marginBlockStart","marginInline","marginInlineEnd","marginInlineStart","top","bottom","left","right"].reduce((function(e,r){return d(d({},e),{},n({},r,v))}),{}),k=function(e){return function(r){var t={},o=r&&r.breakpoints||u,i=[null].concat(a(o.map((function(e){return e.includes("@media")?e:"@media screen and (min-width: ".concat(e,")")}))));for(var n in e){var s=n,d=e[s];if("function"==typeof d&&(d=d(r||{})),!1!==d&&null!=d)if(Array.isArray(d))for(var l=0;l<d.slice(0,i.length).length;l++){var c=i[l];c?(t[c]=t[c]||{},null!=d[l]&&(t[c][s]=d[l])):t[s]=d[l]}else t[s]=d}return t}},x=function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=d(d({},m),"theme"in t?t.theme:t),i=f("function"==typeof r?r(o):r,o),a=k(i)(o),n={};for(var s in a){var c=a[s],u="function"==typeof c?c(o):c;if(u&&"object"===l(u)){if(p(u)){n[s]=u.__default;continue}n[s]=e(u)(o)}else{var v=s in b?b[s]:s,x=v in y?y[v]:void 0,R=x?null==o?void 0:o[x]:g(o,v,{}),w=g(S,v,g),B=w(R,u,u);if(v in h)for(var T=h[v],z=0;z<T.length;z++)n[T[z]]=B;else n[v]=B}}return n}},R=t(7548);var w=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,B=function(e){var r={};return function(t){return void 0===r[t]&&(r[t]=e(t)),r[t]}}((function(e){return w.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),T=t(6494),z=t.n(T),C=function(e,r){var t=z()({},e,r);for(var o in e){var i;e[o]&&"object"==typeof r[o]&&z()(t,((i={})[o]=z()(e[o],r[o]),i))}return t},W={breakpoints:[40,52,64].map((function(e){return e+"em"}))},L=function(e){return"@media screen and (min-width: "+e+")"},I=function(e,r){return A(r,e,e)},A=function(e,r,t,o,i){for(r=r&&r.split?r.split("."):[r],o=0;o<r.length;o++)e=e?e[r[o]]:i;return e===i?t:e},O=function e(r){var t={},o=function(e){var o,i,a={},n=!1,s=e.theme&&e.theme.disableStyledSystemCache;for(var d in e)if(r[d]){var l=r[d],c=e[d],p=A(e.theme,l.scale,l.defaults);if("object"!=typeof c)z()(a,l(c,p,e));else{if(t.breakpoints=!s&&t.breakpoints||A(e.theme,"breakpoints",W.breakpoints),Array.isArray(c)){t.media=!s&&t.media||[null].concat(t.breakpoints.map(L)),a=C(a,j(t.media,l,p,c,e));continue}null!==c&&(a=C(a,P(t.breakpoints,l,p,c,e)),n=!0)}}return n&&(o=a,i={},Object.keys(o).sort((function(e,r){return e.localeCompare(r,void 0,{numeric:!0,sensitivity:"base"})})).forEach((function(e){i[e]=o[e]})),a=i),a};o.config=r,o.propNames=Object.keys(r),o.cache=t;var i=Object.keys(r).filter((function(e){return"config"!==e}));return i.length>1&&i.forEach((function(t){var i;o[t]=e(((i={})[t]=r[t],i))})),o},j=function(e,r,t,o,i){var a={};return o.slice(0,e.length).forEach((function(o,n){var s,d=e[n],l=r(o,t,i);d?z()(a,((s={})[d]=z()({},a[d],l),s)):z()(a,l)})),a},P=function(e,r,t,o,i){var a={};for(var n in o){var s=e[n],d=r(o[n],t,i);if(s){var l,c=L(s);z()(a,((l={})[c]=z()({},a[c],d),l))}else z()(a,d)}return a},E=function(e){var r=e.properties,t=e.property,o=e.scale,i=e.transform,a=void 0===i?I:i,n=e.defaultScale;r=r||[t];var s=function(e,t,o){var i={},n=a(e,t,o);if(null!==n)return r.forEach((function(e){i[e]=n})),i};return s.scale=o,s.defaults=n,s},Z=function(e){void 0===e&&(e={});var r={};return Object.keys(e).forEach((function(t){var o=e[t];r[t]=!0!==o?"function"!=typeof o?E(o):o:E({property:t,scale:t})})),O(r)},M=function(){for(var e={},r=arguments.length,t=new Array(r),o=0;o<r;o++)t[o]=arguments[o];t.forEach((function(r){r&&r.config&&z()(e,r.config)}));var i=O(e);return i},H=Z({width:{property:"width",scale:"sizes",transform:function(e,r){return A(r,e,!function(e){return"number"==typeof e&&!isNaN(e)}(e)||e>1?e:100*e+"%")}},height:{property:"height",scale:"sizes"},minWidth:{property:"minWidth",scale:"sizes"},minHeight:{property:"minHeight",scale:"sizes"},maxWidth:{property:"maxWidth",scale:"sizes"},maxHeight:{property:"maxHeight",scale:"sizes"},size:{properties:["width","height"],scale:"sizes"},overflow:!0,overflowX:!0,overflowY:!0,display:!0,verticalAlign:!0}),G=H,X={color:{property:"color",scale:"colors"},backgroundColor:{property:"backgroundColor",scale:"colors"},opacity:!0};X.bg=X.backgroundColor;var Y=Z(X),N=Y,F=Z({fontFamily:{property:"fontFamily",scale:"fonts"},fontSize:{property:"fontSize",scale:"fontSizes",defaultScale:[12,14,16,20,24,32,48,64,72]},fontWeight:{property:"fontWeight",scale:"fontWeights"},lineHeight:{property:"lineHeight",scale:"lineHeights"},letterSpacing:{property:"letterSpacing",scale:"letterSpacings"},textAlign:!0,fontStyle:!0}),D=F,_=Z({alignItems:!0,alignContent:!0,justifyItems:!0,justifyContent:!0,flexWrap:!0,flexDirection:!0,flex:!0,flexGrow:!0,flexShrink:!0,flexBasis:!0,justifySelf:!0,alignSelf:!0,order:!0}),U=_,q={space:[0,4,8,16,32,64,128,256,512]},V=Z({gridGap:{property:"gridGap",scale:"space",defaultScale:q.space},gridColumnGap:{property:"gridColumnGap",scale:"space",defaultScale:q.space},gridRowGap:{property:"gridRowGap",scale:"space",defaultScale:q.space},gridColumn:!0,gridRow:!0,gridAutoFlow:!0,gridAutoColumns:!0,gridAutoRows:!0,gridTemplateColumns:!0,gridTemplateRows:!0,gridTemplateAreas:!0,gridArea:!0}),$=V,K={border:{property:"border",scale:"borders"},borderWidth:{property:"borderWidth",scale:"borderWidths"},borderStyle:{property:"borderStyle",scale:"borderStyles"},borderColor:{property:"borderColor",scale:"colors"},borderRadius:{property:"borderRadius",scale:"radii"},borderTop:{property:"borderTop",scale:"borders"},borderTopLeftRadius:{property:"borderTopLeftRadius",scale:"radii"},borderTopRightRadius:{property:"borderTopRightRadius",scale:"radii"},borderRight:{property:"borderRight",scale:"borders"},borderBottom:{property:"borderBottom",scale:"borders"},borderBottomLeftRadius:{property:"borderBottomLeftRadius",scale:"radii"},borderBottomRightRadius:{property:"borderBottomRightRadius",scale:"radii"},borderLeft:{property:"borderLeft",scale:"borders"},borderX:{properties:["borderLeft","borderRight"],scale:"borders"},borderY:{properties:["borderTop","borderBottom"],scale:"borders"},borderTopWidth:{property:"borderTopWidth",scale:"borderWidths"},borderTopColor:{property:"borderTopColor",scale:"colors"},borderTopStyle:{property:"borderTopStyle",scale:"borderStyles"}};K.borderTopLeftRadius={property:"borderTopLeftRadius",scale:"radii"},K.borderTopRightRadius={property:"borderTopRightRadius",scale:"radii"},K.borderBottomWidth={property:"borderBottomWidth",scale:"borderWidths"},K.borderBottomColor={property:"borderBottomColor",scale:"colors"},K.borderBottomStyle={property:"borderBottomStyle",scale:"borderStyles"},K.borderBottomLeftRadius={property:"borderBottomLeftRadius",scale:"radii"},K.borderBottomRightRadius={property:"borderBottomRightRadius",scale:"radii"},K.borderLeftWidth={property:"borderLeftWidth",scale:"borderWidths"},K.borderLeftColor={property:"borderLeftColor",scale:"colors"},K.borderLeftStyle={property:"borderLeftStyle",scale:"borderStyles"},K.borderRightWidth={property:"borderRightWidth",scale:"borderWidths"},K.borderRightColor={property:"borderRightColor",scale:"colors"},K.borderRightStyle={property:"borderRightStyle",scale:"borderStyles"};var J=Z(K),Q=J,ee={background:!0,backgroundImage:!0,backgroundSize:!0,backgroundPosition:!0,backgroundRepeat:!0};ee.bgImage=ee.backgroundImage,ee.bgSize=ee.backgroundSize,ee.bgPosition=ee.backgroundPosition,ee.bgRepeat=ee.backgroundRepeat;var re=Z(ee),te=re,oe={space:[0,4,8,16,32,64,128,256,512]},ie=Z({position:!0,zIndex:{property:"zIndex",scale:"zIndices"},top:{property:"top",scale:"space",defaultScale:oe.space},right:{property:"right",scale:"space",defaultScale:oe.space},bottom:{property:"bottom",scale:"space",defaultScale:oe.space},left:{property:"left",scale:"space",defaultScale:oe.space}}),ae=ie,ne={space:[0,4,8,16,32,64,128,256,512]},se=function(e){return"number"==typeof e&&!isNaN(e)},de=function(e,r){if(!se(e))return A(r,e,e);var t=e<0,o=Math.abs(e),i=A(r,o,o);return se(i)?i*(t?-1:1):t?"-"+i:i},le={};le.margin={margin:{property:"margin",scale:"space",transform:de,defaultScale:ne.space},marginTop:{property:"marginTop",scale:"space",transform:de,defaultScale:ne.space},marginRight:{property:"marginRight",scale:"space",transform:de,defaultScale:ne.space},marginBottom:{property:"marginBottom",scale:"space",transform:de,defaultScale:ne.space},marginLeft:{property:"marginLeft",scale:"space",transform:de,defaultScale:ne.space},marginX:{properties:["marginLeft","marginRight"],scale:"space",transform:de,defaultScale:ne.space},marginY:{properties:["marginTop","marginBottom"],scale:"space",transform:de,defaultScale:ne.space}},le.margin.m=le.margin.margin,le.margin.mt=le.margin.marginTop,le.margin.mr=le.margin.marginRight,le.margin.mb=le.margin.marginBottom,le.margin.ml=le.margin.marginLeft,le.margin.mx=le.margin.marginX,le.margin.my=le.margin.marginY,le.padding={padding:{property:"padding",scale:"space",defaultScale:ne.space},paddingTop:{property:"paddingTop",scale:"space",defaultScale:ne.space},paddingRight:{property:"paddingRight",scale:"space",defaultScale:ne.space},paddingBottom:{property:"paddingBottom",scale:"space",defaultScale:ne.space},paddingLeft:{property:"paddingLeft",scale:"space",defaultScale:ne.space},paddingX:{properties:["paddingLeft","paddingRight"],scale:"space",defaultScale:ne.space},paddingY:{properties:["paddingTop","paddingBottom"],scale:"space",defaultScale:ne.space}},le.padding.p=le.padding.padding,le.padding.pt=le.padding.paddingTop,le.padding.pr=le.padding.paddingRight,le.padding.pb=le.padding.paddingBottom,le.padding.pl=le.padding.paddingLeft,le.padding.px=le.padding.paddingX,le.padding.py=le.padding.paddingY;var ce=M(Z(le.margin),Z(le.padding)),pe=ce,ge=Z({boxShadow:{property:"boxShadow",scale:"shadows"},textShadow:{property:"textShadow",scale:"shadows"}});function fe(){return(fe=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}var ue=function(e,r,t,o,i){for(r=r&&r.split?r.split("."):[r],o=0;o<r.length;o++)e=e?e[r[o]]:i;return e===i?t:e},me=[40,52,64].map((function(e){return e+"em"})),be={space:[0,4,8,16,32,64,128,256,512],fontSizes:[12,14,16,20,24,32,48,64,72]},he={bg:"backgroundColor",m:"margin",mt:"marginTop",mr:"marginRight",mb:"marginBottom",ml:"marginLeft",mx:"marginX",my:"marginY",p:"padding",pt:"paddingTop",pr:"paddingRight",pb:"paddingBottom",pl:"paddingLeft",px:"paddingX",py:"paddingY"},ye={marginX:["marginLeft","marginRight"],marginY:["marginTop","marginBottom"],paddingX:["paddingLeft","paddingRight"],paddingY:["paddingTop","paddingBottom"],size:["width","height"]},ve={color:"colors",backgroundColor:"colors",borderColor:"colors",margin:"space",marginTop:"space",marginRight:"space",marginBottom:"space",marginLeft:"space",marginX:"space",marginY:"space",padding:"space",paddingTop:"space",paddingRight:"space",paddingBottom:"space",paddingLeft:"space",paddingX:"space",paddingY:"space",top:"space",right:"space",bottom:"space",left:"space",gridGap:"space",gridColumnGap:"space",gridRowGap:"space",gap:"space",columnGap:"space",rowGap:"space",fontFamily:"fonts",fontSize:"fontSizes",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",border:"borders",borderTop:"borders",borderRight:"borders",borderBottom:"borders",borderLeft:"borders",borderWidth:"borderWidths",borderStyle:"borderStyles",borderRadius:"radii",borderTopRightRadius:"radii",borderTopLeftRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",borderTopWidth:"borderWidths",borderTopColor:"colors",borderTopStyle:"borderStyles",borderBottomWidth:"borderWidths",borderBottomColor:"colors",borderBottomStyle:"borderStyles",borderLeftWidth:"borderWidths",borderLeftColor:"colors",borderLeftStyle:"borderStyles",borderRightWidth:"borderWidths",borderRightColor:"colors",borderRightStyle:"borderStyles",outlineColor:"colors",boxShadow:"shadows",textShadow:"shadows",zIndex:"zIndices",width:"sizes",minWidth:"sizes",maxWidth:"sizes",height:"sizes",minHeight:"sizes",maxHeight:"sizes",flexBasis:"sizes",size:"sizes",fill:"colors",stroke:"colors"},Se=function(e,r){if("number"!=typeof r||r>=0)return ue(e,r,r);var t=Math.abs(r),o=ue(e,t,t);return"string"==typeof o?"-"+o:-1*o},ke=["margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","top","bottom","left","right"].reduce((function(e,r){var t;return fe({},e,((t={})[r]=Se,t))}),{}),xe=function e(r){return function(t){void 0===t&&(t={});var o=fe({},be,{},t.theme||t),i={},a=function(e){return function(r){var t={},o=ue(r,"breakpoints",me),i=[null].concat(o.map((function(e){return"@media screen and (min-width: "+e+")"})));for(var a in e){var n="function"==typeof e[a]?e[a](r):e[a];if(null!=n)if(Array.isArray(n))for(var s=0;s<n.slice(0,i.length).length;s++){var d=i[s];d?(t[d]=t[d]||{},null!=n[s]&&(t[d][a]=n[s])):t[a]=n[s]}else t[a]=n}return t}}("function"==typeof r?r(o):r)(o);for(var n in a){var s=a[n],d="function"==typeof s?s(o):s;if("variant"!==n)if(d&&"object"==typeof d)i[n]=e(d)(o);else{var l=ue(he,n,n),c=ue(ve,l),p=ue(o,c,ue(o,l,{})),g=ue(ke,l,ue)(p,d,d);if(ye[l])for(var f=ye[l],u=0;u<f.length;u++)i[f[u]]=g;else i[l]=g}else i=fe({},i,{},e(ue(o,d))(o))}return i}},Re=function(e){var r,t,o=e.scale,i=e.prop,a=void 0===i?"variant":i,n=e.variants,s=void 0===n?{}:n,d=e.key;(t=Object.keys(s).length?function(e,r,t){return xe(A(r,e,null))(t.theme)}:function(e,r){return A(r,e,null)}).scale=o||d,t.defaults=s;var l=((r={})[a]=t,r);return O(l)},we=Re({key:"buttons"}),Be=Re({key:"textStyles",prop:"textStyle"}),Te=Re({key:"colorStyles",prop:"colors"}),ze=(G.width,G.height,G.minWidth,G.minHeight,G.maxWidth,G.maxHeight,G.size,G.verticalAlign,G.display,G.overflow,G.overflowX,G.overflowY,N.opacity,D.fontSize,D.fontFamily,D.fontWeight,D.lineHeight,D.textAlign,D.fontStyle,D.letterSpacing,U.alignItems,U.alignContent,U.justifyItems,U.justifyContent,U.flexWrap,U.flexDirection,U.flex,U.flexGrow,U.flexShrink,U.flexBasis,U.justifySelf,U.alignSelf,U.order,$.gridGap,$.gridColumnGap,$.gridRowGap,$.gridColumn,$.gridRow,$.gridAutoFlow,$.gridAutoColumns,$.gridAutoRows,$.gridTemplateColumns,$.gridTemplateRows,$.gridTemplateAreas,$.gridArea,Q.borderWidth,Q.borderStyle,Q.borderColor,Q.borderTop,Q.borderRight,Q.borderBottom,Q.borderLeft,Q.borderRadius,te.backgroundImage,te.backgroundSize,te.backgroundPosition,te.backgroundRepeat,ae.zIndex,ae.top,ae.right,ae.bottom,ae.left,function(e){var r=new RegExp("^("+e.join("|")+")$");return(0,R.Z)((function(e){return B(e)&&!r.test(e)}))}),Ce=(ze(M(ce,F,Y,H,_,J,re,ie,V,ge,we,Be,Te).propNames),t(7294)),We=t(3431);function Le(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,o=new Array(r);t<r;t++)o[t]=e[t];return o}function Ie(e){return function(e){if(Array.isArray(e))return Le(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,r){if(e){if("string"==typeof e)return Le(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Le(e,r):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Ae=[].concat(Ie(pe.propNames),Ie(N.propNames)),Oe=function(e){return Ae.includes(e)},je=ze(Ae),Pe=(0,o.Z)("div",{shouldForwardProp:je})({boxSizing:"border-box",margin:0,minWidth:0},(function(e){return x(e.__css)(e.theme)}),(function(e){var r=e.theme,t=e.variant,o=e.__themeKey;return x(g(r,(void 0===o?"variants":o)+"."+t,g(r,t)))}),pe,N,(function(e){return x(e.sx)(e.theme)}),(function(e){return e.css}));Pe.displayName="Box";var Ee=(0,o.Z)(Pe)({display:"flex"});function Ze(){return(Ze=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function Me(e,r){if(null==e)return{};var t,o,i=function(e,r){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}Ee.displayName="Flex";var He=function(e){var r=e.size,t=void 0===r?24:r,o=Me(e,["size"]);return Ce.createElement(Pe,Ze({as:"svg",xmlns:"http://www.w3.org/2000/svg",width:t+"",height:t+"",viewBox:"0 0 24 24",fill:"currentcolor"},o))};He.displayName="SVG";var Ge=function(e){return function(r){var t={};for(var o in r)e(o||"")&&(t[o]=r[o]);return t}},Xe=/^m[trblxy]?$/;Ge((function(e){return Xe.test(e)})),Ge((function(e){return!Xe.test(e)})),(0,We.F4)({from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}}),Ge(Oe),Ge((function(e){return!Oe(e)}))},4780:function(e,r,t){"use strict";t.d(r,{Z:function(){return p}});var o=t(7294),i=t(6802),a=t(2448),n=t(6994),s=t(1679),d=t(5444),l=t(3431);function c(e){return(0,l.tZ)("div",null,(0,l.tZ)("div",null,(0,l.tZ)("span",{css:(0,n.iv)({color:e.isFooter?"black":"white",fontSize:"24px"})},"kuzure-耳东山亘"),(0,l.tZ)(s.Ge.a,{as:d.Link,to:"https://github.com/kuzurec"},(0,l.tZ)("svg",{className:"icon github-icon","aria-hidden":"true"},(0,l.tZ)("use",{xlinkHref:"#icon-github"})))),(0,l.tZ)("div",{css:(0,n.iv)({color:"gray",fontSize:"13px",marginTop:"4px"})},"东边有座山"))}var p=function(e){var r;return(0,l.tZ)(o.Fragment,null,(0,l.tZ)(a.kC,{css:(0,n.iv)({mb:4,alignItems:"center",justifyContent:"center",flexDirection:"column"})},(0,l.tZ)(i.S,{src:"../../../images/avatar.jpg",alt:"kuzure",css:(0,n.iv)({mr:2,mb:0,width:80,minWidth:48,borderRadius:"50%",cursor:"pointer",marginBottom:16,":hover":{animation:"5s linear 0s normal none infinite rotate"},"@keyframes rotate":{from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}}}),__imageData:t(8583)}),(0,l.tZ)(s.Ge.div,null,(0,l.tZ)(c,e)),"/intro"===(null===(r=e.location)||void 0===r?void 0:r.pathname)?(0,l.tZ)(s.Ge.div,null,(0,l.tZ)(s.Ge.div,{css:(0,n.iv)({fontSize:"13px",marginTop:"20px"})},(0,l.tZ)("svg",{className:"icon","aria-hidden":"true"},(0,l.tZ)("use",{xlinkHref:"#icon-ditu"})),"上海"),(0,l.tZ)(s.Ge.div,{css:(0,n.iv)({fontSize:"13px",marginTop:"8px"})},(0,l.tZ)("svg",{className:"icon","aria-hidden":"true"},(0,l.tZ)("use",{xlinkHref:"#icon-zhiweisvg"})),"前端开发工程师"),(0,l.tZ)(s.Ge.div,{css:(0,n.iv)({fontSize:"13px",marginTop:"8px"})},(0,l.tZ)("svg",{className:"icon","aria-hidden":"true"},(0,l.tZ)("use",{xlinkHref:"#icon-tubiao209"})),"827230613@qq.com")):""))}},6321:function(e,r,t){"use strict";var o=t(5444),i=t(3113),a=t(1679),n=t(6994),s=t(6802),d=t(4780),l=function(e){var r=e.children;return(0,i.tZ)(a.Ge.h1,{css:(0,n.iv)({my:0,fontSize:4,marginTop:50})},(0,i.tZ)(a.Ge.a,{as:o.Link,css:(0,n.iv)({color:"white",boxShadow:"none",textDecoration:"underline",":hover":{color:"gray"}}),to:"/"},r))};r.Z=function(e){return(0,i.tZ)("div",null,(0,i.tZ)(s.M,{src:"/index-bg.jpg",alt:"background",css:(0,n.iv)({position:"fixed !important",top:0,width:"100%",height:400,zIndex:-1})}),(0,i.tZ)("header",{css:(0,n.iv)({pb:80})},(0,i.tZ)("div",{css:(0,n.iv)({maxWidth:"container",mx:"auto",px:3,pt:4})},(0,i.tZ)("div",{css:(0,n.iv)({display:"flex",justifyContent:"space-between",alignItems:"center",mb:4})},(0,i.tZ)(l,e,"Kuzure's blog")),(0,i.tZ)(d.Z,e))))}}}]);
//# sourceMappingURL=594a10c5e594bd3faaa0b3336dcd5755131ca933-70a6543948190c065db9.js.map