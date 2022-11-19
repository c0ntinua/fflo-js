function newFilter(cols, rows) {
    let f = {
        cells: new Array(cols * rows).fill(0),
        cols: cols,
        rows: rows,
    };
    return f;
}
function filter_of_cell(filter, layer, col, row) {
    let sum = 0;
    let counter = 0;
    let target_index = 0;
    let col_span = Math.floor((filter.cols - 1) / 2);
    let row_span = Math.floor((filter.rows - 1) / 2);
    let first_col = col - col_span;
    let last_col = col + col_span;
    let first_row = row - row_span;
    let last_row = row + row_span;
    for (let c = 0; c < filter.cols; c++) {
        for (let r = 0; r < filter.rows; r++) {
            target_index = get(col - col_span + c, row - row_span + r);
            sum += layer[target_index] * filter.cells[get(c, r)];
            counter += 1;
        }
    }
    return Math.tanh(sum);
}
function apply_filter(filter, layer) {
    let workspace = new Array(global_rows * global_cols).fill(0);
    for (let c = 0; c < global_cols; c++) {
        for (let r = 0; r < global_rows; r++) {
            workspace[get(c, r)] = filter_of_cell(filter, layer, c, r);
        }
    }
    layer = workspace;
}
//# sourceMappingURL=filter.js.map