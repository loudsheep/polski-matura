import path from 'path';
import fs from 'fs';

export function filesInDirectory(dirInPublic: string) {
    const dir = path.join('public', dirInPublic);
    const filenames = fs.readdirSync(dir);

    const files = filenames.map(name => path.join('/', dirInPublic, name))
    return files;
}

export function filesToLinkName(files: string[]) {
    let names: { link: string, name: string }[] = [];
    for (const file of files) {
        let name = path.basename(file);
        // skip non .md files
        if (!name.endsWith(".md")) continue;

        name = name.replaceAll(".md", "");
        let link = name;
        name = name.replaceAll("_", " ");
        name = name.charAt(0).toLocaleUpperCase() + name.slice(1);
        names.push({
            link,
            name,
        });
    }
    return names;
}