const express = require('express');
const router = express.Router();
const  path = require('path');
const data = {}

data.employees = require('../../data/employee.json');;

router.route('/')
    .get((req, res) => {
        res.json(data.employees);
    })
    .post((req, res) => {
        let  firstname = req.body.firstname;
        let  lastname = req.body.lastname;
        console.log(firstname, lastname);
        res.send(firstname + ' ' + lastname)
    
        // res.json({
        //     "firstname": req.body.firstname,
        //     "lastname": req.body.lastname
        // });
    })
    .put((req, res) => {

         let  firstname = req.body.firstname;
        let  lastname = req.body.lastname;
        console.log(firstname, lastname);
        res.send(firstname + ' ' + lastname)


        // res.json({
        //     "firstname": req.body.firstname,
        //     "lastname": req.body.lastname
        // });
    })
    .delete((req, res) => {
        res.json({ "id": req.body.id })
    });

router.route('/:id')
    .get((req, res) => {
        res.json({ "id": req.params.id });
    });






module.exports = router;
