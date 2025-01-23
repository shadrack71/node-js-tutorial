const express = require('express');
const { console } = require('inspector');
const path = require('path');
const cors = require('cors');
const app = express()
const PORT = process.env.PORT || 3500;

const  { logger } = require('./middleware/logEvent');
const   errorHandler  = require('./middleware/errorHandler');
const routerSubdir = require('./routes/subdir');
const routerRoot = require('./routes/root')
const employeeRoute = require('./routes/api/employee')


// custom middleware logger
// app.use(logger);
app.use(logger)

// Cross Origin Resource Sharing
// Cross Origin Resource Sharing
const whitelist = ['https://www.google.com', 'http://127.0.0.1:5500', 'http://localhost:3500'];
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin ) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
}


app.use(cors(corsOptions));



// built-in middleware to handle urlencoded data
// in other words, form data:  
// ‘content-type: application/x-www-form-urlencoded’
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json 
app.use(express.json());

//serve static files
app.use(express.static(path.join(__dirname, '/public')));
app.use('/subdir',express.static(path.join(__dirname, '/public')));

app.use('/', routerRoot)
app.use('/subdir', routerSubdir)
app.use('/employee', employeeRoute)






app.route('/book')
  .get((req, res) => {
    res.send('Get a random book')
  })
  .post((req, res) => {
    res.send('Add a book')
  })
  .put((req, res) => {
    res.send('Update the book')
  })

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})