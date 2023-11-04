---
title: Python to Pseudo-Code
group: pseudo-code
description: A script that converts Python code into pseudo-code
layout: title
---

{% capture DESC %}{{ page.description }}{% endcapture %}


{% capture WHY %}
<p>I almost never write pseudo-code before starting a project. Typically, this is because I can already understand the flow that the code needs to take in order to reach the desired outcome. Even when I need to make it more clear, the most I do is write maybe a couple of brief comments outlining the steps I should take.</p>

<p>So when a Teacher instructed students to hand in pseudo-code before they could start working on any proper code, I was obviously quite annoyed. The teacher also expected the pseudo-code to exactly match the "real" code.</p>

<p>Needless to say, on the types of projects that were being asked of students, this was infuriating and a huge waste of time. Therefore, I made some code to turn Python code into generic pseudo-code. It needs a few human tweaks here and there, but it's perfectly fine otherwise.</p>
{% endcapture %}


{%- capture ABOUT -%}
<p>Strips away type definitions, comments and other such things that are not needed, while converting the rest of the code into a "human readable" pseudo-code format. Included but not limited to: functions, classes, variables etc.</p>

<p>For the most part, human editing should not be needed after the fact, but you should check the output to make sure it's valid. The more complex the code, the more likely mistakes might make their way into the output.</p>
{%- endcapture -%}


{% include project_title_page.html
	name		= page.title
	img			= "/src/img/project-icons/python.png"
	desc		= DESC
	why			= WHY
	about 		= ABOUT
	github		= "https://github.com/Multarix/PyToPseudo"
%}