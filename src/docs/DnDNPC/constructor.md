# NPC Class

### <a class="method" name="constructor" href="#constructor"><b>.constructor(<span class="args">{ <i>raceType, subRace, classType</i> }</span>)</b></a></h3>
This is called when you create a new NPC.
It takes a single Object with the below properties. All properties are optional.
A full list of valid classTypes can be found [here](./class/classtypes)
A full list of valid raceTypes can be found [here](./class/racetypes)

#### Options
<table>
	<tbody>
		<tr>
			<th>Argument</th>
			<th>Type</th>
			<th>Description</th>
			<th>Optional</th>
		</tr>
		<tr>
			<td>raceType</td>
			<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></td>
			<td>Sets the race of the NPC</td>
			<td>True</td>
		</tr>
		<tr>
			<td>subRace</td>
			<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></td>
			<td>Sets the sub-race of the NPC if applicable</td>
			<td>True</td>
		</tr>
		<tr>
			<td>classType</td>
			<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></td>
			<td>Sets the class of the NPC</td>
			<td>True</td>
		</tr>
	</tbody>
</table>

<br>

## Methods

### <a class="method" name="setRace" href="#setRace">.setRace(<span class="args"><i>raceType, subRace</i></span>)</a>
Sets the race of the NPC.
Takes up to 2 Strings as arguments, and sets the race of the NPC to generate

#### Options
<table>
	<tr>
		<th>Argument</th>
		<th>Type</th>
		<th>Description</th>
		<th>Optional</th>
	</tr><tr>
		<td>raceType</td>
		<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></td>
		<td>Sets the race of the NPC</td>
		<td>False</td>
	</tr><tr>
		<td>subRace</td>
		<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></td>
		<td>Sets the sub-race of the NPC if applicable<br></td>
		<td>True</td>
	</tr>
</table>

Returns: [this](#top)


### <a class="method" name="setClass" href="#setClass">.setClass(<span class="args"><i>classType</i></span>)</a>
Sets the class of the NPC
Takes a single string as an argument.

#### Options
<table>
	<tr>
		<th>Argument</th>
		<th>Type</th>
		<th>Description</th>
		<th>Optional</th>
	</tr><tr>
		<td>classType</td>
		<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></td>
		<td>Sets the class of the NPC</td>
		<td>False</td>
	</tr>
</table>

Returns: [this](#top)


### <a class="method" name="generate" href="#generate">.generate()</a>

Use this method when you're ready to generate all aspects of your NPC.
After using this, you'll recieve an NPC object.<br>
⚠️ You can only use #generate() once per npc instance. Additional uses will simply return the same character.<br>
Returns: <a href="{{ site.baseurl }}/objects">Promise&lt;Character: Object&gt;</a>