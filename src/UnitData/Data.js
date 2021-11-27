import RawData from "./UnitData.json";

let Units = {};
const keys = RawData[0];
// The Slice removes the keys
RawData.slice(1).forEach((RawUnitData) => {
	let UnitData = {};
	// This Slice removes the name of the unit
	RawUnitData.slice(1).forEach((value, index) => {
		// if we are messing with the armor type then we need to do some special stuff
		if (keys[index + 1] === "IsLight") UnitData["Armor Type"] = value === true ? "Light" : "Heavy";
		// else just set the value
		else UnitData[keys[index + 1]] = value;
	});
	// Set the data with name
	Units[RawUnitData[0]] = UnitData;
});

export default Units;
