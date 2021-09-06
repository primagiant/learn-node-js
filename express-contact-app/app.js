const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const { loadContact } = require('./utils/contacts.js')

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', {
        layout: 'layouts/main-layout',
        title: "Home",
    });
})

app.get('/contact', (req, res) => {
    const contacts = loadContact();
    res.render('contact', {
        layout: 'layouts/main-layout',
        title: "Contact",
        contacts,
    });
})

app.get('/contact/:name', (req, res) => {
    // const contact = findContact(req.params.name);
    res.render('detail', {
        layout: 'layouts/main-layout',
        title: "Detail Contact",
        // contact,
    });
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})