const happy = require('./data-happy');
const sad   = require('./data-sad');

const moods = [
    ...happy, //spread operator 'clone '
    ...sad
];

module.exports = moods;