---
title: D&D-Loot
group: loot
description: A NodeJS module for generating encounter loot in Dungeons and Dragons.
permalink: /projects/dnd-loot/docs
---


<div markdown=1 class="text-center top-pad">
<div markdown=1 class="inline-index">

- [Classes](#classes)
	- [IndividualLoot](#individualloot)
	- [HoardLoot](#hoardloot)
	- [Money](#money)
	- [AllItems](#allitems)

</div>
<div markdown=1 class="inline-index">

- [Types](#types)
	- [IndividualLoot](#individualloot)
	- [HoardLoot](#hoardloot)
	- [Money](#money)
	- [AllItems](#allitems)

</div>
</div>

<br>


# [Classes](#classes){: .heading-anchor }
{: id="classes"}

## [IndividualLoot](#individualloot){: .heading-anchor }
{: id="individualloot" .no-border .text-center .no-margin-bot .top-pad }

Loot from a individual encounter
{: .bot-pad .text-center .no-margin-top .no-margin-bot }

### [Constructor](#individualloot#constructor){: .heading-anchor }
{: id="individualloot#constructor" }

{% assign individualConstructorArgs = "level, number, Challenge level of the encounter, true" | split: "|#|" %}
{% include project_docs_table.html
	arguments = individualConstructorArgs
%}

### [Properties](#individualloot#properties){: .heading-anchor }
{: id="individualloot#properties" .top-pad }

{% include project_docs_property.html
	name		= "challengelevel"
	id			= "individualloot#challengelevel"
	desc		= "The challenge level of the encounter."
	type		= "Money"
	link		= "#money"
	readonly	= true
%}

{% include project_docs_property.html
	name		= "money"
	id			= "individualloot#money"
	desc		= "All of the coins obtained from the encounter."
	type		= "number"
	readonly	= true
%}

<br>
<br>
{: .no-margin }


## [HoardLoot](#hoardloot){: .heading-anchor }
{: id="hoardloot" .no-border .text-center .no-margin-bot }

###### *Extends <a href="#individualloot">IndividualLoot</a>*
{: .no-border .text-center .no-margin }

Loot from a hoard encounter
{: .bot-pad .text-center .no-margin-top .no-margin-bot }

### [Constructor](#hoardloot#constructor){: .heading-anchor }
{: id="hoardloot#constructor" }

{% assign hoardConstructorArgs = "level, number, Challenge level of the encounter, true" | split: "|#|" %}
{% include project_docs_table.html
	arguments = hoardConstructorArgs
%}

### [Properties](#hoardloot#properties){: .heading-anchor }
{: id="hoardloot#properties" .top-pad }

{% include project_docs_property.html
	name		= "items"
	id			= "hoardloot#items"
	desc		= "All of the items obtained from the encounter."
	type		= "AllItems"
	link		= "#allitems"
	readonly	= true
%}


<br>
<br>
{: .no-margin }


## [Money](#money){: .heading-anchor }
{: id="money" .no-border .text-center .no-margin-bot }

Represents all the money obtained from an encounter
{: .bot-pad .text-center .no-margin-top .no-margin-bot }

### [Constructor](#money#constructor){: .heading-anchor }
{: id="money#constructor" }

{% assign moneyConstructorArgs = "roll, number, The value rolled on the table, false|#|type, string, The type loot rolls being done (individual or hoard), false|#|difficultyRating, string, The challenge rating of the encounter, false" | split: "|#|" %}
{% include project_docs_table.html
	arguments = moneyConstructorArgs
%}

### [Properties](#money#properties){: .heading-anchor }
{: id="money#properties" .top-pad }

{% include project_docs_property.html
	name		= "copper"
	id			= "money#copper"
	desc		= "The copper coins obtained."
	type		= "CoinData"
	link		= "#coindata"
	readonly	= true
%}

{% include project_docs_property.html
	name		= "silver"
	id			= "money#silver"
	desc		= "The silver coins obtained."
	type		= "CoinData"
	link		= "#coindata"
	readonly	= true
%}

{% include project_docs_property.html
	name		= "electrum"
	id			= "money#electrum"
	desc		= "The electrum coins obtained."
	type		= "CoinData"
	link		= "#coindata"
	readonly	= true
%}

{% include project_docs_property.html
	name		= "gold"
	id			= "money#gold"
	desc		= "The gold coins obtained."
	type		= "CoinData"
	link		= "#coindata"
	readonly	= true
%}

{% include project_docs_property.html
	name		= "platinum"
	id			= "money#platinum"
	desc		= "The platinum coins obtained."
	type		= "CoinData"
	link		= "#coindata"
	readonly	= true
%}

{% assign noArgs = "N/A, N/A, N/A, N/A" | split: "|#|" %}
### [Methods](#money#methods){: class="heading-anchor" }
{: id="money#methods" .top-pad }

{% include project_docs_method.html
	name		= "reroll"
	id			= "money#reroll()"
	desc		= "Rerolls the coins obtained."
	returns		= "void"
	arguments	= noArgs
%}

{% include project_docs_method.html
	name		= "inCopper"
	id			= "money#inCopper()"
	desc		= "Returns the total value of all coins using copper as the highest denomination."
	returns		= "string"
	arguments	= noArgs
%}

{% include project_docs_method.html
	name		= "inSilver"
	id			= "money#inSilver()"
	desc		= "Returns the total value of all coins using silver as the highest denomination."
	returns		= "string"
	arguments	= noArgs
%}

{% include project_docs_method.html
	name		= "inElectrum"
	id			= "money#inElectrum()"
	desc		= "Returns the total value of all coins using electrum as the highest denomination."
	returns		= "string"
	arguments	= noArgs
%}

{% include project_docs_method.html
	name		= "inGold"
	id			= "money#inGold()"
	desc		= "Returns the total value of all coins using gold as the highest denomination."
	returns		= "string"
	arguments	= noArgs
%}

{% include project_docs_method.html
	name		= "inPlatinum"
	id			= "money#inPlatinum()"
	desc		= "Returns the total value of all coins using platinum as the highest denomination."
	returns		= "string"
	arguments	= noArgs
%}


<br>
<br>
{: .no-margin }


## [AllItems](#allitems){: .heading-anchor }
{: id="allitems" .no-border .text-center .no-margin-bot .top-pad }

Represents all the items obtained from an encounter.
{: .bot-pad .text-center .no-margin-top .no-margin-bot }

### [Constructor](#allitems#constructor){: .heading-anchor }
{: id="allitems#constructor" }

{% assign allitemsConstructorArgs = "difficulty, string, The value rolled on the table, false|#|lootTier, number, The type of loot rolls being done (individual or hoard), false" | split: "|#|" %}
{% include project_docs_table.html
	arguments = individualConstructorArgs
%}

### [Properties](#allitems#properties){: .heading-anchor }
{: id="allitems#properties" .top-pad }

{% include project_docs_property.html
	name		= "art"
	id			= "allitems#art"
	desc		= "The art objects obtained."
	type		= "ArtData"
	link		= "#artdata"
	readonly	= true
%}

{% include project_docs_property.html
	name		= "gem"
	id			= "allitems#gem"
	desc		= "The gems obtained."
	type		= "GemData"
	link		= "#gemdata"
	readonly	= true
%}

{% include project_docs_property.html
	name		= "magicItems"
	id			= "allitems#magicItems"
	desc		= "The magic items obtained."
	type		= "MagicItem"
	link		= "#magicitem"
	isArray		= true
	readonly	= true
%}

### [Methods](#allitems#methods){: class="heading-anchor" }
{: id="allitems#methods" .top-pad }

{% include project_docs_method.html
	name		= "reroll"
	id			= "allitems#reroll()"
	desc		= "Rerolls the items obtained."
	returns		= "void"
	arguments	= noArgs
%}


# [Types](#types){: .heading-anchor }
{: id="types" .top-pad}

<br>
{: .no-margin }

[Back to top of page](#top)
{: .text-center .no-margin }