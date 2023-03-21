const ham = $('#js-hamburger'); //js-hamburgerの要素を取得し、変数hamに格納
const head = $('#js-header'); //js-headerの要素を取得し、変数headに格納
const nav = $('#js-nav');
const navList = $('#js-nav-list');
const navItem1 = $('#js-nav-item-first');
const navItem2 = $('#js-nav-item-second');
const navItem3 = $('#js-nav-item-third');
const navItem4 = $('#js-nav-item-fourth');




ham.on('click', function () { //ハンバーガーメニューをクリックしたら
    ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
    head.toggleClass('active'); // ヘッダーにactiveクラスを付け外し
    nav.toggleClass('active');
    navList.toggleClass('active');
    navItem1.toggleClass('active');
    navItem2.toggleClass('active');
    navItem3.toggleClass('active');
    navItem4.toggleClass('active');


    // メニューにfooter要素を追加↓
    $('#js-footer').html(
        // 公式ライン↓
        `<div class="h-fixed-line">
            <a href="https://line.me/R/ti/p/@651htnqp?from=page"
            target="_blank"
            rel="noopener noreferrer"
            >
                <div class="h-fixed-line-box">
                    <i class="h-link-icon-in-greenbox">
                    <img
                        src="./assets/img/icon/icon-line.svg"
                        alt=""
                        width="36px"
                        height="36px"
                    />
                    </i>
                    <p class="h-link-icon-text">POSSE公式LINE追加</p>
                    <i class="link-icon-white">
                    <img
                    src="./assets/img/icon/icon-link-light.svg"
                    alt=""
                    width="18px"
                    height="18px"
                    />
                    </i>
                </div>
            </a>
        </div>
        <!-- 公式ラインここまで↑ -->
            <div class="footer-inner">
                <div class="h-footer-inner-top">      <div                class="footer-inner-top-fi  rst">
                    </div>
                    <div class="footer-inner-top-second">
                        <a href="https://posse-ap.com/">
                        POSSE公式サイト<img src="./assets/img/icon/icon-link-gray-dark.svg" alt="" width="14px" height="14px">
                        </a>
                    </div>
                </div>
        
    <div class="footer-inner-bottom">
        <div class="h-two-icons">
            <div class="twitter-icon">
                <a
                href="https://twitter.com/posse_program"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                >
                <img
                src="./assets/img/icon/icon-twitter.svg"
                alt="ツイッター公式アカウント"
                />
            </a>
            </div>
            <div class="instagram-icon">
                <a
                href="https://www.instagram.com/posse_programming/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="instagram"
                ><img
                src="./assets/img/icon/icon-instagram.svg"
                alt="インスタグラム公式アカウント"
                />
                </a>
            </div>
        </div>
        </div>
    </div>`
        );
});