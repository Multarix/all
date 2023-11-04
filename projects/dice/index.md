---
title: D&D-Dice
group: dnd-dice
description: A NodeJS module for rolling dice in Dungeons and Dragons.
layout: title
---

{% capture CODE %}import { Die, Coin } from 'dnd-dice';

const faces = 50;
const d = new Die(faces);
console.log(d.value); // 1-50

const c = new Coin();
console.log(c.result); // heads/ tails
{% endcapture %}



{% capture WHY %}
<p>Sometimes, you just need to flip a coin or roll a dice. Rather than write the code for that yourself, you may as well download yet another package to do it for you. This package was specifically designed with D&D in mind however.</p>

<p>On top of that, a simple dice rolling package like this is useful in all sorts of situations. Perhaps you need it for your own project and didn't want to spend the 30mins it would take to program this, in which case, this has got you covered!</p>
{% endcapture %}


{% capture ABOUT %}
<p>Offers a coin flip, a custom sided die and the standard dice for use with D&D:</p>
<ul>
	<li>4 Sided</li>
	<li>6 Sided</li>
	<li>8 Sided</li>
	<li>10 Sided</li>
	<li>12 Sided</li>
	<li>20 Sided</li>
	<li>100 Sided</li>
</ul>
{% endcapture %}


{% include project_title_page.html
	name		= page.title
	img			= "/src/img/project-icons/dnd.png"
	desc		= 'A <a class="open-in-new" href="https://nodejs.org">NodeJS</a> module for rolling dice.'
	npm			= "dnd-dice"
	docs		= true
	github		= "https://github.com/Multarix/dnd-dice"
	codeLang	= "javascript"
	codeExample	= CODE
	why			= WHY
	about 		= ABOUT
%}