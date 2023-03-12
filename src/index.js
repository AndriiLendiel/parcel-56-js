import { showMessage, showMessage2 } from "./js/exampleNameExport";

import randomName from './js/exampleDeafault'

import * as info from './js/exampleExportAll'

showMessage('Hello World');
showMessage2('Hello USA');

// console.log(randomName.fetchCountries);
// randomName.fetchCountries();

randomName()

console.log(info);

console.log(info.a);


info.doHomeTask();