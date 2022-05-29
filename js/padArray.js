// REMEMBER TO PSEUDOCODE
exports.paded = function pad(array, minSize, value=null){
    if(minSize <= array.length){
        return array
    } else {
        while(array.length != minSize){
            array.push(value)
        }
    }
    return array
}
