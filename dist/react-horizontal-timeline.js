module.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=11)}([function(e,t){e.exports=require("react")},function(e,t,n){(function(t){if("production"!==t.env.NODE_ENV){var r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,o=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r};e.exports=n(13)(o,!0)}else e.exports=n(16)()}).call(t,n(2))},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(c===setTimeout)return setTimeout(e,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(t){try{return c.call(null,e,0)}catch(t){return c.call(this,e,0)}}}function i(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function a(){y&&p&&(y=!1,p.length?h=p.concat(h):b=-1,h.length&&u())}function u(){if(!y){var e=o(a);y=!0;for(var t=h.length;t;){for(p=h,h=[];++b<t;)p&&p[b].run();b=-1,t=h.length}p=null,y=!1,i(e)}}function s(e,t){this.fun=e,this.array=t}function l(){}var c,f,d=e.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:n}catch(e){c=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var p,h=[],y=!1,b=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new s(e,t)),1!==h.length||y||o(u)},s.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=l,d.addListener=l,d.once=l,d.off=l,d.removeListener=l,d.removeAllListeners=l,d.emit=l,d.prependListener=l,d.prependOnceListener=l,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(e,t){e.exports=require("radium")},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";(function(t){function n(e,t,n,o,i,a,u,s){if(r(t),!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,o,i,a,u,s],f=0;l=new Error(t.replace(/%s/g,function(){return c[f++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}}var r=function(e){};"production"!==t.env.NODE_ENV&&(r=function(e){if(void 0===e)throw new Error("invariant requires an error message argument")}),e.exports=n}).call(t,n(2))},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";e.exports={LEFT:"left",RIGHT:"right",LEFT_KEY:37,RIGHT_KEY:39,UP_KEY:38,DOWN_KEY:40,DAY:864e5,MIN_TIMELINE_WIDTH:750,MIN_EVENT_PADDING:20,MAX_EVENT_PADDING:120,DATE_WIDTH:85,TIMELINE_PADDING:100,KEYMAP:{37:"left",39:"right"}}},function(e,t,n){"use strict";(function(t){var r=n(4),o=r;if("production"!==t.env.NODE_ENV){var i=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,i="Warning: "+e.replace(/%s/g,function(){return n[o++]});"undefined"!=typeof console&&console.error(i);try{throw new Error(i)}catch(e){}};o=function(e,t){if(void 0===t)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==t.indexOf("Failed Composite propType: ")&&!e){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];i.apply(void 0,[t].concat(r))}}}e.exports=o}).call(t,n(2))},function(e,t){e.exports=require("react-motion")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=t.daydiff=function(e,t){return Math.round(t-e)},i=t.zip=function(e){return e[0].map(function(t,n){return e.map(function(e){return e[n]})})},a=t.dateDistanceExtremes=function(e){var t=i([e.slice(0,-1),e.slice(1)]),n=t.map(function(e){var t=r(e,2),n=t[0],i=t[1];return o(n,i)});return{min:Math.min.apply(null,n),max:Math.max.apply(null,n)}};t.cummulativeSeperation=function(e,t,n,r,i){var u=new Array(e.length);u[0]=i;for(var s=a(e),l=s.max-s.min,c=r-n,f=1;f<u.length;f+=1){var d=o(e[f-1],e[f]),p=0===l?r:Math.round((d-s.min)*c/l+n);u[f]=u[f-1]+t+p}return u}},function(e,t,n){e.exports=n(12)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),l=r(s),c=n(1),f=(r(c),n(3)),d=r(f),p=n(17),h=r(p),y=n(18),b=r(y),v=n(10),g=n(7),m=r(g),E=function(e,t){return new Date(e).toDateString().substring(4)},w=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){var e=this.props;if(!e.containerWidth)return!1;var t=e.values.map(function(e){return new Date(e)}),n=(0,v.cummulativeSeperation)(t,e.labelWidth,e.minEventPadding,e.maxEventPadding,e.linePadding),r=n.map(function(t,n){return{distance:t,label:e.getLabel(e.values[n],n),date:e.values[n]}}),o=this.props.containerWidth-80,i=Math.max(r[r.length-1].distance+this.props.linePadding,o),a=0,u=0;return this.props.isOpenEnding||(a=i-r[r.length-1].distance),this.props.isOpenBeginning||(u=r[0].distance),l.default.createElement(b.default,{width:e.containerWidth,height:e.containerHeight,events:r,isTouchEnabled:e.isTouchEnabled,totalWidth:i,visibleWidth:o,index:e.index,styles:e.styles,indexClick:e.indexClick,labelWidth:e.labelWidth,fillingMotion:e.fillingMotion,barPaddingRight:a,barPaddingLeft:u})}}]),t}(l.default.Component);w.defaultProps={getLabel:E,minEventPadding:m.default.MIN_EVENT_PADDING,maxEventPadding:m.default.MAX_EVENT_PADDING,linePadding:m.default.TIMELINE_PADDING,labelWidth:m.default.DATE_WIDTH,styles:{outline:"#dfdfdf",background:"#f8f8f8",foreground:"#7b9d6f"},fillingMotion:{stiffness:150,damping:25},slidingMotion:{stiffness:150,damping:25},isOpenEnding:!0,isOpenBeginning:!0,isTouchEnabled:!0,isKeyboardEnabled:!0},t.default=(0,d.default)((0,h.default)({elementResize:!0})(w))},function(e,t,n){"use strict";(function(t){var r=n(4),o=n(5),i=n(8),a=n(14),u=n(6),s=n(15);e.exports=function(e,n){function l(e){var t=e&&(k&&e[k]||e[j]);if("function"==typeof t)return t}function c(e,t){return e===t?0!==e||1/e==1/t:e!==e&&t!==t}function f(e){this.message=e,this.stack=""}function d(e){function r(r,l,c,d,p,h,y){if(d=d||M,h=h||c,y!==u)if(n)o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else if("production"!==t.env.NODE_ENV&&"undefined"!=typeof console){var b=d+":"+c;!a[b]&&s<3&&(i(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",h,d),a[b]=!0,s++)}return null==l[c]?r?new f(null===l[c]?"The "+p+" `"+h+"` is marked as required in `"+d+"`, but its value is `null`.":"The "+p+" `"+h+"` is marked as required in `"+d+"`, but its value is `undefined`."):null:e(l,c,d,p,h)}if("production"!==t.env.NODE_ENV)var a={},s=0;var l=r.bind(null,!1);return l.isRequired=r.bind(null,!0),l}function p(e){function t(t,n,r,o,i,a){var u=t[n];if(O(u)!==e)return new f("Invalid "+o+" `"+i+"` of type `"+_(u)+"` supplied to `"+r+"`, expected `"+e+"`.");return null}return d(t)}function h(e){function t(t,n,r,o,i){if("function"!=typeof e)return new f("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var a=t[n];if(!Array.isArray(a)){return new f("Invalid "+o+" `"+i+"` of type `"+O(a)+"` supplied to `"+r+"`, expected an array.")}for(var s=0;s<a.length;s++){var l=e(a,s,r,o,i+"["+s+"]",u);if(l instanceof Error)return l}return null}return d(t)}function y(e){function t(t,n,r,o,i){if(!(t[n]instanceof e)){var a=e.name||M;return new f("Invalid "+o+" `"+i+"` of type `"+P(t[n])+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}return null}return d(t)}function b(e){function n(t,n,r,o,i){for(var a=t[n],u=0;u<e.length;u++)if(c(a,e[u]))return null;return new f("Invalid "+o+" `"+i+"` of value `"+a+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")}return Array.isArray(e)?d(n):("production"!==t.env.NODE_ENV&&i(!1,"Invalid argument supplied to oneOf, expected an instance of array."),r.thatReturnsNull)}function v(e){function t(t,n,r,o,i){if("function"!=typeof e)return new f("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var a=t[n],s=O(a);if("object"!==s)return new f("Invalid "+o+" `"+i+"` of type `"+s+"` supplied to `"+r+"`, expected an object.");for(var l in a)if(a.hasOwnProperty(l)){var c=e(a,l,r,o,i+"."+l,u);if(c instanceof Error)return c}return null}return d(t)}function g(e){function n(t,n,r,o,i){for(var a=0;a<e.length;a++){if(null==(0,e[a])(t,n,r,o,i,u))return null}return new f("Invalid "+o+" `"+i+"` supplied to `"+r+"`.")}if(!Array.isArray(e))return"production"!==t.env.NODE_ENV&&i(!1,"Invalid argument supplied to oneOfType, expected an instance of array."),r.thatReturnsNull;for(var o=0;o<e.length;o++){var a=e[o];if("function"!=typeof a)return i(!1,"Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",T(a),o),r.thatReturnsNull}return d(n)}function m(e){function t(t,n,r,o,i){var a=t[n],s=O(a);if("object"!==s)return new f("Invalid "+o+" `"+i+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");for(var l in e){var c=e[l];if(c){var d=c(a,l,r,o,i+"."+l,u);if(d)return d}}return null}return d(t)}function E(e){function t(t,n,r,o,i){var s=t[n],l=O(s);if("object"!==l)return new f("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");var c=a({},t[n],e);for(var d in c){var p=e[d];if(!p)return new f("Invalid "+o+" `"+i+"` key `"+d+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var h=p(s,d,r,o,i+"."+d,u);if(h)return h}return null}return d(t)}function w(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(w);if(null===t||e(t))return!0;var n=l(t);if(!n)return!1;var r,o=n.call(t);if(n!==t.entries){for(;!(r=o.next()).done;)if(!w(r.value))return!1}else for(;!(r=o.next()).done;){var i=r.value;if(i&&!w(i[1]))return!1}return!0;default:return!1}}function x(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}function O(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":x(t,e)?"symbol":t}function _(e){if(void 0===e||null===e)return""+e;var t=O(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function T(e){var t=_(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}function P(e){return e.constructor&&e.constructor.name?e.constructor.name:M}var k="function"==typeof Symbol&&Symbol.iterator,j="@@iterator",M="<<anonymous>>",N={array:p("array"),bool:p("boolean"),func:p("function"),number:p("number"),object:p("object"),string:p("string"),symbol:p("symbol"),any:function(){return d(r.thatReturnsNull)}(),arrayOf:h,element:function(){function t(t,n,r,o,i){var a=t[n];if(!e(a)){return new f("Invalid "+o+" `"+i+"` of type `"+O(a)+"` supplied to `"+r+"`, expected a single ReactElement.")}return null}return d(t)}(),instanceOf:y,node:function(){function e(e,t,n,r,o){return w(e[t])?null:new f("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")}return d(e)}(),objectOf:v,oneOf:b,oneOfType:g,shape:m,exact:E};return f.prototype=Error.prototype,N.checkPropTypes=s,N.PropTypes=N,N}}).call(t,n(2))},function(e,t,n){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,u,s=r(e),l=1;l<arguments.length;l++){n=Object(arguments[l]);for(var c in n)i.call(n,c)&&(s[c]=n[c]);if(o){u=o(n);for(var f=0;f<u.length;f++)a.call(n,u[f])&&(s[u[f]]=n[u[f]])}}return s}},function(e,t,n){"use strict";(function(t){function r(e,n,r,s,l){if("production"!==t.env.NODE_ENV)for(var c in e)if(e.hasOwnProperty(c)){var f;try{o("function"==typeof e[c],"%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.",s||"React class",r,c,typeof e[c]),f=e[c](n,c,s,r,null,a)}catch(e){f=e}if(i(!f||f instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",s||"React class",r,c,typeof f),f instanceof Error&&!(f.message in u)){u[f.message]=!0;var d=l?l():"";i(!1,"Failed %s type: %s%s",r,f.message,null!=d?d:"")}}}if("production"!==t.env.NODE_ENV)var o=n(5),i=n(8),a=n(6),u={};e.exports=r}).call(t,n(2))},function(e,t,n){"use strict";var r=n(4),o=n(5),i=n(6);e.exports=function(){function e(e,t,n,r,a,u){u!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t){e.exports=require("react-dimensions")},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),c=r(l),f=n(9),d=n(1),p=(r(d),n(19)),h=r(p),y=n(21),b=r(y),v=n(22),g=r(v),m=n(24),E=r(m),w=n(7),x=r(w),O=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return _.call(n),n.state={position:0,maxPosition:Math.min(e.visibleWidth-e.totalWidth,0)},n.touch={coors:{x:0,y:0},isSwiping:!1,started:!1,threshold:3},n}return a(t,e),s(t,[{key:"componentWillMount",value:function(){document.body.addEventListener("keydown",this.handleKeydown)}},{key:"componentDidMount",value:function(){var e=this.props.events[this.props.index];this.slideToPosition(-(e.distance-this.props.visibleWidth/2),this.props)}},{key:"componentWillUnmount",value:function(){document.body.removeEventListener("keydown",this.handleKeydown)}},{key:"componentWillReceiveProps",value:function(e){var t=e.events[e.index],n=-this.state.position,r=n+e.visibleWidth;t.distance>n+10&&t.distance<r-10?this.slideToPosition(this.state.position,e):this.slideToPosition(-(t.distance-e.visibleWidth/2),e)}},{key:"render",value:function(){var e=this,t=this.props.isTouchEnabled?{onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd}:{},n=this.props.events[this.props.index].distance-this.props.barPaddingLeft,r=this.props.totalWidth-this.props.barPaddingLeft-this.props.barPaddingRight;return c.default.createElement("div",u({style:{width:this.props.width+"px",height:this.props.height+"px"}},t),c.default.createElement("div",{className:"events-wrapper",style:{position:"relative",height:"100%",margin:"0 40px",overflow:"hidden"}},c.default.createElement(f.Motion,{style:{X:(0,f.spring)(this.state.position,this.slidingMotion)}},function(t){var o=t.X;return c.default.createElement("div",{className:"events",style:{position:"absolute",left:0,top:49,height:2,width:e.props.totalWidth,WebkitTransform:"translate3d("+o+", 0, 0)px",transform:"translate3d("+o+"px, 0, 0)"}},c.default.createElement(b.default,{left:e.props.barPaddingLeft,width:r,fillingMotion:e.props.fillingMotion,backgroundColor:e.props.styles.outline}),c.default.createElement(b.default,{left:e.props.barPaddingLeft,width:n,fillingMotion:e.props.fillingMotion,backgroundColor:e.props.styles.foreground}),c.default.createElement(h.default,{events:e.props.events,selectedIndex:e.props.index,styles:e.props.styles,handleDateClick:e.props.indexClick,labelWidth:e.props.labelWidth}))})),c.default.createElement(g.default,{styles:this.props.styles}),c.default.createElement(E.default,{maxPosition:this.state.maxPosition,position:this.state.position,styles:this.props.styles,updateSlide:this.updateSlide}))}}]),t}(c.default.Component),_=function(){var e=this;this.handleKeydown=function(t){e.props.isKeyboardEnabled&&(t.keyCode===x.default.LEFT_KEY||t.keyCode===x.default.RIGHT_KEY?e.updateSlide(x.default.KEYMAP[t.keyCode]):t.keyCode===x.default.UP_KEY?e.props.indexClick(Math.min(e.props.selectedIndex+1,e.props.events.length-1)):t.keyCode===x.default.DOWN_KEY&&e.props.indexClick(Math.max(e.props.selectedIndex-1,0)))},this.handleTouchStart=function(t){var n=t.touches[0];e.touch.coors.x=n.pageX,e.touch.coors.y=n.pageY,e.touch.isSwiping=!1,e.touch.started=!0},this.handleTouchMove=function(t){if(!e.touch.started)return void e.handleTouchStart(t);var n=t.touches[0],r=Math.abs(e.touch.coors.x-n.pageX),o=Math.abs(e.touch.coors.y-n.pageY),i=r>o&&r>e.touch.threshold;if(!0===i||r>e.touch.threshold||o>e.touch.threshold){e.touch.isSwiping=i;var a=e.touch.coors.x-n.pageX;e.touch.coors.x=n.pageX,e.setState({position:e.state.position-a})}!0===e.touch.isSwiping&&t.preventDefault()},this.handleTouchEnd=function(t){e.slideToPosition(e.state.position),e.touch.coors.x=0,e.touch.coors.y=0,e.touch.isSwiping=!1,e.touch.started=!1},this.slideToPosition=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.props,r=Math.min(n.visibleWidth-n.totalWidth,0);e.setState({position:Math.max(Math.min(0,t),r),maxPosition:r})},this.updateSlide=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.props;t===x.default.RIGHT?e.slideToPosition(e.state.position-n.visibleWidth+n.labelWidth,n):t===x.default.LEFT&&e.slideToPosition(e.state.position+n.visibleWidth-n.labelWidth,n)},this.centerEvent=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.props,r=n.events[t];e.slideToPosition(-r.distance)}};t.default=O},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=r(o),a=n(1),u=(r(a),n(10),n(20)),s=r(u),l=function(e){var t=e.events,n=e.selectedIndex,r=e.styles,o=e.handleDateClick,a=e.labelWidth;return i.default.createElement("ol",{className:"events-bar",style:{listStyle:"none"}},t.map(function(e,t){return i.default.createElement(s.default,{distanceFromOrigin:e.distance,label:e.label,date:e.date,index:t,key:t,onClick:o,selected:n,styles:r,labelWidth:a})}))};t.default=l},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),l=r(s),c=n(1),f=(r(c),n(3)),d=r(f),p={links:{position:"absolute",bottom:0,textAlign:"center",paddingBottom:15},base:{position:"absolute",bottom:-5,height:12,width:12,borderRadius:"50%",transition:"background-color 0.3s, border-color 0.3s",":hover":{}},future:function(e){return{backgroundColor:e.background,border:"2px solid "+e.outline}},past:function(e){return{backgroundColor:e.background,border:"2px solid "+e.foreground}},present:function(e){return{backgroundColor:e.foreground,border:"2px solid "+e.foreground}}},h=function(e){function t(){var e,n,r,a;o(this,t);for(var u=arguments.length,s=Array(u),l=0;l<u;l++)s[l]=arguments[l];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.__getDotStyles__=function(e,t){var n={backgroundColor:r.props.styles.foreground,border:"2px solid "+r.props.styles.foreground};return[p.base,{left:r.props.labelWidth/2-p.base.width/2},p[e](r.props.styles),d.default.getState(r.state,t,":hover")||d.default.getState(r.state,"dot-dot",":hover")?n:void 0]},a=n,i(r,a)}return a(t,e),u(t,[{key:"render",value:function(){var e=this,t="future";return this.props.index<this.props.selected?t="past":this.props.index===this.props.selected&&(t="present"),l.default.createElement("li",{key:this.props.date,id:"timeline-dot-"+this.props.date,className:t+" dot-label",onClick:function(){return e.props.onClick(e.props.index)},style:[p.links,{left:this.props.distanceFromOrigin-this.props.labelWidth/2,cursor:"pointer",width:this.props.labelWidth,":hover":{}}]},this.props.label,l.default.createElement("span",{key:"dot-dot",style:this.__getDotStyles__(t,this.props.date)}))}}]),t}(l.default.Component);t.default=(0,d.default)(h)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=r(o),a=n(1),u=(r(a),n(9)),s=function(e){var t=e.left,n=e.width,r=e.fillingMotion,o=e.backgroundColor;return i.default.createElement(u.Motion,{style:{tWidth:(0,u.spring)(n,r),tLeft:(0,u.spring)(t,r)}},function(e){var t=e.tWidth,n=e.tLeft;return i.default.createElement("span",{"aria-hidden":"true",className:"timeline-eventline",style:{position:"absolute",left:n+"px",top:0,height:"100%",width:t+"px",transformOrigin:"left center",backgroundColor:o}})})};t.default=s},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=r(i),u=n(1),s=(r(u),n(3)),l=r(s),c=n(23),f=r(c),d={base:{top:"50%",position:"absolute",bottom:"auto",transform:"translateY(-50%)",height:"100%",width:20,overflow:"hidden"},specific:function(e,t,n){var r;return r={},o(r,t,40),o(r,"backgroundImage","linear-gradient(to "+n+", "+e.background+", "+(0,f.default)(e.background).alpha(0).rgb()+")"),r}},p=function(e){return a.default.createElement("ul",{style:{listStyle:"none"}},a.default.createElement("li",{style:[d.base,d.specific(e.styles,"left","right")]}),a.default.createElement("li",{style:[d.base,d.specific(e.styles,"right","left")]}))};t.default=(0,l.default)(p)},function(e,t){e.exports=require("color")},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=r(i),u=n(1),s=(r(u),n(3)),l=r(s),c=n(7),f=r(c),d=n(25),p=r(d),h=n(26),y=r(h),b={link:function(e){return{position:"absolute",top:"49px",bottom:"auto",transform:"translateY(-50%)",height:34,width:34,borderRadius:"50%",border:"2px solid "+e.outline,overflow:"hidden",textIndent:"100%",whiteSpace:"nowrap",transition:"border-color 0.3s"}},icon:function(e,t){return{position:"absolute",left:0,top:"50%",bottom:"auto",transform:"translateY(-50%)",height:20,width:29,overflow:"hidden",textIndent:"100%",whiteSpace:"nowrap",fill:t?e.foreground:e.outline}},inactive:function(e){return{color:e.outline,cursor:"not-allowed",":hover":{border:"2px solid "+e.outline}}},active:function(e){return{cursor:"pointer",":hover":{border:"2px solid "+e.foreground,color:e.foreground}}}},v=function(e){var t=Math.round(e.position)<0,n=Math.round(e.position)>Math.round(e.maxPosition),r=[b.link(e.styles),t?b.active(e.styles):b.inactive(e.styles)];return a.default.createElement("ul",{className:"buttons"},a.default.createElement("li",{className:"button-back "+(t?"enabled":"disabled"),key:f.default.LEFT,onClick:function(){return e.updateSlide(f.default.LEFT)},style:[].concat(r,[o({},f.default.LEFT,0)])},a.default.createElement(p.default,{style:b.icon(e.styles,t)})),a.default.createElement("li",{className:"button-forward "+(n?"enabled":"disabled"),key:f.default.RIGHT,onClick:function(){return e.updateSlide(f.default.RIGHT)},style:[].concat(r,[o({},f.default.RIGHT,0)])},a.default.createElement(y.default,{style:b.icon(e.styles,n)})))};t.default=(0,l.default)(v)},function(e,t){e.exports=require("react-icons/lib/fa/angle-left")},function(e,t){e.exports=require("react-icons/lib/fa/angle-right")}]);