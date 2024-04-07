import inquirer from "inquirer";
let ToDos = [];
let condition = true;
while (condition) {
    let todoquestions = await inquirer.prompt([
        {
            name: "action",
            type: "list",
            message: "Select what do you want to do in your todos",
            choices: ["Add Todos", "Update Todos", "Delete Todos", "Exit"]
        }
    ]);
    if (todoquestions.action === "Add Todos") {
        let addMore = true;
        while (addMore) {
            let addtodoAnswers = await inquirer.prompt([
                {
                    name: "task",
                    type: "input",
                    message: "What would you like to add in your todos: "
                },
                {
                    name: "more",
                    type: "confirm",
                    message: "Do you want to add more in your todos? : ",
                    default: "true"
                }
            ]);
            if (addtodoAnswers.task.trim() !== '') {
                ToDos.push(addtodoAnswers.task);
            }
            addMore = addtodoAnswers.more;
        }
    }
    else if (todoquestions.action === "Update Todos") {
        console.log("Current Todos:");
        console.log(ToDos);
        let updateIdAnswer = await inquirer.prompt([
            {
                name: "updateId",
                type: "input",
                message: "Enter the ID of the todo you want to update: "
            }
        ]);
        let updateId = parseInt(updateIdAnswer.updateId);
        if (isNaN(updateId) || updateId < 1 || updateId > ToDos.length) {
            console.log("Invalid ID. Please enter a valid ID.");
        }
        else {
            let updateContentAnswer = await inquirer.prompt([
                {
                    name: "newContent",
                    type: "input",
                    message: "Enter the new content: "
                }
            ]);
            ToDos[updateId - 1] = updateContentAnswer.newContent;
            console.log(`Todo with ID ${updateId} updated successfully.`);
        }
    }
    else if (todoquestions.action === "Delete Todos") {
        console.log("Current Todos:");
        console.log(ToDos);
        let deleteTodoAnswers = await inquirer.prompt([
            {
                name: "index",
                type: "input",
                message: "Enter the index of the todo you want to delete:"
            }
        ]);
        const index = parseInt(deleteTodoAnswers.index);
        if (!isNaN(index) && index >= 0 && index < ToDos.length) {
            ToDos.splice(index, 1);
            console.log(`Todos at index ${index} has been deleted successfully`);
        }
        else {
            console.log("Invalid Index. Please enter a valid index");
        }
    }
    else if (todoquestions.action === "Exit") {
        condition = false;
        console.log("Exiting...");
    }
    console.log(ToDos); // Display todos after each action
}
