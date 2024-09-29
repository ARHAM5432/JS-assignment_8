// Query 1
var arr = [24, 53, 78, 91, 12, 152, 125];
for (var i = 0; i < arr.length; i++) {
    for (var k = 0; k < arr.length - 1; k++) {
        if (arr[k] > arr[k + 1]) {
            [arr[k], arr[k + 1]] = [arr[k + 1], arr[k]];
        }
    }
}
alert(arr);



// Query 2
var arrTwo = [24, 53, 78, 91, 12, 152, 125];
for (var i = 0; i < arrTwo.length; i++) {
    for (var k = 0; k < arrTwo.length - 1; k++) {
        if (arrTwo[k] < arrTwo[k + 1]) {
            [arrTwo[k], arrTwo[k + 1]] = [arrTwo[k + 1], arrTwo[k]];
        }
    }
}
alert(arrTwo);
