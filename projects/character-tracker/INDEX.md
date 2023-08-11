---
title: Character Tracker
group: character-tracker
description: Add characters, world building or more with this program. Can be used to keep track of characters in a story, game or even for a Dungeons and Dragons campaign.
---

{% capture description %}{{ page.description }}{% endcapture %}
{% capture WhyMakeThis %}
I created this to help with tracking characters for stories. I also quickly realised that it can be used for other things, such as a DM using it for a D&D campaign.<br>
<br>
I stopped working on it awhile back, but if anyone shows interest in it, I can update it further. Or if you want, fork it yourself.
{% endcapture %}


{% include project_title_page.html
	img			= "/assets/images/project-icons/character-tracker.png"
	desc		= description
	why			= WhyMakeThis
	github		= "https://github.com/Multarix/CharacterTracker"
	extraTitle	= "Tracking Features"
	extraDesc	= "Name;Age;Species;Relationships to other characters;Detailed character information;World building notes;And more!"
%}