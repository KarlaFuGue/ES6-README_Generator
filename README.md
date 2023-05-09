# ES6-README_Generator

## Create a professional README with Node

A README file acts like a virtual storefront to a repository—it's the first thing that a person sees when they visit a repo on GitHub. But it's also much more than that: README files contain essential information about the repo's project.

### Table of content
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Test](#test)
- [Technologies](#technologies)
- [Credits](#credits)

### Description
Create a README file by using a command-line application to generate one. This allows the project creator to devote more time to working on the project.

AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project

### Installation
To run this project:

- Install NodeJS onto your Windows or macOS machine.
- Mac Users (orLinux) can install using brew install node@16
- node -v to test installed version
- Run npm install: npm init -y
    - inquirer will prompt you for your inputs from the command line.
- `fs` for writing to the file system.

### Usage
1. Start by running node index.js in the integrated terminal.
2. Answer the prompts in the command line.
3. fs.writeFile will genearte the README file with the provided answers
4. Once all the prompts have been answered, the new README will be ready in the app_folder.

#### Test

![image][def]


### Technologies
- JS
- JSON
- Node
- NPM

### Credits
Karla Fuentes:
<img src="{https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white}" />
https://github.com/KarlaFuGue
<img src="{https://img.shields.io/badge/Indeed-003A9B?style=for-the-badge&logo=Indeed&logoColor=white}" />
https://www.linkedin.com/in/karla-f-051392196?original_referer=















[def]: {utils/ScreenshotREADME.png}