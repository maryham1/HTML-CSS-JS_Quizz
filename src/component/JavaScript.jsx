import NextBtn from "./NextBtn";
import JsResult from "./JsResult";
import SubmitBtn from "./SubmitBtn";
import CorrectBtn from "./CorrectBtn";
import WrongBtn from "./WrongBtn";
import ValidationError from "./ValidationError";
import Progress from "./Progress";
import NumofQuestions from "./NumofQuestions";
import Timer from "./Timer";

function JavaScript({
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

  padding = "5px",
  borderRadius = "5px",
  border = "none",
  height = "50px",
}) {
  const label = ["A", "B", "C", "D"];
  const questionName = "JavaScript";
  const questionLogo = "src/assets/icons/icon-js.svg";
  const jsStyle = {
    backgroundColor: "rgb(217, 217, 240)",
    padding,
    borderRadius,
    border,
    height,
  };

  const numQuestions = questions.JsQuestions.length;

  const jsQuestions = questions.JsQuestions;
  const jsScore = jsQuestions.reduce((acc, question, index) => {
    if (answers[index] === question.correctOptions) {
      return acc + 1;
    }
    return acc;
  }, 0);

  return (
    <>
      <div className="setImage">
        <button style={jsStyle}>
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
        <JsResult
          questionName={questionName}
          numQuestions={numQuestions}
          dispatch={dispatch}
          jsScore={jsScore}
          questionLogo={questionLogo}
          jsStyle={jsStyle}
        />
      ) : (
        <div className="Html-Section">
          <div>
            <h1>{questions.JsQuestions[questionIndex].Question}</h1>
            <Progress
              numQuestions={numQuestions}
              questionIndex={questionIndex}
              answer={answer}
            />
          </div>

          <div>
            <p className="options">
              {questions.JsQuestions[questionIndex].options.map(
                (opt, index) => (
                  <button
                    key={index}
                    className={`optBtn ${click === index ? "optBtn_Click" : ""}
                   ${isSubmitted ? (index === questions.JsQuestions[questionIndex].correctOptions ? "correct_Opt" : "wrong_Opt") : ""}`}
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
                        questions.JsQuestions[questionIndex].correctOptions ? (
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

export default JavaScript;
