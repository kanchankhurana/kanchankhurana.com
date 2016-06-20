(function(){'use strict';var k,aa=aa||{},m=this;function ba(a,b){a=a.split(".");var c=m;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]?c=c[d]:c=c[d]={}:c[d]=b}function p(a,b){a=a.split(".");b=b||m;for(var c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}function q(){}
function r(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function t(a){var b=r(a);return"array"==b||"object"==b&&"number"==typeof a.length}function u(a){return"string"==typeof a}function v(a){return"number"==typeof a}function w(a){return"function"==r(a)}function x(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}var ca="closure_uid_"+(1E9*Math.random()>>>0),da=0;function ea(a,b,c){return a.call.apply(a.bind,arguments)}
function fa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function y(a,b,c){y=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ea:fa;return y.apply(null,arguments)}
function ga(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}var ha=Date.now||function(){return+new Date};
function ia(a){if(m.execScript)m.execScript(a,"JavaScript");else if(m.eval){if(null==ja)if(m.eval("var _evalTest_ = 1;"),"undefined"!=typeof m._evalTest_){try{delete m._evalTest_}catch(d){}ja=!0}else ja=!1;if(ja)m.eval(a);else{var b=m.document,c=b.createElement("SCRIPT");c.type="text/javascript";c.defer=!1;c.appendChild(b.createTextNode(a));b.body.appendChild(c);b.body.removeChild(c)}}else throw Error("goog.globalEval not available");}var ja=null;
function z(a,b){function c(){}c.prototype=b.prototype;a.H=b.prototype;a.prototype=new c;a.sa=function(a,c,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[c].apply(a,g)}};function A(a){if(Error.captureStackTrace)Error.captureStackTrace(this,A);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}z(A,Error);A.prototype.name="CustomError";var ka=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function la(a){if(!ma.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(na,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(oa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(pa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(qa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(ra,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(sa,"&#0;"));return a}var na=/&/g,oa=/</g,pa=/>/g,qa=/"/g,ra=/'/g,sa=/\x00/g,ma=/[\x00&<>"']/;
function ta(a,b){return a<b?-1:a>b?1:0};var wa=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(u(a))return u(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},xa=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},ya=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,
b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1};function za(a){var b;a:{b=Aa;for(var c=a.length,d=u(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:u(a)?a.charAt(b):a[b]}function Ba(a,b){b=wa(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}function Ca(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};function Da(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function Ea(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function Fa(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}var Ga="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ha(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ga.length;f++)c=Ga[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var C;a:{var Ia=m.navigator;if(Ia){var Ja=Ia.userAgent;if(Ja){C=Ja;break a}}C=""}function D(a){return-1!=C.indexOf(a)};var Ka=D("Opera"),E=D("Trident")||D("MSIE"),La=D("Edge"),F=D("Gecko")&&!(-1!=C.toLowerCase().indexOf("webkit")&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge"),Ma=-1!=C.toLowerCase().indexOf("webkit")&&!D("Edge");function Na(){var a=m.document;return a?a.documentMode:void 0}var Oa;
a:{var Pa="",Qa=function(){var a=C;if(F)return/rv\:([^\);]+)(\)|;)/.exec(a);if(La)return/Edge\/([\d\.]+)/.exec(a);if(E)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Ma)return/WebKit\/(\S+)/.exec(a);if(Ka)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Qa&&(Pa=Qa?Qa[1]:"");if(E){var Ra=Na();if(null!=Ra&&Ra>parseFloat(Pa)){Oa=String(Ra);break a}}Oa=Pa}var Sa=Oa,Ta={};
function G(a){var b;if(!(b=Ta[a])){b=0;for(var c=ka(String(Sa)).split("."),d=ka(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"",l=/(\d*)(\D*)/g,n=/(\d*)(\D*)/g;do{var B=l.exec(g)||["","",""],H=n.exec(h)||["","",""];if(0==B[0].length&&0==H[0].length)break;b=ta(0==B[1].length?0:parseInt(B[1],10),0==H[1].length?0:parseInt(H[1],10))||ta(0==B[2].length,0==H[2].length)||ta(B[2],H[2])}while(0==b)}b=Ta[a]=0<=b}return b}
var Ua=m.document,Va=Ua&&E?Na()||("CSS1Compat"==Ua.compatMode?parseInt(Sa,10):5):void 0;var Wa=!E||9<=Number(Va);!F&&!E||E&&9<=Number(Va)||F&&G("1.9.1");E&&G("9");function Xa(a,b){Da(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Ya.hasOwnProperty(d)?a.setAttribute(Ya[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}var Ya={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Za(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Wa&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',la(g.name),'"');if(g.type){f.push(' type="',la(g.type),'"');var h={};Ha(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=e.createElement(f);g&&(u(g)?f.className=g:"array"==r(g)?f.className=g.join(" "):Xa(f,g));2<d.length&&$a(e,f,d);return f}
function $a(a,b,c){function d(c){c&&b.appendChild(u(c)?a.createTextNode(c):c)}for(var e=2;e<c.length;e++){var f=c[e];!t(f)||x(f)&&0<f.nodeType?d(f):xa(ab(f)?Ca(f):f,d)}}function ab(a){if(a&&"number"==typeof a.length){if(x(a))return"function"==typeof a.item||"string"==typeof a.item;if(w(a))return"function"==typeof a.item}return!1};function bb(a){bb[" "](a);return a}bb[" "]=q;var cb=/^[\w+/]+[=]{0,2}$/;ba("userfeedback.api.startFeedback",function(a,b,c){a.timeOfStartCall=(new Date).getTime();var d=c||m,e=d.document,f;(f=(f=(f=(d||m).document.querySelector("script[nonce]"))&&f.getAttribute("nonce"))&&cb.test(f)?f:void 0)&&(a.nonce=f);if("help"==a.flow){var g=p("document.location.href",d);!a.helpCenterContext&&g&&(a.helpCenterContext=g.substring(0,1200));g=!0;if(b&&JSON&&JSON.stringify){var h=JSON.stringify(b);(g=1200>=h.length)&&(a.psdJson=h)}g||(b={invalidPsd:!0})}b=[a,b,c];d.GOOGLE_FEEDBACK_START_ARGUMENTS=
b;c=a.serverUri||"//www.google.com/tools/feedback";if(g=d.GOOGLE_FEEDBACK_START)g.apply(d,b);else{var d=c+"/load.js?",l;for(l in a)b=a[l],null!=b&&!x(b)&&(d+=encodeURIComponent(l)+"="+encodeURIComponent(b)+"&");a=e.createElement("script");f&&a.setAttribute("nonce",f);a.src=d;e.body.appendChild(a)}});var I="StopIteration"in m?m.StopIteration:{message:"StopIteration",stack:""};function J(){}J.prototype.next=function(){throw I;};J.prototype.G=function(){return this};function db(a){if(a instanceof J)return a;if("function"==typeof a.G)return a.G(!1);if(t(a)){var b=0,c=new J;c.next=function(){for(;;){if(b>=a.length)throw I;if(b in a)return a[b++];b++}};return c}throw Error("Not implemented");}
function eb(a,b){if(t(a))try{xa(a,b,void 0)}catch(c){if(c!==I)throw c;}else{a=db(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==I)throw c;}}}function fb(a){if(t(a))return Ca(a);a=db(a);var b=[];eb(a,function(a){b.push(a)});return b};function gb(a,b){this.h={};this.g=[];this.j=this.i=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){a instanceof gb?(c=a.C(),d=a.D()):(c=Fa(a),d=Ea(a));for(var e=0;e<c.length;e++)this.set(c[e],d[e])}}k=gb.prototype;k.D=function(){hb(this);for(var a=[],b=0;b<this.g.length;b++)a.push(this.h[this.g[b]]);return a};k.C=function(){hb(this);return this.g.concat()};
k.clear=function(){this.h={};this.j=this.i=this.g.length=0};function hb(a){if(a.i!=a.g.length){for(var b=0,c=0;b<a.g.length;){var d=a.g[b];Object.prototype.hasOwnProperty.call(a.h,d)&&(a.g[c++]=d);b++}a.g.length=c}if(a.i!=a.g.length){for(var e={},c=b=0;b<a.g.length;)d=a.g[b],Object.prototype.hasOwnProperty.call(e,d)||(a.g[c++]=d,e[d]=1),b++;a.g.length=c}}k.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.h,a)?this.h[a]:b};
k.set=function(a,b){Object.prototype.hasOwnProperty.call(this.h,a)||(this.i++,this.g.push(a),this.j++);this.h[a]=b};k.forEach=function(a,b){for(var c=this.C(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};k.clone=function(){return new gb(this)};k.G=function(a){hb(this);var b=0,c=this.j,d=this,e=new J;e.next=function(){if(c!=d.j)throw Error("The map has changed since the iterator was created");if(b>=d.g.length)throw I;var e=d.g[b++];return a?e:d.h[e]};return e};function ib(a){if(a.D&&"function"==typeof a.D)return a.D();if(u(a))return a.split("");if(t(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Ea(a)}
function jb(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(t(a)||u(a))xa(a,b,void 0);else{var c;if(a.C&&"function"==typeof a.C)c=a.C();else if(a.D&&"function"==typeof a.D)c=void 0;else if(t(a)||u(a)){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=Fa(a);for(var d=ib(a),e=d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}};function kb(a){var b=m.onerror,c=!1;Ma&&!G("535.3")&&(c=!c);m.onerror=function(d,e,f,g,h){b&&b(d,e,f,g,h);a({message:d,fileName:e,la:f,ua:g,error:h});return c}};function lb(){this.g=ha()}new lb;lb.prototype.set=function(a){this.g=a};lb.prototype.reset=function(){this.set(ha())};lb.prototype.get=function(){return this.g};function mb(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}function nb(a){var b=[];ob(new pb,a,b);return b.join("")}function pb(){}
function ob(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if("array"==r(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),ob(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),qb(d,c),c.push(":"),ob(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":qb(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}var rb={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},sb=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
function qb(a,b){b.push('"',a.replace(sb,function(a){var b=rb[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),rb[a]=b);return b}),'"')};function tb(a){switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:return!0;default:return!1}};function ub(){}ub.prototype.h=null;function vb(a){return a.h||(a.h=a.j())};var wb;function xb(){}z(xb,ub);xb.prototype.g=function(){var a=yb(this);return a?new ActiveXObject(a):new XMLHttpRequest};xb.prototype.j=function(){var a={};yb(this)&&(a[0]=!0,a[1]=!0);return a};
function yb(a){if(!a.i&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.i=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.i}wb=new xb;function zb(a,b,c){this.j=c;this.i=a;this.l=b;this.h=0;this.g=null}zb.prototype.get=function(){var a;0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i();return a};function Ab(a,b){a.l(b);a.h<a.j&&(a.h++,b.next=a.g,a.g=b)};var Bb=[],Cb=[],Db=!1;function Eb(a){Bb[Bb.length]=a;if(Db)for(var b=0;b<Cb.length;b++)a(y(Cb[b].g,Cb[b]))};function Fb(a){m.setTimeout(function(){throw a;},0)}var Gb;
function Hb(){var a=m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!D("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=y(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!D("Trident")&&!D("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.W;c.W=null;a()}};return function(a){d.next={W:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){m.setTimeout(a,0)}}function Ib(a){return a}Eb(function(a){Ib=a});var Kb=new zb(function(){return new Jb},function(a){a.reset()},100);function Lb(){var a=Mb,b=null;a.g&&(b=a.g,a.g=a.g.next,a.g||(a.h=null),b.next=null);return b}function Jb(){this.next=this.h=this.g=null}Jb.prototype.set=function(a,b){this.g=a;this.h=b;this.next=null};Jb.prototype.reset=function(){this.next=this.h=this.g=null};function Nb(a,b){Ob||Pb();Qb||(Ob(),Qb=!0);var c=Mb,d=Kb.get();d.set(a,b);c.h?c.h.next=d:c.g=d;c.h=d}var Ob;function Pb(){if(m.Promise&&m.Promise.resolve){var a=m.Promise.resolve(void 0);Ob=function(){a.then(Rb)}}else Ob=function(){var a=Rb,a=Ib(a);!w(m.setImmediate)||m.Window&&m.Window.prototype&&!D("Edge")&&m.Window.prototype.setImmediate==m.setImmediate?(Gb||(Gb=Hb()),Gb(a)):m.setImmediate(a)}}var Qb=!1,Mb=new function(){this.h=this.g=null};
function Rb(){for(var a;a=Lb();){try{a.g.call(a.h)}catch(b){Fb(b)}Ab(Kb,a)}Qb=!1};function Sb(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}function Tb(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};function K(a,b){this.g=0;this.o=void 0;this.i=this.h=this.j=null;this.l=this.m=!1;if(a!=q)try{var c=this;a.call(b,function(a){L(c,2,a)},function(a){L(c,3,a)})}catch(d){L(this,3,d)}}function Ub(){this.next=this.i=this.h=this.j=this.g=null;this.l=!1}Ub.prototype.reset=function(){this.i=this.h=this.j=this.g=null;this.l=!1};var Vb=new zb(function(){return new Ub},function(a){a.reset()},100);function Wb(a,b,c){var d=Vb.get();d.j=a;d.h=b;d.i=c;return d}
function Xb(a){if(a instanceof K)return a;var b=new K(q);L(b,2,a);return b}K.prototype.then=function(a,b,c){return Yb(this,w(a)?a:null,w(b)?b:null,c)};Sb(K);function M(a,b){Yb(a,null,b,void 0)}function Zb(a,b){a.h||2!=a.g&&3!=a.g||$b(a);a.i?a.i.next=b:a.h=b;a.i=b}function Yb(a,b,c,d){var e=Wb(null,null,null);e.g=new K(function(a,g){e.j=b?function(c){try{var e=b.call(d,c);a(e)}catch(n){g(n)}}:a;e.h=c?function(b){try{var e=c.call(d,b);a(e)}catch(n){g(n)}}:g});e.g.j=a;Zb(a,e);return e.g}
K.prototype.s=function(a){this.g=0;L(this,2,a)};K.prototype.v=function(a){this.g=0;L(this,3,a)};function L(a,b,c){if(0==a.g){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.g=1;var d;a:{var e=c,f=a.s,g=a.v;if(e instanceof K)Zb(e,Wb(f||q,g||null,a)),d=!0;else if(Tb(e))e.then(f,g,a),d=!0;else{if(x(e))try{var h=e.then;if(w(h)){ac(e,h,f,g,a);d=!0;break a}}catch(l){g.call(a,l);d=!0;break a}d=!1}}d||(a.o=c,a.g=b,a.j=null,$b(a),3!=b||bc(a,c))}}
function ac(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}function g(a){h||(h=!0,c.call(e,a))}var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}function $b(a){a.m||(a.m=!0,Nb(a.u,a))}function cc(a){var b=null;a.h&&(b=a.h,a.h=b.next,b.next=null);a.h||(a.i=null);return b}K.prototype.u=function(){for(var a;a=cc(this);){var b=this.g,c=this.o;if(3==b&&a.h&&!a.l){var d;for(d=this;d&&d.l;d=d.j)d.l=!1}if(a.g)a.g.j=null,dc(a,b,c);else try{a.l?a.j.call(a.i):dc(a,b,c)}catch(e){ec.call(null,e)}Ab(Vb,a)}this.m=!1};
function dc(a,b,c){2==b?a.j.call(a.i,c):a.h&&a.h.call(a.i,c)}function bc(a,b){a.l=!0;Nb(function(){a.l&&ec.call(null,b)})}var ec=Fb;var fc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function gc(a){a=a.match(fc)[1]||null;!a&&m.self&&m.self.location&&(a=m.self.location.protocol,a=a.substr(0,a.length-1));return a?a.toLowerCase():""}function hc(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")}
function ic(a,b,c){if("array"==r(b))for(var d=0;d<b.length;d++)ic(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}function jc(a,b,c){for(c=c||0;c<b.length;c+=2)ic(b[c],b[c+1],a);return a}function kc(a,b){for(var c in b)ic(c,b[c],a);return a}function lc(a,b){return hc(2==arguments.length?jc([a],arguments[1],0):jc([a],arguments,1))};function mc(a){var b={ba:7E3,da:new nc};return oc(a,b).then(function(a){var d=a.responseText;b&&b.ra&&(a=b.ra,0==d.lastIndexOf(a,0)&&(d=d.substring(a.length)));return mb(d)})}
function oc(a,b){return new K(function(c,d){var e=b||{},f,g=e.da?e.da.g():wb.g();try{g.open("GET",a,!0)}catch(n){d(new N("Error opening XHR: "+n.message,a))}g.onreadystatechange=function(){if(4==g.readyState){m.clearTimeout(f);var b;!(b=tb(g.status))&&(b=0===g.status)&&(b=gc(a),b=!("http"==b||"https"==b||""==b));b?c(g):d(new pc(g.status,a))}};g.onerror=function(){d(new N("Network error",a))};if(e.headers)for(var h in e.headers){var l=e.headers[h];null!=l&&g.setRequestHeader(h,l)}e.withCredentials&&
(g.withCredentials=e.withCredentials);e.responseType&&(g.responseType=e.responseType);e.ma&&g.overrideMimeType(e.ma);0<e.ba&&(f=m.setTimeout(function(){g.onreadystatechange=q;g.abort();d(new qc(a))},e.ba));try{g.send(null)}catch(n){g.onreadystatechange=q,m.clearTimeout(f),d(new N("Error sending XHR: "+n.message,a))}})}function N(a,b){A.call(this,a+", url="+b)}z(N,A);N.prototype.name="XhrError";function pc(a,b){N.call(this,"Request Failed, status="+a,b)}z(pc,N);pc.prototype.name="XhrHttpError";
function qc(a){N.call(this,"Request timed out",a)}z(qc,N);qc.prototype.name="XhrTimeoutError";function nc(){}z(nc,ub);nc.prototype.g=function(){var a=new XMLHttpRequest;if("withCredentials"in a)return a;if("undefined"!=typeof XDomainRequest)return new rc;throw Error("Unsupported browser");};nc.prototype.j=function(){return{}};
function rc(){this.g=new XDomainRequest;this.readyState=0;this.responseText=this.onreadystatechange=null;this.status=-1;this.statusText=this.responseXML=null;this.g.onload=y(this.ia,this);this.g.onerror=y(this.X,this);this.g.onprogress=y(this.ja,this);this.g.ontimeout=y(this.ka,this)}k=rc.prototype;k.open=function(a,b,c){if(null!=c&&!c)throw Error("Only async requests are supported.");this.g.open(a,b)};
k.send=function(a){if(a)if("string"==typeof a)this.g.send(a);else throw Error("Only string data is supported");else this.g.send()};k.abort=function(){this.g.abort()};k.setRequestHeader=function(){};k.ia=function(){this.status=200;this.responseText=this.g.responseText;sc(this,4)};k.X=function(){this.status=500;this.responseText=null;sc(this,4)};k.ka=function(){this.X()};k.ja=function(){this.status=200;sc(this,1)};function sc(a,b){a.readyState=b;if(a.onreadystatechange)a.onreadystatechange()};/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function O(a,b){this.j=[];this.A=b||null;this.g=this.h=!1;this.i=void 0;this.s=this.v=this.m=!1;this.l=0;this.o=null;this.B=0}O.prototype.u=function(a,b){this.m=!1;tc(this,a,b)};function tc(a,b,c){a.h=!0;a.i=c;a.g=!b;uc(a)}function vc(a){if(a.h){if(!a.s)throw new wc;a.s=!1}}O.prototype.callback=function(a){vc(this);tc(this,!0,a)};function xc(a,b,c){a.j.push([b,c,void 0]);a.h&&uc(a)}
O.prototype.then=function(a,b,c){var d,e,f=new K(function(a,b){d=a;e=b});xc(this,d,function(a){e(a)});return f.then(a,b,c)};Sb(O);function yc(a){return ya(a.j,function(a){return w(a[1])})}
function uc(a){if(a.l&&a.h&&yc(a)){var b=a.l,c=zc[b];c&&(m.clearTimeout(c.g),delete zc[b]);a.l=0}a.o&&(a.o.B--,delete a.o);for(var b=a.i,d=c=!1;a.j.length&&!a.m;){var e=a.j.shift(),f=e[0],g=e[1],e=e[2];if(f=a.g?g:f)try{var h=f.call(e||a.A,b);void 0!==h&&(a.g=a.g&&(h==b||h instanceof Error),a.i=b=h);if(Tb(b)||"function"===typeof m.Promise&&b instanceof m.Promise)d=!0,a.m=!0}catch(l){b=l,a.g=!0,yc(a)||(c=!0)}}a.i=b;d&&(h=y(a.u,a,!0),d=y(a.u,a,!1),b instanceof O?(xc(b,h,d),b.v=!0):b.then(h,d));c&&(b=
new Ac(b),zc[b.g]=b,a.l=b.g)}function wc(){A.call(this)}z(wc,A);wc.prototype.message="Deferred has already fired";wc.prototype.name="AlreadyCalledError";function Ac(a){this.g=m.setTimeout(y(this.i,this),0);this.h=a}Ac.prototype.i=function(){delete zc[this.g];throw this.h;};var zc={};function Cc(a,b){var c=b||{};b=c.document||document;var d=document.createElement("SCRIPT"),e={g:d,J:void 0},f=new O(0,e),g=null,h=null!=c.timeout?c.timeout:5E3;0<h&&(g=window.setTimeout(function(){Dc(d,!0);var b=new Ec(1,"Timeout reached for loading script "+a);vc(f);tc(f,!1,b)},h),e.J=g);d.onload=d.onreadystatechange=function(){d.readyState&&"loaded"!=d.readyState&&"complete"!=d.readyState||(Dc(d,c.ta||!1,g),f.callback(null))};d.onerror=function(){Dc(d,!0,g);var b=new Ec(0,"Error while loading script "+
a);vc(f);tc(f,!1,b)};e=c.attributes||{};Ha(e,{type:"text/javascript",charset:"UTF-8",src:a});Xa(d,e);Fc(b).appendChild(d);return f}function Fc(a){var b=a.getElementsByTagName("HEAD");return b&&0!=b.length?b[0]:a.documentElement}function Dc(a,b,c){null!=c&&m.clearTimeout(c);a.onload=q;a.onerror=q;a.onreadystatechange=q;b&&window.setTimeout(function(){a&&a.parentNode&&a.parentNode.removeChild(a)},0)}function Ec(a,b){a="Jsloader error (code #"+a+")";b&&(a+=": "+b);A.call(this,a)}z(Ec,A);function Gc(a){a=a||{};this.operatorDeferredUrl=a.operatorDeferredUrl;this.alphaTestMode=a.alphaTestMode||!1;this.stagingMode=a.stagingMode||!1;this.rosterId=a.rosterId||"talk_roster";this.feedbackId=a.feedbackId||74772;this.moleVersion=a.moleVersion||void 0;this.moleUrl=a.moleUrl||"https://support.google.com/inapp/chat_mole_frame";this.gstaticBaseUrl=a.gstaticBaseUrl||void 0;this.isRtl=a.isRtl||void 0;this.forceLeftMoles=a.forceLeftMoles||void 0;this.helpCenterName=a.helpCenterName||null;this.localeName=
a.localeName||null;this.document=a.document||document;this.source=a.source||void 0;this.entityId=a.entityId||void 0;this.authUser=a.authUser||void 0;this.apiKey=a.apiKey||void 0};function Hc(a){this.g=a instanceof Gc?a:new Gc(a);this.h=Ic(this);this.g.moleVersion||this.h.then(function(a){this.g.moleVersion=a.cbfVersion},function(){},this);this.h.then(this.i,function(){},this)}function Jc(){return p("cs.operatorDeferredInstance")}function Kc(){var a=p("cs.operatorDeferredPromise");return a instanceof K?a:null!=a?Xb(a):null}function Lc(a){ba("cs.operatorDeferredPromise",a)}function Mc(){}
function Ic(a){return mc(a.g.alphaTestMode?"//ssl.gstatic.com/support/realtime/operatorParamsDev":a.g.stagingMode?"//ssl.gstatic.com/support/realtime/operatorParamsStaging":"//ssl.gstatic.com/support/realtime/operatorParams").then(function(a){if(!a)throw Error("operatorParams is null");return a},function(a){throw a;})}
function Nc(a){var b=Kc();if(b)return b;if(b=Jc())return a=Xb(b),Lc(a),a;a=Oc(a).then(function(a){var b={document:this.g.document};this.g.operatorDeferredUrl=a;return Cc(a,b).then(function(){return m.cs.OperatorDeferred.getInstance(this.g)},null,this)},null,a);Lc(a);return a}Hc.prototype.i=function(a){(new RegExp(a.eagerLoadHostnamePattern,a.eagerLoadHostnameFlags)).test(this.g.document.location.hostname)&&M(Nc(this),ga(Mc,"Error retrieving OperatorDeferred"))};
function Oc(a){return a.g.operatorDeferredUrl?Xb(a.g.operatorDeferredUrl):a.h.then(function(a){return a.operatorDeferredUrl},function(){})}function Pc(a,b){return Nc(a).then(ga(function(a,b){b.registerAvailabilityCallbacks(a)},b))}function Qc(a){return Nc(a).then(function(a){a.getAvailabilities()})}function Rc(a,b,c){b=ga(function(a,b,c,g,h){return h.requestSupport(a,b,c,g)},b,c,void 0,!0);return(c=Jc())?(a=b(c),Xb(a)):Nc(a).then(b)};function P(){this.l=this.l;this.u=this.u}P.prototype.l=!1;P.prototype.isDisposed=function(){return this.l};P.prototype.S=function(){this.l||(this.l=!0,this.w())};P.prototype.w=function(){if(this.u)for(;this.u.length;)this.u.shift()()};function Q(a,b){this.type=a;this.g=this.target=b;this.Z=!0}Q.prototype.h=function(){this.Z=!1};var Sc=!E||9<=Number(Va),Tc=E&&!G("9");!Ma||G("528");F&&G("1.9b")||E&&G("8")||Ka&&G("9.5")||Ma&&G("528");F&&!G("8")||E&&G("9");function R(a,b){Q.call(this,a?a.type:"");this.g=this.target=null;this.clientY=this.clientX=0;this.i=null;a&&this.init(a,b)}z(R,Q);
R.prototype.init=function(a,b){this.type=a.type;var c=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.g=b;if((b=a.relatedTarget)&&F)try{bb(b.nodeName)}catch(d){}null===c?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY):(this.clientX=void 0!==c.clientX?c.clientX:c.pageX,this.clientY=void 0!==c.clientY?c.clientY:c.pageY);this.i=a;a.defaultPrevented&&this.h()};
R.prototype.h=function(){R.H.h.call(this);var a=this.i;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Tc)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Uc="closure_listenable_"+(1E6*Math.random()|0),Vc=0;function Wc(a,b,c){this.listener=a;this.g=null;this.src=b;this.type=c;this.R=!1;this.I=void 0;this.key=++Vc;this.F=this.P=!1}function Xc(a){a.F=!0;a.listener=null;a.g=null;a.src=null;a.I=null};function Yc(a){this.src=a;this.g={};this.h=0}function Zc(a,b){var c=b.type;c in a.g&&Ba(a.g[c],b)&&(Xc(b),0==a.g[c].length&&(delete a.g[c],a.h--))}function $c(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.F&&f.listener==b&&0==!!c&&f.I==d)return e}return-1};var ad="closure_lm_"+(1E6*Math.random()|0),bd={},cd=0;function dd(a,b,c,d,e){if("array"==r(b))for(var f=0;f<b.length;f++)dd(a,b[f],c,d,e);else(c=ed(c),a&&a[Uc])?(a=a.i,b=String(b).toString(),b in a.g&&(f=a.g[b],c=$c(f,c,d,e),-1<c&&(Xc(f[c]),Array.prototype.splice.call(f,c,1),0==f.length&&(delete a.g[b],a.h--)))):a&&(a=fd(a))&&(b=a.g[b.toString()],a=-1,b&&(a=$c(b,c,!!d,e)),(c=-1<a?b[a]:null)&&gd(c))}
function gd(a){if(!v(a)&&a&&!a.F){var b=a.src;if(b&&b[Uc])Zc(b.i,a);else{var c=a.type,d=a.g;b.removeEventListener?b.removeEventListener(c,d,a.R):b.detachEvent&&b.detachEvent(c in bd?bd[c]:bd[c]="on"+c,d);cd--;(c=fd(b))?(Zc(c,a),0==c.h&&(c.src=null,b[ad]=null)):Xc(a)}}}function hd(a,b,c,d){var e=!0;if(a=fd(a))if(b=a.g[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.R==c&&!f.F&&(f=id(f,d),e=e&&!1!==f)}return e}
function id(a,b){var c=a.listener,d=a.I||a.src;a.P&&gd(a);return c.call(d,b)}
function jd(a,b){if(a.F)return!0;if(!Sc){var c=b||p("window.event");b=new R(c,this);var d=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var e=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(g){e=!0}if(e||void 0==c.returnValue)c.returnValue=!0}c=[];for(e=b.g;e;e=e.parentNode)c.push(e);a=a.type;for(e=c.length-1;0<=e;e--){b.g=c[e];var f=hd(c[e],a,!0,b),d=d&&f}for(e=0;e<c.length;e++)b.g=c[e],f=hd(c[e],a,!1,b),d=d&&f}return d}return id(a,new R(b,this))}
function fd(a){a=a[ad];return a instanceof Yc?a:null}var kd="__closure_events_fn_"+(1E9*Math.random()>>>0);function ed(a){if(w(a))return a;a[kd]||(a[kd]=function(b){return a.handleEvent(b)});return a[kd]}Eb(function(a){jd=a(jd)});function S(){P.call(this);this.i=new Yc(this);this.ea=this;this.N=null}z(S,P);S.prototype[Uc]=!0;S.prototype.removeEventListener=function(a,b,c,d){dd(this,a,b,c,d)};
function T(a,b){var c,d=a.N;if(d){c=[];for(var e=1;d;d=d.N)c.push(d),++e}a=a.ea;d=b.type||b;u(b)?b=new Q(b,a):b instanceof Q?b.target=b.target||a:(e=b,b=new Q(d,a),Ha(b,e));var e=!0,f;if(c)for(var g=c.length-1;0<=g;g--)f=b.g=c[g],e=ld(f,d,!0,b)&&e;f=b.g=a;e=ld(f,d,!0,b)&&e;e=ld(f,d,!1,b)&&e;if(c)for(g=0;g<c.length;g++)f=b.g=c[g],e=ld(f,d,!1,b)&&e}
S.prototype.w=function(){S.H.w.call(this);if(this.i){var a=this.i,b=0,c;for(c in a.g){for(var d=a.g[c],e=0;e<d.length;e++)++b,Xc(d[e]);delete a.g[c];a.h--}}this.N=null};function ld(a,b,c,d){b=a.i.g[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.F&&g.R==c){var h=g.listener,l=g.I||g.src;g.P&&Zc(a.i,g);e=!1!==h.call(l,d)&&e}}return e&&0!=d.Z};function md(a,b,c){if(w(a))c&&(a=y(a,c));else if(a&&"function"==typeof a.handleEvent)a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:m.setTimeout(a,b||0)};function U(a){S.call(this);this.headers=new gb;this.A=a||null;this.h=!1;this.B=this.g=null;this.o=this.fa=this.M="";this.j=this.L=this.m=this.K=!1;this.v=0;this.s=null;this.U="";this.O=this.V=!1}z(U,S);var nd=/^https?$/i,od=["POST","PUT"],pd=[];k=U.prototype;k.ga=function(){this.S();Ba(pd,this)};
function qd(a,b,c,d,e){if(a.g)throw Error("[goog.net.XhrIo] Object is active with another request="+a.M+"; newUri="+b);c=c?c.toUpperCase():"GET";a.M=b;a.o="";a.fa=c;a.K=!1;a.h=!0;a.g=a.A?a.A.g():wb.g();a.B=a.A?vb(a.A):vb(wb);a.g.onreadystatechange=y(a.Y,a);try{a.L=!0,a.g.open(c,String(b),!0),a.L=!1}catch(g){rd(a,g);return}b=d||"";var f=a.headers.clone();e&&jb(e,function(a,b){f.set(b,a)});e=za(f.C());d=m.FormData&&b instanceof m.FormData;!(0<=wa(od,c))||e||d||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");
f.forEach(function(a,b){this.g.setRequestHeader(b,a)},a);a.U&&(a.g.responseType=a.U);"withCredentials"in a.g&&a.g.withCredentials!==a.V&&(a.g.withCredentials=a.V);try{sd(a),0<a.v&&(a.O=td(a.g),a.O?(a.g.timeout=a.v,a.g.ontimeout=y(a.J,a)):a.s=md(a.J,a.v,a)),a.m=!0,a.g.send(b),a.m=!1}catch(g){rd(a,g)}}function td(a){return E&&G(9)&&v(a.timeout)&&void 0!==a.ontimeout}function Aa(a){return"content-type"==a.toLowerCase()}
k.J=function(){"undefined"!=typeof aa&&this.g&&(this.o="Timed out after "+this.v+"ms, aborting",T(this,"timeout"),this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,T(this,"complete"),T(this,"abort"),ud(this)))};function rd(a,b){a.h=!1;a.g&&(a.j=!0,a.g.abort(),a.j=!1);a.o=b;vd(a);ud(a)}function vd(a){a.K||(a.K=!0,T(a,"complete"),T(a,"error"))}k.w=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ud(this,!0));U.H.w.call(this)};
k.Y=function(){this.isDisposed()||(this.L||this.m||this.j?wd(this):this.T())};k.T=function(){wd(this)};function wd(a){if(a.h&&"undefined"!=typeof aa&&(!a.B[1]||4!=V(a)||2!=xd(a)))if(a.m&&4==V(a))md(a.Y,0,a);else if(T(a,"readystatechange"),4==V(a)){a.h=!1;try{var b=xd(a),c;if(!(c=tb(b))){var d;if(d=0===b){var e=gc(String(a.M));d=!nd.test(e)}c=d}if(c)T(a,"complete"),T(a,"success");else{var f;try{f=2<V(a)?a.g.statusText:""}catch(g){f=""}a.o=f+" ["+xd(a)+"]";vd(a)}}finally{ud(a)}}}
function ud(a,b){if(a.g){sd(a);var c=a.g,d=a.B[0]?q:null;a.g=null;a.B=null;b||T(a,"ready");try{c.onreadystatechange=d}catch(e){}}}function sd(a){a.g&&a.O&&(a.g.ontimeout=null);v(a.s)&&(m.clearTimeout(a.s),a.s=null)}function V(a){return a.g?a.g.readyState:0}function xd(a){try{return 2<V(a)?a.g.status:-1}catch(b){return-1}}Eb(function(a){U.prototype.T=a(U.prototype.T)});function W(a){P.call(this);this.h=a}z(W,P);W.prototype.g=function(a){return yd(this,a)};function X(a,b){return(b?"__wrapper_":"__protected_")+(a[ca]||(a[ca]=++da))+"__"}function yd(a,b){var c=X(a,!0);b[c]||((b[c]=zd(a,b))[X(a,!1)]=b);return b[c]}
function zd(a,b){function c(){if(a.isDisposed())return b.apply(this,arguments);try{return b.apply(this,arguments)}catch(c){if(!(c&&"object"===typeof c&&c.message&&0==c.message.indexOf("Error in protected function: ")||"string"===typeof c&&0==c.indexOf("Error in protected function: ")))throw a.h(c),new Ad(c);}finally{}}c[X(a,!1)]=b;return c}
function Bd(a,b){var c=p("window"),d=c[b];c[b]=function(b,c){u(b)&&(b=ga(ia,b));b=yd(a,b);if(d.apply)return d.apply(this,arguments);var g=b;if(2<arguments.length)var h=Array.prototype.slice.call(arguments,2),g=function(){b.apply(this,h)};return d(g,c)};c[b][X(a,!1)]=d}W.prototype.w=function(){var a=p("window"),b;b=a.setTimeout;b=b[X(this,!1)]||b;a.setTimeout=b;b=a.setInterval;b=b[X(this,!1)]||b;a.setInterval=b;W.H.w.call(this)};
function Ad(a){A.call(this,"Error in protected function: "+(a&&a.message?String(a.message):String(a)));(a=a&&a.stack)&&u(a)&&(this.stack=a)}z(Ad,A);function Y(a,b,c){S.call(this);this.m=b||null;this.j={};this.s=Cd;this.o=a;if(!c)if(this.g=null,E&&!G("10"))kb(y(this.h,this));else{this.g=new W(y(this.h,this));Bd(this.g,"setTimeout");Bd(this.g,"setInterval");a=this.g;b=p("window");c=["requestAnimationFrame","mozRequestAnimationFrame","webkitAnimationFrame","msRequestAnimationFrame"];for(var d=0;d<c.length;d++){var e=c[d];c[d]in b&&Bd(a,e)}a=this.g;Db=!0;b=y(a.g,a);for(c=0;c<Bb.length;c++)Bb[c](b);Cb.push(a)}}z(Y,S);
function Dd(a){Q.call(this,"a");this.error=a}z(Dd,Q);function Cd(a,b,c,d){var e=new U;pd.push(e);var f=e.i,g=e.ga,h="ready".toString(),l=f.g[h];l||(l=f.g[h]=[],f.h++);-1<$c(l,g,void 0,void 0)||(f=new Wc(g,f.src,h),f.P=!0,l.push(f));qd(e,a,b,c,d)}
Y.prototype.h=function(a,b){var c=p("window.location.href");if(u(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:c,stack:"Not available"};else{var d,e,f=!1;try{d=a.lineNumber||a.la||"Not available"}catch(ua){d="Not available",f=!0}try{e=a.fileName||a.filename||a.sourceURL||m.$googDebugFname||c}catch(ua){e="Not available",f=!0}a=!f&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:d,fileName:e,
stack:a.stack||"Not available"}}if(b){var c={},g;for(g in b)c[g]=b[g];b=c}else b={};if(this.m)try{this.m(a,b)}catch(ua){}c=a.message.substring(0,1900);g=a.stack;try{var h=lc(this.o,"script",a.fileName,"error",c,"line",a.lineNumber),l;a:{var n=this.j,B;for(B in n){l=!1;break a}l=!0}l||(h=hc(kc([h],this.j)));l={};l.trace=g;if(b)for(var H in b)l["context."+H]=b[H];var va,Bc=kc([],l);Bc[0]="";va=Bc.join("");v(null)&&(va=va.substring(0,null));this.s(h,"POST",va,this.v)}catch(ua){}try{T(this,new Dd(a))}catch(ua){}};
Y.prototype.w=function(){var a=this.g;a&&"function"==typeof a.S&&a.S();Y.H.w.call(this)};function Z(a,b,c,d,e,f,g){e=new Y(e||"//www.google.com/tools/feedback/jserror",void 0,!0);this.i=y(e.h,e);this.s=a;this.B=c||"en";this.v=b||!1;this.A=!!d;this.u=f;this.h=this.g=null;this.o=g}function Ed(a,b,c){if(null!=b&&null!=c){var d={};d[b]=c;M(Pc(a.j,d),a.i)}}k=Z.prototype;k.$=function(a){this.g=a;Ed(this,this.g,this.l)};k.aa=function(a){this.h=a;Ed(this,this.h,this.m)};k.pa=function(a){this.l=a;Ed(this,this.g,this.l)};k.qa=function(a){this.m=a;Ed(this,this.h,this.m)};
k.na=function(a){null!=this.g&&M(Rc(this.j,this.g,a),this.i)};k.oa=function(a){null!=this.h&&M(Rc(this.j,this.h,a),this.i)};k.ca=function(){null==this.g&&null==this.h||M(Qc(this.j),this.i)};Z.prototype.setChatPool=Z.prototype.$;Z.prototype.setHangoutPool=Z.prototype.aa;Z.prototype.setChatCallback=Z.prototype.pa;Z.prototype.setHangoutCallback=Z.prototype.qa;Z.prototype.requestChatSupport=Z.prototype.na;Z.prototype.requestHangoutSupport=Z.prototype.oa;Z.prototype.getAvailabilities=Z.prototype.ca;function Fd(){};function Gd(){}z(Gd,Fd);Gd.prototype.clear=function(){var a=fb(this.G(!0)),b=this;xa(a,function(a){b.g.removeItem(a)})};function Hd(a){this.g=a}z(Hd,Gd);k=Hd.prototype;k.set=function(a,b){try{this.g.setItem(a,b)}catch(c){if(0==this.g.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};k.get=function(a){a=this.g.getItem(a);if(!u(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.G=function(a){var b=0,c=this.g,d=new J;d.next=function(){if(b>=c.length)throw I;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!u(d))throw"Storage mechanism: Invalid value was encountered";return d};return d};k.clear=function(){this.g.clear()};k.key=function(a){return this.g.key(a)};function Id(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.g=a}z(Id,Hd);function Jd(){this.g=new Id}z(Jd,P);Jd.prototype.clear=function(){this.g.g.removeItem("GOOGLE_HELP_SESSION_STATE")};function Kd(a,b){var c=a.serverUri||"//www.gstatic.com/feedback";m.GOOGLE_HELP_SESSION_ARGUMENTS=arguments;var d=window.document,e=d.createElement("script");e.src=c+"/session_load.js";d.body.appendChild(e)}ba("userfeedback.api.help.resumeOpenHelpSession",Kd);(function(a,b){var c=a.helpCenterPath,d=a.locale,e=a.authuser,f=a.escalationJSONString,g=!!a.useStagingServer,h=a.apiKey,l;l=document.body;var n;a:{n=9==l.nodeType?l:l.ownerDocument||l.document;if(n.defaultView&&n.defaultView.getComputedStyle&&(n=n.defaultView.getComputedStyle(l,null))){n=n.direction||n.getPropertyValue("direction")||"";break a}n=""}n||(n=l.currentStyle?l.currentStyle.direction:null);l="rtl"==(n||l.style&&l.style.direction);n=window;if(null==n||null==n.top||null==n.top.document||
window.top.GOOGLE_HELP_CHAT_SUPPORT)c=null;else{c=new Z(c,l,d,g,void 0,e,h);window.top.GOOGLE_HELP_CHAT_SUPPORT=c;d={helpCenterName:c.s,localeName:c.B,source:1,rosterId:"roster-for-Google-Help",isRtl:c.v,alphaTestMode:!1,stagingMode:c.A,timeoutMs:2E4,authUser:c.u,apiKey:c.o};e=Za("div",{id:"roster-for-Google-Help",style:"display: none"});window.top.document.body.appendChild(e);try{c.j=new Hc(d)}catch(B){c.i(B)}}d=new Jd;f&&(d.clear(),f={ha:JSON.parse(f).ha},f.sessionTimestamp=(new Date).getTime(),
d.g.set("GOOGLE_HELP_SESSION_STATE",nb(f)));if(f=d.g.get("GOOGLE_HELP_SESSION_STATE")){if(f=mb(f),e=(new Date).getTime(),g=f.sessionTimestamp,!g||!v(g)||e>g+6E4)d.clear(),f=null}else f=null;d=(f||{}).escalationOptions;c&&d&&(f=d.hangout||{},(d=(d.chat||{}).chat_pool_id)&&c.$(d),(f=f.hangout_pool_id)&&c.aa(f),c.ca());Kd(a,b)}).apply(m,m.GOOGLE_HELP_CHAT_ARGUMENTS);}).call(this);