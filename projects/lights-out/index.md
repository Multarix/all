---
title: Lights Out
group: lights-out
description: A simple implimentation of the classic game 'Lights Out'. Supports 3x3 and 4x4 boards.
permalink: /projects/lights-out/
---

{% capture description %}A simple implimentation of the classic game "Lights Out".<br>Supports 3x3 and 5x5 boards.{% endcapture %}
{% capture WhyMakeThis %}
I was playing a game and encountered this type of puzzle. Obviously, this was not the first time I had encounterd this type of puzzle. However the game's impliemntation of it was a little strange.<br>
<br>
Rather than having a button change the state of the directly adjacent buttons, it changed the state of all buttons near it, including the diagonal ones. This proved to make the game harder than anticipated.<br>
<br>
Feeling inspired, I decided to find out the name of what the puzzle was even called and make an implimentation of it. The "try it" page offers an implimentation of of a 3x3 and 4x4 board, along with both variations of the game.
{% endcapture %}


{% include project_title_page.html
	img			= "/assets/images/project-icons/lights-out.png"
	desc		= description
	why			= WhyMakeThis
	script		= true
	github		= "https://github.com/Multarix/lights-out"
%}