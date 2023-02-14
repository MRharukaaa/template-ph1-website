"use strict";

// 問題点
// ・クラス名がサンプルコードと違うから、cssを適用するにはそこを対応させないといけない。うわあ
// ・あと写真のパス名も変える

// {        ←ここ最後に直して機能させて
/**
 * @typedef QUIZ
 * @property {number} correctNumber 問題番号
 * @property {string | undefined} note ノート
 * @property {string} question 問題文
 * @property {string[]} answers 回答の配列
 */

/**
 * @description 問題と回答の定数
 * @type {QUIZ[]}
 */
// ☆←このコメントは何？？
// https://ics.media/entry/6789/

// クイズ内容まとめる↓
const ALL_QUIZ = [
  {
    id: 1,
    question:
      "日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？",
    answers: ["約28万人", "約79万人", "約183万人"],
    correctNumber: 1,
    note: "経済産業省 2019年3月 － IT 人材需給に関する調査",
  },
  {
    id: 2,
    question:
      "既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？",
    answers: ["INTECH", "BIZZTECH", "X-TECH"],
    correctNumber: 2,
  },
  {
    id: 3,
    question: "IoTとは何の略でしょう？",
    answers: [
      "Internet of Things",
      "Integrate into Technology",
      "Information on Tool",
    ],
    correctNumber: 0,
  },
  {
    id: 4,
    question:
      "イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？",
    answers: ["Society 5.0", "CyPhy", "SDGs"],
    correctNumber: 0,
    note: "Society5.0 - 科学技術政策 - 内閣府",
  },
  {
    id: 5,
    question:
      "イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？",
    answers: ["Web3.0", "NFT", "メタバース"],
    correctNumber: 0,
  },
  {
    id: 6,
    question:
      "先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？",
    answers: ["約2倍", "約5倍", "約11倍"],
    correctNumber: 1,
    note: "Accenture Technology Vision 2021",
  },
];

// HTML要素を取得↓
/**
 * @description クイズコンテナーの取得
 * @type {HTMLElement}
 */
// クイズの型(コンテナー)↓
const quizContainer = doc
ainer");

/**
 * @description クイズ１つ１つのHTMLを生成するための関数
 * @param quizItem { QUIZ }
 * @param questionNumber { number }
 * @returns {string}
 */
const createQuizHtml = (quizItem, questionNumber) => {
  // ☆引数ありのアロー関数について
  // ここで（）内にquizItem, questionNumberが入っているのは、この関数内でこれらを参照するから。※questionNumberは、クイズの順番番号を表示するのに必須。

  /**
   * @description 回答の生成。HTML
   * @type {string}
   */

  const answerHTML = quizItem.answers
    .map(
      (answer, answerIndex) =>
        `<li class="p-quiz-box__answer__item">
  <button class="p-quiz-box__answer__button js-answer" data-answer="${answerIndex}">
    ${answer}<i class="u-icon__arrow"></i>
  </button>
  </li>`
    )
    .join("");
  // 2/10たてもく～
  // ☆mapメソッドで新しく作り出した配列を連結させて文字列にしている
  // ☆joinメソッドとは
  // 配列の個々の要素を連結させて文字列にする（今回ここでjoinを使っているのは、配列ーまあここでの配列は｀｀で囲まれたとこなんだけどーがmapメソッドで、そのままデータの型を「配列」として返すとうまくHTMLのタグとして機能しないから。機能させるためには、連結させて文字列にする必要がある。）

  // ☆typeofについて
  // console.log(typeof 変数名とか)っていうようにすると、データの型がわかる。
  // ~L81

  // 引用テキストの生成
  const noteHtml = quizItem.note
    ? `<cite class="p-quiz-box__note">
  <i class="u-icon__note"></i>${quizItem.note}
  </cite>`
    : "";
  // ☆ドット.とは
  // 例
  // ${quizItem.note} というようにドットで区切っているのは、quizItemの中の、noteのところだけを持って行きたいから

  // ☆条件演算子
  // 基本の型→  変数 = 条件 ? 値１ : 値２;
  // 条件によって判定を行い、条件に合致していれば値１を変数に代入し、合致していなければ変数に値２を代入します。
  // 条件演算子は複雑な条件式には使えませんが、YesかNoかで答えられる簡単な条件式であれば、条件演算子を使ったコードの方がシンプルな記述にできます。
  // 例  var seijin = (age < 20) ? "未成年です":"成人しています";

  // ☆仮引数実引数
  // https://qiita.com/kajirikajiri/items/789a7fb7e922745f8bd9
  // ~L86

  return `<section class="p-quiz-box js-quiz" data-quiz="${questionNumber}">
    <div class="p-quiz-box__question">
      <h2 class="p-quiz-box__question__title">
        <span class="p-quiz-box__label">Q${questionNumber + 1}</span>
        <span
          class="p-quiz-box__question__title__text">${quizItem.question}</span>
      </h2>
      <figure class="p-quiz-box__question__image">
        <img src="../assets/img/quiz/img-quiz0${quizItem.id}.png" alt="">
      </figure>
    </div>
    <div class="p-quiz-box__answer">
      <span class="p-quiz-box__label p-quiz-box__label--accent">A</span>
      <ul class="p-quiz-box__answer__list">
        ${answersHtml}
      </ul>
      <div class="p-quiz-box__answer__correct js-answerBox">
        <p class="p-quiz-box__answer__correct__title js-answerTitle"></p>
        <p class="p-quiz-box__answer__correct__content">
          <span class="p-quiz-box__answer__correct__content__label">A</span>
          <span class="js-answerText"></span>
        </p>
      </div>
    </div>
    ${noteHtml}
  </section>`;
};
// ~L114

