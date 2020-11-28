// Include modules
const { error } = require("console")
const fs = require("fs")
const inquirer = require('inquirer')

// Prompt User
inquirer.prompt([
    /*
    // title of project
    {
        type: "input",
        message: "Title: ",
        name: "title",
    },

    // description
    {
        type: "input",
        message: "Description: ",
        name: "description",
    },

    // installation
    {
        type: "input",
        message: "Installation: ",
        name: "installation",
    },

    // usage
    {
        type: "input",
        message: "Usage: ",
        name: "usage",
    },

    // contributing
    {
        type: "input",
        message: "Contributing: ",
        name: "contributing",
    },

    // tests
    {
        type: "input",
        message: "Tests: ",
        name: "tests",
    },

    // username of github account
    {
        type: "input",
        message: "Github Username: ",
        name: "github",
    },

    // email address of user
    {
        type: "input",
        message: "Email Address: ",
        name: "email",
    },
    */

    // license (from a list!) https://choosealicense.com/licenses/
    //GNU AGPLv3, GNU GPLv3, GNU LGPLv3, Mozilla Public License 2.0, 
    //Apache License 2.0, MIT License, Boost Software License 1.0, 
    //The Unlicense
    {
        type: "list",
        message: "License: ",
        choices: [
            "Apache License 2.0",
            // "BSD 3 - Clause "New" or "Revised" license",
            // "BSD 2 - Clause "Simplified" or "FreeBSD" license",
            // "GNU General Public License(GPL)",
            // "GNU Library or "Lesser" General Public License(LGPL)",
            // "MIT license",
            // "Mozilla Public License 2.0",
            // "Common Development and Distribution License",
            // "Eclipse Public License version 2.0"
        ],
        name: "licenseOption",
    },

])
    .then((response) => {
        //CONSOLE LOGS
        console.log(response.licenseOption)

        // Pull license based on input
        const license = findLicense(response.licenseOption)

        // Readme text with Input from User
        const readmeText = `
[![License](${license.badgeLink})](${license.link})

# ${response.title}

## Table of Contents (Optional)
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions?)
* [License](#License)


## Description

${response.description}

## Installation

${response.installation}

## Usage

${response.usage}

## Contributing

${response.contributing}

## Tests

${response.tests}

## Questions & Contact

* My github: https://github.com/${response.github}
* Email me at ${response.email} if you have any questions.

## License

${license.text}`

        // Write to README.md
        fs.writeFile("READMEtest.md", readmeText, (error) => {
            error ? console.log(error) : console.log("README.md successfully updated.")
        })

    })


const findLicense = licenseOption => {
    let license = {}

    switch (licenseOption) {
        case "Apache License 2.0":
            license.link = "https://opensource.org/licenses/Apache-2.0"
            license.badgeLink = "https://img.shields.io/badge/License-Apache%202.0-blue.svg"
            license.text = `Copyright [yyyy] [name of copyright owner]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`
            break;

        default:
            break;

        // Apache License 2.0
        // BSD 3-Clause "New" or "Revised" license
        // BSD 2-Clause "Simplified" or "FreeBSD" license
        // GNU General Public License (GPL)
        // GNU Library or "Lesser" General Public License (LGPL)
        // MIT license
        // Mozilla Public License 2.0
        // Common Development and Distribution License
        // Eclipse Public License version 2.0
    }
    return license
}