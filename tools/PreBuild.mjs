import { readFileSync, readdirSync, writeFileSync } from "fs";
console.warn("Starting Pre-Build!");

// BLOGS
const BlogData = `const Blogs: {[key: string]: string} = THIS;

export default Blogs;`;

const blogNames = readdirSync("./src/blogs/").filter(name => name.split(".")[1] === "md").map(name => name.split(".")[0]);
const blogs = {};

for(const blog of blogNames){
	const markdown = readFileSync(`./src/blogs/${blog}.md`, { encoding: "utf8" });
	blogs[blog] = markdown;

	console.log(`Copied '${blog}' blog data...`);
}

const blogsAsJSON = JSON.stringify(blogs, null, "\t");
const blogFileData = BlogData.replace("THIS", blogsAsJSON);

writeFileSync("./src/modules/blogs.mts", blogFileData, { encoding: "utf8" });

console.log("");

// DOCS
const DocData = `const Docs: {[key: string]: string} = THIS;

export default Docs;`;

const docs = {};
const docNames = readdirSync("./src/docs/", { recursive: true }).filter(name => name.split(".")[1] === "md").map(name => name.split(".")[0].replace(/\\/g, "/"));

for(const doc of docNames){
	const markdown = readFileSync(`./src/docs/${doc}.md`, { encoding: "utf8" });
	docs[doc] = markdown;

	console.log(`Copied '${doc}' doc data...`);
}

const docsAsJSON = JSON.stringify(docs, null, "\t");
const docFileData = DocData.replace("THIS", docsAsJSON);

writeFileSync("./src/modules/docs.mts", docFileData, { encoding: "utf8" });