const Markdown: {[key: string]: string} = {
	"BoidSimulation/index": "# Playing with Boids\r\n\r\n\r\n## The Idea\r\n\r\nAwhile back, Sebastian Lague, a fairly popular youtuber created a video about creating Boids. The concept is basically a group of objects, that follow each other using simple principles. Think something like fish or birds moving together as a group.\r\n\r\nThe rules behind this movement behaviour are fairly simple:\r\n\r\n1. Each member avoids all other members (Seperation)\r\n2. Each member tries to move in the same direction as all other nearby members (Alignment)\r\n3. Each member moves towards the center of nearby groups (Cohesion)\r\n\r\nI decided to approach this topic using a game engine, Specifically, Godot.\r\n\r\n\r\n## Getting Started\r\n\r\nStarting out, the first goal is to actually impliment the rules, I won't be diving into the code for this, as it's all available on the github, however when I started, I decided to use Godot's custom language \"GDScript\", which for reasons I'll get into later, is quite a bad choice. Back on topic however, I first started with the stock standard, create 3 functions to get calculate the Seperation, Alignment and Cohesion for each individual boid, just to make sure it was working.\r\n\r\nThe code I settled on is based on the implimentation found [here](https://vanhunteradams.com/Pico/Animal_Movement/Boids-algorithm.html). There is plenty of bad, or plain wrong pseudo-code out there, proof that pseudo-code is (for the most part) a complete waste of time, but I digress. With the stock standard approach, I was capable of running around 100 boids at 60fps without much issue.\r\n\r\n\r\n## Improving Performance\r\n\r\n### The low hanging fruit\r\n\r\nNow, 100 Boids may sound like a lot, especially compared to your Instagram follower count, but that's an absolute pittance compared to what other people have been able to accomplish. While I have no plans of going all out and attempting to break some record, I did want to improve performance by a substantial amount.\r\n\r\nNaturally then, the first step towards improving performance is to simply hit all the low hanging fruit. First up, I moved all the 3 rule functions into a singular function, so instead of looping over all boids 3 times, it only does it once. This improvement was an instant +50 to my count, bringing me to 150. I'll also take this time to explain that the standard implimentation of Boid simulations has an `O(n²)` complexity, so doubling the amount of boids is equal to around 4x the work, this can be improved, but more about that later.\r\n\r\nNow, how else might I improve performance you may be wondering, well the first step is to not attach a script to each individual Boid, and instead create a manager that loops through and updates them one by one. It may not sound like a lot, but the cost of each Boid having its own script is definitely there. Swapping to a manager boosted me up to 200 Boids.\r\n\r\n\r\n### Multithreading with Compute Shaders\r\n\r\nAt this point, I was looking into how I could further increase performance, and the answer was a fairly simple one, move everything off the CPU and onto the GPU. Moving everything to the GPU entails putting things into a compute shader, which allows it to run many things in parallel all at once, drastically increasing performance over the CPU. This sounds more complicated than it really is, as most game engines have the ability to use something called compute shaders, typically written in a language like HLSL or GLSL, backstory aside, they're very similar to C++ in their style and implimentations, but with some differences.\r\n\r\nUnfortunately, Godot only supports GLSL, and even then its implimentation of compute shaders is somewhat lacking, but it's more than enough for what I wanted to do. Transpiling my code into GLSL wasn't too difficult, minor hiccups aside, I was able to push the amount of Boids to around 1000 at once, while maintaining my target frames per second.\r\n\r\n\r\n### GPU Instancing\r\n\r\nWhile I was on the \"push everything to the GPU\" bandwagon, I also looked into a little something called GPU Instancing, where in you take all of your data, and once again send it off to the GPU, rather than manually updating it on the CPU. I still had to loop through all the data the GPU sent back at this point, but once again sending the data off to the GPU after that loop was still a large improvement to the total Boids I could have flying around at once. A whole extra 4000 to be exact, bringing my total to [around 6000 at once](https://youtu.be/ckOERwvr7KM).\r\n\r\n\r\n### Moving to a new language\r\n\r\nAround this point, I was also completely sick of GDScript and it's python-like style. Indentations determine code blocks? Slower than a granny walking her pet turtle? No thanks. As someone who has experience in languages that are not as hidious looking and are faster in practically every aspect, I felt it was time to move away.\r\n\r\nAs it turns out, Godot supports C#, and while I had never used C# before, the similarities to C++ made transpiling all of my remaining code a complete breeze, despite Godot's lack of documentation on the subject. Also, apparently C# is around 4x faster than GDScript, so despite the fact I had moved most of the key parts into a compute shader, I was still sure to see a performance increase, and that I did, taking me to around 10k Boids.\r\n\r\n\r\n### Further Optimisations\r\n\r\nNow, I thought that 10k was a fairly decent stopping point, so I decided to take a break for a few days, making minor optimisations here and there within my code, while doing so, I happened upon quite a useful pair of functions in the documentation. Specifically, they let me directly read and write to the buffer of Godot's \"MultiMesh\" node, which is what I had been using to use GPU Instancing.\r\n\r\nThis might not sound like much, but bare in mind, up until this point, I was looping through each element and updating the rotation and position, and at this point, color of each and every Boid. Needless to say, this was still causing a considerable slowdown. So what if I removed even that from the tasks the CPU had to perform? Well, the answer was clearly more Boids.\r\n\r\nThe downside was I had to essentially re-write the entire compute shader so that it could take in, and output the format of the buffer that was required. This required a small look-see into Godot's source code, but other than that, it wasn't too difficult to update the code.\r\n\r\nSo what was the final total of boids I could run with this change? Well, around 32k before I started getting frame rate drops, but I could push it to around 40k without dropping below 50fps or so.\r\n\r\n\r\n<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/tsX_pB530Yg?si=8Ovrk90_fVxLepCN\" title=\"YouTube Video Player\" frameborder=\"0\" allow=\"accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>\r\n\r\n\r\n### Reducing the time complexity\r\n\r\nI said earlier, that Boids have a time complexity of `O(n²)`, but there are a few ways we can change this. The two main methods, are quad trees, and spatial hashing. I won't bore you with the details, but quad trees would take us to a complexity of around `O(n log n)`, while spatial hashing takes us to `O(n)`.\r\n\r\nOf these two massive upgrades, I decided on simply going with spatial hashing, as it was the easiest to impliment with my existing code base. However, I'm fairly sure I didn't exactly do the greatest job at the implimentation, but it was still a massive improvement. Taking me to my final total of around 100k boids at 60fps.\r\n\r\n\r\n## Conclusion\r\n\r\nFrom 100 Boids to 100k Boids while maintaining 60fps, this was certainly a fun experience for me. I certainly wasn't always making the most optimal choices in every situation, especially when there are people out there running over a million at once, but I can't help but notice a lot of them having their frames being closer to 30 than 60. In short, I'm happy with my 100k.\r\n\r\nThe code for my project is available over on my [github](https://github.com/Multarix/Boids-Compute-Shader/tree/master), so feel free to download and run the project yourself, or even make your own changes. I was running this using an RTX 2080, so your GPU may suffer more or less than mine at similar numbers.\r\n\r\nIf you're at all interesting in creating your own simulation, starting from scratch and implimenting changes over time will give you a much more engaging and educational experience, and I highly recommend it.",
	"DnDDice/index": "# Nothing"
};

export default Markdown;