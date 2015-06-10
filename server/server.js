var express = require("express"),
    app = express(),
    server = require("http").Server(app),
    io = require("socket.io")(server);

var node_redis = require("redis"),
	redis = node_redis.createClient();

redis.on("error", function (err) {
    console.log("Error " + err);
});

app.use(express.static("public"));

io.on("connection", function(socket) {
	socket.on("data", function(data) {
		if(data.rotateX) {
			redis.set("rotateX", parseInt(data.rotateX));
		} else
		if(data.rotateY) {
			redis.set("rotateY", parseInt(data.rotateY));
		} else 
		if(data.rotateZ) {
			redis.set("rotateZ", parseInt(data.rotateZ));
		}
	});
});

server.listen(8080);