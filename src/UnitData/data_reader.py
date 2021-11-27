import json

with open("RawUnitData.json", "r") as file:
	raw_data = json.load(file)

data = [[
	"Name",
	"Cost",
	"Supply",
	"Income",
	"Movement Speed",
	"Health",
	"Damage VS Light",
	"Damage VS Armored",
	"Attack Range",
	"Attack Speed",
	"IsLight",
]]



for Unit, UnitData in raw_data.items():
	UnitData["IsLight"] = UnitData["Armor Type"] == "LIGHT"
	del UnitData["Armor Type"]
	data.append([Unit, *UnitData.values()])

with open("UnitData.json", "w") as file:
	json.dump(data, file)
