const http = require("node:http"); // importing an node module called http --> this have function called http.createServer
const server=http.createServer(function(req,res){

    if(req.url === "/getSecretData"){
        res.end("Hi User !!! There is no Secret Data");
    }
    //reply to them using hello message 
    res.end("hello User welcome to Node.js Server") // Send and end the connection
   

}); // here we are creating an instance of server , just like oops where we create instance of class Obj <objectname >= new Obj
server.listen(7777); 

//now the server is created listening at port 7777


