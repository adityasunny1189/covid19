(this["webpackJsonpcovid-live"]=this["webpackJsonpcovid-live"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(2),o=n.n(r),i=(n(12),n(3)),l=n(4),u=n(5),s=n(6),h=(n(13),n(14),function(e){var t=e.placeholder,n=e.handleClick;return c.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n})}),d=(n(15),n(16),function(e){return c.a.createElement("div",{className:"card-container"},c.a.createElement("img",{style:{height:200,width:200,margin:"auto"},alt:"country",src:"https://www.countryflags.io/".concat(e.cont.iso2,"/shiny/64.png")}),c.a.createElement("h2",null,"Country: ",null==e.cont.provinceState?e.cont.countryRegion:e.cont.provinceState),c.a.createElement("h3",null,"Confirmed: ",e.cont.confirmed),c.a.createElement("h3",null,"Recovered: ",e.cont.recovered),c.a.createElement("h3",null,"Deaths: ",e.cont.deaths))}),m=function(e){return c.a.createElement("div",{className:"card-list"},e.Country.map((function(e){return c.a.createElement(d,{key:e.uid,cont:e})})))},f=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleClick=function(t){e.setState({searchField:t.target.value})},e.state={Country:[],searchField:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://covid19.mathdro.id/api/confirmed").then((function(e){return e.json()})).then((function(t){return e.setState({Country:t})}))}},{key:"render",value:function(){var e=this.state,t=e.Country,n=e.searchField,a=t.filter((function(e){return e.countryRegion.toLowerCase().includes(n.toLowerCase())}));return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null," CORONA TRACKER "),c.a.createElement(h,{placeholder:"Search Country",handleClick:this.handleClick}),c.a.createElement(m,{Country:a}))}}]),n}(c.a.Component);o.a.render(c.a.createElement(f,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.7eb4ff00.chunk.js.map