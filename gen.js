function gen(data) {
    return `
# ${data.title};

[![License](https://img.shields.io/badge/License-${data.license}%20-blue.svg)](https://opensource.org/licenses/${data.license})

## Table of Contents:
    *[Description](#description)
    *[Installation](#installation)
    *[Usage](#usage)
    *[Contributing](#contributors)
    *[Tests](#tests)
    *[Questions](#questions)
    *[License](#license)

#Description
${data.description};
#Installation
${data.install};
#Usage
${data.usage};
#Contributors
${data.contributing};
#Tests
${data.tests};
# Questions
Feel free to reach out to me if you have questions!
Github: [https://github.com/${data.github}](https://github.com/${data.github})
Email: [${data.email}](${data.email})

# License
[${data.license}](https://opensource.org/licenses)
CLICK TO VIEW TERMS AND CONDITIONS OF ALL OPEN SOURCE LICENSES.
    `;
};

module.exports = gen;