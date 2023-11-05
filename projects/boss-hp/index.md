---
title: Boss HP
group: boss-hp
description: A semi-transparent, always-on-top boss HP gauge for the game Black Desert Online.
layout: title
---

{% capture DESC %}{{ page.description }}{% endcapture %}


{% capture WHY %}
<p>The reasoning for making this was quite simple really. I couldn't tell what HP a boss was at. I had to guess based on the HP bar, and could reasonably tell 25, 50 and 75% HP, but anything else was a guess.</p>

<p>As such I decided to make this to help out. By default, it should open in the exact place that a boss HP bar would appear, and is somewhat transparent. This should allow for you to see the HP underneath it, granting you a more accurate idea of the boss's HP.</p>
{% endcapture %}


{% capture ABOUT %}
<p>Allows for accurate boss HP readings and supports 1080p, 1440p and 4k resolutions. It does not intefere with the game in any way, and is simply a semi-transparent window.<br>
<br>
<b>Features:</b></p>
<ul>
	<li>Adjustable position</li>
	<li>Adjustable opacity level</li>
	<li>'Always on top' display</li>
	<li>Markings for every 10% of hp</li>
</ul>

<p>UI scale must be set to 100% for the ui to be in the correct position.</p>
{% endcapture %}


{% include project_title_page.html
	name		= page.title
	img			= "/src/img/project-icons/boss-hp.png"
	desc		= DESC
	why			= WHY
	about 		= ABOUT
	github		= "https://github.com/Multarix/BDO-Boss-HP-Gauge"
%}