---
title: Boss HP
group: boss-hp
description: A semi-transparent, always-on-top boss HP gauge for the game Black Desert Online.
permalink: /projects/boss-hp/
---

{% capture description %}{{ page.description }}{% endcapture %}
{% capture WhyMakeThis %}
The reasoning for making this was quite simple really. I couldn't tell what HP a boss was at. I had to guess based on the HP bar, and could reasonably tell 25, 50 and 75% HP, but anything else was a guess.<br>
<br>
As such I decided to make this to help out. By default, it should open in the exact place that a boss HP bar would appear, and is somewhat transparent. This should allow for you to see the HP underneath it, granting you a better idea of the boss's HP percentage.
{% endcapture %}


{% include project_title_page.html
	img			= "/assets/images/project-icons/boss-hp.png"
	desc		= description
	why			= WhyMakeThis
	github		= "https://github.com/Multarix/BDO-Boss-HP-Gauge"
	extraTitle	= "Features"
	extraDesc	= "Adjustable position;Changable Opacity levels;'Always on top';Accuracy markings for every 10%"
%}