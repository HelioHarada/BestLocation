const restify = require('restify');
var http = require('http');
const fs = require('fs');
var url = require('url');

var pathPage = function (page) {
  return __dirname + "/dist/" + page + ".html";
};

var router = function (pathname) {
  if (pathname && pathname != "/") {
    fileExists(pathPage(pathname));
    return pathPage(pathname);
  }
  return pathPage("index");
};

var fileExists = function (filePath) {
  try {
    return fs.statSync(filePath).isFile();
  } catch (err) {
    return false;
  }
}

// const server = restify.createServer({
//     name: 'myapp',
//     version: '1.0.0'
//   });

//   server.use(restify.plugins.acceptParser(server.acceptable));
//   server.use(restify.plugins.queryParser());
//   server.use(restify.plugins.bodyParser());  

//   server.listen(8080, function () {
//     console.log('Server Started ' );
//   });

var server = http.createServer(function (request, response) {
  var page = router(url.parse(request.url).pathname);

  fs.readFile(page, function(err, data){
    response.end(data)
    console.log(data);
  });

});

server.listen(8080, function(){
  console.log('Servidor started');
});

// server.get('/', restify.plugins.serveStatic({
//   directory: './dist',
//   file: 'index.html',
// }));