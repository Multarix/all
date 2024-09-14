import { readFileSync, readdirSync, writeFileSync } from "fs";
console.warn("Starting Pre-Build!");

const basePath = "./src/extras/";

const folders = ["blogs", "docs"];

folders.forEach(folder => {
	const ExportString = "const Markdown: {[key: string]: string} = THIS;\n\nexport default Markdown;";

	const files = {};
	const fileNames = readdirSync(`${basePath}_${folder}/`, { recursive: true }).filter(name => name.split(".")[1] === "md").map(name => name.split(".")[0].replace(/\\/g, "/"));

	for(const file of fileNames){
		const markdown = readFileSync(`${basePath}_${folder}/${file}.md`, { encoding: "utf8" });
		files[file] = markdown;

		console.log(`Copied '${file}' file data...`);
	}

	const filesAsJSON = JSON.stringify(files, null, "\t");
	const fileData = ExportString.replace("THIS", filesAsJSON);

	writeFileSync(`${basePath}_modules/${folder}.mts`, fileData, { encoding: "utf8" });
});