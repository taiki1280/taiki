(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{183:function(t,n,e){var content=e(306);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(22).default)("17759a9b",content,!0,{sourceMap:!1})},305:function(t,n,e){"use strict";var c=e(183);e.n(c).a},306:function(t,n,e){(n=e(21)(!1)).push([t.i,'*[data-v-6c804ced],[data-v-6c804ced]:after,[data-v-6c804ced]:before{padding:0;margin:0;box-sizing:border-box;text-decoration:none;list-style:none}html[data-v-6c804ced] ::-webkit-scrollbar{display:none;-webkit-appearance:none}html *[data-v-6c804ced]{font-family:Georgia,"ＭＳ 明朝";font-weight:400}html h1[data-v-6c804ced]{font-size:7vmin}html h2[data-v-6c804ced]{font-size:6.5vmin}html h3[data-v-6c804ced]{font-size:5.5vmin}html p[data-v-6c804ced]{font-size:5vmin}html a[data-v-6c804ced]{font-size:4.5vmin}html small[data-v-6c804ced]{font-size:3vmin}body[data-v-6c804ced]{background:linear-gradient(90deg,#0cf,#fff,#0af)}.page[data-v-6c804ced]{width:100%}.page-enter[data-v-6c804ced]{opacity:0}.page-enter-active[data-v-6c804ced]{transition:opacity 1s}#status[data-v-6c804ced]{background:hsla(0,0%,100%,.2);padding:1vw;margin:5vh 0}#main[data-v-6c804ced]{height:100vh;display:flex;align-items:center;justify-content:space-evenly;flex-direction:column}#main button[data-v-6c804ced],#main div[data-v-6c804ced],#main p[data-v-6c804ced]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media screen and (orientation:portrait){#main[data-v-6c804ced]{height:100vh;margin:auto}}#main ul[data-v-6c804ced]{padding:0;list-style:none;display:flex}#main ul li[data-v-6c804ced]{width:10vw;height:10vw;margin:.5vw;display:flex;justify-content:center;align-items:center;background:#fff;border:.5px solid #000;border-radius:2vw}#main ul li div[data-v-6c804ced]{font-size:5vw}#main ul li p[data-v-6c804ced]{font-size:3vw}@media screen and (orientation:portrait){#main ul li[data-v-6c804ced]{width:20vw;height:20vh;margin:1vh}#main ul li div[data-v-6c804ced]{font-size:7vw}#main ul li p[data-v-6c804ced]{font-size:8vw}}#main .p1[data-v-6c804ced]{color:#000}#main .p2[data-v-6c804ced]{color:red;transform:rotate(180deg)}#main .serve[data-v-6c804ced]{justify-content:center;margin:auto}#main .serve button[data-v-6c804ced]{width:90vw}@media screen and (orientation:portrait){#main .serve button[data-v-6c804ced]{height:12vh;font-size:6vw}}#main .invisible[data-v-6c804ced]{opacity:0}#status[data-v-6c804ced]{display:none}',""]),t.exports=n},320:function(t,n,e){"use strict";e.r(n);e(81),e(64),e(65);var c=e(78);function d(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var o=e(83);function r(t){return function(t){if(Array.isArray(t))return Object(c.a)(t)}(t)||d(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=e(106),v=e(107);function h(t){for(var n,e=(n=t,Object(l.a)(n)||d(n)||Object(o.a)(n)||Object(v.a)()).slice(0),i=e.length-1;i>=0;i--){var c=Math.floor(Math.random()*(i+1)),r=[e[c],e[i]];e[i]=r[0],e[c]=r[1]}return e}var m={data:function(){return{mode_lists:[],mode:"",status:"",mountain:{p1:[],p2:[]},field:{p1:"♠♣",p2:"♥♦"},turn:!0}},created:function(){this.mode_lists=[["CPU","CPUと対戦"],["local","ローカル対人"]],this.mode="local",this.status="ゲームを開始してください";for(var i=1;i<=13;i++)this.mountain.p1.push("♠"+i),this.mountain.p1.push("♣"+i),this.mountain.p2.push("♥"+i),this.mountain.p2.push("♦"+i);this.mountain.p1=h(this.mountain.p1),this.mountain.p2=h(this.mountain.p2)},computed:{p1_hand:function(){for(var t=[],i=1;i<=4;i++)null!=this.mountain.p1[i-1]&&t.push(this.mountain.p1[i-1]);return t},p2_hand:function(){for(var t=[],i=1;i<=4;i++)null!=this.mountain.p2[i-1]&&t.push(this.mountain.p2[i-1]);return t},p1_mountain:function(){return this.mountain.p1.slice(3,-1)},p2_mountain:function(){return this.mountain.p2.slice(3,-1)},judge_can_serve:function(){var t=parseInt(this.field.p1.replace(/[^0-9]/g,"")),n=parseInt(this.field.p2.replace(/[^0-9]/g,"")),e=[t-1,t+1,n-1,n+1];e.includes(14)&&(e[e.indexOf(14)]=1),e.includes(0)&&(e[e.indexOf(0)]=13);var c,d,o=this.p1_hand.concat(this.p2_hand),l=[];for(var v in o)l.push(parseInt(o[v].replace(/[^0-9]/g,"")));return d=l,!([].concat(r(c=e),r(d)).filter((function(t){return c.includes(t)&&d.includes(t)})).length>0)}},methods:{serve:function(){this.mountain.p1.length>4?this.field.p1=this.mountain.p1.splice(4,1)[0]:this.field.p1=this.mountain.p1.splice(Math.random(4),1)[0],this.mountain.p2.length>4?this.field.p2=this.mountain.p2.splice(4,1)[0]:this.field.p2=this.mountain.p2.splice(Math.random(4),1)[0],this.turn=!this.turn},serve_p1:function(){this.turn&&this.judge_can_serve&&this.serve()},serve_p2:function(){!this.turn&&this.judge_can_serve&&this.serve()},select_one:function(t){var n=parseInt(t.replace(/[^0-9]/g,"")),e=parseInt(this.field.p1.replace(/[^0-9]/g,"")),c=parseInt(this.field.p2.replace(/[^0-9]/g,"")),d=[];d.push(n-1,n+1),d.includes(14)&&(d[d.indexOf(14)]=1),d.includes(0)&&(d[d.indexOf(0)]=13),d.includes(e)&&d.includes(c)?0==Math.random(2)?this.field.p1=t:this.field.p2=t:d.includes(e)?this.field.p1=t:d.includes(c)&&(this.field.p2=t),(d.includes(e)||d.includes(c))&&(this.mountain.p1.includes(t)?this.mountain.p1.length>4?(this.mountain.p1.splice(this.mountain.p1.indexOf(t),1,this.mountain.p1[4]),this.mountain.p1.splice(4,1)):this.mountain.p1.splice(this.mountain.p1.indexOf(t),1):this.mountain.p2.length>4?(this.mountain.p2.splice(this.mountain.p2.indexOf(t),1,this.mountain.p2[4]),this.mountain.p2.splice(4,1)):this.mountain.p2.splice(this.mountain.p2.indexOf(t),1))},add_class:function(t){return["♥","♦"].includes(t[0])?"p2":"p1"}}},f=(e(305),e(7)),component=Object(f.a)(m,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"Speed"}},[e("div",{attrs:{id:"main"}},[e("div",{staticClass:"serve p2",class:{invisible:t.turn||!t.judge_can_serve}},[e("button",{on:{click:function(n){return t.serve_p2()}}},[t._v("バトルゾーンに出す。")])]),t._v(" "),e("div",[e("ul",t._l(t.p2_hand,(function(n,c){return e("li",{key:c,staticClass:"p2",on:{click:function(e){return t.select_one(n)}}},[e("div",[t._v(t._s(n))])])})),0),t._v(" "),e("ul",[e("li",[e("div",[e("p",{staticClass:"p1"},[t._v("残り")]),t._v(" "),e("p",{staticClass:"p1"},[t._v(t._s(t.p1_mountain.length)+"枚")])])]),t._v(" "),e("li",{class:t.add_class(t.field.p1)},[e("div",[e("p",{staticStyle:{transform:"rotateZ(180deg)"}},[t._v(t._s(t.field.p1))]),t._v(" "),e("p",[t._v(t._s(t.field.p1))])])]),t._v(" "),e("li",{class:t.add_class(t.field.p2)},[e("div",[e("p",{staticStyle:{transform:"rotateZ(180deg)"}},[t._v(t._s(t.field.p2))]),t._v(" "),e("p",[t._v(t._s(t.field.p2))])])]),t._v(" "),e("li",[e("div",[e("p",{staticClass:"p2"},[t._v("残り")]),t._v(" "),e("p",{staticClass:"p2"},[t._v(t._s(t.p2_mountain.length)+"枚")])])])]),t._v(" "),e("ul",t._l(t.p1_hand,(function(n,c){return e("li",{key:c,staticClass:"p1",on:{click:function(e){return t.select_one(n)}}},[e("div",[t._v(t._s(n))])])})),0)]),t._v(" "),e("div",{staticClass:"serve p1",class:{invisible:!t.turn||!t.judge_can_serve}},[e("button",{on:{click:function(n){return t.serve_p1()}}},[t._v("バトルゾーンに出す。")])])]),t._v(" "),e("div",{attrs:{id:"status"}},[e("ul",[e("li",[t._v(t._s(t.status))]),t._v(" "),e("li",[t._v("p1山札"+t._s(t.mountain.p1.slice(4)))]),t._v(" "),e("li",[t._v("p2山札"+t._s(t.mountain.p2.slice(4)))]),t._v(" "),e("li",[t._v("p1手札"+t._s(t.p1_hand))]),t._v(" "),e("li",[t._v("p2手札"+t._s(t.p2_hand))]),t._v(" "),e("li",[t._v("p1バトルゾーン"+t._s(t.field.p1))]),t._v(" "),e("li",[t._v("p2バトルゾーン"+t._s(t.field.p2))])])])])}),[],!1,null,"6c804ced",null);n.default=component.exports}}]);