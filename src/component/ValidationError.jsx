function ValidationError({ validationError }) {
  return (
    <>
      {validationError && (
        <div className="error">
          <img src="src/assets/icons/wrong mark.svg" />
          <p>Choose an answer before moving to the next question</p>
        </div>
      )}
    </>
  );
}

export default ValidationError;
