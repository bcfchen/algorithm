class Trie {
    rootNode = new Node();
    constructor() {
        this.rootNode = new Node();
    }

    insert(str) {
        const characters = [...str];
        // we start with the rootNode, which has no character value
        let currentNode = this.rootNode;
        for (let ii = 0; ii < charactres.length; ii++) {
            // in the "dog" example, this would be the character "d"
            const currentChar = characters[ii];

            /* this is checking if currentNode contains a child node with currentChar. 
            ** this is not chekcing if currentNode's char value is currentChar
            ** in fact, each node does NOT know its own character value, only keeps track of 
            ** children nodes. In this case, rootNode does not have "d" yet, so we add a new node under
            ** root for "d". */
            if (!currentNode.contains(currentChar)) {
                currentNode.addNode(currentChar);
                // now rootNode's hashMap has {d: Node}
            }

            currentNode = currentNode.getNode(currentChar); // then we traverse to the newly created "d" node
        }

        currentNode.isWord = true;
    }

    hasWord(str) {
        const wordCharacters = [...str];
        let currentNode = this.rootNode;
        for (let ii = 0; ii < wordCharacters.length; ii++) {
            const currentChar = wordCharacters[ii];
            if (!currentNode.contains(currentChar)) {
                return false;
            }

            currentNode = currentNode.getNode(currentChar);
        }

        return currentNode.isWord;
    }
}

class Node {
    map;
    isWord;
    constructor() {
        this.map = new Map();
        this.isWord = false;
    }

    contains(char) {
        return !!this.map.get(char);
    }

    addNode(char) {
        if (!this.contains(char)) {
            this.map.set(char, new Node())
        }
    }

    getNode(char) {
        return this.map.get(char);
    }
}