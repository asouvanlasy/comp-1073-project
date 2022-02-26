import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart.js";
import RadarChart from "./components/RadarChart";
import "./App.css";

export default function App() {
    return (
        <div>
            <div style={{textAlign: "center"}}>
                <h1>React Chart-JS Project</h1>
                <h2>COMP-1073 | Group 3</h2>
            </div>
            <div className="charts">
                <BarChart />
                <LineChart />
                <PieChart />
                <RadarChart />
            </div>
        </div>
    );
}