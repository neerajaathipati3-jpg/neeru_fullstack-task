import React, { useState } from "react";

function StudentMarks(props) {
  const [marks, setMarks] = useState(props.initialMarks);

  const increaseMarks = () => {
    setMarks(marks + 5);
  };

  const decreaseMarks = () => {
    setMarks(marks - 5);
  };

  return (
    <div>
      <h2>Student Marks</h2>

      <p>Name: {props.name}</p>
      <p>Subject: {props.subject}</p>

      <p>Marks: {marks}</p>

      <button onClick={increaseMarks}>
        Increase Marks
      </button>

      <button onClick={decreaseMarks}>
        Decrease Marks
      </button>
    </div>
  );
}

export default StudentMarks;