const System = require('./system');

let system = new System('Beta');

let x = '';

while (x != 'quit') {
    let result = system.avatar.actionRepl(x);
    console.log(result);
}