/*! For license information please see 421.2e48f3e3.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkproject_bni_dashboard=self.webpackChunkproject_bni_dashboard||[]).push([[421,76],{1531:function(t,e,n){var r=n(6759);var u="function"===typeof Object.is?Object.is:function(t,e){return t===e&&(0!==t||1/t===1/e)||t!==t&&e!==e},o=r.useState,i=r.useEffect,c=r.useLayoutEffect,a=r.useDebugValue;function f(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!u(t,n)}catch(r){return!0}}var s="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(t,e){return e()}:function(t,e){var n=e(),r=o({inst:{value:n,getSnapshot:e}}),u=r[0].inst,s=r[1];return c((function(){u.value=n,u.getSnapshot=e,f(u)&&s({inst:u})}),[t,n,e]),i((function(){return f(u)&&s({inst:u}),t((function(){f(u)&&s({inst:u})}))}),[t]),a(n),n};e.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:s},5531:function(t,e,n){var r=n(6759),u=n(1239);var o="function"===typeof Object.is?Object.is:function(t,e){return t===e&&(0!==t||1/t===1/e)||t!==t&&e!==e},i=u.useSyncExternalStore,c=r.useRef,a=r.useEffect,f=r.useMemo,s=r.useDebugValue;e.useSyncExternalStoreWithSelector=function(t,e,n,r,u){var l=c(null);if(null===l.current){var v={hasValue:!1,value:null};l.current=v}else v=l.current;l=f((function(){function t(t){if(!a){if(a=!0,i=t,t=r(t),void 0!==u&&v.hasValue){var e=v.value;if(u(e,t))return c=e}return c=t}if(e=c,o(i,t))return e;var n=r(t);return void 0!==u&&u(e,n)?e:(i=t,c=n)}var i,c,a=!1,f=void 0===n?null:n;return[function(){return t(e())},null===f?void 0:function(){return t(f())}]}),[e,n,r,u]);var d=i(t,l[0],l[1]);return a((function(){v.hasValue=!0,v.value=d}),[d]),s(d),d}},1239:function(t,e,n){t.exports=n(1531)},7058:function(t,e,n){t.exports=n(5531)},8421:function(t,e,n){n.r(e),n.d(e,{createStore:function(){return u},default:function(){return f},useStore:function(){return c}});var r=function(t){var e,n=new Set,r=function(t,r){var u="function"===typeof t?t(e):t;if(u!==e){var o=e;e=r?u:Object.assign({},e,u),n.forEach((function(t){return t(e,o)}))}},u=function(){return e},o={setState:r,getState:u,subscribe:function(t){return n.add(t),function(){return n.delete(t)}},destroy:function(){return n.clear()}};return e=t(r,u,o),o},u=function(t){return t?r(t):r},o=n(6759),i=n(7058);function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.getState,n=arguments.length>2?arguments[2]:void 0,r=(0,i.useSyncExternalStoreWithSelector)(t.subscribe,t.getState,t.getServerState||t.getState,e,n);return(0,o.useDebugValue)(r),r}var a=function(t){var e="function"===typeof t?u(t):t,n=function(t,n){return c(e,t,n)};return Object.assign(n,e),n},f=function(t){return t?a(t):a}}}]);