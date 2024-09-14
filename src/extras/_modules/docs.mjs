const Markdown = {
    "DnDDice/index": "# Nothing",
    "DnDNPC/index": "# D&D NPC\r\n\r\n## About\r\nDnD-NPC is a [Node.js](https://nodejs.org) module allows you to easily create randomized D&D NPCs.\r\nIt generates pseudo-random npcs that include but are not limited to the following:\r\n\r\n- Name\r\n- Class\r\n- Race\r\n- Background\r\n- Equipped Weapons & Armour\r\n\r\n## Installation\r\n\r\n```bash\r\nnpm install dnd-npc\r\n```\r\n\r\n## Usage\r\nYou can create a new npc in several ways.\r\n\r\n```javascript\r\nimport NPC from 'dnd-npc';\r\n\r\nconst obj = {\r\n\traceType: \"warforged\",\r\n\tsubRace: \"juggernaut\",\r\n\tclassType: \"fighter\"\r\n}\r\n\r\nconst npc = new NPC(obj)\r\n\r\n// Generates a Warforged-Juggernaut Fighter\r\nconst character = await npc.generate();\r\n```\r\n\r\n<br>\r\n\r\n```javascript\r\nimport NPC from 'dnd-npc';\r\nconst npc = new NPC()\r\n\t.setRace(\"warforged\", \"juggernaut\")\r\n\t.setClass(\"fighter\");\r\n\r\n// Generates a Warforged-Juggernaut Fighter\r\nconst character = await npc.generate();\r\n```\r\n\r\n<br>\r\nYou can overwrite settings that you have already input.\r\n\r\n```javascript\r\nimport NPC from 'dnd-npc';\r\n\r\nconst obj = {\r\n\traceType: \"warforged\",\r\n\tsubRace: \"juggernaut\",\r\n\tclassType: \"fighter\"\r\n}\r\n\r\nconst npc = new NPC(obj)\r\n\t.setRace(\"human\")\r\n\t.setClass(\"bard\");\r\n\t\r\n// Generates a Human Bard (why u make Bard tho?)\r\nconst character = await npc.generate();\r\n```\r\n\r\n<br>\r\nYou can also pass a sub-race as the classType and it will generate with the correct race and sub-race.\r\n\r\n```javascript\r\nimport NPC from 'dnd-npc';\r\nconst npc = new NPC({ classType: \"juggernaut\" });\r\n\r\n// Generates a Warforged-Juggernaut with a random class.\r\nconst character = await npc.generate();\r\n```\r\n\r\n<br>\r\nLeaving the raceType or classType blank, or passing an invalid type to it, will result in that thing being randomly generated.\r\n\r\n```javascript\r\nimport NPC from 'dnd-npc';\r\nconst npc = new NPC({ raceType: \"warforged\" });\r\n\r\n// Generates a Warforged with a random sub-race and class.\r\nconst character = await npc.generate();\r\n```\r\n\r\n<br>\r\n\r\n```javascript\r\nimport NPC from 'dnd-npc';\r\nconst npc = new NPC({ classType: \"fighter\" });\r\n\r\n// Generates a fighter with a random race\r\nconst character = await npc.generate();\r\n```\r\n\r\n<br>\r\n\r\n```javascript\r\nimport NPC from 'dnd-npc';\r\nconst npc = new NPC();\r\n\r\n// Generates a completely random character.\r\nconst character = await npc.generate();\r\n```\r\n\r\n<br>\r\n\r\n---\r\n\r\n## Output\r\nAfter using the `#generate()` method, you'll receive an object like this with all the details of the NPC.<br>\r\n⚠️ You can only use `#generate()` once per npc instance. Additional uses will simply return the same character.\r\n\r\n```javascript\r\n{\r\n\t\"character\": CharacterData,\r\n\t\"race\": RaceData,\r\n\t\"class\": ClassData,\r\n\t\"inventory\": InventoryData\r\n};\r\n```\r\n\r\n<br>\r\nThe Object type definitions can be found below:\r\n\r\n```javascript\r\nCharacterData = {\r\n\tname: String,\r\n\tgender: String,\r\n\talignment: String,\r\n\tage: Number,\r\n\tbackground: String,\r\n\tlevel: Number\r\n}\r\n\r\nRaceData = {\r\n\tname: String,\r\n\tlink: String,\r\n\tsize: String,\r\n\tspeed: Number\r\n}\r\n\r\nClassData = {\r\n\tname: String,\r\n\tlink: String,\r\n\tstats: {\r\n\t\tstrength: StatData,\r\n\t\tdexterity: StatData,\r\n\t\tconstitution: StatData,\r\n\t\tintelligence: StatData,\r\n\t\twisdom: StatData,\r\n\t\tcharisma: StatData\r\n\t}\r\n}\r\n\r\nStatData = {\r\n\ttotal: Number,\r\n\tprof: Number\r\n}\r\n\r\nInventoryData = {\r\n\tweapon: WeaponData,\r\n\tarmor: ArmorData || undefined,\r\n\tshield: Boolean || String,\r\n\ttools: ToolData[]\r\n}\r\n\r\nWeaponData = {\r\n\tname: String,\r\n\tlink: String,\r\n\tdamageType: String,\r\n\tdamage: String,\r\n\tversatileDamage: String || undefined,\r\n\tsimple: Boolean,\r\n\tranged: Boolean,\r\n\tallowsShield: Boolean,\r\n\tproperties: String[]\r\n}\r\n\r\nArmorData = {\r\n\tname: String,\r\n\ttype: String,\r\n\tlink: String,\r\n\tstrengthReq: Number,\r\n\tarmorClass: Number,\r\n\tscalesWithDex: Boolean,\r\n\tmaxDexBonus: Number,\r\n\tisStealthy: Boolean\r\n}\r\n\r\nToolData = {\r\n\tname: String,\r\n\tlink: String\r\n}\r\n```\r\n\r\n## Valid *raceType* & *subRace*\r\n- Aarakocra\r\n- Aasimar\r\n\t- Fallen\r\n\t- Protector\r\n\t- Scourge\r\n- Bugbear\r\n- Changeling\r\n- Dragonborn\r\n- Dwarf\r\n\t- Hill\r\n\t- Mountain\r\n- Elf\r\n\t- Dark\r\n\t- Eladrin\r\n\t- High\r\n\t- Wood\r\n- Firbolg\r\n- Genasi\r\n\t- Air\r\n\t- Earth\r\n\t- Fire\r\n\t- Water\r\n- Gnome\r\n\t- Deep\r\n\t- Forest\r\n\t- Rock\r\n- Goblin\r\n- Goliath\r\n- Grung\r\n- Halfelf\r\n- Halfling\r\n\t- Lightfoot\r\n\t- Stout\r\n- Halforc\r\n- Hobgoblin\r\n- Human\r\n- Kalashtar\r\n- Kenku\r\n- Kobold\r\n- Lizardfolk\r\n- Orc\r\n- Shifter\r\n\t- Beasthide\r\n\t- Longtooth\r\n\t- Swiftstride\r\n\t- Wildhunt\r\n- Tabaxi\r\n- Tiefling\r\n- Triton\r\n- Warforged\r\n\t- Envoy\r\n\t- Juggernaut\r\n\t- Skirmisher\r\n- Yuanti\r\n\r\n---\r\n\r\n## Valid *classType*\r\n- Artificer\r\n- Barbarian\r\n- Bard\r\n- Cleric\r\n- Druid\r\n- Fighter\r\n- Monk\r\n- Paladin\r\n- Ranger\r\n- Rogue\r\n- Sorcerer\r\n- Warlock\r\n- Wizard\r\n\r\n## Need help?\r\nIf you've encountered a bug or would like to suggest a feature, feel free to create either a pull request or an issue on the [github](https://github.com/Multarix/DnD-NPC).\r\n"
};
export default Markdown;
