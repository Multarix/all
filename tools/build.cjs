const fs = require("fs"); // eslint-disable-line
const projects = require("../src/modules/projects.json"); // eslint-disable-line

const baseFile = "./public/404.html";
const baseOutPath = "./build";
const fileData = fs.readFileSync(baseFile, { encoding: "utf8" });

for(const project of projects){
	if(!project.isProject) continue;

	const baseProjectData = fileData
		.replace('property="og:title" content="Projects by Multarix"', `property="og:title" content="Project: ${project.displayName.replace("\n", " ")}"`)
		.replace('property="og:description" content="All of the projects, in one handy place"', `property="og:description" content="${project.shortDesc}"`);

	if(project.blog || project.docs){
		const directoryPath = baseOutPath + project.url;

		if(!fs.existsSync(directoryPath)) fs.mkdirSync(directoryPath);

		fs.writeFileSync(directoryPath + "/index.html", baseProjectData, { encoding: "utf8" });
		console.log(`Copied '${project.url}' to build...`);

		if(project.docs){
			fs.writeFileSync(directoryPath + "/docs.html", baseProjectData, { encoding: "utf8" });
			console.log(`Copied '${project.url}/docs' to build...`);
		}

		if(project.blog){
			fs.writeFileSync(directoryPath + "/blog.html", baseProjectData, { encoding: "utf8" });
			console.log(`Copied '${project.url}/docs' to build...`);
		}

		continue;
	}

	fs.writeFileSync(baseOutPath + project.url + ".html", baseProjectData, { encoding: "utf8" });
	console.log(`Copied '${project.url}' to build...`);
}