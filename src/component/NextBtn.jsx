function NextBtn({ dispatch, numQuestions, questionIndex }) {
  console.log(questionIndex);
  console.log(numQuestions);
  if (questionIndex < numQuestions - 1)
    return (
      <button className="submitBtn" onClick={() => dispatch({ type: "next" })}>
        Next
      </button>
    );
  if (questionIndex === numQuestions - 1)
    return (
      <button
        className="submitBtn"
        onClick={() => dispatch({ type: "result" })}
      >
        See Result
      </button>
    );
}

export default NextBtn;
