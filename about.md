---
permalink: /about
group: about
title: About
description: All about Multarix, and this website.
layout: basic
---


# About Me
{: .text-center .title-margin }

Hi! I'm Multarix, <span class="my-age">26</span> year old, self taught, hobbyist programmer that mainly uses *Javascript/ Typescript*, mostly for and with *NodeJS*. I've been writing code for around <span class="year-started">7</span> years. I'm also a self confessed nerd and gamer, and I like to read a good book every now and then.
{: .text-left }

I've also dabbled with a few other languages such as *Python*, *C++* and *C#* and also briefly touched a few other languages such as *Haskell*, *Prolog* and *GO!*, none of which I enjoyed in the slightest. Also, while they may not be programming languages, I'm also semi-confident in writing *HTML* and *CSS*.
{: .text-left }

I've made a few projects over the years, from small scripts to more modest sized programs or modules. I've also made a few websites, including this one, using [Jekyll](https://jekyllrb.com/){: .open-in-new } and hosted on [Github Pages](https://pages.github.com/){: .open-in-new }. I've also made a few Discord bots, which I host on my Raspberry Pi.
{: .text-left }
<br>

# About This Website
{: .text-center .title-margin }

I created this site to serve as a single stop to find all my projects. Centralising all my projects onto a single website makes it easier to update each respective project when needed, and also allows me to simply add new ones as I make them. As a bonus, it makes it easier for anyone who wants to find my projects to do so.
{: .text-left }

<div class="text-center">
	<img src="/assets/images/site-logo.png" height="200px" width="200px" alt="Site Logo">
</div>


<script>
// Auto magical updating of the year
document.querySelector('.my-age').innerText = new Date().getFullYear() - 1997;
document.querySelector('.year-started').innerText = new Date().getFullYear() - 2016;
</script>