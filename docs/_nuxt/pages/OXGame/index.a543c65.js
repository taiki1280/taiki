(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{175:function(t,n,e){var content=e(177);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(19).default)("7885f47b",content,!0,{sourceMap:!1})},176:function(t,n,e){"use strict";var o=e(175);e.n(o).a},177:function(t,n,e){(n=e(18)(!1)).push([t.i,'*,:after,:before{margin:0;box-sizing:border-box;text-decoration:none;list-style:none}html ::-webkit-scrollbar{display:none;-webkit-appearance:none}html *{font-family:Georgia,"ＭＳ 明朝";font-weight:400}html h1{font-size:7vmin}html h2{font-size:6.5vmin}html h3{font-size:5.5vmin}html p{font-size:5vmin}html a{font-size:4.5vmin}html small{font-size:3vmin}body{background:linear-gradient(90deg,#0af,#fff,#0af)}.page{width:100%}.page-enter{opacity:0}.page-enter-active{transition:opacity 1s}#board *{box-sizing:border-box}#board li,#board ul{display:flex;align-items:center;justify-content:center;padding:0;list-style:none}#board ul li{border-top:.5px solid;border-left:.5px solid}#board ul li:last-of-type{border-right:.5px solid}#board ul:last-of-type{border-bottom:.5px solid}',""]),t.exports=n},178:function(t,n,e){"use strict";e.r(n);var o={props:{banmen:Array,game:String,addColor:Function,selectOne:Function,addLast:Function},methods:{set:function(t){switch(this.game){case"Othello":return"";case"Shogi":return 1==t.length?"":t[3];default:return t}}}},r=(e(176),e(5)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"board"}},t._l(t.banmen,(function(n,o){return e("ul",{key:o},t._l(n,(function(n,col){return e("li",{key:col,class:t.addLast(o,col),on:{click:function(e){return t.selectOne(o,col,n)}}},[e("div",{class:t.addColor(o,col,n)},[t._v(t._s(t.set(n)))])])})),0)})),0)}),[],!1,null,null,null);n.default=component.exports},183:function(t,n,e){var content=e(301);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(19).default)("65a63fb4",content,!0,{sourceMap:!1})},300:function(t,n,e){"use strict";var o=e(183);e.n(o).a},301:function(t,n,e){(n=e(18)(!1)).push([t.i,'*[data-v-4522c54a],[data-v-4522c54a]:after,[data-v-4522c54a]:before{margin:0;box-sizing:border-box;text-decoration:none;list-style:none}html[data-v-4522c54a] ::-webkit-scrollbar{display:none;-webkit-appearance:none}html *[data-v-4522c54a]{font-family:Georgia,"ＭＳ 明朝";font-weight:400}html h1[data-v-4522c54a]{font-size:7vmin}html h2[data-v-4522c54a]{font-size:6.5vmin}html h3[data-v-4522c54a]{font-size:5.5vmin}html p[data-v-4522c54a]{font-size:5vmin}html a[data-v-4522c54a]{font-size:4.5vmin}html small[data-v-4522c54a]{font-size:3vmin}body[data-v-4522c54a]{background:linear-gradient(90deg,#0af,#fff,#0af)}.page[data-v-4522c54a]{width:100%}.page-enter[data-v-4522c54a]{opacity:0}.page-enter-active[data-v-4522c54a]{transition:opacity 1s}#main[data-v-4522c54a]{height:100vh;display:flex;align-items:center;justify-content:space-evenly;flex-direction:column}[data-v-4522c54a] #board .last{background:#90ee90}[data-v-4522c54a] #board li{width:26.66666666666667vmin;height:26.66666666666667vmin;font-size:10vmin}@media screen and (orientation:portrait){[data-v-4522c54a] #board li{width:33.333333333333336vmin;height:33.333333333333336vmin}}',""]),t.exports=n},323:function(t,n,e){"use strict";e.r(n);var o={layout:"board_game",data:function(){return{banmen:[["","",""],["","",""],["","",""]],turn:!0,status:"",p1:"taiki",p2:"hoge",pos:{row:-1,col:-1},finished:!1}},computed:{turnDisp:function(){return"現在は".concat(this.checkPlayer(),"さんのターンです。")}},methods:{selectOne:function(t,col,n){this.finished||(""==n?(n=this.turn?"◯":"✕",this.banmen[t].splice(col,1,n),this.pos.row=t,this.pos.col=col,this.checkEnd(t,col)?(this.status="".concat(this.checkPlayer(),"さんの勝利です。"),this.finished=!0):this.turn=!this.turn):this.status="既に置かれています。")},checkPlayer:function(){return this.turn?this.p1:this.p2},checkEnd:function(t,col){return this.banmen[t][0]==this.banmen[t][1]&&this.banmen[t][0]==this.banmen[t][2]||this.banmen[0][col]==this.banmen[1][col]&&this.banmen[0][col]==this.banmen[2][col]||(""!=this.banmen[1][1]&&(this.banmen[0][0]==this.banmen[1][1]&&this.banmen[0][0]==this.banmen[2][2]||this.banmen[0][2]==this.banmen[1][1]&&this.banmen[0][2]==this.banmen[2][0])||void 0)},addColor:function(){},addLast:function(t,col){return this.pos.row==t&&this.pos.col==col?"last":""}}},r=(e(300),e(5)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{attrs:{id:"main"}},[e("div",{staticStyle:{transform:"rotateZ(180deg)"}},[t._v(t._s(t.status)+" "+t._s(t.turnDisp))]),e("Board",{attrs:{game:"OXGame",selectOne:t.selectOne,addColor:t.addColor,addLast:t.addLast,banmen:t.banmen}}),e("div",[t._v(t._s(t.status)+" "+t._s(t.turnDisp))])],1)])}),[],!1,null,"4522c54a",null);n.default=component.exports;installComponents(component,{Board:e(178).default})}}]);