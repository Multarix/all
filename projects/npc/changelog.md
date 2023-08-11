---
title: D&D-NPC
group: npc
description: A NodeJS module for generating random NPCs in Dungeons and Dragons.
permalink: /projects/npc/changelog
---


<h1 class="title text-center"><b>Changelog</b></h1>
<div class="version">
	<h1><a class="docs-property" name="v2.0.8" id="v2.0.8" href="#v2.0.8"><b>v2.0.8</b></a><small><span style="color: #888;"><i> Current Version</i></span></small></h1>
	<h2><b>Changes</b></h2>
	<h3><b>Armor</b></h3>
	<p>Added 'Pride Silk Outfit' as a new type of possible armor<br>
	Removed <span class="literal">&lt;Armor&gt;#isMetal</span><br>
	Added <span class="literal">&lt;Armor&gt;#armorClass</span><br>
	Added <span class="literal">&lt;Armor&gt;#scalesWithDex</span><br>
	Added <span class="literal">&lt;Armor&gt;#maxDexBonus</span>
	<div class="overflow"><pre class="diff">
<span class="red">- Armor.isMetal</span>
<span class="green">+ Armor.armorClass</span>
<span class="green">+ Armor.scalesWithDex</span>
<span class="green">+ Armor.maxDexBonus</span></pre></div></p>
	<h2><b>Additions</b></h2>
	<h3><b>Classes</b></h3>
	<p>Added the Artificer class<br>
	Click <a href="{{ site.baseurl }}/npc/docs/class-types/artificer">here</a> for more details on the class</p>
	<br>
</div>

<br>
<hr>
<br>

<div class="version">
	<h1><a class="docs-property" name="v2.0.0" id="v2.0.0" href="#v2.0.0"><b>v2.0.0</b></a></h1>
	<h2><b>Changes</b></h2>
	<h3><b>E6 Module Conversion</b></h3>
	<p>Updated the code base to use ES6 modules.<br>
	This means you can no longer use <span class="literal">require()</span>, you must use <span class="literal">import</span> instead.
	<div class="overflow"><pre class="diff">
<span class="red">- const NPC = require("dnd-npc")</span>
<span class="green">+ import NPC from "dnd-npc"</span></pre></div></p>
	<h3><b>Module Export</b></h3>
	<p>The module itself is now the NPC class.<br>
	As such you no longer have to use a dot operator to get to the npc class.
	<div class="overflow"><pre class="diff">
<span class="red">- const npc = new dnd.npc()</span>
<span class="green">+ const npc = new NPC()</span></pre></div></p>
	<h3><b>#raceType()</b></h3>
	<p><span class="literal">#raceType()</span> was changed to <span class="literal">#setRace()</span><br>
	Support was also dropped for using an object or an array to set the race, instead favoring 2 strings.</p>
	<div class="overflow"><pre class="diff"><span class="red">- npc.raceType({ raceType: "Warforged", subRace: "Juggernaut" })</span>
<span class="green">+ npc.setRace("Warforged", "Juggernaut")</span></pre></div>
	<h3><b>#roleType()</b></h3>
	<p><span class="literal">#roleType()</span> was changed to <span class="literal">#setClass()</span><br>
	Support was also dropped for using an object or an array to set the role, instead favoring a single string.
	<div class="overflow"><pre class="diff"><span class="red">- npc.roleType({ roleType: "Fighter" })</span>
<span class="green">+ npc.setClass("Fighter")</span></pre></div></p>
	<h3><b>#raceType</b></h3>
	<p>Made <span class="literal">#raceType</span> a private property, meaning you can no longer access it directly.<br>
	Instead you must use <span class="literal">#getRace()</span>
	<div class="overflow"><pre class="diff"><span class="red">- npc.raceType</span>
<span class="green">+ npc.getRace()</span></pre></div></p>
	<h3><b>#roleType</b></h3>
	<p>Made <span class="literal">#roleType</span> a private property, meaning you can no longer access it directly.<br>
	Instead you must use <span class="literal">#getClass()</span>
	<div class="overflow"><pre class="diff"><span class="red">- npc.roleType</span>
