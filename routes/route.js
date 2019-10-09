const express = require('express');

const router = express.Router();


const contact = require('../models/contact');

//retriving contacts

router.get('/contacts/:email', (req, res, next)=>{
    contact.find({email: req.params.email},function(err, contacts){
        res.json(contacts);
    })
});

//add contact
router.post('/contacts', (req,res, next)=>{
    //logic to add contact
    let newContact = new contact({
        first_name: req.body.first_name,
        middle_name: req.body.middle_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone: req.body.phone,
        ssn: req.body.ssn,
        income: req.body.income,
        gender: req.body.gender,
        dob: req.body.dob,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
        rent: req.body.rent,
        employer: req.body.employer,
        emp_phone: req.body.emp_phone,
        time_employed: req.body.time_employed,
        status: req.body.status
    });

    newContact.save((err, contact)=>{
        if(err)
        {
            res.json({msg: 'Failed to add contact'});
            console.log(err);
        }
        else
        {
            res.json({msg: 'contact added successfully'});
        }
    })
});

//delte contacts
router.delete('/contacts/:id', (req,res, next)=>{
    //logic to delete contact
   
    contact.remove({_id: req.params.id}, function(err, result){
        if(err)
        {
            res.json( err);
        }
        else{
            res.json(result);
        }
    })
});



module.exports = router;