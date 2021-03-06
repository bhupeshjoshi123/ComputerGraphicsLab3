let scale;

let a, b, c, d;

function setup() {
    createCanvas(screen.width, screen.height);

    scale = prompt('Enter Scaling Factor');
}

function draw() {
    background(225);
    fill('black');
    textSize(25);
    text('Before the Scaling', 25, 25);
    fill('red')
	text('After the Scaling', 25, 40);
	
    translate(255, 110);
    a = [
        [10],
        [10],
        [1]
    ];
    b = [
        [55],
        [10],
        [1]
    ];
    c = [
        [55],
        [55],
        [1]
    ];
    d = [
        [10],
        [55],
        [1]
    ];
    fill('black');
    beginShape();
    vertex(a[0], a[1]);
    vertex(b[0], b[1]);
    vertex(c[0], c[1]);
    vertex(d[0], d[1]);
    endShape(CLOSE);

    //Scaling Matrix
    scale_matrix = [
        [scale, 0, 0],
        [0, scale, 0],
        [0, 0, 1]
    ];

    aN = matrix_multi(scale_matrix, a);
    bN = matrix_multi(scale_matrix, b);
    cN = matrix_multi(scale_matrix, c);
    dN = matrix_multi(scale_matrix, d);

    translate(255, 0);
    fill('red')

    beginShape();
    vertex(aN[0], aN[1]);
    vertex(bN[0], bN[1]);
    vertex(cN[0], cN[1]);
    vertex(dN[0], dN[1])
    endShape(CLOSE);
}

function matrix_multi(a, b) {
    let aRows = a.length;
    let aCols = a[0].length;
    let bRows = b.length;
    let bCols = b[0].length;
    let res = new Array(aRows);
    if (aCols == bRows) {
        for (var i = 0; i < aRows; ++i) {
            res[i] = new Array(bCols);
            for (var j = 0; j < bCols; ++j) {
                res[i][j] = 0;
                for (var k = 0; k < aCols; ++k) {
                    res[i][j] += a[i][k] * b[k][j];
                }
            }
        }
        return res;
    }
}