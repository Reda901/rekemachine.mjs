import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { log } from 'node:console';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question("Voer een getal in:  "))

let getal2 = parseFloat(await userInput.question("voer een getal in:  "))

let calculator = await userInput.question("welke berekening wil je doen (+,-,/,*) ? ");

let som = getal1 + getal2

let min = getal1 - getal2

let maal = getal1 * getal2

let delen = getal1 / getal2


if(calculator == "+"){

    console.log(som)
}
 
if(calculator=="-"){

    console.log(min)
}

if(calculator=="*"){

    console.log(maal)
}

if(calculator=="/"){

    console.log(delen)
}

process.exit()