function JsResult({
  questionName,
  numQuestions,
  dispatch,
  jsScore,
  questionLogo,
  jsStyle,
}) {
  return (
    <div className="result">
      <div className="divv">
        <p> Quiz completed</p>
        <h5>You Scored...</h5>
      </div>
      <div className="div1">
        <div className="score">
          <div className="setImage">
            <button style={jsStyle}>
              <img src={questionLogo} />
            </button>
            <p>{questionName}</p>
          </div>
          <p>
            <span>{jsScore}</span>
            <br /> out of {numQuestions}
          </p>
        </div>
        <button
          className="playAgain"
          onClick={() => dispatch({ type: "restart" })}
        >
          Play Again
        </button>
      </div>
    </div>
  );
}

export default JsResult;
