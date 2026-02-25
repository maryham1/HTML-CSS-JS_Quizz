function Loading({
  backgroundColor = "rgb(247, 235, 213)",
  padding = "5px",
  borderRadius = "5px",
  dispatch,
}) {
  const htmlStyle = {
    backgroundColor,
    padding,
    borderRadius,
  };
  const cssStyle = {
    backgroundColor: "rgb(213, 233, 213)",
    padding,
    borderRadius,
  };
  const jsStyle = {
    backgroundColor: "rgb(217, 217, 240)",
    padding,
    borderRadius,
  };
  const accessStyle = {
    backgroundColor: "rgb(243, 225, 243)",
    padding,
    borderRadius,
  };
  return (
    <div className="loading-page">
      <div className="welcome">
        <h1>
          Welcome to the <span>Frontend Quiz!</span>
        </h1>
        <p>Pick a subject to get started</p>
      </div>
      <div className="subject_option">
        <button onClick={() => dispatch({ type: "htmlQuestions" })}>
          <img src="src/assets/icons/icon-html.svg" style={htmlStyle} />
          <p>HTML</p>
        </button>
        <button onClick={() => dispatch({ type: "cssQuestions" })}>
          <img src="src/assets/icons/icon-css.svg" style={cssStyle} />
          <p>CSS</p>
        </button>
        <button onClick={() => dispatch({ type: "jsQuestions" })}>
          <img src="src/assets/icons/icon-js.svg" style={jsStyle} />
          <p>JavaScript</p>
        </button>
        <button onClick={() => dispatch({ type: "accessQuestions" })}>
          <img
            src="src/assets/icons/icon-accessibility.svg"
            style={accessStyle}
          />
          <p> Accessibility</p>
        </button>
      </div>
    </div>
  );
}

export default Loading;
