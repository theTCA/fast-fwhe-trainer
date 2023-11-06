import{s as L,n as R}from"./scheduler.1971f013.js";import{S as P,i as U,e as j,a as I,f,g as w,h as x,j as b,k,D as ee,m as M,s as C,n as S,c as T,z as m,o as A,p as te,t as H,b as re,d as F,r as W,u as X,v as Y,w as Z}from"./index.e71553f2.js";import{e as O,g as ne,t as se}from"./stores.7759d76d.js";import{M as ae}from"./MdCheckCircle.1127b519.js";import{M as ie}from"./MdAddCircle.bc271686.js";function B(l,n,e){const t=l.slice();return t[9]=n[e],t}function G(l){let n,e=O(l[1]),t=[];for(let r=0;r<e.length;r+=1)t[r]=J(B(l,e,r));return{c(){n=w("div");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){n=x(r,"DIV",{class:!0});var a=b(n);for(let s=0;s<t.length;s+=1)t[s].l(a);a.forEach(f),this.h()},h(){k(n,"class","text-center lg:text-left grid grid-cols-1 lg:grid-cols-3 gap-x-4 border rounded-md")},m(r,a){I(r,n,a);for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(n,null)},p(r,a){if(a&2){e=O(r[1]);let s;for(s=0;s<e.length;s+=1){const c=B(r,e,s);t[s]?t[s].p(c,a):(t[s]=J(c),t[s].c(),t[s].m(n,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=e.length}},d(r){r&&f(n),ee(t,r)}}}function J(l){let n,e,t,r=l[9].name+"",a,s,c,u=l[9].value+"",v,p;return{c(){n=w("div"),e=w("div"),t=w("div"),a=M(r),s=C(),c=w("div"),v=M(u),p=C(),this.h()},l(_){n=x(_,"DIV",{class:!0});var i=b(n);e=x(i,"DIV",{class:!0});var o=b(e);t=x(o,"DIV",{class:!0});var g=b(t);a=S(g,r),g.forEach(f),s=T(o),c=x(o,"DIV",{class:!0});var d=b(c);v=S(d,u),d.forEach(f),o.forEach(f),p=T(i),i.forEach(f),this.h()},h(){k(t,"class","text-sm text-slate-700"),k(c,"class","text-xl lg:text-3xl font-bold text-blue-500"),k(e,"class","flex flex-col w-full"),k(n,"class","py-2 px-6")},m(_,i){I(_,n,i),m(n,e),m(e,t),m(t,a),m(e,s),m(e,c),m(c,v),m(n,p)},p(_,i){i&2&&r!==(r=_[9].name+"")&&A(a,r),i&2&&u!==(u=_[9].value+"")&&A(v,u)},d(_){_&&f(n)}}}function le(l){let n,e=l[0].length>0&&G(l);return{c(){e&&e.c(),n=j()},l(t){e&&e.l(t),n=j()},m(t,r){e&&e.m(t,r),I(t,n,r)},p(t,[r]){t[0].length>0?e?e.p(t,r):(e=G(t),e.c(),e.m(n.parentNode,n)):e&&(e.d(1),e=null)},i:R,o:R,d(t){t&&f(n),e&&e.d(t)}}}function oe(l,n,e){let t,{history:r}=n,a,s,c,u,v,p;function _(){e(2,a=r.reduce((i,o)=>{var g;return((g=o.question.choices.find(d=>d.answer))==null?void 0:g.text)===o.answer?i+1:i},0)),s=ne.map(i=>({name:i,correct:0,incorrect:0})),c=se.map(i=>({name:i,incorrect:0})),r.forEach(i=>{var o;if(i.question.catalogue){let g=s.find(d=>d.name===i.question.catalogue);g&&(((o=i.question.choices.find(d=>d.answer))==null?void 0:o.text)===i.answer?g.correct+=1:(g.incorrect+=1,i.question.tags.forEach(d=>{let E=c.find(V=>V.name===d);E&&i.question.catalogue!==d&&(E.incorrect+=1)})))}}),e(3,u=s.reduce((i,o)=>o.correct>i.correct?o:i).name),e(4,v=s.reduce((i,o)=>o.incorrect>i.incorrect?o:i).name),e(5,p=c.reduce((i,o)=>o.incorrect>i.incorrect?o:i).name)}return l.$$set=i=>{"history"in i&&e(0,r=i.history)},l.$$.update=()=>{l.$$.dirty&1&&r&&_(),l.$$.dirty&61&&e(1,t=[{name:"Fragen beantwortet",value:r.length},{name:"Fragen richtig beantwortet",value:a},{name:"Antwortquote",value:Math.ceil(a/r.length*100)+"%"},{name:"Katalog mit den meisten richtigen Antworten",value:u},{name:"Katalog mit den meisten falschen Antworten",value:v},{name:"meisten falsch beantwortete Fragen mit Stichwort",value:p}])},[r,t,a,u,v,p]}class we extends P{constructor(n){super(),U(this,n,oe,le,L,{history:0})}}function ce(l){let n,e,t;return e=new ie({}),{c(){n=w("div"),W(e.$$.fragment),this.h()},l(r){n=x(r,"DIV",{class:!0});var a=b(n);X(e.$$.fragment,a),a.forEach(f),this.h()},h(){k(n,"class","text-red-500 rotate-45")},m(r,a){I(r,n,a),Y(e,n,null),t=!0},i(r){t||(F(e.$$.fragment,r),t=!0)},o(r){H(e.$$.fragment,r),t=!1},d(r){r&&f(n),Z(e)}}}function ue(l){let n,e,t;return e=new ae({}),{c(){n=w("div"),W(e.$$.fragment),this.h()},l(r){n=x(r,"DIV",{class:!0});var a=b(n);X(e.$$.fragment,a),a.forEach(f),this.h()},h(){k(n,"class","text-green-500")},m(r,a){I(r,n,a),Y(e,n,null),t=!0},i(r){t||(F(e.$$.fragment,r),t=!0)},o(r){H(e.$$.fragment,r),t=!1},d(r){r&&f(n),Z(e)}}}function fe(l){let n,e,t,r,a,s,c,u,v,p=l[0].question.question+"",_,i,o,g=l[1](l[0].date)+"",d,E;const V=[ue,ce],q=[];function N(h,D){var y;return D&1&&(r=null),r==null&&(r=h[0].answer===((y=h[0].question.choices.find(de))==null?void 0:y.text)),r?0:1}return a=N(l,-1),s=q[a]=V[a](l),{c(){n=w("div"),e=w("div"),t=w("div"),s.c(),c=C(),u=w("div"),v=w("div"),_=M(p),i=C(),o=w("div"),d=M(g),this.h()},l(h){n=x(h,"DIV",{class:!0});var D=b(n);e=x(D,"DIV",{class:!0});var y=b(e);t=x(y,"DIV",{class:!0});var Q=b(t);s.l(Q),Q.forEach(f),c=T(y),u=x(y,"DIV",{});var $=b(u);v=x($,"DIV",{class:!0});var z=b(v);_=S(z,p),z.forEach(f),i=T($),o=x($,"DIV",{class:!0});var K=b(o);d=S(K,g),K.forEach(f),$.forEach(f),y.forEach(f),D.forEach(f),this.h()},h(){k(t,"class","w-6 h-6 mr-2 flex-shrink-0"),k(v,"class","text-sm"),k(o,"class","text-xs text-slate-600"),k(e,"class","flex flex-row items-center "),k(n,"class","flex flex-col after:bg-slate-300 after:ml-2.5 after:my-2 after:h-4 after:w-[2px] last:after:h-0")},m(h,D){I(h,n,D),m(n,e),m(e,t),q[a].m(t,null),m(e,c),m(e,u),m(u,v),m(v,_),m(u,i),m(u,o),m(o,d),E=!0},p(h,[D]){let y=a;a=N(h,D),a!==y&&(te(),H(q[y],1,1,()=>{q[y]=null}),re(),s=q[a],s||(s=q[a]=V[a](h),s.c()),F(s,1),s.m(t,null)),(!E||D&1)&&p!==(p=h[0].question.question+"")&&A(_,p),(!E||D&1)&&g!==(g=h[1](h[0].date)+"")&&A(d,g)},i(h){E||(F(s),E=!0)},o(h){H(s),E=!1},d(h){h&&f(n),q[a].d()}}}const de=l=>l.answer;function he(l,n,e){let{history:t}=n;function r(a){const s=new Date(Date.now()-t.date.getTime()+t.date.getTimezoneOffset()*6e4),c=s.getMinutes(),u=s.getHours();if(u<1){if(c<1)return"vor wenigen Sekunden";if(c<2)return"vor einer Minute";if(c<60)return`vor ${c} Minuten`}return u<24?`vor ${u} Stunden`:`vor ${u*24} Tagen`}return l.$$set=a=>{"history"in a&&e(0,t=a.history)},[t,r]}class xe extends P{constructor(n){super(),U(this,n,he,fe,L,{history:0})}}export{we as H,xe as Q};
