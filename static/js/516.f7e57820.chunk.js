"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[516],{6244:function(e,t,r){r.d(t,{M1:function(){return p},Si:function(){return i},TP:function(){return o},o5:function(){return s},tx:function(){return f}});var n=r(5861),a=r(7757),c=r.n(a),u=r(1044),i=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.ZP.get("https://api.themoviedb.org/3/trending/movie/day",{params:{api_key:"bef2e1469ade062164db331fc6ab2f25"}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.ZP.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:"bef2e1469ade062164db331fc6ab2f25",query:"".concat(t)}});case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.ZP.get("https://api.themoviedb.org/3/movie/".concat(t),{params:{api_key:"bef2e1469ade062164db331fc6ab2f25"}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.ZP.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits"),{params:{api_key:"bef2e1469ade062164db331fc6ab2f25"}});case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.ZP.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews"),{params:{api_key:"bef2e1469ade062164db331fc6ab2f25"}});case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},2516:function(e,t,r){r.r(t);var n=r(5861),a=r(885),c=r(7757),u=r.n(c),i=r(7689),s=r(2791),o=r(6244),p=r(5285),f=r(184);t.default=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),r=t[0],c=t[1],d=(0,i.UO)().movieId,h=(0,s.useState)("idle"),v=(0,a.Z)(h,2),m=v[0],l=v[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.M1)(d);case 3:t=e.sent,c(t),l("resolved"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),l("rejected");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[d]),"rejected"===m&&p.b,(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"Cast"}),(0,f.jsx)("ul",{children:r.map((function(e){return(0,f.jsx)("li",{children:(0,f.jsxs)("div",{children:[(0,f.jsx)("img",{src:null!==e.profile_path?"https://image.tmdb.org/t/p/w500".concat(e.profile_path):"https://cdn.pixabay.com/photo/2014/03/25/16/27/movie-297135_960_720.png",alt:""}),(0,f.jsx)("h2",{children:e.original_name})]})},e.cast_id)}))})]})}},5285:function(e,t,r){r.d(t,{b:function(){return a}});var n=r(184),a=function(){return(0,n.jsx)("p",{children:"Sorry we didn't find anything we have technical problems at the moment"})}}}]);
//# sourceMappingURL=516.f7e57820.chunk.js.map