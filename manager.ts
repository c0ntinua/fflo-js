function updatePlot() {
    red_layer = applyFilter(red_filter,red_layer);
    green_layer = applyFilter(green_filter,green_layer);
    blue_layer = applyFilter(blue_filter,blue_layer);
    //applyFilter(filter,green_layer);
    //applyFilter(filter,blue_layer);
    plotCurrentCells();
    console.log(red_layer);
}