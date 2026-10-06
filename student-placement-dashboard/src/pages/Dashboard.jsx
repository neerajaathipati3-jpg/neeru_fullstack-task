import {
  Briefcase,
  ClipboardList,
  Calendar,
  Award
} from "lucide-react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";

const chartData = [
  {
    month: "Jan",
    applications: 4
  },
  {
    month: "Feb",
    applications: 7
  },
  {
    month: "Mar",
    applications: 5
  },
  {
    month: "Apr",
    applications: 9
  },
  {
    month: "May",
    applications: 12
  },
  {
    month: "Jun",
    applications: 15
  }
];

function Dashboard() {
  return (
    <div className="layout">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="main">

        {/* Top Navbar */}
        <Navbar />

        <div className="content">

          {/* Heading */}
          <h1>Dashboard</h1>

          <p>
            Welcome to your placement dashboard.
          </p>

          {/* Statistics */}
          <div className="stats-grid">

            <StatCard
              title="Jobs Applied"
              value="12"
              icon={<Briefcase />}
            />

            <StatCard
              title="Under Review"
              value="5"
              icon={<ClipboardList />}
            />

            <StatCard
              title="Interviews"
              value="3"
              icon={<Calendar />}
            />

            <StatCard
              title="Selected"
              value="2"
              icon={<Award />}
            />

          </div>

          {/* Chart and Deadlines */}
          <div className="dashboard-grid">

            {/* Application Chart */}
            <div className="chart-card">

              <h2>Application Trends</h2>

              <ResponsiveContainer
                width="100%"
                height={300}
              >

                <BarChart data={chartData}>

                  <CartesianGrid
                    strokeDasharray="3 3"
                  />

                  <XAxis
                    dataKey="month"
                  />

                  <YAxis />

                  <Tooltip />

                  <Bar
                    dataKey="applications"
                  />

                </BarChart>

              </ResponsiveContainer>

            </div>

            {/* Upcoming Deadlines */}
            <div className="deadline-card">

              <h2>Upcoming Deadlines</h2>

              <div className="deadline">
                <strong>TCS</strong>
                <span>15-10-2026</span>
              </div>

              <div className="deadline">
                <strong>Infosys</strong>
                <span>20-10-2026</span>
              </div>

              <div className="deadline">
                <strong>Wipro</strong>
                <span>25-10-2026</span>
              </div>

              <div className="deadline">
                <strong>Deloitte</strong>
                <span>30-10-2026</span>
              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;