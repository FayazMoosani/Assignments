// Question # 1
// Write a simple asynchronous TypeScript function fetchGreeting that returns a 
// greeting message after a 2-second delay using setTimeout.
function fetchGreeting() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello, world!");
        }, 2000);
    });
}
// Example usage:
fetchGreeting().then(greeting => console.log(greeting));
// Question # 2
// Write a function simulateTask that simulates a task by logging "Task started", 
// waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.
function simulateTask() {
    console.log("Task started");
    setTimeout(() => {
        console.log("Task completed");
    }, 1000);
}
// Example usage:
simulateTask();
// Question # 3
// Write a function fetchData that returns a Promise which resolves with the string 
// "Data fetched successfully!" after a delay of 1 second.
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 1000);
    });
}
// Example usage:
fetchData().then(data => console.log(data));
// Question # 4
// Write a function fetchWithError that returns a Promise. It should randomly either 
// resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a 
// delay of 1 second. Handle the rejection using .catch
function fetchWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSuccess = Math.random() > 0.5;
            if (isSuccess) {
                resolve("Data fetched successfully!");
            }
            else {
                reject("Data fetch failed!");
            }
        }, 1000);
    });
}
// Example usage:
fetchWithError()
    .then(data => console.log(data))
    .catch(error => console.error(error));
// Question # 5
// Write a function executeSequentially that executes two functions fetchData and 
// processData sequentially using Promises, and logs the results in the order they are 
// called.
function fetchData1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 1000);
    });
}
function processData(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Processing: ${data}`);
        }, 1000);
    });
}
function executeSequentially() {
    fetchData1()
        .then(data => {
        console.log(data);
        return processData(data);
    })
        .then(result => {
        console.log(result);
    })
        .catch(error => {
        console.error(error);
    });
}
// Example usage:
executeSequentially();
export {};
// Code With FM => FAYAZ MOOSANI
