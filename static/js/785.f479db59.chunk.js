"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[785],{785:function(t,e,r){r.r(e);var n=r(433),c=r(439),a=r(171),u=r(689),o=r(791),s=r(184);e.default=function(){var t=(0,u.UO)().movieId,e=(0,o.useState)([]),r=(0,c.Z)(e,2),i=r[0],p=r[1];return(0,o.useEffect)((function(){(0,a.Bt)(t).then((function(t){return p((0,n.Z)(t.data.results))}))}),[t]),(0,s.jsx)("div",{children:0===i.length?(0,s.jsx)("p",{children:"We don't have any reviews for this movie."}):(0,s.jsx)("ul",{children:i.map((function(t,e){return(0,s.jsxs)("li",{children:[(0,s.jsxs)("h3",{children:["Author: ",t.author]}),(0,s.jsx)("p",{children:t.content})]},e)}))})})}},171:function(t,e,r){r.d(e,{Bt:function(){return m},Ch:function(){return p},DD:function(){return f},Tg:function(){return s},y:function(){return l}});var n=r(861),c=r(757),a=r.n(c),u=r(912),o={params:{api_key:"4f1566ad36c0a1eb2cf16ddd2af1a0e7"}};function s(){return i.apply(this,arguments)}function i(){return(i=(0,n.Z)(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/trending/movie/day",t.prev=1,t.next=4,u.Z.get("https://api.themoviedb.org/3/trending/movie/day",o);case 4:return t.abrupt("return",t.sent);case 7:t.prev=7,t.t0=t.catch(1),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})))).apply(this,arguments)}function p(t){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/search/movie",o.params.query=e,t.prev=2,t.next=5,u.Z.get("https://api.themoviedb.org/3/search/movie",o);case 5:return t.abrupt("return",t.sent);case 8:t.prev=8,t.t0=t.catch(2),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[2,8]])})))).apply(this,arguments)}function f(t){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(e),t.prev=1,t.next=4,u.Z.get(r,o);case 4:return t.abrupt("return",t.sent);case 7:t.prev=7,t.t0=t.catch(1),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})))).apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(e,"/credits"),t.prev=1,t.next=4,u.Z.get(r,o);case 4:return t.abrupt("return",t.sent);case 7:t.prev=7,t.t0=t.catch(1),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})))).apply(this,arguments)}function m(t){return g.apply(this,arguments)}function g(){return(g=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(e,"/reviews"),t.prev=1,t.next=4,u.Z.get(r,o);case 4:return t.abrupt("return",t.sent);case 7:t.prev=7,t.t0=t.catch(1),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=785.f479db59.chunk.js.map