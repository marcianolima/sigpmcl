/* @preserve
 * Leaflet 1.5.1+Detached: 2e3e0ffbe87f246eb76d86d2633ddd59b262830b.2e3e0ff, a JS library for interactive maps. http://leafletjs.com
 * (c) 2010-2018 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?i(exports):"function"==typeof define&&define.amd?define(["exports"],i):i(t.L={})}(this,function(t){"use strict";var i=Object.freeze;function h(t){var i,e,n,o;for(e=1,n=arguments.length;e<n;e++)for(i in o=arguments[e])t[i]=o[i];return t}Object.freeze=function(t){return t};var s=Object.create||function(t){return e.prototype=t,new e};function e(){}function a(t,i){var e=Array.prototype.slice;if(t.bind)return t.bind.apply(t,e.call(arguments,1));var n=e.call(arguments,2);return function(){return t.apply(i,n.length?n.concat(e.call(arguments)):arguments)}}var n=0;function u(t){return t._leaflet_id=t._leaflet_id||++n,t._leaflet_id}function o(t,i,e){var n,o,s,r;return r=function(){n=!1,o&&(s.apply(e,o),o=!1)},s=function(){n?o=arguments:(t.apply(e,arguments),setTimeout(r,i),n=!0)}}function r(t,i,e){var n=i[1],o=i[0],s=n-o;return t===n&&e?t:((t-o)%s+s)%s+o}function l(){return!1}function c(t,i){return i=void 0===i?6:i,+(Math.round(t+"e+"+i)+"e-"+i)}function _(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function d(t){return _(t).split(/\s+/)}function p(t,i){for(var e in t.hasOwnProperty("options")||(t.options=t.options?s(t.options):{}),i)t.options[e]=i[e];return t.options}function m(t,i,e){var n=[];for(var o in t)n.push(encodeURIComponent(e?o.toUpperCase():o)+"="+encodeURIComponent(t[o]));return(i&&-1!==i.indexOf("?")?"&":"?")+n.join("&")}var f=/\{ *([\w_-]+) *\}/g;function g(t,n){return t.replace(f,function(t,i){var e=n[i];if(void 0===e)throw new Error("No value provided for variable "+t);return"function"==typeof e&&(e=e(n)),e})}var v=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function y(t,i){for(var e=0;e<t.length;e++)if(t[e]===i)return e;return-1}var x="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function w(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}var P=0;function b(t){var i=+new Date,e=Math.max(0,16-(i-P));return P=i+e,window.setTimeout(t,e)}var T=window.requestAnimationFrame||w("RequestAnimationFrame")||b,z=window.cancelAnimationFrame||w("CancelAnimationFrame")||w("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)};function M(t,i,e){if(!e||T!==b)return T.call(window,a(t,i));t.call(i)}function C(t){t&&z.call(window,t)}var S=(Object.freeze||Object)({freeze:i,extend:h,create:s,bind:a,lastId:n,stamp:u,throttle:o,wrapNum:r,falseFn:l,formatNum:c,trim:_,splitWords:d,setOptions:p,getParamString:m,template:g,isArray:v,indexOf:y,emptyImageUrl:x,requestFn:T,cancelFn:z,requestAnimFrame:M,cancelAnimFrame:C});function Z(){}Z.extend=function(t){function i(){this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()}var e=i.__super__=this.prototype,n=s(e);for(var o in(n.constructor=i).prototype=n,this)this.hasOwnProperty(o)&&"prototype"!==o&&"__super__"!==o&&(i[o]=this[o]);return t.statics&&(h(i,t.statics),delete t.statics),t.includes&&(function(t){if("undefined"==typeof L||!L||!L.Mixin)return;t=v(t)?t:[t];for(var i=0;i<t.length;i++)t[i]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",(new Error).stack)}(t.includes),h.apply(null,[n].concat(t.includes)),delete t.includes),n.options&&(t.options=h(s(n.options),t.options)),h(n,t),n._initHooks=[],n.callInitHooks=function(){if(!this._initHooksCalled){e.callInitHooks&&e.callInitHooks.call(this),this._initHooksCalled=!0;for(var t=0,i=n._initHooks.length;t<i;t++)n._initHooks[t].call(this)}},i},Z.include=function(t){return h(this.prototype,t),this},Z.mergeOptions=function(t){return h(this.prototype.options,t),this},Z.addInitHook=function(t){var i=Array.prototype.slice.call(arguments,1),e="function"==typeof t?t:function(){this[t].apply(this,i)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(e),this};var E={on:function(t,i,e){if("object"==typeof t)for(var n in t)this._on(n,t[n],i);else for(var o=0,s=(t=d(t)).length;o<s;o++)this._on(t[o],i,e);return this},off:function(t,i,e){if(t)if("object"==typeof t)for(var n in t)this._off(n,t[n],i);else for(var o=0,s=(t=d(t)).length;o<s;o++)this._off(t[o],i,e);else delete this._events;return this},_on:function(t,i,e){this._events=this._events||{};var n=this._events[t];n||(n=[],this._events[t]=n),e===this&&(e=void 0);for(var o={fn:i,ctx:e},s=n,r=0,a=s.length;r<a;r++)if(s[r].fn===i&&s[r].ctx===e)return;s.push(o)},_off:function(t,i,e){var n,o,s;if(this._events&&(n=this._events[t]))if(i){if(e===this&&(e=void 0),n)for(o=0,s=n.length;o<s;o++){var r=n[o];if(r.ctx===e&&r.fn===i)return r.fn=l,this._firingCount&&(this._events[t]=n=n.slice()),void n.splice(o,1)}}else{for(o=0,s=n.length;o<s;o++)n[o].fn=l;delete this._events[t]}},fire:function(t,i,e){if(!this.listens(t,e))return this;var n=h({},i,{type:t,target:this,sourceTarget:i&&i.sourceTarget||this});if(this._events){var o=this._events[t];if(o){this._firingCount=this._firingCount+1||1;for(var s=0,r=o.length;s<r;s++){var a=o[s];a.fn.call(a.ctx||this,n)}this._firingCount--}}return e&&this._propagateEvent(n),this},listens:function(t,i){var e=this._events&&this._events[t];if(e&&e.length)return!0;if(i)for(var n in this._eventParents)if(this._eventParents[n].listens(t,i))return!0;return!1},once:function(t,i,e){if("object"==typeof t){for(var n in t)this.once(n,t[n],i);return this}var o=a(function(){this.off(t,i,e).off(t,o,e)},this);return this.on(t,i,e).on(t,o,e)},addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[u(t)]=t,this},removeEventParent:function(t){return this._eventParents&&delete this._eventParents[u(t)],this},_propagateEvent:function(t){for(var i in this._eventParents)this._eventParents[i].fire(t.type,h({layer:t.target,propagatedFrom:t.target},t),!0)}};E.addEventListener=E.on,E.removeEventListener=E.clearAllEventListeners=E.off,E.addOneTimeEventListener=E.once,E.fireEvent=E.fire,E.hasEventListeners=E.listens;var k=Z.extend(E);function B(t,i,e){this.x=e?Math.round(t):t,this.y=e?Math.round(i):i}var A=Math.trunc||function(t){return 0<t?Math.floor(t):Math.ceil(t)};function I(t,i,e){return t instanceof B?t:v(t)?new B(t[0],t[1]):null==t?t:"object"==typeof t&&"x"in t&&"y"in t?new B(t.x,t.y):new B(t,i,e)}function O(t,i){if(t)for(var e=i?[t,i]:t,n=0,o=e.length;n<o;n++)this.extend(e[n])}function R(t,i){return!t||t instanceof O?t:new O(t,i)}function N(t,i){if(t)for(var e=i?[t,i]:t,n=0,o=e.length;n<o;n++)this.extend(e[n])}function D(t,i){return t instanceof N?t:new N(t,i)}function j(t,i,e){if(isNaN(t)||isNaN(i))throw new Error("Invalid LatLng object: ("+t+", "+i+")");this.lat=+t,this.lng=+i,void 0!==e&&(this.alt=+e)}function W(t,i,e){return t instanceof j?t:v(t)&&"object"!=typeof t[0]?3===t.length?new j(t[0],t[1],t[2]):2===t.length?new j(t[0],t[1]):null:null==t?t:"object"==typeof t&&"lat"in t?new j(t.lat,"lng"in t?t.lng:t.lon,t.alt):void 0===i?null:new j(t,i,e)}B.prototype={clone:function(){return new B(this.x,this.y)},add:function(t){return this.clone()._add(I(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(I(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},scaleBy:function(t){return new B(this.x*t.x,this.y*t.y)},unscaleBy:function(t){return new B(this.x/t.x,this.y/t.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=A(this.x),this.y=A(this.y),this},distanceTo:function(t){var i=(t=I(t)).x-this.x,e=t.y-this.y;return Math.sqrt(i*i+e*e)},equals:function(t){return(t=I(t)).x===this.x&&t.y===this.y},contains:function(t){return t=I(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+c(this.x)+", "+c(this.y)+")"}},O.prototype={extend:function(t){return t=I(t),this.min||this.max?(this.min.x=Math.min(t.x,this.min.x),this.max.x=Math.max(t.x,this.max.x),this.min.y=Math.min(t.y,this.min.y),this.max.y=Math.max(t.y,this.max.y)):(this.min=t.clone(),this.max=t.clone()),this},getCenter:function(t){return new B((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return new B(this.min.x,this.max.y)},getTopRight:function(){return new B(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var i,e;return(t="number"==typeof t[0]||t instanceof B?I(t):R(t))instanceof O?(i=t.min,e=t.max):i=e=t,i.x>=this.min.x&&e.x<=this.max.x&&i.y>=this.min.y&&e.y<=this.max.y},intersects:function(t){t=R(t);var i=this.min,e=this.max,n=t.min,o=t.max,s=o.x>=i.x&&n.x<=e.x,r=o.y>=i.y&&n.y<=e.y;return s&&r},overlaps:function(t){t=R(t);var i=this.min,e=this.max,n=t.min,o=t.max,s=o.x>i.x&&n.x<e.x,r=o.y>i.y&&n.y<e.y;return s&&r},isValid:function(){return!(!this.min||!this.max)}},N.prototype={extend:function(t){var i,e,n=this._southWest,o=this._northEast;if(t instanceof j)e=i=t;else{if(!(t instanceof N))return t?this.extend(W(t)||D(t)):this;if(i=t._southWest,e=t._northEast,!i||!e)return this}return n||o?(n.lat=Math.min(i.lat,n.lat),n.lng=Math.min(i.lng,n.lng),o.lat=Math.max(e.lat,o.lat),o.lng=Math.max(e.lng,o.lng)):(this._southWest=new j(i.lat,i.lng),this._northEast=new j(e.lat,e.lng)),this},pad:function(t){var i=this._southWest,e=this._northEast,n=Math.abs(i.lat-e.lat)*t,o=Math.abs(i.lng-e.lng)*t;return new N(new j(i.lat-n,i.lng-o),new j(e.lat+n,e.lng+o))},getCenter:function(){return new j((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new j(this.getNorth(),this.getWest())},getSouthEast:function(){return new j(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){t="number"==typeof t[0]||t instanceof j||"lat"in t?W(t):D(t);var i,e,n=this._southWest,o=this._northEast;return t instanceof N?(i=t.getSouthWest(),e=t.getNorthEast()):i=e=t,i.lat>=n.lat&&e.lat<=o.lat&&i.lng>=n.lng&&e.lng<=o.lng},intersects:function(t){t=D(t);var i=this._southWest,e=this._northEast,n=t.getSouthWest(),o=t.getNorthEast(),s=o.lat>=i.lat&&n.lat<=e.lat,r=o.lng>=i.lng&&n.lng<=e.lng;return s&&r},overlaps:function(t){t=D(t);var i=this._southWest,e=this._northEast,n=t.getSouthWest(),o=t.getNorthEast(),s=o.lat>i.lat&&n.lat<e.lat,r=o.lng>i.lng&&n.lng<e.lng;return s&&r},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t,i){return!!t&&(t=D(t),this._southWest.equals(t.getSouthWest(),i)&&this._northEast.equals(t.getNorthEast(),i))},isValid:function(){return!(!this._southWest||!this._northEast)}};var H,F={latLngToPoint:function(t,i){var e=this.projection.project(t),n=this.scale(i);return this.transformation._transform(e,n)},pointToLatLng:function(t,i){var e=this.scale(i),n=this.transformation.untransform(t,e);return this.projection.unproject(n)},project:function(t){return this.projection.project(t)},unproject:function(t){return this.projection.unproject(t)},scale:function(t){return 256*Math.pow(2,t)},zoom:function(t){return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){if(this.infinite)return null;var i=this.projection.bounds,e=this.scale(t);return new O(this.transformation.transform(i.min,e),this.transformation.transform(i.max,e))},infinite:!(j.prototype={equals:function(t,i){return!!t&&(t=W(t),Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng))<=(void 0===i?1e-9:i))},toString:function(t){return"LatLng("+c(this.lat,t)+", "+c(this.lng,t)+")"},distanceTo:function(t){return U.distance(this,W(t))},wrap:function(){return U.wrapLatLng(this)},toBounds:function(t){var i=180*t/40075017,e=i/Math.cos(Math.PI/180*this.lat);return D([this.lat-i,this.lng-e],[this.lat+i,this.lng+e])},clone:function(){return new j(this.lat,this.lng,this.alt)}}),wrapLatLng:function(t){var i=this.wrapLng?r(t.lng,this.wrapLng,!0):t.lng;return new j(this.wrapLat?r(t.lat,this.wrapLat,!0):t.lat,i,t.alt)},wrapLatLngBounds:function(t){var i=t.getCenter(),e=this.wrapLatLng(i),n=i.lat-e.lat,o=i.lng-e.lng;if(0==n&&0==o)return t;var s=t.getSouthWest(),r=t.getNorthEast();return new N(new j(s.lat-n,s.lng-o),new j(r.lat-n,r.lng-o))}},U=h({},F,{wrapLng:[-180,180],R:6371e3,distance:function(t,i){var e=Math.PI/180,n=t.lat*e,o=i.lat*e,s=Math.sin((i.lat-t.lat)*e/2),r=Math.sin((i.lng-t.lng)*e/2),a=s*s+Math.cos(n)*Math.cos(o)*r*r,h=2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));return this.R*h}}),V=6378137,q={R:V,MAX_LATITUDE:85.0511287798,project:function(t){var i=Math.PI/180,e=this.MAX_LATITUDE,n=Math.max(Math.min(e,t.lat),-e),o=Math.sin(n*i);return new B(this.R*t.lng*i,this.R*Math.log((1+o)/(1-o))/2)},unproject:function(t){var i=180/Math.PI;return new j((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*i,t.x*i/this.R)},bounds:(H=V*Math.PI,new O([-H,-H],[H,H]))};function G(t,i,e,n){if(v(t))return this._a=t[0],this._b=t[1],this._c=t[2],void(this._d=t[3]);this._a=t,this._b=i,this._c=e,this._d=n}function K(t,i,e,n){return new G(t,i,e,n)}G.prototype={transform:function(t,i){return this._transform(t.clone(),i)},_transform:function(t,i){return i=i||1,t.x=i*(this._a*t.x+this._b),t.y=i*(this._c*t.y+this._d),t},untransform:function(t,i){return i=i||1,new B((t.x/i-this._b)/this._a,(t.y/i-this._d)/this._c)}};var Y,X=h({},U,{code:"EPSG:3857",projection:q,transformation:(Y=.5/(Math.PI*q.R),K(Y,.5,-Y,.5))}),J=h({},X,{code:"EPSG:900913"});function $(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Q(t,i){var e,n,o,s,r,a,h="";for(e=0,o=t.length;e<o;e++){for(n=0,s=(r=t[e]).length;n<s;n++)h+=(n?"L":"M")+(a=r[n]).x+" "+a.y;h+=i?Zt?"z":"x":""}return h||"M0 0"}var tt=document.documentElement.style,it="ActiveXObject"in window,et=it&&!document.addEventListener,nt="msLaunchUri"in navigator&&!("documentMode"in document),ot=kt("webkit"),st=kt("android"),rt=kt("android 2")||kt("android 3"),at=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),ht=st&&kt("Google")&&at<537&&!("AudioNode"in window),ut=!!window.opera,lt=kt("chrome"),ct=kt("gecko")&&!ot&&!ut&&!it,_t=!lt&&kt("safari"),dt=kt("phantom"),pt="OTransition"in tt,mt=0===navigator.platform.indexOf("Win"),ft=it&&"transition"in tt,gt="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!rt,vt="MozPerspective"in tt,yt=!window.L_DISABLE_3D&&(ft||gt||vt)&&!pt&&!dt,xt="undefined"!=typeof orientation||kt("mobile"),wt=xt&&ot,Pt=xt&&gt,Lt=!window.PointerEvent&&window.MSPointerEvent,bt=!(!window.PointerEvent&&!Lt),Tt=!window.L_NO_TOUCH&&(bt||"ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),zt=xt&&ut,Mt=xt&&ct,Ct=1<(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI),St=!!document.createElement("canvas").getContext,Zt=!(!document.createElementNS||!$("svg").createSVGRect),Et=!Zt&&function(){try{var t=document.createElement("div");t.innerHTML='<v:shape adj="1"/>';var i=t.firstChild;return i.style.behavior="url(#default#VML)",i&&"object"==typeof i.adj}catch(t){return!1}}();function kt(t){return 0<=navigator.userAgent.toLowerCase().indexOf(t)}var Bt=(Object.freeze||Object)({ie:it,ielt9:et,edge:nt,webkit:ot,android:st,android23:rt,androidStock:ht,opera:ut,chrome:lt,gecko:ct,safari:_t,phantom:dt,opera12:pt,win:mt,ie3d:ft,webkit3d:gt,gecko3d:vt,any3d:yt,mobile:xt,mobileWebkit:wt,mobileWebkit3d:Pt,msPointer:Lt,pointer:bt,touch:Tt,mobileOpera:zt,mobileGecko:Mt,retina:Ct,canvas:St,svg:Zt,vml:Et}),At=Lt?"MSPointerDown":"pointerdown",It=Lt?"MSPointerMove":"pointermove",Ot=Lt?"MSPointerUp":"pointerup",Rt=Lt?"MSPointerCancel":"pointercancel",Nt=["INPUT","SELECT","OPTION"],Dt={},jt=!1,Wt=0;function Ht(t,i,e,n){return"touchstart"===i?function(t,i,e){var n=a(function(t){if("mouse"!==t.pointerType&&t.MSPOINTER_TYPE_MOUSE&&t.pointerType!==t.MSPOINTER_TYPE_MOUSE){if(!(Nt.indexOf(t.target.tagName)<0))return;Di(t)}qt(t,i)});t["_leaflet_touchstart"+e]=n,t.addEventListener(At,n,!1),jt||(document.documentElement.addEventListener(At,Ft,!0),document.documentElement.addEventListener(It,Ut,!0),document.documentElement.addEventListener(Ot,Vt,!0),document.documentElement.addEventListener(Rt,Vt,!0),jt=!0)}(t,e,n):"touchmove"===i?function(t,i,e){var n=function(t){(t.pointerType!==t.MSPOINTER_TYPE_MOUSE&&"mouse"!==t.pointerType||0!==t.buttons)&&qt(t,i)};t["_leaflet_touchmove"+e]=n,t.addEventListener(It,n,!1)}(t,e,n):"touchend"===i&&function(t,i,e){var n=function(t){qt(t,i)};t["_leaflet_touchend"+e]=n,t.addEventListener(Ot,n,!1),t.addEventListener(Rt,n,!1)}(t,e,n),this}function Ft(t){Dt[t.pointerId]=t,Wt++}function Ut(t){Dt[t.pointerId]&&(Dt[t.pointerId]=t)}function Vt(t){delete Dt[t.pointerId],Wt--}function qt(t,i){for(var e in t.touches=[],Dt)t.touches.push(Dt[e]);t.changedTouches=[t],i(t)}var Gt=Lt?"MSPointerDown":bt?"pointerdown":"touchstart",Kt=Lt?"MSPointerUp":bt?"pointerup":"touchend",Yt="_leaflet_";function Xt(t,o,i){var s,r,a=!1;function e(t){var i;if(bt){if(!nt||"mouse"===t.pointerType)return;i=Wt}else i=t.touches.length;if(!(1<i)){var e=Date.now(),n=e-(s||e);r=t.touches?t.touches[0]:t,a=0<n&&n<=250,s=e}}function n(t){if(a&&!r.cancelBubble){if(bt){if(!nt||"mouse"===t.pointerType)return;var i,e,n={};for(e in r)i=r[e],n[e]=i&&i.bind?i.bind(r):i;r=n}r.type="dblclick",r.button=0,o(r),s=null}}return t[Yt+Gt+i]=e,t[Yt+Kt+i]=n,t[Yt+"dblclick"+i]=o,t.addEventListener(Gt,e,!1),t.addEventListener(Kt,n,!1),t.addEventListener("dblclick",o,!1),this}function Jt(t,i){var e=t[Yt+Gt+i],n=t[Yt+Kt+i],o=t[Yt+"dblclick"+i];return t.removeEventListener(Gt,e,!1),t.removeEventListener(Kt,n,!1),nt||t.removeEventListener("dblclick",o,!1),this}var $t,Qt,ti,ii,ei,ni=yi(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),oi=yi(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),si="webkitTransition"===oi||"OTransition"===oi?oi+"End":"transitionend";function ri(t){return"string"==typeof t?document.getElementById(t):t}function ai(t,i){var e=t.style[i]||t.currentStyle&&t.currentStyle[i];if((!e||"auto"===e)&&document.defaultView){var n=document.defaultView.getComputedStyle(t,null);e=n?n[i]:null}return"auto"===e?null:e}function hi(t,i,e){var n=document.createElement(t);return n.className=i||"",e&&e.appendChild(n),n}function ui(t){var i=t.parentNode;i&&i.removeChild(t)}function li(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function ci(t){var i=t.parentNode;i&&i.lastChild!==t&&i.appendChild(t)}function _i(t){var i=t.parentNode;i&&i.firstChild!==t&&i.insertBefore(t,i.firstChild)}function di(t,i){if(void 0!==t.classList)return t.classList.contains(i);var e=gi(t);return 0<e.length&&new RegExp("(^|\\s)"+i+"(\\s|$)").test(e)}function pi(t,i){if(void 0!==t.classList)for(var e=d(i),n=0,o=e.length;n<o;n++)t.classList.add(e[n]);else if(!di(t,i)){var s=gi(t);fi(t,(s?s+" ":"")+i)}}function mi(t,i){void 0!==t.classList?t.classList.remove(i):fi(t,_((" "+gi(t)+" ").replace(" "+i+" "," ")))}function fi(t,i){void 0===t.className.baseVal?t.className=i:t.className.baseVal=i}function gi(t){return t.correspondingElement&&(t=t.correspondingElement),void 0===t.className.baseVal?t.className:t.className.baseVal}function vi(t,i){"opacity"in t.style?t.style.opacity=i:"filter"in t.style&&function(t,i){var e=!1,n="DXImageTransform.Microsoft.Alpha";try{e=t.filters.item(n)}catch(t){if(1===i)return}i=Math.round(100*i),e?(e.Enabled=100!==i,e.Opacity=i):t.style.filter+=" progid:"+n+"(opacity="+i+")"}(t,i)}function yi(t){for(var i=document.documentElement.style,e=0;e<t.length;e++)if(t[e]in i)return t[e];return!1}function xi(t,i,e){var n=i||new B(0,0);t.style[ni]=(ft?"translate("+n.x+"px,"+n.y+"px)":"translate3d("+n.x+"px,"+n.y+"px,0)")+(e?" scale("+e+")":"")}function wi(t,i){t._leaflet_pos=i,yt?xi(t,i):(t.style.left=i.x+"px",t.style.top=i.y+"px")}function Pi(t){return t._leaflet_pos||new B(0,0)}if("onselectstart"in document)$t=function(){Ei(window,"selectstart",Di)},Qt=function(){Bi(window,"selectstart",Di)};else{var Li=yi(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);$t=function(){if(Li){var t=document.documentElement.style;ti=t[Li],t[Li]="none"}},Qt=function(){Li&&(document.documentElement.style[Li]=ti,ti=void 0)}}function bi(){Ei(window,"dragstart",Di)}function Ti(){Bi(window,"dragstart",Di)}function zi(t){for(;-1===t.tabIndex;)t=t.parentNode;t.style&&(Mi(),ei=(ii=t).style.outline,t.style.outline="none",Ei(window,"keydown",Mi))}function Mi(){ii&&(ii.style.outline=ei,ei=ii=void 0,Bi(window,"keydown",Mi))}function Ci(t){for(;!((t=t.parentNode).offsetWidth&&t.offsetHeight||t===document.body););return t}function Si(t){var i=t.getBoundingClientRect();return{x:i.width/t.offsetWidth||1,y:i.height/t.offsetHeight||1,boundingClientRect:i}}var Zi=(Object.freeze||Object)({TRANSFORM:ni,TRANSITION:oi,TRANSITION_END:si,get:ri,getStyle:ai,create:hi,remove:ui,empty:li,toFront:ci,toBack:_i,hasClass:di,addClass:pi,removeClass:mi,setClass:fi,getClass:gi,setOpacity:vi,testProp:yi,setTransform:xi,setPosition:wi,getPosition:Pi,disableTextSelection:$t,enableTextSelection:Qt,disableImageDrag:bi,enableImageDrag:Ti,preventOutline:zi,restoreOutline:Mi,getSizedParentNode:Ci,getScale:Si});function Ei(t,i,e,n){if("object"==typeof i)for(var o in i)Ai(t,o,i[o],e);else for(var s=0,r=(i=d(i)).length;s<r;s++)Ai(t,i[s],e,n);return this}var ki="_leaflet_events";function Bi(t,i,e,n){if("object"==typeof i)for(var o in i)Ii(t,o,i[o],e);else if(i)for(var s=0,r=(i=d(i)).length;s<r;s++)Ii(t,i[s],e,n);else{for(var a in t[ki])Ii(t,a,t[ki][a]);delete t[ki]}return this}function Ai(i,t,e,n){var o=t+u(e)+(n?"_"+u(n):"");if(i[ki]&&i[ki][o])return this;var s=function(t){return e.call(n||i,t||window.event)},r=s;bt&&0===t.indexOf("touch")?Ht(i,t,s,o):!Tt||"dblclick"!==t||bt&&lt?"addEventListener"in i?"mousewheel"===t?i.addEventListener("onwheel"in i?"wheel":"mousewheel",s,!1):"mouseenter"===t||"mouseleave"===t?(s=function(t){t=t||window.event,Ki(i,t)&&r(t)},i.addEventListener("mouseenter"===t?"mouseover":"mouseout",s,!1)):("click"===t&&st&&(s=function(t){!function(t,i){var e=t.timeStamp||t.originalEvent&&t.originalEvent.timeStamp,n=Ui&&e-Ui;if(n&&100<n&&n<500||t.target._simulatedClick&&!t._simulated)return ji(t);Ui=e,i(t)}(t,r)}),i.addEventListener(t,s,!1)):"attachEvent"in i&&i.attachEvent("on"+t,s):Xt(i,s,o),i[ki]=i[ki]||{},i[ki][o]=s}function Ii(t,i,e,n){var o=i+u(e)+(n?"_"+u(n):""),s=t[ki]&&t[ki][o];if(!s)return this;bt&&0===i.indexOf("touch")?function(t,i,e){var n=t["_leaflet_"+i+e];"touchstart"===i?t.removeEventListener(At,n,!1):"touchmove"===i?t.removeEventListener(It,n,!1):"touchend"===i&&(t.removeEventListener(Ot,n,!1),t.removeEventListener(Rt,n,!1))}(t,i,o):!Tt||"dblclick"!==i||bt&&lt?"removeEventListener"in t?"mousewheel"===i?t.removeEventListener("onwheel"in t?"wheel":"mousewheel",s,!1):t.removeEventListener("mouseenter"===i?"mouseover":"mouseleave"===i?"mouseout":i,s,!1):"detachEvent"in t&&t.detachEvent("on"+i,s):Jt(t,o),t[ki][o]=null}function Oi(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,Gi(t),this}function Ri(t){return Ai(t,"mousewheel",Oi),this}function Ni(t){return Ei(t,"mousedown touchstart dblclick",Oi),Ai(t,"click",qi),this}function Di(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}function ji(t){return Di(t),Oi(t),this}function Wi(t,i){if(!i)return new B(t.clientX,t.clientY);var e=Si(i),n=e.boundingClientRect;return new B((t.clientX-n.left)/e.x-i.clientLeft,(t.clientY-n.top)/e.y-i.clientTop)}var Hi=mt&&lt?2*window.devicePixelRatio:ct?window.devicePixelRatio:1;function Fi(t){return nt?t.wheelDeltaY/2:t.deltaY&&0===t.deltaMode?-t.deltaY/Hi:t.deltaY&&1===t.deltaMode?20*-t.deltaY:t.deltaY&&2===t.deltaMode?60*-t.deltaY:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?20*-t.detail:t.detail?t.detail/-32765*60:0}var Ui,Vi={};function qi(t){Vi[t.type]=!0}function Gi(t){var i=Vi[t.type];return Vi[t.type]=!1,i}function Ki(t,i){var e=i.relatedTarget;if(!e)return!0;try{for(;e&&e!==t;)e=e.parentNode}catch(t){return!1}return e!==t}var Yi=(Object.freeze||Object)({on:Ei,off:Bi,stopPropagation:Oi,disableScrollPropagation:Ri,disableClickPropagation:Ni,preventDefault:Di,stop:ji,getMousePosition:Wi,getWheelDelta:Fi,fakeStop:qi,skipped:Gi,isExternalTarget:Ki,addListener:Ei,removeListener:Bi}),Xi=k.extend({run:function(t,i,e,n){this.stop(),this._el=t,this._inProgress=!0,this._duration=e||.25,this._easeOutPower=1/Math.max(n||.5,.2),this._startPos=Pi(t),this._offset=i.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=M(this._animate,this),this._step()},_step:function(t){var i=+new Date-this._startTime,e=1e3*this._duration;i<e?this._runFrame(this._easeOut(i/e),t):(this._runFrame(1),this._complete())},_runFrame:function(t,i){var e=this._startPos.add(this._offset.multiplyBy(t));i&&e._round(),wi(this._el,e),this.fire("step")},_complete:function(){C(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),Ji=k.extend({options:{crs:X,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(t,i){i=p(this,i),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(t),this._initLayout(),this._onResize=a(this._onResize,this),this._initEvents(),i.maxBounds&&this.setMaxBounds(i.maxBounds),void 0!==i.zoom&&(this._zoom=this._limitZoom(i.zoom)),i.center&&void 0!==i.zoom&&this.setView(W(i.center),i.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=oi&&yt&&!zt&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),Ei(this._proxy,si,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(t,i,e){if((i=void 0===i?this._zoom:this._limitZoom(i),t=this._limitCenter(W(t),i,this.options.maxBounds),e=e||{},this._stop(),this._loaded&&!e.reset&&!0!==e)&&(void 0!==e.animate&&(e.zoom=h({animate:e.animate},e.zoom),e.pan=h({animate:e.animate,duration:e.duration},e.pan)),this._zoom!==i?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,i,e.zoom):this._tryAnimatedPan(t,e.pan)))return clearTimeout(this._sizeTimer),this;return this._resetView(t,i),this},setZoom:function(t,i){return this._loaded?this.setView(this.getCenter(),t,{zoom:i}):(this._zoom=t,this)},zoomIn:function(t,i){return t=t||(yt?this.options.zoomDelta:1),this.setZoom(this._zoom+t,i)},zoomOut:function(t,i){return t=t||(yt?this.options.zoomDelta:1),this.setZoom(this._zoom-t,i)},setZoomAround:function(t,i,e){var n=this.getZoomScale(i),o=this.getSize().divideBy(2),s=(t instanceof B?t:this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1-1/n),r=this.containerPointToLatLng(o.add(s));return this.setView(r,i,{zoom:e})},_getBoundsCenterZoom:function(t,i){i=i||{},t=t.getBounds?t.getBounds():D(t);var e=I(i.paddingTopLeft||i.padding||[0,0]),n=I(i.paddingBottomRight||i.padding||[0,0]),o=this.getBoundsZoom(t,!1,e.add(n));if((o="number"==typeof i.maxZoom?Math.min(i.maxZoom,o):o)===1/0)return{center:t.getCenter(),zoom:o};var s=n.subtract(e).divideBy(2),r=this.project(t.getSouthWest(),o),a=this.project(t.getNorthEast(),o);return{center:this.unproject(r.add(a).divideBy(2).add(s),o),zoom:o}},fitBounds:function(t,i){if(!(t=D(t)).isValid())throw new Error("Bounds are not valid.");var e=this._getBoundsCenterZoom(t,i);return this.setView(e.center,e.zoom,i)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,i){return this.setView(t,this._zoom,{pan:i})},panBy:function(t,i){if(i=i||{},!(t=I(t).round()).x&&!t.y)return this.fire("moveend");if(!0!==i.animate&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Xi,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),i.noMoveStart||this.fire("movestart"),!1!==i.animate){pi(this._mapPane,"leaflet-pan-anim");var e=this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane,e,i.duration||.25,i.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},flyTo:function(n,o,t){if(!1===(t=t||{}).animate||!yt)return this.setView(n,o,t);this._stop();var s=this.project(this.getCenter()),r=this.project(n),i=this.getSize(),a=this._zoom;n=W(n),o=void 0===o?a:o;var h=Math.max(i.x,i.y),u=h*this.getZoomScale(a,o),l=r.distanceTo(s)||1,c=1.42,_=c*c;function e(t){var i=(u*u-h*h+(t?-1:1)*_*_*l*l)/(2*(t?u:h)*_*l),e=Math.sqrt(i*i+1)-i;return e<1e-9?-18:Math.log(e)}function d(t){return(Math.exp(t)-Math.exp(-t))/2}function p(t){return(Math.exp(t)+Math.exp(-t))/2}var m=e(0);function f(t){return h*(p(m)*function(t){return d(t)/p(t)}(m+c*t)-d(m))/_}var g=Date.now(),v=(e(1)-m)/c,y=t.duration?1e3*t.duration:1e3*v*.8;return this._moveStart(!0,t.noMoveStart),function t(){var i=(Date.now()-g)/y,e=function(t){return 1-Math.pow(1-t,1.5)}(i)*v;i<=1?(this._flyToFrame=M(t,this),this._move(this.unproject(s.add(r.subtract(s).multiplyBy(f(e)/l)),a),this.getScaleZoom(h/function(t){return h*(p(m)/p(m+c*t))}(e),a),{flyTo:!0})):this._move(n,o)._moveEnd(!0)}.call(this),this},flyToBounds:function(t,i){var e=this._getBoundsCenterZoom(t,i);return this.flyTo(e.center,e.zoom,i)},setMaxBounds:function(t){return(t=D(t)).isValid()?(this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this.off("moveend",this._panInsideMaxBounds))},setMinZoom:function(t){var i=this.options.minZoom;return this.options.minZoom=t,this._loaded&&i!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(t):this},setMaxZoom:function(t){var i=this.options.maxZoom;return this.options.maxZoom=t,this._loaded&&i!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(t):this},panInsideBounds:function(t,i){this._enforcingBounds=!0;var e=this.getCenter(),n=this._limitCenter(e,this._zoom,D(t));return e.equals(n)||this.panTo(n,i),this._enforcingBounds=!1,this},panInside:function(t,i){var e=I((i=i||{}).paddingTopLeft||i.padding||[0,0]),n=I(i.paddingBottomRight||i.padding||[0,0]),o=this.getCenter(),s=this.project(o),r=this.project(t),a=this.getPixelBounds(),h=a.getSize().divideBy(2),u=R([a.min.add(e),a.max.subtract(n)]);if(!u.contains(r)){this._enforcingBounds=!0;var l=s.subtract(r),c=I(r.x+l.x,r.y+l.y);(r.x<u.min.x||r.x>u.max.x)&&(c.x=s.x-l.x,0<l.x?c.x+=h.x-e.x:c.x-=h.x-n.x),(r.y<u.min.y||r.y>u.max.y)&&(c.y=s.y-l.y,0<l.y?c.y+=h.y-e.y:c.y-=h.y-n.y),this.panTo(this.unproject(c),i),this._enforcingBounds=!1}return this},invalidateSize:function(t){if(!this._loaded)return this;t=h({animate:!1,pan:!0},!0===t?{animate:!0}:t);var i=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var e=this.getSize(),n=i.divideBy(2).round(),o=e.divideBy(2).round(),s=n.subtract(o);return s.x||s.y?(t.animate&&t.pan?this.panBy(s):(t.pan&&this._rawPanBy(s),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(a(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:i,newSize:e})):this},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(t){if(t=this._locateOptions=h({timeout:1e4,watch:!1},t),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var i=a(this._handleGeolocationResponse,this),e=a(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(i,e,t):navigator.geolocation.getCurrentPosition(i,e,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){var i=t.code,e=t.message||(1===i?"permission denied":2===i?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:i,message:"Geolocation error: "+e+"."})},_handleGeolocationResponse:function(t){var i=new j(t.coords.latitude,t.coords.longitude),e=i.toBounds(2*t.coords.accuracy),n=this._locateOptions;if(n.setView){var o=this.getBoundsZoom(e);this.setView(i,n.maxZoom?Math.min(o,n.maxZoom):o)}var s={latlng:i,bounds:e,timestamp:t.timestamp};for(var r in t.coords)"number"==typeof t.coords[r]&&(s[r]=t.coords[r]);this.fire("locationfound",s)},addHandler:function(t,i){if(!i)return this;var e=this[t]=new i(this);return this._handlers.push(e),this.options[t]&&e.enable(),this},remove:function(){if(this._initEvents(!0),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch(t){this._container._leaflet_id=void 0,this._containerId=void 0}var t;for(t in void 0!==this._locationWatchId&&this.stopLocate(),this._stop(),ui(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(C(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload"),this._layers)this._layers[t].remove();for(t in this._panes)ui(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(t,i){var e=hi("div","leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),i||this._mapPane);return t&&(this._panes[t]=e),e},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter:this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds();return new N(this.unproject(t.getBottomLeft()),this.unproject(t.getTopRight()))},getMinZoom:function(){return void 0===this.options.minZoom?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return void 0===this.options.maxZoom?void 0===this._layersMaxZoom?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,i,e){t=D(t),e=I(e||[0,0]);var n=this.getZoom()||0,o=this.getMinZoom(),s=this.getMaxZoom(),r=t.getNorthWest(),a=t.getSouthEast(),h=this.getSize().subtract(e),u=R(this.project(a,n),this.project(r,n)).getSize(),l=yt?this.options.zoomSnap:1,c=h.x/u.x,_=h.y/u.y,d=i?Math.max(c,_):Math.min(c,_);return n=this.getScaleZoom(d,n),l&&(n=Math.round(n/(l/100))*(l/100),n=i?Math.ceil(n/l)*l:Math.floor(n/l)*l),Math.max(o,Math.min(s,n))},getSize:function(){return this._size&&!this._sizeChanged||(this._size=new B(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(t,i){var e=this._getTopLeftPoint(t,i);return new O(e,e.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(void 0===t?this.getZoom():t)},getPane:function(t){return"string"==typeof t?this._panes[t]:t},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t,i){var e=this.options.crs;return i=void 0===i?this._zoom:i,e.scale(t)/e.scale(i)},getScaleZoom:function(t,i){var e=this.options.crs;i=void 0===i?this._zoom:i;var n=e.zoom(t*e.scale(i));return isNaN(n)?1/0:n},project:function(t,i){return i=void 0===i?this._zoom:i,this.options.crs.latLngToPoint(W(t),i)},unproject:function(t,i){return i=void 0===i?this._zoom:i,this.options.crs.pointToLatLng(I(t),i)},layerPointToLatLng:function(t){var i=I(t).add(this.getPixelOrigin());return this.unproject(i)},latLngToLayerPoint:function(t){return this.project(W(t))._round()._subtract(this.getPixelOrigin())},wrapLatLng:function(t){return this.options.crs.wrapLatLng(W(t))},wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(D(t))},distance:function(t,i){return this.options.crs.distance(W(t),W(i))},containerPointToLayerPoint:function(t){return I(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return I(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var i=this.containerPointToLayerPoint(I(t));return this.layerPointToLatLng(i)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(W(t)))},mouseEventToContainerPoint:function(t){return Wi(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var i=this._container=ri(t);if(!i)throw new Error("Map container not found.");if(i._leaflet_id)throw new Error("Map container is already initialized.");Ei(i,"scroll",this._onScroll,this),this._containerId=u(i)},_initLayout:function(){var t=this._container;this._fadeAnimated=this.options.fadeAnimation&&yt,pi(t,"leaflet-container"+(Tt?" leaflet-touch":"")+(Ct?" leaflet-retina":"")+(et?" leaflet-oldie":"")+(_t?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var i=ai(t,"position");"absolute"!==i&&"relative"!==i&&"fixed"!==i&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),wi(this._mapPane,new B(0,0)),this.createPane("tilePane"),this.createPane("shadowPane"),this.createPane("overlayPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(pi(t.markerPane,"leaflet-zoom-hide"),pi(t.shadowPane,"leaflet-zoom-hide"))},_resetView:function(t,i){wi(this._mapPane,new B(0,0));var e=!this._loaded;this._loaded=!0,i=this._limitZoom(i),this.fire("viewprereset");var n=this._zoom!==i;this._moveStart(n,!1)._move(t,i)._moveEnd(n),this.fire("viewreset"),e&&this.fire("load")},_moveStart:function(t,i){return t&&this.fire("zoomstart"),i||this.fire("movestart"),this},_move:function(t,i,e){void 0===i&&(i=this._zoom);var n=this._zoom!==i;return this._zoom=i,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),(n||e&&e.pinch)&&this.fire("zoom",e),this.fire("move",e)},_moveEnd:function(t){return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return C(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){wi(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(t){this._targets={};var i=t?Bi:Ei;i((this._targets[u(this._container)]=this)._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&i(window,"resize",this._onResize,this),yt&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){C(this._resizeRequest),this._resizeRequest=M(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,i){for(var e,n=[],o="mouseout"===i||"mouseover"===i,s=t.target||t.srcElement,r=!1;s;){if((e=this._targets[u(s)])&&("click"===i||"preclick"===i)&&!t._simulated&&this._draggableMoved(e)){r=!0;break}if(e&&e.listens(i,!0)){if(o&&!Ki(s,t))break;if(n.push(e),o)break}if(s===this._container)break;s=s.parentNode}return n.length||r||o||!Ki(s,t)||(n=[this]),n},_handleDOMEvent:function(t){if(this._loaded&&!Gi(t)){var i=t.type;"mousedown"!==i&&"keypress"!==i&&"keyup"!==i&&"keydown"!==i||zi(t.target||t.srcElement),this._fireDOMEvent(t,i)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,i,e){if("click"===t.type){var n=h({},t);n.type="preclick",this._fireDOMEvent(n,n.type,e)}if(!t._stopped&&(e=(e||[]).concat(this._findEventTargets(t,i))).length){var o=e[0];"contextmenu"===i&&o.listens(i,!0)&&Di(t);var s={originalEvent:t};if("keypress"!==t.type&&"keydown"!==t.type&&"keyup"!==t.type){var r=o.getLatLng&&(!o._radius||o._radius<=10);s.containerPoint=r?this.latLngToContainerPoint(o.getLatLng()):this.mouseEventToContainerPoint(t),s.layerPoint=this.containerPointToLayerPoint(s.containerPoint),s.latlng=r?o.getLatLng():this.layerPointToLatLng(s.layerPoint)}for(var a=0;a<e.length;a++)if(e[a].fire(i,s,!0),s.originalEvent._stopped||!1===e[a].options.bubblingMouseEvents&&-1!==y(this._mouseEvents,i))return}},_draggableMoved:function(t){return(t=t.dragging&&t.dragging.enabled()?t:this).dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,i=this._handlers.length;t<i;t++)this._handlers[t].disable()},whenReady:function(t,i){return this._loaded?t.call(i||this,{target:this}):this.on("load",t,i),this},_getMapPanePos:function(){return Pi(this._mapPane)||new B(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,i){return(t&&void 0!==i?this._getNewPixelOrigin(t,i):this.getPixelOrigin()).subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,i){var e=this.getSize()._divideBy(2);return this.project(t,i)._subtract(e)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,i,e){var n=this._getNewPixelOrigin(e,i);return this.project(t,i)._subtract(n)},_latLngBoundsToNewLayerBounds:function(t,i,e){var n=this._getNewPixelOrigin(e,i);return R([this.project(t.getSouthWest(),i)._subtract(n),this.project(t.getNorthWest(),i)._subtract(n),this.project(t.getSouthEast(),i)._subtract(n),this.project(t.getNorthEast(),i)._subtract(n)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,i,e){if(!e)return t;var n=this.project(t,i),o=this.getSize().divideBy(2),s=new O(n.subtract(o),n.add(o)),r=this._getBoundsOffset(s,e,i);return r.round().equals([0,0])?t:this.unproject(n.add(r),i)},_limitOffset:function(t,i){if(!i)return t;var e=this.getPixelBounds(),n=new O(e.min.add(t),e.max.add(t));return t.add(this._getBoundsOffset(n,i))},_getBoundsOffset:function(t,i,e){var n=R(this.project(i.getNorthEast(),e),this.project(i.getSouthWest(),e)),o=n.min.subtract(t.min),s=n.max.subtract(t.max);return new B(this._rebound(o.x,-s.x),this._rebound(o.y,-s.y))},_rebound:function(t,i){return 0<t+i?Math.round(t-i)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(i))},_limitZoom:function(t){var i=this.getMinZoom(),e=this.getMaxZoom(),n=yt?this.options.zoomSnap:1;return n&&(t=Math.round(t/n)*n),Math.max(i,Math.min(e,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){mi(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,i){var e=this._getCenterOffset(t)._trunc();return!(!0!==(i&&i.animate)&&!this.getSize().contains(e))&&(this.panBy(e,i),!0)},_createAnimProxy:function(){var t=this._proxy=hi("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(t){var i=ni,e=this._proxy.style[i];xi(this._proxy,this.project(t.center,t.zoom),this.getZoomScale(t.zoom,1)),e===this._proxy.style[i]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",function(){var t=this.getCenter(),i=this.getZoom();xi(this._proxy,this.project(t,i),this.getZoomScale(i,1))},this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){ui(this._proxy),delete this._proxy},_catchTransitionEnd:function(t){this._animatingZoom&&0<=t.propertyName.indexOf("transform")&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,i,e){if(this._animatingZoom)return!0;if(e=e||{},!this._zoomAnimated||!1===e.animate||this._nothingToAnimate()||Math.abs(i-this._zoom)>this.options.zoomAnimationThreshold)return!1;var n=this.getZoomScale(i),o=this._getCenterOffset(t)._divideBy(1-1/n);return!(!0!==e.animate&&!this.getSize().contains(o))&&(M(function(){this._moveStart(!0,!1)._animateZoom(t,i,!0)},this),!0)},_animateZoom:function(t,i,e,n){this._mapPane&&(e&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=i,pi(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:t,zoom:i,noUpdate:n}),setTimeout(a(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&mi(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom),M(function(){this._moveEnd(!0)},this))}});function $i(t){return new Qi(t)}var Qi=Z.extend({options:{position:"topright"},initialize:function(t){p(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var i=this._map;return i&&i.removeControl(this),this.options.position=t,i&&i.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t;var i=this._container=this.onAdd(t),e=this.getPosition(),n=t._controlCorners[e];return pi(i,"leaflet-control"),-1!==e.indexOf("bottom")?n.insertBefore(i,n.firstChild):n.appendChild(i),this._map.on("unload",this.remove,this),this},remove:function(){return this._map&&(ui(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null),this},_refocusOnMap:function(t){this._map&&t&&0<t.screenX&&0<t.screenY&&this._map.getContainer().focus()}});Ji.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){var n=this._controlCorners={},o="leaflet-",s=this._controlContainer=hi("div",o+"control-container",this._container);function t(t,i){var e=o+t+" "+o+i;n[t+i]=hi("div",e,s)}t("top","left"),t("top","right"),t("bottom","left"),t("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)ui(this._controlCorners[t]);ui(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var te=Qi.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(t,i,e,n){return e<n?-1:n<e?1:0}},initialize:function(t,i,e){for(var n in p(this,e),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,t)this._addLayer(t[n],n);for(n in i)this._addLayer(i[n],n,!0)},onAdd:function(t){this._initLayout(),this._update(),(this._map=t).on("zoomend",this._checkDisabledLayers,this);for(var i=0;i<this._layers.length;i++)this._layers[i].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){return Qi.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(t,i){return this._addLayer(t,i),this._map?this._update():this},addOverlay:function(t,i){return this._addLayer(t,i,!0),this._map?this._update():this},removeLayer:function(t){t.off("add remove",this._onLayerChange,this);var i=this._getLayer(u(t));return i&&this._layers.splice(this._layers.indexOf(i),1),this._map?this._update():this},expand:function(){pi(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._section.clientHeight?(pi(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=t+"px"):mi(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return mi(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",i=this._container=hi("div",t),e=this.options.collapsed;i.setAttribute("aria-haspopup",!0),Ni(i),Ri(i);var n=this._section=hi("section",t+"-list");e&&(this._map.on("click",this.collapse,this),st||Ei(i,{mouseenter:this.expand,mouseleave:this.collapse},this));var o=this._layersLink=hi("a",t+"-toggle",i);o.href="#",o.title="Layers",Tt?(Ei(o,"click",ji),Ei(o,"click",this.expand,this)):Ei(o,"focus",this.expand,this),e||this.expand(),this._baseLayersList=hi("div",t+"-base",n),this._separator=hi("div",t+"-separator",n),this._overlaysList=hi("div",t+"-overlays",n),i.appendChild(n)},_getLayer:function(t){for(var i=0;i<this._layers.length;i++)if(this._layers[i]&&u(this._layers[i].layer)===t)return this._layers[i]},_addLayer:function(t,i,e){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:i,overlay:e}),this.options.sortLayers&&this._layers.sort(a(function(t,i){return this.options.sortFunction(t.layer,i.layer,t.name,i.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;li(this._baseLayersList),li(this._overlaysList),this._layerControlInputs=[];var t,i,e,n,o=0;for(e=0;e<this._layers.length;e++)n=this._layers[e],this._addItem(n),i=i||n.overlay,t=t||!n.overlay,o+=n.overlay?0:1;return this.options.hideSingleBase&&(t=t&&1<o,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=i&&t?"":"none",this},_onLayerChange:function(t){this._handlingClick||this._update();var i=this._getLayer(u(t.target)),e=i.overlay?"add"===t.type?"overlayadd":"overlayremove":"add"===t.type?"baselayerchange":null;e&&this._map.fire(e,i)},_createRadioElement:function(t,i){var e='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(i?' checked="checked"':"")+"/>",n=document.createElement("div");return n.innerHTML=e,n.firstChild},_addItem:function(t){var i,e=document.createElement("label"),n=this._map.hasLayer(t.layer);t.overlay?((i=document.createElement("input")).type="checkbox",i.className="leaflet-control-layers-selector",i.defaultChecked=n):i=this._createRadioElement("leaflet-base-layers_"+u(this),n),this._layerControlInputs.push(i),i.layerId=u(t.layer),Ei(i,"click",this._onInputClick,this);var o=document.createElement("span");o.innerHTML=" "+t.name;var s=document.createElement("div");return e.appendChild(s),s.appendChild(i),s.appendChild(o),(t.overlay?this._overlaysList:this._baseLayersList).appendChild(e),this._checkDisabledLayers(),e},_onInputClick:function(){var t,i,e=this._layerControlInputs,n=[],o=[];this._handlingClick=!0;for(var s=e.length-1;0<=s;s--)t=e[s],i=this._getLayer(t.layerId).layer,t.checked?n.push(i):t.checked||o.push(i);for(s=0;s<o.length;s++)this._map.hasLayer(o[s])&&this._map.removeLayer(o[s]);for(s=0;s<n.length;s++)this._map.hasLayer(n[s])||this._map.addLayer(n[s]);this._handlingClick=!1,this._refocusOnMap()},_checkDisabledLayers:function(){for(var t,i,e=this._layerControlInputs,n=this._map.getZoom(),o=e.length-1;0<=o;o--)t=e[o],i=this._getLayer(t.layerId).layer,t.disabled=void 0!==i.options.minZoom&&n<i.options.minZoom||void 0!==i.options.maxZoom&&n>i.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expand:function(){return this.expand()},_collapse:function(){return this.collapse()}}),ie=Qi.extend({options:{position:"topleft",zoomInText:"+",zoomInTitle:"Zoom in",zoomOutText:"&#x2212;",zoomOutTitle:"Zoom out"},onAdd:function(t){var i="leaflet-control-zoom",e=hi("div",i+" leaflet-bar"),n=this.options;return this._zoomInButton=this._createButton(n.zoomInText,n.zoomInTitle,i+"-in",e,this._zoomIn),this._zoomOutButton=this._createButton(n.zoomOutText,n.zoomOutTitle,i+"-out",e,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),e},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,i,e,n,o){var s=hi("a",e,n);return s.innerHTML=t,s.href="#",s.title=i,s.setAttribute("role","button"),s.setAttribute("aria-label",i),Ni(s),Ei(s,"click",ji),Ei(s,"click",o,this),Ei(s,"click",this._refocusOnMap,this),s},_updateDisabled:function(){var t=this._map,i="leaflet-disabled";mi(this._zoomInButton,i),mi(this._zoomOutButton,i),!this._disabled&&t._zoom!==t.getMinZoom()||pi(this._zoomOutButton,i),!this._disabled&&t._zoom!==t.getMaxZoom()||pi(this._zoomInButton,i)}});Ji.mergeOptions({zoomControl:!0}),Ji.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new ie,this.addControl(this.zoomControl))});var ee=Qi.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(t){var i="leaflet-control-scale",e=hi("div",i),n=this.options;return this._addScales(n,i+"-line",e),t.on(n.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),e},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,i,e){t.metric&&(this._mScale=hi("div",i,e)),t.imperial&&(this._iScale=hi("div",i,e))},_update:function(){var t=this._map,i=t.getSize().y/2,e=t.distance(t.containerPointToLatLng([0,i]),t.containerPointToLatLng([this.options.maxWidth,i]));this._updateScales(e)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var i=this._getRoundNum(t),e=i<1e3?i+" m":i/1e3+" km";this._updateScale(this._mScale,e,i/t)},_updateImperial:function(t){var i,e,n,o=3.2808399*t;5280<o?(i=o/5280,e=this._getRoundNum(i),this._updateScale(this._iScale,e+" mi",e/i)):(n=this._getRoundNum(o),this._updateScale(this._iScale,n+" ft",n/o))},_updateScale:function(t,i,e){t.style.width=Math.round(this.options.maxWidth*e)+"px",t.innerHTML=i},_getRoundNum:function(t){var i=Math.pow(10,(Math.floor(t)+"").length-1),e=t/i;return i*(e=10<=e?10:5<=e?5:3<=e?3:2<=e?2:1)}}),ne=Qi.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'},initialize:function(t){p(this,t),this._attributions={}},onAdd:function(t){for(var i in(t.attributionControl=this)._container=hi("div","leaflet-control-attribution"),Ni(this._container),t._layers)t._layers[i].getAttribution&&this.addAttribution(t._layers[i].getAttribution());return this._update(),this._container},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t&&(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update()),this},removeAttribution:function(t){return t&&this._attributions[t]&&(this._attributions[t]--,this._update()),this},_update:function(){if(this._map){var t=[];for(var i in this._attributions)this._attributions[i]&&t.push(i);var e=[];this.options.prefix&&e.push(this.options.prefix),t.length&&e.push(t.join(", ")),this._container.innerHTML=e.join(" | ")}}});Ji.mergeOptions({attributionControl:!0}),Ji.addInitHook(function(){this.options.attributionControl&&(new ne).addTo(this)});Qi.Layers=te,Qi.Zoom=ie,Qi.Scale=ee,Qi.Attribution=ne,$i.layers=function(t,i,e){return new te(t,i,e)},$i.zoom=function(t){return new ie(t)},$i.scale=function(t){return new ee(t)},$i.attribution=function(t){return new ne(t)};var oe=Z.extend({initialize:function(t){this._map=t},enable:function(){return this._enabled||(this._enabled=!0,this.addHooks()),this},disable:function(){return this._enabled&&(this._enabled=!1,this.removeHooks()),this},enabled:function(){return!!this._enabled}});oe.addTo=function(t,i){return t.addHandler(i,this),this};var se,re={Events:E},ae=Tt?"touchstart mousedown":"mousedown",he={mousedown:"mouseup",touchstart:"touchend",pointerdown:"touchend",MSPointerDown:"touchend"},ue={mousedown:"mousemove",touchstart:"touchmove",pointerdown:"touchmove",MSPointerDown:"touchmove"},le=k.extend({options:{clickTolerance:3},initialize:function(t,i,e,n){p(this,n),this._element=t,this._dragStartTarget=i||t,this._preventOutline=e},enable:function(){this._enabled||(Ei(this._dragStartTarget,ae,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(le._dragging===this&&this.finishDrag(),Bi(this._dragStartTarget,ae,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){if(!t._simulated&&this._enabled&&(this._moved=!1,!di(this._element,"leaflet-zoom-anim")&&!(le._dragging||t.shiftKey||1!==t.which&&1!==t.button&&!t.touches||((le._dragging=this)._preventOutline&&zi(this._element),bi(),$t(),this._moving)))){this.fire("down");var i=t.touches?t.touches[0]:t,e=Ci(this._element);this._startPoint=new B(i.clientX,i.clientY),this._parentScale=Si(e),Ei(document,ue[t.type],this._onMove,this),Ei(document,he[t.type],this._onUp,this)}},_onMove:function(t){if(!t._simulated&&this._enabled)if(t.touches&&1<t.touches.length)this._moved=!0;else{var i=t.touches&&1===t.touches.length?t.touches[0]:t,e=new B(i.clientX,i.clientY)._subtract(this._startPoint);(e.x||e.y)&&(Math.abs(e.x)+Math.abs(e.y)<this.options.clickTolerance||(e.x/=this._parentScale.x,e.y/=this._parentScale.y,Di(t),this._moved||(this.fire("dragstart"),this._moved=!0,this._startPos=Pi(this._element).subtract(e),pi(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),pi(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(e),this._moving=!0,C(this._animRequest),this._lastEvent=t,this._animRequest=M(this._updatePosition,this,!0)))}},_updatePosition:function(){var t={originalEvent:this._lastEvent};this.fire("predrag",t),wi(this._element,this._newPos),this.fire("drag",t)},_onUp:function(t){!t._simulated&&this._enabled&&this.finishDrag()},finishDrag:function(){for(var t in mi(document.body,"leaflet-dragging"),this._lastTarget&&(mi(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),ue)Bi(document,ue[t],this._onMove,this),Bi(document,he[t],this._onUp,this);Ti(),Qt(),this._moved&&this._moving&&(C(this._animRequest),this.fire("dragend",{distance:this._newPos.distanceTo(this._startPos)})),this._moving=!1,le._dragging=!1}});function ce(t,i){if(!i||!t.length)return t.slice();var e=i*i;return t=function(t,i){var e=t.length,n=new(typeof Uint8Array!=void 0+""?Uint8Array:Array)(e);n[0]=n[e-1]=1,function t(i,e,n,o,s){var r,a,h,u=0;for(a=o+1;a<=s-1;a++)h=fe(i[a],i[o],i[s],!0),u<h&&(r=a,u=h);n<u&&(e[r]=1,t(i,e,n,o,r),t(i,e,n,r,s))}(t,n,i,0,e-1);var o,s=[];for(o=0;o<e;o++)n[o]&&s.push(t[o]);return s}(t=function(t,i){for(var e=[t[0]],n=1,o=0,s=t.length;n<s;n++)r=t[n],a=t[o],void 0,h=a.x-r.x,u=a.y-r.y,i<h*h+u*u&&(e.push(t[n]),o=n);var r,a,h,u;o<s-1&&e.push(t[s-1]);return e}(t,e),e)}function _e(t,i,e){return Math.sqrt(fe(t,i,e,!0))}function de(t,i,e,n,o){var s,r,a,h=n?se:me(t,e),u=me(i,e);for(se=u;;){if(!(h|u))return[t,i];if(h&u)return!1;a=me(r=pe(t,i,s=h||u,e,o),e),s===h?(t=r,h=a):(i=r,u=a)}}function pe(t,i,e,n,o){var s,r,a=i.x-t.x,h=i.y-t.y,u=n.min,l=n.max;return 8&e?(s=t.x+a*(l.y-t.y)/h,r=l.y):4&e?(s=t.x+a*(u.y-t.y)/h,r=u.y):2&e?(s=l.x,r=t.y+h*(l.x-t.x)/a):1&e&&(s=u.x,r=t.y+h*(u.x-t.x)/a),new B(s,r,o)}function me(t,i){var e=0;return t.x<i.min.x?e|=1:t.x>i.max.x&&(e|=2),t.y<i.min.y?e|=4:t.y>i.max.y&&(e|=8),e}function fe(t,i,e,n){var o,s=i.x,r=i.y,a=e.x-s,h=e.y-r,u=a*a+h*h;return 0<u&&(1<(o=((t.x-s)*a+(t.y-r)*h)/u)?(s=e.x,r=e.y):0<o&&(s+=a*o,r+=h*o)),a=t.x-s,h=t.y-r,n?a*a+h*h:new B(s,r)}function ge(t){return!v(t[0])||"object"!=typeof t[0][0]&&void 0!==t[0][0]}function ve(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),ge(t)}var ye=(Object.freeze||Object)({simplify:ce,pointToSegmentDistance:_e,closestPointOnSegment:function(t,i,e){return fe(t,i,e)},clipSegment:de,_getEdgeIntersection:pe,_getBitCode:me,_sqClosestPointOnSegment:fe,isFlat:ge,_flat:ve});function xe(t,i,e){var n,o,s,r,a,h,u,l,c,_=[1,4,2,8];for(o=0,u=t.length;o<u;o++)t[o]._code=me(t[o],i);for(r=0;r<4;r++){for(l=_[r],n=[],o=0,s=(u=t.length)-1;o<u;s=o++)a=t[o],h=t[s],a._code&l?h._code&l||((c=pe(h,a,l,i,e))._code=me(c,i),n.push(c)):(h._code&l&&((c=pe(h,a,l,i,e))._code=me(c,i),n.push(c)),n.push(a));t=n}return t}var we,Pe=(Object.freeze||Object)({clipPolygon:xe}),Le={project:function(t){return new B(t.lng,t.lat)},unproject:function(t){return new j(t.y,t.x)},bounds:new O([-180,-90],[180,90])},be={R:6378137,R_MINOR:6356752.314245179,bounds:new O([-20037508.34279,-15496570.73972],[20037508.34279,18764656.23138]),project:function(t){var i=Math.PI/180,e=this.R,n=t.lat*i,o=this.R_MINOR/e,s=Math.sqrt(1-o*o),r=s*Math.sin(n),a=Math.tan(Math.PI/4-n/2)/Math.pow((1-r)/(1+r),s/2);return n=-e*Math.log(Math.max(a,1e-10)),new B(t.lng*i*e,n)},unproject:function(t){for(var i,e=180/Math.PI,n=this.R,o=this.R_MINOR/n,s=Math.sqrt(1-o*o),r=Math.exp(-t.y/n),a=Math.PI/2-2*Math.atan(r),h=0,u=.1;h<15&&1e-7<Math.abs(u);h++)i=s*Math.sin(a),i=Math.pow((1-i)/(1+i),s/2),a+=u=Math.PI/2-2*Math.atan(r*i)-a;return new j(a*e,t.x*e/n)}},Te=(Object.freeze||Object)({LonLat:Le,Mercator:be,SphericalMercator:q}),ze=h({},U,{code:"EPSG:3395",projection:be,transformation:(we=.5/(Math.PI*be.R),K(we,.5,-we,.5))}),Me=h({},U,{code:"EPSG:4326",projection:Le,transformation:K(1/180,1,-1/180,.5)}),Ce=h({},F,{projection:Le,transformation:K(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,i){var e=i.lng-t.lng,n=i.lat-t.lat;return Math.sqrt(e*e+n*n)},infinite:!0});F.Earth=U,F.EPSG3395=ze,F.EPSG3857=X,F.EPSG900913=J,F.EPSG4326=Me,F.Simple=Ce;var Se=k.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(t){return t.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(t){return t&&t.removeLayer(this),this},getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[u(t)]=this},removeInteractiveTarget:function(t){return delete this._map._targets[u(t)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var i=t.target;if(i.hasLayer(this)){if(this._map=i,this._zoomAnimated=i._zoomAnimated,this.getEvents){var e=this.getEvents();i.on(e,this),this.once("remove",function(){i.off(e,this)},this)}this.onAdd(i),this.getAttribution&&i.attributionControl&&i.attributionControl.addAttribution(this.getAttribution()),this.fire("add"),i.fire("layeradd",{layer:this})}}});Ji.include({addLayer:function(t){if(!t._layerAdd)throw new Error("The provided object is not a Layer.");var i=u(t);return this._layers[i]||((this._layers[i]=t)._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t)),this},removeLayer:function(t){var i=u(t);return this._layers[i]&&(this._loaded&&t.onRemove(this),t.getAttribution&&this.attributionControl&&this.attributionControl.removeAttribution(t.getAttribution()),delete this._layers[i],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null),this},hasLayer:function(t){return!!t&&u(t)in this._layers},eachLayer:function(t,i){for(var e in this._layers)t.call(i,this._layers[e]);return this},_addLayers:function(t){for(var i=0,e=(t=t?v(t)?t:[t]:[]).length;i<e;i++)this.addLayer(t[i])},_addZoomLimit:function(t){!isNaN(t.options.maxZoom)&&isNaN(t.options.minZoom)||(this._zoomBoundLayers[u(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){var i=u(t);this._zoomBoundLayers[i]&&(delete this._zoomBoundLayers[i],this._updateZoomLevels())},_updateZoomLevels:function(){var t=1/0,i=-1/0,e=this._getZoomSpan();for(var n in this._zoomBoundLayers){var o=this._zoomBoundLayers[n].options;t=void 0===o.minZoom?t:Math.min(t,o.minZoom),i=void 0===o.maxZoom?i:Math.max(i,o.maxZoom)}this._layersMaxZoom=i===-1/0?void 0:i,this._layersMinZoom=t===1/0?void 0:t,e!==this._getZoomSpan()&&this.fire("zoomlevelschange"),void 0===this.options.maxZoom&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),void 0===this.options.minZoom&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Ze=Se.extend({initialize:function(t,i){var e,n;if(p(this,i),this._layers={},t)for(e=0,n=t.length;e<n;e++)this.addLayer(t[e])},addLayer:function(t){var i=this.getLayerId(t);return this._layers[i]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var i=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[i]&&this._map.removeLayer(this._layers[i]),delete this._layers[i],this},hasLayer:function(t){return!!t&&(t in this._layers||this.getLayerId(t)in this._layers)},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(t){var i,e,n=Array.prototype.slice.call(arguments,1);for(i in this._layers)(e=this._layers[i])[t]&&e[t].apply(e,n);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},eachLayer:function(t,i){for(var e in this._layers)t.call(i,this._layers[e]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return u(t)}}),Ee=Ze.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),Ze.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),Ze.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new N;for(var i in this._layers){var e=this._layers[i];t.extend(e.getBounds?e.getBounds():e.getLatLng())}return t}}),ke=Z.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0]},initialize:function(t){p(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,i){var e=this._getIconUrl(t);if(!e){if("icon"===t)throw new Error("iconUrl not set in Icon options (see the docs).");return null}var n=this._createImg(e,i&&"IMG"===i.tagName?i:null);return this._setIconStyles(n,t),n},_setIconStyles:function(t,i){var e=this.options,n=e[i+"Size"];"number"==typeof n&&(n=[n,n]);var o=I(n),s=I("shadow"===i&&e.shadowAnchor||e.iconAnchor||o&&o.divideBy(2,!0));t.className="leaflet-marker-"+i+" "+(e.className||""),s&&(t.style.marginLeft=-s.x+"px",t.style.marginTop=-s.y+"px"),o&&(t.style.width=o.x+"px",t.style.height=o.y+"px")},_createImg:function(t,i){return(i=i||document.createElement("img")).src=t,i},_getIconUrl:function(t){return Ct&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}});var Be=ke.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){return Be.imagePath||(Be.imagePath=this._detectIconPath()),(this.options.imagePath||Be.imagePath)+ke.prototype._getIconUrl.call(this,t)},_detectIconPath:function(){var t=hi("div","leaflet-default-icon-path",document.body),i=ai(t,"background-image")||ai(t,"backgroundImage");return document.body.removeChild(t),i=null===i||0!==i.indexOf("url")?"":i.replace(/^url\(["']?/,"").replace(/marker-icon\.png["']?\)$/,"")}}),Ae=oe.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new le(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),pi(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&mi(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var i=this._marker,e=i._map,n=this._marker.options.autoPanSpeed,o=this._marker.options.autoPanPadding,s=Pi(i._icon),r=e.getPixelBounds(),a=e.getPixelOrigin(),h=R(r.min._subtract(a).add(o),r.max._subtract(a).subtract(o));if(!h.contains(s)){var u=I((Math.max(h.max.x,s.x)-h.max.x)/(r.max.x-h.max.x)-(Math.min(h.min.x,s.x)-h.min.x)/(r.min.x-h.min.x),(Math.max(h.max.y,s.y)-h.max.y)/(r.max.y-h.max.y)-(Math.min(h.min.y,s.y)-h.min.y)/(r.min.y-h.min.y)).multiplyBy(n);e.panBy(u,{animate:!1}),this._draggable._newPos._add(u),this._draggable._startPos._add(u),wi(i._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=M(this._adjustPan.bind(this,t))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup().fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&(C(this._panRequest),this._panRequest=M(this._adjustPan.bind(this,t)))},_onDrag:function(t){var i=this._marker,e=i._shadow,n=Pi(i._icon),o=i._map.layerPointToLatLng(n);e&&wi(e,n),i._latlng=o,t.latlng=o,t.oldLatLng=this._oldLatLng,i.fire("move",t).fire("drag",t)},_onDragEnd:function(t){C(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),Ie=Se.extend({options:{icon:new Be,interactive:!0,keyboard:!0,title:"",alt:"",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(t,i){p(this,i),this._latlng=W(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(t){var i=this._latlng;return this._latlng=W(t),this.update(),this.fire("move",{oldLatLng:i,latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},getIcon:function(){return this.options.icon},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,i="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),e=t.icon.createIcon(this._icon),n=!1;e!==this._icon&&(this._icon&&this._removeIcon(),n=!0,t.title&&(e.title=t.title),"IMG"===e.tagName&&(e.alt=t.alt||"")),pi(e,i),t.keyboard&&(e.tabIndex="0"),this._icon=e,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex});var o=t.icon.createShadow(this._shadow),s=!1;o!==this._shadow&&(this._removeShadow(),s=!0),o&&(pi(o,i),o.alt=""),this._shadow=o,t.opacity<1&&this._updateOpacity(),n&&this.getPane().appendChild(this._icon),this._initInteraction(),o&&s&&this.getPane(t.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),ui(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&ui(this._shadow),this._shadow=null},_setPos:function(t){wi(this._icon,t),this._shadow&&wi(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon.style.zIndex=this._zIndex+t},_animateZoom:function(t){var i=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(i)},_initInteraction:function(){if(this.options.interactive&&(pi(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Ae)){var t=this.options.draggable;this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Ae(this),t&&this.dragging.enable()}},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;this._icon&&vi(this._icon,t),this._shadow&&vi(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});var Oe=Se.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(t){this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(t){return p(this,t),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&t.hasOwnProperty("weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+this._renderer.options.tolerance}}),Re=Oe.extend({options:{fill:!0,radius:10},initialize:function(t,i){p(this,i),this._latlng=W(t),this._radius=this.options.radius},setLatLng:function(t){return this._latlng=W(t),this.redraw(),this.fire("move",{latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius},setStyle:function(t){var i=t&&t.radius||this._radius;return Oe.prototype.setStyle.call(this,t),this.setRadius(i),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,i=this._radiusY||t,e=this._clickTolerance(),n=[t+e,i+e];this._pxBounds=new O(this._point.subtract(n),this._point.add(n))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}});var Ne=Re.extend({initialize:function(t,i,e){if("number"==typeof i&&(i=h({},e,{radius:i})),p(this,i),this._latlng=W(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(t){return this._mRadius=t,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new N(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:Oe.prototype.setStyle,_project:function(){var t=this._latlng.lng,i=this._latlng.lat,e=this._map,n=e.options.crs;if(n.distance===U.distance){var o=Math.PI/180,s=this._mRadius/U.R/o,r=e.project([i+s,t]),a=e.project([i-s,t]),h=r.add(a).divideBy(2),u=e.unproject(h).lat,l=Math.acos((Math.cos(s*o)-Math.sin(i*o)*Math.sin(u*o))/(Math.cos(i*o)*Math.cos(u*o)))/o;!isNaN(l)&&0!==l||(l=s/Math.cos(Math.PI/180*i)),this._point=h.subtract(e.getPixelOrigin()),this._radius=isNaN(l)?0:h.x-e.project([u,t-l]).x,this._radiusY=h.y-r.y}else{var c=n.unproject(n.project(this._latlng).subtract([this._mRadius,0]));this._point=e.latLngToLayerPoint(this._latlng),this._radius=this._point.x-e.latLngToLayerPoint(c).x}this._updateBounds()}});var De=Oe.extend({options:{smoothFactor:1,noClip:!1},initialize:function(t,i){p(this,i),this._setLatLngs(t)},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(t){for(var i,e,n=1/0,o=null,s=fe,r=0,a=this._parts.length;r<a;r++)for(var h=this._parts[r],u=1,l=h.length;u<l;u++){var c=s(t,i=h[u-1],e=h[u],!0);c<n&&(n=c,o=s(t,i,e))}return o&&(o.distance=Math.sqrt(n)),o},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");var t,i,e,n,o,s,r,a=this._rings[0],h=a.length;if(!h)return null;for(i=t=0;t<h-1;t++)i+=a[t].distanceTo(a[t+1])/2;if(0===i)return this._map.layerPointToLatLng(a[0]);for(n=t=0;t<h-1;t++)if(o=a[t],s=a[t+1],i<(n+=e=o.distanceTo(s)))return r=(n-i)/e,this._map.layerPointToLatLng([s.x-r*(s.x-o.x),s.y-r*(s.y-o.y)])},getBounds:function(){return this._bounds},addLatLng:function(t,i){return i=i||this._defaultShape(),t=W(t),i.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new N,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return ge(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(t){for(var i=[],e=ge(t),n=0,o=t.length;n<o;n++)e?(i[n]=W(t[n]),this._bounds.extend(i[n])):i[n]=this._convertLatLngs(t[n]);return i},_project:function(){var t=new O;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t),this._bounds.isValid()&&t.isValid()&&(this._rawPxBounds=t,this._updateBounds())},_updateBounds:function(){var t=this._clickTolerance(),i=new B(t,t);this._pxBounds=new O([this._rawPxBounds.min.subtract(i),this._rawPxBounds.max.add(i)])},_projectLatlngs:function(t,i,e){var n,o,s=t[0]instanceof j,r=t.length;if(s){for(o=[],n=0;n<r;n++)o[n]=this._map.latLngToLayerPoint(t[n]),e.extend(o[n]);i.push(o)}else for(n=0;n<r;n++)this._projectLatlngs(t[n],i,e)},_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],this._pxBounds&&this._pxBounds.intersects(t))if(this.options.noClip)this._parts=this._rings;else{var i,e,n,o,s,r,a,h=this._parts;for(n=i=0,o=this._rings.length;i<o;i++)for(e=0,s=(a=this._rings[i]).length;e<s-1;e++)(r=de(a[e],a[e+1],t,e,!0))&&(h[n]=h[n]||[],h[n].push(r[0]),r[1]===a[e+1]&&e!==s-2||(h[n].push(r[1]),n++))}},_simplifyPoints:function(){for(var t=this._parts,i=this.options.smoothFactor,e=0,n=t.length;e<n;e++)t[e]=ce(t[e],i)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(t,i){var e,n,o,s,r,a,h=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(e=0,s=this._parts.length;e<s;e++)for(n=0,o=(r=(a=this._parts[e]).length)-1;n<r;o=n++)if((i||0!==n)&&_e(t,a[o],a[n])<=h)return!0;return!1}});De._flat=ve;var je=De.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");var t,i,e,n,o,s,r,a,h,u=this._rings[0],l=u.length;if(!l)return null;for(s=r=a=0,t=0,i=l-1;t<l;i=t++)e=u[t],n=u[i],o=e.y*n.x-n.y*e.x,r+=(e.x+n.x)*o,a+=(e.y+n.y)*o,s+=3*o;return h=0===s?u[0]:[r/s,a/s],this._map.layerPointToLatLng(h)},_convertLatLngs:function(t){var i=De.prototype._convertLatLngs.call(this,t),e=i.length;return 2<=e&&i[0]instanceof j&&i[0].equals(i[e-1])&&i.pop(),i},_setLatLngs:function(t){De.prototype._setLatLngs.call(this,t),ge(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return ge(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var t=this._renderer._bounds,i=this.options.weight,e=new B(i,i);if(t=new O(t.min.subtract(e),t.max.add(e)),this._parts=[],this._pxBounds&&this._pxBounds.intersects(t))if(this.options.noClip)this._parts=this._rings;else for(var n,o=0,s=this._rings.length;o<s;o++)(n=xe(this._rings[o],t,!0)).length&&this._parts.push(n)},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(t){var i,e,n,o,s,r,a,h,u=!1;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(o=0,a=this._parts.length;o<a;o++)for(s=0,r=(h=(i=this._parts[o]).length)-1;s<h;r=s++)e=i[s],n=i[r],e.y>t.y!=n.y>t.y&&t.x<(n.x-e.x)*(t.y-e.y)/(n.y-e.y)+e.x&&(u=!u);return u||De.prototype._containsPoint.call(this,t,!0)}});var We=Ee.extend({initialize:function(t,i){p(this,i),this._layers={},t&&this.addData(t)},addData:function(t){var i,e,n,o=v(t)?t:t.features;if(o){for(i=0,e=o.length;i<e;i++)((n=o[i]).geometries||n.geometry||n.features||n.coordinates)&&this.addData(n);return this}var s=this.options;if(s.filter&&!s.filter(t))return this;var r=He(t,s);return r?(r.feature=Ke(t),r.defaultOptions=r.options,this.resetStyle(r),s.onEachFeature&&s.onEachFeature(t,r),this.addLayer(r)):this},resetStyle:function(t){return t.options=h({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this},setStyle:function(i){return this.eachLayer(function(t){this._setLayerStyle(t,i)},this)},_setLayerStyle:function(t,i){t.setStyle&&("function"==typeof i&&(i=i(t.feature)),t.setStyle(i))}});function He(t,i){var e,n,o,s,r="Feature"===t.type?t.geometry:t,a=r?r.coordinates:null,h=[],u=i&&i.pointToLayer,l=i&&i.coordsToLatLng||Fe;if(!a&&!r)return null;switch(r.type){case"Point":return e=l(a),u?u(t,e):new Ie(e);case"MultiPoint":for(o=0,s=a.length;o<s;o++)e=l(a[o]),h.push(u?u(t,e):new Ie(e));return new Ee(h);case"LineString":case"MultiLineString":return n=Ue(a,"LineString"===r.type?0:1,l),new De(n,i);case"Polygon":case"MultiPolygon":return n=Ue(a,"Polygon"===r.type?1:2,l),new je(n,i);case"GeometryCollection":for(o=0,s=r.geometries.length;o<s;o++){var c=He({geometry:r.geometries[o],type:"Feature",properties:t.properties},i);c&&h.push(c)}return new Ee(h);default:throw new Error("Invalid GeoJSON object.")}}function Fe(t){return new j(t[1],t[0],t[2])}function Ue(t,i,e){for(var n,o=[],s=0,r=t.length;s<r;s++)n=i?Ue(t[s],i-1,e):(e||Fe)(t[s]),o.push(n);return o}function Ve(t,i){return i="number"==typeof i?i:6,void 0!==t.alt?[c(t.lng,i),c(t.lat,i),c(t.alt,i)]:[c(t.lng,i),c(t.lat,i)]}function qe(t,i,e,n){for(var o=[],s=0,r=t.length;s<r;s++)o.push(i?qe(t[s],i-1,e,n):Ve(t[s],n));return!i&&e&&o.push(o[0]),o}function Ge(t,i){return t.feature?h({},t.feature,{geometry:i}):Ke(i)}function Ke(t){return"Feature"===t.type||"FeatureCollection"===t.type?t:{type:"Feature",properties:{},geometry:t}}var Ye={toGeoJSON:function(t){return Ge(this,{type:"Point",coordinates:Ve(this.getLatLng(),t)})}};function Xe(t,i){return new We(t,i)}Ie.include(Ye),Ne.include(Ye),Re.include(Ye),De.include({toGeoJSON:function(t){var i=!ge(this._latlngs);return Ge(this,{type:(i?"Multi":"")+"LineString",coordinates:qe(this._latlngs,i?1:0,!1,t)})}}),je.include({toGeoJSON:function(t){var i=!ge(this._latlngs),e=i&&!ge(this._latlngs[0]),n=qe(this._latlngs,e?2:i?1:0,!0,t);return i||(n=[n]),Ge(this,{type:(e?"Multi":"")+"Polygon",coordinates:n})}}),Ze.include({toMultiPoint:function(i){var e=[];return this.eachLayer(function(t){e.push(t.toGeoJSON(i).geometry.coordinates)}),Ge(this,{type:"MultiPoint",coordinates:e})},toGeoJSON:function(n){var t=this.feature&&this.feature.geometry&&this.feature.geometry.type;if("MultiPoint"===t)return this.toMultiPoint(n);var o="GeometryCollection"===t,s=[];return this.eachLayer(function(t){if(t.toGeoJSON){var i=t.toGeoJSON(n);if(o)s.push(i.geometry);else{var e=Ke(i);"FeatureCollection"===e.type?s.push.apply(s,e.features):s.push(e)}}}),o?Ge(this,{geometries:s,type:"GeometryCollection"}):{type:"FeatureCollection",features:s}}});var Je=Xe,$e=Se.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(t,i,e){this._url=t,this._bounds=D(i),p(this,e)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(pi(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){ui(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},bringToFront:function(){return this._map&&ci(this._image),this},bringToBack:function(){return this._map&&_i(this._image),this},setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},setBounds:function(t){return this._bounds=D(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var t="IMG"===this._url.tagName,i=this._image=t?this._url:hi("img");pi(i,"leaflet-image-layer"),this._zoomAnimated&&pi(i,"leaflet-zoom-animated"),this.options.className&&pi(i,this.options.className),i.onselectstart=l,i.onmousemove=l,i.onload=a(this.fire,this,"load"),i.onerror=a(this._overlayOnError,this,"error"),!this.options.crossOrigin&&""!==this.options.crossOrigin||(i.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t?this._url=i.src:(i.src=this._url,i.alt=this.options.alt)},_animateZoom:function(t){var i=this._map.getZoomScale(t.zoom),e=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;xi(this._image,e,i)},_reset:function(){var t=this._image,i=new O(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),e=i.getSize();wi(t,i.min),t.style.width=e.x+"px",t.style.height=e.y+"px"},_updateOpacity:function(){vi(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)}}),Qe=$e.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0},_initImage:function(){var t="VIDEO"===this._url.tagName,i=this._image=t?this._url:hi("video");if(pi(i,"leaflet-image-layer"),this._zoomAnimated&&pi(i,"leaflet-zoom-animated"),i.onselectstart=l,i.onmousemove=l,i.onloadeddata=a(this.fire,this,"load"),t){for(var e=i.getElementsByTagName("source"),n=[],o=0;o<e.length;o++)n.push(e[o].src);this._url=0<e.length?n:[i.src]}else{v(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&i.style.hasOwnProperty("objectFit")&&(i.style.objectFit="fill"),i.autoplay=!!this.options.autoplay,i.loop=!!this.options.loop;for(var s=0;s<this._url.length;s++){var r=hi("source");r.src=this._url[s],i.appendChild(r)}}}});var tn=$e.extend({_initImage:function(){var t=this._image=this._url;pi(t,"leaflet-image-layer"),this._zoomAnimated&&pi(t,"leaflet-zoom-animated"),t.onselectstart=l,t.onmousemove=l}});var en=Se.extend({options:{offset:[0,7],className:"",pane:"popupPane"},initialize:function(t,i){p(this,t),this._source=i},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&vi(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&vi(this._container,1),this.bringToFront()},onRemove:function(t){t._fadeAnimated?(vi(this._container,0),this._removeTimeout=setTimeout(a(ui,void 0,this._container),200)):ui(this._container)},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=W(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&ci(this._container),this},bringToBack:function(){return this._map&&_i(this._container),this},_prepareOpen:function(t,i,e){if(i instanceof Se||(e=i,i=t),i instanceof Ee)for(var n in t._layers){i=t._layers[n];break}if(!e)if(i.getCenter)e=i.getCenter();else{if(!i.getLatLng)throw new Error("Unable to get source layer LatLng.");e=i.getLatLng()}return this._source=i,this.update(),e},_updateContent:function(){if(this._content){var t=this._contentNode,i="function"==typeof this._content?this._content(this._source||this):this._content;if("string"==typeof i)t.innerHTML=i;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(i)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),i=I(this.options.offset),e=this._getAnchor();this._zoomAnimated?wi(this._container,t.add(e)):i=i.add(t).add(e);var n=this._containerBottom=-i.y,o=this._containerLeft=-Math.round(this._containerWidth/2)+i.x;this._container.style.bottom=n+"px",this._container.style.left=o+"px"}},_getAnchor:function(){return[0,0]}}),nn=en.extend({options:{maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(t){return t.openPopup(this),this},onAdd:function(t){en.prototype.onAdd.call(this,t),t.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Oe||this._source.on("preclick",Oi))},onRemove:function(t){en.prototype.onRemove.call(this,t),t.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Oe||this._source.off("preclick",Oi))},getEvents:function(){var t=en.prototype.getEvents.call(this);return(void 0!==this.options.closeOnClick?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this._close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_close:function(){this._map&&this._map.closePopup(this)},_initLayout:function(){var t="leaflet-popup",i=this._container=hi("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),e=this._wrapper=hi("div",t+"-content-wrapper",i);if(this._contentNode=hi("div",t+"-content",e),Ni(e),Ri(this._contentNode),Ei(e,"contextmenu",Oi),this._tipContainer=hi("div",t+"-tip-container",i),this._tip=hi("div",t+"-tip",this._tipContainer),this.options.closeButton){var n=this._closeButton=hi("a",t+"-close-button",i);n.href="#close",n.innerHTML="&#215;",Ei(n,"click",this._onCloseButtonClick,this)}},_updateLayout:function(){var t=this._contentNode,i=t.style;i.width="",i.whiteSpace="nowrap";var e=t.offsetWidth;e=Math.min(e,this.options.maxWidth),e=Math.max(e,this.options.minWidth),i.width=e+1+"px",i.whiteSpace="",i.height="";var n=t.offsetHeight,o=this.options.maxHeight,s="leaflet-popup-scrolled";o&&o<n?(i.height=o+"px",pi(t,s)):mi(t,s),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var i=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),e=this._getAnchor();wi(this._container,i.add(e))},_adjustPan:function(){if(this.options.autoPan){this._map._panAnim&&this._map._panAnim.stop();var t=this._map,i=parseInt(ai(this._container,"marginBottom"),10)||0,e=this._container.offsetHeight+i,n=this._containerWidth,o=new B(this._containerLeft,-e-this._containerBottom);o._add(Pi(this._container));var s=t.layerPointToContainerPoint(o),r=I(this.options.autoPanPadding),a=I(this.options.autoPanPaddingTopLeft||r),h=I(this.options.autoPanPaddingBottomRight||r),u=t.getSize(),l=0,c=0;s.x+n+h.x>u.x&&(l=s.x+n-u.x+h.x),s.x-l-a.x<0&&(l=s.x-a.x),s.y+e+h.y>u.y&&(c=s.y+e-u.y+h.y),s.y-c-a.y<0&&(c=s.y-a.y),(l||c)&&t.fire("autopanstart").panBy([l,c])}},_onCloseButtonClick:function(t){this._close(),ji(t)},_getAnchor:function(){return I(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}});Ji.mergeOptions({closePopupOnClick:!0}),Ji.include({openPopup:function(t,i,e){return t instanceof nn||(t=new nn(e).setContent(t)),i&&t.setLatLng(i),this.hasLayer(t)?this:(this._popup&&this._popup.options.autoClose&&this.closePopup(),this._popup=t,this.addLayer(t))},closePopup:function(t){return t&&t!==this._popup||(t=this._popup,this._popup=null),t&&this.removeLayer(t),this}}),Se.include({bindPopup:function(t,i){return t instanceof nn?(p(t,i),(this._popup=t)._source=this):(this._popup&&!i||(this._popup=new nn(i,this)),this._popup.setContent(t)),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(t,i){return this._popup&&this._map&&(i=this._popup._prepareOpen(this,t,i),this._map.openPopup(this._popup,i)),this},closePopup:function(){return this._popup&&this._popup._close(),this},togglePopup:function(t){return this._popup&&(this._popup._map?this.closePopup():this.openPopup(t)),this},isPopupOpen:function(){return!!this._popup&&this._popup.isOpen()},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},getPopup:function(){return this._popup},_openPopup:function(t){var i=t.layer||t.target;this._popup&&this._map&&(ji(t),i instanceof Oe?this.openPopup(t.layer||t.target,t.latlng):this._map.hasLayer(this._popup)&&this._popup._source===i?this.closePopup():this.openPopup(i,t.latlng))},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){13===t.originalEvent.keyCode&&this._openPopup(t)}});var on=en.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,interactive:!1,opacity:.9},onAdd:function(t){en.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire("tooltipopen",{tooltip:this}),this._source&&this._source.fire("tooltipopen",{tooltip:this},!0)},onRemove:function(t){en.prototype.onRemove.call(this,t),t.fire("tooltipclose",{tooltip:this}),this._source&&this._source.fire("tooltipclose",{tooltip:this},!0)},getEvents:function(){var t=en.prototype.getEvents.call(this);return Tt&&!this.options.permanent&&(t.preclick=this._close),t},_close:function(){this._map&&this._map.closeTooltip(this)},_initLayout:function(){var t="leaflet-tooltip "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=hi("div",t)},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var i=this._map,e=this._container,n=i.latLngToContainerPoint(i.getCenter()),o=i.layerPointToContainerPoint(t),s=this.options.direction,r=e.offsetWidth,a=e.offsetHeight,h=I(this.options.offset),u=this._getAnchor();t="top"===s?t.add(I(-r/2+h.x,-a+h.y+u.y,!0)):"bottom"===s?t.subtract(I(r/2-h.x,-h.y,!0)):"center"===s?t.subtract(I(r/2+h.x,a/2-u.y+h.y,!0)):"right"===s||"auto"===s&&o.x<n.x?(s="right",t.add(I(h.x+u.x,u.y-a/2+h.y,!0))):(s="left",t.subtract(I(r+u.x-h.x,a/2-u.y-h.y,!0))),mi(e,"leaflet-tooltip-right"),mi(e,"leaflet-tooltip-left"),mi(e,"leaflet-tooltip-top"),mi(e,"leaflet-tooltip-bottom"),pi(e,"leaflet-tooltip-"+s),wi(e,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&vi(this._container,t)},_animateZoom:function(t){var i=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(i)},_getAnchor:function(){return I(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}});Ji.include({openTooltip:function(t,i,e){return t instanceof on||(t=new on(e).setContent(t)),i&&t.setLatLng(i),this.hasLayer(t)?this:this.addLayer(t)},closeTooltip:function(t){return t&&this.removeLayer(t),this}}),Se.include({bindTooltip:function(t,i){return t instanceof on?(p(t,i),(this._tooltip=t)._source=this):(this._tooltip&&!i||(this._tooltip=new on(i,this)),this._tooltip.setContent(t)),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){if(t||!this._tooltipHandlersAdded){var i=t?"off":"on",e={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?e.add=this._openTooltip:(e.mouseover=this._openTooltip,e.mouseout=this.closeTooltip,this._tooltip.options.sticky&&(e.mousemove=this._moveTooltip),Tt&&(e.click=this._openTooltip)),this[i](e),this._tooltipHandlersAdded=!t}},openTooltip:function(t,i){return this._tooltip&&this._map&&(i=this._tooltip._prepareOpen(this,t,i),this._map.openTooltip(this._tooltip,i),this._tooltip.options.interactive&&this._tooltip._container&&(pi(this._tooltip._container,"leaflet-clickable"),this.addInteractiveTarget(this._tooltip._container))),this},closeTooltip:function(){return this._tooltip&&(this._tooltip._close(),this._tooltip.options.interactive&&this._tooltip._container&&(mi(this._tooltip._container,"leaflet-clickable"),this.removeInteractiveTarget(this._tooltip._container))),this},toggleTooltip:function(t){return this._tooltip&&(this._tooltip._map?this.closeTooltip():this.openTooltip(t)),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},getTooltip:function(){return this._tooltip},_openTooltip:function(t){var i=t.layer||t.target;this._tooltip&&this._map&&this.openTooltip(i,this._tooltip.options.sticky?t.latlng:void 0)},_moveTooltip:function(t){var i,e,n=t.latlng;this._tooltip.options.sticky&&t.originalEvent&&(i=this._map.mouseEventToContainerPoint(t.originalEvent),e=this._map.containerPointToLayerPoint(i),n=this._map.layerPointToLatLng(e)),this._tooltip.setLatLng(n)}});var sn=ke.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var i=t&&"DIV"===t.tagName?t:document.createElement("div"),e=this.options;if(e.html instanceof Element?(li(i),i.appendChild(e.html)):i.innerHTML=!1!==e.html?e.html:"",e.bgPos){var n=I(e.bgPos);i.style.backgroundPosition=-n.x+"px "+-n.y+"px"}return this._setIconStyles(i,"icon"),i},createShadow:function(){return null}});ke.Default=Be;var rn=Se.extend({options:{tileSize:256,opacity:1,updateWhenIdle:xt,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(t){p(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView(),this._update()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),ui(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(ci(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(_i(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){return this._map&&(this._removeAllTiles(),this._update()),this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=o(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},createTile:function(){return document.createElement("div")},getTileSize:function(){var t=this.options.tileSize;return t instanceof B?t:new B(t,t)},_updateZIndex:function(){this._container&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var i,e=this.getPane().children,n=-t(-1/0,1/0),o=0,s=e.length;o<s;o++)i=e[o].style.zIndex,e[o]!==this._container&&i&&(n=t(n,+i));isFinite(n)&&(this.options.zIndex=n+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!et){vi(this._container,this.options.opacity);var t=+new Date,i=!1,e=!1;for(var n in this._tiles){var o=this._tiles[n];if(o.current&&o.loaded){var s=Math.min(1,(t-o.loaded)/200);vi(o.el,s),s<1?i=!0:(o.active?e=!0:this._onOpaqueTile(o),o.active=!0)}}e&&!this._noPrune&&this._pruneTiles(),i&&(C(this._fadeFrame),this._fadeFrame=M(this._updateOpacity,this))}},_onOpaqueTile:l,_initContainer:function(){this._container||(this._container=hi("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,i=this.options.maxZoom;if(void 0!==t){for(var e in this._levels)this._levels[e].el.children.length||e===t?(this._levels[e].el.style.zIndex=i-Math.abs(t-e),this._onUpdateLevel(e)):(ui(this._levels[e].el),this._removeTilesAtZoom(e),this._onRemoveLevel(e),delete this._levels[e]);var n=this._levels[t],o=this._map;return n||((n=this._levels[t]={}).el=hi("div","leaflet-tile-container leaflet-zoom-animated",this._container),n.el.style.zIndex=i,n.origin=o.project(o.unproject(o.getPixelOrigin()),t).round(),n.zoom=t,this._setZoomTransform(n,o.getCenter(),o.getZoom()),n.el.offsetWidth,this._onCreateLevel(n)),this._level=n}},_onUpdateLevel:l,_onRemoveLevel:l,_onCreateLevel:l,_pruneTiles:function(){if(this._map){var t,i,e=this._map.getZoom();if(e>this.options.maxZoom||e<this.options.minZoom)this._removeAllTiles();else{for(t in this._tiles)(i=this._tiles[t]).retain=i.current;for(t in this._tiles)if((i=this._tiles[t]).current&&!i.active){var n=i.coords;this._retainParent(n.x,n.y,n.z,n.z-5)||this._retainChildren(n.x,n.y,n.z,n.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}}},_removeTilesAtZoom:function(t){for(var i in this._tiles)this._tiles[i].coords.z===t&&this._removeTile(i)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)ui(this._levels[t].el),this._onRemoveLevel(t),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,i,e,n){var o=Math.floor(t/2),s=Math.floor(i/2),r=e-1,a=new B(+o,+s);a.z=+r;var h=this._tileCoordsToKey(a),u=this._tiles[h];return u&&u.active?u.retain=!0:(u&&u.loaded&&(u.retain=!0),n<r&&this._retainParent(o,s,r,n))},_retainChildren:function(t,i,e,n){for(var o=2*t;o<2*t+2;o++)for(var s=2*i;s<2*i+2;s++){var r=new B(o,s);r.z=e+1;var a=this._tileCoordsToKey(r),h=this._tiles[a];h&&h.active?h.retain=!0:(h&&h.loaded&&(h.retain=!0),e+1<n&&this._retainChildren(o,s,e+1,n))}},_resetView:function(t){var i=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),i,i)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var i=this.options;return void 0!==i.minNativeZoom&&t<i.minNativeZoom?i.minNativeZoom:void 0!==i.maxNativeZoom&&i.maxNativeZoom<t?i.maxNativeZoom:t},_setView:function(t,i,e,n){var o=this._clampZoom(Math.round(i));(void 0!==this.options.maxZoom&&o>this.options.maxZoom||void 0!==this.options.minZoom&&o<this.options.minZoom)&&(o=void 0);var s=this.options.updateWhenZooming&&o!==this._tileZoom;n&&!s||(this._tileZoom=o,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),void 0!==o&&this._update(t),e||this._pruneTiles(),this._noPrune=!!e),this._setZoomTransforms(t,i)},_setZoomTransforms:function(t,i){for(var e in this._levels)this._setZoomTransform(this._levels[e],t,i)},_setZoomTransform:function(t,i,e){var n=this._map.getZoomScale(e,t.zoom),o=t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(i,e)).round();yt?xi(t.el,o,n):wi(t.el,o)},_resetGrid:function(){var t=this._map,i=t.options.crs,e=this._tileSize=this.getTileSize(),n=this._tileZoom,o=this._map.getPixelWorldBounds(this._tileZoom);o&&(this._globalTileRange=this._pxBoundsToTileRange(o)),this._wrapX=i.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,i.wrapLng[0]],n).x/e.x),Math.ceil(t.project([0,i.wrapLng[1]],n).x/e.y)],this._wrapY=i.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([i.wrapLat[0],0],n).y/e.x),Math.ceil(t.project([i.wrapLat[1],0],n).y/e.y)]},_onMoveEnd:function(){this._map&&!this._map._animatingZoom&&this._update()},_getTiledPixelBounds:function(t){var i=this._map,e=i._animatingZoom?Math.max(i._animateToZoom,i.getZoom()):i.getZoom(),n=i.getZoomScale(e,this._tileZoom),o=i.project(t,this._tileZoom).floor(),s=i.getSize().divideBy(2*n);return new O(o.subtract(s),o.add(s))},_update:function(t){var i=this._map;if(i){var e=this._clampZoom(i.getZoom());if(void 0===t&&(t=i.getCenter()),void 0!==this._tileZoom){var n=this._getTiledPixelBounds(t),o=this._pxBoundsToTileRange(n),s=o.getCenter(),r=[],a=this.options.keepBuffer,h=new O(o.getBottomLeft().subtract([a,-a]),o.getTopRight().add([a,-a]));if(!(isFinite(o.min.x)&&isFinite(o.min.y)&&isFinite(o.max.x)&&isFinite(o.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var u in this._tiles){var l=this._tiles[u].coords;l.z===this._tileZoom&&h.contains(new B(l.x,l.y))||(this._tiles[u].current=!1)}if(1<Math.abs(e-this._tileZoom))this._setView(t,e);else{for(var c=o.min.y;c<=o.max.y;c++)for(var _=o.min.x;_<=o.max.x;_++){var d=new B(_,c);if(d.z=this._tileZoom,this._isValidTile(d)){var p=this._tiles[this._tileCoordsToKey(d)];p?p.current=!0:r.push(d)}}if(r.sort(function(t,i){return t.distanceTo(s)-i.distanceTo(s)}),0!==r.length){this._loading||(this._loading=!0,this.fire("loading"));var m=document.createDocumentFragment();for(_=0;_<r.length;_++)this._addTile(r[_],m);this._level.el.appendChild(m)}}}}},_isValidTile:function(t){var i=this._map.options.crs;if(!i.infinite){var e=this._globalTileRange;if(!i.wrapLng&&(t.x<e.min.x||t.x>e.max.x)||!i.wrapLat&&(t.y<e.min.y||t.y>e.max.y))return!1}if(!this.options.bounds)return!0;var n=this._tileCoordsToBounds(t);return D(this.options.bounds).overlaps(n)},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var i=this._map,e=this.getTileSize(),n=t.scaleBy(e),o=n.add(e);return[i.unproject(n,t.z),i.unproject(o,t.z)]},_tileCoordsToBounds:function(t){var i=this._tileCoordsToNwSe(t),e=new N(i[0],i[1]);return this.options.noWrap||(e=this._map.wrapLatLngBounds(e)),e},_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},_keyToTileCoords:function(t){var i=t.split(":"),e=new B(+i[0],+i[1]);return e.z=+i[2],e},_removeTile:function(t){var i=this._tiles[t];i&&(ui(i.el),delete this._tiles[t],this.fire("tileunload",{tile:i.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){pi(t,"leaflet-tile");var i=this.getTileSize();t.style.width=i.x+"px",t.style.height=i.y+"px",t.onselectstart=l,t.onmousemove=l,et&&this.options.opacity<1&&vi(t,this.options.opacity),st&&!rt&&(t.style.WebkitBackfaceVisibility="hidden")},_addTile:function(t,i){var e=this._getTilePos(t),n=this._tileCoordsToKey(t),o=this.createTile(this._wrapCoords(t),a(this._tileReady,this,t));this._initTile(o),this.createTile.length<2&&M(a(this._tileReady,this,t,null,o)),wi(o,e),this._tiles[n]={el:o,coords:t,current:!0},i.appendChild(o),this.fire("tileloadstart",{tile:o,coords:t})},_tileReady:function(t,i,e){i&&this.fire("tileerror",{error:i,tile:e,coords:t});var n=this._tileCoordsToKey(t);(e=this._tiles[n])&&(e.loaded=+new Date,this._map._fadeAnimated?(vi(e.el,0),C(this._fadeFrame),this._fadeFrame=M(this._updateOpacity,this)):(e.active=!0,this._pruneTiles()),i||(pi(e.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:e.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),et||!this._map._fadeAnimated?M(this._pruneTiles,this):setTimeout(a(this._pruneTiles,this),250)))},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var i=new B(this._wrapX?r(t.x,this._wrapX):t.x,this._wrapY?r(t.y,this._wrapY):t.y);return i.z=t.z,i},_pxBoundsToTileRange:function(t){var i=this.getTileSize();return new O(t.min.unscaleBy(i).floor(),t.max.unscaleBy(i).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}});var an=rn.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1},initialize:function(t,i){this._url=t,(i=p(this,i)).detectRetina&&Ct&&0<i.maxZoom&&(i.tileSize=Math.floor(i.tileSize/2),i.zoomReverse?(i.zoomOffset--,i.minZoom++):(i.zoomOffset++,i.maxZoom--),i.minZoom=Math.max(0,i.minZoom)),"string"==typeof i.subdomains&&(i.subdomains=i.subdomains.split("")),st||this.on("tileunload",this._onTileRemove)},setUrl:function(t,i){return this._url===t&&void 0===i&&(i=!0),this._url=t,i||this.redraw(),this},createTile:function(t,i){var e=document.createElement("img");return Ei(e,"load",a(this._tileOnLoad,this,i,e)),Ei(e,"error",a(this._tileOnError,this,i,e)),!this.options.crossOrigin&&""!==this.options.crossOrigin||(e.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),e.alt="",e.setAttribute("role","presentation"),e.src=this.getTileUrl(t),e},getTileUrl:function(t){var i={r:Ct?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var e=this._globalTileRange.max.y-t.y;this.options.tms&&(i.y=e),i["-y"]=e}return g(this._url,h(i,this.options))},_tileOnLoad:function(t,i){et?setTimeout(a(t,this,null,i),0):t(null,i)},_tileOnError:function(t,i,e){var n=this.options.errorTileUrl;n&&i.getAttribute("src")!==n&&(i.src=n),t(e,i)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,i=this.options.maxZoom;return this.options.zoomReverse&&(t=i-t),t+this.options.zoomOffset},_getSubdomain:function(t){var i=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[i]},_abortLoading:function(){var t,i;for(t in this._tiles)this._tiles[t].coords.z!==this._tileZoom&&((i=this._tiles[t].el).onload=l,i.onerror=l,i.complete||(i.src=x,ui(i),delete this._tiles[t]))},_removeTile:function(t){var i=this._tiles[t];if(i)return ht||i.el.setAttribute("src",x),rn.prototype._removeTile.call(this,t)},_tileReady:function(t,i,e){if(this._map&&(!e||e.getAttribute("src")!==x))return rn.prototype._tileReady.call(this,t,i,e)}});function hn(t,i){return new an(t,i)}var un=an.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(t,i){this._url=t;var e=h({},this.defaultWmsParams);for(var n in i)n in this.options||(e[n]=i[n]);var o=(i=p(this,i)).detectRetina&&Ct?2:1,s=this.getTileSize();e.width=s.x*o,e.height=s.y*o,this.wmsParams=e},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var i=1.3<=this._wmsVersion?"crs":"srs";this.wmsParams[i]=this._crs.code,an.prototype.onAdd.call(this,t)},getTileUrl:function(t){var i=this._tileCoordsToNwSe(t),e=this._crs,n=R(e.project(i[0]),e.project(i[1])),o=n.min,s=n.max,r=(1.3<=this._wmsVersion&&this._crs===Me?[o.y,o.x,s.y,s.x]:[o.x,o.y,s.x,s.y]).join(","),a=an.prototype.getTileUrl.call(this,t);return a+m(this.wmsParams,a,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+r},setParams:function(t,i){return h(this.wmsParams,t),i||this.redraw(),this}});an.WMS=un,hn.wms=function(t,i){return new un(t,i)};var ln=Se.extend({options:{padding:.1,tolerance:0},initialize:function(t){p(this,t),u(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),this._zoomAnimated&&pi(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,i){var e=this._map.getZoomScale(i,this._zoom),n=Pi(this._container),o=this._map.getSize().multiplyBy(.5+this.options.padding),s=this._map.project(this._center,i),r=this._map.project(t,i).subtract(s),a=o.multiplyBy(-e).add(n).add(o).subtract(r);yt?xi(this._container,a,e):wi(this._container,a)},_reset:function(){for(var t in this._update(),this._updateTransform(this._center,this._zoom),this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){var t=this.options.padding,i=this._map.getSize(),e=this._map.containerPointToLayerPoint(i.multiplyBy(-t)).round();this._bounds=new O(e,e.add(i.multiplyBy(1+2*t)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),cn=ln.extend({getEvents:function(){var t=ln.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){ln.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");Ei(t,"mousemove",o(this._onMouseMove,32,this),this),Ei(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),Ei(t,"mouseout",this._handleMouseOut,this),this._ctx=t.getContext("2d")},_destroyContainer:function(){C(this._redrawRequest),delete this._ctx,ui(this._container),Bi(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){for(var t in this._redrawBounds=null,this._layers)this._layers[t]._update();this._redraw()}},_update:function(){if(!this._map._animatingZoom||!this._bounds){ln.prototype._update.call(this);var t=this._bounds,i=this._container,e=t.getSize(),n=Ct?2:1;wi(i,t.min),i.width=n*e.x,i.height=n*e.y,i.style.width=e.x+"px",i.style.height=e.y+"px",Ct&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire("update")}},_reset:function(){ln.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t);var i=(this._layers[u(t)]=t)._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=i),this._drawLast=i,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var i=t._order,e=i.next,n=i.prev;e?e.prev=n:this._drawLast=n,n?n.next=e:this._drawFirst=e,delete t._order,delete this._layers[u(t)],this._requestRedraw(t)},_updatePath:function(t){this._extendRedrawBounds(t),t._project(),t._update(),this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if("string"==typeof t.options.dashArray){var i,e,n=t.options.dashArray.split(/[, ]+/),o=[];for(e=0;e<n.length;e++){if(i=Number(n[e]),isNaN(i))return;o.push(i)}t.options._dashArray=o}else t.options._dashArray=t.options.dashArray},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||M(this._redraw,this))},_extendRedrawBounds:function(t){if(t._pxBounds){var i=(t.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new O,this._redrawBounds.extend(t._pxBounds.min.subtract([i,i])),this._redrawBounds.extend(t._pxBounds.max.add([i,i]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t=this._redrawBounds;if(t){var i=t.getSize();this._ctx.clearRect(t.min.x,t.min.y,i.x,i.y)}else this._ctx.clearRect(0,0,this._container.width,this._container.height)},_draw:function(){var t,i=this._redrawBounds;if(this._ctx.save(),i){var e=i.getSize();this._ctx.beginPath(),this._ctx.rect(i.min.x,i.min.y,e.x,e.y),this._ctx.clip()}this._drawing=!0;for(var n=this._drawFirst;n;n=n.next)t=n.layer,(!i||t._pxBounds&&t._pxBounds.intersects(i))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,i){if(this._drawing){var e,n,o,s,r=t._parts,a=r.length,h=this._ctx;if(a){for(h.beginPath(),e=0;e<a;e++){for(n=0,o=r[e].length;n<o;n++)s=r[e][n],h[n?"lineTo":"moveTo"](s.x,s.y);i&&h.closePath()}this._fillStroke(h,t)}}},_updateCircle:function(t){if(this._drawing&&!t._empty()){var i=t._point,e=this._ctx,n=Math.max(Math.round(t._radius),1),o=(Math.max(Math.round(t._radiusY),1)||n)/n;1!=o&&(e.save(),e.scale(1,o)),e.beginPath(),e.arc(i.x,i.y/o,n,0,2*Math.PI,!1),1!=o&&e.restore(),this._fillStroke(e,t)}},_fillStroke:function(t,i){var e=i.options;e.fill&&(t.globalAlpha=e.fillOpacity,t.fillStyle=e.fillColor||e.color,t.fill(e.fillRule||"evenodd")),e.stroke&&0!==e.weight&&(t.setLineDash&&t.setLineDash(i.options&&i.options._dashArray||[]),t.globalAlpha=e.opacity,t.lineWidth=e.weight,t.strokeStyle=e.color,t.lineCap=e.lineCap,t.lineJoin=e.lineJoin,t.stroke())},_onClick:function(t){for(var i,e,n=this._map.mouseEventToLayerPoint(t),o=this._drawFirst;o;o=o.next)(i=o.layer).options.interactive&&i._containsPoint(n)&&!this._map._draggableMoved(i)&&(e=i);e&&(qi(t),this._fireEvent([e],t))},_onMouseMove:function(t){if(this._map&&!this._map.dragging.moving()&&!this._map._animatingZoom){var i=this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t,i)}},_handleMouseOut:function(t){var i=this._hoveredLayer;i&&(mi(this._container,"leaflet-interactive"),this._fireEvent([i],t,"mouseout"),this._hoveredLayer=null)},_handleMouseHover:function(t,i){for(var e,n,o=this._drawFirst;o;o=o.next)(e=o.layer).options.interactive&&e._containsPoint(i)&&(n=e);n!==this._hoveredLayer&&(this._handleMouseOut(t),n&&(pi(this._container,"leaflet-interactive"),this._fireEvent([n],t,"mouseover"),this._hoveredLayer=n)),this._hoveredLayer&&this._fireEvent([this._hoveredLayer],t)},_fireEvent:function(t,i,e){this._map._fireDOMEvent(i,e||i.type,t)},_bringToFront:function(t){var i=t._order;if(i){var e=i.next,n=i.prev;e&&((e.prev=n)?n.next=e:e&&(this._drawFirst=e),i.prev=this._drawLast,(this._drawLast.next=i).next=null,this._drawLast=i,this._requestRedraw(t))}},_bringToBack:function(t){var i=t._order;if(i){var e=i.next,n=i.prev;n&&((n.next=e)?e.prev=n:n&&(this._drawLast=n),i.prev=null,i.next=this._drawFirst,this._drawFirst.prev=i,this._drawFirst=i,this._requestRedraw(t))}}});function _n(t){return St?new cn(t):null}var dn=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch(t){return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}}(),pn={_initContainer:function(){this._container=hi("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(ln.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var i=t._container=dn("shape");pi(i,"leaflet-vml-shape "+(this.options.className||"")),i.coordsize="1 1",t._path=dn("path"),i.appendChild(t._path),this._updateStyle(t),this._layers[u(t)]=t},_addPath:function(t){var i=t._container;this._container.appendChild(i),t.options.interactive&&t.addInteractiveTarget(i)},_removePath:function(t){var i=t._container;ui(i),t.removeInteractiveTarget(i),delete this._layers[u(t)]},_updateStyle:function(t){var i=t._stroke,e=t._fill,n=t.options,o=t._container;o.stroked=!!n.stroke,o.filled=!!n.fill,n.stroke?(i||(i=t._stroke=dn("stroke")),o.appendChild(i),i.weight=n.weight+"px",i.color=n.color,i.opacity=n.opacity,n.dashArray?i.dashStyle=v(n.dashArray)?n.dashArray.join(" "):n.dashArray.replace(/( *, *)/g," "):i.dashStyle="",i.endcap=n.lineCap.replace("butt","flat"),i.joinstyle=n.lineJoin):i&&(o.removeChild(i),t._stroke=null),n.fill?(e||(e=t._fill=dn("fill")),o.appendChild(e),e.color=n.fillColor||n.color,e.opacity=n.fillOpacity):e&&(o.removeChild(e),t._fill=null)},_updateCircle:function(t){var i=t._point.round(),e=Math.round(t._radius),n=Math.round(t._radiusY||e);this._setPath(t,t._empty()?"M0 0":"AL "+i.x+","+i.y+" "+e+","+n+" 0,23592600")},_setPath:function(t,i){t._path.v=i},_bringToFront:function(t){ci(t._container)},_bringToBack:function(t){_i(t._container)}},mn=Et?dn:$,fn=ln.extend({getEvents:function(){var t=ln.prototype.getEvents.call(this);return t.zoomstart=this._onZoomStart,t},_initContainer:function(){this._container=mn("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=mn("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){ui(this._container),Bi(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_onZoomStart:function(){this._update()},_update:function(){if(!this._map._animatingZoom||!this._bounds){ln.prototype._update.call(this);var t=this._bounds,i=t.getSize(),e=this._container;this._svgSize&&this._svgSize.equals(i)||(this._svgSize=i,e.setAttribute("width",i.x),e.setAttribute("height",i.y)),wi(e,t.min),e.setAttribute("viewBox",[t.min.x,t.min.y,i.x,i.y].join(" ")),this.fire("update")}},_initPath:function(t){var i=t._path=mn("path");t.options.className&&pi(i,t.options.className),t.options.interactive&&pi(i,"leaflet-interactive"),this._updateStyle(t),this._layers[u(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){ui(t._path),t.removeInteractiveTarget(t._path),delete this._layers[u(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var i=t._path,e=t.options;i&&(e.stroke?(i.setAttribute("stroke",e.color),i.setAttribute("stroke-opacity",e.opacity),i.setAttribute("stroke-width",e.weight),i.setAttribute("stroke-linecap",e.lineCap),i.setAttribute("stroke-linejoin",e.lineJoin),e.dashArray?i.setAttribute("stroke-dasharray",e.dashArray):i.removeAttribute("stroke-dasharray"),e.dashOffset?i.setAttribute("stroke-dashoffset",e.dashOffset):i.removeAttribute("stroke-dashoffset")):i.setAttribute("stroke","none"),e.fill?(i.setAttribute("fill",e.fillColor||e.color),i.setAttribute("fill-opacity",e.fillOpacity),i.setAttribute("fill-rule",e.fillRule||"evenodd")):i.setAttribute("fill","none"))},_updatePoly:function(t,i){this._setPath(t,Q(t._parts,i))},_updateCircle:function(t){var i=t._point,e=Math.max(Math.round(t._radius),1),n="a"+e+","+(Math.max(Math.round(t._radiusY),1)||e)+" 0 1,0 ",o=t._empty()?"M0 0":"M"+(i.x-e)+","+i.y+n+2*e+",0 "+n+2*-e+",0 ";this._setPath(t,o)},_setPath:function(t,i){t._path.setAttribute("d",i)},_bringToFront:function(t){ci(t._path)},_bringToBack:function(t){_i(t._path)}});function gn(t){return Zt||Et?new fn(t):null}Et&&fn.include(pn),Ji.include({getRenderer:function(t){var i=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer;return i||(i=this._renderer=this._createRenderer()),this.hasLayer(i)||this.addLayer(i),i},_getPaneRenderer:function(t){if("overlayPane"===t||void 0===t)return!1;var i=this._paneRenderers[t];return void 0===i&&(i=this._createRenderer({pane:t}),this._paneRenderers[t]=i),i},_createRenderer:function(t){return this.options.preferCanvas&&_n(t)||gn(t)}});var vn=je.extend({initialize:function(t,i){je.prototype.initialize.call(this,this._boundsToLatLngs(t),i)},setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return[(t=D(t)).getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});fn.create=mn,fn.pointsToPath=Q,We.geometryToLayer=He,We.coordsToLatLng=Fe,We.coordsToLatLngs=Ue,We.latLngToCoords=Ve,We.latLngsToCoords=qe,We.getFeature=Ge,We.asFeature=Ke,Ji.mergeOptions({boxZoom:!0});var yn=oe.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){Ei(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){Bi(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){ui(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){0!==this._resetStateTimeout&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||1!==t.which&&1!==t.button)return!1;this._clearDeferredResetState(),this._resetState(),$t(),bi(),this._startPoint=this._map.mouseEventToContainerPoint(t),Ei(document,{contextmenu:ji,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=hi("div","leaflet-zoom-box",this._container),pi(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var i=new O(this._point,this._startPoint),e=i.getSize();wi(this._box,i.min),this._box.style.width=e.x+"px",this._box.style.height=e.y+"px"},_finish:function(){this._moved&&(ui(this._box),mi(this._container,"leaflet-crosshair")),Qt(),Ti(),Bi(document,{contextmenu:ji,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){if((1===t.which||1===t.button)&&(this._finish(),this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(a(this._resetState,this),0);var i=new N(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(i).fire("boxzoomend",{boxZoomBounds:i})}},_onKeyDown:function(t){27===t.keyCode&&this._finish()}});Ji.addInitHook("addHandler","boxZoom",yn),Ji.mergeOptions({doubleClickZoom:!0});var xn=oe.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var i=this._map,e=i.getZoom(),n=i.options.zoomDelta,o=t.originalEvent.shiftKey?e-n:e+n;"center"===i.options.doubleClickZoom?i.setZoom(o):i.setZoomAround(t.containerPoint,o)}});Ji.addInitHook("addHandler","doubleClickZoom",xn),Ji.mergeOptions({dragging:!0,inertia:!rt,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var wn=oe.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new le(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}pi(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){mi(this._map._container,"leaflet-grab"),mi(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t=this._map;if(t._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var i=D(this._map.options.maxBounds);this._offsetLimit=R(this._map.latLngToContainerPoint(i.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(i.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){if(this._map.options.inertia){var i=this._lastTime=+new Date,e=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(e),this._times.push(i),this._prunePositions(i)}this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){for(;1<this._positions.length&&50<t-this._times[0];)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),i=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=i.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,i){return t-(t-i)*this._viscosity},_onPreDragLimit:function(){if(this._viscosity&&this._offsetLimit){var t=this._draggable._newPos.subtract(this._draggable._startPos),i=this._offsetLimit;t.x<i.min.x&&(t.x=this._viscousLimit(t.x,i.min.x)),t.y<i.min.y&&(t.y=this._viscousLimit(t.y,i.min.y)),t.x>i.max.x&&(t.x=this._viscousLimit(t.x,i.max.x)),t.y>i.max.y&&(t.y=this._viscousLimit(t.y,i.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},_onPreDragWrap:function(){var t=this._worldWidth,i=Math.round(t/2),e=this._initialWorldOffset,n=this._draggable._newPos.x,o=(n-i+e)%t+i-e,s=(n+i+e)%t-i-e,r=Math.abs(o+e)<Math.abs(s+e)?o:s;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=r},_onDragEnd:function(t){var i=this._map,e=i.options,n=!e.inertia||this._times.length<2;if(i.fire("dragend",t),n)i.fire("moveend");else{this._prunePositions(+new Date);var o=this._lastPos.subtract(this._positions[0]),s=(this._lastTime-this._times[0])/1e3,r=e.easeLinearity,a=o.multiplyBy(r/s),h=a.distanceTo([0,0]),u=Math.min(e.inertiaMaxSpeed,h),l=a.multiplyBy(u/h),c=u/(e.inertiaDeceleration*r),_=l.multiplyBy(-c/2).round();_.x||_.y?(_=i._limitOffset(_,i.options.maxBounds),M(function(){i.panBy(_,{duration:c,easeLinearity:r,noMoveStart:!0,animate:!0})})):i.fire("moveend")}}});Ji.addInitHook("addHandler","dragging",wn),Ji.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Pn=oe.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),Ei(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),Bi(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var t=document.body,i=document.documentElement,e=t.scrollTop||i.scrollTop,n=t.scrollLeft||i.scrollLeft;this._map._container.focus(),window.scrollTo(n,e)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){var i,e,n=this._panKeys={},o=this.keyCodes;for(i=0,e=o.left.length;i<e;i++)n[o.left[i]]=[-1*t,0];for(i=0,e=o.right.length;i<e;i++)n[o.right[i]]=[t,0];for(i=0,e=o.down.length;i<e;i++)n[o.down[i]]=[0,t];for(i=0,e=o.up.length;i<e;i++)n[o.up[i]]=[0,-1*t]},_setZoomDelta:function(t){var i,e,n=this._zoomKeys={},o=this.keyCodes;for(i=0,e=o.zoomIn.length;i<e;i++)n[o.zoomIn[i]]=t;for(i=0,e=o.zoomOut.length;i<e;i++)n[o.zoomOut[i]]=-t},_addHooks:function(){Ei(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){Bi(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var i,e=t.keyCode,n=this._map;if(e in this._panKeys)n._panAnim&&n._panAnim._inProgress||(i=this._panKeys[e],t.shiftKey&&(i=I(i).multiplyBy(3)),n.panBy(i),n.options.maxBounds&&n.panInsideBounds(n.options.maxBounds));else if(e in this._zoomKeys)n.setZoom(n.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[e]);else{if(27!==e||!n._popup||!n._popup.options.closeOnEscapeKey)return;n.closePopup()}ji(t)}}});Ji.addInitHook("addHandler","keyboard",Pn),Ji.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Ln=oe.extend({addHooks:function(){Ei(this._map._container,"mousewheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){Bi(this._map._container,"mousewheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var i=Fi(t),e=this._map.options.wheelDebounceTime;this._delta+=i,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var n=Math.max(e-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(a(this._performZoom,this),n),ji(t)},_performZoom:function(){var t=this._map,i=t.getZoom(),e=this._map.options.zoomSnap||0;t._stop();var n=this._delta/(4*this._map.options.wheelPxPerZoomLevel),o=4*Math.log(2/(1+Math.exp(-Math.abs(n))))/Math.LN2,s=e?Math.ceil(o/e)*e:o,r=t._limitZoom(i+(0<this._delta?s:-s))-i;this._delta=0,this._startTime=null,r&&("center"===t.options.scrollWheelZoom?t.setZoom(i+r):t.setZoomAround(this._lastMousePos,i+r))}});Ji.addInitHook("addHandler","scrollWheelZoom",Ln),Ji.mergeOptions({tap:!0,tapTolerance:15});var bn=oe.extend({addHooks:function(){Ei(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){Bi(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(t.touches){if(Di(t),this._fireClick=!0,1<t.touches.length)return this._fireClick=!1,void clearTimeout(this._holdTimeout);var i=t.touches[0],e=i.target;this._startPos=this._newPos=new B(i.clientX,i.clientY),e.tagName&&"a"===e.tagName.toLowerCase()&&pi(e,"leaflet-active"),this._holdTimeout=setTimeout(a(function(){this._isTapValid()&&(this._fireClick=!1,this._onUp(),this._simulateEvent("contextmenu",i))},this),1e3),this._simulateEvent("mousedown",i),Ei(document,{touchmove:this._onMove,touchend:this._onUp},this)}},_onUp:function(t){if(clearTimeout(this._holdTimeout),Bi(document,{touchmove:this._onMove,touchend:this._onUp},this),this._fireClick&&t&&t.changedTouches){var i=t.changedTouches[0],e=i.target;e&&e.tagName&&"a"===e.tagName.toLowerCase()&&mi(e,"leaflet-active"),this._simulateEvent("mouseup",i),this._isTapValid()&&this._simulateEvent("click",i)}},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_onMove:function(t){var i=t.touches[0];this._newPos=new B(i.clientX,i.clientY),this._simulateEvent("mousemove",i)},_simulateEvent:function(t,i){var e=document.createEvent("MouseEvents");e._simulated=!0,i.target._simulatedClick=!0,e.initMouseEvent(t,!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),i.target.dispatchEvent(e)}});Tt&&!bt&&Ji.addInitHook("addHandler","tap",bn),Ji.mergeOptions({touchZoom:Tt&&!rt,bounceAtZoomLimits:!0});var Tn=oe.extend({addHooks:function(){pi(this._map._container,"leaflet-touch-zoom"),Ei(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){mi(this._map._container,"leaflet-touch-zoom"),Bi(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var i=this._map;if(t.touches&&2===t.touches.length&&!i._animatingZoom&&!this._zooming){var e=i.mouseEventToContainerPoint(t.touches[0]),n=i.mouseEventToContainerPoint(t.touches[1]);this._centerPoint=i.getSize()._divideBy(2),this._startLatLng=i.containerPointToLatLng(this._centerPoint),"center"!==i.options.touchZoom&&(this._pinchStartLatLng=i.containerPointToLatLng(e.add(n)._divideBy(2))),this._startDist=e.distanceTo(n),this._startZoom=i.getZoom(),this._moved=!1,this._zooming=!0,i._stop(),Ei(document,"touchmove",this._onTouchMove,this),Ei(document,"touchend",this._onTouchEnd,this),Di(t)}},_onTouchMove:function(t){if(t.touches&&2===t.touches.length&&this._zooming){var i=this._map,e=i.mouseEventToContainerPoint(t.touches[0]),n=i.mouseEventToContainerPoint(t.touches[1]),o=e.distanceTo(n)/this._startDist;if(this._zoom=i.getScaleZoom(o,this._startZoom),!i.options.bounceAtZoomLimits&&(this._zoom<i.getMinZoom()&&o<1||this._zoom>i.getMaxZoom()&&1<o)&&(this._zoom=i._limitZoom(this._zoom)),"center"===i.options.touchZoom){if(this._center=this._startLatLng,1==o)return}else{var s=e._add(n)._divideBy(2)._subtract(this._centerPoint);if(1==o&&0===s.x&&0===s.y)return;this._center=i.unproject(i.project(this._pinchStartLatLng,this._zoom).subtract(s),this._zoom)}this._moved||(i._moveStart(!0,!1),this._moved=!0),C(this._animRequest);var r=a(i._move,i,this._center,this._zoom,{pinch:!0,round:!1});this._animRequest=M(r,this,!0),Di(t)}},_onTouchEnd:function(){this._moved&&this._zooming?(this._zooming=!1,C(this._animRequest),Bi(document,"touchmove",this._onTouchMove),Bi(document,"touchend",this._onTouchEnd),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))):this._zooming=!1}});Ji.addInitHook("addHandler","touchZoom",Tn),Ji.BoxZoom=yn,Ji.DoubleClickZoom=xn,Ji.Drag=wn,Ji.Keyboard=Pn,Ji.ScrollWheelZoom=Ln,Ji.Tap=bn,Ji.TouchZoom=Tn,Object.freeze=i,t.version="1.5.1+HEAD.2e3e0ff",t.Control=Qi,t.control=$i,t.Browser=Bt,t.Evented=k,t.Mixin=re,t.Util=S,t.Class=Z,t.Handler=oe,t.extend=h,t.bind=a,t.stamp=u,t.setOptions=p,t.DomEvent=Yi,t.DomUtil=Zi,t.PosAnimation=Xi,t.Draggable=le,t.LineUtil=ye,t.PolyUtil=Pe,t.Point=B,t.point=I,t.Bounds=O,t.bounds=R,t.Transformation=G,t.transformation=K,t.Projection=Te,t.LatLng=j,t.latLng=W,t.LatLngBounds=N,t.latLngBounds=D,t.CRS=F,t.GeoJSON=We,t.geoJSON=Xe,t.geoJson=Je,t.Layer=Se,t.LayerGroup=Ze,t.layerGroup=function(t,i){return new Ze(t,i)},t.FeatureGroup=Ee,t.featureGroup=function(t){return new Ee(t)},t.ImageOverlay=$e,t.imageOverlay=function(t,i,e){return new $e(t,i,e)},t.VideoOverlay=Qe,t.videoOverlay=function(t,i,e){return new Qe(t,i,e)},t.SVGOverlay=tn,t.svgOverlay=function(t,i,e){return new tn(t,i,e)},t.DivOverlay=en,t.Popup=nn,t.popup=function(t,i){return new nn(t,i)},t.Tooltip=on,t.tooltip=function(t,i){return new on(t,i)},t.Icon=ke,t.icon=function(t){return new ke(t)},t.DivIcon=sn,t.divIcon=function(t){return new sn(t)},t.Marker=Ie,t.marker=function(t,i){return new Ie(t,i)},t.TileLayer=an,t.tileLayer=hn,t.GridLayer=rn,t.gridLayer=function(t){return new rn(t)},t.SVG=fn,t.svg=gn,t.Renderer=ln,t.Canvas=cn,t.canvas=_n,t.Path=Oe,t.CircleMarker=Re,t.circleMarker=function(t,i){return new Re(t,i)},t.Circle=Ne,t.circle=function(t,i,e){return new Ne(t,i,e)},t.Polyline=De,t.polyline=function(t,i){return new De(t,i)},t.Polygon=je,t.polygon=function(t,i){return new je(t,i)},t.Rectangle=vn,t.rectangle=function(t,i){return new vn(t,i)},t.Map=Ji,t.map=function(t,i){return new Ji(t,i)};var zn=window.L;t.noConflict=function(){return window.L=zn,this},window.L=t});
;/*
 Leaflet.draw 0.4.14, a plugin that adds drawing and editing tools to Leaflet powered maps.
 (c) 2012-2017, Jacob Toye, Jon West, Smartrak, Leaflet

 https://github.com/Leaflet/Leaflet.draw
 http://leafletjs.com
 */
