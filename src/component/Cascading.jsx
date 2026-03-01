import NextBtn from "./NextBtn";
import CssResult from "./CssResult";
import SubmitBtn from "./SubmitBtn";
import CorrectBtn from "./CorrectBtn";
import WrongBtn from "./WrongBtn";
import ValidationError from "./ValidationError";
import Progress from "./Progress";
import NumofQuestions from "./NumofQuestions";
import Timer from "./Timer";

function Cascading({
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
  const questionName = "CSS";
  const questionLogo = "/icons/icon-css.svg";
  const cssStyle = {
    backgroundColor: "rgb(213, 233, 213)",
    padding,
    borderRadius,
    border,
    height,

    // width,
  };

  const numQuestions = questions.CSSQuestions.length;

  const cssQuestions = questions.CSSQuestions;
  const cssScore = cssQuestions.reduce((acc, question, index) => {
    if (answers[index] === question.correctOptions) {
      return acc + 1;
    }
    return acc;
  }, 0);

  return (
    <>
      <div className="setImage">
        <button style={cssStyle}>
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
        <CssResult
          questionName={questionName}
          numQuestions={numQuestions}
          dispatch={dispatch}
          cssScore={cssScore}
          questionLogo={questionLogo}
          cssStyle={cssStyle}
        />
      ) : (
        <div className="Html-Section">
          <div>
            <h1>{questions.CSSQuestions[questionIndex].Question}</h1>
            <Progress
              numQuestions={numQuestions}
              questionIndex={questionIndex}
              answer={answer}
            />
          </div>

          <div>
            <p className="options">
              {questions.CSSQuestions[questionIndex].options.map(
                (opt, index) => (
                  <button
                    key={index}
                    className={`optBtn ${click === index ? "optBtn_Click" : ""}
                   ${isSubmitted ? (index === questions.CSSQuestions[questionIndex].correctOptions ? "correct_Opt" : "wrong_Opt") : ""}`}
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
                        questions.CSSQuestions[questionIndex].correctOptions ? (
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

export default Cascading;
