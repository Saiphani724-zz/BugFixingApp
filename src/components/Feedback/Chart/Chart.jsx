import React from "react";
import { Doughnut } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";


class ChartsPage extends React.Component {
	state = {
		dataDoughnut: {
			labels: ["5 Star", "4 Star", "3 Star", "2 Star", "1 Star"],
			datasets: [
				{
					data: [300, 50, 100, 40, 120],
					backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
					hoverBackgroundColor: [
						"#FF5A5E",
						"#5AD3D1",
						"#FFC870",
						"#A8B3C5",
						"#616774"
					]
				}
			]
		}
	}

	render() {

		return (

			<Doughnut height="70px" data={this.state.dataDoughnut} options={{
				responsive: true, legend: {
					labels: {
						// This more specific font property overrides the global property
						fontColor: 'black',
						fontFamily: 'comic sans ms',
						fontSize: 20,
					}
				}
			}} />

		);
	}
}


export default ChartsPage;