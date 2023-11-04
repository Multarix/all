---
title: Boids
group: boids
description: A bird/ fish or other related flocking simulation.
layout: title
---

{% capture DESC %}{{ page.description }}{% endcapture %}


{% capture WHY %}
<p>Well why not? I wanted to learn more about boid simulations and some of the techniques that go into optimising it.</p>
<p>Specifically, learning about compute shaders as well as gpu instancing. Even if what I learnt was relatively entry level, it was still something that was new and interesting</p>
{% endcapture %}


{% capture ABOUT %}
<p>The simulation was built within the Godot Engine, and uses a variety of techniques to increase the amount of boids that can be run simultaneously, including but not limited to:<br>
<ul>
	<li>Compute shader</li>
	<li>GPU instancing</li>
	<li>Basic spatial hashing</li>
	<li>C# implimentation</li>
</ul>
Using an RTX 2080, I was able to simulate around 100,000 boids while keeping a steady frame rate of 60fps, your milage may vary.
</p>
{% endcapture %}


{% include project_title_page.html
	name		= page.title
	img			= "/src/img/project-icons/boids.png"
	desc		= DESC
	why			= WHY
	about 		= ABOUT
	github		= "https://github.com/Multarix/Boids-Compute-Shader"
	blog		= true
%}