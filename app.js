var WALL = '<div class="wall block"></div>';
var GROUND = '<div class="ground block"></div>';
var DOT = '<img src="dot.png" alt="dot id="dot">';
var PAC = '<img src="pacman.gif" alt="pacman" id="pacman">'
var ghosts = {
    'blinky': {
        'name': 'blinky',
        'image': '<img src="blinky.jpg" alt="blinky" id="blinky">',
        'id': 4,
        'row': 9,
        'col': 8,
        'lrow': 9,
        'lcol': 8
    },
    'pinky': {
        'image': '<img src="pinky.jpg" alt="pinky" id="pinky">',
        'id': 5,
        'row': 3,
        'col': 16,
        'lrow': 3,
        'lcol': 16
    },
    'inky': {
        'image': '<img src="inky.jpg" alt="inky" id="inky">',
        'id': 6,
        'row': 16,
        'col': 3,
        'lrow': 16,
        'lcol': 3
    },
    'clyde': {
        'image': '<img src="clyde.jpg" alt="clyde" id="clyde">',
        'id': 7,
        'row': 10,
        'col': 17,
        'lrow': 10,
        'lcol': 17
    }
}

var PAC_COR = {
    'row': 2,
    'col': 1
}

var world = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1],
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
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

world[PAC_COR.row][PAC_COR.col] = 2;
// world[ghosts.blinky.row][ghosts.blinky.col] = ghosts.blinky.id;
// world[ghosts.pinky.row][ghosts.pinky.col] = ghosts.pinky.id;

for (ghost in ghosts) {
    console.log(ghosts[ghost]);
    world[ghosts[ghost].row][ghosts[ghost].col] = ghosts[ghost].id;
}
function drawWorld() {
    var nextFrame = '';
    for (var row = 0; row < world.length; row++) {
        for (var col = 0; col < world[row].length; col++) {
            if (world[row][col] == 0) nextFrame += DOT;
            else if (world[row][col] == 1) nextFrame += WALL;
            else if (world[row][col] == 2) nextFrame += PAC;
            else if (world[row][col] == 3) nextFrame += GROUND;
            else if (world[row][col] == ghosts.blinky.id) nextFrame += ghosts.blinky.image;
            else if (world[row][col] == ghosts.clyde.id) nextFrame += ghosts.clyde.image;
            else if (world[row][col] == ghosts.inky.id) nextFrame += ghosts.inky.image;
            else if (world[row][col] == ghosts.pinky.id) nextFrame += ghosts.pinky.image;
        }
    }
    $('#wrapper').html(nextFrame);
}

function ghostAlg(ghost) {
    var canMove = canMovePlaces(ghost);
    console.log(`(row: ${ghost.row}, col: ${ghost.col}), (lrow: ${ghost.lrow}, lcol: ${ghost.lcol})`);
    if (canMove.down) canMove.down = calc(ghost, 'down');
    if (canMove.up) canMove.up = calc(ghost, 'up');
    if (canMove.right) canMove.right = calc(ghost, 'right');
    if (canMove.left) canMove.left = calc(ghost, 'left');
    console.log(canMove);
    for (var i = 0; i < Object.keys(canMove).length; i++) {
        if (typeof canMove[Object.keys(canMove)[i]] == 'boolean') {
            canMove[Object.keys(canMove)[i]] = Number.MAX_VALUE;
        }
    }
    var closestPlace = {
        'cur': Number.MAX_VALUE,
        'type': ''
    }
    for (mem in canMove) {
        if (closestPlace.cur > canMove[mem]) {
            closestPlace.type = mem;
            closestPlace.cur = canMove[mem];
        }
    }
    moveTo(ghost, closestPlace.type);
}
function moveTo(ghost, closestPlace) {
    switch (closestPlace) {
        case 'right':
            ghost.lcol = ghost.col;
            ghost.lrow = ghost.row;
            world[ghost.row][ghost.col + 1] = ghost.id;
            world[ghost.row][ghost.col] = 0;
            ghost.col++;
            drawWorld();
            $(`#${ghost.name}`).css('transform', 'scaleX(1)');
            break;
        case 'left':
            ghost.lcol = ghost.col;
            ghost.lrow = ghost.row;
            world[ghost.row][ghost.col - 1] = ghost.id;
            world[ghost.row][ghost.col] = 0;
            ghost.col--;
            drawWorld();
            $(`#${ghost.name}`).css('transform', 'scaleX(-1)');
            break;
        case 'down':
            ghost.lrow = ghost.row;
            ghost.lcol = ghost.col;
            world[ghost.row + 1][ghost.col] = ghost.id;
            world[ghost.row][ghost.col] = 0;
            ghost.row++;
            drawWorld();
            break;
        case 'up':
            ghost.lrow = ghost.row;
            ghost.lcol = ghost.col;
            world[ghost.row - 1][ghost.col] = ghost.id;
            world[ghost.row][ghost.col] = 0;
            ghost.row--;
            drawWorld();
            break;
    }
}

function canMovePlaces(ghost) {
    var places = {
        'left': false,
        'right': false,
        'up': false,
        'down': false
    };
    if (world[ghost.row][ghost.col + 1] != 1 && ghost.col + 1 != ghost.lcol) {
        var nextCor = world[ghost.row][ghost.col + 1];
        places.right = true;
        for (g in ghosts) {
            if (nextCor == g.id) places.right = false;
        }
    }
    if (world[ghost.row][ghost.col - 1] != 1 && ghost.col - 1 != ghost.lcol) {
        var nextCor = world[ghost.row][ghost.col - 1];
        places.left = true;
        for (g in ghosts) {
            if (nextCor == g.id) places.left = false;
        }
    }
    if (world[ghost.row + 1][ghost.col] != 1 && ghost.row + 1 != ghost.lrow) {
        var nextCor = world[ghost.row + 1][ghost.col];
        places.down = true;
        for (g in ghosts) {
            if (nextCor == g.id) places.left = false;
        }
    }
    if (world[ghost.row - 1][ghost.col] != 1 && ghost.row - 1 != ghost.lrow) {
        var nextCor = world[ghost.row - 1][ghost.col];
        places.up = true;
        for (g in ghosts) {
            if (nextCor == g.id) places.up = false;
        }
    }
    return places;
}

function calc(ghost, place) {
    switch (place) {
        case 'up':
            return Math.abs(ghost.col - PAC_COR.col) + Math.abs(ghost.row - 1 - PAC_COR.row);
            break;
        case 'down':
            return Math.abs(ghost.col - PAC_COR.col) + Math.abs(ghost.row + 1 - PAC_COR.row);
            break
        case 'right':
            return Math.abs(ghost.col + 1 - PAC_COR.col) + Math.abs(ghost.row - PAC_COR.row);
            break;
        case 'left':
            return Math.abs(ghost.col - 1 - PAC_COR.col) + Math.abs(ghost.row - PAC_COR.row);
            break;
    }
}

$(document).ready(function () {
    drawWorld();
    setInterval(function () { ghostAlg(ghosts.blinky) }, 600);
    setInterval(function () { ghostAlg(ghosts.inky) }, 600);
    setInterval(function () { ghostAlg(ghosts.clyde) }, 600);
    setInterval(function () { ghostAlg(ghosts.pinky) }, 600);

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
            if (world[PAC_COR.row - 1][PAC_COR.col] == 1) break;
            world[PAC_COR.row - 1][PAC_COR.col] = 2;
            world[PAC_COR.row][PAC_COR.col] = 3;
            PAC_COR.row--;
            drawWorld();
            $('#pacman').css('transform', 'rotate(-90deg)');
            break;
    }
});