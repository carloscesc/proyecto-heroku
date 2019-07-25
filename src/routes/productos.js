var { Router } = require('express'); 
var router = Router();

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

router.get('/', (req, res) => {
    res.json(data);
});

router.post('/', (req, res) => {
    var { nombre } = req.body;
    data.push({
        id: data.length + 1,
        nombre
    });
});

module.exports = router;