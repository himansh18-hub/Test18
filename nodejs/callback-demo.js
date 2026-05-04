const myfs = require('fs');

const handleWriteResponse = function(error, data) {
    console.log(error, data);
}

function callback_demo() {
    myfs.readFile('data.csv', (error, data) => {
        if (error) {
            console.log(error)
        }
        console.log(error, data);
        myfs.writeFile('output.csv', data, handleWriteResponse);
    });
    console.log('123');
}
callback_demo();