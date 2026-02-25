function CssResult({
  questionName,
  numQuestions,
  dispatch,
  cssScore,
  questionLogo,
  cssStyle,
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
            <button style={cssStyle}>
              <img src={questionLogo} />
            </button>
            <p>{questionName}</p>
          </div>
          <p>
            <span>{cssScore}</span>
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

export default CssResult;
