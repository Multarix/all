---
title: Grind Checklist
permalink: /grind-checklist
group: home
layout: checklist
---

<h1 style="padding: 10px">Checklist</h1>


<div class="checkboxType">
	<h3>Drop Rate/ Amount Buffs <button class="checkall" type="button" onclick="selectAllInGroup(dropbuffs);" id="btn_drops">Check All</button></h3>
	<div>
		{% include checkbutton.html
			id			= "agris"
			name		= "Agris"
		%}
		{% include checkbutton.html
			id			= "lootscroll"
			name		= "Loot Scroll (Including J's)"
		%}
		{% include checkbutton.html
			id			= "tentbuff"
			name		= "Tent Buff"
		%}
		{% include checkbutton.html
			id			= "lomlbuff"
			name		= "LOML Buffs (Server Based)"
		%}
		{% include checkbutton.html
			id			= "guildbuff"
			name		= "Guild Buffs (Good fucking luck)"
		%}
	</div>
</div>


<div class="checkboxType">
	<h3>Grinding Buffs <button class="checkall"  type="button" onclick="selectAllInGroup(grindbuffs);" id="btn_grinding">Check All</button></h3>
	<div>
		{% include checkbutton.html
			id			= "elixirs"
			name		= "Elixir Rotation"
		%}
		{% include checkbutton.html
			id			= "churchbuff"
			name		= "Church Buff"
		%}
		{% include checkbutton.html
			id			= "villabuff"
			name		= "Villa Buff"
		%}
		{% include checkbutton.html
			id			= "alchstone"
			name		= "Alchemy Stone"
		%}
		{% include checkbutton.html
			id			= "kroggear"
			name		= "Krogdolo Horse Gear Buff"
		%}
		{% include checkbutton.html
			id			= "housebuff"
			name		= "House Buffs"
		%}
		{% include checkbutton.html
			id			= "carolinbuff"
			name		= "Carolin Buff (30% Crit Damage)"
		%}
	</div>
</div>


<div class="checkboxType">
	<h3>Character Specific <button class="checkall"  type="button" onclick="selectAllInGroup(character);" id="btn_chararcter">Check All</button></h3>
	<div>
		{% include checkbutton.html
			id			= "awaksucc"
			name		= "Awakening/ Succesion"
		%}
		{% include checkbutton.html
			id			= "skilladdons"
			name		= "Skill Addons"
		%}
		{% include checkbutton.html
			id			= "artifacts"
			name		= "Artifact/ Lightstones"
		%}
		{% include checkbutton.html
			id			= "crystals"
			name		= "Crystals"
		%}
	</div>
</div>


<div class="checkboxType">
	<h3>Extra Consumables <button class="checkall"  type="button" onclick="selectAllInGroup(consumables);" id="btn_consumables">Check All</button></h3>
	<div>
		{% include checkbutton.html
			id			= "cronmeal"
			name		= "Simple/ Exquisite Cron Meal"
		%}
		{% include checkbutton.html
			id			= "expscroll"
			name		= "EXP Scrolls"
		%}
	</div>
</div>


<div class="checkboxType">
	<h3>Premium Items <button class="checkall"  type="button" onclick="selectAllInGroup(premium);">Check All</button></h3>
	<div>
		{% include checkbutton.html
			id			= "valuepack"
			name		= "Value Pack"
		%}
		{% include checkbutton.html
			id			= "kamablessing"
			name		= "Blessing of Kamasylve"
		%}
		{% include checkbutton.html
			id			= "oldmoonscroll"
			name		= "Old Moon Scroll"
		%}
	</div>
</div>


<div class="checkboxType">
	<h3>Misc <button class="checkall"  type="button" onclick="selectAllInGroup(misc);" id="btn_misc">Check All</button></h3>
	<div>
		{% include checkbutton.html
			id			= "autopot"
			name		= "Auto use potions (If applicable)"
		%}
		{% include checkbutton.html
			id			= "removeweight"
			name		= "Remove useless weight from inventory"
		%}
		{% include checkbutton.html
			id			= "altc"
			name		= "If on Arsha, enable Alt + C"
		%}
		{% include checkbutton.html
			id			= "feedpets"
			name		= "Pets are fed"
		%}
	</div>
</div>


<script>
	const agris = document.getElementById("agris");
	const lootscroll = document.getElementById("lootscroll");
	const tentbuff = document.getElementById("tentbuff");
	const lomlbuff = document.getElementById("lomlbuff");
	const guildbuff = document.getElementById("guildbuff");
	const dropbuffs = [agris, lootscroll, tentbuff, , lomlbuff, guildbuff];
	
	
	const elixirs = document.getElementById("elixirs");
	const churchbuff = document.getElementById("churchbuff");
	const villabuff = document.getElementById("villabuff");
	const alchstone = document.getElementById("alchstone");
	const kroggear = document.getElementById("kroggear");
	const housebuff = document.getElementById("housebuff");
	const carolinbuff = document.getElementById("carolinbuff");
	const grindbuffs = [elixirs, churchbuff, villabuff, alchstone, kroggear, housebuff, carolinbuff];
	
	
	const awaksucc = document.getElementById("awaksucc");
	const skilladdons = document.getElementById("skilladdons");
	const artifacts = document.getElementById("artifacts");
	const crystals = document.getElementById("crystals");
	const character = [awaksucc, skilladdons, artifacts, crystals];
	
	
	const cronmeal = document.getElementById("cronmeal");
	const expscroll = document.getElementById("expscroll");
	const consumables = [cronmeal, expscroll];
	
	
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
		for(const item of arr){
			item.checked = true;
		}
	}

	function resetAll(){
		const allItems = [...dropbuffs, ...grindbuffs, ...character, ...consumables, ...premium, ...misc];
		for(const item of allItems){
			item.checked = false;
		}
	}
</script>


<button type="button" onclick="resetAll();">Reset Checklist</button>
<div class="bot-pad"></div>



<!-- Full Reset Button
<button type="button" onclick="selectAllInGroup(dropbuffs);">Reset Checlist</button>

# --Once everything is TICKED ---
	Big giant green letters "Grind Ready" Otherwise "Not Grind Ready"
	
Tips go to my bank account pls -->