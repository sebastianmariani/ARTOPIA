(function(t){function e(e){for(var r,s,o=e[0],c=e[1],u=e[2],p=0,f=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},i=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},1063:function(t,e,n){"use strict";var r=n("2463"),a=n.n(r);a.a},"1fbf":function(t,e,n){},2455:function(t,e,n){t.exports=n.p+"img/painting4.9a4d739d.jpg"},2463:function(t,e,n){},"29bb":function(t,e,n){},"381d":function(t,e,n){t.exports=n.p+"img/painting1.9ed4f999.jpg"},"43f2":function(t,e,n){"use strict";var r=n("1fbf"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[n("h1",{attrs:{id:"title"}},[t._v("ARTOPIA")]),n("app-navbar"),n("transition",{attrs:{name:"view"}},[n("router-view")],1),n("app-contacts")],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar"},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),n("router-link",{attrs:{to:"/about"}},[t._v("About")]),n("router-link",{attrs:{to:"/browse"}},[t._v("Browse")]),n("router-link",{attrs:{to:"/basket"}},[t._v("Basket "),t.inCart.length>0?n("span",[t._v("("+t._s(t.inCart.length)+")")]):t._e()])],1)},o=[],c={computed:{inCart:function(){return this.$store.getters.inCart}}},u=c,l=(n("ead6"),n("2877")),p=Object(l["a"])(u,s,o,!1,null,"0d7315af",null),f=p.exports,d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contacts"},[n("div",[n("p",[n("a",[t._v("Carrers")])]),n("p",[n("a",[t._v("Privacy")])]),n("p",[n("a",[t._v("Security")])]),n("p",[n("a",[t._v("Who we support")])])]),n("div",{staticClass:"numbers"},[n("p",[t._v("UK: 020 1234 5678")]),n("p",[t._v("USA: 020 1234 5678")]),n("p",[t._v("CANADA: 020 1234 5678")]),n("p",[t._v("JAPAN: 020 1234 5678")])]),n("div",{staticClass:"icons"},[n("a",[n("i",{staticClass:"fab fa-twitter"})]),n("a",[n("i",{staticClass:"fab fa-facebook"})]),n("a",[n("i",{staticClass:"fab fa-instagram"})]),n("a",[n("i",{staticClass:"fas fa-envelope"})])])])}],v={},b=v,h=(n("1063"),Object(l["a"])(b,d,m,!1,null,"492ca84f",null)),g=h.exports,_={components:{"app-navbar":f,"app-contacts":g}},C=_,y=(n("034f"),Object(l["a"])(C,a,i,!1,null,null,null)),x=y.exports,j=n("8c4f"),w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("h1",{attrs:{id:"top"}},[t._v("We are Changing the World of Art by...")]),r("div",{staticClass:"img-with-text"},[r("img",{attrs:{src:n("71f5"),alt:""}}),r("h1",{attrs:{id:"main"}},[t._v("Making Art Accessible to Everyone")])]),r("hr")])}],O={},$=O,S=(n("67bd"),Object(l["a"])($,w,k,!1,null,"3c438e02",null)),A=S.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.forSale,(function(e){return n("div",{key:e,staticClass:"painting"},[n("h1",[t._v(t._s(e.name))]),n("img",{attrs:{src:e.img}}),n("p",[t._v(" "+t._s(e.price)+" £")]),n("button",{on:{click:function(n){return t.addToCart(e)}}},[t._v("Buy")]),n("hr")])})),0)},P=[],T={computed:{forSale:function(){return this.$store.getters.forSale},inCart:function(){return this.$store.getters.inCart}},methods:{addToCart:function(t){this.inCart.push(t.id)}}},q=T,M=(n("b3ca"),Object(l["a"])(q,E,P,!1,null,"ac343b3c",null)),I=M.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"basket"},[0==t.cart.length?n("div",{attrs:{id:"emptyCart"}},[n("h1",[t._v("Your Cart Is Empty")]),n("p",[t._v("Please visit out Stock")]),n("button",[n("router-link",{attrs:{to:"/browse"}},[t._v("Visit Shop")])],1)]):t._e(),t.cart.length>0?n("table",{staticClass:"table"},[n("tbody",[t._l(t.cart,(function(e,r){return n("tr",{key:e,staticClass:"basketItem"},[n("td",[t._v(t._s(e.name))]),n("td",[n("img",{attrs:{src:e.img}})]),n("td",[t._v(t._s(e.price)+" £")]),n("td",[n("i",{staticClass:"fas fa-trash",on:{click:function(e){return t.removeFromCart(r)}}})])])})),n("hr"),n("tr",{staticClass:"basketItem"},[n("th",[t._v("Total :")]),n("th"),n("th"),n("th",[t._v(t._s(t.total)+" £")])])],2)]):t._e()])},J=[],W=(n("7db0"),n("d81d"),n("13d5"),n("a434"),{computed:{cart:function(){var t=this;return this.$store.getters.inCart.map((function(e){return t.$store.getters.forSale.find((function(t){return e===t.id}))}))},total:function(){return this.cart.reduce((function(t,e){return t+e.price}),0)},inCart:function(){return this.$store.getters.inCart}},methods:{removeFromCart:function(t){this.inCart.splice(t,1)}}}),F=W,N=(n("43f2"),Object(l["a"])(F,B,J,!1,null,"ad504f04",null)),R=N.exports,U=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},D=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("Our Story")]),n("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae excepturi fugiat quo, incidunt quas voluptatibus dolorem quibusdam dicta praesentium suscipit esse maxime, at facilis. Pariatur, accusantium rerum, quasi eius necessitatibus dignissimos vero obcaecati cum eum similique dolorum facere alias maxime")]),n("hr")])}],H={},K=H,L=(n("c52a"),Object(l["a"])(K,U,D,!1,null,"2dd6b48e",null)),V=L.exports,Y=[{path:"/",name:"home",component:A},{path:"/browse",name:"browse",component:I},{path:"/basket",name:"basket",component:R},{path:"/about",name:"about",component:V}],z=n("2f62"),G=n("381d"),Q=n.n(G),X=n("9dd6"),Z=n.n(X),tt=n("e672"),et=n.n(tt),nt=n("2455"),rt=n.n(nt),at=n("c678"),it=n.n(at),st=n("83e9"),ot=n.n(st);r["a"].use(z["a"]);var ct=new z["a"].Store({state:{products:[{id:1,img:Q.a,name:"painting1",price:110},{id:2,img:Z.a,name:"painting2",price:120},{id:3,img:et.a,name:"painting3",price:130},{id:4,img:rt.a,name:"painting4",price:140},{id:5,img:it.a,name:"painting5",price:150},{id:6,img:ot.a,name:"painting6",price:160}],cart:[]},getters:{forSale:function(t){return t.products},inCart:function(t){return t.cart}}});r["a"].use(j["a"]);var ut=new j["a"]({routes:Y,mode:"history"});new r["a"]({render:function(t){return t(x)},router:ut,store:ct}).$mount("#app")},"67aa":function(t,e,n){},"67bd":function(t,e,n){"use strict";var r=n("fb89"),a=n.n(r);a.a},"71f5":function(t,e,n){t.exports=n.p+"img/museum.507dd96f.jpg"},"83e9":function(t,e,n){t.exports=n.p+"img/painting6.9ab803f7.jpg"},"85ec":function(t,e,n){},"9dd6":function(t,e,n){t.exports=n.p+"img/painting2.814c04ea.jpg"},b3ca:function(t,e,n){"use strict";var r=n("f208"),a=n.n(r);a.a},c52a:function(t,e,n){"use strict";var r=n("29bb"),a=n.n(r);a.a},c678:function(t,e,n){t.exports=n.p+"img/painting5.10de1331.jpg"},e672:function(t,e,n){t.exports=n.p+"img/painting3.bdae43b1.jpg"},ead6:function(t,e,n){"use strict";var r=n("67aa"),a=n.n(r);a.a},f208:function(t,e,n){},fb89:function(t,e,n){}});
//# sourceMappingURL=app.e4107ce7.js.map