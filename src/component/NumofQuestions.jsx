function NumofQuestions({ questionIndex, numQuestions }) {
  return (
    <div>
      <p className="numOfQuestions">
        <b>
          Question <strong>{questionIndex + 1}</strong>/{numQuestions}
        </b>
      </p>
    </div>
  );
}

export default NumofQuestions;
