const count = true;  // the promise is rejected if countValue is false //
                    // or if there is no count value//

let countValue = new Promise(function (resolve, reject) {
    if (count) {
        resolve("There is a count value.");
    } else {
        reject("There is no count value");
    }
});

console.log(countValue);