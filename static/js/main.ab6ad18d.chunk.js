(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{16:function(e,t,r){e.exports={root:"style_root__1mJHd",portal:"style_portal__31hIw",icons:"style_icons__2qzfH"}},17:function(e,t,r){e.exports={root:"style_root__1LiaP",title:"style_title__3RKs7",description:"style_description__IJtMU","example-enter":"style_example-enter__30pgF","example-enter-active":"style_example-enter-active__ERZHV","example-leave":"style_example-leave__1sTEZ","example-leave-active":"style_example-leave-active__R7Mxu"}},18:function(e,t,r){e.exports={root:"style_root__3L6Pf",grain:"style_grain__3KJk9",body:"style_body__2N-pR",main:"style_main__Sxp9y"}},25:function(e,t,r){e.exports={root:"style_root__23Yiu",spin:"style_spin__1otvR",img:"style_img__D36Iy",backSpin:"style_backSpin__2sQle"}},43:function(e,t,r){},44:function(e,t,r){},45:function(e,t,r){"use strict";r.r(t);var n=r(1),l=r(0),a=r.n(l),i=r(14),c=r.n(i),o=r(9),s=r(3),u=r(30),f=r(10),d=r(28),p=(r(22),r(29),r(13)),j="works/GET_WORKS",h="works/GET_WORKS_SUCCESS",m="works/GET_WORKS_FAILURE",b={data:[],loading:!0,error:{}},v=Object(f.c)({works:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(p.a)(Object(p.a)({},e),{},{loading:!0});case h:return{data:t.payload,loading:!1,error:{}};case m:return Object(p.a)(Object(p.a)({},e),{},{loading:!1,error:t.error});default:return e}}}),O=Object(f.d)(v,{},Object(f.a)(d.a));function g(){var e=Object(s.f)().pathname;return Object(l.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}r(43);var y=r(31),w="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAABQCAYAAABS6IaaAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIgSURBVHgB7ZyNbdtADIXpogN0BHeDZIN0gqYTVN0gncDOBE0nUDtBkgnkDZINpA2cDV7eQTLgIE6iO1M2afADCBkGDNzn47N0+rHICABcsFrWgvVFvDMINXhJEvwpHkmzwvqD90mCc/HC0G5rjKc2LbiVoxLSF7EQS6RvG69zVEoLK/njQK5QPlNv0cBCe6KftX/Qp7Yk2ECXlnUlFuBAKui3ZwtD+Vsi76d/DDUifwdgEGyhSwtD7TlV/r6LBdDnT5saJ56/BSwsjziIM0T+igTncmzQt2fkrwAbyyMO5BKRv2weEIdnB2AQvIUuLUqWR5hgh4npdg9nJYNQDy30T09UnySPOStlRDW0s9nshptvrP+iRK7YhjTVLRRDS7mOVfHlV9aj7Emp2IaK1UBxpzkInvPlL1YnUzNk7KPQTpG/ktMT1b4zts1c+vzdKudvyU2awbucz2mKbbhkXYgiqT25+ZvzmSnETBBi3ggxb4SYN0LMGyHmjRDzRoh5I8S8EWLeCDFvhJg3phDrWCs5MppiT6xr1vlwgvOofBYd0lnaJYWexAj7iq1Y1xRaiTFKxTrWbwplXSg4JLliqdVS291Yartd5Iilq4wmfhjGMFqMQntfPj0ksYP2Roh5I8S8EWLeCDFvnKrY+tTEOtYPHtfea62gj42b5dQr0D+nvYsaFu7gLmWHWJPeE+9sia3h9U8cdoH+Ua50t+mo2+SfAVDlHLLmvaWDAAAAAElFTkSuQmCC";function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var C=l.createElement("path",{d:"M1.25 1.21058L26 15.5L1.25 29.7894L1.25 1.21058Z",stroke:"white"});function L(e,t){var r=e.title,n=e.titleId,a=_(e,["title","titleId"]);return l.createElement("svg",x({width:27,height:31,viewBox:"0 0 27 31",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},a),r?l.createElement("title",{id:n},r):null,C)}var E=l.forwardRef(L),A=(r.p,"/"),I="/works",V="/about",H="/service",k=r(5),S=r.n(k),N=[{id:1,name:"About us",route:V},{id:2,name:"Service",route:H},{id:3,name:"Works",route:I}];var P=function(){var e=Object(s.f)().pathname;return Object(n.jsxs)("div",{className:S.a.root,children:[Object(n.jsx)("div",{className:S.a.logo,children:Object(n.jsx)(o.b,{to:A,className:S.a.link,children:Object(n.jsx)("img",{src:w,alt:"",className:S.a.img})})}),Object(n.jsxs)("div",{className:S.a.menu,children:[Object(n.jsx)("div",{className:S.a.nav,children:N.map((function(t){return Object(n.jsxs)(o.b,{to:t.route,className:e===t.route?"".concat(S.a.selectedNavItem," ").concat(S.a.link):"".concat(S.a.navItem," ").concat(S.a.link),children:[t.name,e===t.route?Object(n.jsx)("div",{className:S.a.gradient}):null]},t.id)}))}),Object(n.jsxs)("div",{className:S.a.question,children:[Object(n.jsx)("div",{className:S.a.questionText,children:"Question"}),Object(n.jsx)(E,{})]})]})]})};function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function B(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var R=l.createElement("g",{clipPath:"url(#clip0)"},l.createElement("path",{d:"M18 132.981V131.204H1.91012V115.977H10.5843V130.102H12.4045V114.222H0.0224762V132.981H18Z",fill:"white"}),l.createElement("path",{d:"M18 110.222V108.445H1.91011V93.2403H16.1798V107.366H18V91.4634H0V110.222H18Z",fill:"white"}),l.createElement("path",{d:"M17.9775 41.5405V39.7636H12.4045V25.5706H10.6292V39.7636H1.91011V24.5584H18V22.7815H0V41.5405H17.9775Z",fill:"white"}),l.createElement("path",{d:"M17.9775 0H16.2247V16.9596L0 17.0271V18.7815L17.9775 18.759V0Z",fill:"white"}),l.createElement("path",{d:"M0 45.5405V64.2995H1.91011V55.8197H17.9775V54.0428H1.91011V45.5405H0Z",fill:"white"}),l.createElement("path",{d:"M12.4494 68.7044H0V87.4634H18V85.6865H1.91011V70.4814H10.5843V84.5844H12.4494L12.427 76.1496L18 70.8188L17.9775 68.2996L12.4045 73.6304L12.4494 68.7044Z",fill:"white"})),D=l.createElement("defs",null,l.createElement("clipPath",{id:"clip0"},l.createElement("rect",{width:18,height:133,fill:"white"})));function T(e,t){var r=e.title,n=e.titleId,a=B(e,["title","titleId"]);return l.createElement("svg",M({width:18,height:133,viewBox:"0 0 18 133",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},a),r?l.createElement("title",{id:n},r):null,R,D)}var Z=l.forwardRef(T);r.p;function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function U(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var Y=l.createElement("path",{d:"M16 11.7646C13.6595 11.7646 11.7647 13.6615 11.7647 15.9999C11.7647 18.3404 13.6616 20.2352 16 20.2352C18.3405 20.2352 20.2353 18.3384 20.2353 15.9999C20.2353 13.6595 18.3384 11.7646 16 11.7646ZM16 18.749C14.4807 18.749 13.251 17.5185 13.251 15.9999C13.251 14.4813 14.4814 13.2509 16 13.2509C17.5186 13.2509 18.749 14.4813 18.749 15.9999C18.7497 17.5185 17.5193 18.749 16 18.749Z",fill:"white"}),K=l.createElement("path",{d:"M19.2988 8.05026C17.8268 7.98159 14.1808 7.98492 12.7075 8.05026C11.4128 8.11092 10.2708 8.42358 9.35015 9.34423C7.81148 10.8829 8.00815 12.9562 8.00815 15.9968C8.00815 19.1087 7.83482 21.134 9.35015 22.6493C10.8948 24.1933 12.9982 23.9913 16.0028 23.9913C19.0855 23.9913 20.1495 23.9933 21.2395 23.5713C22.7215 22.996 23.8402 21.6714 23.9495 19.2921C24.0188 17.8194 24.0148 14.1741 23.9495 12.7008C23.8175 9.89222 22.3102 8.18892 19.2988 8.05026ZM21.6288 21.6314C20.6202 22.64 19.2208 22.55 15.9835 22.55C12.6502 22.55 11.3135 22.5993 10.3382 21.6214C9.21482 20.5034 9.41815 18.7081 9.41815 15.9861C9.41815 12.3028 9.04015 9.65023 12.7368 9.4609C13.5862 9.4309 13.8362 9.4209 15.9742 9.4209L16.0042 9.4409C19.5568 9.4409 22.3442 9.06891 22.5115 12.7648C22.5495 13.6082 22.5582 13.8615 22.5582 15.9961C22.5575 19.2907 22.6202 20.6354 21.6288 21.6314Z",fill:"white"}),W=l.createElement("path",{d:"M20.2353 12.7058C20.7551 12.7058 21.1765 12.2845 21.1765 11.7647C21.1765 11.2449 20.7551 10.8235 20.2353 10.8235C19.7155 10.8235 19.2941 11.2449 19.2941 11.7647C19.2941 12.2845 19.7155 12.7058 20.2353 12.7058Z",fill:"white"}),F=l.createElement("circle",{cx:16,cy:16,r:15.5,stroke:"white"});function q(e,t){var r=e.title,n=e.titleId,a=U(e,["title","titleId"]);return l.createElement("svg",Q({width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},a),r?l.createElement("title",{id:n},r):null,Y,K,W,F)}var J=l.forwardRef(q);r.p;function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function G(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var X=l.createElement("path",{d:"M20.5286 7.16435L18.0647 7.1604C15.2966 7.1604 13.5078 8.99571 13.5078 11.8363V13.9922H11.0305C10.8164 13.9922 10.643 14.1658 10.643 14.3799V17.5035C10.643 17.7176 10.8166 17.891 11.0305 17.891H13.5078V25.773C13.5078 25.9871 13.6811 26.1604 13.8952 26.1604H17.1274C17.3415 26.1604 17.5148 25.9869 17.5148 25.773V17.891H20.4114C20.6254 17.891 20.7988 17.7176 20.7988 17.5035L20.8 14.3799C20.8 14.2771 20.7591 14.1786 20.6865 14.1059C20.614 14.0332 20.5151 13.9922 20.4124 13.9922H17.5148V12.1646C17.5148 11.2862 17.7241 10.8403 18.8684 10.8403L20.5282 10.8397C20.7421 10.8397 20.9154 10.6662 20.9154 10.4523V7.55177C20.9154 7.3381 20.7423 7.16475 20.5286 7.16435Z",fill:"white"}),$=l.createElement("circle",{cx:16,cy:16,r:15.5,stroke:"white"});function ee(e,t){var r=e.title,n=e.titleId,a=G(e,["title","titleId"]);return l.createElement("svg",z({width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},a),r?l.createElement("title",{id:n},r):null,X,$)}var te=l.forwardRef(ee);r.p;function re(){return(re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function ne(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var le=l.createElement("path",{d:"M9.41886 19.6487L13.327 16.8309C13.5911 16.6456 13.9546 16.6432 14.2212 16.8286L17.113 18.9308C17.9798 19.5357 19.2204 19.3223 19.7981 18.4695L23.433 13.0791C23.7841 12.5646 23.1017 11.983 22.5811 12.3514L18.6748 15.1196C18.4107 15.305 18.0472 15.3073 17.7807 15.1219L14.8888 13.0688C14.022 12.4639 12.7815 12.6771 12.2037 13.5299L8.56698 18.9208C8.21589 19.4354 8.89826 20.0172 9.41886 19.6487Z",fill:"white"}),ae=l.createElement("path",{d:"M7.65006 27.7149L7.62475 27.462L7.40555 27.3334C3.22298 24.8796 0.5 20.7065 0.5 16C0.5 8.53613 7.37894 2.38232 16 2.38232C24.6211 2.38232 31.5 8.53613 31.5 16C31.5 23.4638 24.6211 29.6176 16 29.6176C14.4065 29.6176 12.8702 29.4064 11.425 29.0145C11.2193 28.9588 11.013 29.0015 10.8745 29.041C10.7188 29.0853 10.5523 29.155 10.3873 29.2342C10.0562 29.3932 9.67217 29.6198 9.29258 29.8555C9.02621 30.0208 8.76444 30.1886 8.51742 30.347C8.31661 30.4757 8.12554 30.5982 7.94969 30.708L7.65006 27.7149Z",stroke:"white"});function ie(e,t){var r=e.title,n=e.titleId,a=ne(e,["title","titleId"]);return l.createElement("svg",re({width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},a),r?l.createElement("title",{id:n},r):null,le,ae)}var ce=l.forwardRef(ie),oe=(r.p,r(16)),se=r.n(oe);var ue=function(){return Object(n.jsxs)("div",{className:se.a.root,children:[Object(n.jsx)(Z,{className:se.a.portal}),Object(n.jsxs)("div",{className:se.a.icons,children:[Object(n.jsx)(J,{}),Object(n.jsx)(te,{}),Object(n.jsx)(ce,{})]})]})},fe=r(25),de=r.n(fe);var pe=function(){return Object(n.jsx)("div",{className:de.a.root,children:Object(n.jsx)("img",{src:w,alt:"",className:de.a.img})})},je=r(17),he=r.n(je);function me(){return(me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function be(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var ve=l.createElement("path",{d:"M145.86 144.31L492.24 345.845L490.32 746.511L577.395 696.728L579.336 296.113L232.935 94.5269L145.86 144.31Z",stroke:"white",strokeLinejoin:"round"}),Oe=l.createElement("path",{d:"M230.563 595.318L317.638 545.535L318.572 345.213L232.001 294.849L230.563 595.318Z",stroke:"white",strokeLinejoin:"round"}),ge=l.createElement("path",{d:"M230.563 595.318L143.97 544.904L145.86 144.309L492.24 345.845L490.32 746.511L403.727 696.096L405.165 395.628L232.001 294.849L230.563 595.318Z",stroke:"white",strokeLinejoin:"round"});function ye(e,t){var r=e.title,n=e.titleId,a=be(e,["title","titleId"]);return l.createElement("svg",me({width:728,height:841,viewBox:"0 0 728 841",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},a),r?l.createElement("title",{id:n},r):null,ve,Oe,ge)}var we=l.forwardRef(ye);r.p;var xe=function(){return Object(n.jsxs)("div",{className:he.a.root,children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:he.a.title,children:"Lorem Ipsum"}),Object(n.jsx)("h2",{className:he.a.description,children:"Lorem Ipsum dolorum Lorem Ipsum dolorum Lorem"})]}),Object(n.jsx)(we,{})]})};var _e=function(){return Object(n.jsx)("div",{style:{color:"white"},children:"Works"})};var Ce=function(){return Object(n.jsx)("div",{style:{color:"white"},children:"About us"})};var Le=function(){return Object(n.jsx)("div",{style:{color:"white"},children:"Service"})};var Ee=function(){return Object(n.jsx)("div",{className:"main-main-main",style:{color:"white"},children:"error 404: Page not found"})},Ae=r(18),Ie=r.n(Ae);function Ve(){var e=Object(l.useState)(!0),t=Object(y.a)(e,2),r=t[0],a=t[1];return Object(l.useEffect)((function(){setTimeout((function(){return a(!1)}),1500)}),[]),Object(n.jsx)("div",{className:Ie.a.root,children:r?Object(n.jsx)(pe,{}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(P,{}),Object(n.jsxs)("div",{className:Ie.a.body,children:[Object(n.jsx)(ue,{}),Object(n.jsx)("main",{className:Ie.a.main,children:Object(n.jsxs)(s.c,{children:[Object(n.jsx)(s.a,{exact:!0,path:A,component:xe}),Object(n.jsx)(s.a,{path:I,component:_e}),Object(n.jsx)(s.a,{path:V,component:Ce}),Object(n.jsx)(s.a,{path:H,component:Le}),Object(n.jsx)(s.a,{path:"*",component:Ee})]})})]})]})})}r(44);var He=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(Ve,{})})},ke=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,46)).then((function(t){var r=t.getCLS,n=t.getFID,l=t.getFCP,a=t.getLCP,i=t.getTTFB;r(e),n(e),l(e),a(e),i(e)}))};c.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(u.a,{store:O,children:Object(n.jsxs)(o.a,{children:[Object(n.jsx)(g,{}),Object(n.jsx)(s.a,{path:"/",component:He})]})})}),document.getElementById("root")),ke()},5:function(e,t,r){e.exports={root:"style_root__2P7oQ",logo:"style_logo__3dpRs",menu:"style_menu__2Dkjj",img:"style_img__2JfZL",nav:"style_nav__1p8YO",navItem:"style_navItem__1yVUH",selectedNavItem:"style_selectedNavItem__2QCKg",gradient:"style_gradient__26sIC",link:"style_link__3MfPW",question:"style_question__Wo08u",questionText:"style_questionText__1rP5H"}}},[[45,1,2]]]);
//# sourceMappingURL=main.ab6ad18d.chunk.js.map