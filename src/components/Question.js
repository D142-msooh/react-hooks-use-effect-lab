import React, { useEffect, useState } from "react";

function Question({ question, onAnswered }) {
  const [secondsRemaining, setSecondsRemaining] = useState(10);

  useEffect(() => {

    const timeoutId = setTimeout(() => {
      setSecondsRemaining((prev) => prev - 1);
    }, 1000);

    
    if (secondsRemaining === 0) {
      onAnswered(false);
    }

    return () => clearTimeout(timeoutId);
  }, [secondsRemaining, onAnswered]);

  return (
    <div>
      <h2>{question.prompt}</h2>
      <p>{secondsRemaining} seconds remaining</p>
      {/* Render answers here if needed */}
    </div>
  );
}

export default Question;