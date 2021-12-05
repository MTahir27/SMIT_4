let myProise = new Promise(function (resolve, reject) {
    let connection = true;
    if (connection) {
        resolve("Connected");
    } else {
        reject("COnnection Failed");
    }
});