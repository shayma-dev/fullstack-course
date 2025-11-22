import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const handleGoodClick = () => {
    console.log("good");
    setGood(good + 1);
  };
  const handelNeutralClick = () => {
    setNeutral(neutral + 1);
  };
  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGoodClick} text="Good" />
      <Button handleClick={handelNeutralClick} text="Neutral" />
      <Button handleClick={handleBadClick} text="Bad" />

      <h1>Statistics</h1>
      <p>
        Good: {good}
        <br></br>
        Neutral: {neutral}
        <br></br>
        Bad: {bad}
      </p>
    </div>
  );
};

export default App;
