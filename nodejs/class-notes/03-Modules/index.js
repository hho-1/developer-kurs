'use-strict'

console.log('modules');

//require('./modules/module.js')            //Diger klasördeki dosyayi bu sekilde cagiriyoruz.
require('./modules/module') 

/* const testFunction = require('./modules/module.js')
testFunction()

//Tek fonksiyon varsa su sekilde de cagrilabilir
require('./modules/module.js') */

const {testFunctionD, testFunctionE, testFunctionF, x} = require('./modules/module')
testFunctionD()
testFunctionE()
testFunctionF()
console.log(x);