<span class="green">+ npc.getClass()</span></pre></div></p>
	<h3><b>#generate()</b></h3>
	<p><span class="literal">#generate()</span> is now an asynchronous method.<br>
	As such it returns a promise instead of an object - Use <span class="literal">await</span> to resolve the promise.
	<div class="overflow"><pre class="diff"><span class="red">- const npc = new NPC()</span>
<span class="red">- const character = npc.generate()</span>
<span class="green">+ const npc = new NPC()</span>
<span class="green">+ const character = await npc.generate()</span></pre></div></p>
	<h2><b>Character Object Changes</b></h2>
	<h3><b>Character#role</b></h3>
	<p><span class="literal">Character#role</span> role was changed back to <span class="literal">Character#class</span><br>
	<div class="overflow"><pre class="diff"><span class="red">- character.role</span>
<span class="green">+ character.class</span></pre></div></p>
	<h3><b>Character#class#stats#&lt;stat&gt;</b></h3>
	<p>Each stat is no longer a singular number, but instead an object that contains the stat total & the profficancy bonus granted by that total
	<div class="overflow"><pre class="diff"><span class="red">- character.class.stats.strength = 18</span>
<span class="green">+ character.class.stats.strength = { total: 18, prof: 4 }</span></pre></div></p>
	<h3><b>Character#inventory#weapon</b></h3>
	<p>&bull; <span class="literal">damageAmount</span> was changed to <span class="literal">damage</span><br>
	&bull; <span class="literal">vDamage</span> was changed to <span class="literal">versatileDamage</span><br>
	&bull; <span class="literal">allowShield</span> was changed to <span class="literal">allowsShield</span>
	<div class="overflow"><pre class="diff"><span class="red">- character.inventory.weapon.damageAmount</span>
<span class="green">+ character.inventory.weapon.damage</span>
<span class="red">- character.inventory.weapon.vDamage</span>
<span class="green">+ character.inventory.weapon.versatileDamage</span>
<span class="red">- character.inventory.weapon.allowShield</span>
<span class="green">+ character.inventory.weapon.allowsShield</span></pre></div></p>
	<h3><b>Character#inventory#armor</b></h3>
	<p>&bull; <span class="literal">strength</span> was changed to <span class="literal">strengthReq</span><br>
	&bull; <span class="literal">metal</span> was changed to <span class="literal">isMetal</span><br>
	&bull; <span class="literal">stealth</span> was changed to <span class="literal">isStealthy</span>
	<div class="overflow"><pre class="diff"><span class="red">- character.inventory.armor.strength</span>
<span class="green">+ character.inventory.armor.strengthReq</span>
<span class="red">- character.inventory.armor.metal</span>
<span class="green">+ character.inventory.armor.isMetal</span>
<span class="red">- character.inventory.armor.stealth</span>
<span class="green">+ character.inventory.armor.isStealthy</span></pre></div></p>
</div>

<br>
<hr>
<br>

