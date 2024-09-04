import { readFileSync, readdirSync, writeFileSync } from "fs";
console.warn("Starting Pre-Build!");

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
const fileData = BlogData.replace("THIS", blogsAsJSON);

writeFileSync("./src/modules/blogs.mts", fileData, { encoding: "utf8" });