"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[85],{6244:function(e,n,t){t.d(n,{M1:function(){return p},Si:function(){return u},TP:function(){return o},o5:function(){return s},tx:function(){return f}});var r=t(5861),a=t(4687),i=t.n(a),c=t(1044),u=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("https://api.themoviedb.org/3/trending/movie/day",{params:{api_key:"bef2e1469ade062164db331fc6ab2f25",page:"".concat(n)}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(i().mark((function e(n,t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:"bef2e1469ade062164db331fc6ab2f25",query:"".concat(n),page:"".concat(t)}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("https://api.themoviedb.org/3/movie/".concat(n),{params:{api_key:"bef2e1469ade062164db331fc6ab2f25"}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("https://api.themoviedb.org/3/movie/".concat(n,"/credits"),{params:{api_key:"bef2e1469ade062164db331fc6ab2f25"}});case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews"),{params:{api_key:"bef2e1469ade062164db331fc6ab2f25"}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},4085:function(e,n,t){t.r(n),t.d(n,{default:function(){return _}});var r,a,i,c,u,s=t(5861),o=t(885),p=t(4687),f=t.n(p),d=t(7689),h=t(2791),l=t(6244),v=t(5285),m=t(168),x=t(7691),b=x.ZP.div(r||(r=(0,m.Z)(["\n  max-width: 1280px;\n  margin: auto;\n"]))),w=x.ZP.ul(a||(a=(0,m.Z)(["\n  -webkit-flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  gap: 15px;\n  display: flex;\n  list-style: none;\n  margin: 0;\n"]))),g=x.ZP.li(i||(i=(0,m.Z)(["\n  border: 1px solid #e3e3e3;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-top: 30px;\n  max-width: 100%;\n"]))),Z=x.ZP.div(c||(c=(0,m.Z)(["\n  padding: 5px;\n"]))),k=x.ZP.h2(u||(u=(0,m.Z)(["\n  display: flex;\n"]))),y=t(184),_=function(){var e=(0,h.useState)([]),n=(0,o.Z)(e,2),t=n[0],r=n[1],a=(0,d.UO)().movieId,i=(0,h.useState)("idle"),c=(0,o.Z)(i,2),u=c[0],p=c[1];return(0,h.useEffect)((function(){var e=function(){var e=(0,s.Z)(f().mark((function e(){var n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.M1)(a);case 3:(n=e.sent).length>0&&(r(n),p("resolved")),0===n.length&&p("rejected"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),p("rejected");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[a]),"rejected"===u?(0,y.jsx)(v.b,{}):(0,y.jsxs)(b,{children:[(0,y.jsx)(k,{children:"Cast"}),(0,y.jsx)(w,{children:t.map((function(e){return(0,y.jsxs)(g,{children:[(0,y.jsx)("div",{children:(0,y.jsx)("img",{src:null!==e.profile_path?"https://image.tmdb.org/t/p/w500".concat(e.profile_path):"https://cdn.pixabay.com/photo/2014/03/25/16/27/movie-297135_960_720.png",alt:"el.original_name",height:"574px",width:"382px"})}),(0,y.jsxs)(Z,{children:[(0,y.jsx)("h2",{children:e.original_name}),(0,y.jsx)("p",{children:e.character})]})]},e.cast_id)}))})]})}},5285:function(e,n,t){t.d(n,{b:function(){return a}});var r=t(184),a=function(){return(0,r.jsx)("p",{children:"Sorry we didn't find anything we have technical problems at the moment"})}}}]);
//# sourceMappingURL=85.aef768f3.chunk.js.map