let express = require('express');

let app  = express();

app.set('views',__dirname + '/vistas');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', function(req, res){
res.render('layout');
})

app.listen(2000,function (){
console.log('Server iniciando en el puerto: 2000');

})




