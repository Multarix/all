---
title: Discord - Chat Buttons
group: discord-chat
description: Removes buttons from the chatbar that you don&apos;t or can&apos;t use, such as &quot;Gift Nitro&quot; &quot;Stickers&quot; or &quot;Boost Server&quot;.
layout: title
---

{% capture DESC %}{{ page.description }}{% endcapture %}


{% capture WHY %}
<p>The reasoning for making this should be pretty simple. A clean chatbar, and to say "screw you" to Discord for trying to get you to spend money.</p>

<p>Even those who pay for nitro cannot hide these icons, nor do most people use them to begin with. They simply sit there unused, Discord hoping you might click them by accident.</p>
{% endcapture %}


{% capture ABOUT %}
<p>Hides the the useless chat bar icons. Notebly, the <wbr><code>Gift Nitro</code>, <wbr><code>Boost Server</code> <wbr>& <wbr><code>Stickers</code> <wbr>icons.</p>

<p>The script simply sets the CSS of the icons to no display, hiding them (and preventing you from clicking on them). This allows the chatbar to look much cleaner, especially if you use discord at a smaller size than full-screen.</p>

<p>Only works on the desktop and browser versions of Discord.</p>
{% endcapture %}


{% include project_title_page.html
	name		= "Discord:<br>Remove chatbar buttons"
	img			= "/src/img/project-icons/discord.png"
	desc		= DESC
	why			= WHY
	about 		= ABOUT
	github		= "https://github.com/Multarix/Discord-remove-useless-chat-buttons"
%}