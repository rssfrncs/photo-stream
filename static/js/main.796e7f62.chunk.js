(this.webpackJsonpholidayextras=this.webpackJsonpholidayextras||[]).push([[0],{48:function(e,t,n){e.exports=n(58)},51:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var r=n(12),c=n(2),a=n(35),i=(n(51),n(0)),o=n.n(i),d=n(15),u=n(45),l=n(13),s=n(8);var b=n(21),f=n(39),h=n(18),p=n.n(h),g=n(19),j=p.a.mark(m),O=p.a.mark(x);function m(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.b)(x);case 2:return e.next=4,Object(g.a)([Object(g.e)("feed end reached",x)]);case 4:case"end":return e.stop()}}),j)}function x(){var e,t;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(g.d)((function(e){return e.page}));case 2:return e=n.sent,n.next=5,Object(g.b)(v,e);case 5:return t=n.sent,n.next=8,Object(g.c)({type:"[saga] images fetched",payload:{images:t}});case 8:case"end":return n.stop()}}),O)}function v(e){return k.apply(this,arguments)}function k(){return(k=Object(f.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.unsplash.com/photos/?client_id=".concat("b6f13c4cda611136e9965348d6c471ee6dfb3eb53456aa0a08209d140787f4b3","&page=").concat(t)).then((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=n(40),w=Object(u.a)(),C=Object(d.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{images:[],page:1,focusedCardId:null,currentSearchValue:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"[saga] images fetched":return Object(s.a)({},e,{images:[].concat(Object(l.a)(e.images),Object(l.a)(t.payload.images))});case"feed end reached":return Object(s.a)({},e,{page:e.page+1});case"card clicked":return Object(s.a)({},e,{focusedCardId:t.payload.cardId});case"dismiss focused card clicked":return Object(s.a)({},e,{focusedCardId:null});case"search value changed":return Object(s.a)({},e,{currentSearchValue:t.payload.value});default:return e}}),Object(y.composeWithDevTools)(Object(d.applyMiddleware)(w)));w.run(m);var S=b.c,I=b.b,z=n(46),V={display:"grid"};function H(e){var t=e.items,n=e.onEndReached,r=e.columns,a=void 0===r?3:r,i=e.height,o=e.width,d=e.renderItem,u=e.onStartReached,l=e.endOffset,b=void 0===l?0:l,f=e.itemHeight,h=e.gap,p=void 0===h?5:h,g=Math.ceil(t.length/a),j=f||i,O=g*j-(i-(f||0));return Object(c.c)(z.a,{style:{overflowX:"hidden",width:o,height:i},width:o,height:i,onScroll:function(e){var t=e.scrollOffset,r=e.scrollDirection;0===t&&"backward"===r?u():t>=O-j-b&&"forward"===r&&n()},itemCount:g,itemSize:j},(function(e){for(var n=e.style,r=e.index,i=[],o=0;o<a;o++){var u=t[r*a+o];u&&i.push(d(u))}return Object(c.c)("div",{key:r,style:Object(s.a)({},n,{},V,{gridTemplateColumns:"repeat(".concat(a,", 1fr)"),gridGap:p,paddingBottom:p})},i)}))}var L=n(3);function M(e){return Object(c.c)("button",Object(L.a)({css:function(e){return Object(c.b)("border:none;background:linear-gradient(45deg,",e.dark,",",e.dark2,");box-shadow:1px 1px 1px 0 black;padding:",e.paddingVertical," ",e.paddingHorizontal,";border-radius:",e.radius,";color:white;")}},e),e.children)}var E={name:"1apiwpj",styles:"flex:0 0 10px;"};function R(){return Object(c.c)("div",{css:E})}var T=o.a.memo((function(e){var t=e.id,n=e.uri,r=e.title,a=e.authorImage,i=e.onCardClicked,o=e.fallback,d=e.link;return Object(c.c)("div",{css:function(e){return Object(c.b)("height:100%;width:100%;overflow:hidden;display:flex;flex-direction:column;border-radius:",e.radius,";border:1px solid ",e.light2,";")}},Object(c.c)("div",{css:Object(c.b)("flex:1;background-color:",o||"transparent",";background-image:url(",n,");background-repeat:no-repeat;background-size:cover;")}),Object(c.c)("div",{css:function(e){return Object(c.b)("display:flex;align-items:center;padding:",e.paddingHorizontal,";")}},Object(c.c)("a",{href:d},r),Object(c.c)(R,null),Object(c.c)(M,{onClick:function(){return i(t)}},"Expand"),Object(c.c)(R,null),Object(c.c)("div",{css:function(e){return Object(c.b)("flex:0 0 35px;width:35px;height:35px;align-self:center;border-radius:35px;background-image:url(",a,");background-size:cover;box-shadow:0px 0px 1px 0 black;")}})))})),D=n(11),P=n(25),_=n(24);function B(e){var t=e.value,n=e.onSearchChanged;return Object(c.c)("input",{placeholder:"Search",css:function(e){return Object(c.b)("border:none;padding:",e.paddingVertical," ",e.paddingHorizontal,";border-radius:",e.radius,";background:",e.light,";box-shadow:inset 0 0 2px 0 ",e.dark,";")},type:"text",value:t,onChange:function(e){n(e.target.value)}})}var J=n(26),X=n(41),q=n.n(X),A=Object(J.a)([function(e){return e.currentSearchValue}],(function(e){return e})),G=Object(J.a)([function(e){return e.images},function(e){return e.focusedCardId}],(function(e,t){return e.find((function(e){return e.id===t}))})),N={shouldSort:!0,threshold:.6,location:0,distance:100,maxPatternLength:32,minMatchCharLength:1,includeScore:!1,includeMatches:!1,keys:["description"]},W=Object(J.a)([function(e){return e.images},function(e){return e.currentSearchValue}],(function(e,t){var n=new q.a(e,N);return t?n.search(t||""):e})),F=n(42),K=n(43),Q=n(16),U=n(44),Y=n(63),Z=o.a.memo((function(e){var t=e.uri,n=e.fallback,a=Object(P.a)({polyfill:_.a}),i=Object(r.a)(a,2),o=i[0],d=i[1],u=d.width,l=d.height,b=Object(Q.d)((function(){return{x:50,y:50,config:Object(s.a)({},Q.b.slow)}})),f=Object(r.a)(b,2),h=f[0],p=h.x,g=h.y,j=f[1],O=Object(U.a)((function(e){var t=Object(r.a)(e.movement,2),n=t[0],c=t[1],a=e.event;null===a||void 0===a||a.preventDefault(),j({x:n,y:c})}),{initial:function(){return[p.getValue(),g.getValue()]},eventOptions:{},bounds:{left:0,top:0,right:u,bottom:l},filterTaps:!0}),m=Object(Y.a)().domain([0,u]).range([0,100]),x=Object(Y.a)().domain([0,l]).range([0,100]);return Object(c.c)(Q.a.div,Object(L.a)({ref:o},O(),{css:Object(c.b)("height:100%;width:100%;flex:1 1 100%;background-color:",n||"transparent",";background-image:url(",t,");background-repeat:no-repeat;background-size:auto !important;"),style:{touchAction:"none",backgroundPosition:Object(Q.c)([p,g],(function(e,t){return"".concat(100-m(e),"% ").concat(100-x(t),"%")}))}}))})),$=n(64);var ee={name:"u4zpml",styles:"position:fixed;top:0;right:0;height:100%;width:90%;display:flex;align-items:center;justify-content:center;flex-direction:column;background:rgba(255,255,255,0.5);backdrop-filter:blur(15px);box-shadow:-1px 0 5px 0 rgba(0,0,0,0.3);"},te={name:"3wqclb",styles:"height:100%;width:100%;overflow:hidden;display:flex;flex-direction:column;"},ne={name:"72fd9l",styles:"flex:0;"},re=o.a.memo((function(e){var t=e.id,n=e.uri,r=e.title,a=e.link,i=e.authorLink,o=e.author,d=e.authorImage,u=e.description,l=e.onCardClicked,s=(e.fallback,Object(Q.d)({from:{x:"100%"},x:"0%"}).x);return Object(c.c)($.a,null,Object(c.c)(Q.a.div,{css:ee,style:{transform:s.interpolate((function(e){return"translateX(".concat(e,")")}))}},Object(c.c)("div",{css:te},Object(c.c)("div",{style:{width:"100%",flex:3}},Object(c.c)(Z,{uri:n})),Object(c.c)("div",{css:function(e){return Object(c.b)("flex:1;align-items:flex-start;justify-content:flex-start;flex-direction:column;display:flex;padding:",e.paddingVertical," ",e.paddingHorizontal,";")}},Object(c.c)("div",{css:function(e){return Object(c.b)("flex:0 0 50px;width:50px;height:50px;align-self:center;border-radius:",e.radius,";background-image:url(",d,");background-size:cover;box-shadow:0 1px 1px 0 black;")}}),Object(c.c)(R,null),Object(c.c)("div",{style:{flex:1,overflow:"scroll"}},u||"No description."),Object(c.c)(R,null),Object(c.c)("span",{css:ne},Object(c.c)("a",{href:a},r)," by ",Object(c.c)("a",{href:i},o)),Object(c.c)(R,null),Object(c.c)(M,{onClick:function(){return l(t)}},"Close")))))}));var ce={radius:"2px",dark:"#313131",dark2:"#414141",light:"#fff",light2:"#bababa",paddingHorizontal:"20px",paddingVertical:"10px"};var ae={name:"11chj0o",styles:"padding:10px;width:100%;height:100%;flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;"},ie={name:"1ckoxxj",styles:"flex:1;height:100%;width:100%;"};function oe(){var e=Object(F.a)().effectiveConnectionType,t=Object(K.a)().numberOfLogicalProcessors,n=I(),a=S(W),o=S(G),d=S(A),u=Object(P.a)({polyfill:_.a}),l=Object(r.a)(u,2),s=l[0],b=l[1],f=b.width,h=b.height,p=i.useMemo((function(){return t<4?1:f<=500?1:f<=768?2:3}),[f,t]),g=i.useCallback((function(t,r){return Object(c.c)(T,{id:t.id,authorLink:t.user.links.html,author:t.user.username,title:t.id,fallback:t.color,authorImage:t.user.profile_image.large,link:t.links.html,uri:"4g"===e?t.urls.regular:"focused"===r?t.urls.regular:t.urls.thumb,onCardClicked:function(e){n({type:"card clicked",payload:{cardId:e}})}})}),[n,e]);return Object(c.c)("div",{css:ae},Object(c.c)(B,{value:d||"",onSearchChanged:function(e){n({type:"search value changed",payload:{value:e}})}}),Object(c.c)(R,null),Object(c.c)("div",{ref:s,css:ie},o&&Object(c.c)(re,{id:o.id,authorLink:o.user.links.html,author:o.user.username,description:o.description,title:o.id,fallback:o.color,authorImage:o.user.profile_image.large,link:o.links.html,uri:o.urls.regular,onCardClicked:function(){n({type:"dismiss focused card clicked"})}}),Object(c.c)(H,{items:a,onStartReached:function(){n({type:"feed start reached"})},onEndReached:function(){n({type:"feed end reached"})},columns:p,width:f,height:h,gap:15,itemHeight:h/2,endOffset:h/2,renderItem:g})))}Object(D.render)(Object(c.c)((function(){return Object(c.c)(b.a,{store:C},Object(c.c)(a.a,{theme:ce},Object(c.c)(oe,null)))}),null),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.796e7f62.chunk.js.map