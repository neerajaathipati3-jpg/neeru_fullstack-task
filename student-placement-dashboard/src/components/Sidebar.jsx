import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Briefcase,
  ClipboardList,
  Calendar,
  Bell,
  User,
  LogOut
} from "lucide-react";

import { useAuth } from "../context/AuthContext";

function Sidebar() {
  const location = useLocation();
  const { logout } = useAuth();

  const menu = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />
    },
    {
      name: "Job Openings",
      path: "/jobs",
      icon: <Briefcase size={20} />
    },
    {
      name: "My Applications",
      path: "/applications",
      icon: <ClipboardList size={20} />
    },
    {
      name: "Interviews",
      path: "/interviews",
      icon: <Calendar size={20} />
    },
    {
      name: "Notifications",
      path: "/notifications",
      icon: <Bell size={20} />
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <User size={20} />
    }
  ];

  return (
    <aside className="sidebar">

      <h2>Placement</h2>

      <p className="sidebar-title">
        Student Dashboard
      </p>

      <div className="menu">

        {menu.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={
              location.pathname === item.path
                ? "active"
                : ""
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}

      </div>

      <button
        className="logout-btn"
        onClick={logout}
      >
        <LogOut size={20} />
        Logout
      </button>

    </aside>
  );
}

export default Sidebar;