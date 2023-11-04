---
title: Character Tracker
group: character-tracker
description: Track characters, world building or more with this program. Can be used to keep track of characters in a story, game or even for a Dungeons and Dragons campaign.
layout: title
---

{% capture DESC %}{{ page.description }}{% endcapture %}


{% capture WHY %}
<p>I created this to help with tracking characters for stories. I also quickly realised that it can be used for other things, such as a DM using it for a D&D campaign.</p>

<p>I stopped working on it awhile back, but if anyone shows interest in it, I can update it further. Or if you want, fork it yourself.</p>
{% endcapture %}


{% capture ABOUT %}
<p>Supports the ability to track multiple characters with things like age, gender, notes and even their relationships to each other.</p>

<p>Also supports world building notes, allowing you to keep track of things such as locations, events or even things like travel times. Suitable for use in stories, games or even for a Dungeons and Dragons campaign</p>

<p>Includes a search feature to quickly find characters or world building notes that include your given search term. Handy for quickly bringing up related information.</p>
{% endcapture %}



{% include project_title_page.html
	name		= page.title
	img			= "/src/img/project-icons/character-tracker.png"
	desc		= DESC
	why			= WHY
	about		= ABOUT
	github		= "https://github.com/Multarix/CharacterTracker"
%}