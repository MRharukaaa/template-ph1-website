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

  // 各問題での処理
  allQuiz.forEach((quiz) => {
    const answers = quiz.querySelectorAll(".js-quiz-boxes-button");
    const selectedQuiz = Number(quiz.getAttribute("data-quiz"));

    answers.forEach((answer, selectedAnswer) => {
      answer.addEventListener("click", () => {
        // もしCORRECT_ANSWERS[selectedQuiz].indexがselectedAnswerと等しかったら正解
        const isCorrect =
          CORRECT_ANSWERS[selectedQuiz].index === selectedAnswer;
        if (isCorrect){
          alert('正解！！！！！')
        } else {
          alert('不正解！！！！！')
        }
      });
    });
  });
}
