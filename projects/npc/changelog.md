---
title: D&D-NPC
group: npc
description: A NodeJS module for generating random NPCs in Dungeons and Dragons.
permalink: /projects/npc/changelog
---

# Changelog
{: .text-center }

<br>

## [v2.0.8](#v2.0.8){: .heading-anchor } <span class="current">Current Version</span>
{: id="v2.0.8" }


### [Changes](#v2.0.8-changes){: .heading-anchor }
{: id="v2.0.8-changes" .no-border }

#### [Armor](#v2.0.8-changes-armor){: .heading-anchor }
{: id="v2.0.8-changes-armor" .no-border }

- Added 'Pride Silk Outfit' as a new type of possible armor
- Removed `<Armor>#isMetal`
- Added `<Armor>#armorClass`
- Added `<Armor>#scalesWithDex`
- Added `<Armor>#maxDexBonus`

```diff
- Armor.isMetal
+ Armor.armorClass
+ Armor.scalesWithDex
+ Armor.maxDexBonus
```

### [Additions](#v2.0.8-additions){: .heading-anchor }
{: id="v2.0.8-additions" .no-border }

#### [Classes](#v2.0.8-additions-classes){: .heading-anchor }
{: id="v2.0.8-additions-classes" .no-border }

- Added the `Artificer` as a possible class

Click [here]({{ '/npc/docs/class-types/artificer' | relative_url }}) for more details on the class


<br>
<hr>
<br>


## [v2.0.0](#v2.0.0){: .heading-anchor }
{: id="v2.0.0" }

### [General Changes](#v2.0.0-changes){: .heading-anchor }
{: id="v2.0.0-changes" .no-border }

#### [E6 Module Conversion](#v2.0.0-changes-e6-module-conversion){: .heading-anchor }
{: id="v2.0.0-changes-e6-module-conversion" .no-border }

Updated the code base to use ES6 modules.<br>
This means you can no longer use `require()`, you must use `import` instead.

```diff
- const NPC = require("dnd-npc");
+ import NPC from "dnd-npc";
```

#### [Module Export](#v2.0.0-changes-module-export){: .heading-anchor }
{: id="v2.0.0-changes-module-export" .no-border }

The module itself is now the `NPC` class.<br>
As such you no longer have to use a dot operator to get to the npc class.

```diff
- const npc = new dnd.npc();
+ const npc = new NPC();
```

#### [.raceType()](#v2.0.0-changes-raceType){: .heading-anchor }
{: id="v2.0.0-changes-raceType" .no-border }

`.raceType()` was changed to `.setRace()`<br>
Support was also dropped for using an object or an array to set the race, instead favoring 2 strings.

```diff
- npc.raceType(["Warforged", "Juggernaut"]);
- npc.raceType({ raceType: "Warforged", subRace: "Juggernaut" });
- npc.raceType("Warforged", "Juggernaut");
+ npc.setRace("Warforged", "Juggernaut");
```

#### [.roleType()](#v2.0.0-changes-roleType){: .heading-anchor }
{: id="v2.0.0-changes-roleType" .no-border }

`.roleType()` was changed to `.setClass()`<br>
Support was also dropped for using an object or an array to set the role, instead favoring a single string.

```diff
- npc.roleType(["Fighter"]);
- npc.roleType({ roleType: "Fighter" });
- npc.roleType("Fighter");
+ npc.setClass("Fighter");
```

#### [.raceType](#v2.0.0-changes-raceType){: .heading-anchor }
{: id="v2.0.0-changes-raceType" .no-border }

Made `.raceType` a private property, meaning you can no longer access it directly.<br>
Instead you must use `.getRace()`

```diff
- npc.raceType;
+ npc.getRace();
```

#### [.roleType](#v2.0.0-changes-roleType){: .heading-anchor }
{: id="v2.0.0-changes-roleType" .no-border }

Made `.roleType` a private property, meaning you can no longer access it directly.<br>
Instead you must use `.getClass()`

```diff
- npc.roleType;
+ npc.getClass();
```

#### [.generate()](#v2.0.0-changes-generate){: .heading-anchor }
{: id="v2.0.0-changes-generate" .no-border }

