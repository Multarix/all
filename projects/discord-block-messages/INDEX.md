---
title: Discord - Blocked Messages
group: discord-block
description: Remove that annoying "1 Blocked Message - Show Message" element when a user you blocked sends a message.
---

{% capture description %}{{ page.description }}{% endcapture %}
{% capture WhyMakeThis %}
Despite the fact that I personally don't use this script, I made it because I knew some people thought the fact that blocking a user doesn't really do much to stop them being able to interact with you if they are still in the same servers as you.<br>
<br>
By using this script, it simply stops the messages of those you have blocked from showing up to begin with. You'll still get a message recieved notification, but there is not much I can do about that fact.
{% endcapture %}


{% include project_title_page.html
	img			= "/assets/images/project-icons/discord.png"
	desc		= "Remove that annoying<br><code>1 Blocked Message - Show Message</code><br>element when a user you have blocked sends a message"
	why			= WhyMakeThis
	github		= "https://github.com/Multarix/Discord-Hide-Blocked-Messages"
	script		= true
%}