const http=require('http');

const server=http.createServer((req, res) =>{
    res.end('voila réponse serveur');
});

server.listen(process.env.PORT || 3000);