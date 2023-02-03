"use strict";

{
  const CORRECT_ANSWERS = [
    {
      index: 1,
      value: "約79万人",
      // 定義している↑
    },
    {
      index: 1,
      value: "約79万人",
      // 定義している↑
    },
  ];
  // 全ての問題を取得↓
  const allQuiz = document.querySelectorAll(".q-box-question");

  // クイズ
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

        // もしCORRECT_ANSWERS[selectedQuiz].indexがselectedAnswerと等しかったら正解↓
        const isCorrect =
          CORRECT_ANSWERS[selectedQuiz].index === selectedAnswer;
        // 説明↓
        showEx.innerText = CORRECT_ANSWERS[selectedQuiz].value;
        if (isCorrect) {
          showAnswer.innerText = "正解！";
          // 要素.classList・・・
          showAnswer.classList.add("correct-answer");
        } else {
          showAnswer.innerText = "不正解・・・";
          showAnswer.classList.add("incorrect-answer");
        }
      });
    });
  });
}
