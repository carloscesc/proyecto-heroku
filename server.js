var express = require('express');
var app = express();
var morgan = require('morgan');

//Configuracion
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Rutas
app.use('/api/routes', require('./src/routes'));

app.listen(app.set('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});