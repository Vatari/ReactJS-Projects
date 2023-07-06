import React from "react";
import { useGlobalContext } from "./context";

import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";
function App() {
  const {
    waiting,
    loading,
    questions,
    index,
    correct,
    nextQuestion,
    checkAnswer,
  } = useGlobalContext();
  if (waiting) {
    return <SetupForm />;
  }
  if (loading) {
    return <Loading />;
  }
  const { question, incorrect_answers, correct_answer } = questions[index];
  //const answers = [...incorrect_answers, correct_answer];

  let answers = [...incorrect_answers];
  const tempIndex = Math.floor(Math.random() * 4);

  return (
    <main>
      <Modal />
      <section className="quiz">
        <p className="correct-answers">
          Correct answers: {correct}/{index}
        </p>
        <article className="container">
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className="btn-container">
            {answers.map((answer, index) => {
              return (
                <button
                  key={index}
                  onClick={() => checkAnswer(correct_answer === answer)}
                  className="answer-btn"
                  dangerouslySetInnerHTML={{ __html: answer }}
                />
              );
            })}
          </div>
        </article>
        <button className="next-question" onClick={nextQuestion}>
          Next question
        </button>
      </section>
    </main>
  );
}

export default App;
