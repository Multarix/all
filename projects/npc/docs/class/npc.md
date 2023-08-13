---
layout: default
title: D&D-Dice
description: A NodeJS module for rolling dice in Dungeons and Dragons.
project: dice
navbar: nav_npc.html
navpage: docs
redirect_from:
  - /dice/docs/class/npc
  - /dice/docs/class/Npc
  - /dice/docs/class/NPC
---




	name="NPC"
	desc="Represents initial data for an NPC (Non-Player Character)"
%}
<h2 id="constructor" name="constructor"><a class="docs-title" href="#constructor"><b>Constructor</b></a></h2>
<p class="docs-property-description">Takes a single Object with the below properties. All properties are optional.<br>
A full list of valid classTypes can be found <a href="{{ site.baseurl }}/npc/docs/class-types">here</a><br>
A full list of valid raceTypes can be found <a href="{{ site.baseurl }}/npc/docs/race-types">here</a></p><br>
<div class="table-container">
	<table>
		<tr>
			<th>Property</th>
			<th>Type</th>
			<th>Description</th>
			<th>Optional</th>
		</tr>
		include docs_method_param.html
			name="raceType"
			type="string"
			desc="Sets the race of the NPC."
			optional="True"
		%}
		include docs_method_param.html
			name="subRace"
			type="string"
			desc="Sets the sub-race of the NPC if applicable."
			optional="True"
		%}
		include docs_method_param.html
			name="classType"
			type="string"
			desc="Sets the class of the NPC."
			optional="True"
		%}
	</table>
</div>
<br>
<h2 id="properties" name="properties"><a class="docs-title" href="#properties"><b>Properties</b></a></h2>

	name="result"
	desc="The result of the latest coin flip."
	type="string"
	readonly=true
%}
<h2 id="methods" name="methods"><a class="docs-title" href="#methods"><b>Methods</b></a></h2>
{% assign setRaceArgs = "raceType, string, Sets the race of the NPC., False|#|subRace, string, Sets the sub-race of the NPC if applicable., True" | split: "|#|" %}

	name="setRace"
	desc='Sets the race of the NPC.'
	returns="void"
	arguments=setRaceArgs
%}
<hr>
{% assign setClassArgs = "classType, string, Sets the class of the NPC., False" | split: "|#|" %}

	name="setClass"
	desc='Sets the class of the NPC.'
	returns="void"
	arguments=setClassArgs
%}
<hr>
{% assign notRelevant = "N/A, N/A, N/A, N/A" | split: "|#|" %}

	name="generate"
	desc="Use this method when you're ready to generate all aspects of your NPC.<br>"
	returns="Character"
	link="/npc/docs/class/character"
	arguments=notRelevant
%}