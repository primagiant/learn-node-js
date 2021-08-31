const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const dirPath = './data';
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath)
}

const dataPath = './data/contacts.json';
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, "[]", 'utf-8');
}

const addQuestions = (newQuestion) => {
    return new Promise((resolve, rejects) => {
        rl.question(newQuestion, (q) => {
            resolve(q);
        });
    });
};

const saveContact = (name, email, phone) => {
    const contact = { name, email, phone };
    const buf = fs.readFileSync(dataPath, 'utf-8');
    const contacts = JSON.parse(buf);
    contacts.push(contact);
    fs.writeFileSync(dataPath, JSON.stringify(contacts));
    console.log("Thanks, for using this app");
    rl.close();
}

module.exports = { addQuestions, saveContact }