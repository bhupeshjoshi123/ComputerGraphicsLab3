let root;
let a, b, c, d;

function setup() {
    createCanvas(displayWidth, displayHeight);

    root = prompt('factor for rotation');
    if (root == 90) {
        root = 0;
    } else {
        root = root * Math.PI / 180;
    }
}

function draw() {
    background(225);
    fill('black');
    textSize(20);
    text('Before The Rotation', 20, 20);
    fill('red')
    text('After The Rotation', 20, 40);
    
    translate(210, 110);
    a = [[110],[110],[1]];
    b = [[310],[110],[1]];
    c = [ [310],[310],[1]];
    d = [[110],[310],[1]];
	
	fill('black');
    beginShape();
    vertex(a[0], a[1]);
    vertex(b[0], b[1]);
    vertex(c[0], c[1]);
    vertex(d[0], d[1]);
    endShape(CLOSE);

    xr = a[0];
    yr = a[1];

    //Rotation Matrix
    rotation_matrix = [
        [Math.cos(root), -1 * Math.sin(root), xr],
        [Math.sin(root), Math.cos(root), yr],
        [0, 0, 1]
    ];

    aN = matrix_multi(rotation_matrix, a, xr, yr);
    bN = matrix_multi(rotation_matrix, b, xr, yr);
    cN = matrix_multi(rotation_matrix, c, xr, yr);
    dN = matrix_multi(rotation_matrix, d, xr, yr);

    fill('red')
    beginShape();
    vertex(aN[0], aN[1]);
    vertex(bN[0], bN[1]);
    vertex(cN[0], cN[1]);
    vertex(dN[0], dN[1])
    endShape(CLOSE);
}

function matrix_multi(a, b) {
    b = [
        [b[0] - xr],
        [b[1] - yr],
        [b[2]]
    ];
    let aRows = a.length;
    let aCols = a[0].length;
    let bRows = b.length;
    let bCols = b[0].length;
    let result = new Array(aRows);
    if (aCols == bRows) {
        for (var i = 0; i < aRows; ++i) {
            result[i] = new Array(bCols);
            for (var j = 0; j < bCols; ++j) {
                result[i][j] = 0;
                for (var k = 0; k < aCols; ++k) {
                    result[i][j] += a[i][k] * b[k][j];
                }
            }
        }
        return result;
    }
}