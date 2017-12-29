const Combat = require('./combat');
const Comm = require('./comm');
const SystemAccess = require('./syscall');
const Interface = require('./interface');
const InteractionEngine = require('/interaction');

/**
 * The avatar provides the interface with the
 * functions of the system.
 */
class Avatar {
    constructor(name) {
        this.name = name;
        this.integrity = 100;
        this.initCombat();
        this.initComm();
        this.initSysAccess();
        this.initInterEngine();
        this.initInterface();
    }

    initCombat() {
        process.stdout.write("Initializing combat protocol [CURRENTLY UNUSED]");
        this.combatProtocol = new Combat();
    }

    initComm() {
        process.stdout.write("Initializing communication protocol.");
        this.commProtocol = new Comm();
    }

    initSysAccess() {
        process.stdout.write("Operating system access established.");
        this.systemAccessProtocol = new SystemAccess();
    }

    initInterEngine() {
        process.stdout.write("Interaction engine started.");
        this.interactionEngine = new InteractionEngine();
    }

    initInterface() {
        this.interface = new Interface();
        process.stdout.write("Avatar interface up and running.");
    }

    actionRepl(x) {
        this.interface.send(x);
        return this.interface.receive();
    }
}

module.exports = Avatar;