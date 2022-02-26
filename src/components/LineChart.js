import React, { Component } from 'react';
import Chart from 'chart.js/auto';

export default class LineChart extends Component {

	chartRef = React.createRef();

	componentDidMount() {
		const ctx = this.chartRef.current.getContext("2d");
		
		new Chart(ctx, {
			type: "line",
			data: {
				labels: ["Minecraft", "Grand Theft Auto V", "Tetris (EA)", "Wii Sports", "PlayerUnknown's Battlegrounds", "Super Mario Bros.", "Pokémon Red / Green / Blue / Yellow"],
                datasets: [{ 
                    data: [200000000,130000000,100000000,82900000,60000000,48240000,47520000],
                    label: "Top Selling Games of All Time (# of units sold)",
                    borderColor: "#3e95cd",
                    backgroundColor: "#7bb6dd",
                    fill: false
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