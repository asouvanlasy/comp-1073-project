import React, { Component } from 'react';
import Chart from 'chart.js/auto';

export default class BarChart extends Component {

	chartRef = React.createRef();

	componentDidMount() {
		const ctx = this.chartRef.current.getContext("2d");
		
		new Chart(ctx, {
			type: "bar",
			data: {
				labels: ["Wii Sports", "Super Mario Bros.", "Mario Kart Wii", "Wii Sports Resort", "Pokemon Red/Blue"],
                datasets: [{ 
					data: [41.49,29.08,15.85,15.75,11.27],
					label: "Video game sales in North America ($ millions)",
					backgroundColor: "darksalmon",
					fill: false,
				}
				]
			}
		});
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