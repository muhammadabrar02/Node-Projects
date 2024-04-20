import inquirer from "inquirer";

const currency: any ={
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
}

let my_answers = await inquirer.prompt(
    [
        {
            name: 'from',
            message: "Enter from currency",
            type: "list",
            choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
        },

        {
            name: 'to',
            message: "Enter to currency",
            type: "list",
            choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
        },
        {
            name: 'amount',
            message: "Enter your amount",
            type: "number",

        }

    ]
);

 let fromAmount = currency[my_answers.from];
 let toAmount = currency[my_answers.to];
 let amount =my_answers.amount;
 let baseAmount= amount/fromAmount
 let convertedAmount = baseAmount *toAmount
 console.log(convertedAmount);
