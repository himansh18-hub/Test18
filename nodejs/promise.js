const myfs = require('fs').promises;

const handleWriteResponse = function(error, data) {
    console.log(error, data);
}

function callback_demo() {
    const promise = myfs.readFile('data.csv');
    promise.then(function(data) {
        console.log(data);
        const writePromise = myfs.writeFile(data)
        promise.then(function() {

        })
        promise.catch(function(error) {

        })
    });
    promise.catch(function(error) {
        console.error(error);
    })
    console.log('123');
}
callback_demo();