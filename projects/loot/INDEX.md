---
title: D&D-Loot
group: loot
description: A NodeJS module for generating encounter loot in Dungeons and Dragons.
permalink: /projects/dnd-loot/
---

{% capture programCode %}import { Hoard } from "dnd-loot";

const level = 15;
const loot = new Hoard(level);
{% endcapture %}


{% include project_title_page.html
	img			= "/assets/images/project-icons/dnd.png"
	desc		= 'A <a class="open-in-new" href="https://nodejs.org">NodeJS</a> module for generating encounter loot in Dungeons and Dragons.'
	npm			= "dnd-loot"
	github		= "https://github.com/Multarix/dnd-loot"
	docs		= true
	codeLang	= "javascript"
	codeExample	= programCode
	extraTitle	= "Features"
	extraDesc	= "Individual encounter loot rolling;Hoard encounter loot rolling;Rolling for items;Rolling for money;Written in Typescript;ES6 module compatible"
%}