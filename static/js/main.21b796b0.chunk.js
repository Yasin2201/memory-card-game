(this["webpackJsonpmemory-card-game"]=this["webpackJsonpmemory-card-game"]||[]).push([[0],{17:function(e,t,c){},19:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(7),i=c.n(a),s=c(6),o=c.n(s),d=c(8),u=c(2),j=c(10),b=c(9),h=c.n(b),l=(c(17),c(0)),O=function(e){var t,c=Object(n.useState)([]),r=Object(u.a)(c,2),a=r[0],i=r[1],s=Object(n.useState)(0),o=Object(u.a)(s,2),d=o[0],b=o[1],O=function(e){!function(e){i([].concat(Object(j.a)(a),[e.target.id]))}(e),function(e){a.find((function(t){return t===e.target.id}))&&(a.length>d&&b(a.length),i([]))}(e)};return Object(l.jsxs)("div",{children:[Object(l.jsxs)("h2",{id:"scoreCard",children:["Score: ",a.length," || High Score: ",d]}),Object(l.jsx)("div",{id:"displayCards",children:(t=e.cards,t.sort((function(){return Math.random()-.5}))).map((function(e){return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("img",{src:e.image,alt:e.name,id:e.id,onClick:O}),Object(l.jsx)("h3",{className:"charInfo",children:e.name})]},h()())}))})]})},f=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(!0),i=Object(u.a)(a,2),s=i[0],j=i[1];return Object(n.useEffect)((function(){(function(){var e=Object(d.a)(o.a.mark((function e(){var t,c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=[1,2,3,4,5,6,7,8],e.next=4,fetch("https://rickandmortyapi.com/api/character/".concat(t));case 4:return c=e.sent,e.next=7,c.json();case 7:return n=e.sent,r(n),j(!1),e.abrupt("return",n);case 13:e.prev=13,e.t0=e.catch(0),console.error("Error");case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(l.jsx)("div",{children:s?Object(l.jsx)("div",{children:"Loading..."}):Object(l.jsx)(O,{cards:c})})};c(19);var m=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{id:"title",children:"Memory Card Game"}),Object(l.jsx)(f,{})]})};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.21b796b0.chunk.js.map