---
title: Discord - Chat Buttons
group: discord-chat
description: Removes buttons from the chatbar that you don&apos;t or can&apos;t use, such as &quot;Gift Nitro&quot; &quot;Stickers&quot; or &quot;Boost Server&quot;.
---


# Using with the "Discord App"

As of 26/01/2022, Discord disabled the developer console within the production version by default.<br>
You will need to re-enable it, or use the [canary version of discord](https://canary.discord.com/"){: .open-in-new }.<br>
Enabling the console is not overly difficult, but it is a little hidden.
{: .notify }

<div markdown=1 class="overflow-container">

1. Press <kbd>Windows</kbd> + <kbd>R</kbd> to open the run dialog.
2. Type `%appdata%` and press enter.
3. Open the `discord` folder.
4. Find `settings.json` and open it with your favourite text editor.
5. Add the following to the bottom of the file:<br>
`"DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING": true`
6. Save and close the file

</div>

Once the above steps have been taken, restarting your Discord client should allow you to access the developer console.<br>
<br>
To do so, press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> to open the console.<br>
<br>
Once the console is open, Discord will likely spam you with a bunch of warnings saying anything pasted into the console has an 11/10 chance of being a scam. If you're worried about your account security, stop and don't use this script. I do promise that it's not harmful though.<br>
<br>
Assuming you're willing to ignore the warnings, copy and paste the below code into the console and press enter.<br>

```javascript
const buttonsToHide = [
    "Open sticker picker",
    "Send a gift",
    "Boost this server"
];

let css = "";
buttonsToHide.forEach(button => {
    css = css.concat(`[aria-label="${button}"]{display:none}`);
});

css = css.concat('[id="channel-attach-THREAD"]{display:none}');
const style = document.createElement('style'); style.innerHTML = css;
document.head.appendChild(style);
```

And that's it! You're done!
A couple of things to note however:
- This may potentially hide other objects related to these things in the future if discord changes anything, so as stated above, if you happen to be using this far into the future, it may not work as expected.
- Closing or updating discord will stop the script, requiring you to re-enable it.


## Using with the "Web Version"

If you happen to be using the web version of Discord, I'd recommend you install a userscript extension for your browser, such as TamperMonkey, ViolentMonkey or another of your choice.<br>
From there, all you need to do is click <a href="https://raw.githubusercontent.com/Multarix/Discord-Remove-useless-chat-buttons/master/keepGif.user.js">here</a> and the extension should pick up the fact it's a script.<br>
<br>
Failing that, you can simply open your browsers console when on Discords website and paste in the above code.