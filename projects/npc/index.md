---
title: D&D-NPC
group: npc
description: A NodeJS module for generating random NPCs in Dungeons and Dragons.
layout: title
---

{% capture CODE %}import NPC from 'dnd-npc';
const npc = new NPC()
   .setRace('warforged', 'juggernaut')
   .setClass('fighter');

const char = await npc.generate();
{% endcapture %}


{%- capture WHY -%}
<p>For as long as I can remember, a DM creating throwaway characters that have almost no backstory, yet serve to (hopefully) point adventurers in a specific direction has always been a thing.</p>

<p>And yet, sometimes your adventurers want to pick a fight with them, or you need to check a stat or two. The idea behind this module is to quickly generate a bunch of seemingly realistic information that a DM can use for those purposes.</p>
{%- endcapture -%}


{%- capture ABOUT -%}
<p>Generates a bunch of pseudo-random information, including but not limited to:</p>
<ul>
	<li>Name, Age & Gender</li>
	<li>Alignment, Race and Class</li>
	<li>Stats (Str, Dex, Agi etc)</li>
	<li>Weapons/ Armor/ Gear they're carrying</li>
</ul>

<p>You can even select the NPC's race and class before generation, making them more specific to your purpose!</p>

{%- endcapture -%}


{% include project_title_page.html
	name		= page.title
	img			= "/src/img/project-icons/dnd.png"
	desc		= 'A <a class="open-in-new" href="https://nodejs.org">NodeJS</a> module for generating random<br>NPCs for Dungeons and Dragons.'
	npm			= "dnd-npc"
	github		= "https://github.com/Multarix/dnd-npc"
	docs		= true
	codeLang	= "javascript"
	codeExample	= CODE
	why			= WHY
	about 		= ABOUT
	
%}