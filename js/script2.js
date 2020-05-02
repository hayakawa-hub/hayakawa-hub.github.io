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
  $("#marquee dl").prepend($("#marquee dl:last-child"));

    // リストの位置を変更（画像1枚分ずらす）
  $("#marquee dl").css("left", -950);

  // 3000ミリ秒（変数intervalの値）ごとにslideTimer関数を実行
  timer = setInterval(slideTimer, interval);

  // slideTimer()関数
  function slideTimer(){

    // 画像1枚分左へスクロール
    $("#marquee dl").animate({"left" : "-=950px"}, duration, function(){
      // リストの順番を変更
      $(this).append($("#marquee dl:first-child"));

      // リストの位置を変更
      $(this).css("left", -950);
    });
