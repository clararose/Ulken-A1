var http = require('http');
var server = http.createServer(requestHandler);
server.listen(process.env.PORT, process.env.IP, startHandler);

function startHandler()
{
    var addr = server.address();
    console.log("Server listening at", addr.address+ ":" + addr.port);
}

funtion requestHandler(req, res)
{
    console.log("Handling a request")
    
    var url = require("url");
    var url_ports = url.parse(req.url, true);
    var query = url_ports.query;
    
    if (query['cmd']=='repeat')
    
{
    console.log("Handling a request")
     console.log(query);
    var word = 0;
    res.write('<pre>'); 
    
    for(var i=1 ; i<=word.length ; i++)
    {
        res.write(word); 
    }
    res.write('</pre>'); 
   res.end('');
          
    
    }
    else
    {
        res.end('');
    }
 }




SERVER URL: http://blahblah.com?cmd=repeat&word=turtle

    