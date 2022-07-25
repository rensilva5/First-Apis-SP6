// import express library
import express, { request, response } from 'express';

// initialize express server
const app = express();
app.use(express.json())
// add a new student ( in theory )
app.post('/students', (request, response) => {
    const newStudent = request.body;
    students.push(newStudent)
    response.status(201).send(students)
})

// list requests that we want express to respond to
app.get('/hello', (request, response) => {
    // do something when we get a request... //
    console.log('xxx Hello Word 🌎! xxx')
    response.send('Hello Word 🌎!')
})
const students = [
    { firstName: 'Jonathan', lastName: 'Vegas'},
    { firstName: 'Brigette', lastName: 'Lemus'},
    { firstName: 'Mason', lastName: 'Madaras'},
    { firstName: 'Sebastien', lastName: 'Placide'},
    { firstName: 'Logan', lastName: 'McCalley'},
];

app.get('/students', (request, response) => {
    response.send(students);
})
app.get('/students/:firstName', (request, response) => {
    const student = students.find(stud => stud.firstName === request.params.firstName)
    if (!student) {
        response.status(404).send( {message: 'Student not found', success: false })
        return;
    }
    response.send(student);
})

// start listening on a port
app.listen(3001, () => {
    console.log('Now listening on port 3001');  
})