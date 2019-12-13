(function(){/*

 Copyright 2017 Google Inc. All Rights Reserved.

 Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.

  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
*/
'use strict';const e="onabort onactivate onactivateinvisible onafterprint onafterupdate onanimationcancel onanimationend onanimationiteration onanimationstart onariarequest onauxclick onbeforeactivate onbeforecopy onbeforecut onbeforedeactivate onbeforeeditfocus onbeforepaste onbeforeprint onbeforeunload onbegin onblur onbounce oncancel oncanplay oncanplaythrough oncellchange onchange onclick onclose oncommand oncontextmenu oncontrolselect oncopy oncuechange oncut ondataavailable ondatasetchanged ondatasetcomplete ondblclick ondeactivate ondrag ondragdrop ondragend ondragenter ondragexit ondragleave ondragover ondragstart ondrop ondurationchange onemptied onend onended onerror onerrorupdate onexit onfilterchange onfinish onfocus onfocusin onfocusout onformdata onfullscreenchange onfullscreenerror ongotpointercapture onhelp oninput oninvalid onkeydown onkeypress onkeyup onlayoutcomplete onload onloadeddata onloadedmetadata onloadend onloadstart onlosecapture onlostpointercapture onmediacomplete onmediaerror onmessage onmousedown onmouseenter onmouseleave onmousemove onmouseout onmouseover onmouseup onmousewheel onmove onmoveend onmovestart onmozfullscreenchange onmozfullscreenerror onmscontentzoom onmsgesturechange onmsgesturedoubletap onmsgestureend onmsgesturehold onmsgesturestart onmsgesturetap onmsgotpointercapture onmsinertiastart onmslostpointercapture onmsmanipulationstatechanged onmspointercancel onmspointerdown onmspointerenter onmspointerleave onmspointermove onmspointerout onmspointerover onmspointerup onoffline ononline onoutofsync onoverscroll onpaste onpause onplay onplaying onpointercancel onpointerdown onpointerenter onpointerleave onpointermove onpointerout onpointerover onpointerrawupdate onpointerup onprogress onpropertychange onratechange onreadystatechange onrepeat onreset onresize onresizeend onresizestart onresume onreverse onrowdelete onrowenter onrowexit onrowinserted onscroll onscrollend onsearch onseek onseeked onseeking onselect onselectionchange onselectstart onshow onstalled onstart onstop onstorage onsubmit onsuspend onsynchrestored ontimeerror ontimeupdate ontoggle ontrackchange ontransitioncancel ontransitionend ontransitionrun ontransitionstart onunload onurlflip onvolumechange onwaiting onwebkitanimationend onwebkitanimationiteration onwebkitanimationstart onwebkitfullscreenchange onwebkitfullscreenerror onwebkittransitionend onwheel".split(" ");
function G(){if("undefined"!==typeof window){const m=[];for(const t in HTMLElement.prototype)"on"===t.slice(0,2)&&m.push(t);return m}return e};const L="undefined"!==typeof window,M=()=>{throw new TypeError("undefined conversion");},U=()=>null,{toLowerCase:V,toUpperCase:aa}=String.prototype;function W(){throw new TypeError("Illegal constructor");}function X(){throw new TypeError("Illegal constructor");}
const {m:Y}=function(){function m(a){let b=H.get(a);void 0===b&&(b=r(null),H.set(a,b));return b}function t(a){const b=N(a);if(null==b||N(b)!==O)throw Error();for(const d of I(b))w(a,d,{value:a[d]});return a}function x(a,b){h(a.prototype);delete a.name;w(a,"name",{value:b})}function B(a){return b=>b instanceof a&&H.has(b)}function ba(a,b){function d(n,J){const ca=b[J]||("default"==a?U:M),da=h(new n(C,a));return h({[J](k,...D){k=ca(""+k,...D);if(void 0===k||null===k){if("default"==a)return k;k=""}k=
""+k;D=h(r(da));m(D).v=k;return D}}[J])}const c=r(W.prototype);for(const n of I(E))c[n]=d(E[n],n);w(c,"name",{value:a,writable:!1,configurable:!1,enumerable:!0});return h(c)}function P(a,b,d,c="",n=""){a=aa.apply(String(a));(c=n?n:c)||(c="http://www.w3.org/1999/xhtml");if(c=y.apply(g,[c])?g[c]:null){if(y.apply(c,[a])&&c[a]&&y.apply(c[a][b],[d])&&c[a][b][d])return c[a][b][d];if(y.apply(c,["*"])&&y.apply(c["*"][b],[d])&&c["*"][b][d])return c["*"][b][d]}}function Q(){return z}const {assign:ea,create:r,
defineProperty:w,freeze:h,getOwnPropertyNames:I,getPrototypeOf:N,prototype:O}=Object,{hasOwnProperty:y}=O,{forEach:fa,push:ha}=Array.prototype,C=Symbol(),H=t(new WeakMap),u=t([]),K=t([]);let R=!0,z=null,F=!1;class A{constructor(a,b){if(a!==C)throw Error("cannot call the constructor");w(this,"policyName",{value:b,enumerable:!0})}toString(){return m(this).v}valueOf(){return m(this).v}}class f extends A{}x(f,"TrustedURL");class p extends A{}x(p,"TrustedScriptURL");class q extends A{}x(q,"TrustedHTML");
class l extends A{}x(l,"TrustedScript");x(A,"TrustedType");const S=h(r(new q(C,"")));m(S).v="";const T=h(r(new l(C,"")));m(T).v="";const g={["http://www.w3.org/1999/xhtml"]:{A:{attributes:{href:f.name}},AREA:{attributes:{href:f.name}},BASE:{attributes:{href:f.name}},BUTTON:{attributes:{formaction:f.name}},EMBED:{attributes:{src:p.name}},FORM:{attributes:{action:f.name}},FRAME:{attributes:{src:f.name}},IFRAME:{attributes:{src:f.name,srcdoc:q.name}},INPUT:{attributes:{formaction:f.name}},OBJECT:{attributes:{data:p.name,
codebase:p.name}},SCRIPT:{attributes:{src:p.name,text:l.name},properties:{innerText:l.name,textContent:l.name,text:l.name}},"*":{attributes:{},properties:{innerHTML:q.name,outerHTML:q.name}}},["http://www.w3.org/1999/xlink"]:{"*":{attributes:{href:f.name},properties:{}}},["http://www.w3.org/2000/svg"]:{"*":{attributes:{href:f.name},properties:{}}}};var v={codebase:"codeBase",formaction:"formAction"};!L||"srcdoc"in HTMLIFrameElement.prototype||delete g["http://www.w3.org/1999/xhtml"].IFRAME.attributes.srcdoc;
for(const a of Object.keys(g["http://www.w3.org/1999/xhtml"])){g["http://www.w3.org/1999/xhtml"][a].properties||(g["http://www.w3.org/1999/xhtml"][a].properties={});for(const b of Object.keys(g["http://www.w3.org/1999/xhtml"][a].attributes))g["http://www.w3.org/1999/xhtml"][a].properties[v[b]?v[b]:b]=g["http://www.w3.org/1999/xhtml"][a].attributes[b]}for(const a of G())g["http://www.w3.org/1999/xhtml"]["*"].attributes[a]="TrustedScript",g["http://www.w3.org/2000/svg"]["*"].attributes[a]="TrustedScript";
const E={createHTML:q,createScriptURL:p,createURL:f,createScript:l},ia=E.hasOwnProperty;v=r(X.prototype);ea(v,{createPolicy:function(a,b){if(!a.match(/^[-#a-zA-Z0-9=_/@.%]+$/g))throw new TypeError("Policy "+a+" contains invalid characters.");if(F&&-1===K.indexOf(a))throw new TypeError("Policy "+a+" disallowed.");if("default"===a&&z)throw new TypeError("Policy "+a+" already exists.");if(F&&!R&&-1!==u.indexOf(a))throw new TypeError("Policy "+a+" exists.");u.push(a);const d=r(null);if(b&&"object"===
typeof b)for(const c of I(b))ia.call(E,c)&&(d[c]=b[c]);else console.warn("trustedTypes.createPolicy "+a+" was given an empty policy");h(d);b=ba(a,d);"default"===a&&(z=b);return b},getPolicyNames:function(){return u.slice()},h:B(q),l:B(f),j:B(p),i:B(l),c:function(a,b,d="",c=""){b=V.apply(String(b));return P(a,"attributes",b,d,c)||null},f:function(a,b,d=""){return P(a,"properties",String(b),d)||null},g:function(a=""){if(!a)try{a=document.documentElement.namespaceURI}catch(b){a="http://www.w3.org/1999/xhtml"}return(a=
g[a])?JSON.parse(JSON.stringify(a)):{}},a:S,b:T,s:z,TrustedHTML:q,TrustedURL:f,TrustedScriptURL:p,TrustedScript:l});w(v,"defaultPolicy",{get:Q,set:()=>{}});return{m:h(v),B:function(a,b){F=!0;K.length=0;fa.call(a,d=>{ha.call(K,""+d)});R=b;u.length=0},o:function(){F=!1},u:Q,w:function(){z=null;u.splice(u.indexOf("default"),1)}}}();if("undefined"!==typeof window&&(window.TrustedTypes&&"undefined"===typeof window.trustedTypes&&(window.trustedTypes=Object.freeze(window.TrustedTypes)),"undefined"===typeof window.trustedTypes)){var Z=Object.create(X.prototype);Object.assign(Z,{isHTML:Y.h,isURL:Y.l,isScriptURL:Y.j,isScript:Y.i,createPolicy:Y.createPolicy,getPolicyNames:Y.getPolicyNames,getAttributeType:Y.c,getPropertyType:Y.f,getTypeMapping:Y.g,emptyHTML:Y.a,emptyScript:Y.b,_isPolyfill_:!0});Object.defineProperty(Z,"defaultPolicy",
Object.getOwnPropertyDescriptor(Y,"defaultPolicy")||{});window.trustedTypes=Object.freeze(Z);window.TrustedHTML=Y.TrustedHTML;window.TrustedURL=Y.TrustedURL;window.TrustedScriptURL=Y.TrustedScriptURL;window.TrustedScript=Y.TrustedScript;window.TrustedTypePolicy=W;window.TrustedTypePolicyFactory=X};}).call(this);

//# sourceMappingURL=trustedtypes.api_only.build.js.map
