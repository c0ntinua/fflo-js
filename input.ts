function getCols() {
    global_cols = parseInt(((document.getElementById("cols")) as HTMLInputElement).value);
    pixel_width   = canvas.width/global_cols;
    reset();
}

function setCols() {
    ((document.getElementById("cols")) as HTMLInputElement).value = global_cols.toString();
}

function getRows() {
    global_rows = parseInt(((document.getElementById("rows")) as HTMLInputElement).value);
    pixel_height   = canvas.height/global_rows;
    reset();
}

function setRows() {
    ((document.getElementById("rows")) as HTMLInputElement).value = global_rows.toString();
}

function getDelay() {
    delay = parseInt(((document.getElementById("delay")) as HTMLInputElement).value);
    clearInterval(interval);
    interval = setInterval(updatePlot,delay);
}

function setDelay() {
    ((document.getElementById("delay")) as HTMLInputElement).value = delay.toString();
}
   

function getChoices(){
    getRows();
    getCols();
    getDelay();
}

function setChoices(){
    setRows();
    setCols();
    setDelay();
}

function applyChoices() {
    getChoices();
    setChoices();
}

function toggleHeavyMode() {
    if (heavy_mode) heavy_mode = false; else heavy_mode = true;
}
function toggleMonochrome() {
    if (monochrome) monochrome = false; else monochrome = true;
}

function reset() {
    red_layer = new Array(global_rows*global_cols).fill(0);
    green_layer = new Array(global_rows*global_cols).fill(0);
    blue_layer = new Array(global_rows*global_cols).fill(0);
    seedCurrentCells();
}
function resetFilters() {
    red_filter = randomSeededFilter();
    green_filter = randomSeededFilter();
    blue_filter = randomSeededFilter();
    red_filter = randomSeededFilter();
    green_filter = randomSeededFilter();
    blue_filter = randomSeededFilter();

}
