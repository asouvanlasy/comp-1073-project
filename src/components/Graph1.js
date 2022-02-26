import React, { Component } from 'react';
import Chart from 'chart.js/auto';

export default class Graph1 extends Component {

	chartRef = React.createRef();

	componentDidMount() {
		const ctx = this.chartRef.current.getContext("2d");
		
		new Chart(ctx, {
			type: "bar",
			data: {
				labels: ["Wii Sports", "Super Mario Bros.", "Mario Kart Wii", "Wii Sports Resort", "Pokemon Red/Blue"],
                datasets: [{ 
					data: [41.49,29.08,15.85,15.75,11.27],
					label: "Video game sales in North America",
					borderColor: "#3e95cd",
					backgroundColor: "#7bb6dd",
					fill: false,
				}
				]
			},
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