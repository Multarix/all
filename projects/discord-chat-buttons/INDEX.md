---
title: Discord - Chat Buttons
group: discord-chat
description: Removes buttons from the chatbar that you don&apos;t or can&apos;t use, such as &quot;Gift Nitro&quot; &quot;Stickers&quot; or &quot;Boost Server&quot;.
---

{% capture description %}{{ page.description }}{% endcapture %}
{% capture WhyMakeThis %}
The reasoning for making this should be pretty simple. A clean chatbar, and to say "screw you" to Discord for trying to get you to spend money.<br>
<br>
Even those who pay for nitro cannot hide these icons, nor do most of them use them to begin with. They simply sit there unused, Discord hoping you might click them by accident.<br>
<br>
Only works on the desktop and browser versions of Discord.
{% endcapture %}


{% include project_title_page.html
	img			= "/assets/images/project-icons/discord.png"
	desc		= description
	why			= WhyMakeThis
	github		= "https://github.com/Multarix/Discord-remove-useless-chat-buttons"
	script		= true
%}