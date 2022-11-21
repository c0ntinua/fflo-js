function getWidth() {
    canvas.width = parseInt((document.getElementById("width")).value);
    pixel_width = canvas.width / global_cols;
}
function setWidth() {
    (document.getElementById("width")).value = canvas.width.toString();
}
function getHeight() {
    canvas.height = parseInt((document.getElementById("height")).value);
    pixel_height = canvas.height / global_rows;
}
function setHeight() {
    (document.getElementById("height")).value = canvas.height.toString();
}
function getCols() {
    global_cols = parseInt((document.getElementById("cols")).value);
    pixel_width = canvas.width / global_cols;
    reset();
}
function setCols() {
    (document.getElementById("cols")).value = global_cols.toString();
}
function getRows() {
    global_rows = parseInt((document.getElementById("rows")).value);
    pixel_height = canvas.height / global_rows;
    reset();
}
function setRows() {
    (document.getElementById("rows")).value = global_rows.toString();
}
function getDelay() {
    delay = parseInt((document.getElementById("delay")).value);
    clearInterval(interval);
    interval = setInterval(updatePlot, delay);
}
function setDelay() {
    (document.getElementById("delay")).value = delay.toString();
}
function getChoices() {
    getWidth();
    getHeight();
    getRows();
    getCols();
    getDelay();
}
function setChoices() {
    setWidth();
    setHeight();
    setRows();
    setCols();
    setDelay();
}
function applyChoices() {
    getChoices();
    setChoices();
}
function toggleHeavyMode() {
    if (heavy_mode)
        heavy_mode = false;
    else
        heavy_mode = true;
}
function toggleMonochrome() {
    if (monochrome)
        monochrome = false;
    else
        monochrome = true;
}
function togglePosterized() {
    if (posterized)
        posterized = false;
    else
        posterized = true;
}
function reset() {
    red_layer = new Array(global_rows * global_cols).fill(0);
    green_layer = new Array(global_rows * global_cols).fill(0);
    blue_layer = new Array(global_rows * global_cols).fill(0);
    seedCurrentCells();
}
function pixel_reset() {
    pixel_height = canvas.height / global_rows;
    pixel_width = canvas.width / global_cols;
}
function resetFilters() {
    red_filter = randomSeededFilter();
    green_filter = randomSeededFilter();
    blue_filter = randomSeededFilter();
    red_filter = randomSeededFilter();
    green_filter = randomSeededFilter();
    blue_filter = randomSeededFilter();
}
//# sourceMappingURL=input.js.map