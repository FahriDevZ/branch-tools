(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"54sG":function(e,t,r){"use strict";r.r(t);var a=r("q1tI"),n=r.n(a),i=r("hlFM"),c=r("kKAo"),s=r("nOHt"),o=r("e45s"),l=r.n(o),u=r("hfKm"),f=r.n(u),m=r("2Eek"),d=r.n(m),p=r("XoMD"),h=r.n(p),b=r("Jo+v"),v=r.n(b),k=r("4mXO"),y=r.n(k),O=r("pLtp"),g=r.n(O),x=r("kOwS"),j=r("vYYK"),w=r("qNsG"),N=r("iuhU"),D=r("wx14"),E=r("Ff2n"),S=(r("17x9"),r("H2TA")),M=r("NqtD");function F(e){var t,r,a;return t=e,r=0,a=1,e=(Math.min(Math.max(r,t),a)-r)/(a-r),e=(e-=1)*e*e+1}var G=a.forwardRef((function(e,t){var r,n=e.classes,i=e.className,c=e.color,s=void 0===c?"primary":c,o=e.disableShrink,l=void 0!==o&&o,u=e.size,f=void 0===u?40:u,m=e.style,d=e.thickness,p=void 0===d?3.6:d,h=e.value,b=void 0===h?0:h,v=e.variant,k=void 0===v?"indeterminate":v,y=Object(E.a)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),O={},g={},x={};if("determinate"===k||"static"===k){var j=2*Math.PI*((44-p)/2);O.strokeDasharray=j.toFixed(3),x["aria-valuenow"]=Math.round(b),"static"===k?(O.strokeDashoffset="".concat(((100-b)/100*j).toFixed(3),"px"),g.transform="rotate(-90deg)"):(O.strokeDashoffset="".concat((r=(100-b)/100,r*r*j).toFixed(3),"px"),g.transform="rotate(".concat((270*F(b/70)).toFixed(3),"deg)"))}return a.createElement("div",Object(D.a)({className:Object(N.a)(n.root,i,"inherit"!==s&&n["color".concat(Object(M.a)(s))],{indeterminate:n.indeterminate,static:n.static}[k]),style:Object(D.a)({width:f,height:f},g,{},m),ref:t,role:"progressbar"},x,y),a.createElement("svg",{className:n.svg,viewBox:"".concat(22," ").concat(22," ").concat(44," ").concat(44)},a.createElement("circle",{className:Object(N.a)(n.circle,l&&n.circleDisableShrink,{indeterminate:n.circleIndeterminate,static:n.circleStatic}[k]),style:O,cx:44,cy:44,r:(44-p)/2,fill:"none",strokeWidth:p})))})),I=Object(S.a)((function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},"@keyframes circular-rotate":{"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(G),X=n.a.createElement;function P(e,t){var r=g()(e);if(y.a){var a=y()(e);t&&(a=a.filter((function(t){return v()(e,t).enumerable}))),r.push.apply(r,a)}return r}var T=l()((function(e){return{gutters:{margin:e.spacing(2)},center:{textAlign:"center",marginTop:e.spacing(2),marginBottom:e.spacing(2)},circularIndeterminate:{animation:"$mui-progress-circular-rotate 1s linear infinite"},"@keyframes mui-progress-circular-rotate":{"100%":{transform:"rotate(360deg)"}}}})),_=function(e){var t,r=T(),a=e.classes,n=e.className,i=e.style,c=e.disableGutters,s=e.center,o=e.color,l=Object(w.a)(e,["classes","className","style","disableGutters","center","color"]),u={indeterminate:r.circularIndeterminate};if(a){var m=a.indeterminate;u=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){Object(j.a)(e,t,r[t])})):h.a?d()(e,h()(r)):P(Object(r)).forEach((function(t){f()(e,t,v()(r,t))}))}return e}({},u,{},Object(w.a)(a,["indeterminate"])),m&&(u.indeterminate=Object(N.a)(u.indeterminate,m))}return X("div",{style:i,className:Object(N.a)((t={},Object(j.a)(t,r.center,s),Object(j.a)(t,r.gutters,!c),t),n)},X(I,Object(x.a)({size:55,color:o||"secondary",classes:u},l)))},U=r("/MKj"),q=r("k/h2"),z=n.a.createElement,H=Object(U.b)(),K=l()({paper:{margin:100,padding:50}});t.default=H((function(e){var t=e.dispatch,r=K(),a=Object(s.useRouter)();return n.a.useEffect((function(){t(Object(q.a)(null)),a.replace("/login")})),z(i.a,{my:8},z(c.a,{className:r.paper},z(_,{size:60,center:!0,disableGutters:!0,disableShrink:!0})))}))},UXZV:function(e,t,r){e.exports=r("UbbE")},UbbE:function(e,t,r){r("o8NH"),e.exports=r("WEpk").Object.assign},iyT4:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/logout",function(){return r("54sG")}])},kOwS:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var a=r("UXZV"),n=r.n(a);function i(){return(i=n.a||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}},o8NH:function(e,t,r){var a=r("Y7ZC");a(a.S+a.F,"Object",{assign:r("kwZ1")})},qNsG:function(e,t,r){"use strict";var a=r("4mXO"),n=r.n(a),i=r("pLtp"),c=r.n(i);function s(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,n={},i=c()(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(n.a){var s=n()(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}r.d(t,"a",(function(){return s}))}},[["iyT4",1,2,0,4,3,7,5]]]);