(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{26:function(t,e,s){},33:function(t,e,s){"use strict";s.r(e);var c=s(1),n=s.n(c),i=s(19),l=s.n(i),j=(s(26),s(7)),a=s(8),r=s(10),d=s(9),b=s(11),h=s(0),o={};function O(t,e){return t.split(" "),"USD"===t.split(" ")[1]&&"SMN"===t.split(" ")[3]?parseInt(t.split(" ")[0])*e.USDTJS:"SMN"===t.split(" ")[1]&&"USD"===t.split(" ")[3]?parseInt(t.split(" ")[0])/e.USDTJS:"RUB"===t.split(" ")[1]&&"SMN"===t.split(" ")[3]?parseInt(t.split(" ")[0])*(e.USDTJS/e.USDRUB):"SMN"===t.split(" ")[1]&&"RUB"===t.split(" ")[3]?parseInt(t.split(" ")[0])/(e.USDTJS/e.USDRUB):"RUB"===t.split(" ")[1]&&"USD"===t.split(" ")[3]?parseInt(t.split(" ")[0])/e.USDRUB:"USD"===t.split(" ")[1]&&"RUB"===t.split(" ")[3]?parseInt(t.split(" ")[0])*e.USDRUB:"EUR"===t.split(" ")[1]&&"SMN"===t.split(" ")[3]?parseInt(t.split(" ")[0])*(e.USDTJS/e.USDEUR):"SMN"===t.split(" ")[1]&&"EUR"===t.split(" ")[3]?parseInt(t.split(" ")[0])/(e.USDTJS/e.USDEUR):"EUR"===t.split(" ")[1]&&"RUB"===t.split(" ")[3]?parseInt(t.split(" ")[0])/(e.USDEUR/e.USDRUB):"RUB"===t.split(" ")[1]&&"EUR"===t.split(" ")[3]?parseInt(t.split(" ")[0])*(e.USDEUR/e.USDRUB):"USD"===t.split(" ")[1]&&"EUR"===t.split(" ")[3]?parseInt(t.split(" ")[0])*e.USDEUR:"EUR"===t.split(" ")[1]&&"USD"===t.split(" ")[3]?parseInt(t.split(" ")[0])/e.USDEUR:void 0}var u=function(t){Object(r.a)(s,t);var e=Object(d.a)(s);function s(t){var c;return Object(j.a)(this,s),(c=e.call(this,t)).state={val:"",ans:0},c.onTextChange=c.onTextChange.bind(Object(b.a)(c)),c.onFormSubmit=c.onFormSubmit.bind(Object(b.a)(c)),c}return Object(a.a)(s,[{key:"componentDidMount",value:function(){fetch("http://api.currencylayer.com/live?access_key=199fb439878056d35361096ce8cbadbd&format=1").then((function(t){return t.json()})).then((function(t){o=t.quotes}))}},{key:"onFormSubmit",value:function(t){t.preventDefault(),this.setState({ans:O(this.state.val,o)})}},{key:"onTextChange",value:function(t){this.setState({val:t.target.value}),this.setState({ans:O(this.state.val,o)})}},{key:"render",value:function(){return console.log(this.state.ans),Object(h.jsx)("div",{children:Object(h.jsx)("form",{onSubmit:this.onFormSubmit,children:Object(h.jsx)("div",{className:"main",children:Object(h.jsxs)("div",{className:"main-div item1",children:[Object(h.jsx)("div",{className:"item",children:Object(h.jsx)("input",{onChange:this.onTextChange,type:"text",name:"from",className:"from"})}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"submit",className:"equal-button",children:Object(h.jsx)("img",{className:"equal-sign",src:"https://pngimg.com/uploads/equals/equals_PNG42.png",alt:"equal"})})}),Object(h.jsx)("div",{className:"item",children:Object(h.jsx)("input",{disabled:!0,className:"to",value:this.state.ans,name:"to"})})]})})})})}}]),s}(c.Component),x=(c.Component,{USDEUR:.842673,USDRUB:73.149404,USDTJS:11.404206}),U=[],p=function(t){Object(r.a)(s,t);var e=Object(d.a)(s);function s(t){var c;return Object(j.a)(this,s),(c=e.call(this,t)).state={valute:"\u0422\u0430\u0434\u0436\u0438\u043a\u0441\u043a\u0438\u0435 \u0441\u043e\u043c\u043e\u043d\u0438"},c.onValuteSelect=c.onValuteSelect.bind(Object(b.a)(c)),c}return Object(a.a)(s,[{key:"componentDidMount",value:function(){fetch("http://api.currencylayer.com/live?access_key=199fb439878056d35361096ce8cbadbd&format=1").then((function(t){return t.json()})).then((function(t){x={},x=t.quotes}))}},{key:"onValuteSelect",value:function(t){this.setState({valute:t.target.value})}},{key:"func",value:function(){return"\u0414\u043e\u043b\u043b\u0430\u0440\u044b \u0421\u0428\u0410"===this.state.valute?Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{className:"fle",children:[Object(h.jsx)("td",{children:"\u0414\u043e\u043b\u043b\u0430\u0440\u044b \u0421\u0428\u0410"}),Object(h.jsx)("td",{children:"\u0415\u0432\u0440\u043e"}),Object(h.jsx)("td",{children:x.USDEUR})]}),Object(h.jsxs)("tr",{className:"fle",children:[Object(h.jsx)("td",{children:"\u0414\u043e\u043b\u043b\u0430\u0440\u044b \u0421\u0428\u0410"}),Object(h.jsx)("td",{children:"\u0420\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0435 \u0440\u0443\u0431\u043b\u0438"}),Object(h.jsx)("td",{children:x.USDRUB})]}),Object(h.jsxs)("tr",{className:"fle",children:[Object(h.jsx)("td",{className:"fle",children:"\u0414\u043e\u043b\u043b\u0430\u0440\u044b \u0421\u0428\u0410"}),Object(h.jsx)("td",{children:"\u0422\u0430\u0434\u0436\u0438\u043a\u0441\u043a\u0438\u0435 \u0441\u043e\u043c\u043e\u043d\u0438"}),Object(h.jsx)("td",{children:x.USDTJS})]})]}):"\u0420\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0435 \u0440\u0443\u0431\u043b\u0438"===this.state.valute?Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{className:"fle",children:[Object(h.jsx)("td",{children:"\u0420\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0435 \u0440\u0443\u0431\u043b\u0438"}),Object(h.jsx)("td",{children:"\u0415\u0432\u0440\u043e"}),Object(h.jsx)("td",{children:x.USDEUR/x.USDRUB})]}),Object(h.jsxs)("tr",{className:"fle",children:[Object(h.jsx)("td",{children:"\u0420\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0435 \u0440\u0443\u0431\u043b\u0438"}),Object(h.jsx)("td",{children:"\u0414\u043e\u043b\u043b\u0430\u0440\u044b \u0421\u0428\u0410"}),Object(h.jsx)("td",{children:1/x.USDRUB})]}),Object(h.jsxs)("tr",{className:"fle",children:[Object(h.jsx)("td",{children:"\u0420\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0435 \u0440\u0443\u0431\u043b\u0438"}),Object(h.jsx)("td",{children:"\u0422\u0430\u0434\u0436\u0438\u043a\u0441\u043a\u0438\u0435 \u0441\u043e\u043c\u043e\u043d\u0438"}),Object(h.jsx)("td",{children:x.USDTJS/x.USDRUB})]})]}):"\u0415\u0432\u0440\u043e"===this.state.valute?Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{className:"fle",children:[Object(h.jsx)("td",{children:"\u0415\u0432\u0440\u043e"}),Object(h.jsx)("td",{children:"\u0422\u0430\u0434\u0436\u0438\u043a\u0441\u043a\u0438\u0435 \u0441\u043e\u043c\u043e\u043d\u0438"}),Object(h.jsx)("td",{children:x.USDTJS/x.USDEUR})]}),Object(h.jsxs)("tr",{className:"fle",children:[Object(h.jsx)("td",{children:"\u0415\u0432\u0440\u043e"}),Object(h.jsx)("td",{children:"\u0420\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0435 \u0440\u0443\u0431\u043b\u0438"}),Object(h.jsx)("td",{children:x.USDRUB/x.USDEUR})]}),Object(h.jsxs)("tr",{className:"fle",children:[Object(h.jsx)("td",{children:"\u0415\u0432\u0440\u043e"}),Object(h.jsx)("td",{children:"\u0414\u043e\u043b\u043b\u0430\u0440\u044b \u0421\u0428\u0410"}),Object(h.jsx)("td",{children:1/x.USDEUR})]})]}):Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{className:"fle",children:[Object(h.jsx)("td",{children:"\u0422\u0430\u0434\u0436\u0438\u043a\u0441\u043a\u0438\u0435 \u0441\u043e\u043c\u043e\u043d\u0438"}),Object(h.jsx)("td",{children:"\u0415\u0432\u0440\u043e"}),Object(h.jsx)("td",{children:x.USDEUR/x.USDTJS})]}),Object(h.jsxs)("tr",{className:"fle",children:[Object(h.jsx)("td",{children:"\u0422\u0430\u0434\u0436\u0438\u043a\u0441\u043a\u0438\u0435 \u0441\u043e\u043c\u043e\u043d\u0438"}),Object(h.jsx)("td",{children:"\u0420\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0435 \u0440\u0443\u0431\u043b\u0438"}),Object(h.jsx)("td",{children:x.USDRUB/x.USDTJS})]}),Object(h.jsxs)("tr",{className:"fle",children:[Object(h.jsx)("td",{children:"\u0422\u0430\u0434\u0436\u0438\u043a\u0441\u043a\u0438\u0435 \u0441\u043e\u043c\u043e\u043d\u0438"}),Object(h.jsx)("td",{children:"\u0414\u043e\u043b\u043b\u0430\u0440\u044b \u0421\u0428\u0410"}),Object(h.jsx)("td",{children:1/x.USDTJS})]})]})}},{key:"render",value:function(){return console.log("val",U),Object(h.jsxs)("div",{className:"mm",children:[Object(h.jsx)("br",{}),"\u0412\u044b\u0431\u043e\u0440 \u0431\u0430\u0437\u043e\u0432\u043e\u0439 \u0432\u0430\u043b\u044e\u0442\u044b",Object(h.jsx)("br",{}),Object(h.jsxs)("select",{onChange:this.onValuteSelect,children:[Object(h.jsx)("option",{children:"\u0422\u0430\u0434\u0436\u0438\u043a\u0441\u043a\u0438\u0435 \u0441\u043e\u043c\u043e\u043d\u0438"}),Object(h.jsx)("option",{children:"\u0415\u0432\u0440\u043e"}),Object(h.jsx)("option",{children:"\u0420\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0435 \u0440\u0443\u0431\u043b\u0438"}),Object(h.jsx)("option",{children:"\u0414\u043e\u043b\u043b\u0430\u0440\u044b \u0421\u0428\u0410"})]}),Object(h.jsx)("div",{className:"md",children:Object(h.jsx)("table",{children:Object(h.jsx)("tbody",{children:this.func()})})})]})}}]),s}(c.Component),S=function(t){Object(r.a)(s,t);var e=Object(d.a)(s);function s(){return Object(j.a)(this,s),e.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:Object(h.jsx)(u,{})}),Object(h.jsx)(p,{})]})}}]),s}(c.Component),m=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,34)).then((function(e){var s=e.getCLS,c=e.getFID,n=e.getFCP,i=e.getLCP,l=e.getTTFB;s(t),c(t),n(t),i(t),l(t)}))},f=s(20);l.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(f.a,{children:Object(h.jsx)(S,{})})}),document.getElementById("root")),m()}},[[33,1,2]]]);
//# sourceMappingURL=main.53aae51c.chunk.js.map