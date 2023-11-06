import{s as oe,c as F,e as G,n as v,d as ue,j as fe,b as J,f as R}from"../chunks/scheduler.1971f013.js";import{S as re,i as ie,r as H,u as N,v as T,d as b,t as q,w as y,x as ce,y as he,j as Q,f as w,k as V,a as S,g as E,s as M,h as I,c as A,B as K,z as p,A as de,b as O,p as P,K as X,D as me,E as Y}from"../chunks/index.e71553f2.js";import{h as _e,u as ge}from"../chunks/await_block.d32935fa.js";import{j as pe,e as x,c as ee,h as be,s as ve}from"../chunks/stores.7759d76d.js";import{I as we,g as $e,a as ke}from"../chunks/IconBase.79b1627f.js";import{B as qe,Q as Ee,a as Ie,f as te}from"../chunks/BookmarkButton.d1a17381.js";import{b as De}from"../chunks/paths.f6f9df5b.js";import{Q as Ce}from"../chunks/Question.bc72503c.js";function Ve(a){let e;return{c(){e=ce("path"),this.h()},l(n){e=he(n,"path",{d:!0}),Q(e).forEach(w),this.h()},h(){V(e,"d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z")},m(n,s){S(n,e,s)},p:v,d(n){n&&w(e)}}}function Qe(a){let e,n;const s=[{viewBox:"0 0 24 24"},a[0]];let u={$$slots:{default:[Ve]},$$scope:{ctx:a}};for(let l=0;l<s.length;l+=1)u=F(u,s[l]);return e=new we({props:u}),{c(){H(e.$$.fragment)},l(l){N(e.$$.fragment,l)},m(l,c){T(e,l,c),n=!0},p(l,[c]){const o=c&1?$e(s,[s[0],ke(l[0])]):{};c&2&&(o.$$scope={dirty:c,ctx:l}),e.$set(o)},i(l){n||(b(e.$$.fragment,l),n=!0)},o(l){q(e.$$.fragment,l),n=!1},d(l){y(e,l)}}}function Be(a,e,n){return a.$$set=s=>{n(0,e=F(F({},e),G(s)))},e=G(e),[e]}class je extends re{constructor(e){super(),ie(this,e,Be,Qe,oe,{})}}function ne(a,e,n){const s=a.slice();return s[14]=e[n],s}function Me(a){return{c:v,l:v,m:v,p:v,i:v,o:v,d:v}}function Ae(a){let e,n,s,u;function l(t){a[10](t)}function c(t){a[11](t)}let o={class:"mb-2",question:a[7][a[0]],change:a[9]};return a[1]!==void 0&&(o.answer=a[1]),a[3]!==void 0&&(o.showEvaluation=a[3]),e=new Ce({props:o}),J.push(()=>Y(e,"answer",l)),J.push(()=>Y(e,"showEvaluation",c)),{c(){H(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,i){T(e,t,i),u=!0},p(t,i){const r={};i&1&&(r.question=t[7][t[0]]),i&16&&(r.change=t[9]),!n&&i&2&&(n=!0,r.answer=t[1],R(()=>n=!1)),!s&&i&8&&(s=!0,r.showEvaluation=t[3],R(()=>s=!1)),e.$set(r)},i(t){u||(b(e.$$.fragment,t),u=!0)},o(t){q(e.$$.fragment,t),u=!1},d(t){y(e,t)}}}function He(a){return{c:v,l:v,m:v,p:v,i:v,o:v,d:v}}function se(a){let e,n,s,u,l,c;s=new Ee({props:{tags:a[7][a[0]].tags}});let o=a[7][a[0]].help.length>0&&ae(a);return{c(){e=E("div"),n=E("div"),H(s.$$.fragment),u=M(),o&&o.c(),this.h()},l(t){e=I(t,"DIV",{});var i=Q(e);n=I(i,"DIV",{class:!0});var r=Q(n);N(s.$$.fragment,r),r.forEach(w),u=A(i),o&&o.l(i),i.forEach(w),this.h()},h(){V(n,"class","mt-4 w-full flex flex-row flex-wrap")},m(t,i){S(t,e,i),p(e,n),T(s,n,null),p(e,u),o&&o.m(e,null),c=!0},p(t,i){const r={};i&1&&(r.tags=t[7][t[0]].tags),s.$set(r),t[7][t[0]].help.length>0?o?(o.p(t,i),i&1&&b(o,1)):(o=ae(t),o.c(),b(o,1),o.m(e,null)):o&&(P(),q(o,1,1,()=>{o=null}),O())},i(t){c||(b(s.$$.fragment,t),b(o),t&&fe(()=>{c&&(l||(l=X(e,te,{delay:0,duration:50},!0)),l.run(1))}),c=!0)},o(t){q(s.$$.fragment,t),q(o),t&&(l||(l=X(e,te,{delay:0,duration:50},!1)),l.run(0)),c=!1},d(t){t&&w(e),y(s),o&&o.d(),t&&l&&l.end()}}}function ae(a){let e,n,s="Hilfe",u,l,c,o=x(a[7][a[0]].help),t=[];for(let r=0;r<o.length;r+=1)t[r]=le(ne(a,o,r));const i=r=>q(t[r],1,1,()=>{t[r]=null});return{c(){e=E("div"),n=E("div"),n.textContent=s,u=M(),l=E("div");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){e=I(r,"DIV",{class:!0});var h=Q(e);n=I(h,"DIV",{class:!0,"data-svelte-h":!0}),K(n)!=="svelte-153ibff"&&(n.textContent=s),u=A(h),l=I(h,"DIV",{class:!0});var f=Q(l);for(let _=0;_<t.length;_+=1)t[_].l(f);f.forEach(w),h.forEach(w),this.h()},h(){V(n,"class","font-semibold mb-1"),V(l,"class","columns-1 md:columns-3"),V(e,"class","mt-2")},m(r,h){S(r,e,h),p(e,n),p(e,u),p(e,l);for(let f=0;f<t.length;f+=1)t[f]&&t[f].m(l,null);c=!0},p(r,h){if(h&129){o=x(r[7][r[0]].help);let f;for(f=0;f<o.length;f+=1){const _=ne(r,o,f);t[f]?(t[f].p(_,h),b(t[f],1)):(t[f]=le(_),t[f].c(),b(t[f],1),t[f].m(l,null))}for(P(),f=o.length;f<t.length;f+=1)i(f);O()}},i(r){if(!c){for(let h=0;h<o.length;h+=1)b(t[h]);c=!0}},o(r){t=t.filter(Boolean);for(let h=0;h<t.length;h+=1)q(t[h]);c=!1},d(r){r&&w(e),me(t,r)}}}function le(a){let e,n;return e=new Ie({props:{class:"mb-2 md:mb-0",help:a[14]}}),{c(){H(e.$$.fragment)},l(s){N(e.$$.fragment,s)},m(s,u){T(e,s,u),n=!0},p(s,u){const l={};u&1&&(l.help=s[14]),e.$set(l)},i(s){n||(b(e.$$.fragment,s),n=!0)},o(s){q(e.$$.fragment,s),n=!1},d(s){y(e,s)}}}function Ne(a){let e,n,s,u,l="Zurück",c,o,t,i,r,h="Weiter",f,_,B,z,j,d,D,U,$={ctx:a,current:null,token:null,hasCatch:!1,pending:He,then:Ae,catch:Me,value:7,blocks:[,,,]};_e(a[5](),$),o=new qe({props:{questionId:a[7][a[0]].id}}),B=new je({});let m=a[2]&&se(a);return{c(){e=E("div"),$.block.c(),n=M(),s=E("div"),u=E("a"),u.textContent=l,c=M(),H(o.$$.fragment),t=M(),i=E("button"),r=E("div"),r.textContent=h,f=M(),_=E("div"),H(B.$$.fragment),z=M(),j=E("div"),m&&m.c(),this.h()},l(k){e=I(k,"DIV",{});var g=Q(e);$.block.l(g),n=A(g),s=I(g,"DIV",{class:!0});var C=Q(s);u=I(C,"A",{class:!0,href:!0,"data-svelte-h":!0}),K(u)!=="svelte-1k5o7h7"&&(u.textContent=l),c=A(C),N(o.$$.fragment,C),t=A(C),i=I(C,"BUTTON",{class:!0,"aria-label":!0});var L=Q(i);r=I(L,"DIV",{"data-svelte-h":!0}),K(r)!=="svelte-1kof46u"&&(r.textContent=h),f=A(L),_=I(L,"DIV",{class:!0});var W=Q(_);N(B.$$.fragment,W),W.forEach(w),L.forEach(w),C.forEach(w),z=A(g),j=I(g,"DIV",{});var Z=Q(j);m&&m.l(Z),Z.forEach(w),g.forEach(w),this.h()},h(){V(u,"class","bg-blue-500 text-white rounded-md w-full h-10 font-semibold text-center flex justify-center items-center"),V(u,"href",De),V(_,"class","w-8 h-8"),V(i,"class","w-full h-10 bg-blue-500 text-white font-semibold rounded-md flex flex-row justify-center items-center"),V(i,"aria-label","nächste Frage"),V(s,"class","flex flex-row gap-2 items-center")},m(k,g){S(k,e,g),$.block.m(e,$.anchor=null),$.mount=()=>e,$.anchor=n,p(e,n),p(e,s),p(s,u),p(s,c),T(o,s,null),p(s,t),p(s,i),p(i,r),p(i,f),p(i,_),T(B,_,null),p(e,z),p(e,j),m&&m.m(j,null),d=!0,D||(U=de(i,"click",a[6]),D=!0)},p(k,[g]){a=k,ge($,a,g);const C={};g&1&&(C.questionId=a[7][a[0]].id),o.$set(C),a[2]?m?(m.p(a,g),g&4&&b(m,1)):(m=se(a),m.c(),b(m,1),m.m(j,null)):m&&(P(),q(m,1,1,()=>{m=null}),O())},i(k){d||(b($.block),b(o.$$.fragment,k),b(B.$$.fragment,k),b(m),d=!0)},o(k){for(let g=0;g<3;g+=1){const C=$.blocks[g];q(C)}q(o.$$.fragment,k),q(B.$$.fragment,k),q(m),d=!1},d(k){k&&w(e),$.block.d(),$.token=null,$=null,y(o),y(B),m&&m.d(),D=!1,U()}}}function Te(a,e,n){let s,u;ue(a,ve,d=>n(8,u=d));let l=0,c="",o=!1,t=!1,i=pe.flatMap(d=>d.questions.map(D=>({...D,catalogue:d.name})));async function r(){return i.forEach(d=>ee(d.choices)),ee(i),i}function h(){n(1,c=""),n(2,t=!1),n(3,_=!1),o=!1,l>=i.length-1?n(0,l=0):n(0,l+=1)}function f(){var d;if(o){h();return}be.update(D=>[...D,{question:i[l],answer:c,date:new Date}]),((d=i[l].choices.find(D=>D.answer))==null?void 0:d.text)===c?h():(n(2,t=!0),n(3,_=!0),o=!0)}let _=!1;const B=()=>s&&f();function z(d){c=d,n(1,c)}function j(d){_=d,n(3,_)}return a.$$.update=()=>{var d;a.$$.dirty&256&&n(4,s=(d=u.find(D=>D.id==="fastMode"))==null?void 0:d.value)},[l,c,t,_,s,r,f,i,u,B,z,j]}class Ue extends re{constructor(e){super(),ie(this,e,Te,Ne,oe,{})}}export{Ue as component};
