(this.webpackJsonpholidayextras=this.webpackJsonpholidayextras||[]).push([[0],{46:function(e,t,c){e.exports=c(57)},49:function(e,t,c){},57:function(e,t,c){"use strict";c.r(t);var n=c(8),a=c(2),r=c(33),i=(c(49),c(0)),o=c.n(i),d=c(15),u=c(43),s=c(13),l=c(10);var f=c(20),b=c(37),h=c(17),p=c.n(h),g=c(18),j=p.a.mark(x),O=p.a.mark(m);function x(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.b)(m);case 2:return e.next=4,Object(g.a)([Object(g.e)("feed end reached",m)]);case 4:case"end":return e.stop()}}),j)}function m(){var e,t;return p.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(g.d)((function(e){return e.page}));case 2:return e=c.sent,c.next=5,Object(g.b)(v,e);case 5:return t=c.sent,c.next=8,Object(g.c)({type:"[saga] images fetched",payload:{images:t}});case 8:case"end":return c.stop()}}),O)}function v(e){return y.apply(this,arguments)}function y(){return(y=Object(b.a)(p.a.mark((function e(t){var c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.unsplash.com/photos/?client_id=".concat("b6f13c4cda611136e9965348d6c471ee6dfb3eb53456aa0a08209d140787f4b3","&page=").concat(t)).then((function(e){return e.json()}));case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k=c(38),w=Object(u.a)(),C=Object(d.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{images:[],page:1,focusedCardId:null,currentSearchValue:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"[saga] images fetched":return Object(l.a)({},e,{images:[].concat(Object(s.a)(e.images),Object(s.a)(t.payload.images))});case"feed end reached":return Object(l.a)({},e,{page:e.page+1});case"card clicked":return Object(l.a)({},e,{focusedCardId:t.payload.cardId});case"dismiss focused card clicked":return Object(l.a)({},e,{focusedCardId:null});case"search value changed":return Object(l.a)({},e,{currentSearchValue:t.payload.value});default:return e}}),Object(k.composeWithDevTools)(Object(d.applyMiddleware)(w)));w.run(x);var S=f.c,I=f.b,V=c(44),M={display:"grid"};function z(e){var t=e.items,c=e.onEndReached,n=e.columns,r=void 0===n?3:n,i=e.height,o=e.width,d=e.renderItem,u=e.onStartReached,s=e.endOffset,f=void 0===s?0:s,b=e.itemHeight,h=e.gap,p=void 0===h?5:h,g=Math.ceil(t.length/r),j=b||i,O=g*j-(i-(b||0));return Object(a.c)(V.a,{style:{overflowX:"hidden",width:o,height:i},width:o,height:i,onScroll:function(e){var t=e.scrollOffset,n=e.scrollDirection;0===t&&"backward"===n?u():t>=O-j-f&&"forward"===n&&c()},itemCount:g,itemSize:j},(function(e){for(var c=e.style,n=e.index,i=[],o=0;o<r;o++){var u=t[n*r+o];u&&i.push(d(u))}return Object(a.c)("div",{key:n,style:Object(l.a)({},c,{},M,{gridTemplateColumns:"repeat(".concat(r,", 1fr)"),gridGap:p,paddingBottom:p})},i)}))}var H=c(3),L=c(25),E=c(39),R=c(62),P=o.a.memo((function(e){var t=e.uri,c=e.fallback,r=Object(n.a)(e.range,2),i=r[0],o=r[1],d=Object(L.c)((function(){return{x:0,y:0,config:{clamp:!0}}})),u=Object(n.a)(d,2),s=u[0],l=s.x,f=s.y,b=u[1],h=Object(E.a)((function(e){var t=Object(n.a)(e.movement,2),c=t[0],a=t[1],r=Object(n.a)(e.xy,2);r[0],r[1];b({x:Math.max(0,Math.min(c,i)),y:Math.max(0,Math.min(a,o))})}),{initial:function(){return[l.getValue(),f.getValue()]}}),p=Object(R.a)().domain([0,i]).range([0,100]),g=Object(R.a)().domain([0,o]).range([0,100]);return Object(a.c)(L.a.div,Object(H.a)({},h(),{css:Object(a.b)("flex:0 0 auto;width:",i,"px;height:",o,"px;background-color:",c||"transparent",";background-image:url(",t,");background-repeat:no-repeat;background-size:auto !important;"),style:{backgroundPosition:Object(L.b)([l,f],(function(e,t){return"".concat(p(e),"% ").concat(g(t),"%")}))}}))})),T=c(23);function B(e){return Object(a.c)("button",Object(H.a)({css:function(e){return Object(a.b)("border:none;background:linear-gradient(45deg,",e.dark,",",e.dark2,");box-shadow:1px 1px 1px 0 black;padding:",e.paddingVertical," ",e.paddingHorizontal,";border-radius:",e.radius,";color:white;")}},e),e.children)}var D={name:"1apiwpj",styles:"flex:0 0 10px;"},J={name:"1apiwpj",styles:"flex:0 0 10px;"},_={name:"72fd9l",styles:"flex:0;"},G={name:"1apiwpj",styles:"flex:0 0 10px;"},W=o.a.memo((function(e){var t=e.id,c=e.uri,r=e.title,i=e.link,o=e.authorLink,d=e.author,u=e.authorImage,s=e.description,l=e.onCardClicked,f=(e.fallback,Object(T.a)()),b=Object(n.a)(f,2),h=b[0],p=b[1].width;return Object(a.c)("div",{ref:h,css:function(e){return Object(a.b)("height:100%;width:100%;overflow:hidden;display:flex;flex-direction:column;border-radius:",e.radius,";box-shadow:0px 1px 1px 0 ",e.dark2,";")}},Object(a.c)(P,{range:[p,150],uri:c}),Object(a.c)(B,{onClick:function(){return l(t)}},"Expand"),Object(a.c)("div",{css:function(e){return Object(a.b)("flex:1;align-items:flex-start;justify-content:flex-start;flex-direction:column;display:flex;padding:",e.paddingVertical," ",e.paddingHorizontal,";")}},Object(a.c)("div",{css:function(e){return Object(a.b)("flex:0 0 50px;width:50px;height:50px;align-self:center;border-radius:",e.radius,";background-image:url(",u,");background-size:cover;box-shadow:0 1px 1px 0 black;")}}),Object(a.c)("div",{css:D}),Object(a.c)("div",{style:{flex:1,overflow:"scroll"}},s),Object(a.c)("div",{css:J}),Object(a.c)("span",{css:_},Object(a.c)("a",{href:i},r)," by ",Object(a.c)("a",{href:o},d)),Object(a.c)("div",{css:G})))}));var X={name:"1apiwpj",styles:"flex:0 0 10px;"};function q(){return Object(a.c)("div",{css:X})}var A=c(12),F=c(63);function K(e){var t=e.value,c=e.onSearchChanged;return Object(a.c)("input",{placeholder:"Search",css:function(e){return Object(a.b)("border:none;padding:",e.paddingVertical," ",e.paddingHorizontal,";border-radius:",e.radius,";background:",e.light,";box-shadow:inset 0 0 2px 0 ",e.dark,";")},type:"text",value:t,onChange:function(e){c(e.target.value)}})}var N=c(24),Q=c(40),U=c.n(Q),Y=Object(N.a)([function(e){return e.currentSearchValue}],(function(e){return e})),Z=Object(N.a)([function(e){return e.images},function(e){return e.focusedCardId}],(function(e,t){return e.find((function(e){return e.id===t}))})),$={shouldSort:!0,threshold:.6,location:0,distance:100,maxPatternLength:32,minMatchCharLength:1,includeScore:!1,includeMatches:!1,keys:["description"]},ee=Object(N.a)([function(e){return e.images},function(e){return e.currentSearchValue}],(function(e,t){var c=new U.a(e,$);return t?c.search(t||""):e})),te=c(41),ce=c(42);var ne={radius:"2px",dark:"#313131",dark2:"#414141",light:"#fff",light2:"#eee",paddingHorizontal:"20px",paddingVertical:"10px"};var ae={name:"11chj0o",styles:"padding:10px;width:100%;height:100%;flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;"},re={name:"1ckoxxj",styles:"flex:1;height:100%;width:100%;"},ie={name:"1dxf69c",styles:"position:fixed;top:0;right:0;height:100%;width:90%;display:flex;align-items:center;justify-content:center;flex-direction:column;background:rgba(255,255,255,0.5);backdrop-filter:blur(12px);box-shadow:-1px 0 1px 0 rgba(0,0,0,0.5);"};function oe(){var e=Object(te.a)().effectiveConnectionType,t=Object(ce.a)().numberOfLogicalProcessors,c=I(),r=S(ee),o=S(Z),d=S(Y),u=Object(T.a)(),s=Object(n.a)(u,2),l=s[0],f=s[1],b=f.width,h=f.height,p=i.useMemo((function(){return t<4?1:b<=500?1:b<=768?2:3}),[b,t]),g=i.useCallback((function(t,n){return Object(a.c)(W,{id:t.id,authorLink:t.user.links.html,author:t.user.username,description:t.description,title:t.id,fallback:t.color,authorImage:t.user.profile_image.large,link:t.links.html,uri:"4g"===e?"focused"===n?t.urls.raw:t.urls.regular:"focused"===n?t.urls.regular:t.urls.thumb,onCardClicked:function(e){c({type:"card clicked",payload:{cardId:e}})}})}),[c,e]);return Object(a.c)("div",{css:ae},Object(a.c)(K,{value:d||"",onSearchChanged:function(e){c({type:"search value changed",payload:{value:e}})}}),Object(a.c)(q,null),Object(a.c)("div",{ref:l,css:re},o&&Object(a.c)(F.a,null,Object(a.c)("div",{css:ie,onClick:function(){c({type:"dismiss focused card clicked"})}},Object(a.c)(q,null),Object(a.c)(B,{onClick:function(){c({type:"dismiss focused card clicked"})}},"Close"),Object(a.c)(q,null),g(o,"focused"))),Object(a.c)(z,{items:r,onStartReached:function(){c({type:"feed start reached"})},onEndReached:function(){c({type:"feed end reached"})},columns:p,width:b,height:h,gap:15,itemHeight:h/2,endOffset:h/2,renderItem:g})))}Object(A.render)(Object(a.c)((function(){return Object(a.c)(f.a,{store:C},Object(a.c)(r.a,{theme:ne},Object(a.c)(oe,null)))}),null),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.228aa448.chunk.js.map