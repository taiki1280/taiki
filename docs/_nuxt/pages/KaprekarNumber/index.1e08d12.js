(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{321:function(n,t,r){"use strict";r.r(t);r(116);var e={data:function(){return{digit_num:3,Kaprekar_num_list:[],show:!1}},computed:{find_Kaprekar_num:function(){var n=1;this.Kaprekar_num_list=[];for(var i=1;i<=this.digit_num;i++)n*=10;for(var t=n/10+1;t<n;t++)if(t%9==0){var r=String(t).split("");r.sort((function(a,b){return a>b?-1:a<b?1:0}));var e=parseInt(r.join(""));r.sort((function(a,b){return a<b?-1:a>b?1:0})),e-parseInt(r.join(""))==t&&this.Kaprekar_num_list.push(t)}}}},_=r(5),component=Object(_.a)(e,(function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("div",{attrs:{id:"main"}},[r("button",{on:{click:function(t){n.show=!n.show}}},[n._v("カプレカ数とは")]),n._v(" "),n.show?r("ol",[r("li",[n._v("2乗して前の部分と後ろの部分に分けて和を取ったとき、元の値に等しくなるもの。")]),n._v(" "),r("li",{staticStyle:{color:"red"}},[n._v("桁を並べ替えて最大にしたものから最小にしたものとの差を取ったとき、元の値に等しくなるもの。")]),n._v(" "),n._m(0),n._v(" "),r("p",[n._v("上記の2の定義に従ったプログラムです。")]),n._v(" "),r("p",[n._v("7以上の整数は僕のPCでは動作しませんでした。")]),n._v(" "),r("p",[n._v("\n      2020/07/12 桁が増えるほど計算に時間はかかりますが、無限ループしてしまうバグ修正しました。\n      9桁まで動作を確認しました。\n    ")])]):n._e(),n._v(" "),r("ul",[r("li",[n._v("桁数を入力してください")]),n._v(" "),r("li",[r("input",{directives:[{name:"model",rawName:"v-model.number",value:n.digit_num,expression:"digit_num",modifiers:{number:!0}}],attrs:{type:"number",min:"1"},domProps:{value:n.digit_num},on:{input:function(t){t.target.composing||(n.digit_num=n._n(t.target.value))},blur:function(t){return n.$forceUpdate()}}})])]),n._v("\n  "+n._s(n.find_Kaprekar_num)+"\n  "),n.digit_num>0?r("div",[r("p",[n._v("「"+n._s(n.digit_num)+"桁」のカプレカ数は以下の「"+n._s(n.Kaprekar_num_list.length)+"個」です。")]),n._v(" "),r("ul",n._l(n.Kaprekar_num_list,(function(t,e){return r("li",{key:e},[n._v(n._s(t))])})),0)]):r("div",[n._v("「"+n._s(n.digit_num)+"桁」のカプレカ数はありません")])])}),[function(){var n=this.$createElement,t=this._self._c||n;return t("p",[t("a",{attrs:{href:"https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%97%E3%83%AC%E3%82%AB%E6%95%B0"}},[this._v("wikipedia参照")])])}],!1,null,null,null);t.default=component.exports}}]);