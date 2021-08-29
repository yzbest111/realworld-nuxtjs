(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{195:function(t,e,r){"use strict";r.d(e,"d",(function(){return c})),r.d(e,"f",(function(){return o})),r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return v})),r.d(e,"c",(function(){return f})),r.d(e,"e",(function(){return d}));var n=r(66),c=function(t){return Object(n.b)({method:"GET",url:"/api/articles",params:t})},o=function(t){return Object(n.b)({method:"GET",url:"/api/articles/feed",params:t})},l=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},v=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},f=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},d=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})}},265:function(t,e,r){"use strict";r.r(e);var n=r(21),c=r(10),o=r(4),l=(r(36),r(38),r(15),r(39),r(37),r(23),r(24),r(49),r(50),r(195)),v=r(66),f=r(48);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var m={name:"home",watchQuery:["page","tag","tab"],asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o,f,d,m,_,h,O,C,j,y,k,w,x;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,n=t.store,o=r.tag,f=r.tab||"global_feed",d=parseInt(r.page)||1,m=20,_=n.state.user&&"your_feed"===f?l.f:l.d,e.next=8,Promise.all([_({limit:m,offset:(d-1)*m,tag:o}),Object(v.b)({method:"GET",url:"/api/tags"})]);case 8:return h=e.sent,O=Object(c.a)(h,2),C=O[0],j=O[1],y=C.data,k=y.articles,w=y.articlesCount,k.forEach((function(article){article.favoriteDisabled=!1})),x=j.data.tags,e.abrupt("return",{articles:k,articlesCount:w,page:d,limit:m,tags:x,tag:o,tab:f});case 16:case"end":return e.stop()}}),e)})))()},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(f.b)(["user"])),mounted:function(){console.log("articles",this.articles)},methods:{onFavorite:function(article){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(article.favoriteDisabled=!0,!article.favorited){t.next=8;break}return t.next=4,Object(l.b)(article.slug);case 4:article.favorited=!1,article.favoritesCount-=1,t.next=12;break;case 8:return t.next=10,Object(l.a)(article.slug);case 10:article.favorited=!0,article.favoritesCount+=1;case 12:article.favoriteDisabled=!1;case 13:case"end":return t.stop()}}),t)})))()}}},_=r(30),component=Object(_.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home-page"},[t._m(0),t._v(" "),r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-9"},[r("div",{staticClass:"feed-toggle"},[r("ul",{staticClass:"nav nav-pills outline-active"},[t.user?r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"your_feed"===t.tab},attrs:{exact:"",to:{name:"home",query:{tab:"your_feed"}}}},[t._v("\n                  Your Feed\n                ")])],1):t._e(),t._v(" "),r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"global_feed"===t.tab},attrs:{exact:"",to:{name:"home",query:{tab:"global_feed"}}}},[t._v("\n                  Global Feed\n                ")])],1),t._v(" "),r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"tag"===t.tab},attrs:{exact:"",to:{name:"home",query:{tab:"tag",tag:t.tag}}}},[t._v("\n                  #"+t._s(t.tag)+"\n                ")])],1)])]),t._v(" "),t._l(t.articles,(function(article){return r("div",{key:article.slug,staticClass:"article-preview"},[r("div",{staticClass:"article-meta"},[r("nuxt-link",{attrs:{to:{name:"profile",params:{username:article.author.username}}}},[r("img",{attrs:{src:article.author.image}})]),t._v(" "),r("div",{staticClass:"info"},[r("nuxt-link",{staticClass:"author",attrs:{to:{name:"profile",params:{username:article.author.username}}}},[t._v("\n                  "+t._s(article.author.username)+"\n                ")]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t._f("FormatDate")(article.createdAt,"MMM DD, YYYY")))])],1),t._v(" "),r("button",{staticClass:"btn btn-outline-primary btn-sm pull-xs-right",class:{active:article.favorited},attrs:{disabled:article.favoriteDisabled},on:{click:function(e){return t.onFavorite(article)}}},[r("i",{staticClass:"ion-heart"}),t._v(" "+t._s(article.favoritesCount)+"\n              ")])],1),t._v(" "),r("nuxt-link",{staticClass:"preview-link",attrs:{to:{name:"article",params:{slug:article.slug}}}},[r("h1",[t._v(t._s(article.title))]),t._v(" "),r("p",[t._v(t._s(article.decription))]),t._v(" "),r("span",[t._v("Read more...")])])],1)}))],2),t._v(" "),r("div",{staticClass:"col-md-3"},[r("div",{staticClass:"sidebar"},[r("p",[t._v("Popular Tags")]),t._v(" "),r("div",{staticClass:"tag-list"},t._l(t.tags,(function(e){return r("nuxt-link",{key:e,staticClass:"tag-pill tag-default",attrs:{to:{name:"home",query:{tag:e,tab:"tag"}}}},[t._v("\n                "+t._s(e)+"\n              ")])})),1)])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"banner"},[r("div",{staticClass:"container"},[r("h1",{staticClass:"logo-font"},[t._v("conduit")]),t._v(" "),r("p",[t._v("A place to share your knowledge.")])])])}],!1,null,null,null);e.default=component.exports}}]);