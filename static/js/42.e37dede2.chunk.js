"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[42],{42:function(e,t,a){a.r(t),a.d(t,{default:function(){return M}});var n=a(861),r=a(439),s=a(757),c=a.n(s),i=a(791),o=a(87),u=a(689),l=a(142),p=a(135),d="MovieDetailsPage_btn__goBack__ZykH9",v="MovieDetailsPage_icon__PTpsZ",f="MovieDetailsPage_container__fntPy",_="MovieDetailsPage_img__+Nbrw",h="MovieDetailsPage_wrapper__TH-Xi",m="MovieDetailsPage_title__63V3V",g="MovieDetailsPage_score__zCRy6",x="MovieDetailsPage_sub_title__BB7z4",j="MovieDetailsPage_desc__Z1cdw",b="MovieDetailsPage_details_container__pcLf5",k="MovieDetailsPage_details_title__L7rmB",w="MovieDetailsPage_list__xeLC8",N="MovieDetailsPage_link__rhdjc",y=a(184),M=function(){var e=(0,i.useState)({}),t=(0,r.Z)(e,2),a=t[0],s=t[1],M=(0,u.UO)().id,Z=(0,i.useState)(""),P=(0,r.Z)(Z,2),D=P[0],U=P[1],S=(0,u.s0)(),C=(0,u.TH)().state.from;(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.gu)(M);case 3:t=e.sent,s(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),U(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[s,U,M]);var B=a.title,L=a.name,z=a.poster_path,G=a.vote_average,H=a.overview,R=a.release_date,T=a.first_air_date,V=a.genres,O=null!==R&&void 0!==R?R:T,q=void 0!==O?O.slice(0,4):"",A=V?V.map((function(e){return e.name})).join(", "):"Genre not specified";return""===D?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("button",{className:d,onClick:function(){return S(C)},children:[(0,y.jsx)(p.BMs,{className:v})," Go back"]}),(0,y.jsxs)("div",{className:f,children:[(0,y.jsx)("img",{className:_,src:z?"".concat("https://image.tmdb.org/t/p/w500").concat(z):"https://freedesignfile.com/upload/2014/07/Movie-time-design-elements-vector-backgrounds-04.jpg",alt:a.title}),(0,y.jsxs)("div",{className:h,children:[(0,y.jsxs)("h2",{className:m,children:[null!==B&&void 0!==B?B:L," (",q,")"]}),(0,y.jsxs)("p",{className:g,children:["Use Score: ",Math.round(10*G),"%"]}),(0,y.jsx)("h3",{className:x,children:"Overview"}),(0,y.jsx)("p",{className:j,children:H}),(0,y.jsx)("h3",{className:x,children:"Genres"}),(0,y.jsx)("p",{className:j,children:A})]})]}),(0,y.jsxs)("div",{className:b,children:[(0,y.jsx)("h3",{className:"".concat(x," ").concat(k),children:"Additional information"}),(0,y.jsxs)("ul",{className:w,children:[(0,y.jsx)("li",{className:j,children:(0,y.jsx)(o.rU,{to:"cast",state:{from:C},className:N,children:"Cast"})}),(0,y.jsx)("li",{className:j,children:(0,y.jsx)(o.rU,{to:"reviews",state:{from:C},className:"".concat(N," "),children:"Reviews"})})]}),(0,y.jsx)(i.Suspense,{fallback:(0,y.jsx)("div",{children:"Loading subpage..."}),children:(0,y.jsx)(u.j3,{})})]})]}):(0,y.jsx)("p",{children:"\u041f\u043e\u043c\u0438\u043b\u043a\u0430"})}},142:function(e,t,a){a.d(t,{WV:function(){return u},gu:function(){return p},tb:function(){return v},yj:function(){return d},z1:function(){return l}});var n=a(861),r=a(757),s=a.n(r),c=a(243),i="4e47c6b84e3558dc0b7a4e4e5f8f705d",o=c.Z.create({baseURL:"https://api.themoviedb.org/3/trending/all/day?"}),u=function(){var e=(0,n.Z)(s().mark((function e(){var t,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get("/",{params:{api_key:i}});case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(t){var a,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(t){var a,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(s().mark((function e(t){var a,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(s().mark((function e(t){var a,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=42.e37dede2.chunk.js.map