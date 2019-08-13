var express  = require('express');
var bodyParser = require('body-parser');
var methodOverride =require('method-override');
var exphbs = require('express-handlebars');

// use port 3000 unless there exists a preconfigured port
var PORT = process.envPORT || 3000;

var  app = express();
app.use(express.static(__dirname + 'public'));
 app.use(bodyParser.urlencoded({extended:false}))

 app.use(methodOverride('_method'));
 app.engine('handlebars', exphbs({defaultlayout:'main'}));
 app.set('view engine', 'handlebars');
 var routes = require('./controllers/route.js');
 app.use('/', routes);
//  app.listen(port);
app.listen(PORT, function(){
	console.log("Listening on http://localhost:" + PORT);
});
