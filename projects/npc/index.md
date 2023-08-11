---
title: D&D-NPC
group: npc
description: A NodeJS module for generating random NPCs in Dungeons and Dragons.
permalink: /projects/npc/
---

{% capture programCode %}import NPC from 'dnd-npc';
const npc = new NPC()
   .setRace('warforged', 'juggernaut')
   .setClass('fighter');

const char = await npc.generate();
{% endcapture %}


{% include project_title_page.html
	img			= "/assets/images/project-icons/dnd.png"
	desc		= 'A <a class="open-in-new" href="https://nodejs.org">NodeJS</a> module for generating random<br>NPCs for Dungeons and Dragons.'
	npm			= "dnd-npc"
	github		= "https://github.com/Multarix/dnd-npc"
	docs		= true
	changelog	= true
	codeLang	= "javascript"
	codeExample	= programCode
	extraTitle	= "Features"
	extraDesc	= "Character Name;Equipped Weapon;Equipped Armor;Ability Scores;Alignment;Race/ Subrace;Class"
%}