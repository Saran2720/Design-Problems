class Node {
    constructor(name, isDirectory) {
        this.name = name;
        this.isDirectory = isDirectory;

        this.content = "";
        this.children = new Map();
    }
}

class InMemoryFileSystem(){
    constructor(){
        this.root = new Node("/", true);
    }

    //creating a folder
    mkdir = (path) => {
        const parts = this.splitPath(path);

        let current = this.root;

        for (const part of parts) {

            if (!current.children.get(part)) {
                current.children.set(part, new Node(part, true));
            }

            current = current.children.get(part);

            if (!current.isDirectory) {
                throw new Error("This folder is not a directory");
            }
        }
    }

    createFile = (path) => {
        const parts = this.splitPath(path);
        const fileName = parts.pop();

        let current = root;

        for (const part of parts) {
            if (!current.children.get(part)) {
                throw new Error("Directory does not exist");
            }

            current = current.children.get(part);

            if (!current.isDirectory) {
                throw new Error("This folder is not a directory");
            }
        }

        current.children.set(fileName, new Node(fileName, false));
    }

    writeFile(path, content){
        const file = this.getNode(path);

        if (file == null) {
            throw new Error("File not found");
        }

        file.content = content;

    }

    readFile(path){
        const file = this.getNode(path);

        if (file == null) {
            throw new Error("File not found");
        }
        return file.content;
    }


    //helper functions
    splitPath = (path) => {
        return path.split("/");
    }

    getNode(path){
        const parts = this.splitPath(path);
        let current = this.root;

        for (const part of parts) {
            if (!current.children.get(part)) {
                return null;
            }

            current = current.children.get(part);

            if (!current.isDirectory) {
                return null;
            }
        }

        return current;
    }

}