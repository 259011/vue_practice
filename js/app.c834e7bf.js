(function(t){function e(e){for(var a,s,o=e[0],c=e[1],l=e[2],f=0,p=[];f<o.length;f++)s=o[f],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},i=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0ccb":function(t,e,n){"use strict";n("dc71")},2461:function(t,e,n){},4352:function(t,e,n){"use strict";n("2461")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-view"),n("van-tabbar",{attrs:{route:""}},[n("van-tabbar-item",{attrs:{icon:"home-o",to:"/"}},[t._v("首页")]),n("van-tabbar-item",{attrs:{icon:"user-o",to:"/user"}},[t._v("个人中心")])],1)],1)},i=[],s={name:"App"},o=s,c=n("2877"),l=Object(c["a"])(o,r,i,!1,null,"7ce11669",null),u=l.exports,f=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-container"},[n("van-nav-bar",{attrs:{fixed:"",title:"今日新闻"}}),n("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.artlist,(function(t){return n("ArticleInfo",{key:t.id,attrs:{title:t.title,author:t.aut_name,cmtCount:t.comm_count,pudData:t.pubdate,cover:t.cover}})})),1)],1)],1)},d=[],v=n("2909"),m=n("1da1"),b=(n("96cf"),n("99af"),n("62c3")),h=n.n(b),g=h.a.create({baseURL:"https://www.escook.cn"}),_=g,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-cell",{scopedSlots:t._u([{key:"title",fn:function(){return[n("div",{staticClass:"title-box"},[n("span",[t._v(t._s(t.title))]),1===t.cover.type?n("img",{staticClass:"thumb",attrs:{src:t.cover.images[0],alt:""}}):t._e()]),3===t.cover.type?n("div",{staticClass:"thumb-box"},t._l(t.cover.images,(function(t,e){return n("img",{key:e,staticClass:"thumb",attrs:{src:t,alt:""}})})),0):t._e()]},proxy:!0},{key:"label",fn:function(){return[n("div",{staticClass:"label-box"},[n("span",[t._v("作者:"+t._s(t.author)+"    "+t._s(t.cmtCount)+"评论    发布日期:"+t._s(t.pudData))]),n("van-icon",{attrs:{name:"cross"}})],1)]},proxy:!0}])})],1)},x=[],w=(n("a9e3"),{name:"ArticleInfo",props:{title:{type:String,default:""},author:{type:String,default:""},cmtCount:{type:[Number,String],default:0},pudData:{type:String,default:""},cover:{type:Object,default:function(){return{type:0}}}}}),O=w,j=(n("7df6"),Object(c["a"])(O,y,x,!1,null,"74f5f6ae",null)),k=j.exports,C={name:"Home",data:function(){return{page:1,limit:10,artlist:[],loading:!0,finished:!1,isLoading:!1}},created:function(){this.initArticleList()},methods:{initArticleList:function(t){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,_.get("/articles",{params:{_page:e.page,_limit:e.limit}});case 2:a=n.sent,r=a.data,t?(e.artlist=[].concat(Object(v["a"])(r),Object(v["a"])(e.artlist)),e.isLoading=!1):(e.artlist=[].concat(Object(v["a"])(e.artlist),Object(v["a"])(r)),e.loading=!1),0===r.length&&(e.finished=!0);case 6:case"end":return n.stop()}}),n)})))()},onLoad:function(){this.page++,this.initArticleList()},onRefresh:function(){this.page++,this.initArticleList(!0)}},components:{ArticleInfo:k}},L=C,S=(n("0ccb"),Object(c["a"])(L,p,d,!1,null,"158204ca",null)),A=S.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user-container"},[a("div",{staticClass:"user-card"},[a("van-cell",{scopedSlots:t._u([{key:"icon",fn:function(){return[a("img",{staticClass:"avatar",attrs:{src:n("cf05"),alt:""}})]},proxy:!0},{key:"title",fn:function(){return[a("span",{staticClass:"username"},[t._v("用户名")])]},proxy:!0},{key:"label",fn:function(){return[a("van-tag",{attrs:{color:"#fff","text-color":"#007bff"}},[t._v("申请认证")])]},proxy:!0}])}),t._m(0)],1),a("van-cell-group",{staticClass:"action-card"},[a("van-cell",{attrs:{icon:"edit",title:"编辑资料","is-link":""}}),a("van-cell",{attrs:{icon:"chat-o",title:"小思同学","is-link":""}}),a("van-cell",{attrs:{icon:"warning-o",title:"退出登录","is-link":""}})],1)],1)},R=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-data"},[n("div",{staticClass:"user-data-item"},[n("span",[t._v("0")]),n("span",[t._v("动态")])]),n("div",{staticClass:"user-data-item"},[n("span",[t._v("0")]),n("span",[t._v("关注")])]),n("div",{staticClass:"user-data-item"},[n("span",[t._v("0")]),n("span",[t._v("粉丝")])])])}],$={name:"User",data:function(){return{page:1,limit:5}},created:function(){this.initArticleList()},methods:{initArticleList:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,_.get("/articles",{params:{_page:t.page,_limit:t.limit}});case 2:n=e.sent,a=n.data,console.log(a);case 5:case"end":return e.stop()}}),e)})))()}}},E=$,M=(n("4352"),Object(c["a"])(E,P,R,!1,null,"698940bd",null)),D=M.exports;a["a"].use(f["a"]);var I=[{path:"/",component:A},{path:"/user",component:D}],T=new f["a"]({routes:I}),J=T,U=n("b970");n("157a");a["a"].use(U["a"]),a["a"].config.productionTip=!1,new a["a"]({router:J,render:function(t){return t(u)}}).$mount("#app")},"7df6":function(t,e,n){"use strict";n("8aa7")},"8aa7":function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},dc71:function(t,e,n){}});
//# sourceMappingURL=app.c834e7bf.js.map