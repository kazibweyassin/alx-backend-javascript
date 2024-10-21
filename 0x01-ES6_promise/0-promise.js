
//Return a promise that will resolve with the string "Success"
export default function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        resolve("Success");
    });
}