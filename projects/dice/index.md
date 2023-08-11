---
title: D&D-Dice
group: dnd-dice
description: A NodeJS module for rolling dice in Dungeons and Dragons.
permalink: /projects/dnd-dice/
---

{% capture programCode %}import { Die, Coin } from 'dnd-dice';

const faces = 50;
const d = new Die(faces);
console.log(d.value); // 1-50

const c = new Coin();
console.log(c.result); // heads/ tails
{% endcapture %}


{% include project_title_page.html
	img			= "/assets/images/project-icons/dnd.png"
	desc		= 'A <a class="open-in-new" href="https://nodejs.org">NodeJS</a> module for rolling dice.'
	npm			= "dnd-dice"
	docs		= true
	github		= "https://github.com/Multarix/dnd-dice"
	codeLang	= "javascript"
	codeExample	= programCode
	extraTitle	= "Features"
	extraDesc	= "4 sided dice rolling;6 sided dice rolling;8 sided dice rolling;10 sided dice rolling;12 sided dice rolling;20 sided dice rolling;100 sided dice rolling;Custom sized dice;Coin flipping"
%}