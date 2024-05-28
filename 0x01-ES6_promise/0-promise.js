/* Promises kept */
export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const output = true;
    if (output) {
     resolve("Success");
    } else {
       reject("Error");
    }
  });
}
