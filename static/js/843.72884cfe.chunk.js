"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[843],{843:function(e,r,t){t.r(r),t.d(r,{default:function(){return h}});var n=t(861),a=t(439),u=t(757),c=t.n(u),s=t(791),i=t(689),o="reviews_list__aA+Zo",f=t(692),p=t(184),v=function(e){return e.reviews.map((function(e){var r=e.author,t=e.content,n=e.id;return(0,p.jsxs)("li",{children:[(0,p.jsxs)("h3",{children:["Author: ",r]}),(0,p.jsx)("p",{children:t})]},n)}))},h=function(){var e=(0,s.useState)(),r=(0,a.Z)(e,2),t=r[0],u=r[1],h=(0,i.UO)().id;if((0,s.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.Cm)(h);case 3:r=e.sent,u(r),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),t=e.t0.response,console.log(t.data.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[h]),t)return(0,p.jsx)("ul",{className:o,children:t.length?(0,p.jsx)(v,{reviews:t}):(0,p.jsx)("h3",{children:"Not available"})})}},692:function(e,r,t){t.d(r,{Cm:function(){return p},TW:function(){return o},hG:function(){return f},s7:function(){return i},z1:function(){return s}});var n=t(861),a=t(757),u=t.n(a),c=t(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"69985e4f01a18f2ea21ebbfec884ea1f"}}),s=function(){var e=(0,n.Z)(u().mark((function e(r,t){var n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/search/movie",{params:{query:r,page:t,include_adult:"false",language:"en-US"}});case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/trending/movie/day");case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"/credits"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"/reviews"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=843.72884cfe.chunk.js.map