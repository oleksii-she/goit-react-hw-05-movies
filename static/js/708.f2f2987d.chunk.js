"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[708],{6244:function(e,n,t){t.d(n,{M1:function(){return p},Si:function(){return c},TP:function(){return s},o5:function(){return u},tx:function(){return d}});var r=t(5861),a=t(4687),i=t.n(a),o=t(1044),c=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.ZP.get("https://api.themoviedb.org/3/trending/movie/day",{params:{api_key:"bef2e1469ade062164db331fc6ab2f25",page:"".concat(n)}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(i().mark((function e(n,t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.ZP.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:"bef2e1469ade062164db331fc6ab2f25",query:"".concat(n),page:"".concat(t)}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.ZP.get("https://api.themoviedb.org/3/movie/".concat(n),{params:{api_key:"bef2e1469ade062164db331fc6ab2f25"}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.ZP.get("https://api.themoviedb.org/3/movie/".concat(n,"/credits"),{params:{api_key:"bef2e1469ade062164db331fc6ab2f25"}});case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.ZP.get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews"),{params:{api_key:"bef2e1469ade062164db331fc6ab2f25"}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},6718:function(e,n,t){t.d(n,{v:function(){return _}});var r,a,i,o,c,u,s,p,d=t(6731),m=t(7689),l=t(168),f=t(7691),h=f.ZP.ul(r||(r=(0,l.Z)(["\n  flex-wrap: wrap;\n  gap: 31px;\n  padding-top: 60px;\n  padding-bottom: 60px;\n  max-width: calc(100vw - 31px);\n  margin: 0 auto;\n  padding: 0;\n  display: flex;\n  list-style: none;\n"]))),x=f.ZP.li(a||(a=(0,l.Z)(["\n  border: 1px solid #e3e3e3;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-top: 30px;\n  max-width: 100%;\n"]))),g=f.ZP.div(i||(i=(0,l.Z)(["\n  position: relative;\n  max-width: 100%;\n"]))),v=f.ZP.img(o||(o=(0,l.Z)(["\n  height: 574px;\n"]))),b=f.ZP.span(c||(c=(0,l.Z)(["\n  position: absolute;\n  z-index: 99;\n  top: 5px;\n  left: 5px;\n  border: 2px solid;\n  border-radius: 50%;\n  padding: 8px;\n  background-color: rgb(63, 81, 181);\n  color: #f4f2ee;\n"]))),Z=f.ZP.div(u||(u=(0,l.Z)(["\n  max-width: fit-content;\n  padding: 5px;\n"]))),y=f.ZP.h2(s||(s=(0,l.Z)(["\n  margin-top: 5px;\n  font-weight: 700;\n"]))),w=f.ZP.p(p||(p=(0,l.Z)(["\n  color: orange;\n  font-weight: 500;\n"]))),j=t(184),k=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}],P=function(e){var n=e.date,t=e.title,r=e.img,a=e.name,i=e.id,o=e.defaultImg,c=e.average,u=e.ganre,s=(0,m.TH)();k.forEach((function(e){switch(e.id){case u[0]:u[0]=e.name;break;case u[1]:u[1]=e.name;break;case u[2]:u[2]=e.name;break;case u[3]:u[3]=e.name;break;case u[4]:u[4]=e.name}})),u.length>3&&u.splice(0,3);var p=String(u).replaceAll(",",", ");return(0,j.jsxs)(x,{children:[(0,j.jsxs)(g,{children:[(0,j.jsx)(b,{children:c.toFixed(1)}),(0,j.jsx)("picture",{children:(0,j.jsx)(d.rU,{to:"/movies/".concat(i),state:{from:s},children:(0,j.jsx)(v,{src:null!==r?"https://image.tmdb.org/t/p/w500".concat(r):o,alt:"",height:"574"})})})]}),(0,j.jsxs)(Z,{children:[(0,j.jsx)(y,{children:null!==t&&void 0!==t?t:a}),(0,j.jsx)(w,{children:p}),(0,j.jsx)("p",{children:n})]})]})},_=function(e){var n=e.items;return(0,j.jsx)(h,{children:n.map((function(e){var n=e.id,t=e.release_date,r=e.original_title,a=e.poster_path,i=e.name,o=e.vote_average,c=e.genre_ids;return(0,j.jsx)(P,{title:r,img:a,name:i,id:n,defaultImg:"https://cdn.pixabay.com/photo/2014/03/25/16/27/movie-297135_960_720.png",average:o,date:t,ganre:c},n)}))})}},7708:function(e,n,t){t.r(n),t.d(n,{default:function(){return T}});var r,a,i,o,c=t(1413),u=t(5861),s=t(885),p=t(4687),d=t.n(p),m=t(2791),l=t(6731),f=t(7689),h=t(5705),x=t(168),g=t(7691),v=(0,g.ZP)(h.l0)(r||(r=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),b=(0,g.ZP)(h.gN)(a||(a=(0,x.Z)(["\n  padding: ","px;\n  border-radius: ","px;\n  width: 280px;\n"])),(function(e){return e.theme.space[2]}),(function(e){return e.theme.space[2]})),Z=g.ZP.button(i||(i=(0,x.Z)(["\n  position: absolute;\n  right: 5px;\n  top: 8px;\n  background: transparent;\n  border: none;\n"]))),y=g.ZP.label(o||(o=(0,x.Z)(["\n  position: relative;\n"]))),w=t(9135),j=t(5218),k=t(184),P=function(e){var n=e.onSubmitSearchValue;e.query;return(0,k.jsx)(h.J9,{initialValues:{value:""},onSubmit:function(e,t){var r=t.resetForm,a=e.value;if(""===a.trim())return j.ZP.error("Type something",{position:"top-right"});n(a),r()},children:(0,k.jsxs)(v,{children:[(0,k.jsxs)(y,{htmlFor:"",children:[(0,k.jsx)(b,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Enter the name of the movie",name:"value"}),(0,k.jsx)(Z,{type:"submit",children:(0,k.jsx)(w.U41,{})})]}),(0,k.jsx)(j.x7,{})]})})},_=t(6244),S=t(7505),F=t(3275),q=t(4288),C=t(6718),T=function(){var e,n,t=(0,f.TH)(),r=(0,m.useState)([]),a=(0,s.Z)(r,2),i=a[0],o=a[1],p=(0,m.useState)(parseInt((null===(e=t.search)||void 0===e?void 0:e.split("=")[2])||1)),h=(0,s.Z)(p,2),x=h[0],g=h[1],v=(0,m.useState)(0),b=(0,s.Z)(v,2),Z=b[0],y=b[1],w=(0,l.lr)(),T=(0,s.Z)(w,2),A=T[0],H=T[1],I=null!==(n=A.get("query"))&&void 0!==n?n:"";(0,m.useEffect)((function(){var e=function(){var e=(0,u.Z)(d().mark((function e(){var n;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==I){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,(0,_.o5)(I,x);case 5:(n=e.sent).results.length>0?(o(n.results),y(n.total_pages)):(j.ZP.error("Sorry, but nothing was found for your query ".concat(I),{position:"top-right"}),H({})),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(2);case 11:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[I,H,Z,x]);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(P,{onSubmitSearchValue:function(e){H(""!==e?{query:e}:{})},query:I}),(0,k.jsx)(C.v,{items:i}),(0,k.jsx)(S.Z,{spacing:2,children:!!Z&&(0,k.jsx)(F.Z,{count:Z,page:x,onChange:function(e,n){return g(n)},sx:{marginY:3,marginX:"auto"},renderItem:function(e){return(0,k.jsx)(q.Z,(0,c.Z)({component:l.OL,to:"?query=".concat(I,"&page=").concat(e.page)},e))}})})]})}}}]);
//# sourceMappingURL=708.f2f2987d.chunk.js.map