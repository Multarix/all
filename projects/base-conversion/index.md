---
title: Base Conversions
group: base-conversion
description: Convert between different number bases, as well as to and from Binary Encoded Decimal, while also supplying valid working instructions.
permalink: /projects/base-conversion/
---

{% capture description %}{{ page.description }}{% endcapture %}
{% capture WhyMakeThis %}
This script was created to spite a university professor who insisted that signed 12 bit binary was commonly used.<br>
<br>
The reality is that he likely based his questions on 12 bit due to the fact that there are little to no online 12 bit binary converters out there.<br>
<br>
Rather than spend the time converting things by hand, I decided to instead spend 10x as long making a script that does it for me, while also providing valid "working" instructions.<br>
<br>
Aced his 2 hour test in about 15 minutes because of this thing. Screw that guy right?
{% endcapture %}


{% include project_title_page.html
	img			= "/assets/images/project-icons/conversion.png"
	desc		= description
	why			= WhyMakeThis
	script		= true
	github		= "https://github.com/Multarix/baseConversions"
	extraTitle	= "Supported Bases"
	extraDesc	= "Binary;Octal;Decimal;Hexadecimal"
%}