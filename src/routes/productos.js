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
    let { nombre } = req.body;
    data.push({
        id: data.length + 1,
        nombre
    });
});

router.put('/:id', (req, res) => {
    let { id } = req.params;
    let { nombre } = req.body;
    data.forEach((producto, i) => {
        if(producto.id == id){
            producto.nombre = nombre;
        }
    });
});

module.exports = router;