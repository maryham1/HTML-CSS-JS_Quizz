import CorrectBtn from "./CorrectBtn";
import NextBtn from "./NextBtn";
import NumofQuestions from "./NumofQuestions";
import Progress from "./Progress";
import Result from "./Result";
import SubmitBtn from "./SubmitBtn";
import ValidationError from "./ValidationError";
import WrongBtn from "./WrongBtn";
import Timer from "./Timer";

function Html({
  questions,
  click,
  dispatch,
  questionIndex,
  answer,
  validationError,
  secondsRemaining,
  isSubmitted,
  isFinished,
  answers,
  backgroundColor = "rgb(247, 235, 213)",
  padding = "5px",
  borderRadius = "5px",
  border = "none",
  height = "50px",
}) {
  const label = ["A", "B", "C", "D"];
  const questionName = "HTML";
  const questionLogo = "src/assets/icons/icon-html.svg";
  const htmlStyle = {
    backgroundColor,
    padding,
    borderRadius,
    border,
    height,

    // width,
  };
  console.log(validationError);
  const numQuestions = questions.HTMLQuestions.length;

  const htmlQuestions = questions.HTMLQuestions;
  const htmlScore = htmlQuestions.reduce((acc, question, index) => {
    if (answers[index] === question.correctOptions) {
      return acc + 1;
    }
    return acc;
  }, 0);

  console.log(htmlScore);

  return (
    <>
      <div className="setImage">
        <button style={htmlStyle}>
          <img src={questionLogo} />
        </button>

        <h1 className="question">{questionName}</h1>
      </div>
      {isFinished ? (
        ""
      ) : (
        <NumofQuestions
          questionIndex={questionIndex}
          numQuestions={numQuestions}
        />
      )}
      {isFinished ? (
        <Result
          questionName={questionName}
          numQuestions={numQuestions}
          dispatch={dispatch}
          htmlScore={htmlScore}
          questionLogo={questionLogo}
          htmlStyle={htmlStyle}
        />
      ) : (
        <div className="Html-Section">
          <div>
            <h1>{questions.HTMLQuestions[questionIndex].Question}</h1>
            <Progress
              numQuestions={numQuestions}
              questionIndex={questionIndex}
              answer={answer}
            />
          </div>
          <div>
            <p className="options">
              {questions.HTMLQuestions[questionIndex].options.map(
                (opt, index) => (
                  <button
                    key={index}
                    className={`optBtn ${click === index ? "optBtn_Click" : ""}
                   ${isSubmitted ? (index === questions.HTMLQuestions[questionIndex].correctOptions ? "correct_Opt" : "wrong_Opt") : ""}`}
                    onClick={() =>
                      dispatch({ type: "clickOption", payload: index })
                    }
                  >
                    <p className={click === index ? "label_click" : "label"}>
                      {label[index]}
                    </p>
                    <p>
                      {opt}
                      {isSubmitted ? (
                        index ===
                        questions.HTMLQuestions[questionIndex]
                          .correctOptions ? (
                          <CorrectBtn />
                        ) : (
                          <WrongBtn />
                        )
                      ) : (
                        ""
                      )}
                    </p>
                  </button>
                ),
              )}
            </p>

            {isSubmitted ? (
              <NextBtn
                numQuestions={numQuestions}
                questionIndex={questionIndex}
                dispatch={dispatch}
              />
            ) : (
              <SubmitBtn answer={answer} dispatch={dispatch} />
            )}

            <ValidationError validationError={validationError} />
          </div>
        </div>
      )}
      {isFinished ? (
        ""
      ) : (
        <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
      )}
    </>
  );
}

export default Html;
