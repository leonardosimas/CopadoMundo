import * as path from "path";
const fs = require("fs");

export class FileSystem {
    readFileJson(file:any) {
        try {
            let content = fs.readFileSync(file, "utf-8");
            return JSON.parse(content);
        }
        catch (error) {
            console.log("Erro ao carregar o arquivo.");
        }
    }
    readFile(file:any) {
        try {
            const dirContents = fs.readdirSync(__dirname);
            console.log(dirContents);
            const fileContents = fs.readFileSync(path.join(__dirname, file), {
                encoding: "utf-8",
            });
            console.log(fileContents);
        }
        catch (error) {
            console.log("Erro ao carregar o arquivo.");
        }
    }
}
