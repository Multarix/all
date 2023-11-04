---
title: Lights Out
group: lights-out
description: A simple implimentation of the classic game 'Lights Out'. Supports 3x3 and 4x4 boards.
layout: title
---

{% capture DESC %}A simple implimentation of the classic game <wbr>'Lights Out'. <wbr>Supports 3x3 and 4x4 boards{% endcapture %}


{% capture WHY %}
I was playing a game and encountered this type of puzzle. Obviously, this was not the first time I had encounterd this type of puzzle. However the game's impliemntation of it was a little strange.<br>
<br>
Rather than having a button change the state of the directly adjacent buttons, it changed the state of all buttons near it, including the diagonal ones. This proved to make the game harder than anticipated.<br>
<br>
Feeling inspired, I decided to find out the name of what the puzzle was even called and make an implimentation of it. The "try it" page offers an implimentation of of a 3x3 and 4x4 board, along with both variations of the game.
{% endcapture %}


{%- capture ABOUT -%}
<p>This web version supports 3x3 and 4x4 boards. However, on the repo I also went ahead and made some code in order to brute force a solution to any given state of the board (assuming they are valid states). I perhaps went a little overboard as I spent a good while optimising and even creating a C++ version to increase the speed of the calculations.</p>

<p>There also exists a compiled version of the C++ code that is wrapped up into a neat little console application that allows you to easily solve a lights out puzzle by following the intructions it gives you. Code is available on the repo.</p>
{%- endcapture -%}


{% include project_title_page.html
	name		= page.title
	img			= "/src/img/project-icons/lights-out.png"
	desc		= DESC
	why			= WHY
	about		= ABOUT
	script		= true
	github		= "https://github.com/Multarix/lights-out"
%}