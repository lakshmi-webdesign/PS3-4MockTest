const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

const students = [
  { id: 1, name: 'Alice', age: 20, grade: 'A', subjects: ['Math', 'English'] },
  { id: 2, name: 'Bob', age: 22, grade: 'B', subjects: ['Science', 'Math'] },
  {
    id: 3,
    name: 'Charlie',
    age: 19,
    grade: 'C',
    subjects: ['History', 'English'],
  },
  { id: 4, name: 'Diana', age: 21, grade: 'A', subjects: ['Math', 'Science'] },
  {
    id: 5,
    name: 'Ethan',
    age: 20,
    grade: 'B',
    subjects: ['English', 'History'],
  },
];

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
