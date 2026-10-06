import { Bell } from "lucide-react";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user } = useAuth();

  return (
    <header className="navbar">

      <div>
        <h2>Student Placement Dashboard</h2>
      </div>

      <div className="navbar-right">

        <Bell size={22} />

        <div>
          <strong>
            {user?.name || "Student"}
          </strong>

          <small>
            {user?.branch || "AI & Data Science"}
          </small>
        </div>

      </div>

    </header>
  );
}

export default Navbar;