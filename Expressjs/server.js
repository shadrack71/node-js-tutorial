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
const registerRoute = require('./routes/register')
const loginRoute = require('./routes/login')
const corsOptions = require('./config/corsOptions')


// custom middleware logger
// app.use(logger);
app.use(logger)

// Cross Origin Resource Sharing

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
app.use('/register', registerRoute)
app.use('/login', loginRoute)

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})