`.generate()` is now an asynchronous method.<br>
As such it returns a promise containing the character object instead of the character object itself.

```diff
- const character = npc.generate();
+ const character = await npc.generate();
```

### [Character Object Changes](#v2.0.0-character-object){: .heading-anchor }
{: id="v2.0.0-character-object" .no-border }

#### [.role](#v2.0.0-character-object-role){: .heading-anchor }
{: id="v2.0.0-character-object-role" .no-border }

`<character>.role` was changed back to `<character>.class`
Each stat within `<character>#class-stats` was changed to an object that contains the stat total & the profficancy bonus granted by that total

```diff
- character.role
+ character.class

- character.class.stats.strength // 18
+ character.class.stats.strength // { total: 18, prof: 4 }
```

#### [.inventory-weapon](#v2.0.0-character-object-inventory-weapon){: .heading-anchor }
{: id="v2.0.0-character-object-inventory-weapon" .no-border }

`<character>.inventory.weapon.damageAmount` was changed to `<character>.inventory.weapon.damage`<br>
`<character>.inventory.weapon.vDamage` was changed to `<character>.inventory.weapon.versatileDamage`<br>
`<character>.inventory.weapon.allowShield` was changed to `<character>.inventory.weapon.allowsShield`

```diff
- character.inventory.weapon.damageAmount
+ character.inventory.weapon.damage

- character.inventory.weapon.vDamage
+ character.inventory.weapon.versatileDamage

- character.inventory.weapon.allowShield
+ character.inventory.weapon.allowsShield
```

#### [.inventory-armor](#v2.0.0-character-object-inventory-armor){: .heading-anchor }
{: id="v2.0.0-character-object-inventory-armor" .no-border }

`<character>.inventory.armor.strength` was changed to `<character>.inventory.armor.strengthReq`<br>
`<character>.inventory.armor.metal` was changed to `<character>.inventory.armor.isMetal`<br>
`<character>.inventory.armor.stealth` was changed to `<character>.inventory.armor.isStealthy`

```diff
- character.inventory.armor.strength
+ character.inventory.armor.strengthReq

- character.inventory.armor.metal
+ character.inventory.armor.isMetal

- character.inventory.armor.stealth
+ character.inventory.armor.isStealthy
```


<br>
<hr>
<br>



## [v1.1.5](#v1.1.5){: .heading-anchor }
{: id="v1.1.5" }

### [Changes](#v1.1.5-changes){: .heading-anchor }
{: id="v1.1.5-changes" .no-border }

#### [&lt;NPC&gt;#class](#v1.1.5-changes-npc-class){: .heading-anchor }
{: id="v1.1.5-changes-npc-class" .no-border }

`<NPC>#class` was changed to `<NPC>#role` for better code consistency.

```diff
- npc.class
+ npc.role
```

### [Additions](#v1.1.5-additions){: .heading-anchor }
{: id="v1.1.5-additions" .no-border }

Added new race and sub-race types. For a full list of available races, click [here]({{ '/npc/docs/race-types/' | relative_url }})

<div markdown=1 class="text-center top-pad">
<div markdown=1 class="inline-index">

- [Aasimar]({{ '/projects/npc/docs/race-types/aasimar' | relative_url }})
  - [Fallen]({{ '/projects/npc/docs/race-types/aasimar-fallen' | relative_url }})
  - [Protector]({{ '/projects/npc/docs/race-types/aasimar-protector' | relative_url }})
  - [Scourge]({{ '/projects/npc/docs/race-types/aasimar-scourge' | relative_url }})
- [Bugbear]({{ '/projects/npc/docs/race-types/bugbear' | relative_url }})
- [Elf]({{ '/projects/npc/docs/race-types/elf' | relative_url }})
	- [Dark]({{ '/projects/npc/docs/race-types/elf-dark' | relative_url }})
