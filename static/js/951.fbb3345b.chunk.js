"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[951],{6244:function(e,n,t){t.d(n,{M1:function(){return p},Si:function(){return o},TP:function(){return u},o5:function(){return s},tx:function(){return f}});var r=t(5861),a=t(4687),i=t.n(a),c=t(1044),o=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("https://api.themoviedb.org/3/trending/movie/day",{params:{api_key:"bef2e1469ade062164db331fc6ab2f25",page:"".concat(n)}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(i().mark((function e(n,t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:"bef2e1469ade062164db331fc6ab2f25",query:"".concat(n),page:"".concat(t)}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("https://api.themoviedb.org/3/movie/".concat(n),{params:{api_key:"bef2e1469ade062164db331fc6ab2f25"}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("https://api.themoviedb.org/3/movie/".concat(n,"/credits"),{params:{api_key:"bef2e1469ade062164db331fc6ab2f25"}});case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews"),{params:{api_key:"bef2e1469ade062164db331fc6ab2f25"}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},5951:function(e,n,t){t.r(n),t.d(n,{default:function(){return P}});var r,a,i,c,o,s=t(5861),u=t(885),p=t(4687),f=t.n(p),d=t(6731),l=t(7689),h=t(7169),v=t.n(h),x=t(6244),m=t(2791),b=t(168),g=t(7691),w=g.ZP.div(r||(r=(0,b.Z)(["\n  display: flex;\n  max-width: 1200px;\n  margin: auto;\n"]))),Z=(0,g.ZP)(d.OL)(a||(a=(0,b.Z)(["\n  font-family: Roboto;\n  font-size: 25px;\n  font-style: normal;\n  font-weight: 400;\n  margin-left: 50px;\n  -webkit-text-decoration: none;\n  text-decoration: none;\n  color: #dca53d;\n  &.active {\n    color: red;\n  }\n\n  :hover:not(.active),\n  :focus:not(.active) {\n    color: green;\n    transition: cubic-bezier(0.39, 0.575, 0.565, 1);\n  }\n"]))),k=g.ZP.ul(i||(i=(0,b.Z)(["\n  display: flex;\n  list-style: none;\n"]))),y=g.ZP.ul(c||(c=(0,b.Z)(["\n  margin-right: 8px;\n"]))),j=g.ZP.div(o||(o=(0,b.Z)(["\n  margin-left: 25px;\n"]))),_=t(184),P=function(){var e,n,t=(0,m.useState)(""),r=(0,u.Z)(t,2),a=r[0],i=r[1],c=(0,l.UO)().movieId,o=(0,l.TH)();(0,m.useEffect)((function(){var e=function(){var e=(0,s.Z)(f().mark((function e(){var n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,x.TP)(c);case 3:n=e.sent,i(n),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[c]);return(0,_.jsxs)("div",{children:[(0,_.jsx)("div",{children:(0,_.jsx)(d.rU,{to:null!==(e=null===(n=o.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/",children:"go to back"})}),a&&(0,_.jsxs)(w,{children:[(0,_.jsx)("div",{children:(0,_.jsx)("img",{src:null!==a.poster_path?"https://image.tmdb.org/t/p/w500".concat(a.poster_path):"https://cdn.pixabay.com/photo/2014/03/25/16/27/movie-297135_960_720.png",alt:a.original_title})}),(0,_.jsxs)(j,{children:[(0,_.jsx)("h2",{children:a.original_title}),(0,_.jsx)("p",{children:a.overview}),(0,_.jsxs)(k,{children:[(0,_.jsx)(y,{children:(0,_.jsx)(Z,{to:"cast",children:"Cast"})}),(0,_.jsx)(y,{children:(0,_.jsx)(Z,{to:"reviews",children:"Reviews"})})]})]})]}),(0,_.jsx)(m.Suspense,{fallback:(0,_.jsx)(v(),{color:"#36d7b7"}),children:(0,_.jsx)(l.j3,{})})]})}}}]);
//# sourceMappingURL=951.fbb3345b.chunk.js.map