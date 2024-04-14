---
title: Base Conversions
group: base-conversion
description: Convert between different number bases, as well as to and from Binary Encoded Decimal, while also supplying valid working instructions.
layout: title
---

{% capture DESC %}{{ page.description }}{% endcapture %}


{% capture WHY %}
<p>This script was created to spite a university professor who insisted that signed 12 bit binary was commonly used.</p>

<p>The reality is that he likely based his questions on 12 bit due to the fact that there are little to no online 12 bit binary converters out there.</p>

<p>Rather than spend the time converting things by hand, I decided to instead spend 10x as long making a script that does it for me, while also providing valid "working" instructions.</p>
{% endcapture %}


{% capture ABOUT %}
<p>Using 8, 12, 16 & 32 bit numbers, this script is able to convert between any of the following signed or unsigned bases:</p>
<ul>
	<li>Binary</li>
	<li>Octal</li>
	<li>Decimal</li>
	<li>Hexadecimal</li>
</ul>
<p>The script is also able to convert to and from Binary Encoded Decimal.</p>
{% endcapture %}


{% include project_title_page.html
	name		= page.title
	img			= "/src/img/project-icons/conversion.png"
	desc		= DESC
	why			= WHY
	about		= ABOUT
	github		= "https://github.com/Multarix/baseConversions"
%}