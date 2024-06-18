const express = require('express');

const app = express();
const PORT = 3000;

const magic8Responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes - Definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes, and signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  
  ]

app.get('/', (req, res) => {
    res.status(200).send('Hello, world!');
});


app.get('/tim-gunn', (req, res) => {
    res.send('Make it work');
});

app.get('/emeril', (req, res) => {
    res.send('Bam!');
});

app.get('/steve-mcgarrett', (req, res) => {
    res.send(`Book 'em Danno!`);
});

app.get('/coach-taylor', (req, res) => {
    res.send(`Clear eyes, full hearts, can't Lose`);
});

app.get('/homer', (req, res) => {
    res.send(`D'oh`);
});

app.get('/bruce-banner', (req, res) => {
    res.send(`Don't make me angry`);
});

app.get('/jj-evans', (req, res) => {
    res.send(`Dy-no-myte!`);
});

app.get('/batman', (req, res) => {
    res.send(`To the Batmobile!`);
});

app.get('/hannibal-smith', (req, res) => {
    res.send(`I love it when a plan comes together`);
});

app.get('/frasier', (req, res) => {
    res.send(`I'm listening`);
})

app.get('/terminator', (req, res) => {
    res.send(`I'll be back. Hasta la vista baby.`);
});

app.get('/magic8', (req, res) => {
    const randomMsg = Math.floor(Math.random() * magic8Responses.length);
    const result = magic8Responses[randomMsg];
    res.send(`<h1>${result}</h1>`);
});


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});

module.exports = app;