import inquirer from "inquirer";
let myBalance = 10000; //Dollars
let pinCode = 1234;
let pinanswer = await inquirer.prompt({
    name: "pinNum",
    type: "number",
    message: "Enter your pin number",
});
if (pinanswer.pinNum === 1234) {
    let operationAns = await inquirer.prompt({
        name: "operation",
        type: "list",
        message: "Plze select your option",
        choices: ["Withdraw", "check balance", "fast cash"],
    });
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number",
            },
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Inshufficient Balance");
        }
        else {
            console.log(`Your Remaining Balance is ${myBalance -= amountAns.amount}`);
        }
    }
    if (operationAns.operation === "check balance") {
        console.log("Your current balance is  " + myBalance);
    }
    if (operationAns.operation === "fast cash") {
        let fastCashAns = await inquirer.prompt([
            {
                name: "FastCash",
                message: "Select Option",
                type: "list",
                choices: ["1000", "3000", "5000", "10000", "15000"],
            },
        ]);
        if (fastCashAns.FastCash > myBalance) {
            console.log("Inshufficient Balance");
        }
        else {
            console.log(`Your Remaining Balance is  ${myBalance -= fastCashAns.FastCash}`);
        }
    }
}
else {
    console.log("Incorrect Pin Number....");
}
