---
title: Truth Tables
group: truth-table
description: Creates a truth table from a Javascript boolean statement. Also converts relevant JS symbols into their mathematical counterparts.
permalink: /projects/truth-table/
---

{% capture description %}{{ page.description }}{% endcapture %}
{% capture WhyMakeThis %}
I made this because a certain university professor insisted on forcing students to write out truth tables by hand, calculating the answer in the same manner, and using the correct mathematical symbols while doing so.<br>
<br>
So rather than remember the symbols, and spend 20mins per truth table, I instead spent 8 hours doing some research and writing code to do it all for me. All I had to do was provide a valid javascript statement and let it do it all for me.<br>
<br>
Technically speaking, this supports complex statements with hundreds of variables, but I doubt I would ever need to do that.
{% endcapture %}


{% include project_title_page.html
	img			= "/assets/images/project-icons/tables.png"
	desc		= description
	why			= WhyMakeThis
	github		= "https://github.com/Multarix/TruthTable"
	extraTitle	= "Features"
	extraDesc	= "Truth table assembly;Converts JS operators to math symbols;Multi-variable support"
	script		= true
%}