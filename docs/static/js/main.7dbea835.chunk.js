(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(t,e,n){t.exports=n(35)},25:function(t,e,n){},27:function(t,e,n){},29:function(t,e,n){},35:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(16),r=(n(25),n(4)),i=n(5),l=n(7),u=n(6),s=n(8),m=n(1),d=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).onClickButton=n.onClickButton.bind(Object(m.a)(Object(m.a)(n))),n.state={count:0},n}return Object(s.a)(e,t),Object(i.a)(e,[{key:"onClickButton",value:function(){this.setState({count:this.state.count+1})}},{key:"render",value:function(){return o.a.createElement("div",{className:"region"},o.a.createElement("button",{onClick:this.onClickButton},"Click me!"),o.a.createElement("div",null,"click count: ",this.state.count))}}]),e}(a.Component),b=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).onClickIncrementButton=n.onClickIncrementButton.bind(Object(m.a)(Object(m.a)(n))),n.onClickDecrementButton=n.onClickDecrementButton.bind(Object(m.a)(Object(m.a)(n))),n.state={count:t.initValue},n}return Object(s.a)(e,t),Object(i.a)(e,[{key:"onClickIncrementButton",value:function(){this.updateCount(!0)}},{key:"onClickDecrementButton",value:function(){this.updateCount(!1)}},{key:"updateCount",value:function(t){var e=this.state.count,n=t?e+1:e-1;this.setState({count:n}),this.props.onUpdate(n,e)}},{key:"componentWillMount",value:function(){}},{key:"render",value:function(){var t=this.props.caption;return o.a.createElement("div",null,o.a.createElement("button",{onClick:this.onClickIncrementButton}," + "),o.a.createElement("button",{onClick:this.onClickDecrementButton}," - "),o.a.createElement("span",null,t," count: ",this.state.count))}},{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"componentWillReceiveProps",value:function(){}},{key:"shouldComponentUpdate",value:function(t,e){return t.caption!==this.props.caption||e.count!==this.state.count}},{key:"componentWillUpdate",value:function(){}},{key:"componentDidUpdate",value:function(){}}]),e}(a.Component);b.defaultProps={initValue:0,onUpdate:function(t){return t}};var v=b,f=function(t){function e(t){var n;Object(r.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).onCounterUpdate=n.onCounterUpdate.bind(Object(m.a)(Object(m.a)(n))),n.initValues=[0,10,20];var a=n.initValues.reduce(function(t,e){return t+e},0);return n.state={sum:a},n}return Object(s.a)(e,t),Object(i.a)(e,[{key:"onCounterUpdate",value:function(t,e){var n=t-e;this.setState({sum:this.state.sum+n})}},{key:"render",value:function(){var t=this;return o.a.createElement("div",{className:"region"},o.a.createElement(v,{onUpdate:this.onCounterUpdate,caption:"First"}),o.a.createElement(v,{onUpdate:this.onCounterUpdate,caption:"Second",initValue:this.initValues[1]}),o.a.createElement(v,{onUpdate:this.onCounterUpdate,caption:"Third",initValue:this.initValues[2]}),o.a.createElement("button",{onClick:function(){return t.forceUpdate()}},"Click me to repaint!"),o.a.createElement("div",null,"Total Count: ",this.state.sum))}}]),e}(a.Component),h=n(18),p=n(12),j=(n(27),function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).submit=n.submit.bind(Object(m.a)(Object(m.a)(n))),n}return Object(s.a)(e,t),Object(i.a)(e,[{key:"submit",value:function(t){var e=this.refs,n=e._title,a=e._color;t.preventDefault(),this.props.onNewColor(n.value,a.value),n.value="",a.value="#000000",n.focus()}},{key:"render",value:function(){return o.a.createElement("form",{className:"add-color",onSubmit:this.submit},o.a.createElement("input",{ref:"_title",type:"text",placeholder:"color title...",required:!0}),o.a.createElement("input",{ref:"_color",type:"color",required:!0}),o.a.createElement("button",null,"ADD"))}}]),e}(a.Component));j.defaultProps={onNewColor:function(t){return t}};var k=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={totalStars:5},n.onRate=n.onRate.bind(Object(m.a)(Object(m.a)(n))),n}return Object(s.a)(e,t),Object(i.a)(e,[{key:"onRate",value:function(t){this.props.onRate(t+1)}},{key:"render",value:function(){var t=this,e=this.props,n=e.starsSelected,a=e.starColor,c=this.state.totalStars;return o.a.createElement("div",{className:"star-rating"},Object(p.a)(Array(c)).map(function(e,c){return o.a.createElement("div",{key:c,className:c<n?"star selected":"star",onClick:function(){return t.onRate(c)},style:c<n?{backgroundColor:a}:void 0})}),o.a.createElement("p",null,n," of ",c," stars"))}}]),e}(a.Component),C=(n(29),function(t){var e=t.colors,n=void 0===e?[]:e,a=t.onRemove,c=void 0===a?function(t){return t}:a,r=(t.rating,t.onRate),i=void 0===r?function(t){return t}:r;return o.a.createElement("div",{className:"color-list"},0===n.length?o.a.createElement("p",null,"\u6ca1\u6709ColorList\u5217\u8868\u6570\u636e"):n.map(function(t,e){var a=t.title,r=t.hue,l=t.rating,u=t.id;return console.log(n),o.a.createElement("section",{className:"color",key:t.id},o.a.createElement("h1",null,a),o.a.createElement("button",{onClick:function(){return c(u)}},"X"),o.a.createElement("div",{className:"color",style:{backgroundColor:r}}),o.a.createElement(k,{starsSelected:l,starColor:r,onRate:function(e){return i(t.id,e)}}))}))}),O=n(17),E=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={colors:[]},n.addColor=n.addColor.bind(Object(m.a)(Object(m.a)(n))),n.onRate=n.onRate.bind(Object(m.a)(Object(m.a)(n))),n.removeColor=n.removeColor.bind(Object(m.a)(Object(m.a)(n))),n}return Object(s.a)(e,t),Object(i.a)(e,[{key:"addColor",value:function(t,e){console.log(t,e),this.setState(function(n,a){return{colors:[].concat(Object(p.a)(n.colors),[{id:Object(O.v4)(),title:t,hue:e,rating:0}])}})}},{key:"removeColor",value:function(t){this.setState(function(e,n){return{colors:e.colors.filter(function(e){return e.id!==t})}})}},{key:"onRate",value:function(t,e){console.log(t,e),this.setState(function(n,a){return{colors:n.colors.map(function(n){return n.id===t?Object(h.a)({},n,{rating:e}):n})}})}},{key:"render",value:function(){var t=this.state.colors;return o.a.createElement("div",{className:"region"},o.a.createElement(j,{onNewColor:this.addColor}),o.a.createElement(C,{onRemove:this.removeColor,colors:t,onRate:this.onRate}))}}]),e}(a.Component),y=n(39),g=n(37),U=function(){return o.a.createElement(y.a,null,o.a.createElement("div",null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(g.a,{to:"/"},"\u9996\u9875")),o.a.createElement("li",null,o.a.createElement(g.a,{to:"/about"},"\u5173\u4e8e")),o.a.createElement("li",null,o.a.createElement(g.a,{to:"/topics"},"\u4e3b\u9898\u5217\u8868")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(c.render)(o.a.createElement("div",null,o.a.createElement(d,null),o.a.createElement(f,null),o.a.createElement(E,null),o.a.createElement("div",null,"\u4e0b\u8fb9\u662f\u6dfb\u52a0\u8def\u7531\u7684\u7ec4\u4ef6"),o.a.createElement(U,null)),document.querySelector("#root")),document.getElementById("btn").onclick=function(){n.e(1).then(n.bind(null,38)).then(function(t){(0,t.default)()})},"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[19,3,2]]]);
//# sourceMappingURL=main.7dbea835.chunk.js.map