import express from 'express';

const router = express.Router();

router.post('/', function(request, response) {
    response.send("created");
})

// export.router = router;