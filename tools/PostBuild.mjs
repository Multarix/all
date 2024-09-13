import { readFileSync, existsSync, mkdirSync, writeFileSync } from "fs";
import BaseProjects from "../src/modules/projects.mjs";
console.warn("Starting Post-Build!");

const baseFile = "./public/404.html";
const baseOutPath = "./build";
const fileData = readFileSync(baseFile, { encoding: "utf8" });

// Copies files to the build folder
for(const key of Object.keys(BaseProjects)){
	const project = BaseProjects[key];
	if(!project.isProject) continue;

	const baseProjectData = fileData
		.replace('property="og:title" content="Projects by Multarix"', `property="og:title" content="Project: ${project.displayName.replace("\n", " ")}"`)
		.replace('property="og:description" content="All of the projects, in one handy place"', `property="og:description" content="${project.shortDesc}"`);

	if(project.blog || project.docs){
		const directoryPath = baseOutPath + project.url;

		if(!existsSync(directoryPath)) mkdirSync(directoryPath);

		writeFileSync(directoryPath + "/index.html", baseProjectData, { encoding: "utf8" });
		console.log(`Copied '${project.url}' to build...`);

		if(project.docs){
			writeFileSync(directoryPath + "/docs.html", baseProjectData, { encoding: "utf8" });
			console.log(`Copied '${project.url}/docs' to build...`);
		}

		if(project.blog){
			writeFileSync(directoryPath + "/blog.html", baseProjectData, { encoding: "utf8" });
			console.log(`Copied '${project.url}/blog' to build...`);
		}

		continue;
	}

	writeFileSync(baseOutPath + project.url + ".html", baseProjectData, { encoding: "utf8" });
	console.log(`Copied '${project.url}' to build...`);
}