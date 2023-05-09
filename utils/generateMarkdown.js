// function to generate markdown for README
function generateMarkdown (data) {
  let sections = `
  ## Table of Content`
  if (data.description !== '') { sections +=
    `-[Description](#description)`};
  
  if (data.installation !== '') { sections +=
    `-[Installation](#installation)`};
  
  if (data.usage !== '') { sections +=
    `-[Usage](#usage)`};
  
  if (data.license !== '') { sections +=
    `-[License](#license)`};

  if (data.contributing !== '') { sections +=
    `-[Contributing](#contributing)`};  
  
  if (data.questions !== '') { sections +=
      `-[Questions](#questions)`}; 
  
  let tempMarkdown = 
   `
  # ${data.title} `

  // Add Table of Contents to markdown
  tempMarkdown += sections;
  `
  ## Description
  ${data.description}

  ## Installationn
  *To run this application:*
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## Questions
  *For any questions, please contact me*
  ${data.github}
  ${data.linkedin}
    `

  // Return markdown
  return tempMarkdown;
}

module.exports = generateMarkdown;
