---
title: Truth Tables
group: truth-table
description: Creates a truth table from a Javascript boolean statement. Also converts relevant JS symbols into their mathematical counterparts.
layout: title
---

{% capture DESC %}{{ page.description }}{% endcapture %}


{% capture WHY %}
<p>I made this because a certain university professor insisted on forcing students to write out truth tables by hand, calculating the answer in the same manner, and using the correct mathematical symbols while doing so.</p>

<p>So rather than remember the symbols, and spend 20mins per truth table, I instead spent 8 hours doing some research and writing code to do it all for me. All I had to do was provide a valid javascript statement and let it do it all for me.</p>
{% endcapture %}


{%- capture ABOUT -%}
<p>Technically, supports up to hundreds of variables with complex statements, but you probably don't need that. In short, this script creates a truth table of any given statement - provided it's valid Javascript anyway.</p>

<p>Supports colored output to the console using <a class="external" href="https://www.npmjs.com/package/chalk" target="_blank">chalk</a>.</p>
{%- endcapture -%}


{% include project_title_page.html
	name		= page.title
	img			= "/src/img/project-icons/tables.png"
	desc		= DESC
	why			= WHY
	about		= ABOUT
	github		= "https://github.com/Multarix/TruthTable"
	extraTitle	= "Features"
	extraDesc	= "Truth table assembly;Converts JS operators to math symbols;Multi-variable support"
%}