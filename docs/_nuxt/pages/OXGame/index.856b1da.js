(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{171:function(t,e,n){var content=n(173);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("7885f47b",content,!0,{sourceMap:!1})},172:function(t,e,n){"use strict";var o=n(171);n.n(o).a},173:function(t,e,n){(e=n(21)(!1)).push([t.i,'*,:after,:before{margin:0;box-sizing:border-box;text-decoration:none;list-style:none}html ::-webkit-scrollbar{display:none;-webkit-appearance:none}html *{font-family:Georgia,"ＭＳ 明朝";font-weight:400}html h1{font-size:7vmin}html h2{font-size:6.5vmin}html h3{font-size:5.5vmin}html p{font-size:5vmin}html a{font-size:4.5vmin}html small{font-size:3vmin}body{background:linear-gradient(90deg,#0cf,#fff,#0af)}.page{width:100%}.page-enter{opacity:0}.page-enter-active{transition:opacity 1s}#board *{box-sizing:border-box}#board li,#board ul{display:flex;align-items:center;justify-content:center;padding:0;list-style:none}#board ul li{border-top:.5px solid;border-left:.5px solid}#board ul li:last-of-type{border-right:.5px solid}#board ul:last-of-type{border-bottom:.5px solid}',""]),t.exports=e},174:function(t,e,n){"use strict";n.r(e);var o={props:{banmen:Array,game:String,addColor:Function,selectOne:Function,addLast:Function},methods:{set:function(t){switch(this.game){case"Othello":return"";case"Shogi":return 1==t.length?"":t[3];default:return t}}}},r=(n(172),n(7)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"board"}},t._l(t.banmen,(function(e,o){return n("ul",{key:o},t._l(e,(function(e,col){return n("li",{key:col,class:t.addLast(o,col),on:{click:function(n){return t.selectOne(o,col,e)}}},[n("div",{class:t.addColor(o,col,e)},[t._v(t._s(t.set(e)))])])})),0)})),0)}),[],!1,null,null,null);e.default=component.exports},179:function(t,e,n){var content=n(298);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("cc91aa1e",content,!0,{sourceMap:!1})},297:function(t,e,n){"use strict";var o=n(179);n.n(o).a},298:function(t,e,n){(e=n(21)(!1)).push([t.i,'*[data-v-28870be9],[data-v-28870be9]:after,[data-v-28870be9]:before{margin:0;box-sizing:border-box;text-decoration:none;list-style:none}html[data-v-28870be9] ::-webkit-scrollbar{display:none;-webkit-appearance:none}html *[data-v-28870be9]{font-family:Georgia,"ＭＳ 明朝";font-weight:400}html h1[data-v-28870be9]{font-size:7vmin}html h2[data-v-28870be9]{font-size:6.5vmin}html h3[data-v-28870be9]{font-size:5.5vmin}html p[data-v-28870be9]{font-size:5vmin}html a[data-v-28870be9]{font-size:4.5vmin}html small[data-v-28870be9]{font-size:3vmin}body[data-v-28870be9]{background:linear-gradient(90deg,#0cf,#fff,#0af)}.page[data-v-28870be9]{width:100%}.page-enter[data-v-28870be9]{opacity:0}.page-enter-active[data-v-28870be9]{transition:opacity 1s}#main[data-v-28870be9]{height:100vh;display:flex;align-items:center;justify-content:space-evenly;flex-direction:column}[data-v-28870be9] #board .last{background:#90ee90}[data-v-28870be9] #board li{width:26.66666666666667vmin;height:26.66666666666667vmin;font-size:10vmin}@media screen and (orientation:portrait){[data-v-28870be9] #board li{width:33.333333333333336vmin;height:33.333333333333336vmin}}',""]),t.exports=e},323:function(t,e,n){"use strict";n.r(e);var o={layout:"board_game",data:function(){return{banmen:[["","",""],["","",""],["","",""]],turn:!0,status:"",p1:"taiki",p2:"hoge",pos:{row:-1,col:-1},finished:!1}},computed:{turnDisp:function(){return"現在は".concat(this.checkPlayer(),"さんのターンです。")}},methods:{selectOne:function(t,col,e){this.finished||(""==e?(e=this.turn?"◯":"✕",this.banmen[t].splice(col,1,e),this.pos.row=t,this.pos.col=col,this.checkEnd(t,col)?(this.status="".concat(this.checkPlayer(),"さんの勝利です。"),this.finished=!0):this.turn=!this.turn):this.status="既に置かれています。")},checkPlayer:function(){return this.turn?this.p1:this.p2},checkEnd:function(t,col){return this.banmen[t][0]==this.banmen[t][1]&&this.banmen[t][0]==this.banmen[t][2]||this.banmen[0][col]==this.banmen[1][col]&&this.banmen[0][col]==this.banmen[2][col]||(""!=this.banmen[1][1]&&(this.banmen[0][0]==this.banmen[1][1]&&this.banmen[0][0]==this.banmen[2][2]||this.banmen[0][2]==this.banmen[1][1]&&this.banmen[0][2]==this.banmen[2][0])||void 0)},addColor:function(){},addLast:function(t,col){return this.pos.row==t&&this.pos.col==col?"last":""}}},r=(n(297),n(7)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"main"}},[n("div",{staticStyle:{transform:"rotateZ(180deg)"}},[t._v(t._s(t.status)+" "+t._s(t.turnDisp))]),n("Board",{attrs:{game:"OXGame",selectOne:t.selectOne,addColor:t.addColor,addLast:t.addLast,banmen:t.banmen}}),n("div",[t._v(t._s(t.status)+" "+t._s(t.turnDisp))])],1)])}),[],!1,null,"28870be9",null);e.default=component.exports;installComponents(component,{Board:n(174).default})}}]);