var arr = [2, 3, 'two', 2, 'apple', 5, 5, 5, 'left', 1, 1, 133, 133, 133, 1, -2, 'left', 'Norepeat', 'left', 'ApplE', 'two', 3, 5, 3, -2, -2, 'left'];
var arr23 = [2, 2, 1, 3, 2, 5, 3, 5, 1, 2];

function CheckingDuplicateNumbers(arr) {
    var array = [];
    var array2 = [];
    var counter;
    for (var i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            array.push(arr[i].toLowerCase())
        } else {
            array.push(arr[i])
        }
    }
    for (var j = 0; j < array.length; j++) {
        for (var k = j + 1; k < array.length - 1; k++) {
            if (array[j] === array[k]) {
                array2.push(array[j])
            }
        }
    }
    counter = array2.length;
    console.log(counter);
    if (counter % 2 === 0) {
        console.log('true')
    } else {
        console.log('false')

    }
}

CheckingDuplicateNumbers(arr);


