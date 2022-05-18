const http = require('http')
const fs = require('fs')

http
  .createServer(function(request, response) {
    response.setHeader('Content-Type', 'text/html')
    if(request.url === '/') {
      response.statusCode = 200
      fs.createReadStream('./index.html').pipe(response)
    }
    else if(request.url === '/about') {
      response.statusCode = 200
      fs.createReadStream('./about.html').pipe(response)
    }
    else if(request.url === '/contact-me') {
      response.statusCode = 200
      fs.createReadStream('./contact-me.html').pipe(response)
    }
    else {
      response.statusCode = 404
      fs.createReadStream('./404.html').pipe(response)
    }
  })
  .listen(8080, function() {
    console.log('Server running at port 8080')
  })
