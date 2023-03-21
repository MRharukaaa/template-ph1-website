const ham = $('#js-hamburger'); //js-hamburgerの要素を取得し、変数hamに格納
const body = $('#js-body'); //js-bodyの要素を取得し、変数bodyに格納
ham.on('click', function () { //ハンバーガーメニューをクリックしたら
    ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
    body.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外し
});