<div class="version">
	<h1><a class="method" name="v1.1.5" id="v1.1.5" href="#v1.1.5"><b>v1.1.5</b></a></h1>
	<h2><b>Changes</b></h2>
	<h3><b>&lt;NPC&gt;#class</b></h3>
	<p><span class="literal">&lt;NPC&gt;#class</span> was changed to <span class="literal">&lt;NPC&gt;#role</span> for better code consistency.</p>
	<div class="overflow"><pre class="diff"><span class="red">- npc.class</span><br><span class="green">+ npc.role</span></pre></div>
	<h2><b>Additions</b></h2>
	<h3><b>Races</b></h3>
	<p>Added new race and sub-race types.</p>
	<div class="rows">
		<div class="leftRow">
			<ul>
			<li>Aasimar</li>
				<ul><li><a href="{{ site.baseurl }}/npc/docs/race-types/aasimar-fallen">Fallen</a></li>
				<li><a href="{{ site.baseurl }}/npc/docs/race-types/aasimar-protector">Protector</a></li>
				<li><a href="{{ site.baseurl }}/npc/docs/race-types/aasimar-scourge">Scourge</a></li></ul>
				<li><a href="{{ site.baseurl }}/npc/docs/race-types/bugbear">Bugbear</a></li>
				<li>Elf</li>
				<ul><li><a href="{{ site.baseurl }}/npc/docs/race-types/elf-dark">Dark</a></li></ul>
				<li><a href="{{ site.baseurl }}/npc/docs/race-types/firbolg">Firbolg</a></li>
				<li>Gnome</li>
				<ul><li><a href="{{ site.baseurl }}/npc/docs/race-types/gnome-deep">Deep</a></li>
				<li><a href="{{ site.baseurl }}/npc/docs/race-types/gnome-forest">Forest</a></li>
				<li><a href="{{ site.baseurl }}/npc/docs/race-types/gnome-rock">Rock</a></li></ul>
				</ul>
			</div>
			<div class="rightRow">
				<ul>
				<li><a href="{{ site.baseurl }}/npc/docs/race-types/goblin">Goblin</a></li>
				<li><a href="{{ site.baseurl }}/npc/docs/race-types/grung">Grung</a></li>
				<li><a href="{{ site.baseurl }}/npc/docs/race-types/hobgoblin">Hobgoblin</a></li>
				<li><a href="{{ site.baseurl }}/npc/docs/race-types/kenku">Kenku</a></li>
				<li><a href="{{ site.baseurl }}/npc/docs/race-types/kobold">Kobold</a></li>
				<li><a href="{{ site.baseurl }}/npc/docs/race-types/lizardfolk">Lizardfolk</a></li>
				<li><a href="{{ site.baseurl }}/npc/docs/race-types/orc">Orc</a></li>
				<li><a href="{{ site.baseurl }}/npc/docs/race-types/tabaxi">Tabaxi</a></li>
				<li><a href="{{ site.baseurl }}/npc/docs/race-types/triton">Triton</a></li>
				<li><a href="{{ site.baseurl }}/npc/docs/race-types/yuanti">Yuan-Ti</a></li>
			</ul>
		</div>
	</div>
	<br><p>For a full list of available races, <a href="{{ site.baseurl }}/npc/docs/race-types">click here</a></p>
	<h3><b>&lt;NPC&gt;#character#age</b></h3>
	<p>Added NPC age.<br>
	This is based on each race and their lifespans.<br>
	<b>TypeOf:</b> <a class="external-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number" location="_blank">Number</a></p>
	<h3><b>&lt;NPC&gt;#character#background</b></h3>
	<p>Added NPC background.<br>
	Based on the role & race to give somewhat logical backgrounds.<br>
	<b>TypeOf:</b> <a class="external-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" location="_blank">String</a></p>
	<h3><b>&lt;NPC&gt;#character#level</b></h3>
	<p>Added NPC level.<br>
	This will always be level 1.<br>
	<b>TypeOf:</b> <a class="external-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number" location="_blank">Number</a></p>
</div>

<br>
<hr>
<br>

<div class="version">
	<h1><a class="method" name="v1.1.0" href="#v1.1.0"><b>v1.1.0</b></a></h1>
	<h2><b>Changes</b></h2>
	<h3><b>NPC Constructor</b></h3>
	<p>Changed how the NPC Constructor is called.<br>
	This is so in the future more classes can be added for various things, such as generating monsters.</p>
	<div class="overflow"><pre class="diff">  const dnd = require('dnd-npc');<br><span class="red">- const npc = new dnd({ ..options }).generate();</span><br><span class="green">+ const npc = new dnd.npc({ ..options }).generate();</span></pre></div>
	<h3><b>&lt;NPC&gt;#race#small</b></h3>
	<p><span class="literal">race#small</span> was removed in favor of <span class="literal">race#size</span><br>
	This is a string that contains the size of the npc. (Small, Medium, Large etc)<br>
	<b>TypeOf:</b> <a class="external-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" location="_blank">String</a></p>
	<div class="overflow"><pre class="diff"><span class="red">- npc.race.small</span><br><span class="green">+ npc.race.size</span></pre></div>
	<h2><b>Additions</b></h2>
	<h3><b>&lt;NPC&gt;#character#alignment</b></h3>
	<p>Added NPC alignment. This is generated based on race and class chosen.<br>
	(No chaotic evil Paladins, though technically not against the rules of D&D 5e)<br>
	<b>TypeOf:</b> <a class="external-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" location="_blank">String</a></p>
</div>

<br>
<br>
<hr>

<div class="version">
	<h1><a class="method" name="v1.0.0" href="#v1.0.0"><b>v1.0.0</b></a></h1>
	<p>- Initial Release</p>
</div>