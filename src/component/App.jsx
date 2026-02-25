import { useEffect, useReducer } from "react";
import Loading from "./Loading";
import Html from "./Html";
import Result from "./Result";
import Cascading from "./Cascading";
import JavaScript from "./JavaScript";
import Accessibility from "./Accessibility";

const SEC_PER_QUESTIONS = 60;

const intialState = {
  questions: [],
  status: "loading",
  click: null,
  questionIndex: 0,
  answer: null,
  validationError: false,
  isSubmitted: false,
  isFinished: false,
  answers: [],
  secondsRemaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "htmlQuestions":
      return {
        ...state,
        status: "active",
        secondsRemaining:
          state.questions.HTMLQuestions.length * SEC_PER_QUESTIONS,
      };
    case "cssQuestions":
      return {
        ...state,
        status: "active1",
        secondsRemaining:
          state.questions.CSSQuestions.length * SEC_PER_QUESTIONS,
      };
    case "jsQuestions":
      return {
        ...state,
        status: "active2",
        secondsRemaining:
          state.questions.JsQuestions.length * SEC_PER_QUESTIONS,
      };
    case "accessQuestions":
      return {
        ...state,
        status: "active3",
        secondsRemaining:
          state.questions.AccessibilityQuestions.length * SEC_PER_QUESTIONS,
      };

    case "clickOption":
      return {
        ...state,
        click: action.payload,
        answer: action.payload,
      };
    case "submit":
      const newAnswers = [...state.answers];
      newAnswers[state.questionIndex] = state.answer;
      if (state.answer === null) {
        return { ...state, validationError: true };
      }

      return {
        ...state,
        answers: newAnswers,
        validationError: false,
        isSubmitted: true,
      };

    case "next":
      return {
        ...state,
        questionIndex: state.questionIndex + 1,
        answer: null,
        click: null,

        isSubmitted: false,
        validationError: false,
      };
    case "result":
      return {
        ...state,
        // status: "finished",
        isFinished: true,
      };
    case "restart":
      return {
        ...intialState,
        questions: state.questions,
        status: "ready",
      };
    case "tick":
      if (state.secondsRemaining === 0) {
        return { ...state, isFinished: true };
      }
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
      };
  }
}

function App() {
  const [
    {
      questions,
      status,
      click,
      questionIndex,
      answer,
      validationError,
      isSubmitted,
      isFinished,
      answers,
      secondsRemaining,
    },
    dispatch,
  ] = useReducer(reducer, intialState);

  useEffect(function () {
    async function fetchQuestions() {
      try {
        const res = await fetch("http://localhost:3000/Questionss");
        const data = await res.json();
        dispatch({ type: "dataReceived", payload: data });
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchQuestions();
  }, []);

  return (
    <div className="app">
      {/* <h1>{questions.HTMLQuestions[0].Question}</h1> */}
      {status === "ready" && <Loading dispatch={dispatch} />}
      {status === "active1" && (
        <Cascading
          questions={questions}
          questionIndex={questionIndex}
          click={click}
          dispatch={dispatch}
          answer={answer}
          validationError={validationError}
          status={status}
          isSubmitted={isSubmitted}
          isFinished={isFinished}
          answers={answers}
          secondsRemaining={secondsRemaining}
        />
      )}
      {status === "active2" && (
        <JavaScript
          questions={questions}
          questionIndex={questionIndex}
          click={click}
          dispatch={dispatch}
          answer={answer}
          validationError={validationError}
          status={status}
          isSubmitted={isSubmitted}
          isFinished={isFinished}
          answers={answers}
          secondsRemaining={secondsRemaining}
        />
      )}
      {status === "active3" && (
        <Accessibility
          questions={questions}
          questionIndex={questionIndex}
          click={click}
          dispatch={dispatch}
          answer={answer}
          validationError={validationError}
          status={status}
          isSubmitted={isSubmitted}
          isFinished={isFinished}
          answers={answers}
          secondsRemaining={secondsRemaining}
        />
      )}
      {status === "active" && (
        <>
          <Html
            questions={questions}
            questionIndex={questionIndex}
            click={click}
            dispatch={dispatch}
            answer={answer}
            validationError={validationError}
            status={status}
            isSubmitted={isSubmitted}
            isFinished={isFinished}
            answers={answers}
            secondsRemaining={secondsRemaining}
          />
        </>
      )}
    </div>
  );
}

export default App;
