import Graph1 from "./components/Graph1";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart.js";
import ScatterChart from "./components/ScatterChart";

export default function App() {
    return (
      <div>
        <Graph1 />
        <BarChart />
        <PieChart />
        <ScatterChart />
      </div>
    );   
}