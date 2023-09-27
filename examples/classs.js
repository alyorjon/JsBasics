
class Visitor {
    constructor(name) {
        this.name = name;
    }
    introduce() {
        console.log(`My name is ${this.name} and I am a visitor`)
    }
}