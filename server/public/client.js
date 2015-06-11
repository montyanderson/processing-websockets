$("input").attr("min", 0);
$("input").attr("max", 360);

var socket = io.connect(location.origin);
var rotateX, rotateY, rotateZ;

socket.on("data", function(data) {
    if(data.rotateX) {
        $(".rotate[data-axis=X]").val(data.rotateX);
        rotateX = data.rotateX;
    }

    if(data.rotateY) {
        $(".rotate[data-axis=Y]").val(data.rotateY);
        rotateY = data.rotateY;
    }

    if(data.rotateZ) {
        $(".rotate[data-axis=Z]").val(data.rotateZ);
        rotateZ = data.rotateZ;
    }
});

var tps = 0;

function checkInputs() {
    var data = {};

    if($(".rotate[data-axis=X]").val() != rotateX) {
        data.rotateX = $(".rotate[data-axis=X]").val();
        rotateX = $(".rotate[data-axis=X]").val();
    }

    if($(".rotate[data-axis=Y]").val() != rotateY) {
        data.rotateY = $(".rotate[data-axis=Y]").val();
        rotateY = $(".rotate[data-axis=Y]").val();
    }

    if($(".rotate[data-axis=Z]").val() != rotateZ) {
        data.rotateZ = $(".rotate[data-axis=Z]").val();
        rotateZ = $(".rotate[data-axis=Z]").val();
    }

    socket.emit("data", data);
    tps++;
}

setInterval(checkInputs, 1000 / 75);
setInterval(function() {
    $("#tps").html("<strong>TPS</strong>: " + tps);
    tps = 0;
}, 1 * 1000);
