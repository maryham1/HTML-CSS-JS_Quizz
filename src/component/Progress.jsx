function Progress({ numQuestions, questionIndex, answer }) {
  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={questionIndex + 1 + Number(answer !== null)}
      />
    </header>
  );
}
export default Progress;
