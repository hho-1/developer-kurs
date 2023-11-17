console.log('Here is modules file.');

const testFunction = function(){
    console.log('Test function run');
}
module.exports = testFunction


/* const testFunctionA = function(){
    console.log('Test functionA run');
}
const testFunctionB = function(){
    console.log('Test functionB run');
}
const testFunctionC = function(){
    console.log('Test functionC run');
}

module.exports = [testFunctionA, testFunctionB, testFunctionC] */


/* const testFunctionD = function(){
    console.log('Test functionD run');
}
const testFunctionE = function(){
    console.log('Test functionE run');
}
const testFunctionF = function(){
    console.log('Test functionF run');
}

module.exports = {testFunctionD, testFunctionE, testFunctionF}
module.exports.x = 10   */       // Degisken bu sekilde gidiyor


module.exports = {
    testFunctionD: function(){
        console.log('Test functionD run');          //kisaca bu sekilde de export edilebilir
    },
    testFunctionE: function(){
        console.log('Test functionE run');
    },
    testFunctionF: function(){
        console.log('Test functionF run');
    }, 
    x : 10
}

