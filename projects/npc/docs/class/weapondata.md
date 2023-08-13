---
title: D&D-NPC
group: npc
description: A NodeJS module for generating random NPCs in Dungeons and Dragons.
---



	name="WeaponData"
	desc="Represents an equipped weapon."
%}
<h2 id="properties" name="properties"><a class="docs-title" href="#properties"><b>Properties</b></a></h2>

	name="name"
	desc="The name of the weapon."
	type="string"
	readonly=true
%}
<hr>

	name="link"
	desc="A link to the weapon on D&D Beyond."
	type="string"
	readonly=true
%}
<hr>

	name="damageType"
	desc="The type of damage the weapon deals."
	type="string"
	readonly=true
%}
<hr>

	name="damage"
	desc="The amount of damage the weapon deals."
	type="string"
	readonly=true
%}
<hr>

	name="versatileDamage"
	desc="The amount of damage the weapon deals when wielded with two hands."
	type="string"
	readonly=true
%}
<hr>

	name="simple"
	desc="Whether or not the weapon is classifed as simple."
	type="boolean"
	readonly=true
%}
<hr>

	name="ranged"
	desc="Whether or not the weapon is classifed as ranged."
	type="boolean"
	readonly=true
%}
<hr>

	name="allowsShield"
	desc="Whether or not the weapon allows the character to wield a shield."
	type="boolean"
	readonly=true
%}
<hr>
{% capture toolProperties %}
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" class="external-link" location="_blank">Array</a>
&lt; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"  class="external-link" location="_blank">String</a> &gt;
{% endcapture %}

	name="properties"
	desc="An array of properties the weapon has."
	type=toolProperties
	readonly=true
%}
