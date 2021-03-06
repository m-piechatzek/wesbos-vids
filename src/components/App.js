import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {
	constructor() {
		super();

		this.addFish = this.addFish.bind(this);
		this.loadSamples = this.loadSamples.bind(this);
		this.addToOrder = this.addToOrder.bind(this);
		// Get intial state
		this.state = {
			fishes: {},
			order: {}
		};
	}

	loadSamples() {
		this.setState({
			fishes: sampleFishes
		});
	}

	addFish(fish) {
		// update our state
		const fishes = {...this.state.fishes};
		// add in our new fish
		const timestamp = Date.now()
		fishes[`fish-${timestamp}`] = fish;
		// set state
		this.setState({fishes})
	}

	addToOrder(key) {
		//take a cpy of our state
		const order = {...this.state.order};
		//update or add the new number of fish ordered
		order[key] = order[key] + 1 || 1;
		//update our state
		this.setState({ order });
		}
	

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh is BEst"/>
					<ul className="list-of-fishes">
						{
							Object.keys(this.state.fishes)
							.map(key => <Fish key={key} index={key} details={this.
								state.fishes[key]} addToOrder={this.
									addToOrder}/>)
						}
					</ul>

				</div>
				<Order />
				<Inventory  addFish={this.addFish} loadSamples={this.loadSamples}/>
			</div>
		)
	}
}

export default App;