import React, { Component } from 'react';
import Chart from 'chart.js/auto';

export default class PieChart extends Component {

	chartRef = React.createRef();

	componentDidMount() {
		const ctx = this.chartRef.current.getContext("2d");
		
		new Chart(ctx, {
			type: "pie",
			data: {
				labels: ["Sport Boat", "Motor Yacht", "Fishing boat", "Other"],
                datasets: [{ 
                    data: [14,28,12,46],
                    label: "Boat Sales",
                    borderColor: "#3e95cd",
                    backgroundColor: ["#7bb6dd","#ECDD20","#EC5520", "#00ff00"],
                    fill: false
				}]
			}
		}
	);
}
	render() {
		return (
			<div>
				<canvas
				id="myChart"
				ref={this.chartRef}
				/>
			</div>
		)
	}
}