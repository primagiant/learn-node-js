// Core Module
// File System
const fs = require('fs');
// Readline
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const folderPath = './data';
if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
}

const dataPath = './data/contact.json';
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

rl.question("Masukkan nama anda : ", (nama) => {
    rl.question("Masukkan nomor HP anda : ", (nomorHp) => {
        const contact = { nama, nomorHp };
        // karana diambil dalam bentuk string
        const buf = fs.readFileSync('data/contact.json', 'utf-8');
        // ubah ke json
        const contacts = JSON.parse(buf);

        contacts.push(contact);

        // karna akan dikirim dalam bentuk string ubah ke string
        fs.writeFileSync('data/contact.json', JSON.stringify(contacts));
        console.log("Terima Kasih sudah memasukkan data");

        rl.close();
    })
})