/**
 * @description 配列の並び替え
 * @param arrays {Array}
 * @returns {Array}
 */

const shuffle = (arrays) => {
  const array = arrays.slice();
  for (let i = array.length - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    // randomIndexの中には整数しかない
    // 右端の値も含みたいときは乱数の発生式に１足す必要ある
    // よってこの場合、i + 1だから、0以上i以下になってる

    // ☆なんでslice?
    // 
    // https://pisuke-code.com/js-generate-integer-random/
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
};
// ☆コンストラクタとは？
// インスタンス(実体)を作成する関数のこと
// https://www.sejuku.net/blog/25328

// ☆このarraysはshuffleの仮引数
// ALL_QUIZが実引数

// ☆sliceとは
// https://www.sejuku.net/blog/25488

// ☆Math.floorとは
// https://magazine.techacademy.jp/magazine/27120

/**
 * @description quizArrayに並び替えたクイズを格納
 * @type {Array}
 */
const quizArray = shuffle(ALL_QUIZ);
// shuffleの実引数がALL_QUIZ
// ～L134

/**
 * @type {string}
 * @description 生成したクイズのHTMLを #js-quizContainer に挿入
 */
quizContainer.innerHTML = quizArray
  .map((quizItem, index) => {
    return createQuizHtml(quizItem, index);
  })
  .join("");
  // ☆mapメソッド
  // https://www.sejuku.net/blog/21812
  // ～L143









// // ここから前のやつ

//   // 全ての問題を取得↓
//   const allQuiz = document.querySelectorAll(".q-box-question");

//   // クイズ
//   allQuiz.forEach((quiz) => {
//     const answers = quiz.querySelectorAll(".js-quiz-boxes-button");
//     const selectedQuiz = Number(quiz.getAttribute("data-quiz"));
//     const answerBox = quiz.querySelector(".p-quiz-box__answer");
//     const showAnswer = quiz.querySelector(".show-answer");
//     const showEx = quiz.querySelector(".show-answer-ex");
//     const setDisabled = () => {
//       answers.forEach((answer) => {
//         answer.style.pointerEvents = "none";
//       });
//     };

//     // 選択肢
//     answers.forEach((answer, selectedAnswer) => {
//       answer.addEventListener("click", () => {
//         // 押されたら出現させる↓
//         answerBox.classList.add("add-p-quiz-box__answer");
//         answer.classList.add("selected-answer");

//         // Disabledのやつ。関数呼び出してる↓
//         setDisabled();

//         // もしCORRECT_ANSWERS[selectedQuiz].indexがselectedAnswerと等しかったら正解↓
//         const isCorrect =
//           CORRECT_ANSWERS[selectedQuiz].index === selectedAnswer;
//         // 説明↓
//         showEx.innerText = CORRECT_ANSWERS[selectedQuiz].value;
//         if (isCorrect) {
//           showAnswer.innerText = "正解！";
//           // 要素.classList・・・
//           showAnswer.classList.add("correct-answer");
//         } else {
//           showAnswer.innerText = "不正解・・・";
//           showAnswer.classList.add("incorrect-answer");
//         }
//       });
//     });
//   });
// }
