let myPromise = new Promise(function (resolve, reject) {
    let connection = false;
    if (connection) {
        resolve("Connected");
    } else {
        reject("Connection Failed");
    }
});

myPromise.then(function (message) {
    console.log(message);
});
myPromise.catch(function (message) {
    console.log(message);
});