!function(t,e,i){function o(t,e){for(;(t=t.parentElement)&&!t.classList.contains(e););return t}L.drawVersion="0.4.14",L.Draw={},L.drawLocal={draw:{toolbar:{actions:{title:"Cancel drawing",text:"Cancel"},finish:{title:"Finish drawing",text:"Finish"},undo:{title:"Delete last point drawn",text:"Delete last point"},buttons:{polyline:"Draw a polyline",polygon:"Draw a polygon",rectangle:"Draw a rectangle",circle:"Draw a circle",marker:"Draw a marker",circlemarker:"Draw a circlemarker"}},handlers:{circle:{tooltip:{start:"Click and drag to draw circle."},radius:"Radius"},circlemarker:{tooltip:{start:"Click map to place circle marker."}},marker:{tooltip:{start:"Click map to place marker."}},polygon:{tooltip:{start:"Click to start drawing shape.",cont:"Click to continue drawing shape.",end:"Click first point to close this shape."}},polyline:{error:"<strong>Error:</strong> shape edges cannot cross!",tooltip:{start:"Click to start drawing line.",cont:"Click to continue drawing line.",end:"Click last point to finish line."}},rectangle:{tooltip:{start:"Click and drag to draw rectangle."}},simpleshape:{tooltip:{end:"Release mouse to finish drawing."}}}},edit:{toolbar:{actions:{save:{title:"Save changes",text:"Save"},cancel:{title:"Cancel editing, discards all changes",text:"Cancel"},clearAll:{title:"Clear all layers",text:"Clear All"}},buttons:{edit:"Edit layers",editDisabled:"No layers to edit",remove:"Delete layers",removeDisabled:"No layers to delete"}},handlers:{edit:{tooltip:{text:"Drag handles or markers to edit features.",subtext:"Click cancel to undo changes."}},remove:{tooltip:{text:"Click on a feature to remove."}}}}},L.Draw.Event={},L.Draw.Event.CREATED="draw:created",L.Draw.Event.EDITED="draw:edited",L.Draw.Event.DELETED="draw:deleted",L.Draw.Event.DRAWSTART="draw:drawstart",L.Draw.Event.DRAWSTOP="draw:drawstop",L.Draw.Event.DRAWVERTEX="draw:drawvertex",L.Draw.Event.EDITSTART="draw:editstart",L.Draw.Event.EDITMOVE="draw:editmove",L.Draw.Event.EDITRESIZE="draw:editresize",L.Draw.Event.EDITVERTEX="draw:editvertex",L.Draw.Event.EDITSTOP="draw:editstop",L.Draw.Event.DELETESTART="draw:deletestart",L.Draw.Event.DELETESTOP="draw:deletestop",L.Draw.Event.TOOLBAROPENED="draw:toolbaropened",L.Draw.Event.TOOLBARCLOSED="draw:toolbarclosed",L.Draw.Event.MARKERCONTEXT="draw:markercontext",L.Draw=L.Draw||{},L.Draw.Feature=L.Handler.extend({initialize:function(t,e){this._map=t,this._container=t._container,this._overlayPane=t._panes.overlayPane,this._popupPane=t._panes.popupPane,e&&e.shapeOptions&&(e.shapeOptions=L.Util.extend({},this.options.shapeOptions,e.shapeOptions)),L.setOptions(this,e);var i=L.version.split(".");1===parseInt(i[0],10)&&parseInt(i[1],10)>=2?L.Draw.Feature.include(L.Evented.prototype):L.Draw.Feature.include(L.Mixin.Events)},enable:function(){this._enabled||(L.Handler.prototype.enable.call(this),this.fire("enabled",{handler:this.type}),this._map.fire(L.Draw.Event.DRAWSTART,{layerType:this.type}))},disable:function(){this._enabled&&(L.Handler.prototype.disable.call(this),this._map.fire(L.Draw.Event.DRAWSTOP,{layerType:this.type}),this.fire("disabled",{handler:this.type}))},addHooks:function(){var t=this._map;t&&(L.DomUtil.disableTextSelection(),t.getContainer().focus(),this._tooltip=new L.Draw.Tooltip(this._map),L.DomEvent.on(this._container,"keyup",this._cancelDrawing,this))},removeHooks:function(){this._map&&(L.DomUtil.enableTextSelection(),this._tooltip.dispose(),this._tooltip=null,L.DomEvent.off(this._container,"keyup",this._cancelDrawing,this))},setOptions:function(t){L.setOptions(this,t)},_fireCreatedEvent:function(t){this._map.fire(L.Draw.Event.CREATED,{layer:t,layerType:this.type})},_cancelDrawing:function(t){27===t.keyCode&&(this._map.fire("draw:canceled",{layerType:this.type}),this.disable())}}),L.Draw.Polyline=L.Draw.Feature.extend({statics:{TYPE:"polyline"},Poly:L.Polyline,options:{allowIntersection:!0,repeatMode:!1,drawError:{color:"#b00b00",timeout:2500},icon:new L.DivIcon({iconSize:new L.Point(8,8),className:"leaflet-div-icon leaflet-editing-icon"}),touchIcon:new L.DivIcon({iconSize:new L.Point(20,20),className:"leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"}),guidelineDistance:20,maxGuideLineLength:4e3,shapeOptions:{stroke:!0,color:"#3388ff",weight:4,opacity:.5,fill:!1,clickable:!0},metric:!0,feet:!0,nautic:!1,showLength:!0,zIndexOffset:2e3,factor:1,maxPoints:0},initialize:function(t,e){L.Browser.touch&&(this.options.icon=this.options.touchIcon),this.options.drawError.message=L.drawLocal.draw.handlers.polyline.error,e&&e.drawError&&(e.drawError=L.Util.extend({},this.options.drawError,e.drawError)),this.type=L.Draw.Polyline.TYPE,L.Draw.Feature.prototype.initialize.call(this,t,e)},addHooks:function(){L.Draw.Feature.prototype.addHooks.call(this),this._map&&(this._markers=[],this._markerGroup=new L.LayerGroup,this._map.addLayer(this._markerGroup),this._poly=new L.Polyline([],this.options.shapeOptions),this._tooltip.updateContent(this._getTooltipText()),this._mouseMarker||(this._mouseMarker=L.marker(this._map.getCenter(),{icon:L.divIcon({className:"leaflet-mouse-marker",iconAnchor:[20,20],iconSize:[40,40]}),opacity:0,zIndexOffset:this.options.zIndexOffset})),this._mouseMarker.on("mouseout",this._onMouseOut,this).on("mousemove",this._onMouseMove,this).on("mousedown",this._onMouseDown,this).on("mouseup",this._onMouseUp,this).addTo(this._map),this._map.on("mouseup",this._onMouseUp,this).on("mousemove",this._onMouseMove,this).on("zoomlevelschange",this._onZoomEnd,this).on("touchstart",this._onTouch,this).on("zoomend",this._onZoomEnd,this))},removeHooks:function(){L.Draw.Feature.prototype.removeHooks.call(this),this._clearHideErrorTimeout(),this._cleanUpShape(),this._map.removeLayer(this._markerGroup),delete this._markerGroup,delete this._markers,this._map.removeLayer(this._poly),delete this._poly,this._mouseMarker.off("mousedown",this._onMouseDown,this).off("mouseout",this._onMouseOut,this).off("mouseup",this._onMouseUp,this).off("mousemove",this._onMouseMove,this),this._map.removeLayer(this._mouseMarker),delete this._mouseMarker,this._clearGuides(),this._map.off("mouseup",this._onMouseUp,this).off("mousemove",this._onMouseMove,this).off("zoomlevelschange",this._onZoomEnd,this).off("zoomend",this._onZoomEnd,this).off("touchstart",this._onTouch,this).off("click",this._onTouch,this)},deleteLastVertex:function(){if(!(this._markers.length<=1)){var t=this._markers.pop(),e=this._poly,i=e.getLatLngs(),o=i.splice(-1,1)[0];this._poly.setLatLngs(i),this._markerGroup.removeLayer(t),e.getLatLngs().length<2&&this._map.removeLayer(e),this._vertexChanged(o,!1)}},addVertex:function(t){if(this._markers.length>=2&&!this.options.allowIntersection&&this._poly.newLatLngIntersects(t))return void this._showErrorTooltip();this._errorShown&&this._hideErrorTooltip(),this._markers.push(this._createMarker(t)),this._poly.addLatLng(t),2===this._poly.getLatLngs().length&&this._map.addLayer(this._poly),this._vertexChanged(t,!0)},completeShape:function(){this._markers.length<=1||(this._fireCreatedEvent(),this.disable(),this.options.repeatMode&&this.enable())},_finishShape:function(){var t=this._poly._defaultShape?this._poly._defaultShape():this._poly.getLatLngs(),e=this._poly.newLatLngIntersects(t[t.length-1]);if(!this.options.allowIntersection&&e||!this._shapeIsValid())return void this._showErrorTooltip();this._fireCreatedEvent(),this.disable(),this.options.repeatMode&&this.enable()},_shapeIsValid:function(){return!0},_onZoomEnd:function(){null!==this._markers&&this._updateGuide()},_onMouseMove:function(t){var e=this._map.mouseEventToLayerPoint(t.originalEvent),i=this._map.layerPointToLatLng(e);this._currentLatLng=i,this._updateTooltip(i),this._updateGuide(e),this._mouseMarker.setLatLng(i),L.DomEvent.preventDefault(t.originalEvent)},_vertexChanged:function(t,e){this._map.fire(L.Draw.Event.DRAWVERTEX,{layers:this._markerGroup}),this._updateFinishHandler(),this._updateRunningMeasure(t,e),this._clearGuides(),this._updateTooltip()},_onMouseDown:function(t){if(!this._clickHandled&&!this._touchHandled&&!this._disableMarkers){this._onMouseMove(t),this._clickHandled=!0,this._disableNewMarkers();var e=t.originalEvent,i=e.clientX,o=e.clientY;this._startPoint.call(this,i,o)}},_startPoint:function(t,e){this._mouseDownOrigin=L.point(t,e)},_onMouseUp:function(t){var e=t.originalEvent,i=e.clientX,o=e.clientY;this._endPoint.call(this,i,o,t),this._clickHandled=null},_endPoint:function(e,i,o){if(this._mouseDownOrigin){var n=L.point(e,i).distanceTo(this._mouseDownOrigin),a=this._calculateFinishDistance(o.latlng);this.options.maxPoints>1&&this.options.maxPoints==this._markers.length+1?(this.addVertex(o.latlng),this._finishShape()):a<10&&L.Browser.touch?this._finishShape():Math.abs(n)<9*(t.devicePixelRatio||1)&&this.addVertex(o.latlng),this._enableNewMarkers()}this._mouseDownOrigin=null},_onTouch:function(t){var e,i,o=t.originalEvent;!o.touches||!o.touches[0]||this._clickHandled||this._touchHandled||this._disableMarkers||(e=o.touches[0].clientX,i=o.touches[0].clientY,this._disableNewMarkers(),this._touchHandled=!0,this._startPoint.call(this,e,i),this._endPoint.call(this,e,i,t),this._touchHandled=null),this._clickHandled=null},_onMouseOut:function(){this._tooltip&&this._tooltip._onMouseOut.call(this._tooltip)},_calculateFinishDistance:function(t){var e;if(this._markers.length>0){var i;if(this.type===L.Draw.Polyline.TYPE)i=this._markers[this._markers.length-1];else{if(this.type!==L.Draw.Polygon.TYPE)return 1/0;i=this._markers[0]}var o=this._map.latLngToContainerPoint(i.getLatLng()),n=new L.Marker(t,{icon:this.options.icon,zIndexOffset:2*this.options.zIndexOffset}),a=this._map.latLngToContainerPoint(n.getLatLng());e=o.distanceTo(a)}else e=1/0;return e},_updateFinishHandler:function(){var t=this._markers.length;t>1&&this._markers[t-1].on("click",this._finishShape,this),t>2&&this._markers[t-2].off("click",this._finishShape,this)},_createMarker:function(t){var e=new L.Marker(t,{icon:this.options.icon,zIndexOffset:2*this.options.zIndexOffset});return this._markerGroup.addLayer(e),e},_updateGuide:function(t){var e=this._markers?this._markers.length:0;e>0&&(t=t||this._map.latLngToLayerPoint(this._currentLatLng),this._clearGuides(),this._drawGuide(this._map.latLngToLayerPoint(this._markers[e-1].getLatLng()),t))},_updateTooltip:function(t){var e=this._getTooltipText();t&&this._tooltip.updatePosition(t),this._errorShown||this._tooltip.updateContent(e)},_drawGuide:function(t,e){var i,o,n,a=Math.floor(Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))),s=this.options.guidelineDistance,r=this.options.maxGuideLineLength,l=a>r?a-r:s;for(this._guidesContainer||(this._guidesContainer=L.DomUtil.create("div","leaflet-draw-guides",this._overlayPane));l<a;l+=this.options.guidelineDistance)i=l/a,o={x:Math.floor(t.x*(1-i)+i*e.x),y:Math.floor(t.y*(1-i)+i*e.y)},n=L.DomUtil.create("div","leaflet-draw-guide-dash",this._guidesContainer),n.style.backgroundColor=this._errorShown?this.options.drawError.color:this.options.shapeOptions.color,L.DomUtil.setPosition(n,o)},_updateGuideColor:function(t){if(this._guidesContainer)for(var e=0,i=this._guidesContainer.childNodes.length;e<i;e++)this._guidesContainer.childNodes[e].style.backgroundColor=t},_clearGuides:function(){if(this._guidesContainer)for(;this._guidesContainer.firstChild;)this._guidesContainer.removeChild(this._guidesContainer.firstChild)},_getTooltipText:function(){var t,e,i=this.options.showLength;return 0===this._markers.length?t={text:L.drawLocal.draw.handlers.polyline.tooltip.start}:(e=i?this._getMeasurementString():"",t=1===this._markers.length?{text:L.drawLocal.draw.handlers.polyline.tooltip.cont,subtext:e}:{text:L.drawLocal.draw.handlers.polyline.tooltip.end,subtext:e}),t},_updateRunningMeasure:function(t,e){var i,o,n=this._markers.length;1===this._markers.length?this._measurementRunningTotal=0:(i=n-(e?2:1),o=L.GeometryUtil.isVersion07x()?t.distanceTo(this._markers[i].getLatLng())*(this.options.factor||1):this._map.distance(t,this._markers[i].getLatLng())*(this.options.factor||1),this._measurementRunningTotal+=o*(e?1:-1))},_getMeasurementString:function(){var t,e=this._currentLatLng,i=this._markers[this._markers.length-1].getLatLng();return t=L.GeometryUtil.isVersion07x()?i&&e&&e.distanceTo?this._measurementRunningTotal+e.distanceTo(i)*(this.options.factor||1):this._measurementRunningTotal||0:i&&e?this._measurementRunningTotal+this._map.distance(e,i)*(this.options.factor||1):this._measurementRunningTotal||0,L.GeometryUtil.readableDistance(t,this.options.metric,this.options.feet,this.options.nautic,this.options.precision)},_showErrorTooltip:function(){this._errorShown=!0,this._tooltip.showAsError().updateContent({text:this.options.drawError.message}),this._updateGuideColor(this.options.drawError.color),this._poly.setStyle({color:this.options.drawError.color}),this._clearHideErrorTimeout(),this._hideErrorTimeout=setTimeout(L.Util.bind(this._hideErrorTooltip,this),this.options.drawError.timeout)},_hideErrorTooltip:function(){this._errorShown=!1,this._clearHideErrorTimeout(),this._tooltip.removeError().updateContent(this._getTooltipText()),this._updateGuideColor(this.options.shapeOptions.color),this._poly.setStyle({color:this.options.shapeOptions.color})},_clearHideErrorTimeout:function(){this._hideErrorTimeout&&(clearTimeout(this._hideErrorTimeout),this._hideErrorTimeout=null)},_disableNewMarkers:function(){this._disableMarkers=!0},_enableNewMarkers:function(){setTimeout(function(){this._disableMarkers=!1}.bind(this),50)},_cleanUpShape:function(){this._markers.length>1&&this._markers[this._markers.length-1].off("click",this._finishShape,this)},_fireCreatedEvent:function(){var t=new this.Poly(this._poly.getLatLngs(),this.options.shapeOptions);L.Draw.Feature.prototype._fireCreatedEvent.call(this,t)}}),L.Draw.Polygon=L.Draw.Polyline.extend({statics:{TYPE:"polygon"},Poly:L.Polygon,options:{showArea:!1,showLength:!1,shapeOptions:{stroke:!0,color:"#3388ff",weight:4,opacity:.5,fill:!0,fillColor:null,fillOpacity:.2,clickable:!0},metric:!0,feet:!0,nautic:!1,precision:{}},initialize:function(t,e){L.Draw.Polyline.prototype.initialize.call(this,t,e),this.type=L.Draw.Polygon.TYPE},_updateFinishHandler:function(){var t=this._markers.length;1===t&&this._markers[0].on("click",this._finishShape,this),t>2&&(this._markers[t-1].on("dblclick",this._finishShape,this),t>3&&this._markers[t-2].off("dblclick",this._finishShape,this))},_getTooltipText:function(){var t,e;return 0===this._markers.length?t=L.drawLocal.draw.handlers.polygon.tooltip.start:this._markers.length<3?(t=L.drawLocal.draw.handlers.polygon.tooltip.cont,e=this._getMeasurementString()):(t=L.drawLocal.draw.handlers.polygon.tooltip.end,e=this._getMeasurementString()),{text:t,subtext:e}},_getMeasurementString:function(){var t=this._area,e="";return t||this.options.showLength?(this.options.showLength&&(e=L.Draw.Polyline.prototype._getMeasurementString.call(this)),t&&(e+="<br>"+L.GeometryUtil.readableArea(t,this.options.metric,this.options.precision)),e):null},_shapeIsValid:function(){return this._markers.length>=3},_vertexChanged:function(t,e){var i;!this.options.allowIntersection&&this.options.showArea&&(i=this._poly.getLatLngs(),this._area=L.GeometryUtil.geodesicArea(i)),L.Draw.Polyline.prototype._vertexChanged.call(this,t,e)},_cleanUpShape:function(){var t=this._markers.length;t>0&&(this._markers[0].off("click",this._finishShape,this),t>2&&this._markers[t-1].off("dblclick",this._finishShape,this))}}),L.SimpleShape={},L.Draw.SimpleShape=L.Draw.Feature.extend({options:{repeatMode:!1},initialize:function(t,e){this._endLabelText=L.drawLocal.draw.handlers.simpleshape.tooltip.end,L.Draw.Feature.prototype.initialize.call(this,t,e)},addHooks:function(){L.Draw.Feature.prototype.addHooks.call(this),this._map&&(this._mapDraggable=this._map.dragging.enabled(),this._mapDraggable&&this._map.dragging.disable(),this._container.style.cursor="crosshair",this._tooltip.updateContent({text:this._initialLabelText}),this._map.on("mousedown",this._onMouseDown,this).on("mousemove",this._onMouseMove,this).on("touchstart",this._onMouseDown,this).on("touchmove",this._onMouseMove,this),e.addEventListener("touchstart",L.DomEvent.preventDefault,{passive:!1}))},removeHooks:function(){L.Draw.Feature.prototype.removeHooks.call(this),this._map&&(this._mapDraggable&&this._map.dragging.enable(),this._container.style.cursor="",this._map.off("mousedown",this._onMouseDown,this).off("mousemove",this._onMouseMove,this).off("touchstart",this._onMouseDown,this).off("touchmove",this._onMouseMove,this),L.DomEvent.off(e,"mouseup",this._onMouseUp,this),L.DomEvent.off(e,"touchend",this._onMouseUp,this),e.removeEventListener("touchstart",L.DomEvent.preventDefault),this._shape&&(this._map.removeLayer(this._shape),delete this._shape)),this._isDrawing=!1},_getTooltipText:function(){return{text:this._endLabelText}},_onMouseDown:function(t){this._isDrawing=!0,this._startLatLng=t.latlng,L.DomEvent.on(e,"mouseup",this._onMouseUp,this).on(e,"touchend",this._onMouseUp,this).preventDefault(t.originalEvent)},_onMouseMove:function(t){var e=t.latlng;this._tooltip.updatePosition(e),this._isDrawing&&(this._tooltip.updateContent(this._getTooltipText()),this._drawShape(e))},_onMouseUp:function(){this._shape&&this._fireCreatedEvent(),this.disable(),this.options.repeatMode&&this.enable()}}),L.Draw.Rectangle=L.Draw.SimpleShape.extend({statics:{TYPE:"rectangle"},options:{shapeOptions:{stroke:!0,color:"#3388ff",weight:4,opacity:.5,fill:!0,fillColor:null,fillOpacity:.2,showArea:!0,clickable:!0},metric:!0},initialize:function(t,e){this.type=L.Draw.Rectangle.TYPE,this._initialLabelText=L.drawLocal.draw.handlers.rectangle.tooltip.start,L.Draw.SimpleShape.prototype.initialize.call(this,t,e)},disable:function(){this._enabled&&(this._isCurrentlyTwoClickDrawing=!1,L.Draw.SimpleShape.prototype.disable.call(this))},_onMouseUp:function(t){if(!this._shape&&!this._isCurrentlyTwoClickDrawing)return void(this._isCurrentlyTwoClickDrawing=!0);this._isCurrentlyTwoClickDrawing&&!o(t.target,"leaflet-pane")||L.Draw.SimpleShape.prototype._onMouseUp.call(this)},_drawShape:function(t){this._shape?this._shape.setBounds(new L.LatLngBounds(this._startLatLng,t)):(this._shape=new L.Rectangle(new L.LatLngBounds(this._startLatLng,t),this.options.shapeOptions),this._map.addLayer(this._shape))},_fireCreatedEvent:function(){var t=new L.Rectangle(this._shape.getBounds(),this.options.shapeOptions);L.Draw.SimpleShape.prototype._fireCreatedEvent.call(this,t)},_getTooltipText:function(){var t,e,i,o=L.Draw.SimpleShape.prototype._getTooltipText.call(this),n=this._shape,a=this.options.showArea;return n&&(t=this._shape._defaultShape?this._shape._defaultShape():this._shape.getLatLngs(),e=L.GeometryUtil.geodesicArea(t),i=a?L.GeometryUtil.readableArea(e,this.options.metric):""),{text:o.text,subtext:i}}}),L.Draw.Marker=L.Draw.Feature.extend({statics:{TYPE:"marker"},options:{icon:new L.Icon.Default,repeatMode:!1,zIndexOffset:2e3},initialize:function(t,e){this.type=L.Draw.Marker.TYPE,this._initialLabelText=L.drawLocal.draw.handlers.marker.tooltip.start,L.Draw.Feature.prototype.initialize.call(this,t,e)},addHooks:function(){L.Draw.Feature.prototype.addHooks.call(this),this._map&&(this._tooltip.updateContent({text:this._initialLabelText}),this._mouseMarker||(this._mouseMarker=L.marker(this._map.getCenter(),{icon:L.divIcon({className:"leaflet-mouse-marker",iconAnchor:[20,20],iconSize:[40,40]}),opacity:0,zIndexOffset:this.options.zIndexOffset})),this._mouseMarker.on("click",this._onClick,this).addTo(this._map),this._map.on("mousemove",this._onMouseMove,this),this._map.on("click",this._onTouch,this))},removeHooks:function(){L.Draw.Feature.prototype.removeHooks.call(this),this._map&&(this._map.off("click",this._onClick,this).off("click",this._onTouch,this),this._marker&&(this._marker.off("click",this._onClick,this),this._map.removeLayer(this._marker),delete this._marker),this._mouseMarker.off("click",this._onClick,this),this._map.removeLayer(this._mouseMarker),delete this._mouseMarker,this._map.off("mousemove",this._onMouseMove,this))},_onMouseMove:function(t){var e=t.latlng;this._tooltip.updatePosition(e),this._mouseMarker.setLatLng(e),this._marker?(e=this._mouseMarker.getLatLng(),this._marker.setLatLng(e)):(this._marker=this._createMarker(e),this._marker.on("click",this._onClick,this),this._map.on("click",this._onClick,this).addLayer(this._marker))},_createMarker:function(t){return new L.Marker(t,{icon:this.options.icon,zIndexOffset:this.options.zIndexOffset})},_onClick:function(){this._fireCreatedEvent(),this.disable(),this.options.repeatMode&&this.enable()},_onTouch:function(t){this._onMouseMove(t),this._onClick()},_fireCreatedEvent:function(){var t=new L.Marker.Touch(this._marker.getLatLng(),{icon:this.options.icon});L.Draw.Feature.prototype._fireCreatedEvent.call(this,t)}}),L.Draw.CircleMarker=L.Draw.Marker.extend({statics:{TYPE:"circlemarker"},options:{stroke:!0,color:"#3388ff",weight:4,opacity:.5,fill:!0,fillColor:null,fillOpacity:.2,clickable:!0,zIndexOffset:2e3},initialize:function(t,e){this.type=L.Draw.CircleMarker.TYPE,this._initialLabelText=L.drawLocal.draw.handlers.circlemarker.tooltip.start,L.Draw.Feature.prototype.initialize.call(this,t,e)},_fireCreatedEvent:function(){var t=new L.CircleMarker(this._marker.getLatLng(),this.options);L.Draw.Feature.prototype._fireCreatedEvent.call(this,t)},_createMarker:function(t){return new L.CircleMarker(t,this.options)}}),L.Draw.Circle=L.Draw.SimpleShape.extend({statics:{TYPE:"circle"},options:{shapeOptions:{stroke:!0,color:"#3388ff",weight:4,opacity:.5,fill:!0,fillColor:null,fillOpacity:.2,clickable:!0},showRadius:!0,metric:!0,feet:!0,nautic:!1},initialize:function(t,e){this.type=L.Draw.Circle.TYPE,this._initialLabelText=L.drawLocal.draw.handlers.circle.tooltip.start,L.Draw.SimpleShape.prototype.initialize.call(this,t,e)},_drawShape:function(t){if(L.GeometryUtil.isVersion07x())var e=this._startLatLng.distanceTo(t);else var e=this._map.distance(this._startLatLng,t);this._shape?this._shape.setRadius(e):(this._shape=new L.Circle(this._startLatLng,e,this.options.shapeOptions),this._map.addLayer(this._shape))},_fireCreatedEvent:function(){var t=new L.Circle(this._startLatLng,this._shape.getRadius(),this.options.shapeOptions);L.Draw.SimpleShape.prototype._fireCreatedEvent.call(this,t)},_onMouseMove:function(t){var e,i=t.latlng,o=this.options.showRadius,n=this.options.metric;if(this._tooltip.updatePosition(i),this._isDrawing){this._drawShape(i),e=this._shape.getRadius().toFixed(1);var a="";o&&(a=L.drawLocal.draw.handlers.circle.radius+": "+L.GeometryUtil.readableDistance(e,n,this.options.feet,this.options.nautic)),this._tooltip.updateContent({text:this._endLabelText,subtext:a})}}}),L.Edit=L.Edit||{},L.Edit.Marker=L.Handler.extend({initialize:function(t,e){this._marker=t,L.setOptions(this,e)},addHooks:function(){var t=this._marker;t.dragging.enable(),t.on("dragend",this._onDragEnd,t),this._toggleMarkerHighlight()},removeHooks:function(){var t=this._marker;t.dragging.disable(),t.off("dragend",this._onDragEnd,t),this._toggleMarkerHighlight()},_onDragEnd:function(t){var e=t.target;e.edited=!0,this._map.fire(L.Draw.Event.EDITMOVE,{layer:e})},_toggleMarkerHighlight:function(){var t=this._marker._icon;t&&(t.style.display="none",L.DomUtil.hasClass(t,"leaflet-edit-marker-selected")?(L.DomUtil.removeClass(t,"leaflet-edit-marker-selected"),this._offsetMarker(t,-4)):(L.DomUtil.addClass(t,"leaflet-edit-marker-selected"),this._offsetMarker(t,4)),t.style.display="")},_offsetMarker:function(t,e){var i=parseInt(t.style.marginTop,10)-e,o=parseInt(t.style.marginLeft,10)-e;t.style.marginTop=i+"px",t.style.marginLeft=o+"px"}}),L.Marker.addInitHook(function(){L.Edit.Marker&&(this.editing=new L.Edit.Marker(this),this.options.editable&&this.editing.enable())}),L.Edit=L.Edit||{},L.Edit.Poly=L.Handler.extend({initialize:function(t){this.latlngs=[t._latlngs],t._holes&&(this.latlngs=this.latlngs.concat(t._holes)),this._poly=t,this._poly.on("revert-edited",this._updateLatLngs,this)},_defaultShape:function(){return L.Polyline._flat?L.Polyline._flat(this._poly._latlngs)?this._poly._latlngs:this._poly._latlngs[0]:this._poly._latlngs},_eachVertexHandler:function(t){for(var e=0;e<this._verticesHandlers.length;e++)t(this._verticesHandlers[e])},addHooks:function(){this._initHandlers(),this._eachVertexHandler(function(t){t.addHooks()})},removeHooks:function(){this._eachVertexHandler(function(t){t.removeHooks()})},updateMarkers:function(){this._eachVertexHandler(function(t){t.updateMarkers()})},_initHandlers:function(){this._verticesHandlers=[];for(var t=0;t<this.latlngs.length;t++)this._verticesHandlers.push(new L.Edit.PolyVerticesEdit(this._poly,this.latlngs[t],this._poly.options.poly))},_updateLatLngs:function(t){this.latlngs=[t.layer._latlngs],t.layer._holes&&(this.latlngs=this.latlngs.concat(t.layer._holes))}}),L.Edit.PolyVerticesEdit=L.Handler.extend({options:{icon:new L.DivIcon({iconSize:new L.Point(8,8),className:"leaflet-div-icon leaflet-editing-icon"}),touchIcon:new L.DivIcon({iconSize:new L.Point(20,20),className:"leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"}),drawError:{color:"#b00b00",timeout:1e3}},initialize:function(t,e,i){L.Browser.touch&&(this.options.icon=this.options.touchIcon),this._poly=t,i&&i.drawError&&(i.drawError=L.Util.extend({},this.options.drawError,i.drawError)),this._latlngs=e,L.setOptions(this,i)},_defaultShape:function(){return L.Polyline._flat?L.Polyline._flat(this._latlngs)?this._latlngs:this._latlngs[0]:this._latlngs},addHooks:function(){var t=this._poly,e=t._path;t instanceof L.Polygon||(t.options.fill=!1,t.options.editing&&(t.options.editing.fill=!1)),e&&t.options.editing.className&&(t.options.original.className&&t.options.original.className.split(" ").forEach(function(t){L.DomUtil.removeClass(e,t)}),t.options.editing.className.split(" ").forEach(function(t){L.DomUtil.addClass(e,t)})),t.setStyle(t.options.editing),this._poly._map&&(this._map=this._poly._map,this._markerGroup||this._initMarkers(),this._poly._map.addLayer(this._markerGroup))},removeHooks:function(){var t=this._poly,e=t._path;e&&t.options.editing.className&&(t.options.editing.className.split(" ").forEach(function(t){L.DomUtil.removeClass(e,t)}),t.options.original.className&&t.options.original.className.split(" ").forEach(function(t){L.DomUtil.addClass(e,t)})),t.setStyle(t.options.original),t._map&&(t._map.removeLayer(this._markerGroup),delete this._markerGroup,delete this._markers)},updateMarkers:function(){this._markerGroup.clearLayers(),this._initMarkers()},_initMarkers:function(){this._markerGroup||(this._markerGroup=new L.LayerGroup),this._markers=[];var t,e,i,o,n=this._defaultShape();for(t=0,i=n.length;t<i;t++)o=this._createMarker(n[t],t),o.on("click",this._onMarkerClick,this),o.on("contextmenu",this._onContextMenu,this),this._markers.push(o);var a,s;for(t=0,e=i-1;t<i;e=t++)(0!==t||L.Polygon&&this._poly instanceof L.Polygon)&&(a=this._markers[e],s=this._markers[t],this._createMiddleMarker(a,s),this._updatePrevNext(a,s))},_createMarker:function(t,e){var i=new L.Marker.Touch(t,{draggable:!0,icon:this.options.icon});return i._origLatLng=t,i._index=e,i.on("dragstart",this._onMarkerDragStart,this).on("drag",this._onMarkerDrag,this).on("dragend",this._fireEdit,this).on("touchmove",this._onTouchMove,this).on("touchend",this._fireEdit,this).on("MSPointerMove",this._onTouchMove,this).on("MSPointerUp",this._fireEdit,this),this._markerGroup.addLayer(i),i},_onMarkerDragStart:function(){this._poly.fire("editstart")},_spliceLatLngs:function(){var t=this._defaultShape(),e=[].splice.apply(t,arguments);return this._poly._convertLatLngs(t,!0),this._poly.redraw(),e},_removeMarker:function(t){var e=t._index;this._markerGroup.removeLayer(t),this._markers.splice(e,1),this._spliceLatLngs(e,1),this._updateIndexes(e,-1),t.off("dragstart",this._onMarkerDragStart,this).off("drag",this._onMarkerDrag,this).off("dragend",this._fireEdit,this).off("touchmove",this._onMarkerDrag,this).off("touchend",this._fireEdit,this).off("click",this._onMarkerClick,this).off("MSPointerMove",this._onTouchMove,this).off("MSPointerUp",this._fireEdit,this)},_fireEdit:function(){this._poly.edited=!0,this._poly.fire("edit"),this._poly._map.fire(L.Draw.Event.EDITVERTEX,{layers:this._markerGroup,poly:this._poly})},_onMarkerDrag:function(t){var e=t.target,i=this._poly;if(L.extend(e._origLatLng,e._latlng),e._middleLeft&&e._middleLeft.setLatLng(this._getMiddleLatLng(e._prev,e)),e._middleRight&&e._middleRight.setLatLng(this._getMiddleLatLng(e,e._next)),i.options.poly){var o=i._map._editTooltip;if(!i.options.poly.allowIntersection&&i.intersects()){var n=i.options.color;i.setStyle({color:this.options.drawError.color}),0!==L.version.indexOf("0.7")&&e.dragging._draggable._onUp(t),this._onMarkerClick(t),o&&o.updateContent({text:L.drawLocal.draw.handlers.polyline.error}),setTimeout(function(){i.setStyle({color:n}),o&&o.updateContent({text:L.drawLocal.edit.handlers.edit.tooltip.text,subtext:L.drawLocal.edit.handlers.edit.tooltip.subtext})},1e3)}}this._poly._bounds._southWest=L.latLng(1/0,1/0),this._poly._bounds._northEast=L.latLng(-1/0,-1/0);var a=this._poly.getLatLngs();this._poly._convertLatLngs(a,!0),this._poly.redraw(),this._poly.fire("editdrag")},_onMarkerClick:function(t){var e=L.Polygon&&this._poly instanceof L.Polygon?4:3,i=t.target;this._defaultShape().length<e||(this._removeMarker(i),this._updatePrevNext(i._prev,i._next),i._middleLeft&&this._markerGroup.removeLayer(i._middleLeft),i._middleRight&&this._markerGroup.removeLayer(i._middleRight),i._prev&&i._next?this._createMiddleMarker(i._prev,i._next):i._prev?i._next||(i._prev._middleRight=null):i._next._middleLeft=null,this._fireEdit())},_onContextMenu:function(t){var e=t.target;this._poly;this._poly._map.fire(L.Draw.Event.MARKERCONTEXT,{marker:e,layers:this._markerGroup,poly:this._poly}),L.DomEvent.stopPropagation},_onTouchMove:function(t){var e=this._map.mouseEventToLayerPoint(t.originalEvent.touches[0]),i=this._map.layerPointToLatLng(e),o=t.target;L.extend(o._origLatLng,i),o._middleLeft&&o._middleLeft.setLatLng(this._getMiddleLatLng(o._prev,o)),o._middleRight&&o._middleRight.setLatLng(this._getMiddleLatLng(o,o._next)),this._poly.redraw(),this.updateMarkers()},_updateIndexes:function(t,e){this._markerGroup.eachLayer(function(i){i._index>t&&(i._index+=e)})},_createMiddleMarker:function(t,e){var i,o,n,a=this._getMiddleLatLng(t,e),s=this._createMarker(a);s.setOpacity(.6),t._middleRight=e._middleLeft=s,o=function(){s.off("touchmove",o,this);var n=e._index;s._index=n,s.off("click",i,this).on("click",this._onMarkerClick,this),a.lat=s.getLatLng().lat,a.lng=s.getLatLng().lng,this._spliceLatLngs(n,0,a),this._markers.splice(n,0,s),s.setOpacity(1),this._updateIndexes(n,1),e._index++,this._updatePrevNext(t,s),this._updatePrevNext(s,e),this._poly.fire("editstart")},n=function(){s.off("dragstart",o,this),s.off("dragend",n,this),s.off("touchmove",o,this),this._createMiddleMarker(t,s),this._createMiddleMarker(s,e)},i=function(){o.call(this),n.call(this),this._fireEdit()},s.on("click",i,this).on("dragstart",o,this).on("dragend",n,this).on("touchmove",o,this),this._markerGroup.addLayer(s)},_updatePrevNext:function(t,e){t&&(t._next=e),e&&(e._prev=t)},_getMiddleLatLng:function(t,e){var i=this._poly._map,o=i.project(t.getLatLng()),n=i.project(e.getLatLng());return i.unproject(o._add(n)._divideBy(2))}}),L.Polyline.addInitHook(function(){this.editing||(L.Edit.Poly&&(this.editing=new L.Edit.Poly(this),this.options.editable&&this.editing.enable()),this.on("add",function(){this.editing&&this.editing.enabled()&&this.editing.addHooks()}),this.on("remove",function(){this.editing&&this.editing.enabled()&&this.editing.removeHooks()}))}),L.Edit=L.Edit||{},L.Edit.SimpleShape=L.Handler.extend({options:{moveIcon:new L.DivIcon({iconSize:new L.Point(8,8),className:"leaflet-div-icon leaflet-editing-icon leaflet-edit-move"}),resizeIcon:new L.DivIcon({iconSize:new L.Point(8,8),className:"leaflet-div-icon leaflet-editing-icon leaflet-edit-resize"}),touchMoveIcon:new L.DivIcon({
iconSize:new L.Point(20,20),className:"leaflet-div-icon leaflet-editing-icon leaflet-edit-move leaflet-touch-icon"}),touchResizeIcon:new L.DivIcon({iconSize:new L.Point(20,20),className:"leaflet-div-icon leaflet-editing-icon leaflet-edit-resize leaflet-touch-icon"})},initialize:function(t,e){L.Browser.touch&&(this.options.moveIcon=this.options.touchMoveIcon,this.options.resizeIcon=this.options.touchResizeIcon),this._shape=t,L.Util.setOptions(this,e)},addHooks:function(){var t=this._shape;this._shape._map&&(this._map=this._shape._map,t.setStyle(t.options.editing),t._map&&(this._map=t._map,this._markerGroup||this._initMarkers(),this._map.addLayer(this._markerGroup)))},removeHooks:function(){var t=this._shape;if(t.setStyle(t.options.original),t._map){this._unbindMarker(this._moveMarker);for(var e=0,i=this._resizeMarkers.length;e<i;e++)this._unbindMarker(this._resizeMarkers[e]);this._resizeMarkers=null,this._map.removeLayer(this._markerGroup),delete this._markerGroup}this._map=null},updateMarkers:function(){this._markerGroup.clearLayers(),this._initMarkers()},_initMarkers:function(){this._markerGroup||(this._markerGroup=new L.LayerGroup),this._createMoveMarker(),this._createResizeMarker()},_createMoveMarker:function(){},_createResizeMarker:function(){},_createMarker:function(t,e){var i=new L.Marker.Touch(t,{draggable:!0,icon:e,zIndexOffset:10});return this._bindMarker(i),this._markerGroup.addLayer(i),i},_bindMarker:function(t){t.on("dragstart",this._onMarkerDragStart,this).on("drag",this._onMarkerDrag,this).on("dragend",this._onMarkerDragEnd,this).on("touchstart",this._onTouchStart,this).on("touchmove",this._onTouchMove,this).on("MSPointerMove",this._onTouchMove,this).on("touchend",this._onTouchEnd,this).on("MSPointerUp",this._onTouchEnd,this)},_unbindMarker:function(t){t.off("dragstart",this._onMarkerDragStart,this).off("drag",this._onMarkerDrag,this).off("dragend",this._onMarkerDragEnd,this).off("touchstart",this._onTouchStart,this).off("touchmove",this._onTouchMove,this).off("MSPointerMove",this._onTouchMove,this).off("touchend",this._onTouchEnd,this).off("MSPointerUp",this._onTouchEnd,this)},_onMarkerDragStart:function(t){t.target.setOpacity(0),this._shape.fire("editstart")},_fireEdit:function(){this._shape.edited=!0,this._shape.fire("edit")},_onMarkerDrag:function(t){var e=t.target,i=e.getLatLng();e===this._moveMarker?this._move(i):this._resize(i),this._shape.redraw(),this._shape.fire("editdrag")},_onMarkerDragEnd:function(t){t.target.setOpacity(1),this._fireEdit()},_onTouchStart:function(t){if(L.Edit.SimpleShape.prototype._onMarkerDragStart.call(this,t),"function"==typeof this._getCorners){var e=this._getCorners(),i=t.target,o=i._cornerIndex;i.setOpacity(0),this._oppositeCorner=e[(o+2)%4],this._toggleCornerMarkers(0,o)}this._shape.fire("editstart")},_onTouchMove:function(t){var e=this._map.mouseEventToLayerPoint(t.originalEvent.touches[0]),i=this._map.layerPointToLatLng(e);return t.target===this._moveMarker?this._move(i):this._resize(i),this._shape.redraw(),!1},_onTouchEnd:function(t){t.target.setOpacity(1),this.updateMarkers(),this._fireEdit()},_move:function(){},_resize:function(){}}),L.Edit=L.Edit||{},L.Edit.Rectangle=L.Edit.SimpleShape.extend({_createMoveMarker:function(){var t=this._shape.getBounds(),e=t.getCenter();this._moveMarker=this._createMarker(e,this.options.moveIcon)},_createResizeMarker:function(){var t=this._getCorners();this._resizeMarkers=[];for(var e=0,i=t.length;e<i;e++)this._resizeMarkers.push(this._createMarker(t[e],this.options.resizeIcon)),this._resizeMarkers[e]._cornerIndex=e},_onMarkerDragStart:function(t){L.Edit.SimpleShape.prototype._onMarkerDragStart.call(this,t);var e=this._getCorners(),i=t.target,o=i._cornerIndex;this._oppositeCorner=e[(o+2)%4],this._toggleCornerMarkers(0,o)},_onMarkerDragEnd:function(t){var e,i,o=t.target;o===this._moveMarker&&(e=this._shape.getBounds(),i=e.getCenter(),o.setLatLng(i)),this._toggleCornerMarkers(1),this._repositionCornerMarkers(),L.Edit.SimpleShape.prototype._onMarkerDragEnd.call(this,t)},_move:function(t){for(var e,i=this._shape._defaultShape?this._shape._defaultShape():this._shape.getLatLngs(),o=this._shape.getBounds(),n=o.getCenter(),a=[],s=0,r=i.length;s<r;s++)e=[i[s].lat-n.lat,i[s].lng-n.lng],a.push([t.lat+e[0],t.lng+e[1]]);this._shape.setLatLngs(a),this._repositionCornerMarkers(),this._map.fire(L.Draw.Event.EDITMOVE,{layer:this._shape})},_resize:function(t){var e;this._shape.setBounds(L.latLngBounds(t,this._oppositeCorner)),e=this._shape.getBounds(),this._moveMarker.setLatLng(e.getCenter()),this._map.fire(L.Draw.Event.EDITRESIZE,{layer:this._shape})},_getCorners:function(){var t=this._shape.getBounds();return[t.getNorthWest(),t.getNorthEast(),t.getSouthEast(),t.getSouthWest()]},_toggleCornerMarkers:function(t){for(var e=0,i=this._resizeMarkers.length;e<i;e++)this._resizeMarkers[e].setOpacity(t)},_repositionCornerMarkers:function(){for(var t=this._getCorners(),e=0,i=this._resizeMarkers.length;e<i;e++)this._resizeMarkers[e].setLatLng(t[e])}}),L.Rectangle.addInitHook(function(){L.Edit.Rectangle&&(this.editing=new L.Edit.Rectangle(this),this.options.editable&&this.editing.enable())}),L.Edit=L.Edit||{},L.Edit.CircleMarker=L.Edit.SimpleShape.extend({_createMoveMarker:function(){var t=this._shape.getLatLng();this._moveMarker=this._createMarker(t,this.options.moveIcon)},_createResizeMarker:function(){this._resizeMarkers=[]},_move:function(t){if(this._resizeMarkers.length){var e=this._getResizeMarkerPoint(t);this._resizeMarkers[0].setLatLng(e)}this._shape.setLatLng(t),this._map.fire(L.Draw.Event.EDITMOVE,{layer:this._shape})}}),L.CircleMarker.addInitHook(function(){L.Edit.CircleMarker&&(this.editing=new L.Edit.CircleMarker(this),this.options.editable&&this.editing.enable()),this.on("add",function(){this.editing&&this.editing.enabled()&&this.editing.addHooks()}),this.on("remove",function(){this.editing&&this.editing.enabled()&&this.editing.removeHooks()})}),L.Edit=L.Edit||{},L.Edit.Circle=L.Edit.CircleMarker.extend({_createResizeMarker:function(){var t=this._shape.getLatLng(),e=this._getResizeMarkerPoint(t);this._resizeMarkers=[],this._resizeMarkers.push(this._createMarker(e,this.options.resizeIcon))},_getResizeMarkerPoint:function(t){var e=this._shape._radius*Math.cos(Math.PI/4),i=this._map.project(t);return this._map.unproject([i.x+e,i.y-e])},_resize:function(t){var e=this._moveMarker.getLatLng();L.GeometryUtil.isVersion07x()?radius=e.distanceTo(t):radius=this._map.distance(e,t),this._shape.setRadius(radius),this._map._editTooltip.updateContent({text:L.drawLocal.edit.handlers.edit.tooltip.subtext+"<br />"+L.drawLocal.edit.handlers.edit.tooltip.text,subtext:L.drawLocal.draw.handlers.circle.radius+": "+L.GeometryUtil.readableDistance(radius,!0,this.options.feet,this.options.nautic)}),this._shape.setRadius(radius),this._map.fire(L.Draw.Event.EDITRESIZE,{layer:this._shape})}}),L.Circle.addInitHook(function(){L.Edit.Circle&&(this.editing=new L.Edit.Circle(this),this.options.editable&&this.editing.enable()),this.on("add",function(){this.editing&&this.editing.enabled()&&this.editing.addHooks()}),this.on("remove",function(){this.editing&&this.editing.enabled()&&this.editing.removeHooks()})}),L.Map.mergeOptions({touchExtend:!0}),L.Map.TouchExtend=L.Handler.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane},addHooks:function(){L.DomEvent.on(this._container,"touchstart",this._onTouchStart,this),L.DomEvent.on(this._container,"touchend",this._onTouchEnd,this),L.DomEvent.on(this._container,"touchmove",this._onTouchMove,this),this._detectIE()?(L.DomEvent.on(this._container,"MSPointerDown",this._onTouchStart,this),L.DomEvent.on(this._container,"MSPointerUp",this._onTouchEnd,this),L.DomEvent.on(this._container,"MSPointerMove",this._onTouchMove,this),L.DomEvent.on(this._container,"MSPointerCancel",this._onTouchCancel,this)):(L.DomEvent.on(this._container,"touchcancel",this._onTouchCancel,this),L.DomEvent.on(this._container,"touchleave",this._onTouchLeave,this))},removeHooks:function(){L.DomEvent.off(this._container,"touchstart",this._onTouchStart),L.DomEvent.off(this._container,"touchend",this._onTouchEnd),L.DomEvent.off(this._container,"touchmove",this._onTouchMove),this._detectIE()?(L.DomEvent.off(this._container,"MSPointerDowm",this._onTouchStart),L.DomEvent.off(this._container,"MSPointerUp",this._onTouchEnd),L.DomEvent.off(this._container,"MSPointerMove",this._onTouchMove),L.DomEvent.off(this._container,"MSPointerCancel",this._onTouchCancel)):(L.DomEvent.off(this._container,"touchcancel",this._onTouchCancel),L.DomEvent.off(this._container,"touchleave",this._onTouchLeave))},_touchEvent:function(t,e){var i={};if(void 0!==t.touches){if(!t.touches.length)return;i=t.touches[0]}else{if("touch"!==t.pointerType)return;if(i=t,!this._filterClick(t))return}var o=this._map.mouseEventToContainerPoint(i),n=this._map.mouseEventToLayerPoint(i),a=this._map.layerPointToLatLng(n);this._map.fire(e,{latlng:a,layerPoint:n,containerPoint:o,pageX:i.pageX,pageY:i.pageY,originalEvent:t})},_filterClick:function(t){var e=t.timeStamp||t.originalEvent.timeStamp,i=L.DomEvent._lastClick&&e-L.DomEvent._lastClick;return i&&i>100&&i<500||t.target._simulatedClick&&!t._simulated?(L.DomEvent.stop(t),!1):(L.DomEvent._lastClick=e,!0)},_onTouchStart:function(t){if(this._map._loaded){this._touchEvent(t,"touchstart")}},_onTouchEnd:function(t){if(this._map._loaded){this._touchEvent(t,"touchend")}},_onTouchCancel:function(t){if(this._map._loaded){var e="touchcancel";this._detectIE()&&(e="pointercancel"),this._touchEvent(t,e)}},_onTouchLeave:function(t){if(this._map._loaded){this._touchEvent(t,"touchleave")}},_onTouchMove:function(t){if(this._map._loaded){this._touchEvent(t,"touchmove")}},_detectIE:function(){var e=t.navigator.userAgent,i=e.indexOf("MSIE ");if(i>0)return parseInt(e.substring(i+5,e.indexOf(".",i)),10);if(e.indexOf("Trident/")>0){var o=e.indexOf("rv:");return parseInt(e.substring(o+3,e.indexOf(".",o)),10)}var n=e.indexOf("Edge/");return n>0&&parseInt(e.substring(n+5,e.indexOf(".",n)),10)}}),L.Map.addInitHook("addHandler","touchExtend",L.Map.TouchExtend),L.Marker.Touch=L.Marker.extend({_initInteraction:function(){return this.addInteractiveTarget?L.Marker.prototype._initInteraction.apply(this):this._initInteractionLegacy()},_initInteractionLegacy:function(){if(this.options.clickable){var t=this._icon,e=["dblclick","mousedown","mouseover","mouseout","contextmenu","touchstart","touchend","touchmove"];this._detectIE?e.concat(["MSPointerDown","MSPointerUp","MSPointerMove","MSPointerCancel"]):e.concat(["touchcancel"]),L.DomUtil.addClass(t,"leaflet-clickable"),L.DomEvent.on(t,"click",this._onMouseClick,this),L.DomEvent.on(t,"keypress",this._onKeyPress,this);for(var i=0;i<e.length;i++)L.DomEvent.on(t,e[i],this._fireMouseEvent,this);L.Handler.MarkerDrag&&(this.dragging=new L.Handler.MarkerDrag(this),this.options.draggable&&this.dragging.enable())}},_detectIE:function(){var e=t.navigator.userAgent,i=e.indexOf("MSIE ");if(i>0)return parseInt(e.substring(i+5,e.indexOf(".",i)),10);if(e.indexOf("Trident/")>0){var o=e.indexOf("rv:");return parseInt(e.substring(o+3,e.indexOf(".",o)),10)}var n=e.indexOf("Edge/");return n>0&&parseInt(e.substring(n+5,e.indexOf(".",n)),10)}}),L.LatLngUtil={cloneLatLngs:function(t){for(var e=[],i=0,o=t.length;i<o;i++)Array.isArray(t[i])?e.push(L.LatLngUtil.cloneLatLngs(t[i])):e.push(this.cloneLatLng(t[i]));return e},cloneLatLng:function(t){return L.latLng(t.lat,t.lng)}},function(){var t={km:2,ha:2,m:0,mi:2,ac:2,yd:0,ft:0,nm:2};L.GeometryUtil=L.extend(L.GeometryUtil||{},{geodesicArea:function(t){var e,i,o=t.length,n=0,a=Math.PI/180;if(o>2){for(var s=0;s<o;s++)e=t[s],i=t[(s+1)%o],n+=(i.lng-e.lng)*a*(2+Math.sin(e.lat*a)+Math.sin(i.lat*a));n=6378137*n*6378137/2}return Math.abs(n)},formattedNumber:function(t,e){var i=parseFloat(t).toFixed(e),o=L.drawLocal.format&&L.drawLocal.format.numeric,n=o&&o.delimiters,a=n&&n.thousands,s=n&&n.decimal;if(a||s){var r=i.split(".");i=a?r[0].replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+a):r[0],s=s||".",r.length>1&&(i=i+s+r[1])}return i},readableArea:function(e,i,o){var n,a,o=L.Util.extend({},t,o);return i?(a=["ha","m"],type=typeof i,"string"===type?a=[i]:"boolean"!==type&&(a=i),n=e>=1e6&&-1!==a.indexOf("km")?L.GeometryUtil.formattedNumber(1e-6*e,o.km)+" km²":e>=1e4&&-1!==a.indexOf("ha")?L.GeometryUtil.formattedNumber(1e-4*e,o.ha)+" ha":L.GeometryUtil.formattedNumber(e,o.m)+" m²"):(e/=.836127,n=e>=3097600?L.GeometryUtil.formattedNumber(e/3097600,o.mi)+" mi²":e>=4840?L.GeometryUtil.formattedNumber(e/4840,o.ac)+" acres":L.GeometryUtil.formattedNumber(e,o.yd)+" yd²"),n},readableDistance:function(e,i,o,n,a){var s,a=L.Util.extend({},t,a);switch(i?"string"==typeof i?i:"metric":o?"feet":n?"nauticalMile":"yards"){case"metric":s=e>1e3?L.GeometryUtil.formattedNumber(e/1e3,a.km)+" km":L.GeometryUtil.formattedNumber(e,a.m)+" m";break;case"feet":e*=3.28083,s=L.GeometryUtil.formattedNumber(e,a.ft)+" ft";break;case"nauticalMile":e*=.53996,s=L.GeometryUtil.formattedNumber(e/1e3,a.nm)+" nm";break;case"yards":default:e*=1.09361,s=e>1760?L.GeometryUtil.formattedNumber(e/1760,a.mi)+" miles":L.GeometryUtil.formattedNumber(e,a.yd)+" yd"}return s},isVersion07x:function(){var t=L.version.split(".");return 0===parseInt(t[0],10)&&7===parseInt(t[1],10)}})}(),L.Util.extend(L.LineUtil,{segmentsIntersect:function(t,e,i,o){return this._checkCounterclockwise(t,i,o)!==this._checkCounterclockwise(e,i,o)&&this._checkCounterclockwise(t,e,i)!==this._checkCounterclockwise(t,e,o)},_checkCounterclockwise:function(t,e,i){return(i.y-t.y)*(e.x-t.x)>(e.y-t.y)*(i.x-t.x)}}),L.Polyline.include({intersects:function(){var t,e,i,o=this._getProjectedPoints(),n=o?o.length:0;if(this._tooFewPointsForIntersection())return!1;for(t=n-1;t>=3;t--)if(e=o[t-1],i=o[t],this._lineSegmentsIntersectsRange(e,i,t-2))return!0;return!1},newLatLngIntersects:function(t,e){return!!this._map&&this.newPointIntersects(this._map.latLngToLayerPoint(t),e)},newPointIntersects:function(t,e){var i=this._getProjectedPoints(),o=i?i.length:0,n=i?i[o-1]:null,a=o-2;return!this._tooFewPointsForIntersection(1)&&this._lineSegmentsIntersectsRange(n,t,a,e?1:0)},_tooFewPointsForIntersection:function(t){var e=this._getProjectedPoints(),i=e?e.length:0;return i+=t||0,!e||i<=3},_lineSegmentsIntersectsRange:function(t,e,i,o){var n,a,s=this._getProjectedPoints();o=o||0;for(var r=i;r>o;r--)if(n=s[r-1],a=s[r],L.LineUtil.segmentsIntersect(t,e,n,a))return!0;return!1},_getProjectedPoints:function(){if(!this._defaultShape)return this._originalPoints;for(var t=[],e=this._defaultShape(),i=0;i<e.length;i++)t.push(this._map.latLngToLayerPoint(e[i]));return t}}),L.Polygon.include({intersects:function(){var t,e,i,o,n=this._getProjectedPoints();return!this._tooFewPointsForIntersection()&&(!!L.Polyline.prototype.intersects.call(this)||(t=n.length,e=n[0],i=n[t-1],o=t-2,this._lineSegmentsIntersectsRange(i,e,o,1)))}}),L.Control.Draw=L.Control.extend({options:{position:"topleft",draw:{},edit:!1},initialize:function(t){if(L.version<"0.7")throw new Error("Leaflet.draw 0.2.3+ requires Leaflet 0.7.0+. Download latest from https://github.com/Leaflet/Leaflet/");L.Control.prototype.initialize.call(this,t);var e;this._toolbars={},L.DrawToolbar&&this.options.draw&&(e=new L.DrawToolbar(this.options.draw),this._toolbars[L.DrawToolbar.TYPE]=e,this._toolbars[L.DrawToolbar.TYPE].on("enable",this._toolbarEnabled,this)),L.EditToolbar&&this.options.edit&&(e=new L.EditToolbar(this.options.edit),this._toolbars[L.EditToolbar.TYPE]=e,this._toolbars[L.EditToolbar.TYPE].on("enable",this._toolbarEnabled,this)),L.toolbar=this},onAdd:function(t){var e,i=L.DomUtil.create("div","leaflet-draw"),o=!1;for(var n in this._toolbars)this._toolbars.hasOwnProperty(n)&&(e=this._toolbars[n].addToolbar(t))&&(o||(L.DomUtil.hasClass(e,"leaflet-draw-toolbar-top")||L.DomUtil.addClass(e.childNodes[0],"leaflet-draw-toolbar-top"),o=!0),i.appendChild(e));return i},onRemove:function(){for(var t in this._toolbars)this._toolbars.hasOwnProperty(t)&&this._toolbars[t].removeToolbar()},setDrawingOptions:function(t){for(var e in this._toolbars)this._toolbars[e]instanceof L.DrawToolbar&&this._toolbars[e].setOptions(t)},_toolbarEnabled:function(t){var e=t.target;for(var i in this._toolbars)this._toolbars[i]!==e&&this._toolbars[i].disable()}}),L.Map.mergeOptions({drawControlTooltips:!0,drawControl:!1}),L.Map.addInitHook(function(){this.options.drawControl&&(this.drawControl=new L.Control.Draw,this.addControl(this.drawControl))}),L.Toolbar=L.Class.extend({initialize:function(t){L.setOptions(this,t),this._modes={},this._actionButtons=[],this._activeMode=null;var e=L.version.split(".");1===parseInt(e[0],10)&&parseInt(e[1],10)>=2?L.Toolbar.include(L.Evented.prototype):L.Toolbar.include(L.Mixin.Events)},enabled:function(){return null!==this._activeMode},disable:function(){this.enabled()&&this._activeMode.handler.disable()},addToolbar:function(t){var e,i=L.DomUtil.create("div","leaflet-draw-section"),o=0,n=this._toolbarClass||"",a=this.getModeHandlers(t);for(this._toolbarContainer=L.DomUtil.create("div","leaflet-draw-toolbar leaflet-bar"),this._map=t,e=0;e<a.length;e++)a[e].enabled&&this._initModeHandler(a[e].handler,this._toolbarContainer,o++,n,a[e].title);if(o)return this._lastButtonIndex=--o,this._actionsContainer=L.DomUtil.create("ul","leaflet-draw-actions"),i.appendChild(this._toolbarContainer),i.appendChild(this._actionsContainer),i},removeToolbar:function(){for(var t in this._modes)this._modes.hasOwnProperty(t)&&(this._disposeButton(this._modes[t].button,this._modes[t].handler.enable,this._modes[t].handler),this._modes[t].handler.disable(),this._modes[t].handler.off("enabled",this._handlerActivated,this).off("disabled",this._handlerDeactivated,this));this._modes={};for(var e=0,i=this._actionButtons.length;e<i;e++)this._disposeButton(this._actionButtons[e].button,this._actionButtons[e].callback,this);this._actionButtons=[],this._actionsContainer=null},_initModeHandler:function(t,e,i,o,n){var a=t.type;this._modes[a]={},this._modes[a].handler=t,this._modes[a].button=this._createButton({type:a,title:n,className:o+"-"+a,container:e,callback:this._modes[a].handler.enable,context:this._modes[a].handler}),this._modes[a].buttonIndex=i,this._modes[a].handler.on("enabled",this._handlerActivated,this).on("disabled",this._handlerDeactivated,this)},_detectIOS:function(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!t.MSStream},_createButton:function(t){var e=L.DomUtil.create("a",t.className||"",t.container),i=L.DomUtil.create("span","sr-only",t.container);e.href="#",e.appendChild(i),t.title&&(e.title=t.title,i.innerHTML=t.title),t.text&&(e.innerHTML=t.text,i.innerHTML=t.text);var o=this._detectIOS()?"touchstart":"click";return L.DomEvent.on(e,"click",L.DomEvent.stopPropagation).on(e,"mousedown",L.DomEvent.stopPropagation).on(e,"dblclick",L.DomEvent.stopPropagation).on(e,"touchstart",L.DomEvent.stopPropagation).on(e,"click",L.DomEvent.preventDefault).on(e,o,t.callback,t.context),e},_disposeButton:function(t,e){var i=this._detectIOS()?"touchstart":"click";L.DomEvent.off(t,"click",L.DomEvent.stopPropagation).off(t,"mousedown",L.DomEvent.stopPropagation).off(t,"dblclick",L.DomEvent.stopPropagation).off(t,"touchstart",L.DomEvent.stopPropagation).off(t,"click",L.DomEvent.preventDefault).off(t,i,e)},_handlerActivated:function(t){this.disable(),this._activeMode=this._modes[t.handler],L.DomUtil.addClass(this._activeMode.button,"leaflet-draw-toolbar-button-enabled"),this._showActionsToolbar(),this.fire("enable")},_handlerDeactivated:function(){this._hideActionsToolbar(),L.DomUtil.removeClass(this._activeMode.button,"leaflet-draw-toolbar-button-enabled"),this._activeMode=null,this.fire("disable")},_createActions:function(t){var e,i,o,n,a=this._actionsContainer,s=this.getActions(t),r=s.length;for(i=0,o=this._actionButtons.length;i<o;i++)this._disposeButton(this._actionButtons[i].button,this._actionButtons[i].callback);for(this._actionButtons=[];a.firstChild;)a.removeChild(a.firstChild);for(var l=0;l<r;l++)"enabled"in s[l]&&!s[l].enabled||(e=L.DomUtil.create("li","",a),n=this._createButton({title:s[l].title,text:s[l].text,container:e,callback:s[l].callback,context:s[l].context}),this._actionButtons.push({button:n,callback:s[l].callback}))},_showActionsToolbar:function(){var t=this._activeMode.buttonIndex,e=this._lastButtonIndex,i=this._activeMode.button.offsetTop-1;this._createActions(this._activeMode.handler),this._actionsContainer.style.top=i+"px",0===t&&(L.DomUtil.addClass(this._toolbarContainer,"leaflet-draw-toolbar-notop"),L.DomUtil.addClass(this._actionsContainer,"leaflet-draw-actions-top")),t===e&&(L.DomUtil.addClass(this._toolbarContainer,"leaflet-draw-toolbar-nobottom"),L.DomUtil.addClass(this._actionsContainer,"leaflet-draw-actions-bottom")),this._actionsContainer.style.display="block",this._map.fire(L.Draw.Event.TOOLBAROPENED)},_hideActionsToolbar:function(){this._actionsContainer.style.display="none",L.DomUtil.removeClass(this._toolbarContainer,"leaflet-draw-toolbar-notop"),L.DomUtil.removeClass(this._toolbarContainer,"leaflet-draw-toolbar-nobottom"),L.DomUtil.removeClass(this._actionsContainer,"leaflet-draw-actions-top"),L.DomUtil.removeClass(this._actionsContainer,"leaflet-draw-actions-bottom"),this._map.fire(L.Draw.Event.TOOLBARCLOSED)}}),L.Draw=L.Draw||{},L.Draw.Tooltip=L.Class.extend({initialize:function(t){this._map=t,this._popupPane=t._panes.popupPane,this._visible=!1,this._container=t.options.drawControlTooltips?L.DomUtil.create("div","leaflet-draw-tooltip",this._popupPane):null,this._singleLineLabel=!1,this._map.on("mouseout",this._onMouseOut,this)},dispose:function(){this._map.off("mouseout",this._onMouseOut,this),this._container&&(this._popupPane.removeChild(this._container),this._container=null)},updateContent:function(t){return this._container?(t.subtext=t.subtext||"",0!==t.subtext.length||this._singleLineLabel?t.subtext.length>0&&this._singleLineLabel&&(L.DomUtil.removeClass(this._container,"leaflet-draw-tooltip-single"),this._singleLineLabel=!1):(L.DomUtil.addClass(this._container,"leaflet-draw-tooltip-single"),this._singleLineLabel=!0),this._container.innerHTML=(t.subtext.length>0?'<span class="leaflet-draw-tooltip-subtext">'+t.subtext+"</span><br />":"")+"<span>"+t.text+"</span>",t.text||t.subtext?(this._visible=!0,this._container.style.visibility="inherit"):(this._visible=!1,this._container.style.visibility="hidden"),this):this},updatePosition:function(t){var e=this._map.latLngToLayerPoint(t),i=this._container;return this._container&&(this._visible&&(i.style.visibility="inherit"),L.DomUtil.setPosition(i,e)),this},showAsError:function(){return this._container&&L.DomUtil.addClass(this._container,"leaflet-error-draw-tooltip"),this},removeError:function(){return this._container&&L.DomUtil.removeClass(this._container,"leaflet-error-draw-tooltip"),this},_onMouseOut:function(){this._container&&(this._container.style.visibility="hidden")}}),L.DrawToolbar=L.Toolbar.extend({statics:{TYPE:"draw"},options:{polyline:{},polygon:{},rectangle:{},circle:{},marker:{},circlemarker:{}},initialize:function(t){for(var e in this.options)this.options.hasOwnProperty(e)&&t[e]&&(t[e]=L.extend({},this.options[e],t[e]));this._toolbarClass="leaflet-draw-draw",L.Toolbar.prototype.initialize.call(this,t)},getModeHandlers:function(t){return[{enabled:this.options.polyline,handler:new L.Draw.Polyline(t,this.options.polyline),title:L.drawLocal.draw.toolbar.buttons.polyline},{enabled:this.options.polygon,handler:new L.Draw.Polygon(t,this.options.polygon),title:L.drawLocal.draw.toolbar.buttons.polygon},{enabled:this.options.rectangle,handler:new L.Draw.Rectangle(t,this.options.rectangle),title:L.drawLocal.draw.toolbar.buttons.rectangle},{enabled:this.options.circle,handler:new L.Draw.Circle(t,this.options.circle),title:L.drawLocal.draw.toolbar.buttons.circle},{enabled:this.options.marker,handler:new L.Draw.Marker(t,this.options.marker),title:L.drawLocal.draw.toolbar.buttons.marker},{enabled:this.options.circlemarker,handler:new L.Draw.CircleMarker(t,this.options.circlemarker),title:L.drawLocal.draw.toolbar.buttons.circlemarker}]},getActions:function(t){return[{enabled:t.completeShape,title:L.drawLocal.draw.toolbar.finish.title,text:L.drawLocal.draw.toolbar.finish.text,callback:t.completeShape,context:t},{enabled:t.deleteLastVertex,title:L.drawLocal.draw.toolbar.undo.title,text:L.drawLocal.draw.toolbar.undo.text,callback:t.deleteLastVertex,context:t},{title:L.drawLocal.draw.toolbar.actions.title,text:L.drawLocal.draw.toolbar.actions.text,callback:this.disable,context:this}]},setOptions:function(t){L.setOptions(this,t);for(var e in this._modes)this._modes.hasOwnProperty(e)&&t.hasOwnProperty(e)&&this._modes[e].handler.setOptions(t[e])}}),L.EditToolbar=L.Toolbar.extend({statics:{TYPE:"edit"},options:{edit:{selectedPathOptions:{dashArray:"10, 10",fill:!0,fillColor:"#fe57a1",fillOpacity:.1,maintainColor:!1}},remove:{},poly:null,featureGroup:null},initialize:function(t){t.edit&&(void 0===t.edit.selectedPathOptions&&(t.edit.selectedPathOptions=this.options.edit.selectedPathOptions),t.edit.selectedPathOptions=L.extend({},this.options.edit.selectedPathOptions,t.edit.selectedPathOptions)),t.remove&&(t.remove=L.extend({},this.options.remove,t.remove)),t.poly&&(t.poly=L.extend({},this.options.poly,t.poly)),this._toolbarClass="leaflet-draw-edit",L.Toolbar.prototype.initialize.call(this,t),this._selectedFeatureCount=0},getModeHandlers:function(t){var e=this.options.featureGroup;return[{enabled:this.options.edit,handler:new L.EditToolbar.Edit(t,{featureGroup:e,selectedPathOptions:this.options.edit.selectedPathOptions,poly:this.options.poly}),title:L.drawLocal.edit.toolbar.buttons.edit},{enabled:this.options.remove,handler:new L.EditToolbar.Delete(t,{featureGroup:e}),title:L.drawLocal.edit.toolbar.buttons.remove}]},getActions:function(t){var e=[{title:L.drawLocal.edit.toolbar.actions.save.title,text:L.drawLocal.edit.toolbar.actions.save.text,callback:this._save,context:this},{title:L.drawLocal.edit.toolbar.actions.cancel.title,text:L.drawLocal.edit.toolbar.actions.cancel.text,callback:this.disable,context:this}];return t.removeAllLayers&&e.push({title:L.drawLocal.edit.toolbar.actions.clearAll.title,text:L.drawLocal.edit.toolbar.actions.clearAll.text,callback:this._clearAllLayers,context:this}),e},addToolbar:function(t){var e=L.Toolbar.prototype.addToolbar.call(this,t);return this._checkDisabled(),this.options.featureGroup.on("layeradd layerremove",this._checkDisabled,this),e},removeToolbar:function(){this.options.featureGroup.off("layeradd layerremove",this._checkDisabled,this),L.Toolbar.prototype.removeToolbar.call(this)},disable:function(){this.enabled()&&(this._activeMode.handler.revertLayers(),L.Toolbar.prototype.disable.call(this))},_save:function(){this._activeMode.handler.save(),this._activeMode&&this._activeMode.handler.disable()},_clearAllLayers:function(){this._activeMode.handler.removeAllLayers(),this._activeMode&&this._activeMode.handler.disable()},_checkDisabled:function(){var t,e=this.options.featureGroup,i=0!==e.getLayers().length;this.options.edit&&(t=this._modes[L.EditToolbar.Edit.TYPE].button,i?L.DomUtil.removeClass(t,"leaflet-disabled"):L.DomUtil.addClass(t,"leaflet-disabled"),t.setAttribute("title",i?L.drawLocal.edit.toolbar.buttons.edit:L.drawLocal.edit.toolbar.buttons.editDisabled)),this.options.remove&&(t=this._modes[L.EditToolbar.Delete.TYPE].button,i?L.DomUtil.removeClass(t,"leaflet-disabled"):L.DomUtil.addClass(t,"leaflet-disabled"),t.setAttribute("title",i?L.drawLocal.edit.toolbar.buttons.remove:L.drawLocal.edit.toolbar.buttons.removeDisabled))}}),L.EditToolbar.Edit=L.Handler.extend({statics:{TYPE:"edit"},initialize:function(t,e){if(L.Handler.prototype.initialize.call(this,t),L.setOptions(this,e),this._featureGroup=e.featureGroup,!(this._featureGroup instanceof L.FeatureGroup))throw new Error("options.featureGroup must be a L.FeatureGroup");this._uneditedLayerProps={},this.type=L.EditToolbar.Edit.TYPE;var i=L.version.split(".");1===parseInt(i[0],10)&&parseInt(i[1],10)>=2?L.EditToolbar.Edit.include(L.Evented.prototype):L.EditToolbar.Edit.include(L.Mixin.Events)},enable:function(){!this._enabled&&this._hasAvailableLayers()&&(this.fire("enabled",{handler:this.type}),this._map.fire(L.Draw.Event.EDITSTART,{handler:this.type}),L.Handler.prototype.enable.call(this),this._featureGroup.on("layeradd",this._enableLayerEdit,this).on("layerremove",this._disableLayerEdit,this))},disable:function(){this._enabled&&(this._featureGroup.off("layeradd",this._enableLayerEdit,this).off("layerremove",this._disableLayerEdit,this),L.Handler.prototype.disable.call(this),this._map.fire(L.Draw.Event.EDITSTOP,{handler:this.type}),this.fire("disabled",{handler:this.type}))},addHooks:function(){var t=this._map;t&&(t.getContainer().focus(),this._featureGroup.eachLayer(this._enableLayerEdit,this),this._tooltip=new L.Draw.Tooltip(this._map),this._tooltip.updateContent({text:L.drawLocal.edit.handlers.edit.tooltip.text,subtext:L.drawLocal.edit.handlers.edit.tooltip.subtext}),t._editTooltip=this._tooltip,this._updateTooltip(),this._map.on("mousemove",this._onMouseMove,this).on("touchmove",this._onMouseMove,this).on("MSPointerMove",this._onMouseMove,this).on(L.Draw.Event.EDITVERTEX,this._updateTooltip,this))},removeHooks:function(){this._map&&(this._featureGroup.eachLayer(this._disableLayerEdit,this),this._uneditedLayerProps={},this._tooltip.dispose(),this._tooltip=null,this._map.off("mousemove",this._onMouseMove,this).off("touchmove",this._onMouseMove,this).off("MSPointerMove",this._onMouseMove,this).off(L.Draw.Event.EDITVERTEX,this._updateTooltip,this))},revertLayers:function(){this._featureGroup.eachLayer(function(t){this._revertLayer(t)},this)},save:function(){var t=new L.LayerGroup;this._featureGroup.eachLayer(function(e){e.edited&&(t.addLayer(e),e.edited=!1)}),this._map.fire(L.Draw.Event.EDITED,{layers:t})},_backupLayer:function(t){var e=L.Util.stamp(t);this._uneditedLayerProps[e]||(t instanceof L.Polyline||t instanceof L.Polygon||t instanceof L.Rectangle?this._uneditedLayerProps[e]={latlngs:L.LatLngUtil.cloneLatLngs(t.getLatLngs())}:t instanceof L.Circle?this._uneditedLayerProps[e]={latlng:L.LatLngUtil.cloneLatLng(t.getLatLng()),radius:t.getRadius()}:(t instanceof L.Marker||t instanceof L.CircleMarker)&&(this._uneditedLayerProps[e]={latlng:L.LatLngUtil.cloneLatLng(t.getLatLng())}))},_getTooltipText:function(){return{text:L.drawLocal.edit.handlers.edit.tooltip.text,subtext:L.drawLocal.edit.handlers.edit.tooltip.subtext}},_updateTooltip:function(){this._tooltip.updateContent(this._getTooltipText())},_revertLayer:function(t){var e=L.Util.stamp(t);t.edited=!1,this._uneditedLayerProps.hasOwnProperty(e)&&(t instanceof L.Polyline||t instanceof L.Polygon||t instanceof L.Rectangle?t.setLatLngs(this._uneditedLayerProps[e].latlngs):t instanceof L.Circle?(t.setLatLng(this._uneditedLayerProps[e].latlng),t.setRadius(this._uneditedLayerProps[e].radius)):(t instanceof L.Marker||t instanceof L.CircleMarker)&&t.setLatLng(this._uneditedLayerProps[e].latlng),t.fire("revert-edited",{layer:t}))},_enableLayerEdit:function(t){var e,i,o=t.layer||t.target||t;this._backupLayer(o),this.options.poly&&(i=L.Util.extend({},this.options.poly),o.options.poly=i),this.options.selectedPathOptions&&(e=L.Util.extend({},this.options.selectedPathOptions),e.maintainColor&&(e.color=o.options.color,e.fillColor=o.options.fillColor),o.options.original=L.extend({},o.options),o.options.editing=e),o instanceof L.Marker?(o.editing&&o.editing.enable(),o.dragging.enable(),o.on("dragend",this._onMarkerDragEnd).on("touchmove",this._onTouchMove,this).on("MSPointerMove",this._onTouchMove,this).on("touchend",this._onMarkerDragEnd,this).on("MSPointerUp",this._onMarkerDragEnd,this)):o.editing.enable()},_disableLayerEdit:function(t){var e=t.layer||t.target||t;e.edited=!1,e.editing&&e.editing.disable(),delete e.options.editing,delete e.options.original,
this._selectedPathOptions&&(e instanceof L.Marker?this._toggleMarkerHighlight(e):(e.setStyle(e.options.previousOptions),delete e.options.previousOptions)),e instanceof L.Marker?(e.dragging.disable(),e.off("dragend",this._onMarkerDragEnd,this).off("touchmove",this._onTouchMove,this).off("MSPointerMove",this._onTouchMove,this).off("touchend",this._onMarkerDragEnd,this).off("MSPointerUp",this._onMarkerDragEnd,this)):e.editing.disable()},_onMouseMove:function(t){this._tooltip.updatePosition(t.latlng)},_onMarkerDragEnd:function(t){var e=t.target;e.edited=!0,this._map.fire(L.Draw.Event.EDITMOVE,{layer:e})},_onTouchMove:function(t){var e=t.originalEvent.changedTouches[0],i=this._map.mouseEventToLayerPoint(e),o=this._map.layerPointToLatLng(i);t.target.setLatLng(o)},_hasAvailableLayers:function(){return 0!==this._featureGroup.getLayers().length}}),L.EditToolbar.Delete=L.Handler.extend({statics:{TYPE:"remove"},initialize:function(t,e){if(L.Handler.prototype.initialize.call(this,t),L.Util.setOptions(this,e),this._deletableLayers=this.options.featureGroup,!(this._deletableLayers instanceof L.FeatureGroup))throw new Error("options.featureGroup must be a L.FeatureGroup");this.type=L.EditToolbar.Delete.TYPE;var i=L.version.split(".");1===parseInt(i[0],10)&&parseInt(i[1],10)>=2?L.EditToolbar.Delete.include(L.Evented.prototype):L.EditToolbar.Delete.include(L.Mixin.Events)},enable:function(){!this._enabled&&this._hasAvailableLayers()&&(this.fire("enabled",{handler:this.type}),this._map.fire(L.Draw.Event.DELETESTART,{handler:this.type}),L.Handler.prototype.enable.call(this),this._deletableLayers.on("layeradd",this._enableLayerDelete,this).on("layerremove",this._disableLayerDelete,this))},disable:function(){this._enabled&&(this._deletableLayers.off("layeradd",this._enableLayerDelete,this).off("layerremove",this._disableLayerDelete,this),L.Handler.prototype.disable.call(this),this._map.fire(L.Draw.Event.DELETESTOP,{handler:this.type}),this.fire("disabled",{handler:this.type}))},addHooks:function(){var t=this._map;t&&(t.getContainer().focus(),this._deletableLayers.eachLayer(this._enableLayerDelete,this),this._deletedLayers=new L.LayerGroup,this._tooltip=new L.Draw.Tooltip(this._map),this._tooltip.updateContent({text:L.drawLocal.edit.handlers.remove.tooltip.text}),this._map.on("mousemove",this._onMouseMove,this))},removeHooks:function(){this._map&&(this._deletableLayers.eachLayer(this._disableLayerDelete,this),this._deletedLayers=null,this._tooltip.dispose(),this._tooltip=null,this._map.off("mousemove",this._onMouseMove,this))},revertLayers:function(){this._deletedLayers.eachLayer(function(t){this._deletableLayers.addLayer(t),t.fire("revert-deleted",{layer:t})},this)},save:function(){this._map.fire(L.Draw.Event.DELETED,{layers:this._deletedLayers})},removeAllLayers:function(){this._deletableLayers.eachLayer(function(t){this._removeLayer({layer:t})},this),this.save()},_enableLayerDelete:function(t){(t.layer||t.target||t).on("click",this._removeLayer,this)},_disableLayerDelete:function(t){var e=t.layer||t.target||t;e.off("click",this._removeLayer,this),this._deletedLayers.removeLayer(e)},_removeLayer:function(t){var e=t.layer||t.target||t;this._deletableLayers.removeLayer(e),this._deletedLayers.addLayer(e),e.fire("deleted")},_onMouseMove:function(t){this._tooltip.updatePosition(t.latlng)},_hasAvailableLayers:function(){return 0!==this._deletableLayers.getLayers().length}})}(window,document);
;/* @preserve
 * Leaflet Control Geocoder 1.8.3
 * https://github.com/perliedman/leaflet-control-geocoder
 *
 * Copyright (c) 2012 sa3m (https://github.com/sa3m)
 * Copyright (c) 2018 Per Liedman
 * All rights reserved.
 */

