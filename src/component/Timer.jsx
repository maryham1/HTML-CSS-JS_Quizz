import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return function () {
        clearInterval(id);
      };
    },
    [dispatch],
  );
  return (
    <div className="timer">
      <b>
        {" "}
        {mins < 10 && 0}
        {mins} : {secs < 10 && 0}
        {secs}
      </b>
    </div>
  );
}

export default Timer;
