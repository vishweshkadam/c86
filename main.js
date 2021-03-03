var canvas = new fabric.Canvas('myCanvas');

var playerx = 10;
var playery = 10;

var block_height = 30;
var block_width = 30;

var player_object = "";
var block_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function(img) {
            player_object = img;
            player_object.scaleToWidth(150);
            player_object.scaleToHeight(150);
            player_object.set({
                top: playery,
                left: playerx
            });
            canvas.add(player_object)
        }

    );
}

function new_image(get_img) {
    fabric.Image.fromURL(get_img, function(img) {
        block_object = img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top: playery,
            left: playerx
        });
        canvas.add(block_object);
    });
}
