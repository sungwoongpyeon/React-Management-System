const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/1',
            'name': 'Sungwoong Pyeon',
            'birthday': '930621',
            'gender': 'Male',
            'job': 'Student',
        },
        {
            'id': 2,
            'image': 'https://placeimg.com/64/64/2',
            'name': 'Yago Santos',
            'birthday': '920505',
            'gender': 'Male',
            'job': 'Student',
        },
        {
            'id': 3,
            'image': 'https://placeimg.com/64/64/3',
            'name': 'Alex',
            'birthday': '900404',
            'gender': 'Male',
            'job': 'Student',
        },
        {
            'id': 4,
            'image': 'https://placeimg.com/64/64/4',
            'name': 'Ceagan',
            'birthday': '991105',
            'gender': 'Male',
            'job': 'Student',
        },
        {
            'id': 5,
            'image': 'https://placeimg.com/64/64/5',
            'name': 'Ji-Hee',
            'birthday': '890905',
            'gender': 'Female',
            'job': 'Student',
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));