#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
while (true) {
    let input = await inquirer.prompt([
        {
            name: "firstTodo",
            type: "input",
            message: "What you like to Add in your To Do List?"
        },
        {
            name: "secondTodo",
            type: "list",
            message: "What you like to Add in your To Do List?",
            choices: ["yes", "no"]
        }
    ]);
    const { firstTodo, secondTodo } = input;
    todos.push(firstTodo);
    if (secondTodo == "no") {
        console.log(("All Todo List Items"));
        // -------------add more items--------------
        for (let i = 0; i < todos.length; i++) {
            console.log(todos[i]);
        }
        // ------------break loop ----------
        break;
    }
}
;
