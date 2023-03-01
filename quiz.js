"use strict";

const quizContainer = document.getElementById("js-quizContainer");
// IDを取得

const ALL_QUIZ = [
    {
        id: 1,
        question : "日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？",
        answers: ["約28万人", "約79万人", "約183万人"],
        correctNumber: 1,
        note: "経済産業省 2019年3月 － IT 人材需給に関する調査",
    },
    // 配列の中の中括弧は、連想配列。要素とは違う。
    // questionとか、配列の要素の１つ１つの内容を細かく区別するため。
    // {何か : , 何か : };この形で決まってる
    {
        id: 2,
        question : "既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？",
        answers: ["INTECH", "BIZZTECH", "X-TECH"],
        correctNumber: 2,
    },
    {
        id: 3,
        question : "IoTとは何の略でしょう？",
        answers: [
            "Internet of Things",
            "Integrate into Technology",
            "Information on Tool",
            
        ],
        correctNumber: 0,
    },
    {
        id: 4,
        question : "日本が目指すサイバー空間とフィジカル空間を硬度に融合させたシステムによって開かれる未来社会のことをなんと言うでしょうか？",
        answers: ["Society 5.0", "CyPhy", "SDGs"],
        correctNumber: 0,
        note: "Society5.0 - 科学技術政策 - 内閣府",
    },
    {
        id: 5,
        question : "イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？",
        answers: ["Web3.0", "NFT", "メタバース"],
        correctNumber: 0,
    },
    {
        id: 6,
        question : "先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？",
        answers: ["約2倍", "約5倍", "約11倍"],
        correctNumber: 1,
        note: "Accenture Technology Vision 2021",
    },
];

// ここに問題文
let createAllQuiz = '';

function arrShuffle(arr) {
    var len = arr.length;
    while(len > 0){
        var rnd = Math.floor(Math.random() * len);
        var tmp = arr[len-1];
        arr[len-1] = arr[rnd];
        arr[rnd] = tmp;
        len-=1;
    }
}

arrShuffle(ALL_QUIZ);

ALL_QUIZ.forEach((element, index) => {
    // indexは問題番号とってる
// ここでの↑elementはALL_QUIZの｛｝で区切られてるやつ。
    
    let quiz = '';
    
    quiz += `
    <div class="q-box-question" data-quiz="${element.id - 1}">
        <section class="q-box-question-first">
    `;
    
    quiz += `
    <div class="q-box-question-question">
        <div class="q-box-question-question-contents">
            <div class="q-box-question-question-q1">Q${index + 1}</div>
            <div class="q-box-question-question-sentence">
            ${element.question}
            </div>
        </div>
        <figure class="q-box-question-question-img">
            <img src="./assets/img/quiz/img-quiz0${element.id}.png" alt="" width="70%" />
        </figure>
    </div>
    `;
    
    // 答え
    quiz += `
    <div class="q-box-question-answer">
        <div class="q-box-question-answer-content">
            <div class="q-box-question-answer-q1">A</div>
            <!-- 回答ボタンのボタン押すやつjs -->
            <div class="js-quiz-boxes">
                <div class="js-quiz-boxes-button">
                    ${element.answers[0]}
                    <img src="./assets/img/icon/icon-arrow.svg" alt="" class="js-quiz-boxes-button-arrow"/>
                </div>
                <div class="js-quiz-boxes-button">
                    ${element.answers[1]}
                    <img src="./assets/img/icon/icon-arrow.svg" alt="" class="js-quiz-boxes-button-arrow"/>
                </div>
                <div class="js-quiz-boxes-button">
                    ${element.answers[2]}
                    <img src="./assets/img/icon/icon-arrow.svg" alt="" class="js-quiz-boxes-button-arrow"/>
                </div>
            </div>
            <!-- 回答ボタンの答えjs -->
            <div class="js-quiz-answerBox"></div>
        </div>
    </div>`
    
    // 正解不正解↓
    quiz += `
    <div class="p-quiz-box__answer">
        <p class="show-answer"></p>
        <p>
            <span>A</span>
            <span class="show-answer-ex"></span>
        </p>
    </div>`
    
    // ↓ここからtrueかfalseかで引用を表示させるかさせないかを決める処理。
    // ☆実はelement.noteそのもので、trueかfalseの値を持っている！！！
    // 引用
    if(element.note) {
        //trueの場合の処理↓
        quiz += `
        <div class="q-box-question-cite">
            <img src="./assets/img/icon/icon-note.svg" alt="" class="q-box-question-cite-icon" width="24.96px"  height="16.39px"/>
            <div class="q-box-question-cite-sentence">
                ${element.note}
            </div>
        </div>
        `;
    }
    // falseのときの判定のときの処理は書かなくていい。
    
    quiz += `
        </section>
    </div>
    `;

    createAllQuiz += quiz;
    // createAllQuizにそれぞれの一個一個のquizが蓄積されていく
});

quizContainer.innerHTML = createAllQuiz;
// これに↑６問分のクイズが入っている


// 全ての問題を取得↓
const allQuiz = document.querySelectorAll(".q-box-question");

// クイズ
const CORRECT_ANSWERS = [
    {
        correctNumber: 1,
        value: "約79万人",
        // 定義している↑
    },
    {
        correctNumber: 2,
        value: "X-TECH",
        // 定義している↑
    },
    {
        correctNumber: 0,
        value: "Internet of Things",
        // 定義している↑
    },
    {
        correctNumber: 0,
        value: "Society 5.0",
        // 定義している↑
    },
    {
        correctNumber: 0,
        value: "Web3.0",
        // 定義している↑
    },
    {
        correctNumber: 1,
        value: "約5倍",
        // 定義している↑
    },
];

allQuiz.forEach((quiz) => {
    const answers = quiz.querySelectorAll(".js-quiz-boxes-button");
    const selectedQuiz = Number(quiz.getAttribute("data-quiz"));
    const answerBox = quiz.querySelector(".p-quiz-box__answer");
    const showAnswer = quiz.querySelector(".show-answer");
    const showEx = quiz.querySelector(".show-answer-ex");
    const setDisabled = () => {
        answers.forEach((answer) => {
            answer.style.pointerEvents = "none";
        });
    };

    // 選択肢
    answers.forEach((answer, selectedAnswer) => {

        answer.addEventListener("click", () => {
            // 押されたら出現させる↓
            answerBox.classList.add("add-p-quiz-box__answer");
            answer.classList.add("selected-answer");

            // Disabledのやつ。関数呼び出してる↓
            setDisabled();

            // もしCORRECT_ANSWERS[selectedQuiz].correctNumberがselectedAnswerと等しかったら正解↓
            const isCorrect = CORRECT_ANSWERS[selectedQuiz].correctNumber === selectedAnswer;
            // 説明↓
            showEx.innerText = CORRECT_ANSWERS[selectedQuiz].value;
            if (isCorrect) {
                showAnswer.innerText = "正解！";
                // 要素.classList・・・
                showAnswer.classList.add("correct-answer");
            } else {
                showAnswer.innerText = "不正解・・・";
                showAnswer.classList.add("incorrect-answer");
                answerBox.classList.add("incorrect-answer-box");
            }
        });
    });
});
