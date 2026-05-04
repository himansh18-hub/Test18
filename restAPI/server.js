const express = require('express');
const app = express(); //initil
app.use('/hello123', function(request, response) {
    return response.send("hello");
});

app.listen(3001, function() {
    console.log('server started');
})