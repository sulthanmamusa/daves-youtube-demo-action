const core = require('@actions/core');

const person = core.getInput('person');

console.log(`Welcome ${person}!`);

console.log('Learning semantic version');
