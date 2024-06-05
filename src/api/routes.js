const express = require('express');
const router = express.Router();
const _ = require('underscore');

let employees = [
    {"id":1,"full_name":"Sarine Heatherington","email":"sheatherington0@goo.ne.jp","gender":"Polygender","mobile":"870-915-1187"},
    {"id":2,"full_name":"Anatollo Dudding","email":"adudding1@tinyurl.com","gender":"Polygender","mobile":"229-523-4940"},
    {"id":3,"full_name":"Mordy Flux","email":"mflux2@csmonitor.com","gender":"Male","mobile":"905-446-7491"},
    {"id":4,"full_name":"Larina Mallebone","email":"lmallebone3@smh.com.au","gender":"Male","mobile":"938-933-8220"},
    {"id":5,"full_name":"Neal Doidge","email":"ndoidge4@state.gov","gender":"Male","mobile":"344-976-2688"}
];

// create and save a new employee
// http://localhost:4001/api/create
// note - provide the json request body
/*
{
    "full_name": "Cierra Vega",
    "email": "cierra.vega@automation.com",
    "gender": "female",
    "mobile": "603-367-2819"
}
 */
router.post('/create', (req, res) => {
    // skipping request body validations for brevity

    let empId = employees[employees.length - 1].id + 1;
    employees.push({
        id: empId,
        full_name: req.body.full_name,
        email: req.body.email,
        gender: req.body.gender,
        mobile: req.body.mobile
    });

    res.status(201).json({info: `Entity ${empId} created successfully`});
});

// get all employees
// http://localhost:4001/api/findAll
router.get('/findAll', (req, res) => {
    res.status(200).json({info: employees});
});

// get a single employee
// http://localhost:4001/api/findById?id=1
router.get('/findById', (req, res) => {
    if (_.isEmpty(req.query.id)) {
        res.status(400).json({info: 'Id cannot be null'});
    }

    let data = employees.filter(function (emp) {
        if (emp.id == req.query.id) {
            return true;
        }
    });

    if (_.isEmpty(data)) {
        res.status(404).json({info: 'Entity not found'});
    } else {
        res.status(200).json({info: data});
    }
});

// other HTTP methods like PUT, DELETE are skipped for brevity.
// you can add them on your own.

// routes
module.exports = router;
