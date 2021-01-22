function map(arr, callback) {
    const results = []
    for (let i = 0; i < arr.length; i ++) {
        results.push(callback(arr[i]))
    }
    return results
}

// function reduce(arr, callback, start=0) {
//     let counter = start
//     for (let i = 0; i < arr.length; i ++) {
//         counter = callback(arr[i], counter)
//     }
//     return counter
// }

function reduce(arr, callback, start) {
    let results, i
    (!!start) ? (results = start, i = 0) : (results = arr[0], i = 1)
    for (; i < arr.length; i++) {
        results = callback(arr[i], results)
    }
    return results;
}