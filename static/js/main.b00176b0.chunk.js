(this.webpackJsonpholidayextras=this.webpackJsonpholidayextras||[]).push([[0],{40:function(e,t,c){e.exports=c(51)},43:function(e,t,c){},51:function(e,t,c){"use strict";c.r(t);var r=c(12),n=c(2),a=c(27),i=(c(43),c(1)),d=c.n(i),o=c(11),s=c(39),u=c(17),l=c(8);var f=c(16),p=c(31),b=c(13),h=c.n(b),g=c(14),j=h.a.mark(O),x=h.a.mark(m);function O(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.b)(m);case 2:return e.next=4,Object(g.a)([Object(g.e)("feed end reached",m)]);case 4:case"end":return e.stop()}}),j)}function m(){var e,t;return h.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(g.d)((function(e){return e.page}));case 2:return e=c.sent,c.next=5,Object(g.b)(v,e);case 5:return t=c.sent,c.next=8,Object(g.c)({type:"[saga] images fetched",payload:{images:t}});case 8:case"end":return c.stop()}}),x)}function v(e){return k.apply(this,arguments)}function k(){return(k=Object(p.a)(h.a.mark((function e(t){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.unsplash.com/photos/?client_id=".concat("b6f13c4cda611136e9965348d6c471ee6dfb3eb53456aa0a08209d140787f4b3","&page=").concat(t)).then((function(e){return e.json()}));case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=c(32),w=Object(s.a)(),C=Object(o.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{images:[],page:1,focusedCardId:null,currentSearchValue:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"[saga] images fetched":return Object(l.a)({},e,{images:[].concat(Object(u.a)(e.images),Object(u.a)(t.payload.images))});case"feed end reached":return Object(l.a)({},e,{page:e.page+1});case"card clicked":return Object(l.a)({},e,{focusedCardId:t.payload.cardId});case"dismiss focused card clicked":return Object(l.a)({},e,{focusedCardId:null});case"search value changed":return Object(l.a)({},e,{currentSearchValue:t.payload.value});default:return e}}),Object(y.composeWithDevTools)(Object(o.applyMiddleware)(w)));w.run(O);var S=f.c,I=f.b,V=c(38),z={display:"grid"};function H(e){var t=e.items,c=e.onEndReached,r=e.columns,a=void 0===r?3:r,i=e.height,d=e.width,o=e.renderItem,s=e.onStartReached,u=e.endOffset,f=void 0===u?0:u,p=e.itemHeight,b=e.gap,h=void 0===b?5:b,g=Math.ceil(t.length/a),j=p||i,x=g*j-(i-(p||0));return Object(n.c)(V.a,{style:{overflowX:"hidden",width:d,height:i},width:d,height:i,onScroll:function(e){var t=e.scrollOffset,r=e.scrollDirection;0===t&&"backward"===r?s():t>=x-j-f&&"forward"===r&&c()},itemCount:g,itemSize:j},(function(e){for(var c=e.style,r=e.index,i=[],d=0;d<a;d++){var s=t[r*a+d];s&&i.push(o(s))}return Object(n.c)("div",{key:r,style:Object(l.a)({},c,{},z,{gridTemplateColumns:"repeat(".concat(a,", 1fr)"),gridGap:h,paddingBottom:h})},i)}))}var L={name:"1apiwpj",styles:"flex:0 0 10px;"},M={name:"1apiwpj",styles:"flex:0 0 10px;"},R={name:"72fd9l",styles:"flex:0;"},E={name:"1apiwpj",styles:"flex:0 0 10px;"},T=d.a.memo((function(e){var t=e.id,c=e.uri,r=e.title,a=e.link,i=e.authorLink,d=e.author,o=e.authorImage,s=e.description,u=e.onCardClicked,l=e.fallback;return Object(n.c)("div",{css:function(e){return Object(n.b)("height:100%;width:100%;overflow:hidden;display:flex;flex-direction:column;border-radius:",e.radius,";box-shadow:0px 1px 1px 0 ",e.dark2,";")}},Object(n.c)("div",{onClick:function(){u&&u(t)},css:Object(n.b)("flex:1;width:100%;align-self:center;border-radius:5;background-color:",l||"transparent",";background-image:url(",c,");background-size:cover;background-position:center;background-repeat:no-repeat;backdrop-filter:blur(25px);")}),Object(n.c)("div",{css:function(e){return Object(n.b)("flex:1;align-items:flex-start;justify-content:flex-start;flex-direction:column;display:flex;padding:",e.paddingVertical," ",e.paddingHorizontal,";")}},Object(n.c)("div",{css:function(e){return Object(n.b)("flex:0 0 50px;width:50px;height:50px;align-self:center;border-radius:",e.radius,";background-image:url(",o,");background-size:cover;box-shadow:0 1px 1px 0 black;")}}),Object(n.c)("div",{css:L}),Object(n.c)("div",{style:{flex:1,overflow:"scroll"}},s),Object(n.c)("div",{css:M}),Object(n.c)("span",{css:R},Object(n.c)("a",{href:a},r)," by ",Object(n.c)("a",{href:i},d)),Object(n.c)("div",{css:E})))}));var B={name:"1apiwpj",styles:"flex:0 0 10px;"};function D(){return Object(n.c)("div",{css:B})}var J=c(9),P=c(36),_=c(53);function G(e){var t=e.value,c=e.onSearchChanged;return Object(n.c)("input",{placeholder:"Search",css:function(e){return Object(n.b)("border:none;padding:",e.paddingVertical," ",e.paddingHorizontal,";border-radius:",e.radius,";background:",e.light,";box-shadow:inset 0 0 2px 0 ",e.dark,";")},type:"text",value:t,onChange:function(e){c(e.target.value)}})}var W=c(20),X=c(33),q=c.n(X),A=Object(W.a)([function(e){return e.currentSearchValue}],(function(e){return e})),F=Object(W.a)([function(e){return e.images},function(e){return e.focusedCardId}],(function(e,t){return e.find((function(e){return e.id===t}))})),K={shouldSort:!0,threshold:.6,location:0,distance:100,maxPatternLength:32,minMatchCharLength:1,includeScore:!1,includeMatches:!1,keys:["description"]},N=Object(W.a)([function(e){return e.images},function(e){return e.currentSearchValue}],(function(e,t){var c=new q.a(e,K);return t?c.search(t||""):e})),Q=c(5);function U(e){return Object(n.c)("button",Object(Q.a)({css:function(e){return Object(n.b)("border:none;background:linear-gradient(45deg,",e.dark,",",e.dark2,");box-shadow:1px 1px 1px 0 black;padding:",e.paddingVertical," ",e.paddingHorizontal,";border-radius:",e.radius,";color:white;")}},e),e.children)}var Y=c(34),Z=c(35);var $={radius:"2px",dark:"#313131",dark2:"#414141",light:"#fff",light2:"#eee",paddingHorizontal:"20px",paddingVertical:"10px"};var ee={name:"11chj0o",styles:"padding:10px;width:100%;height:100%;flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;"},te={name:"1ckoxxj",styles:"flex:1;height:100%;width:100%;"},ce={name:"18117mt",styles:"position:fixed;top:0;right:0;height:100%;width:75%;display:flex;align-items:center;justify-content:center;flex-direction:column;background:rgba(255,255,255,0.5);backdrop-filter:blur(12px);box-shadow:-1px 0 1px 0 rgba(0,0,0,0.5);"};function re(){var e=Object(Y.a)().effectiveConnectionType,t=Object(Z.a)().numberOfLogicalProcessors,c=I(),a=S(N),d=S(F),o=S(A),s=Object(P.a)(),u=Object(r.a)(s,2),l=u[0],f=u[1],p=f.width,b=f.height;console.log(t);var h=i.useMemo((function(){return t<4?1:p<=500?1:p<=768?2:3}),[p,t]),g=i.useCallback((function(t,r){return Object(n.c)(T,{id:t.id,authorLink:t.user.links.html,author:t.user.username,description:t.description,title:t.id,fallback:t.color,authorImage:t.user.profile_image.large,link:t.links.html,uri:"4g"===e?"focused"===r?t.urls.large:t.urls.regular:"focused"===r?t.urls.regular:t.urls.thumb,onCardClicked:function(e){c({type:"card clicked",payload:{cardId:e}})}})}),[c,e]);return Object(n.c)("div",{css:ee},Object(n.c)(G,{value:o||"",onSearchChanged:function(e){c({type:"search value changed",payload:{value:e}})}}),Object(n.c)(D,null),Object(n.c)("div",{ref:l,css:te},d&&Object(n.c)(_.a,null,Object(n.c)("div",{css:ce,onClick:function(){c({type:"dismiss focused card clicked"})}},Object(n.c)(D,null),Object(n.c)(U,{onClick:function(){c({type:"dismiss focused card clicked"})}},"Close"),Object(n.c)(D,null),g(d,"focused"))),Object(n.c)(H,{items:a,onStartReached:function(){c({type:"feed start reached"})},onEndReached:function(){c({type:"feed end reached"})},columns:h,width:p,height:b,gap:15,itemHeight:b/2,endOffset:b/2,renderItem:g})))}Object(J.render)(Object(n.c)((function(){return Object(n.c)(f.a,{store:C},Object(n.c)(a.a,{theme:$},Object(n.c)(re,null)))}),null),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.b00176b0.chunk.js.map