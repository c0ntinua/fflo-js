
function newWorld() {
    return {
        cell : new Array(global_rows*global_cols).fill(0),
        get : function(col,row) {
            if (row >= 0 && row < global_rows && col >=0 && col < global_cols) {
                return this.cell[col*global_rows + row];
            } else {
                console.log(`invalid access at ${row} , ${col}`);
            }
        },
        set : function(col, row, value) {
            if (row >= 0 && row < global_rows && col >=0 && col < global_cols) {
                this.cell[col*global_rows + row] = value;
            } else {
                console.log('invalid index for setting');
            }
        },
    };
}
function seedWorld() {
    for (let row = 0 ; row < global_rows ; row++) {
        for (let col = 0 ; col < global_cols ; col++) {
            if (Math.random() < density) {
                world.set(col,row,1);

            }
        }
    }
}


function updateCluster(target_col, target_row) {
    cluster.cell = Array(global_rows*global_cols).fill(0);
    let counter = 2;
    if (world.get(target_col, target_row ) > 0) {
        cluster.set(target_col, target_row , 1);
    }
    //console.log(`starting at col: ${target_col} and row ${target_row}`);
    for (let round = 1 ; round <= rounds; round++) {
        for (let row = 0; row < global_rows ; row++) {
            for (let col = 0 ; col  < global_cols; col++) {
                if (connectionAdjacent(col, row) && world.get(col,row) > 0  ) {
                    if (cluster.get(col, row) == 0) {
                        cluster.set(col, row, 1);
                        counter++;
                    }
                }           
            }
        }
    }
}
function updateLegal() {
    legal.cell = Array(global_rows*global_cols).fill(0);
    for (let row = 0; row < global_rows ; row++) {
        for (let col = 0 ; col  < global_cols; col++) {
            if (connectionAdjacent(col, row) && world.get(col,row) == 0  ) {
                    legal.set(col, row, 1);
            }         
        }
    }
}

function connectionAdjacent(check_col, check_row) {
    //does not count itself as proximate connection
    for (let row_mod = -1; row_mod <= 1; row_mod++) {
        for (let col_mod = -1; col_mod <= 1; col_mod++) {
            //this_row = fixedIndex(check_row + row_mod, global_rows);
            //this_col = fixedIndex(check_col + col_mod, global_cols);
            this_row = check_row + row_mod;
            this_col = check_col + col_mod;
            if ((this_row != check_row) || (this_col != check_col)) {
                if (this_row >= 0 && this_row < global_rows && this_col >= 0 && this_col < global_cols ) {
                    if (cluster.get(this_col, this_row) > 0 ) {
                            return true;
                    }
                }
            }

        }
    }
    return false;
}

function fixedIndex(x , modulus) {
    if (x >= 0 && x < modulus) return x;
    if (x < 0) {
        while (x < 0) { x += modulus };
        return x;
    }
    while (x >= modulus) { x -= modulus; }
    return x;
}

