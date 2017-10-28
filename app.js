var WALL = '<div class="wall block"></div>';
var GROUND = '<div class="ground block"></div>';
var DOT = '<img src="dot.png" alt="dot id="dot">';
var PAC = '<img src="pacman.gif" alt="pacman" id="pacman">'
var ghosts = {
    'blinky': {
        'image':'<img src="blinky.jpg" alt="blinky" id="blinky">',
        'id': 4
    },
    'pinky': {
        'image':'<img src="pinky.jpg" alt="pinky" id="pinky">',
        'id': 5
    },
    'inky':{
        'image':'<img src="inky.jpg" alt="inky" id="inky">',
        'id': 6
    },
    'clyde': {
        'image':'<img src="clyde.jpg" alt="clyde" id="clyde">',
        'id': 7
    }
}

var PAC_COR = {
    'row': 2,
    'col': 1
}

var world = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 2, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
    [1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1],
    [1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1],
    [1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1],
    [1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, ghosts.blinky.id, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

function drawWorld() {
    var nextFrame = '';
    for (var row = 0; row < world.length; row++) {
        for (var col = 0; col < world[row].length; col++) {
            if (world[row][col] == 0) nextFrame += DOT;
            else if (world[row][col] == 1) nextFrame += WALL;
            else if (world[row][col] == 2) nextFrame += PAC;
            else if (world[row][col] == 3) nextFrame += GROUND;
            else if(world[row][col] == ghosts.blinky.id) nextFrame += ghosts.blinky.image;
            else if(world[row][col] == ghosts.clyde.id) nextFrame += ghosts.clyde.image;
            else if(world[row][col] == ghosts.inky.id) nextFrame += ghosts.inky.image;
            else if(world[row][col] == ghosts.pinky.id) nextFrame += ghosts.pinky.image;
        }
    }
    $('#wrapper').html(nextFrame);
}

$(document).ready(function () {
    drawWorld();
});

$(document).on('keydown', 'body', function (e) {

    switch (e.keyCode) {
        case 39:
            if (world[PAC_COR.row][PAC_COR.col + 1] == 1) break;
            world[PAC_COR.row][PAC_COR.col + 1] = 2;
            world[PAC_COR.row][PAC_COR.col] = 3;
            PAC_COR.col++;
            drawWorld();
            $('#pacman').css('transform', 'scaleX(1)');
            break;
        case 37:
            if (world[PAC_COR.row][PAC_COR.col - 1] == 1) break;
            world[PAC_COR.row][PAC_COR.col - 1] = 2;
            world[PAC_COR.row][PAC_COR.col] = 3;
            PAC_COR.col--;
            drawWorld();
            $('#pacman').css('transform', 'scaleX(-1)');
            break;
        case 40:
            if (world[PAC_COR.row + 1][PAC_COR.col] == 1) break;
            world[PAC_COR.row + 1][PAC_COR.col] = 2;
            world[PAC_COR.row][PAC_COR.col] = 3;
            PAC_COR.row++;
            drawWorld();
            $('#pacman').css('transform', 'rotate(90deg)');
            break;
        case 38:
            if(world[PAC_COR.row - 1][PAC_COR.col] == 1) break;
            world[PAC_COR.row - 1][PAC_COR.col] = 2;
            world[PAC_COR.row][PAC_COR.col] = 3;
            PAC_COR.row--;
            drawWorld();
            $('#pacman').css('transform', 'rotate(-90deg)');
            break;
    }
});