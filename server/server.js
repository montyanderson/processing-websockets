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

var rotateX, rotateY, rotateZ;

io.on("connection", function(socket) {
    socket.emit("data", {
        rotateX: rotateX,
        rotateY: rotateY,
        rotateZ: rotateZ
    });

	socket.on("data", function(data) {
		if(data.rotateX) {
			redis.set("rotateX", parseInt(data.rotateX));
            socket.broadcast.emit("data", {rotateX: data.rotateX});
            rotateX = data.rotateX;
		} else
		if(data.rotateY) {
			redis.set("rotateY", parseInt(data.rotateY));
            socket.broadcast.emit("data", {rotateY: data.rotateY});
            rotateY = data.rotateY;
		} else
		if(data.rotateZ) {
			redis.set("rotateZ", parseInt(data.rotateZ));
            socket.broadcast.emit("data", {rotateZ: data.rotateZ});
            rotateZ = data.rotateZ;
		}
	});
});

redis.set("rotateX", "0");
redis.set("rotateY", "0");
redis.set("rotateZ", "0");

server.listen(8080);

console.log("Server running at http://localhost:8080");
