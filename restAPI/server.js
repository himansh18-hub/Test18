const express = require('express'); //node module
const app = express(); //initialise
app.use(express.json()) //middleware

const router = express.Router();

router.post('/admin', function(request, response) {
    console.log(request.body.name);
    response.send("created");
})
router.get('/hello123', function(request, response) { // http://localhost:3001/hello123
    console.log(request.headers);
    console.log(request.query.product);
    return response.send("hello");
});
router.delete("/", function(request, response) {
    response.send('deleted');
})

app.use('/users', router) //regiter the routes
app.listen(3001, function() {
    console.log('server started');
})