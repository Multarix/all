---
title: Projects
group: all-projects
layout: projects-page
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