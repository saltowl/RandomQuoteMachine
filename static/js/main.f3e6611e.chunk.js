(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(31)},24:function(e,t,a){},25:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(5),c=a.n(r),i=(a(24),a(6)),u=a(7),s=a(9),l=a(8),d=a(10),h=(a(25),a(4)),p=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).getQuote=a.getQuote.bind(Object(h.a)(a)),a.parseQuote=a.parseQuote.bind(Object(h.a)(a)),a.getQuote(),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"getQuote",value:function(){var e="https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]="+Math.floor(20*Math.random()+1),t=this.parseQuote,a=new XMLHttpRequest;a.onreadystatechange=function(){4===a.readyState&&200===a.status&&t(a.response)},a.open("GET",e),a.withCredentials=!0,a.send()}},{key:"parseQuote",value:function(e){var t=JSON.parse(e)[0];this.props.loadNewQuote(t.content,t.title)}},{key:"render",value:function(){return n.a.createElement("div",{id:"quote-box",className:"card card-light w-75"},n.a.createElement("div",{id:"buttons"},n.a.createElement("a",{className:"btn btn-secondary",id:"tweet-quote",title:"Tweet this quote!",target:"_blank",href:"https://twitter.com/intent/tweet",rel:"noopener noreferrer "},n.a.createElement("i",{className:"fa fa-twitter"})),n.a.createElement("button",{id:"new-quote",className:"btn btn-secondary",onClick:this.getQuote},"New quote")),n.a.createElement("div",{id:"text",dangerouslySetInnerHTML:{__html:this.props.quote}}),n.a.createElement("div",{id:"author",className:"card-text text-right font-italic"},this.props.author))}}]),t}(n.a.Component),m=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{id:"wrapper",className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement(p,{quote:this.props.quote,author:this.props.author,loadNewQuote:this.props.loadNewQuote})),n.a.createElement("div",{id:"sign",className:"text-center"},"by saltowl"))}}]),t}(n.a.Component),b=a(14),w=a(2),f=a(18),v=(a(30),"NEW_QUOTE"),g={quote:"",author:""};var O=Object(w.c)({rootReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{type:"default"};switch(t.type){case v:var a=Object.assign({},e);return a.quote=t.quote,a.author=t.author,a;default:return e}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=Object(w.d)(O,{rootReducer:{}},Object(w.a)(f.a)),j=Object(b.b)(function(e){return{quote:e.rootReducer.quote,author:e.rootReducer.author}},function(e){return{loadNewQuote:function(t,a){e(function(e,t){return{type:"NEW_QUOTE",quote:e,author:t}}(t,a))}}})(m);c.a.render(n.a.createElement(b.a,{store:E},n.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.f3e6611e.chunk.js.map