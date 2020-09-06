var fs = require('fs');

var words = fs.readdirSync('./category')
    .map(file => fs.readFileSync(__dirname + '\\category\\' + file, 'utf8')
        .split('\n').filter(a => !a.startsWith('#')))
    .reduce((a, b) => [...a, ...b]);


console.log(`${words.length} words scanned...`);
fs.writeFileSync('./words.txt', words.join('\n'));
console.log('Saved to words.txt!');