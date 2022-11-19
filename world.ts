
function get(col : number, row : number) : number {
    if (row >= 0 && row < global_rows && col >=0 && col < global_cols) {
        return col*global_rows + row;
    } else {
        console.log(`invalid access at ${row} , ${col}`);
        return 0;
    }
}

function seedWorld(layer : number[]) {
    for (let row = 0 ; row < global_rows ; row++) {
        for (let col = 0 ; col < global_cols ; col++) {
            layer[get(col,row)] = randomFloat();
        }
    }
}

function seedCurrentCells() {
    seedWorld(red_layer);
    seedWorld(green_layer);
    seedWorld(blue_layer);
}


function randomFloat() {
    return 1.0 - 2.0*Math.random();
}