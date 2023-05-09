// function to generate markdown for README
function generateMarkdown(data) {
    let sections = `## Table of Contents`;

  if (data.description !== '') { sections += `
  * [Description](#description)` };

  if (data.installation !== '') { sections += `
  * [Installation](#installation)` };

  if (data.usage !== '') { sections += `
  * [Usage](#usage)` };

  if (data.tests !== '') { sections += `
  * [Contributing](#contributing)` };


  // Generate markdown for the top required portions of the README
  let tempMarkdown = 

    `# ${data.title}
   

    ## Description 
  
    *The what, why, and how:* 
    
    ${data.description}
    `
  
    // Add Table of Contents to markdown
    tempMarkdown += sections;
   
    // Add License section since License is required to Table of Contents
    tempMarkdown += `
    * [License](#license)`;
    
  
    // Optional Installation section
    if (data.installation !== '') {
    
    tempMarkdown +=
    `
    
    ## Installation
    
    *Steps required to install project and how to get the development environment running:*
    
    ${data.installation}`
    };
    
  
    // Optional Usage section
    if (data.usage !== '') {
    
    tempMarkdown +=
    
    `
    
    ## Usage 
    
    *Instructions and examples for use:*
    
    ${data.usage}`
    };
    
    
    // Optional Contributing section
    if (data.contributing !== '') {
  
    tempMarkdown +=
      
    `
    
    ## Contributing
    
    *If you would like to contribute it, you can follow these guidelines for how to do so.*
    
    ${data.contributing}`
    };
    
  
    // Optional Tests section
    if (data.tests !== '') {
    
    tempMarkdown +=
    `
    
    ## Tests
    
    *Tests for application and how to run them:*
    
    ${data.tests}`
    };
  
  
    // License section is required
    tempMarkdown +=
    `
    
    ## License
    
    ${data.license}
    `;
   
}
  module.exports = generateMarkdown;