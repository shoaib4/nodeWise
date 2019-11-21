var InputOutputService = require('./inputOutputModule/takeInput')
var DataBaseService = require('./services/dataBaseService');
console.log(DataBaseService.connectToDataBase())
console.log(InputOutputService.startTakingInputs())
// console.log(InputOutputService)
// console.log('------------')
// console.log(DataBaseService);
