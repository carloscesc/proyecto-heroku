var { Router } = require('express'); 
var router = Router();

router.get('/', (req, res) => {
    var data = [
        {
            "id":"1",
            "nombre":"Computadora"
        },
        {
            "id":"2",
            "nombre":"Mouse",
        }
    ]
    res.json(data);
});

module.exports = router;