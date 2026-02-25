function SubmitBtn({  dispatch }) {
  return (
    <button
      className="submitBtn"
      // disabled={answer === null}
      onClick={() => dispatch({ type: "submit" })}
    >
      Submit
    </button>
  );
}

export default SubmitBtn;
