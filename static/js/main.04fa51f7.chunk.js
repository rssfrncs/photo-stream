(this.webpackJsonpholidayextras=this.webpackJsonpholidayextras||[]).push([[0],{46:function(e,t,n){e.exports=n(57)},49:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var c=n(10),r=n(2),a=n(33),i=(n(49),n(0)),o=n.n(i),d=n(15),u=n(43),l=n(13),s=n(8);var b=n(21),f=n(37),h=n(18),p=n.n(h),g=n(19),j=p.a.mark(m),O=p.a.mark(x);function m(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.b)(x);case 2:return e.next=4,Object(g.a)([Object(g.e)("feed end reached",x)]);case 4:case"end":return e.stop()}}),j)}function x(){var e,t;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(g.d)((function(e){return e.page}));case 2:return e=n.sent,n.next=5,Object(g.b)(v,e);case 5:return t=n.sent,n.next=8,Object(g.c)({type:"[saga] images fetched",payload:{images:t}});case 8:case"end":return n.stop()}}),O)}function v(e){return k.apply(this,arguments)}function k(){return(k=Object(f.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.unsplash.com/photos/?client_id=".concat("b6f13c4cda611136e9965348d6c471ee6dfb3eb53456aa0a08209d140787f4b3","&page=").concat(t)).then((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=n(38),w=Object(u.a)(),C=Object(d.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{images:[],page:1,focusedCardId:null,currentSearchValue:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"[saga] images fetched":return Object(s.a)({},e,{images:[].concat(Object(l.a)(e.images),Object(l.a)(t.payload.images))});case"feed end reached":return Object(s.a)({},e,{page:e.page+1});case"card clicked":return Object(s.a)({},e,{focusedCardId:t.payload.cardId});case"dismiss focused card clicked":return Object(s.a)({},e,{focusedCardId:null});case"search value changed":return Object(s.a)({},e,{currentSearchValue:t.payload.value});default:return e}}),Object(y.composeWithDevTools)(Object(d.applyMiddleware)(w)));w.run(m);var S=b.c,I=b.b,z=n(44),V={display:"grid"};function H(e){var t=e.items,n=e.onEndReached,c=e.columns,a=void 0===c?3:c,i=e.height,o=e.width,d=e.renderItem,u=e.onStartReached,l=e.endOffset,b=void 0===l?0:l,f=e.itemHeight,h=e.gap,p=void 0===h?5:h,g=Math.ceil(t.length/a),j=f||i,O=g*j-(i-(f||0));return Object(r.c)(z.a,{style:{overflowX:"hidden",width:o,height:i},width:o,height:i,onScroll:function(e){var t=e.scrollOffset,c=e.scrollDirection;0===t&&"backward"===c?u():t>=O-j-b&&"forward"===c&&n()},itemCount:g,itemSize:j},(function(e){for(var n=e.style,c=e.index,i=[],o=0;o<a;o++){var u=t[c*a+o];u&&i.push(d(u))}return Object(r.c)("div",{key:c,style:Object(s.a)({},n,{},V,{gridTemplateColumns:"repeat(".concat(a,", 1fr)"),gridGap:p,paddingBottom:p})},i)}))}var L=n(3);function M(e){return Object(r.c)("button",Object(L.a)({css:function(e){return Object(r.b)("border:none;background:linear-gradient(45deg,",e.dark,",",e.dark2,");box-shadow:1px 1px 1px 0 black;padding:",e.paddingVertical," ",e.paddingHorizontal,";border-radius:",e.radius,";color:white;")}},e),e.children)}var E={name:"1apiwpj",styles:"flex:0 0 10px;"};function R(){return Object(r.c)("div",{css:E})}var T=o.a.memo((function(e){var t=e.id,n=e.uri,c=e.title,a=e.authorImage,i=e.onCardClicked,o=e.fallback,d=e.link;return Object(r.c)("div",{css:function(e){return Object(r.b)("height:100%;width:100%;overflow:hidden;display:flex;flex-direction:column;border-radius:",e.radius,";border:1px solid ",e.dark2,";")}},Object(r.c)("div",{css:Object(r.b)("flex:1;background-color:",o||"transparent",";background-image:url(",n,");background-repeat:no-repeat;background-size:cover;")}),Object(r.c)("div",{css:function(e){return Object(r.b)("display:flex;align-items:center;padding:",e.paddingHorizontal,";")}},Object(r.c)("a",{href:d},c),Object(r.c)(R,null),Object(r.c)(M,{onClick:function(){return i(t)}},"Expand"),Object(r.c)(R,null),Object(r.c)("div",{css:function(e){return Object(r.b)("flex:0 0 35px;width:35px;height:35px;align-self:center;border-radius:",e.radius,";background-image:url(",a,");background-size:cover;box-shadow:0 1px 1px 0 black;")}})))})),D=n(12),P=n(24);function _(e){var t=e.value,n=e.onSearchChanged;return Object(r.c)("input",{placeholder:"Search",css:function(e){return Object(r.b)("border:none;padding:",e.paddingVertical," ",e.paddingHorizontal,";border-radius:",e.radius,";background:",e.light,";box-shadow:inset 0 0 2px 0 ",e.dark,";")},type:"text",value:t,onChange:function(e){n(e.target.value)}})}var B=n(25),J=n(39),X=n.n(J),q=Object(B.a)([function(e){return e.currentSearchValue}],(function(e){return e})),A=Object(B.a)([function(e){return e.images},function(e){return e.focusedCardId}],(function(e,t){return e.find((function(e){return e.id===t}))})),G={shouldSort:!0,threshold:.6,location:0,distance:100,maxPatternLength:32,minMatchCharLength:1,includeScore:!1,includeMatches:!1,keys:["description"]},N=Object(B.a)([function(e){return e.images},function(e){return e.currentSearchValue}],(function(e,t){var n=new X.a(e,G);return t?n.search(t||""):e})),W=n(40),F=n(41),K=n(16),Q=n(42),U=n(62),Y=o.a.memo((function(e){var t=e.uri,n=e.fallback,a=Object(P.a)(),i=Object(c.a)(a,2),o=i[0],d=i[1],u=d.width,l=d.height,b=Object(K.d)((function(){return{x:50,y:50,config:Object(s.a)({},K.b.slow)}})),f=Object(c.a)(b,2),h=f[0],p=h.x,g=h.y,j=f[1],O=Object(Q.a)((function(e){var t=Object(c.a)(e.movement,2),n=t[0],r=t[1],a=e.down,i=Object(c.a)(e.xy,2);i[0],i[1],e.event;a?(document.ontouchmove=function(e){e.preventDefault()},j({x:n,y:r})):document.ontouchmove=function(){return!0}}),{initial:function(){return[p.getValue(),g.getValue()]},eventOptions:{},bounds:{left:0,right:u,bottom:l,top:0},filterTaps:!0}),m=Object(U.a)().domain([0,u]).range([0,100]),x=Object(U.a)().domain([0,l]).range([0,100]);return Object(r.c)(K.a.div,Object(L.a)({ref:o},O(),{css:Object(r.b)("height:100%;width:100%;flex:1 1 100%;background-color:",n||"transparent",";background-image:url(",t,");background-repeat:no-repeat;background-size:auto !important;"),style:{touchAction:"none",backgroundPosition:Object(K.c)([p,g],(function(e,t){return"".concat(100-m(e),"% ").concat(100-x(t),"%")}))}}))})),Z=n(63);var $={name:"1dxf69c",styles:"position:fixed;top:0;right:0;height:100%;width:90%;display:flex;align-items:center;justify-content:center;flex-direction:column;background:rgba(255,255,255,0.5);backdrop-filter:blur(12px);box-shadow:-1px 0 1px 0 rgba(0,0,0,0.5);"},ee={name:"3wqclb",styles:"height:100%;width:100%;overflow:hidden;display:flex;flex-direction:column;"},te={name:"72fd9l",styles:"flex:0;"},ne=o.a.memo((function(e){var t=e.id,n=e.uri,c=e.title,a=e.link,i=e.authorLink,o=e.author,d=e.authorImage,u=e.description,l=e.onCardClicked,s=(e.fallback,Object(K.d)({from:{x:"100%"},x:"0%"}).x);return Object(r.c)(Z.a,null,Object(r.c)(K.a.div,{css:$,style:{transform:s.interpolate((function(e){return"translateX(".concat(e,")")}))}},Object(r.c)("div",{css:ee},Object(r.c)("div",{style:{width:"100%",flex:3}},Object(r.c)(Y,{uri:n})),Object(r.c)("div",{css:function(e){return Object(r.b)("flex:1;align-items:flex-start;justify-content:flex-start;flex-direction:column;display:flex;padding:",e.paddingVertical," ",e.paddingHorizontal,";")}},Object(r.c)("div",{css:function(e){return Object(r.b)("flex:0 0 50px;width:50px;height:50px;align-self:center;border-radius:",e.radius,";background-image:url(",d,");background-size:cover;box-shadow:0 1px 1px 0 black;")}}),Object(r.c)(R,null),Object(r.c)("div",{style:{flex:1,overflow:"scroll"}},u||"No description."),Object(r.c)(R,null),Object(r.c)("span",{css:te},Object(r.c)("a",{href:a},c)," by ",Object(r.c)("a",{href:i},o)),Object(r.c)(R,null),Object(r.c)(M,{onClick:function(){return l(t)}},"Close")))))}));var ce={radius:"2px",dark:"#313131",dark2:"#414141",light:"#fff",light2:"#eee",paddingHorizontal:"20px",paddingVertical:"10px"};var re={name:"11chj0o",styles:"padding:10px;width:100%;height:100%;flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;"},ae={name:"1ckoxxj",styles:"flex:1;height:100%;width:100%;"};function ie(){var e=Object(W.a)().effectiveConnectionType,t=Object(F.a)().numberOfLogicalProcessors,n=I(),a=S(N),o=S(A),d=S(q),u=Object(P.a)(),l=Object(c.a)(u,2),s=l[0],b=l[1],f=b.width,h=b.height,p=i.useMemo((function(){return t<4?1:f<=500?1:f<=768?2:3}),[f,t]),g=i.useCallback((function(t,c){return Object(r.c)(T,{id:t.id,authorLink:t.user.links.html,author:t.user.username,title:t.id,fallback:t.color,authorImage:t.user.profile_image.large,link:t.links.html,uri:"4g"===e?t.urls.regular:"focused"===c?t.urls.regular:t.urls.thumb,onCardClicked:function(e){n({type:"card clicked",payload:{cardId:e}})}})}),[n,e]);return Object(r.c)("div",{css:re},Object(r.c)(_,{value:d||"",onSearchChanged:function(e){n({type:"search value changed",payload:{value:e}})}}),Object(r.c)(R,null),Object(r.c)("div",{ref:s,css:ae},o&&Object(r.c)(ne,{id:o.id,authorLink:o.user.links.html,author:o.user.username,description:o.description,title:o.id,fallback:o.color,authorImage:o.user.profile_image.large,link:o.links.html,uri:o.urls.regular,onCardClicked:function(){n({type:"dismiss focused card clicked"})}}),Object(r.c)(H,{items:a,onStartReached:function(){n({type:"feed start reached"})},onEndReached:function(){n({type:"feed end reached"})},columns:p,width:f,height:h,gap:15,itemHeight:h/2,endOffset:h/2,renderItem:g})))}Object(D.render)(Object(r.c)((function(){return Object(r.c)(b.a,{store:C},Object(r.c)(a.a,{theme:ce},Object(r.c)(ie,null)))}),null),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.04fa51f7.chunk.js.map