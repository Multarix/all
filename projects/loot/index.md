---
title: D&D-Loot
group: loot
description: A NodeJS module for generating encounter loot in Dungeons and Dragons.
layout: title
---

{% capture CODE %}import { Hoard } from "dnd-loot";

const level = 15;
const loot = new Hoard(level);
{% endcapture %}


{%- capture WHY -%}
<p>Every now and then, when your party is rolling for loot in D&D, you think to yourself: <wbr><i>Man this is taking forever...</i><br>
To solve that problem, I decided to automate the process. This module is the result of that.</p>
{%- endcapture -%}

{%- capture ABOUT -%}
<p>Can generate loot for both Indivual and Hoard encounters. This includes money, items and magic items.</p>
<ul>
	<li>Individual Encounters</li>
	<li>Hoard Encounters</li>
	<li>Money rolls</li>
	<li>Item Rolls</li>
	<li>ES6 Compatible</li>
	<li>Written with Typescript</li>
</ul>
{%- endcapture -%}


{% include project_title_page.html
	name		= page.title
	img			= "/src/img/project-icons/dnd.png"
	desc		= 'A <a class="open-in-new" href="https://nodejs.org">NodeJS</a> module for generating<br>encounter loot in Dungeons and Dragons.'
	npm			= "dnd-loot"
	github		= "https://github.com/Multarix/dnd-loot"
	docs		= true
	codeLang	= "javascript"
	codeExample	= CODE
	why			= WHY
	about 		= ABOUT
	extraTitle	= "Features"
	extraDesc	= "Individual encounter loot rolling;Hoard encounter loot rolling;Rolling for items;Rolling for money;Written in Typescript;ES6 module compatible"
%}