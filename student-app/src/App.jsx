import React from "react";

import StudentProfile from "./StudentProfile";
import StudentMarks from "./StudentMarks";
import Login from "./Login";

function App() {
  return (
    <div>

      <h1>Student Management System</h1>

      <StudentProfile
        name="Neeraja"
        rollNo="111424243007"
        course="Artificial Intelligence and Data Science"
        year="III Year"
      />

      <hr />

      <StudentMarks
        name="Neeraja"
        subject="Data Science"
        initialMarks={75}
      />

      <hr />

      <Login />

    </div>
  );
}

export default App;