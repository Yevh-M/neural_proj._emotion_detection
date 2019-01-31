
const brain      = require('brain.js');
const trainData  = require('./source/training-dataset');
const serializer = require('./source/serializer');
const net        = new brain.NeuralNetwork();

net.train(serializer.serialize(trainData)); //train neural network

const output = net.run(serializer.encode('Nothing is not OK')); //simply runs the neural network
// and returns the predicted value
console.log(output);



//
// const brain = require('brain.js');
//
// const net = new brain.NeuralNetwork();
//
// net.train([{input: [0, 0], output: [0]},
//     {input: [0, 1], output: [1]},
//     {input: [1, 0], output: [1]},
//     {input: [1, 1], output: [0]}]);
//
// const output = net.run([1, 0]);
//
// console.log(output);

// const encode = d => {
//     const encoded = [];
//     d.split('').map(c => {
//         encoded.push((c.charCodeAt(0) / 255))
//     });
//     return encoded
// };
//
// const encodeData = data => data.map( d => encode(d) );
//
// encodeData("I am happy");
// console.log(output);

// const brain      = require('brain.js');
// const trainData  = require('./source/training-data');
// const serializer = require('./source/serializer');
// const net        = new brain.NeuralNetwork();
//
// net.train(serializer.serialize(trainData), {log: true});




