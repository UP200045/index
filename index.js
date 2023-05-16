const http = require('http');

const Server = http.createServer(function(req, res) { //como lo va a manejar
    res.writeHead(200);  //codigos de estado 200:es que todo salio bien 300: warning. 400:error con el cliente

    res.end('Hola mundo!!!!');
});

Server.listen(3000, '127.0.0.1', function(){
    console.log('Server on port 3000!!!');
});
