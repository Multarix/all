---
title: D&D-Dice
group: dnd-dice
description: A NodeJS module for rolling dice in Dungeons and Dragons.
permalink: /projects/dice/docs
---


<div markdown=1 class="text-center top-pad">
<div markdown=1 class="inline-index">

- [Classes](#classes)
	- [Coin](#coin)
	- [Die](#die)
	- [D4](#d4)
	- [D6](#d6)
	- [D8](#d8)
	- [D10](#d10)
	- [D12](#d12)
	- [D20](#d20)
	- [D100](#d100)

</div>
</div>

<br>


# [Classes](#classes){: .heading-anchor }
{: id="classes"}

## [Coin](#coin){: .heading-anchor }
{: id="coin" .no-border .text-center .no-margin-bot .top-pad }

Represents a standard coin.
{: .bot-pad .text-center .no-margin-top .no-margin-bot }

### [Constructor](#coin-constructor){: .heading-anchor }
{: id="coin-constructor" }

{% assign constructorArgs = "N/A, N/A, N/A, N/A" | split: "|#|" %}
{% include project_docs_table.html
	arguments = constructorArgs
%}

### [Properties](#coin-properties){: .heading-anchor }
{: id="coin-properties" .top-pad }

{% include project_docs_property.html
	name		= "result"
	id			= "coin-result"
	desc		= "The result of the coin flip."
	type		= "string"
	readonly	= true
%}
	
### [Methods](#coin-methods){: id="coin-methods" class="heading-anchor" }
{: id="coin-methods" .top-pad }

{% assign flipArgs = "N/A, N/A, N/A, N/A" | split: "|#|" %}
{% include project_docs_method.html
	name="flip"
	id="coin-flip()"
	desc='Flips the coin and returns either "heads" or "tails" at an equal chance.'
	returns="string"
	arguments=flipArgs
%}


<br>
<br>
{: .no-margin }


## [Die](#die){:  .heading-anchor }
{: id="die" .no-border .text-center .no-margin-bot }

Represents a multi-faced die.
{: .bot-pad .text-center .no-margin-top .no-margin-bot }

### [Constructor](#die-constructor){: .heading-anchor }
{: id="die-constructor" }

{% assign constructorArgs = "N/A, N/A, N/A, N/A" | split: "|#|" %}
{% include project_docs_table.html
	arguments = constructorArgs
%}

### [Properties](#die-properties){: .heading-anchor }
{: id="die-properties" .top-pad }

{% include project_docs_property.html
	name		= "value"
	id			= "die-value"
	desc		= "The result of the latest dice roll."
	type		= "number"
	readonly	= true
%}

{% include project_docs_property.html
	name		= "faces"
	id			= "die-faces"
	desc		= "The number of faces on the die."
	type		= "number"
	readonly	= true
%}
	
### [Methods](#die-methods){: class="heading-anchor" }
{: id="die-methods" .top-pad }

{% assign arrayOfArgs = "N/A, N/A, N/A, N/A" | split: "|#|" %}
{% include project_docs_method.html
	name		= "roll"
	id			= "die-roll()"
	desc		= "Re-rolls the die and returns a random number between 1 and the number of faces on the die."
	returns		= "number"
	arguments	= arrayOfArgs
%}


<br>
<br>
{: .no-margin }


## [D4](#d4){: .heading-anchor }
{: id="d4" .no-border .text-center .no-margin-bot }

###### *Extends [Die](#die)*
{: .no-border .text-center .no-margin }

Represents a 4 sided die.
{: .bot-pad .text-center .no-margin-top .no-margin-bot }

### [Constructor](#d4-constructor){: .heading-anchor }
{: id="d4-constructor" }

{% assign constructorArgs = "N/A, N/A, N/A, N/A" | split: "|#|" %}
{% include project_docs_table.html
	arguments = constructorArgs
%}


<br>
<br>
{: .no-margin }


## [D6](#d6){: .heading-anchor }
{: id="d6" .no-border .text-center .no-margin-bot }

###### *Extends [Die](#die)*
{: .no-border .text-center .no-margin }

Represents a 6 sided die.
{: .bot-pad .text-center .no-margin-top .no-margin-bot }

### [Constructor](#d6-constructor){: .heading-anchor }
{: id="d6-constructor" }

{% assign constructorArgs = "N/A, N/A, N/A, N/A" | split: "|#|" %}
{% include project_docs_table.html
	arguments = constructorArgs
%}


<br>
<br>
{: .no-margin }


## [D8](#d8){: .heading-anchor }
{: id="d8" .no-border .text-center .no-margin-bot }

###### *Extends [Die](#die)*
{: .no-border .text-center .no-margin }

Represents a 8 sided die.
{: .bot-pad .text-center .no-margin-top .no-margin-bot }

### [Constructor](#d8-constructor){: .heading-anchor }
{: id="d8-constructor" }

{% assign constructorArgs = "N/A, N/A, N/A, N/A" | split: "|#|" %}
{% include project_docs_table.html
	arguments = constructorArgs
%}


<br>
<br>
{: .no-margin }


## [D10](#d10){: .heading-anchor }
{: id="d10" .no-border .text-center .no-margin-bot }

###### *Extends [Die](#die)*
{: .no-border .text-center .no-margin }

Represents a 10 sided die.
{: .bot-pad .text-center .no-margin-top .no-margin-bot }

### [Constructor](#d10-constructor){: .heading-anchor }
{: id="d10-constructor" }

{% assign constructorArgs = "N/A, N/A, N/A, N/A" | split: "|#|" %}
{% include project_docs_table.html
	arguments = constructorArgs
%}


<br>
<br>
{: .no-margin }


## [D12](#d12){: .heading-anchor }
{: id="d12" .no-border .text-center .no-margin-bot }

###### *Extends [Die](#die)*
{: .no-border .text-center .no-margin }

Represents a 12 sided die.
{: .bot-pad .text-center .no-margin-top .no-margin-bot }

### [Constructor](#d12-constructor){: .heading-anchor }
{: id="d12-constructor" }

{% assign constructorArgs = "N/A, N/A, N/A, N/A" | split: "|#|" %}
{% include project_docs_table.html
	arguments = constructorArgs
%}


<br>
<br>
{: .no-margin }


## [D20](#d20){: .heading-anchor }
{: id="d20" .no-border .text-center .no-margin-bot }

###### *Extends [Die](#die)*
{: .no-border .text-center .no-margin }

Represents a 20 sided die.
{: .bot-pad .text-center .no-margin-top .no-margin-bot }

### [Constructor](#d20-constructor){: .heading-anchor }
{: id="d20-constructor" }

{% assign constructorArgs = "N/A, N/A, N/A, N/A" | split: "|#|" %}
{% include project_docs_table.html
	arguments = constructorArgs
%}


<br>
<br>
{: .no-margin }


## [D100](#d100){: .heading-anchor }
{: id="d100" .no-border .text-center .no-margin-bot }

###### *Extends [Die](#die)*
{: .no-border .text-center .no-margin }

Represents a 100 sided die.
{: .bot-pad .text-center .no-margin-top .no-margin-bot }

### [Constructor](#d100-constructor){: .heading-anchor }
{: id="d100-constructor" }

{% assign constructorArgs = "N/A, N/A, N/A, N/A" | split: "|#|" %}
{% include project_docs_table.html
	arguments = constructorArgs
%}


<br>
{: .no-margin }

[Back to top of page](#top)
{: .text-center .no-margin }