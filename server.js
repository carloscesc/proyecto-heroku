var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();

//Configuracion
app.set('port', process.env.PORT || 3000);
/* app.set('json spaces', 2); */

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Rutas
app.use('/api/routes', require('./src/routes'));

//Archivos estaticos
app.use(express.static(path.join(__dirname, 'src/public')));

app.listen(app.set('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});