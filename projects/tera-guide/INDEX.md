---
title: TERA Guide
group: tera-guide
description: A TERA Toolbox module that telegraphs boss attacks, calls out mechanics, recommended skill usage and more!
---

{% capture description %}{{ page.description }}{% endcapture %}
{% capture WhyMakeThis %}
Technically, I didn't make this. At least not the concept anyway. It started out as a fork of <a class="open-in-new" href="https://github.com/hsdn/tera-guide-core">HSDN's</a> guide module.<br>
<br>
After working with it for awhile, I decided to make a revised version that had cleaner code, and forced some consistancy by using a linter and more modern JS practices. Ultimately I also ended up removing several features I felt few people needed or used, while also adding in a few that could be more useful.<br>
<br>
Later, HSDN himself implimented most of my changes and additions to his own code base, before I stopped working on my own version when I quit the game.<br>
<br>
This project is no longer maintained and is archived, but it was still used by plenty of people when it was being worked on.
{% endcapture %}


{% include project_title_page.html
	img			= "/assets/images/project-icons/tera.png"
	desc		= description
	why			= WhyMakeThis
	github		= "https://github.com/Multarix/tera-guide-revised"
	codeExample	= programCode
	extraTitle	= "Features"
	extraDesc	= "TTS;Attack Telegraphs;Recommended skill usage;Dungeon mechanic notifications;Campfire spawning"
%}