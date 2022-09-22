var printingBox = document.getElementById("printingBox");
printingBox.innerHTML = "<span id='textPrinted'>" + practiceCode() +"</span>"


function practiceCode() {
    var a = 10;
    var b = 5;
    var result = a + b;
    return result;
}