this.L = this.L || {};
this.L.Control = this.L.Control || {};
this.L.Control.Geocoder = (function (L) {
  'use strict';

  L = L && L.hasOwnProperty('default') ? L['default'] : L;

  var lastCallbackId = 0;

  // Adapted from handlebars.js
  // https://github.com/wycats/handlebars.js/
  var badChars = /[&<>"'`]/g;
  var possible = /[&<>"'`]/;
  var escape = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };

  function escapeChar(chr) {
    return escape[chr];
  }

  function htmlEscape(string) {
    if (string == null) {
      return '';
    } else if (!string) {
      return string + '';
    }

    // Force a string conversion as this will be done by the append regardless and
    // the regex test will do this transparently behind the scenes, causing issues if
    // an object's to string has escaped characters in it.
    string = '' + string;

    if (!possible.test(string)) {
      return string;
    }
    return string.replace(badChars, escapeChar);
  }

  function jsonp(url, params, callback, context, jsonpParam) {
    var callbackId = '_l_geocoder_' + lastCallbackId++;
    params[jsonpParam || 'callback'] = callbackId;
    window[callbackId] = L.Util.bind(callback, context);
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url + getParamString(params);
    script.id = callbackId;
    document.getElementsByTagName('head')[0].appendChild(script);
  }

  function getJSON(url, params, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState !== 4) {
        return;
      }
      var message;
      if (xmlHttp.status !== 200 && xmlHttp.status !== 304) {
        message = '';
      } else if (typeof xmlHttp.response === 'string') {
        // IE doesn't parse JSON responses even with responseType: 'json'.
        try {
          message = JSON.parse(xmlHttp.response);
        } catch (e) {
          // Not a JSON response
          message = xmlHttp.response;
        }
      } else {
        message = xmlHttp.response;
      }
      callback(message);
    };
    xmlHttp.open('GET', url + getParamString(params), true);
    xmlHttp.responseType = 'json';
    xmlHttp.setRequestHeader('Accept', 'application/json');
    xmlHttp.send(null);
  }

  function template(str, data) {
    return str.replace(/\{ *([\w_]+) *\}/g, function(str, key) {
      var value = data[key];
      if (value === undefined) {
        value = '';
      } else if (typeof value === 'function') {
        value = value(data);
      }
      return htmlEscape(value);
    });
  }

  function getParamString(obj, existingUrl, uppercase) {
    var params = [];
    for (var i in obj) {
      var key = encodeURIComponent(uppercase ? i.toUpperCase() : i);
      var value = obj[i];
      if (!L.Util.isArray(value)) {
        params.push(key + '=' + encodeURIComponent(value));
      } else {
        for (var j = 0; j < value.length; j++) {
          params.push(key + '=' + encodeURIComponent(value[j]));
        }
      }
    }
    return (!existingUrl || existingUrl.indexOf('?') === -1 ? '?' : '&') + params.join('&');
  }

  var ArcGis = L.Class.extend({
    options: {
      service_url: 'https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer'
    },

    initialize: function(accessToken, options) {
      L.setOptions(this, options);
      this._accessToken = accessToken;
    },

    geocode: function(query, cb, context) {
      var params = {
        SingleLine: query,
        outFields: 'Addr_Type',
        forStorage: false,
        maxLocations: 10,
        f: 'json'
      };

      if (this._key && this._key.length) {
        params.token = this._key;
      }

      getJSON(
        this.options.service_url + '/findAddressCandidates',
        L.extend(params, this.options.geocodingQueryParams),
        function(data) {
          var results = [],
            loc,
            latLng,
            latLngBounds;

          if (data.candidates && data.candidates.length) {
            for (var i = 0; i <= data.candidates.length - 1; i++) {
              loc = data.candidates[i];
              latLng = L.latLng(loc.location.y, loc.location.x);
              latLngBounds = L.latLngBounds(
                L.latLng(loc.extent.ymax, loc.extent.xmax),
                L.latLng(loc.extent.ymin, loc.extent.xmin)
              );
              results[i] = {
                name: loc.address,
                bbox: latLngBounds,
                center: latLng
              };
            }
          }

          cb.call(context, results);
        }
      );
    },

    suggest: function(query, cb, context) {
      return this.geocode(query, cb, context);
    },

    reverse: function(location, scale, cb, context) {
      var params = {
        location: encodeURIComponent(location.lng) + ',' + encodeURIComponent(location.lat),
        distance: 100,
        f: 'json'
      };

      getJSON(this.options.service_url + '/reverseGeocode', params, function(data) {
        var result = [],
          loc;

        if (data && !data.error) {
          loc = L.latLng(data.location.y, data.location.x);
          result.push({
            name: data.address.Match_addr,
            center: loc,
            bounds: L.latLngBounds(loc, loc)
          });
        }

        cb.call(context, result);
      });
    }
  });

  function arcgis(accessToken, options) {
    return new ArcGis(accessToken, options);
  }

  var Bing = L.Class.extend({
    initialize: function(key) {
      this.key = key;
    },

    geocode: function(query, cb, context) {
      jsonp(
        'https://dev.virtualearth.net/REST/v1/Locations',
        {
          query: query,
          key: this.key
        },
        function(data) {
          var results = [];
          if (data.resourceSets.length > 0) {
            for (var i = data.resourceSets[0].resources.length - 1; i >= 0; i--) {
              var resource = data.resourceSets[0].resources[i],
                bbox = resource.bbox;
              results[i] = {
                name: resource.name,
                bbox: L.latLngBounds([bbox[0], bbox[1]], [bbox[2], bbox[3]]),
                center: L.latLng(resource.point.coordinates)
              };
            }
          }
          cb.call(context, results);
        },
        this,
        'jsonp'
      );
    },

    reverse: function(location, scale, cb, context) {
      jsonp(
        '//dev.virtualearth.net/REST/v1/Locations/' + location.lat + ',' + location.lng,
        {
          key: this.key
        },
        function(data) {
          var results = [];
          for (var i = data.resourceSets[0].resources.length - 1; i >= 0; i--) {
            var resource = data.resourceSets[0].resources[i],
              bbox = resource.bbox;
            results[i] = {
              name: resource.name,
              bbox: L.latLngBounds([bbox[0], bbox[1]], [bbox[2], bbox[3]]),
              center: L.latLng(resource.point.coordinates)
            };
          }
          cb.call(context, results);
        },
        this,
        'jsonp'
      );
    }
  });

  function bing(key) {
    return new Bing(key);
  }

  var Google = L.Class.extend({
    options: {
      serviceUrl: 'https://maps.googleapis.com/maps/api/geocode/json',
      geocodingQueryParams: {},
      reverseQueryParams: {}
    },

    initialize: function(key, options) {
      this._key = key;
      L.setOptions(this, options);
      // Backwards compatibility
      this.options.serviceUrl = this.options.service_url || this.options.serviceUrl;
    },

    geocode: function(query, cb, context) {
      var params = {
        address: query
      };

      if (this._key && this._key.length) {
        params.key = this._key;
      }

      params = L.Util.extend(params, this.options.geocodingQueryParams);

      getJSON(this.options.serviceUrl, params, function(data) {
        var results = [],
          loc,
          latLng,
          latLngBounds;
        if (data.results && data.results.length) {
          for (var i = 0; i <= data.results.length - 1; i++) {
            loc = data.results[i];
            latLng = L.latLng(loc.geometry.location);
            latLngBounds = L.latLngBounds(
              L.latLng(loc.geometry.viewport.northeast),
              L.latLng(loc.geometry.viewport.southwest)
            );
            results[i] = {
              name: loc.formatted_address,
              bbox: latLngBounds,
              center: latLng,
              properties: loc.address_components
            };
          }
        }

        cb.call(context, results);
      });
    },

    reverse: function(location, scale, cb, context) {
      var params = {
        latlng: encodeURIComponent(location.lat) + ',' + encodeURIComponent(location.lng)
      };
      params = L.Util.extend(params, this.options.reverseQueryParams);
      if (this._key && this._key.length) {
        params.key = this._key;
      }

      getJSON(this.options.serviceUrl, params, function(data) {
        var results = [],
          loc,
          latLng,
          latLngBounds;
        if (data.results && data.results.length) {
          for (var i = 0; i <= data.results.length - 1; i++) {
            loc = data.results[i];
            latLng = L.latLng(loc.geometry.location);
            latLngBounds = L.latLngBounds(
              L.latLng(loc.geometry.viewport.northeast),
              L.latLng(loc.geometry.viewport.southwest)
            );
            results[i] = {
              name: loc.formatted_address,
              bbox: latLngBounds,
              center: latLng,
              properties: loc.address_components
            };
          }
        }

        cb.call(context, results);
      });
    }
  });

  function google(key, options) {
    return new Google(key, options);
  }

  var HERE = L.Class.extend({
    options: {
      geocodeUrl: 'http://geocoder.api.here.com/6.2/geocode.json',
      reverseGeocodeUrl: 'http://reverse.geocoder.api.here.com/6.2/reversegeocode.json',
      app_id: '<insert your app_id here>',
      app_code: '<insert your app_code here>',
      geocodingQueryParams: {},
      reverseQueryParams: {}
    },

    initialize: function(options) {
      L.setOptions(this, options);
    },

    geocode: function(query, cb, context) {
      var params = {
        searchtext: query,
        gen: 9,
        app_id: this.options.app_id,
        app_code: this.options.app_code,
        jsonattributes: 1
      };
      params = L.Util.extend(params, this.options.geocodingQueryParams);
      this.getJSON(this.options.geocodeUrl, params, cb, context);
    },

    reverse: function(location, scale, cb, context) {
      var params = {
        prox: encodeURIComponent(location.lat) + ',' + encodeURIComponent(location.lng),
        mode: 'retrieveAddresses',
        app_id: this.options.app_id,
        app_code: this.options.app_code,
        gen: 9,
        jsonattributes: 1
      };
      params = L.Util.extend(params, this.options.reverseQueryParams);
      this.getJSON(this.options.reverseGeocodeUrl, params, cb, context);
    },

    getJSON: function(url, params, cb, context) {
      getJSON(url, params, function(data) {
        var results = [],
          loc,
          latLng,
          latLngBounds;
        if (data.response.view && data.response.view.length) {
          for (var i = 0; i <= data.response.view[0].result.length - 1; i++) {
            loc = data.response.view[0].result[i].location;
            latLng = L.latLng(loc.displayPosition.latitude, loc.displayPosition.longitude);
            latLngBounds = L.latLngBounds(
              L.latLng(loc.mapView.topLeft.latitude, loc.mapView.topLeft.longitude),
              L.latLng(loc.mapView.bottomRight.latitude, loc.mapView.bottomRight.longitude)
            );
            results[i] = {
              name: loc.address.label,
              bbox: latLngBounds,
              center: latLng
            };
          }
        }
        cb.call(context, results);
      });
    }
  });

  function here(options) {
    return new HERE(options);
  }

  var LatLng = L.Class.extend({
    options: {
      // the next geocoder to use
      next: undefined,
      sizeInMeters: 10000
    },

    initialize: function(options) {
      L.Util.setOptions(this, options);
    },

    geocode: function(query, cb, context) {
      var match;
      var center;
      // regex from https://github.com/openstreetmap/openstreetmap-website/blob/master/app/controllers/geocoder_controller.rb
      if ((match = query.match(/^([NS])\s*(\d{1,3}(?:\.\d*)?)\W*([EW])\s*(\d{1,3}(?:\.\d*)?)$/))) {
        // [NSEW] decimal degrees
        center = L.latLng(
          (/N/i.test(match[1]) ? 1 : -1) * parseFloat(match[2]),
          (/E/i.test(match[3]) ? 1 : -1) * parseFloat(match[4])
        );
      } else if (
        (match = query.match(/^(\d{1,3}(?:\.\d*)?)\s*([NS])\W*(\d{1,3}(?:\.\d*)?)\s*([EW])$/))
      ) {
        // decimal degrees [NSEW]
        center = L.latLng(
          (/N/i.test(match[2]) ? 1 : -1) * parseFloat(match[1]),
          (/E/i.test(match[4]) ? 1 : -1) * parseFloat(match[3])
        );
      } else if (
        (match = query.match(
          /^([NS])\s*(\d{1,3})°?\s*(\d{1,3}(?:\.\d*)?)?['′]?\W*([EW])\s*(\d{1,3})°?\s*(\d{1,3}(?:\.\d*)?)?['′]?$/
        ))
      ) {
        // [NSEW] degrees, decimal minutes
        center = L.latLng(
          (/N/i.test(match[1]) ? 1 : -1) * (parseFloat(match[2]) + parseFloat(match[3] / 60)),
          (/E/i.test(match[4]) ? 1 : -1) * (parseFloat(match[5]) + parseFloat(match[6] / 60))
        );
      } else if (
        (match = query.match(
          /^(\d{1,3})°?\s*(\d{1,3}(?:\.\d*)?)?['′]?\s*([NS])\W*(\d{1,3})°?\s*(\d{1,3}(?:\.\d*)?)?['′]?\s*([EW])$/
        ))
      ) {
        // degrees, decimal minutes [NSEW]
        center = L.latLng(
          (/N/i.test(match[3]) ? 1 : -1) * (parseFloat(match[1]) + parseFloat(match[2] / 60)),
          (/E/i.test(match[6]) ? 1 : -1) * (parseFloat(match[4]) + parseFloat(match[5] / 60))
        );
      } else if (
        (match = query.match(
          /^([NS])\s*(\d{1,3})°?\s*(\d{1,2})['′]?\s*(\d{1,3}(?:\.\d*)?)?["″]?\W*([EW])\s*(\d{1,3})°?\s*(\d{1,2})['′]?\s*(\d{1,3}(?:\.\d*)?)?["″]?$/
        ))
      ) {
        // [NSEW] degrees, minutes, decimal seconds
        center = L.latLng(
          (/N/i.test(match[1]) ? 1 : -1) *
            (parseFloat(match[2]) + parseFloat(match[3] / 60 + parseFloat(match[4] / 3600))),
          (/E/i.test(match[5]) ? 1 : -1) *
            (parseFloat(match[6]) + parseFloat(match[7] / 60) + parseFloat(match[8] / 3600))
        );
      } else if (
        (match = query.match(
          /^(\d{1,3})°?\s*(\d{1,2})['′]?\s*(\d{1,3}(?:\.\d*)?)?["″]\s*([NS])\W*(\d{1,3})°?\s*(\d{1,2})['′]?\s*(\d{1,3}(?:\.\d*)?)?["″]?\s*([EW])$/
        ))
      ) {
        // degrees, minutes, decimal seconds [NSEW]
        center = L.latLng(
          (/N/i.test(match[4]) ? 1 : -1) *
            (parseFloat(match[1]) + parseFloat(match[2] / 60 + parseFloat(match[3] / 3600))),
          (/E/i.test(match[8]) ? 1 : -1) *
            (parseFloat(match[5]) + parseFloat(match[6] / 60) + parseFloat(match[7] / 3600))
        );
      } else if (
        (match = query.match(/^\s*([+-]?\d+(?:\.\d*)?)\s*[\s,]\s*([+-]?\d+(?:\.\d*)?)\s*$/))
      ) {
        center = L.latLng(parseFloat(match[1]), parseFloat(match[2]));
      }
      if (center) {
        var results = [
          {
            name: query,
            center: center,
            bbox: center.toBounds(this.options.sizeInMeters)
          }
        ];
        cb.call(context, results);
      } else if (this.options.next) {
        this.options.next.geocode(query, cb, context);
      }
    }
  });

  function latLng(options) {
    return new LatLng(options);
  }

  var Mapbox = L.Class.extend({
    options: {
      serviceUrl: 'https://api.mapbox.com/geocoding/v5/mapbox.places/',
      geocodingQueryParams: {},
      reverseQueryParams: {}
    },

    initialize: function(accessToken, options) {
      L.setOptions(this, options);
      this.options.geocodingQueryParams.access_token = accessToken;
      this.options.reverseQueryParams.access_token = accessToken;
    },

    geocode: function(query, cb, context) {
      var params = this.options.geocodingQueryParams;
      if (
        params.proximity !== undefined &&
        params.proximity.lat !== undefined &&
        params.proximity.lng !== undefined
      ) {
        params.proximity = params.proximity.lng + ',' + params.proximity.lat;
      }
      getJSON(this.options.serviceUrl + encodeURIComponent(query) + '.json', params, function(data) {
        var results = [],
          loc,
          latLng,
          latLngBounds;
        if (data.features && data.features.length) {
          for (var i = 0; i <= data.features.length - 1; i++) {
            loc = data.features[i];
            latLng = L.latLng(loc.center.reverse());
            if (loc.bbox) {
              latLngBounds = L.latLngBounds(
                L.latLng(loc.bbox.slice(0, 2).reverse()),
                L.latLng(loc.bbox.slice(2, 4).reverse())
              );
            } else {
              latLngBounds = L.latLngBounds(latLng, latLng);
            }

            var properties = {
              text: loc.text,
              address: loc.address
            };

            for (var j = 0; j < (loc.context || []).length; j++) {
              var id = loc.context[j].id.split('.')[0];
              properties[id] = loc.context[j].text;
            }

            results[i] = {
              name: loc.place_name,
              bbox: latLngBounds,
              center: latLng,
              properties: properties
            };
          }
        }

        cb.call(context, results);
      });
    },

    suggest: function(query, cb, context) {
      return this.geocode(query, cb, context);
    },

    reverse: function(location, scale, cb, context) {
      getJSON(
        this.options.serviceUrl +
          encodeURIComponent(location.lng) +
          ',' +
          encodeURIComponent(location.lat) +
          '.json',
        this.options.reverseQueryParams,
        function(data) {
          var results = [],
            loc,
            latLng,
            latLngBounds;
          if (data.features && data.features.length) {
            for (var i = 0; i <= data.features.length - 1; i++) {
              loc = data.features[i];
              latLng = L.latLng(loc.center.reverse());
              if (loc.bbox) {
                latLngBounds = L.latLngBounds(
                  L.latLng(loc.bbox.slice(0, 2).reverse()),
                  L.latLng(loc.bbox.slice(2, 4).reverse())
                );
              } else {
                latLngBounds = L.latLngBounds(latLng, latLng);
              }
              results[i] = {
                name: loc.place_name,
                bbox: latLngBounds,
                center: latLng
              };
            }
          }

          cb.call(context, results);
        }
      );
    }
  });

  function mapbox(accessToken, options) {
    return new Mapbox(accessToken, options);
  }

  var MapQuest = L.Class.extend({
    options: {
      serviceUrl: 'https://www.mapquestapi.com/geocoding/v1'
    },

    initialize: function(key, options) {
      // MapQuest seems to provide URI encoded API keys,
      // so to avoid encoding them twice, we decode them here
      this._key = decodeURIComponent(key);

      L.Util.setOptions(this, options);
    },

    _formatName: function() {
      var r = [],
        i;
      for (i = 0; i < arguments.length; i++) {
        if (arguments[i]) {
          r.push(arguments[i]);
        }
      }

      return r.join(', ');
    },

    geocode: function(query, cb, context) {
      getJSON(
        this.options.serviceUrl + '/address',
        {
          key: this._key,
          location: query,
          limit: 5,
          outFormat: 'json'
        },
        L.bind(function(data) {
          var results = [],
            loc,
            latLng;
          if (data.results && data.results[0].locations) {
            for (var i = data.results[0].locations.length - 1; i >= 0; i--) {
              loc = data.results[0].locations[i];
              latLng = L.latLng(loc.latLng);
              results[i] = {
                name: this._formatName(loc.street, loc.adminArea4, loc.adminArea3, loc.adminArea1),
                bbox: L.latLngBounds(latLng, latLng),
                center: latLng
              };
            }
          }

          cb.call(context, results);
        }, this)
      );
    },

    reverse: function(location, scale, cb, context) {
      getJSON(
        this.options.serviceUrl + '/reverse',
        {
          key: this._key,
          location: location.lat + ',' + location.lng,
          outputFormat: 'json'
        },
        L.bind(function(data) {
          var results = [],
            loc,
            latLng;
          if (data.results && data.results[0].locations) {
            for (var i = data.results[0].locations.length - 1; i >= 0; i--) {
              loc = data.results[0].locations[i];
              latLng = L.latLng(loc.latLng);
              results[i] = {
                name: this._formatName(loc.street, loc.adminArea4, loc.adminArea3, loc.adminArea1),
                bbox: L.latLngBounds(latLng, latLng),
                center: latLng
              };
            }
          }

          cb.call(context, results);
        }, this)
      );
    }
  });

  function mapQuest(key, options) {
    return new MapQuest(key, options);
  }

  var Neutrino = L.Class.extend({
    options: {
      userId: '<insert your userId here>',
      apiKey: '<insert your apiKey here>',
      serviceUrl: 'https://neutrinoapi.com/'
    },

    initialize: function(options) {
      L.Util.setOptions(this, options);
    },

    // https://www.neutrinoapi.com/api/geocode-address/
    geocode: function(query, cb, context) {
      getJSON(
        this.options.serviceUrl + 'geocode-address',
        {
          apiKey: this.options.apiKey,
          userId: this.options.userId,
          //get three words and make a dot based string
          address: query.split(/\s+/).join('.')
        },
        function(data) {
          var results = [],
            latLng,
            latLngBounds;
          if (data.locations) {
            data.geometry = data.locations[0];
            latLng = L.latLng(data.geometry['latitude'], data.geometry['longitude']);
            latLngBounds = L.latLngBounds(latLng, latLng);
            results[0] = {
              name: data.geometry.address,
              bbox: latLngBounds,
              center: latLng
            };
          }

          cb.call(context, results);
        }
      );
    },

    suggest: function(query, cb, context) {
      return this.geocode(query, cb, context);
    },

    // https://www.neutrinoapi.com/api/geocode-reverse/
    reverse: function(location, scale, cb, context) {
      getJSON(
        this.options.serviceUrl + 'geocode-reverse',
        {
          apiKey: this.options.apiKey,
          userId: this.options.userId,
          latitude: location.lat,
          longitude: location.lng
        },
        function(data) {
          var results = [],
            latLng,
            latLngBounds;
          if (data.status.status == 200 && data.found) {
            latLng = L.latLng(location.lat, location.lng);
            latLngBounds = L.latLngBounds(latLng, latLng);
            results[0] = {
              name: data.address,
              bbox: latLngBounds,
              center: latLng
            };
          }
          cb.call(context, results);
        }
      );
    }
  });

  function neutrino(accessToken) {
    return new Neutrino(accessToken);
  }

  var Nominatim = L.Class.extend({
    options: {
      serviceUrl: 'https://nominatim.openstreetmap.org/',
      geocodingQueryParams: {},
      reverseQueryParams: {},
      htmlTemplate: function(r) {
        var a = r.address,
          parts = [];
        if (a.road || a.building) {
          parts.push('{building} {road} {house_number}');
        }

        if (a.city || a.town || a.village || a.hamlet) {
          parts.push(
            '<span class="' +
              (parts.length > 0 ? 'leaflet-control-geocoder-address-detail' : '') +
              '">{postcode} {city} {town} {village} {hamlet}</span>'
          );
        }

        if (a.state || a.country) {
          parts.push(
            '<span class="' +
              (parts.length > 0 ? 'leaflet-control-geocoder-address-context' : '') +
              '">{state} {country}</span>'
          );
        }

        return template(parts.join('<br/>'), a, true);
      }
    },

    initialize: function(options) {
      L.Util.setOptions(this, options);
    },

    geocode: function(query, cb, context) {
      getJSON(
        this.options.serviceUrl + 'search',
        L.extend(
          {
            q: query,
            limit: 5,
            format: 'json',
            addressdetails: 1
          },
          this.options.geocodingQueryParams
        ),
        L.bind(function(data) {
          var results = [];
          for (var i = data.length - 1; i >= 0; i--) {
            var bbox = data[i].boundingbox;
            for (var j = 0; j < 4; j++) bbox[j] = parseFloat(bbox[j]);
            results[i] = {
              icon: data[i].icon,
              name: data[i].display_name,
              html: this.options.htmlTemplate ? this.options.htmlTemplate(data[i]) : undefined,
              bbox: L.latLngBounds([bbox[0], bbox[2]], [bbox[1], bbox[3]]),
              center: L.latLng(data[i].lat, data[i].lon),
              properties: data[i]
            };
          }
          cb.call(context, results);
        }, this)
      );
    },

    reverse: function(location, scale, cb, context) {
      getJSON(
        this.options.serviceUrl + 'reverse',
        L.extend(
          {
            lat: location.lat,
            lon: location.lng,
            zoom: Math.round(Math.log(scale / 256) / Math.log(2)),
            addressdetails: 1,
            format: 'json'
          },
          this.options.reverseQueryParams
        ),
        L.bind(function(data) {
          var result = [],
            loc;

          if (data && data.lat && data.lon) {
            loc = L.latLng(data.lat, data.lon);
            result.push({
              name: data.display_name,
              html: this.options.htmlTemplate ? this.options.htmlTemplate(data) : undefined,
              center: loc,
              bounds: L.latLngBounds(loc, loc),
              properties: data
            });
          }

          cb.call(context, result);
        }, this)
      );
    }
  });

  function nominatim(options) {
    return new Nominatim(options);
  }

  var OpenLocationCode = L.Class.extend({
    options: {
      OpenLocationCode: undefined,
      codeLength: undefined
    },

    initialize: function(options) {
      L.setOptions(this, options);
    },

    geocode: function(query, cb, context) {
      try {
        var decoded = this.options.OpenLocationCode.decode(query);
        var result = {
          name: query,
          center: L.latLng(decoded.latitudeCenter, decoded.longitudeCenter),
          bbox: L.latLngBounds(
            L.latLng(decoded.latitudeLo, decoded.longitudeLo),
            L.latLng(decoded.latitudeHi, decoded.longitudeHi)
          )
        };
        cb.call(context, [result]);
      } catch (e) {
        console.warn(e); // eslint-disable-line no-console
        cb.call(context, []);
      }
    },
    reverse: function(location, scale, cb, context) {
      try {
        var code = this.options.OpenLocationCode.encode(
          location.lat,
          location.lng,
          this.options.codeLength
        );
        var result = {
          name: code,
          center: L.latLng(location.lat, location.lng),
          bbox: L.latLngBounds(
            L.latLng(location.lat, location.lng),
            L.latLng(location.lat, location.lng)
          )
        };
        cb.call(context, [result]);
      } catch (e) {
        console.warn(e); // eslint-disable-line no-console
        cb.call(context, []);
      }
    }
  });

  function openLocationCode(options) {
    return new OpenLocationCode(options);
  }

  var Pelias = L.Class.extend({
    options: {
      serviceUrl: 'https://api.geocode.earth/v1',
      geocodingQueryParams: {},
      reverseQueryParams: {}
    },

    initialize: function(apiKey, options) {
      L.Util.setOptions(this, options);
      this._apiKey = apiKey;
      this._lastSuggest = 0;
    },

    geocode: function(query, cb, context) {
      var _this = this;
      getJSON(
        this.options.serviceUrl + '/search',
        L.extend(
          {
            api_key: this._apiKey,
            text: query
          },
          this.options.geocodingQueryParams
        ),
        function(data) {
          cb.call(context, _this._parseResults(data, 'bbox'));
        }
      );
    },

    suggest: function(query, cb, context) {
      var _this = this;
      getJSON(
        this.options.serviceUrl + '/autocomplete',
        L.extend(
          {
            api_key: this._apiKey,
            text: query
          },
          this.options.geocodingQueryParams
        ),
        L.bind(function(data) {
          if (data.geocoding.timestamp > this._lastSuggest) {
            this._lastSuggest = data.geocoding.timestamp;
            cb.call(context, _this._parseResults(data, 'bbox'));
          }
        }, this)
      );
    },

    reverse: function(location, scale, cb, context) {
      var _this = this;
      getJSON(
        this.options.serviceUrl + '/reverse',
        L.extend(
          {
            api_key: this._apiKey,
            'point.lat': location.lat,
            'point.lon': location.lng
          },
          this.options.reverseQueryParams
        ),
        function(data) {
          cb.call(context, _this._parseResults(data, 'bounds'));
        }
      );
    },

    _parseResults: function(data, bboxname) {
      var results = [];
      L.geoJson(data, {
        pointToLayer: function(feature, latlng) {
          return L.circleMarker(latlng);
        },
        onEachFeature: function(feature, layer) {
          var result = {},
            bbox,
            center;

          if (layer.getBounds) {
            bbox = layer.getBounds();
            center = bbox.getCenter();
          } else if (layer.feature.bbox) {
            center = layer.getLatLng();
            bbox = L.latLngBounds(
              L.GeoJSON.coordsToLatLng(layer.feature.bbox.slice(0, 2)),
              L.GeoJSON.coordsToLatLng(layer.feature.bbox.slice(2, 4))
            );
          } else {
            center = layer.getLatLng();
            bbox = L.latLngBounds(center, center);
          }

          result.name = layer.feature.properties.label;
          result.center = center;
          result[bboxname] = bbox;
          result.properties = layer.feature.properties;
          results.push(result);
        }
      });
      return results;
    }
  });

  function pelias(apiKey, options) {
    return new Pelias(apiKey, options);
  }
  var GeocodeEarth = Pelias;
  var geocodeEarth = pelias;

  var Mapzen = Pelias; // r.i.p.
  var mapzen = pelias;

  var Openrouteservice = Mapzen.extend({
    options: {
      serviceUrl: 'https://api.openrouteservice.org/geocode'
    }
  });
  function openrouteservice(apiKey, options) {
    return new Openrouteservice(apiKey, options);
  }

  var Photon = L.Class.extend({
    options: {
      serviceUrl: 'https://photon.komoot.de/api/',
      reverseUrl: 'https://photon.komoot.de/reverse/',
      nameProperties: ['name', 'street', 'suburb', 'hamlet', 'town', 'city', 'state', 'country']
    },

    initialize: function(options) {
      L.setOptions(this, options);
    },

    geocode: function(query, cb, context) {
      var params = L.extend(
        {
          q: query
        },
        this.options.geocodingQueryParams
      );

      getJSON(
        this.options.serviceUrl,
        params,
        L.bind(function(data) {
          cb.call(context, this._decodeFeatures(data));
        }, this)
      );
    },

    suggest: function(query, cb, context) {
      return this.geocode(query, cb, context);
    },

    reverse: function(latLng, scale, cb, context) {
      var params = L.extend(
        {
          lat: latLng.lat,
          lon: latLng.lng
        },
        this.options.reverseQueryParams
      );

      getJSON(
        this.options.reverseUrl,
        params,
        L.bind(function(data) {
          cb.call(context, this._decodeFeatures(data));
        }, this)
      );
    },

    _decodeFeatures: function(data) {
      var results = [],
        i,
        f,
        c,
        latLng,
        extent,
        bbox;

      if (data && data.features) {
        for (i = 0; i < data.features.length; i++) {
          f = data.features[i];
          c = f.geometry.coordinates;
          latLng = L.latLng(c[1], c[0]);
          extent = f.properties.extent;

          if (extent) {
            bbox = L.latLngBounds([extent[1], extent[0]], [extent[3], extent[2]]);
          } else {
            bbox = L.latLngBounds(latLng, latLng);
          }

          results.push({
            name: this._decodeFeatureName(f),
            html: this.options.htmlTemplate ? this.options.htmlTemplate(f) : undefined,
            center: latLng,
            bbox: bbox,
            properties: f.properties
          });
        }
      }

      return results;
    },

    _decodeFeatureName: function(f) {
      return (this.options.nameProperties || [])
        .map(function(p) {
          return f.properties[p];
        })
        .filter(function(v) {
          return !!v;
        })
        .join(', ');
    }
  });

  function photon(options) {
    return new Photon(options);
  }

  var What3Words = L.Class.extend({
    options: {
      serviceUrl: 'https://api.what3words.com/v2/'
    },

    initialize: function(accessToken) {
      this._accessToken = accessToken;
    },

    geocode: function(query, cb, context) {
      //get three words and make a dot based string
      getJSON(
        this.options.serviceUrl + 'forward',
        {
          key: this._accessToken,
          addr: query.split(/\s+/).join('.')
        },
        function(data) {
          var results = [],
            latLng,
            latLngBounds;
          if (data.geometry) {
            latLng = L.latLng(data.geometry['lat'], data.geometry['lng']);
            latLngBounds = L.latLngBounds(latLng, latLng);
            results[0] = {
              name: data.words,
              bbox: latLngBounds,
              center: latLng
            };
          }

          cb.call(context, results);
        }
      );
    },

    suggest: function(query, cb, context) {
      return this.geocode(query, cb, context);
    },

    reverse: function(location, scale, cb, context) {
      getJSON(
        this.options.serviceUrl + 'reverse',
        {
          key: this._accessToken,
          coords: [location.lat, location.lng].join(',')
        },
        function(data) {
          var results = [],
            latLng,
            latLngBounds;
          if (data.status.status == 200) {
            latLng = L.latLng(data.geometry['lat'], data.geometry['lng']);
            latLngBounds = L.latLngBounds(latLng, latLng);
            results[0] = {
              name: data.words,
              bbox: latLngBounds,
              center: latLng
            };
          }
          cb.call(context, results);
        }
      );
    }
  });

  function what3words(accessToken) {
    return new What3Words(accessToken);
  }



  var geocoders = /*#__PURE__*/Object.freeze({
    ArcGis: ArcGis,
    arcgis: arcgis,
    Bing: Bing,
    bing: bing,
    Google: Google,
    google: google,
    HERE: HERE,
    here: here,
    LatLng: LatLng,
    latLng: latLng,
    Mapbox: Mapbox,
    mapbox: mapbox,
    MapQuest: MapQuest,
    mapQuest: mapQuest,
    Neutrino: Neutrino,
    neutrino: neutrino,
    Nominatim: Nominatim,
    nominatim: nominatim,
    OpenLocationCode: OpenLocationCode,
    openLocationCode: openLocationCode,
    Pelias: Pelias,
    pelias: pelias,
    GeocodeEarth: GeocodeEarth,
    geocodeEarth: geocodeEarth,
    Mapzen: Mapzen,
    mapzen: mapzen,
    Openrouteservice: Openrouteservice,
    openrouteservice: openrouteservice,
    Photon: Photon,
    photon: photon,
    What3Words: What3Words,
    what3words: what3words
  });

  var Geocoder = L.Control.extend({
    options: {
      showUniqueResult: true,
      showResultIcons: false,
      collapsed: true,
      expand: 'touch', // options: touch, click, anythingelse
      position: 'topright',
      placeholder: 'Search...',
      errorMessage: 'Nothing found.',
      queryMinLength: 1,
      suggestMinLength: 3,
      suggestTimeout: 250,
      defaultMarkGeocode: true
    },

    includes: L.Evented.prototype || L.Mixin.Events,

    initialize: function(options) {
      L.Util.setOptions(this, options);
      if (!this.options.geocoder) {
        this.options.geocoder = new Nominatim();
      }

      this._requestCount = 0;
    },

    addThrobberClass: function() {
      L.DomUtil.addClass(this._container, 'leaflet-control-geocoder-throbber');
    },

    removeThrobberClass: function() {
      L.DomUtil.removeClass(this._container, 'leaflet-control-geocoder-throbber');
    },

    onAdd: function(map) {
      var className = 'leaflet-control-geocoder',
        container = L.DomUtil.create('div', className + ' leaflet-bar'),
        icon = L.DomUtil.create('button', className + '-icon', container),
        form = (this._form = L.DomUtil.create('div', className + '-form', container)),
        input;

      this._map = map;
      this._container = container;

      icon.innerHTML = '&nbsp;';
      icon.type = 'button';

      input = this._input = L.DomUtil.create('input', '', form);
      input.type = 'text';
      input.placeholder = this.options.placeholder;
      L.DomEvent.disableClickPropagation(input);

      this._errorElement = L.DomUtil.create('div', className + '-form-no-error', container);
      this._errorElement.innerHTML = this.options.errorMessage;

      this._alts = L.DomUtil.create(
        'ul',
        className + '-alternatives leaflet-control-geocoder-alternatives-minimized',
        container
      );
      L.DomEvent.disableClickPropagation(this._alts);

      L.DomEvent.addListener(input, 'keydown', this._keydown, this);
      if (this.options.geocoder.suggest) {
        L.DomEvent.addListener(input, 'input', this._change, this);
      }
      L.DomEvent.addListener(
        input,
        'blur',
        function() {
          if (this.options.collapsed && !this._preventBlurCollapse) {
            this._collapse();
          }
          this._preventBlurCollapse = false;
        },
        this
      );

      if (this.options.collapsed) {
        if (this.options.expand === 'click') {
          L.DomEvent.addListener(
            container,
            'click',
            function(e) {
              if (e.button === 0 && e.detail !== 2) {
                this._toggle();
              }
            },
            this
          );
        } else if (L.Browser.touch && this.options.expand === 'touch') {
          L.DomEvent.addListener(
            container,
            'touchstart mousedown',
            function(e) {
              this._toggle();
              e.preventDefault(); // mobile: clicking focuses the icon, so UI expands and immediately collapses
              e.stopPropagation();
            },
            this
          );
        } else {
          L.DomEvent.addListener(container, 'mouseover', this._expand, this);
          L.DomEvent.addListener(container, 'mouseout', this._collapse, this);
          this._map.on('movestart', this._collapse, this);
        }
      } else {
        this._expand();
        if (L.Browser.touch) {
          L.DomEvent.addListener(
            container,
            'touchstart',
            function() {
              this._geocode();
            },
            this
          );
        } else {
          L.DomEvent.addListener(
            container,
            'click',
            function() {
              this._geocode();
            },
            this
          );
        }
      }

      if (this.options.defaultMarkGeocode) {
        this.on('markgeocode', this.markGeocode, this);
      }

      this.on('startgeocode', this.addThrobberClass, this);
      this.on('finishgeocode', this.removeThrobberClass, this);
      this.on('startsuggest', this.addThrobberClass, this);
      this.on('finishsuggest', this.removeThrobberClass, this);

      L.DomEvent.disableClickPropagation(container);

      return container;
    },

    _geocodeResult: function(results, suggest) {
      if (!suggest && this.options.showUniqueResult && results.length === 1) {
        this._geocodeResultSelected(results[0]);
      } else if (results.length > 0) {
        this._alts.innerHTML = '';
        this._results = results;
        L.DomUtil.removeClass(this._alts, 'leaflet-control-geocoder-alternatives-minimized');
        L.DomUtil.addClass(this._container, 'leaflet-control-geocoder-options-open');
        for (var i = 0; i < results.length; i++) {
          this._alts.appendChild(this._createAlt(results[i], i));
        }
      } else {
        L.DomUtil.addClass(this._container, 'leaflet-control-geocoder-options-error');
        L.DomUtil.addClass(this._errorElement, 'leaflet-control-geocoder-error');
      }
    },

    markGeocode: function(result) {
      result = result.geocode || result;

      this._map.fitBounds(result.bbox);

      if (this._geocodeMarker) {
        this._map.removeLayer(this._geocodeMarker);
      }

      this._geocodeMarker = new L.Marker(result.center)
        .bindPopup(result.html || result.name)
        .addTo(this._map)
        .openPopup();

      return this;
    },

    _geocode: function(suggest) {
      var value = this._input.value;
      if (!suggest && value.length < this.options.queryMinLength) {
        return;
      }

      var requestCount = ++this._requestCount,
        mode = suggest ? 'suggest' : 'geocode',
        eventData = { input: value };

      this._lastGeocode = value;
      if (!suggest) {
        this._clearResults();
      }

      this.fire('start' + mode, eventData);
      this.options.geocoder[mode](
        value,
        function(results) {
          if (requestCount === this._requestCount) {
            eventData.results = results;
            this.fire('finish' + mode, eventData);
            this._geocodeResult(results, suggest);
          }
        },
        this
      );
    },

    _geocodeResultSelected: function(result) {
      this.fire('markgeocode', { geocode: result });
    },

    _toggle: function() {
      if (L.DomUtil.hasClass(this._container, 'leaflet-control-geocoder-expanded')) {
        this._collapse();
      } else {
        this._expand();
      }
    },

    _expand: function() {
      L.DomUtil.addClass(this._container, 'leaflet-control-geocoder-expanded');
      this._input.select();
      this.fire('expand');
    },

    _collapse: function() {
      L.DomUtil.removeClass(this._container, 'leaflet-control-geocoder-expanded');
      L.DomUtil.addClass(this._alts, 'leaflet-control-geocoder-alternatives-minimized');
      L.DomUtil.removeClass(this._errorElement, 'leaflet-control-geocoder-error');
      L.DomUtil.removeClass(this._container, 'leaflet-control-geocoder-options-open');
      L.DomUtil.removeClass(this._container, 'leaflet-control-geocoder-options-error');
      this._input.blur(); // mobile: keyboard shouldn't stay expanded
      this.fire('collapse');
    },

    _clearResults: function() {
      L.DomUtil.addClass(this._alts, 'leaflet-control-geocoder-alternatives-minimized');
      this._selection = null;
      L.DomUtil.removeClass(this._errorElement, 'leaflet-control-geocoder-error');
      L.DomUtil.removeClass(this._container, 'leaflet-control-geocoder-options-open');
      L.DomUtil.removeClass(this._container, 'leaflet-control-geocoder-options-error');
    },

    _createAlt: function(result, index) {
      var li = L.DomUtil.create('li', ''),
        a = L.DomUtil.create('a', '', li),
        icon = this.options.showResultIcons && result.icon ? L.DomUtil.create('img', '', a) : null,
        text = result.html ? undefined : document.createTextNode(result.name),
        mouseDownHandler = function mouseDownHandler(e) {
          // In some browsers, a click will fire on the map if the control is
          // collapsed directly after mousedown. To work around this, we
          // wait until the click is completed, and _then_ collapse the
          // control. Messy, but this is the workaround I could come up with
          // for #142.
          this._preventBlurCollapse = true;
          L.DomEvent.stop(e);
          this._geocodeResultSelected(result);
          L.DomEvent.on(
            li,
            'click',
            function() {
              if (this.options.collapsed) {
                this._collapse();
              } else {
                this._clearResults();
              }
            },
            this
          );
        };

      if (icon) {
        icon.src = result.icon;
      }

      li.setAttribute('data-result-index', index);

      if (result.html) {
        a.innerHTML = a.innerHTML + result.html;
      } else {
        a.appendChild(text);
      }

      // Use mousedown and not click, since click will fire _after_ blur,
      // causing the control to have collapsed and removed the items
      // before the click can fire.
      L.DomEvent.addListener(li, 'mousedown touchstart', mouseDownHandler, this);

      return li;
    },

    _keydown: function(e) {
      var _this = this,
        select = function select(dir) {
          if (_this._selection) {
            L.DomUtil.removeClass(_this._selection, 'leaflet-control-geocoder-selected');
            _this._selection = _this._selection[dir > 0 ? 'nextSibling' : 'previousSibling'];
          }
          if (!_this._selection) {
            _this._selection = _this._alts[dir > 0 ? 'firstChild' : 'lastChild'];
          }

          if (_this._selection) {
            L.DomUtil.addClass(_this._selection, 'leaflet-control-geocoder-selected');
          }
        };

      switch (e.keyCode) {
        // Escape
        case 27:
          if (this.options.collapsed) {
            this._collapse();
          } else {
            this._clearResults();
          }
          break;
        // Up
        case 38:
          select(-1);
          break;
        // Up
        case 40:
          select(1);
          break;
        // Enter
        case 13:
          if (this._selection) {
            var index = parseInt(this._selection.getAttribute('data-result-index'), 10);
            this._geocodeResultSelected(this._results[index]);
            this._clearResults();
          } else {
            this._geocode();
          }
          break;
        default:
          return;
      }

      L.DomEvent.preventDefault(e);
    },
    _change: function() {
      var v = this._input.value;
      if (v !== this._lastGeocode) {
        clearTimeout(this._suggestTimeout);
        if (v.length >= this.options.suggestMinLength) {
          this._suggestTimeout = setTimeout(
            L.bind(function() {
              this._geocode(true);
            }, this),
            this.options.suggestTimeout
          );
        } else {
          this._clearResults();
        }
      }
    }
  });

  function geocoder(options) {
    return new Geocoder(options);
  }

  L.Util.extend(Geocoder, geocoders);

  L.Util.extend(L.Control, {
    Geocoder: Geocoder,
    geocoder: geocoder
  });

  return Geocoder;

}(L));
//# sourceMappingURL=Control.Geocoder.js.map

;
//# sourceMappingURL=scripts.js.map