- [Firbolg]({{ '/projects/npc/docs/race-types/firbolg' | relative_url }})
- [Gnome]({{ '/projects/npc/docs/race-types/gnome' | relative_url }})
  - [Deep]({{ '/projects/npc/docs/race-types/gnome-deep' | relative_url }})
  - [Forest]({{ '/projects/npc/docs/race-types/gnome-forest' | relative_url }})
  - [Rock]({{ '/projects/npc/docs/race-types/gnome-forest' | relative_url }})
  
</div>
<div markdown=1 class="inline-index">

- [Goblin]({{ '/projects/npc/docs/race-types/goblin' | relative_url }})
- [Grung]({{ '/projects/npc/docs/race-types/grung' | relative_url }})
- [Hobgoblin]({{ '/projects/npc/docs/race-types/hobgoblin' | relative_url }})
- [Kenku]({{ '/projects/npc/docs/race-types/kenku' | relative_url }})
- [Kobold]({{ '/projects/npc/docs/race-types/kobold' | relative_url }})
- [Lizardfolk]({{ '/projects/npc/docs/race-types/lizardfolk' | relative_url }})
- [Orc]({{ '/projects/npc/docs/race-types/orc' | relative_url }})
- [Tabaxi]({{ '/projects/npc/docs/race-types/tabaxi' | relative_url }})
- [Triton]({{ '/projects/npc/docs/race-types/triton' | relative_url }})
- [Yuan-Ti Pureblood]({{ '/projects/npc/docs/race-types/yuanti' | relative_url }})

</div>
</div>


### [Additions](#v1.1.5-additions){: .heading-anchor }
{: id="v1.1.5-additions" .no-border }

#### [&lt;NPC&gt;#character-age](#v1.1.5-additions-npc-character-age){: .heading-anchor }
{: id="v1.1.5-additions-npc-character-age" .no-border }

Added NPC age.<br>
This is based on each race and their lifespans.<br>
**TypeOf:** [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number){: .open-in-new }

#### [&lt;NPC&gt;#character-background](#v1.1.5-additions-npc-character-background){: .heading-anchor }
{: id="v1.1.5-additions-npc-character-background" .no-border }

Added NPC background.<br>
Based on the role & race to give somewhat logical backgrounds.<br>
**TypeOf:** [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String){: .open-in-new }

#### [&lt;NPC&gt;#character-level](#v1.1.5-additions-npc-character-level){: .heading-anchor }
{: id="v1.1.5-additions-npc-character-level" .no-border }

Added NPC level.<br>
This will always be level 1.<br>
**TypeOf:** [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number){: .open-in-new }


<br>
<hr>
<br>


## [v1.1.0](#v1.1.0){: .heading-anchor }
{: id="v1.1.0" }

### [Changes](#v1.1.0-changes){: .heading-anchor }
{: id="v1.1.0-changes" .no-border }

#### [NPC Constructor](#v1.1.0-changes-npc-constructor){: .heading-anchor }
{: id="v1.1.0-changes-npc-constructor" .no-border }

Changed how the NPC constructor is called.<br>
~~This is was so the future more classes can be added for various things, such as generating monsters.~~<br>
This was done when I had still had hopes and dreams, and was reverted in v2.0.0

```diff
- const npc = new NPC({ ..options }).generate();
+ const npc = new NPC({ ..options }).generateNPC();
```

#### [&lt;NPC&gt;#race](#v1.1.0-race){: .heading-anchor }
{: id="v1.1.0-race" .no-border }
`<NPC>.race.small` was removed in favour of `race.size`<br>
This is a string that contains the size of the npc. (Small, Medium, Large etc)<br>

```diff
- npc.race.small
+ npc.race.size
```

### [Additions](#v1.1.0-additions){: .heading-anchor }
{: id="v1.1.0-additions" .no-border }

#### [&lt;NPC&gt;#character](#v1.1.0-additions-character){: .heading-anchor }
{: id="v1.1.0-additions-character" .no-border }

Added NPC alignment. This is a string that gets generated based on race and class chosen, and uses reasonable logic to decide. As such, Chaotic Evil Paladins are not possible, despite not being against the rules.

```diff
+ npc.character.alignment
```


<br>
<hr>
<br>


## [v1.0.0](#v1.0.0){: .heading-anchor }
{: id="v1.0.0" }

\- Initial Release