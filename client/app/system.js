const Avatar = require('./avatar');

class System {
    constructor(name) {
        this.avatar = new Avatar(name);
    }
}