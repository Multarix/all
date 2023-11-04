---
title: Discord - Blocked Messages
group: discord-block
description: Remove that annoying "1 Blocked Message - Show Message" element when a user you blocked sends a message.
layout: title
---

{% capture DESC %}Remove that annoying <wbr><code>1 Blocked Message - Show Message</code> <wbr>element when a user you have blocked sends a message.{% endcapture %}


{% capture WHY %}
<p>Despite the fact that I personally don't use this script, I made it because I knew some people thought the fact that blocking a user doesn't really do much to stop them being able to interact with you if they are still in the same servers as you.</p>

<p>By using this script, it simply stops the messages of those you have blocked from showing up to begin with. You'll still get a message recieved notification, but there is not much I can do about that fact.</p>
{% endcapture %}


{% capture ABOUT %}
<p>This script simply modifies the CSS that Discord uses. In doing so, it hides all messages from people you have blocked. However, the notification that a new message in the channel still appears (there is little that can be done about this fact).</p>

<p>Compared to other scripts of this nature, this is probably close to, if not the smallest script. The code is relatively simple as well, meaning it's easy to verify it as being non-harmful.</p>

<p>Only works on the desktop and browser versions of Discord.</p>
{% endcapture %}



{% include project_title_page.html
	name		= "Discord:<br>Hide Blocked Messages"
	img			= "/src/img/project-icons/discord.png"
	desc		= DESC
	why			= WHY
	about		= ABOUT
	github		= "https://github.com/Multarix/Discord-Hide-Blocked-Messages"
%}