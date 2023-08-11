---
title: Projects
description: All of the available projects by Multarix
group: all-projects
layout: projects-page
permalink: /projects/
---

<h1 class="text-center title-margin">Projects</h1>

<div class="projects">
	{% assign projects = site.data.projects | sort: 'name' %}
	{% for project in projects %}

		{% include project_embed.html
			title		= project.name
			link		= project.url
			img			= project.img
			shortDesc	= project.shortDesc
			longDesc	= project.longDesc
		%}

	{% endfor %}
</div>