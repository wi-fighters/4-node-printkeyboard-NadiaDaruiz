const fs = require('fs')

fs.readFile('keyboard.txt', (err, data) => {
    console.log(data.toString());
});