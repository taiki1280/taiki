// jQueryメソッド
jQuery(function () {
  // ロード時
  var index = $.cookie("選択されたタブ")
  if (index == undefined) {
    index = 0;
  }
  $(".タブ").eq(index).addClass('選択中')
  $(".ページ").eq(index).addClass('現在表示中')

  // タブがクリックされた時
  $('.タブ').click(function () {
    // クリックされたタブの順番をindex変数へ
    index = $('.タブ').index(this);
    switch_tab(index)
  });

  // スワイプされた時
  // $main = $("nav>*")
  $main = $("#main")
  $main.on('touchstart', onTouchStart); //指が触れたか検知
  $main.on('touchmove', onTouchMove); //指が動いたか検知
  $main.on('touchend', onTouchEnd); //指が離れたか検知
  var direction, position;

  //スワイプ開始時の横方向の座標を格納
  function onTouchStart(event) {
    position = getPosition(event);
    direction = ''; //一度リセットする
  }
  
  //スワイプの方向（left／right）を取得
  function onTouchMove(event) {
    if (position - getPosition(event) > 70) { // 70px以上移動しなければスワイプと判断しない
      direction = 'left'; //左と検知
    } else if (position - getPosition(event) < -70) {  // 70px以上移動しなければスワイプと判断しない
      direction = 'right'; //右と検知
    }
  }
  
  function onTouchEnd(event) {
    // タブのインデックスを取得
    let min = 0
    let max = $(".タブ").length - 1
    switch (direction) {
      case "left":
        index++
        break;
      case "right":
        index--
        break;
    }
    if (index < min) {
      index = max
    } else if (index > max) {
      index = min
    }
    switch_tab(index)
  }

  //横方向の座標を取得
  function getPosition(event) {
    return event.originalEvent.touches[0].pageX;
  }
});

// タブの入れ替えメソッド
function switch_tab(index) {
  $.cookie("選択されたタブ", index)
  // 選択中のタブを非選択にし、内容を非表示
  $('.タブ').removeClass('選択中');
  $('.ページ').removeClass('現在表示中')
  // 選択されたタブを選択中にし、内容を表示
  $('.タブ').eq(index).addClass('選択中');
  $('.ページ').eq(index).addClass('現在表示中');
};
