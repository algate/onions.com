(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{168:function(t,e,n){},176:function(t,e,n){},181:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(57),c=(n(95),n(27),n(11)),l=n.n(c),i=n(6),u=n(7),s=n(9),m=n(8),d=n(10),h=n(2),p=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(s.a)(this,Object(m.a)(e).call(this,t))).onClickButton=n.onClickButton.bind(Object(h.a)(Object(h.a)(n))),n.state={count:0},n}return Object(d.a)(e,t),Object(u.a)(e,[{key:"onClickButton",value:function(){this.setState({count:this.state.count+1})}},{key:"render",value:function(){return o.a.createElement("div",{className:"region"},o.a.createElement(l.a,{type:"primary",size:"small",onClick:this.onClickButton},"Click me!"),o.a.createElement("div",null,"click count: ",this.state.count))}}]),e}(a.Component),b=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(s.a)(this,Object(m.a)(e).call(this,t))).onClickIncrementButton=n.onClickIncrementButton.bind(Object(h.a)(Object(h.a)(n))),n.onClickDecrementButton=n.onClickDecrementButton.bind(Object(h.a)(Object(h.a)(n))),n.state={count:t.initValue},n}return Object(d.a)(e,t),Object(u.a)(e,[{key:"onClickIncrementButton",value:function(){this.updateCount(!0)}},{key:"onClickDecrementButton",value:function(){this.updateCount(!1)}},{key:"updateCount",value:function(t){var e=this.state.count,n=t?e+1:e-1;this.setState({count:n}),this.props.onUpdate(n,e)}},{key:"componentWillMount",value:function(){}},{key:"render",value:function(){var t=this.props.caption;return o.a.createElement("div",{style:{marginBottom:"10px"}},o.a.createElement(l.a,{type:"primary",size:"small",onClick:this.onClickIncrementButton}," + "),o.a.createElement("span",{style:{margin:"0 10px"}},t," count: ",this.state.count),o.a.createElement(l.a,{type:"primary",size:"small",onClick:this.onClickDecrementButton}," - "))}},{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"componentWillReceiveProps",value:function(){}},{key:"shouldComponentUpdate",value:function(t,e){return t.caption!==this.props.caption||e.count!==this.state.count}},{key:"componentWillUpdate",value:function(){}},{key:"componentDidUpdate",value:function(){}}]),e}(a.Component);b.defaultProps={initValue:0,onUpdate:function(t){return t}};var C=b,v=function(t){function e(t){var n;Object(i.a)(this,e),(n=Object(s.a)(this,Object(m.a)(e).call(this,t))).onCounterUpdate=n.onCounterUpdate.bind(Object(h.a)(Object(h.a)(n))),n.initValues=[0,10,20];var a=n.initValues.reduce(function(t,e){return t+e},0);return n.state={sum:a},n}return Object(d.a)(e,t),Object(u.a)(e,[{key:"onCounterUpdate",value:function(t,e){var n=t-e;this.setState({sum:this.state.sum+n})}},{key:"render",value:function(){var t=this;return o.a.createElement("div",{className:"region"},o.a.createElement(C,{onUpdate:this.onCounterUpdate,caption:"First"}),o.a.createElement(C,{onUpdate:this.onCounterUpdate,caption:"Second",initValue:this.initValues[1]}),o.a.createElement(C,{onUpdate:this.onCounterUpdate,caption:"Third",initValue:this.initValues[2]}),o.a.createElement(l.a,{type:"primary",ghost:!0,onClick:function(){return t.forceUpdate()}},"Click me to repaint!"),o.a.createElement("div",null,"Total Count: ",this.state.sum))}}]),e}(a.Component),f=n(89),O=n(41),k=(n(165),n(58)),j=n.n(k),E=(n(168),function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(s.a)(this,Object(m.a)(e).call(this,t))).state={_title:"",_color:"#000000"},n.submit=n.submit.bind(Object(h.a)(Object(h.a)(n))),n.onChangeTitle=n.onChangeTitle.bind(Object(h.a)(Object(h.a)(n))),n.onChangeColor=n.onChangeColor.bind(Object(h.a)(Object(h.a)(n))),n}return Object(d.a)(e,t),Object(u.a)(e,[{key:"onChangeTitle",value:function(t){this.setState({_title:t.target.value})}},{key:"onChangeColor",value:function(t){this.setState({_color:t.target.value})}},{key:"submit",value:function(t){var e=this.state,n=e._title,a=e._color;this.props.onNewColor(n,a),this.setState({_title:""}),this.setState({_color:"#000000"})}},{key:"render",value:function(){var t=this;return o.a.createElement("form",{className:"add-color",onSubmit:this.submit},o.a.createElement(j.a,{ref:function(e){return t._titleInput=e},type:"text",value:this.state._title,onChange:this.onChangeTitle,placeholder:"color title...",required:!0}),o.a.createElement(j.a,{ref:function(e){return t._colorInput=e},value:this.state._color,onChange:this.onChangeColor,type:"color",required:!0}),o.a.createElement("button",{type:"primary"},"ADD"))}}]),e}(a.Component));E.defaultProps={onNewColor:function(t){return t}};var y=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(s.a)(this,Object(m.a)(e).call(this,t))).state={totalStars:5},n.onRate=n.onRate.bind(Object(h.a)(Object(h.a)(n))),n}return Object(d.a)(e,t),Object(u.a)(e,[{key:"onRate",value:function(t){this.props.onRate(t+1)}},{key:"render",value:function(){var t=this,e=this.props,n=e.starsSelected,a=e.starColor,r=this.state.totalStars;return o.a.createElement("div",{className:"star-rating"},Object(O.a)(Array(r)).map(function(e,r){return o.a.createElement("div",{key:r,className:r<n?"star selected":"star",onClick:function(){return t.onRate(r)},style:r<n?{backgroundColor:a}:void 0})}),o.a.createElement("p",null,n," of ",r," stars"))}}]),e}(a.Component),g=(n(176),function(t){var e=t.colors,n=void 0===e?[]:e,a=t.onRemove,r=void 0===a?function(t){return t}:a,c=(t.rating,t.onRate),i=void 0===c?function(t){return t}:c;return o.a.createElement("div",{className:"color-list"},0===n.length?o.a.createElement("p",null,"\u6ca1\u6709ColorList\u5217\u8868\u6570\u636e"):n.map(function(t,e){var a=t.title,c=t.hue,u=t.rating,s=t.id;return console.log(n),o.a.createElement("section",{className:"color",key:t.id},o.a.createElement("h1",null,a),o.a.createElement(l.a,{type:"danger",ghost:!0,size:"small",onClick:function(){return r(s)}},"X"),o.a.createElement("div",{className:"color",style:{backgroundColor:c}}),o.a.createElement(y,{starsSelected:u,starColor:c,onRate:function(e){return i(t.id,e)}}))}))}),S=n(87),U=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(s.a)(this,Object(m.a)(e).call(this,t))).state={colors:[]},n.addColor=n.addColor.bind(Object(h.a)(Object(h.a)(n))),n.onRate=n.onRate.bind(Object(h.a)(Object(h.a)(n))),n.removeColor=n.removeColor.bind(Object(h.a)(Object(h.a)(n))),n}return Object(d.a)(e,t),Object(u.a)(e,[{key:"addColor",value:function(t,e){console.log(t,e),this.setState(function(n,a){return{colors:[].concat(Object(O.a)(n.colors),[{id:Object(S.v4)(),title:t,hue:e,rating:0}])}})}},{key:"removeColor",value:function(t){this.setState(function(e,n){return{colors:e.colors.filter(function(e){return e.id!==t})}})}},{key:"onRate",value:function(t,e){console.log(t,e),this.setState(function(n,a){return{colors:n.colors.map(function(n){return n.id===t?Object(f.a)({},n,{rating:e}):n})}})}},{key:"render",value:function(){var t=this.state.colors;return o.a.createElement("div",{className:"region"},o.a.createElement(E,{onNewColor:this.addColor}),o.a.createElement(g,{onRemove:this.removeColor,colors:t,onRate:this.onRate}))}}]),e}(a.Component),w=n(185),B=n(183),R=n(186),N=n(187),_=function(){return o.a.createElement(w.a,null,o.a.createElement("div",null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(B.a,{to:"/"},"Index")),o.a.createElement("li",null,o.a.createElement(B.a,{to:"/ClickCounter"},"ClickCounter")),o.a.createElement("li",null,o.a.createElement(B.a,{to:"/ControlPanel"},"ControlPanel")),o.a.createElement("li",null,o.a.createElement(B.a,{to:"/ColorOrganizer"},"ColorOrganizer"))),o.a.createElement(R.a,null,o.a.createElement(N.a,{exact:!0,path:"/ClickCounter",component:p}),o.a.createElement(N.a,{path:"/ControlPanel",component:v}),o.a.createElement(N.a,{path:"/ColorOrganizer",component:U}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(r.render)(o.a.createElement("div",null,o.a.createElement(p,null),o.a.createElement(v,null),o.a.createElement(U,null),o.a.createElement("div",null,"\u4e0b\u8fb9\u662f\u6dfb\u52a0\u8def\u7531\u7684\u7ec4\u4ef6"),o.a.createElement(_,null)),document.querySelector("#root")),document.getElementById("btn").onclick=function(){n.e(1).then(n.bind(null,184)).then(function(t){(0,t.default)()})},"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},90:function(t,e,n){t.exports=n(181)},95:function(t,e,n){}},[[90,3,2]]]);
//# sourceMappingURL=main.bddcaca5.chunk.js.map