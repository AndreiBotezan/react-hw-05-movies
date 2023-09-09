"use strict";(self.webpackChunkreact_hw_05_movies=self.webpackChunkreact_hw_05_movies||[]).push([[440],{7440:function(e,a,n){n.r(a),n.d(a,{default:function(){return m}});var i=n(9439),t=n(2791),s=n(7689),c=n(3692),r=n(5491),o=n(1087),l={details:"MovieDetailsPage_details__7aDRv",go_back:"MovieDetailsPage_go_back__ByNCG",go_back__icon:"MovieDetailsPage_go_back__icon__N783T",image_wrapper:"MovieDetailsPage_image_wrapper__ibM0R",image:"MovieDetailsPage_image__bfvR6",title_wrapper:"MovieDetailsPage_title_wrapper__0mFQj",title:"MovieDetailsPage_title__MDJ+L",tagline:"MovieDetailsPage_tagline__10CJk",info:"MovieDetailsPage_info__3IUJv",info__item:"MovieDetailsPage_info__item__F8uVy",info__value:"MovieDetailsPage_info__value__wlVgy",genres:"MovieDetailsPage_genres__HV3uS",overview:"MovieDetailsPage_overview__Q2W8b",additional:"MovieDetailsPage_additional__BCHVj",additional__button:"MovieDetailsPage_additional__button__P-DxX",star:"MovieDetailsPage_star__GR5XZ"},_=n(2800),u=n(184);function m(){var e=(0,s.UO)().movieId,a=(0,t.useState)(""),n=(0,i.Z)(a,2),m=n[0],d=n[1],v=(0,t.useState)(null),g=(0,i.Z)(v,2),f=g[0],h=g[1],p=(0,t.useState)(""),x=(0,i.Z)(p,2),j=x[0],N=x[1],w=(0,s.s0)(),b=(0,s.TH)().state;return(0,t.useEffect)((function(){if(null!==b&&void 0!==b&&b.from){var e=b.from,a=e.pathname,n=e.search;h(a),N(n)}}),[null===b||void 0===b?void 0:b.from]),(0,t.useEffect)((function(){(0,c.Y5)(e).then((function(e){var a;a=e,function(e,a){var n=[];e.map((function(e){return a.includes(e.id)&&n.push(e.name),n}))}(r.M,a.genres),d(e),console.log(e)}))}),[e]),(0,u.jsxs)(u.Fragment,{children:[m&&(0,u.jsxs)("div",{className:l.details,children:[(0,u.jsxs)("div",{className:l.image_wrapper,children:[m.poster_path?(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(m.poster_path),alt:m.original_title,className:l.image}):(0,u.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg",alt:m.original_title,className:l.image}),(0,u.jsx)("button",{onClick:function(){null!==f?w("".concat(f).concat(j)):w("/",{replace:!0})},className:l.go_back,children:(0,u.jsx)("svg",{className:l.go_back__icon,width:"16",height:"16","aria-label":"logo",children:(0,u.jsx)("use",{href:"".concat(_.Z,"#arrow-back")})})})]}),(0,u.jsxs)("div",{className:l.description,children:[(0,u.jsxs)("div",{className:l.title_wrapper,children:[(0,u.jsx)("h2",{className:l.title,children:m.original_title}),""!==m.tagline?(0,u.jsxs)("p",{className:l.tagline,children:['"',m.tagline,'"']}):""]}),(0,u.jsxs)("ul",{className:l.info,children:[0!==m.vote_average?(0,u.jsxs)("li",{className:l.info__item,children:["User Score: ",(0,u.jsxs)("span",{className:l.info__value,children:[(0,u.jsx)("span",{className:l.star,children:(0,u.jsx)("i",{className:"fa fa-star-o"})}),"\xa0",m.vote_average]})]}):(0,u.jsxs)("li",{className:l.info__item,children:["User Score: ",(0,u.jsxs)("span",{className:l.info__value,children:[(0,u.jsx)("span",{className:l.star,children:(0,u.jsx)("i",{className:"fa fa-star-o"})}),"\xa0--"]})]}),""!==m.release_date?(0,u.jsxs)("li",{className:l.info__item,children:["Release date: ",(0,u.jsx)("span",{className:l.info__value,children:new Date(m.release_date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})})]}):(0,u.jsxs)("li",{className:l.info__item,children:["Release date: ",(0,u.jsx)("span",{className:l.info__value,children:"--"})]}),0!==m.budget?(0,u.jsxs)("li",{className:l.info__item,children:["Budget: ",(0,u.jsxs)("span",{className:l.info__value,children:["$",m.budget.toLocaleString()]})]}):"",0!==m.revenue?(0,u.jsxs)("li",{className:l.info__item,children:["Revenue: ",(0,u.jsxs)("span",{className:l.info__value,children:["$",m.revenue.toLocaleString()]})]}):"",0!==m.runtime?(0,u.jsxs)("li",{className:l.info__item,children:["Runtime: ",(0,u.jsx)("span",{className:l.info__value,children:function(e){var a=e/60,n=Math.floor(a),i=60*(a-n),t=Math.round(i),s="".concat(n,1===n?" hour ":" hours "),c="".concat(t,1===t?" minute":" minutes");return 0===n&&(s=""),0===t&&(c=""),s+c}(m.runtime)})]}):"",(0,u.jsxs)("li",{className:l.info__item,children:["Genres: ",(0,u.jsx)("ul",{className:l.genres,children:m.genres.length>0?m.genres.map((function(e,a){var n=e.id,i=e.name;return(0,u.jsx)("li",{className:l.genres__item,children:(a?", ":"")+i},n)})):(0,u.jsx)("p",{className:l.genres__item,children:"Other"})})]})]}),(0,u.jsx)("p",{className:l.overview,children:m.overview}),(0,u.jsxs)("div",{className:l.additional,children:[(0,u.jsx)(o.rU,{to:"/movies/".concat(e,"/cast"),className:l.additional__button,children:"Cast"}),(0,u.jsx)(o.rU,{to:"/movies/".concat(e,"/reviews"),className:l.additional__button,children:"Reviews"})]})]})]}),(0,u.jsx)(s.j3,{})]})}},5491:function(e,a,n){n.d(a,{M:function(){return i}});var i=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}]},3692:function(e,a,n){n.d(a,{Hx:function(){return v},Y5:function(){return m},vw:function(){return u},wr:function(){return _},xc:function(){return d}});var i=n(5861),t=n(4687),s=n.n(t),c="https://api.themoviedb.org/3",r="?api_key=387a2500e741e87c896db50117c25d75";function o(){return l.apply(this,arguments)}function l(){return l=(0,i.Z)(s().mark((function e(){var a,n,i,t=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.length>0&&void 0!==t[0]?t[0]:"",n=t.length>1&&void 0!==t[1]?t[1]:{},e.next=4,fetch(a,n);case 4:if(!(i=e.sent).ok){e.next=11;break}return e.next=8,i.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"1",a="/trending/movie/week";return o("".concat(c).concat(a).concat(r,"&page=").concat(e))}function u(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"1",n="/search/movie",i="&language=en-US&include_adult=false";return o("".concat(c).concat(n).concat(r,"&query=").concat(e,"&page=").concat(a).concat(i))}function m(e){return o("".concat(c).concat("/movie/").concat(e).concat(r).concat("&language=en-US"))}function d(e){return o("".concat(c).concat("/movie/").concat(e,"/credits").concat(r).concat("&language=en-US"))}function v(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"1",n="/movie/",i="&language=en-US";return o("".concat(c).concat(n).concat(e,"/reviews").concat(r).concat(i,"&page=").concat(a))}},5861:function(e,a,n){function i(e,a,n,i,t,s,c){try{var r=e[s](c),o=r.value}catch(l){return void n(l)}r.done?a(o):Promise.resolve(o).then(i,t)}function t(e){return function(){var a=this,n=arguments;return new Promise((function(t,s){var c=e.apply(a,n);function r(e){i(c,t,s,r,o,"next",e)}function o(e){i(c,t,s,r,o,"throw",e)}r(void 0)}))}}n.d(a,{Z:function(){return t}})}}]);
//# sourceMappingURL=440.0e3097a5.chunk.js.map