---
title: TERA Guide
group: tera-guide
description: A TERA Toolbox module that telegraphs boss attacks, calls out mechanics, recommended skill usage and more!
layout: title
---

{% capture DESC %}{{ page.description }}{% endcapture %}


{% capture WHY %}
<p>Originally, there was another guide module made by <a class="open-in-new" href="https://github.com/hsdn/tera-guide-core">HSDN</a>, but I found it to be lacking in some areas, or simply had pointless features. Taking his code as a base, I refactored, cleaned up and added/ removed things to my liking. In the process, creating what I felt was a faster and better module.</p>

<p>Later, HSDN himself implimented quite a few of my changes and additions to his own module, and I quit the game awhile later. As such this module is archived and no longer maintained.</p>
{% endcapture %}


{%- capture ABOUT -%}
<p>Supports a wide variety of features, including:</p>
<ul>
	<li>Attack Telegraphs</li>
	<li>Dungeon mechanic notifications</li>
	<li>Recommended skill notifications (mainly for tanks and healers)</li>
	<li>Text to Speech callouts</li>
	<li>Campfire spawning</li>
</ul>
<p>Guides for all current (at the time) dungeons were included.</p>
{%- endcapture -%}


{% include project_title_page.html
	name		= page.title
	img			= "/src/img/project-icons/tera.png"
	desc		= DESC
	why			= WHY
	about		= ABOUT
	github		= "https://github.com/Multarix/tera-guide-revised"
%}