---
title: D&D-NPC
group: npc
description: A NodeJS module for generating random NPCs in Dungeons and Dragons.
---



	name="ArmorData"
	desc="Represents an equipped set of armor."
%}
<h2 id="properties" name="properties"><a class="docs-title" href="#properties"><b>Properties</b></a></h2>

	name="name"
	desc="The name of the armor."
	type="string"
	readonly=true
%}
<hr>

	name="link"
	desc="A link to the armor on D&D Beyond."
	type="string"
	readonly=true
%}
<hr>

	name="type"
	desc="The type of armor."
	type="string"
	readonly=true
%}
<hr>

	name="strengthReq"
	desc="The strength requirement to wear the armor."
	type="number"
	readonly=true
%}
<hr>

	name="armorClass"
	desc="The AC that the armor provides."
	type="string"
	readonly=true
%}
<hr>

	name="scalesWithDex"
	desc="Whether or not the armor gets a bonus to AC based on the character's dexterity modifier."
	type="boolean"
	readonly=true
%}
<hr>

	name="maxDexBonus"
	desc="The maximum bonus to AC the armor gets from the character's dexterity modifier."
	type="number"
	readonly=true
%}
<hr>

	name="isStealthy"
	desc="Whether the armor imposes disadvantage on stealth checks."
	type="boolean"
	readonly=true
%}
