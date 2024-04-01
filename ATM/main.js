import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let myPIN = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: 'pin',
        message: "Enter your PIN",
        type: "number",
    }
]);
if (pinAnswer.pin === myPIN) {
    console.log("Correct PIN Code ");
    let OperationAns = await inquirer.prompt([
        {
            name: "Operation",
            message: "Please select Option",
            type: "list",
            choices: ["Withdraw", "check balance"]
        }
    ]);
    if (OperationAns.Operation === 'Withdraw') {
        let amountAns = await inquirer.prompt([
            {
                name: "Amount",
                message: "Enter your amount",
                type: "number"
            }
        ]);
        if (amountAns.Amount > myBalance) {
            console.log("Insufficient balance");
            console.log("---------Thank You----------");
        }
        else {
            myBalance -= amountAns.Amount;
            console.log("Your remaining balance is : " + myBalance);
        }
    }
    else if (OperationAns.Operation === 'check balance') {
        console.log("your balance is: " + myBalance);
    }
}
else {
    console.log("Incorrect PIN number");
}
