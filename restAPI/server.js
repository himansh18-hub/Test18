const express = require('express');
const app = express(); //initil
app.use(express.json())
app.use('/hello123', function(request, response) {
    console.log(request.headers);

    console.log(request.query.product);
    console.log(request.body.product);
    return response.send("hello");
});
const router = express.Router();

router.post('/admin', function(request, response) {
    console.log(request.body.name);
    response.send("created");
})

router.delete("/", function(request, response) {
    response.send('deleted');
})

app.use('/users', router) //regiter the routes
app.listen(3001, function() {
    console.log('server started');
})