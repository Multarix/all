---
title: Pseudo-Code
group: pseudo-code
description: A script that converts Python code into pseudo-code
permalink: /projects/pseudo-code/
---

{% capture description %}{{ page.description }}{% endcapture %}
{% capture WhyMakeThis %}
I have never written pseudo-code before starting a project. The most I would do is write maybe a couple of brief comments outlining the steps I'd take.<br>
<br>
So when a Teacher instructed students to hand in pseudo-code before they could start working on proper code, I was obviously quite annoyed. On top of that, the teacher expected the "real" code to exactly match the "fake" code.
{% endcapture %}


{% include project_title_page.html
	img			= "/assets/images/project-icons/python.png"
	desc		= description
	why			= WhyMakeThis
	github		= "https://github.com/Multarix/PyToPseudo"
	script		= true
%}