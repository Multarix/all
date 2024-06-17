---
title: Grind Checklist
permalink: /grind-checklist
group: home
---

<script>
		const agris = document.getElementById("agris");
		const lootscroll = document.getElementById("lootscroll");
		const tentbuff = document.getElementById("tentbuff");
		const housebuff = document.getElementById("housebuff");
		const lomlbuff = document.getElementById("lomlbuff");
		const guildbuff = document.getElementById("guildbuff");
		const dropbuffs = [agris, lootscroll, tentbuff, housebuff, lomlbuff, guildbuff];
		
		
		const churchbuff = document.getElementById("churchbuff");
		const villabuff = document.getElementById("villabuff");
		const alchstone = document.getElementById("alchstone");
		const kroggear = document.getElementById("kroggear");
		const carolinbuff = document.getElementById("carolinbuff");
		const grindbuffs = [churchbuff, villabuff, alchstone, kroggear, carolinbuff];
		
		
		const awaksucc = document.getElementById("awaksucc");
		const skilladdons = document.getElementById("skilladdons");
		const artifacts = document.getElementById("artifacts");
		const crystals = document.getElementById("crystals");
		const character = [awaksucc, skilladdons, artifacts, crystals];
		
		
		const cronmeal = document.getElementById("cronmeal");
		const elixirs = document.getElementById("elixirs");
		const expscroll = document.getElementById("expscroll");
		const consumables = [elixirs, cronmeal, expscroll];
		
		
		const valuepack = document.getElementById("valuepack");
		const kamablessing = document.getElementById("kamablessing");
		const oldmoonscroll = document.getElementById("oldmoonscroll");
		const premium = [valuepack, kamablessing, oldmoonscroll];
		
		
		const autopot = document.getElementById("autopot");
		const removeweight = document.getElementById("removeweight");
		const altc = document.getElementById("altc");
		const feedpets = document.getElementById("feedpets");
		const misc = [autopot, removeweight, altc, feedpets];
		
		
	function selectAllInGroup(arr) {
		for(const item in arr){
			item.checked = true;
		}
	}
	
	function resetAll(){
		const allItems = [dropbuffs, grindbuffs, character, consumables, premium, misc];
		for(const item in allItems){
			item.checked = false;
		}
	}
</script>


# Checklist

## Drop Rate/ Amount Buffs <button type="button" onclick="selectAllInGroup(dropbuffs);" id="btn_drops">Check All</button>
<input type="checkbox" id="agris" name="agris" value="agris"><label for="agris"> Agris</label><br>
<input type="checkbox" id="lootscroll" name="lootscroll" value="lootscroll"><label for="lootscroll"> Loot Scroll (Including J's)</label><br>
<input type="checkbox" id="tentbuff" name="tentbuff" value="tentbuff"><label for="tentbuff"> Tent Buff</label><br>
<input type="checkbox" id="housebuff" name="housebuff" value="housebuff"><label for="housebuff"> House Buffs</label><br>
<input type="checkbox" id="lomlbuff" name="lomlbuff" value="lomlbuff"><label for="lomlbuff"> LOML Buffs (Server Based)</label><br>
<input type="checkbox" id="guildbuff" name="guildbuff" value="guildbuff"><label for="guildbuff"> Guild Buffs (Good fucking luck)</label><br>


## Grinding Buffs <button type="button" onclick="selectAllInGroup(grindbuffs);" id="btn_grinding">Check All</button>
<input type="checkbox" id="elixirs" name="elixirs" value="elixirs"><label for="elixirs"> Elixir Rotation</label><br>
<input type="checkbox" id="churchbuff" name="churchbuff" value="churchbuff"><label for="churchbuff"> Church Buff</label><br>
<input type="checkbox" id="villabuff" name="villabuff" value="villabuff"><label for="villabuff"> Villa Buff</label><br>
<input type="checkbox" id="alchstone" name="alchstone" value="alchstone"><label for="alchstone"> Alchemy Stone</label><br>
<input type="checkbox" id="kroggear" name="kroggear" value="kroggear"><label for="kroggear"> Krogdolo Horse Gear Buff</label><br>
<input type="checkbox" id="carolinbuff" name="carolinbuff" value="carolinbuff"><label for="carolinbuff"> Carolin Buff (30% Crit Damage)</label><br>


## Character Specific <button type="button" onclick="selectAllInGroup(character);" id="btn_chararcter">Check All</button>
<input type="checkbox" id="awaksucc" name="awaksucc" value="awaksucc"><label for="awaksucc"> Awakening/ Succesion</label><br>
<input type="checkbox" id="skilladdons" name="skilladdons" value="skilladdons"><label for="skilladdons"> Skill Addons</label><br>
<input type="checkbox" id="artifacts" name="artifacts" value="artifacts"><label for="artifacts"> Artifact/ Lightstones</label><br>
<input type="checkbox" id="crystals" name="crystals" value="crystals"><label for="crystals"> Crystals</label><br>


## Consumables <button type="button" onclick="selectAllInGroup(consumables);" id="btn_consumables">Check All</button>
<input type="checkbox" id="cronmeal" name="cronmeal" value="cronmeal"><label for="cronmeal"> Simple/ Exquisite Cron Meal</label><br>
<input type="checkbox" id="expscroll" name="expscroll" value="expscroll"><label for="expscroll"> EXP Scrolls</label><br>


## Premium Items <button type="button" onclick="selectAllInGroup(premium);">Check All</button>
<input type="checkbox" id="valuepack" name="valuepack" value="valuepack"><label for="valuepack"> Value Pack</label><br>
<input type="checkbox" id="kamablessing" name="kamablessing" value="kamablessing"><label for="kamablessing"> Blessing of Kamasylve</label><br>
<input type="checkbox" id="oldmoonscroll" name="oldmoonscroll" value="oldmoonscroll"><label for="oldmoonscroll"> Old Moon Scroll</label><br>


## Misc <button type="button" onclick="selectAllInGroup(misc);" id="btn_misc">Check All</button>
<input type="checkbox" id="autopot" name="autopot" value="autopot"><label for="autopot"> Auto use potions (If applicable)</label><br>
<input type="checkbox" id="removeweight" name="removeweight" value="removeweight"><label for="removeweight"> Remove useless weight from inventory</label><br>
<input type="checkbox" id="altc" name="altc" value="altc"><label for="altc"> If on Arsha, enable Alt + C</label><br>
<input type="checkbox" id="feedpets" name="feedpets" value="feedpets"><label for="feedpets"> Pets are fed</label><br>

<hr>

<button type="button" onclick="resetAll();">Reset Checlist</button>

<!-- Full Reset Button
<button type="button" onclick="selectAllInGroup(dropbuffs);">Reset Checlist</button>

# --Once everything is TICKED ---
	Big giant green letters "Grind Ready" Otherwise "Not Grind Ready"
	
Tips go to my bank account pls -->