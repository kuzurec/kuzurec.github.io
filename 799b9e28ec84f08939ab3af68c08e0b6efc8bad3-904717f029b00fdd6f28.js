(self.webpackChunkgatsby_starter_blog_theme=self.webpackChunkgatsby_starter_blog_theme||[]).push([[870],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var u,c,s,f;if(Array.isArray(e)){if((u=e.length)!=a.length)return!1;for(c=u;0!=c--;)if(!i(e[c],a[c]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(f=e.entries();!(c=f.next()).done;)if(!a.has(c.value[0]))return!1;for(f=e.entries();!(c=f.next()).done;)if(!i(c.value[1],a.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(f=e.entries();!(c=f.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((u=e.length)!=a.length)return!1;for(c=u;0!=c--;)if(e[c]!==a[c])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((u=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(c=u;0!=c--;)if(!Object.prototype.hasOwnProperty.call(a,s[c]))return!1;if(t&&e instanceof Element)return!1;for(c=u;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!e.$$typeof)&&!i(e[s[c]],a[s[c]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},5414:function(e,t,n){"use strict";n.d(t,{q:function(){return de}});var r,o,i,a,u=n(5697),c=n.n(u),s=n(4839),f=n.n(s),l=n(2993),p=n.n(l),d=n(7294),h=n(6494),g=n.n(h),y="bodyAttributes",m="htmlAttributes",v="titleAttributes",b={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(b).map((function(e){return b[e]})),"charset"),T="cssText",O="href",S="http-equiv",x="innerHTML",A="itemprop",j="name",E="property",_="rel",C="src",k="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",N="defer",L="encodeSpecialCharacters",M="onChangeClientState",F="titleTemplate",R=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),Z=[b.NOSCRIPT,b.SCRIPT,b.STYLE],q="data-react-helmet",D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},B=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},$=function(e){var t=W(e,b.TITLE),n=W(e,F);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=W(e,I);return t||r||void 0},z=function(e){return W(e,M)||function(){}},Y=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return H({},e,t)}),{})},G=function(e,t){return t.filter((function(e){return void 0!==e[b.BASE]})).map((function(e){return e[b.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},K=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&te("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var u=i[a],c=u.toLowerCase();-1===t.indexOf(c)||n===_&&"canonical"===e[n].toLowerCase()||c===_&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(u)||u!==x&&u!==T&&u!==A||(n=u)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var u=i[a],c=g()({},r[u],o[u]);r[u]=c}return e}),[]).reverse()},W=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},V=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){V(e)}),0)}),X=function(e){return clearTimeout(e)},Q="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||V:n.g.requestAnimationFrame||V,ee="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||X:n.g.cancelAnimationFrame||X,te=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ne=null,re=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,f=e.styleTags,l=e.title,p=e.titleAttributes;ae(b.BODY,r),ae(b.HTML,o),ie(l,p);var d={baseTag:ue(b.BASE,n),linkTags:ue(b.LINK,i),metaTags:ue(b.META,a),noscriptTags:ue(b.NOSCRIPT,u),scriptTags:ue(b.SCRIPT,s),styleTags:ue(b.STYLE,f)},h={},g={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(g[e]=d[e].oldTags)})),t&&t(),c(e,h,g)},oe=function(e){return Array.isArray(e)?e.join(""):e},ie=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ae(b.TITLE,t)},ae=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(q),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),u=0;u<a.length;u++){var c=a[u],s=t[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===o.indexOf(c)&&o.push(c);var f=i.indexOf(c);-1!==f&&i.splice(f,1)}for(var l=i.length-1;l>=0;l--)n.removeAttribute(i[l]);o.length===i.length?n.removeAttribute(q):n.getAttribute(q)!==a.join(",")&&n.setAttribute(q,a.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(b.HEAD),r=n.querySelectorAll(e+"["+q+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===x)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(q,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},ce=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},se=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[P[n]||n]=e[n],t}),t)},fe=function(e,t,n){switch(e){case b.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[q]=!0,o=se(n,r),[d.createElement(b.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=ce(n),i=oe(t);return o?"<"+e+" "+q+'="true" '+o+">"+B(i,r)+"</"+e+">":"<"+e+" "+q+'="true">'+B(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case m:return{toComponent:function(){return se(t)},toString:function(){return ce(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[q]=!0,r);return Object.keys(t).forEach((function(e){var n=P[e]||e;if(n===x||n===T){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),d.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===x||e===T)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+B(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===Z.indexOf(e);return t+"<"+e+" "+q+'="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},le=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.scriptTags,s=e.styleTags,f=e.title,l=void 0===f?"":f,p=e.titleAttributes;return{base:fe(b.BASE,t,r),bodyAttributes:fe(y,n,r),htmlAttributes:fe(m,o,r),link:fe(b.LINK,i,r),meta:fe(b.META,a,r),noscript:fe(b.NOSCRIPT,u,r),script:fe(b.SCRIPT,c,r),style:fe(b.STYLE,s,r),title:fe(b.TITLE,{title:l,titleAttributes:p},r)}},pe=f()((function(e){return{baseTag:G([O,k],e),bodyAttributes:Y(y,e),defer:W(e,N),encode:W(e,L),htmlAttributes:Y(m,e),linkTags:K(b.LINK,[_,O],e),metaTags:K(b.META,[j,w,S,E,A],e),noscriptTags:K(b.NOSCRIPT,[x],e),onChangeClientState:z(e),scriptTags:K(b.SCRIPT,[C,x],e),styleTags:K(b.STYLE,[T],e),title:$(e),titleAttributes:Y(v,e)}}),(function(e){ne&&ee(ne),e.defer?ne=Q((function(){re(e,(function(){ne=null}))})):(re(e),ne=null)}),le)((function(){return null})),de=(o=pe,a=i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.SCRIPT:case b.NOSCRIPT:return{innerHTML:t};case b.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return H({},r,((t={})[n.type]=[].concat(r[n.type]||[],[H({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case b.TITLE:return H({},o,((t={})[r.type]=a,t.titleAttributes=H({},i),t));case b.BODY:return H({},o,{bodyAttributes:H({},i)});case b.HTML:return H({},o,{htmlAttributes:H({},i)})}return H({},o,((n={})[r.type]=H({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=H({},t);return Object.keys(e).forEach((function(t){var r;n=H({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return d.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[R[n]||n]=e[n],t}),t)}(U(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case b.LINK:case b.META:case b.NOSCRIPT:case b.SCRIPT:case b.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=U(e,["children"]),r=H({},n);return t&&(r=this.mapChildrenToProps(t,r)),d.createElement(o,r)},J(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(d.Component),i.propTypes={base:c().object,bodyAttributes:c().object,children:c().oneOfType([c().arrayOf(c().node),c().node]),defaultTitle:c().string,defer:c().bool,encodeSpecialCharacters:c().bool,htmlAttributes:c().object,link:c().arrayOf(c().object),meta:c().arrayOf(c().object),noscript:c().arrayOf(c().object),onChangeClientState:c().func,script:c().arrayOf(c().object),style:c().arrayOf(c().object),title:c().string,titleAttributes:c().object,titleTemplate:c().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=le({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);de.renderStatic=de.rewind},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function f(){c=e(s.map((function(e){return e.props}))),l.canUseDOM?t(c):n&&(c=n(c))}var l=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),f()},a.componentDidUpdate=function(){f()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),f()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(l,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(l,"canUseDOM",u),l}}},8950:function(e,t,n){var r=n(7721),o=n(4067),i=[n(2606)];e.exports=r.createStore(o,i)},2606:function(e,t,n){e.exports=function(){return n(7573),{}}},7573:function(){"object"!=typeof JSON&&(JSON={}),function(){"use strict";var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta,rep;function f(e){return e<10?"0"+e:e}function this_value(){return this.valueOf()}function quote(e){return rx_escapable.lastIndex=0,rx_escapable.test(e)?'"'+e.replace(rx_escapable,(function(e){var t=meta[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}))+'"':'"'+e+'"'}function str(e,t){var n,r,o,i,a,u=gap,c=t[e];switch(c&&"object"==typeof c&&"function"==typeof c.toJSON&&(c=c.toJSON(e)),"function"==typeof rep&&(c=rep.call(t,e,c)),typeof c){case"string":return quote(c);case"number":return isFinite(c)?String(c):"null";case"boolean":case"null":return String(c);case"object":if(!c)return"null";if(gap+=indent,a=[],"[object Array]"===Object.prototype.toString.apply(c)){for(i=c.length,n=0;n<i;n+=1)a[n]=str(n,c)||"null";return o=0===a.length?"[]":gap?"[\n"+gap+a.join(",\n"+gap)+"\n"+u+"]":"["+a.join(",")+"]",gap=u,o}if(rep&&"object"==typeof rep)for(i=rep.length,n=0;n<i;n+=1)"string"==typeof rep[n]&&(o=str(r=rep[n],c))&&a.push(quote(r)+(gap?": ":":")+o);else for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(o=str(r,c))&&a.push(quote(r)+(gap?": ":":")+o);return o=0===a.length?"{}":gap?"{\n"+gap+a.join(",\n"+gap)+"\n"+u+"}":"{"+a.join(",")+"}",gap=u,o}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value),"function"!=typeof JSON.stringify&&(meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(e,t,n){var r;if(gap="",indent="","number"==typeof n)for(r=0;r<n;r+=1)indent+=" ";else"string"==typeof n&&(indent=n);if(rep=t,t&&"function"!=typeof t&&("object"!=typeof t||"number"!=typeof t.length))throw new Error("JSON.stringify");return str("",{"":e})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){var j;function walk(e,t){var n,r,o=e[t];if(o&&"object"==typeof o)for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(void 0!==(r=walk(o,n))?o[n]=r:delete o[n]);return reviver.call(e,t,o)}if(text=String(text),rx_dangerous.lastIndex=0,rx_dangerous.test(text)&&(text=text.replace(rx_dangerous,(function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}))),rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}()},7721:function(e,t,n){var r=n(6238),o=r.slice,i=r.pluck,a=r.each,u=r.bind,c=r.create,s=r.isList,f=r.isFunction,l=r.isObject;e.exports={createStore:d};var p={version:"2.0.12",enabled:!1,get:function(e,t){var n=this.storage.read(this._namespacePrefix+e);return this._deserialize(n,t)},set:function(e,t){return void 0===t?this.remove(e):(this.storage.write(this._namespacePrefix+e,this._serialize(t)),t)},remove:function(e){this.storage.remove(this._namespacePrefix+e)},each:function(e){var t=this;this.storage.each((function(n,r){e.call(t,t._deserialize(n),(r||"").replace(t._namespaceRegexp,""))}))},clearAll:function(){this.storage.clearAll()},hasNamespace:function(e){return this._namespacePrefix=="__storejs_"+e+"_"},createStore:function(){return d.apply(this,arguments)},addPlugin:function(e){this._addPlugin(e)},namespace:function(e){return d(this.storage,this.plugins,e)}};function d(e,t,n){n||(n=""),e&&!s(e)&&(e=[e]),t&&!s(t)&&(t=[t]);var r=n?"__storejs_"+n+"_":"",d=n?new RegExp("^"+r):null;if(!/^[a-zA-Z0-9_\-]*$/.test(n))throw new Error("store.js namespaces can only have alphanumerics + underscores and dashes");var h={_namespacePrefix:r,_namespaceRegexp:d,_testStorage:function(e){try{var t="__storejs__test__";e.write(t,t);var n=e.read(t)===t;return e.remove(t),n}catch(r){return!1}},_assignPluginFnProp:function(e,t){var n=this[t];this[t]=function(){var t=o(arguments,0),r=this;var i=[function(){if(n)return a(arguments,(function(e,n){t[n]=e})),n.apply(r,t)}].concat(t);return e.apply(r,i)}},_serialize:function(e){return JSON.stringify(e)},_deserialize:function(e,t){if(!e)return t;var n="";try{n=JSON.parse(e)}catch(r){n=e}return void 0!==n?n:t},_addStorage:function(e){this.enabled||this._testStorage(e)&&(this.storage=e,this.enabled=!0)},_addPlugin:function(e){var t=this;if(s(e))a(e,(function(e){t._addPlugin(e)}));else if(!i(this.plugins,(function(t){return e===t}))){if(this.plugins.push(e),!f(e))throw new Error("Plugins must be function values that return objects");var n=e.call(this);if(!l(n))throw new Error("Plugins must return an object of function properties");a(n,(function(n,r){if(!f(n))throw new Error("Bad plugin property: "+r+" from plugin "+e.name+". Plugins should only return functions.");t._assignPluginFnProp(n,r)}))}},addStorage:function(e){!function(){var e="undefined"==typeof console?null:console;e&&(e.warn?e.warn:e.log).apply(e,arguments)}("store.addStorage(storage) is deprecated. Use createStore([storages])"),this._addStorage(e)}},g=c(h,p,{plugins:[]});return g.raw={},a(g,(function(e,t){f(e)&&(g.raw[t]=u(g,e))})),a(e,(function(e){g._addStorage(e)})),a(t,(function(e){g._addPlugin(e)})),g}},6238:function(e,t,n){var r=Object.assign?Object.assign:function(e,t,n,r){for(var o=1;o<arguments.length;o++)c(Object(arguments[o]),(function(t,n){e[n]=t}));return e},o=function(){if(Object.create)return function(e,t,n,o){var i=u(arguments,1);return r.apply(this,[Object.create(e)].concat(i))};{function e(){}return function(t,n,o,i){var a=u(arguments,1);return e.prototype=t,r.apply(this,[new e].concat(a))}}}(),i=String.prototype.trim?function(e){return String.prototype.trim.call(e)}:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},a="undefined"!=typeof window?window:n.g;function u(e,t){return Array.prototype.slice.call(e,t||0)}function c(e,t){s(e,(function(e,n){return t(e,n),!1}))}function s(e,t){if(f(e)){for(var n=0;n<e.length;n++)if(t(e[n],n))return e[n]}else for(var r in e)if(e.hasOwnProperty(r)&&t(e[r],r))return e[r]}function f(e){return null!=e&&"function"!=typeof e&&"number"==typeof e.length}e.exports={assign:r,create:o,trim:i,bind:function(e,t){return function(){return t.apply(e,Array.prototype.slice.call(arguments,0))}},slice:u,each:c,map:function(e,t){var n=f(e)?[]:{};return s(e,(function(e,r){return n[r]=t(e,r),!1})),n},pluck:s,isList:f,isFunction:function(e){return e&&"[object Function]"==={}.toString.call(e)},isObject:function(e){return e&&"[object Object]"==={}.toString.call(e)},Global:a}},4067:function(e,t,n){e.exports=[n(6059),n(4465),n(2052),n(16),n(5094),n(3825)]},16:function(e,t,n){var r=n(6238),o=r.Global,i=r.trim;e.exports={name:"cookieStorage",read:function(e){if(!e||!s(e))return null;var t="(?:^|.*;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*";return unescape(a.cookie.replace(new RegExp(t),"$1"))},write:function(e,t){if(!e)return;a.cookie=escape(e)+"="+escape(t)+"; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/"},each:u,remove:c,clearAll:function(){u((function(e,t){c(t)}))}};var a=o.document;function u(e){for(var t=a.cookie.split(/; ?/g),n=t.length-1;n>=0;n--)if(i(t[n])){var r=t[n].split("="),o=unescape(r[0]);e(unescape(r[1]),o)}}function c(e){e&&s(e)&&(a.cookie=escape(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/")}function s(e){return new RegExp("(?:^|;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(a.cookie)}},6059:function(e,t,n){var r=n(6238).Global;function o(){return r.localStorage}function i(e){return o().getItem(e)}e.exports={name:"localStorage",read:i,write:function(e,t){return o().setItem(e,t)},each:function(e){for(var t=o().length-1;t>=0;t--){var n=o().key(t);e(i(n),n)}},remove:function(e){return o().removeItem(e)},clearAll:function(){return o().clear()}}},3825:function(e){e.exports={name:"memoryStorage",read:function(e){return t[e]},write:function(e,n){t[e]=n},each:function(e){for(var n in t)t.hasOwnProperty(n)&&e(t[n],n)},remove:function(e){delete t[e]},clearAll:function(e){t={}}};var t={}},4465:function(e,t,n){var r=n(6238).Global;e.exports={name:"oldFF-globalStorage",read:function(e){return o[e]},write:function(e,t){o[e]=t},each:i,remove:function(e){return o.removeItem(e)},clearAll:function(){i((function(e,t){delete o[e]}))}};var o=r.globalStorage;function i(e){for(var t=o.length-1;t>=0;t--){var n=o.key(t);e(o[n],n)}}},2052:function(e,t,n){var r=n(6238).Global;e.exports={name:"oldIE-userDataStorage",write:function(e,t){if(u)return;var n=s(e);a((function(e){e.setAttribute(n,t),e.save(o)}))},read:function(e){if(u)return;var t=s(e),n=null;return a((function(e){n=e.getAttribute(t)})),n},each:function(e){a((function(t){for(var n=t.XMLDocument.documentElement.attributes,r=n.length-1;r>=0;r--){var o=n[r];e(t.getAttribute(o.name),o.name)}}))},remove:function(e){var t=s(e);a((function(e){e.removeAttribute(t),e.save(o)}))},clearAll:function(){a((function(e){var t=e.XMLDocument.documentElement.attributes;e.load(o);for(var n=t.length-1;n>=0;n--)e.removeAttribute(t[n].name);e.save(o)}))}};var o="storejs",i=r.document,a=function(){if(!i||!i.documentElement||!i.documentElement.addBehavior)return null;var e,t,n,r="script";try{(t=new ActiveXObject("htmlfile")).open(),t.write("<"+r+">document.w=window</"+r+'><iframe src="/favicon.ico"></iframe>'),t.close(),e=t.w.frames[0].document,n=e.createElement("div")}catch(a){n=i.createElement("div"),e=i.body}return function(t){var r=[].slice.call(arguments,0);r.unshift(n),e.appendChild(n),n.addBehavior("#default#userData"),n.load(o),t.apply(this,r),e.removeChild(n)}}(),u=(r.navigator?r.navigator.userAgent:"").match(/ (MSIE 8|MSIE 9|MSIE 10)\./);var c=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g");function s(e){return e.replace(/^\d/,"___$&").replace(c,"___")}},5094:function(e,t,n){var r=n(6238).Global;function o(){return r.sessionStorage}function i(e){return o().getItem(e)}e.exports={name:"sessionStorage",read:i,write:function(e,t){return o().setItem(e,t)},each:function(e){for(var t=o().length-1;t>=0;t--){var n=o().key(t);e(i(n),n)}},remove:function(e){return o().removeItem(e)},clearAll:function(){return o().clear()}}},4542:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return v}});var o=n(7294),i=n(5414),a=n(1679),u=n(6994);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var f=["as","id"],l="reach-skip-nav";var p=(0,o.forwardRef)((function(e,t){var n=e.as,r=void 0===n?"div":n,i=e.id,a=s(e,f),u=i||l;return(0,o.createElement)(r,c({},a,{ref:t,id:u,"data-reach-skip-nav-content":""}))}));var d=n(6321),h=n(5444);var g=()=>(0,h.useStaticQuery)("3090755652").blogThemeConfig,y=n(3431);const m=["children"];var v=e=>{let{children:t}=e,n=r(e,m);const o=g(),{webfontURL:c}=o;return(0,y.tZ)(a.Ge.root,null,(0,y.tZ)(i.q,null,(0,y.tZ)("link",{rel:"stylesheet",href:c})),(0,y.tZ)(p,null),(0,y.tZ)(d.Z,n),(0,y.tZ)("div",{css:(0,u.iv)({width:"100%",background:"white"})},(0,y.tZ)("div",{css:(0,u.iv)({maxWidth:"container",mx:"auto",px:3,py:4,position:"relative"})},t)),(0,y.tZ)("div",{id:"go-up",onClick:()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0}},(0,y.tZ)("svg",{className:"icon","aria-hidden":"true"},(0,y.tZ)("use",{xlinkHref:"#icon-ai-top"}))))}},2114:function(e,t,n){"use strict";var r=n(3113),o=n(1679),i=n(6994),a=n(5444);t.Z=e=>{let{tags:t}=e;return(0,r.tZ)("span",null,t.map((e=>(0,r.tZ)("span",null,(0,r.tZ)("svg",{className:"icon","aria-hidden":"true"},(0,r.tZ)("use",{xlinkHref:"#icon-biaoqian"})),(0,r.tZ)(o.Ge.a,{as:a.Link,to:`/#${e}`,css:(0,i.iv)({fontSize:14,textDecoration:"none",color:"gray",borderRadius:"12px",mr:9,cursor:"pointer",":hover":{color:"black",borderColor:"black"}})},e)))))}},1282:function(e,t,n){"use strict";n(7294);var r=n(5414),o=n(5444),i=n(3431);function a(e){let{description:t,lang:n,meta:a,title:u,imageSource:c,imageAlt:s}=e;const{site:f}=(0,o.useStaticQuery)("764694655"),l=t||f.siteMetadata.description,p=c?`${f.siteMetadata.siteUrl}${c}`:null,d=s||l;return(0,i.tZ)(r.q,{htmlAttributes:{lang:n},title:u,titleTemplate:`%s | ${f.siteMetadata.title}`,meta:[{name:"description",content:l},{property:"og:title",content:u},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:creator",content:f.siteMetadata.author},{name:"twitter:title",content:u},{name:"twitter:description",content:l}].concat(c?[{name:"og:image",content:p},{name:"og:image:alt",content:d},{name:"twitter:image",content:p},{name:"twitter:image:alt",content:d},{name:"twitter:card",content:"summary_large_image"}]:[{name:"twitter:card",content:"summary"}]).concat(a)})}a.defaultProps={lang:"en",meta:[]},t.Z=a},3910:function(e,t,n){"use strict";n(7294);var r=n(6994),o=n(1679),i=n(5444),a=n(8950),u=n.n(a),c=n(3431);t.Z=e=>{let t,{posts:n}=e;try{n?(t=(e=>{let t={};return e.forEach((e=>{e.tags.forEach((e=>{t[e]?t[e]+=1:t[e]=1}))})),t})(n),u().set("tags",JSON.stringify(t))):t=JSON.parse(u().get("tags")||"{}")}catch(a){console.log(a)}(e=>{Object.keys(e).reduce(((t,n)=>t+e[n]),0)})(t);return(0,c.tZ)("div",{css:(0,r.iv)({height:500,position:"absolute",top:50,right:-150,"@media (max-width: 1366px)":{left:0,top:2,display:"flex",width:"100%",flexWrap:"wrap",height:40,justifyContent:"center"}})},(0,c.tZ)("div",{css:(0,r.iv)({color:"gray",mb:2,"@media (max-width: 1366px)":{mr:2,lineHeight:"16px",display:"inline-block",height:16}})},(0,c.tZ)("svg",{className:"icon","aria-hidden":"true"},(0,c.tZ)("use",{xlinkHref:"#icon-biaoqian"})),"标签"),Object.keys(t).map((e=>(0,c.tZ)("div",{css:(0,r.iv)({lineHeight:"24px","@media (max-width: 1366px)":{mr:2,lineHeight:"16px",display:"inline-block",height:16}})},(0,c.tZ)(o.Ge.a,{as:i.Link,to:`/#${e}`,css:(0,r.iv)({":hover":{color:"#66E0FF"}})},e,"(",t[e],")")))))}}}]);
//# sourceMappingURL=799b9e28ec84f08939ab3af68c08e0b6efc8bad3-904717f029b00fdd6f28.js.map