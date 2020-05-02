$(function(){
  // スクロールの方向　-1の時には左、1の時には右
  var dir = -1;

  // スクロールのインターバル(何秒ごとにスクロールさせるか。3000ミリ秒に設定)
  var interval = 3000;

  // スクロールのスピード（700ミリ秒に設定）
  var duration = 700;

  // タイマー用の変数
  var timer;

  // リストの順番を変更（3番目を1番最初にする）
  $("#slideMain ul").prepend($("#slide li:last-child"));

  // リストの位置を変更（画像1枚分ずらす）
  $("#slideMain ul").css("left", -950);

  // 3000ミリ秒（変数intervalの値）ごとにslideTimer関数を実行
  timer = setInterval(slideTimer, interval);

  // slideTimer()関数
  function slideTimer(){
    // スクロール方向の判断
    if(dir == -1){
      // 画像1枚分左へスクロール
      $("#slideMain ul").animate({"left" : "-=950px"}, duration, function(){
        // リストの順番を変更
        $(this).append($("#slideMain li:first-child"));

        // リストの位置を変更
        $(this).css("left", -950);
      });
    }else{
      // 画像1枚分右へスクロール
      $("#slideMain ul").animate({"left" : "+=950px"}, duration, function(){
        // リストの順番を変更
        $(this).prepend($("#slideMain li:last-child"));

        // リストの位置を変更
        $(this).css("left", -950);

        // 左方向へリセット
        dir = -1;
      });
    }
  }

  // 前へ戻るボタン
  $("#prevBtn").click(function(){
    // スクロール方向の切り替え（右）
    dir = 1;

    // タイマーを停止して再スタート
    clearInterval(timer);
    timer = setInterval(slideTimer, interval);

    // 初回の関数実行
    slideTimer();
  });

  // 次へ進むボタン
  $("#nextBtn").click(function(){
    // スクロール方向の切り替え（左）
    dir = -1;

    // タイマーを停止して再スタート
    clearInterval(timer);
    timer = setInterval(slideTimer, interval);

    // 初回の関数実行
    slideTimer();
  });
});
