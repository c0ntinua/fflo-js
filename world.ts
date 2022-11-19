


function seedLayer(layer : number[]) {
    for (let row = 0 ; row < global_rows ; row++) {
        for (let col = 0 ; col < global_cols ; col++) {
            layer[col*global_rows + row] = randomFloat();
        }
    }
}

function seedCurrentCells() {
    seedLayer(red_layer);
    seedLayer(green_layer);
    seedLayer(blue_layer);
}


function randomFloat() {
    return 1.0 - 2.0*Math.random();
}