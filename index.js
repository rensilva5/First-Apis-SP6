// import express library
import express from 'express';

// initialize express server
const app = express();

// list requests that we want express to respond to
app.get('/hello', (request, response) => {
    // do something when we get a request... //
    response.send('Hello Word 🌎!')

})


// start listening on a port
app.listen(3001, () => {
    console.log('Now listening on port 3001');  
})