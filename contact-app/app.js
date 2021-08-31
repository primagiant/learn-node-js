const { saveContact, addQuestions } = require('./contacts');

const main = async () => {
    const name = await addQuestions("Your name : ");
    const email = await addQuestions("Your email : ");
    const phone = await addQuestions("Your phone : ");

    saveContact(name, email, phone);
}

main();