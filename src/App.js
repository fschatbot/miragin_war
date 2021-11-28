import { Fragment, Component } from "react";
import { Toaster } from "react-hot-toast";
import Units from "./UnitData/Data";

class App extends Component {
	state = {};
	render() {
		// console.clear();
		return (
			<Fragment>
				<this.UnitsRender />
				<Toaster position="top-right" />
			</Fragment>
		);
	}

	UnitsRender = () => {
		/* {Object.entries(Units).map(([name, data]) => this.UnitRender(name, data))} */
		return (
			<div className="UnitsContainer">
				{Object.entries(Units).map((args) => this.UnitRender(...args))}
			</div>
		);
	};

	UnitRender = (name, data) => {
		// console.log(data);
		return (
			<div className="Unit">
				<label className="UnitName">{name}</label>
				<label>
					Cost: {data.Cost} supply {data.Supply}
				</label>
				<label>Income: money {data.Income} per round</label>
				<br />
				<label className="StatsText">HP: {data.Health}</label>
				<label className="StatsText">Armor: {data["Armor Type"]}</label>
				<label className="StatsText">Movement Speed: {data["Movement Speed"]}</label>
				<br />
				<label className="StatsText">Damage VS Light: {data["Damage VS Light"]}</label>
				<label className="StatsText">Damage VS Armored: {data["Damage VS Armored"]}</label>
				<label className="StatsText">Range: {data["Attack Range"]}</label>
				<label className="StatsText">Attack Speed: {data["Attack Speed"]}</label>
			</div>
		);
	};
}

export default App;
