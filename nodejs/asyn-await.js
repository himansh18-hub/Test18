const myfs = require('fs').promises;

async function myRead() {
    return await myfs.readFile('data.csv');
}

async function async_await() {
    try {
        const data = await myRead();
        myfs.writeFile('output.csv', data);
        console.log(data);

    } catch (error) {
        console.log(error);
    }
};
async_await();

//callback
//promise
//async-await