import React from "react";

function StudentProfile(props) {
  return (
    <div>
      <h2>Student Profile</h2>

      <p>Name: {props.name}</p>
      <p>Roll Number: {props.rollNo}</p>
      <p>Course: {props.course}</p>
      <p>Year: {props.year}</p>
    </div>
  );
}

export default StudentProfile;