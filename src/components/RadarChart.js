import React, { Component } from 'react';
import Chart from 'chart.js/auto';

export default class RadarChart extends Component {

	chartRef = React.createRef();

	componentDidMount() {
		const ctx = this.chartRef.current.getContext("2d");
		
		new Chart(ctx, {
			type: "radar",
			data: {
				labels: ["Opel Ampera-e", "BMW iX3", "Nissan Leaf", "Audi e-tron GT RS", "Porsche Taycan Turbo S", "Nissan e-NV200 Evalia", "Volkswagen ID.3 Pure Performance"],
                datasets: [{ 
                    data: [42990,66300,29990,138200,186336,43433,31960],
                    label: "Car Prices in Euros",
                    borderColor: "#ECD320",
                    backgroundColor: "#ECD320",
                    fill: false,
				}]
			}
		})
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