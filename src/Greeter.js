'use strict';


class Greeter {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return `Hello, ${this.name ? this.name : 'Anonymous Person'}!`;
    }
}


export default Greeter;