// Include modules
const { error } = require("console")
const fs = require("fs")
const inquirer = require('inquirer')

// Prompt User
inquirer.prompt([
    // title of project
    // description
    // installation
    // usage
    // contributing
    // tests
    // license (from a list!) https://choosealicense.com/licenses/
        //GNU AGPLv3, GNU GPLv3, GNU LGPLv3, Mozilla Public License 2.0, 
        //Apache License 2.0, MIT License, Boost Software License 1.0, 
        //The Unlicense
    // username of github account
    // email address of user
    
    
    // {
    //     type: "input",
    //     message: "What is your name?",
    //     name: "name",
    // }
])
    .then((response) => {

        // Pull license based on input
            // findLicense()

        // Readme text with Input from User
        const text =
            ``

        // Write to README.md
        fs.writeFile("README.md", text, (error) => {
            error ? console.log(error) : console.log("README.md successfully updated.")
        })

    })


const findLicense = license => {
    switch (license) {
        case value:
            
            break;
    
        default:
            break;
    }
}

