function gen(data) {
    return `
    ${data.title};
    ${data.description};
    ${data.install};
    ${data.usage};
    ${data.contributing};
    ${data.tests};
    `;
};

module.exports = gen;