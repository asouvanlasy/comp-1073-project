import LineChart from "./components/LineChart.js";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart.js";
import ScatterChart from "./components/ScatterChart";

export default function App() {
    return (
      <div>
        <LineChart />
        <BarChart />
        <PieChart />
        <ScatterChart />
      </div>
    );   
}