const express = require('express');
const router = express.Router();
const Bank = require('../../models/Bank');

//get all the account
router.get('/', (req, res, next) =>{
    Bank.find()
    .then((posts) =>{
        res.json(posts);
    })
    .catch(err => console.log(err))

});

// Get all one bank account
router.get('/single/:id', (req, res, next) => {
    //Grab the id of the bank account
    let id = req.params.id;
    Bank.findById(id)
        .then((bank) => {
            res.json(bank);
        })
        .catch(err => console.log(err))
});

//create an account

router.post('/create', (req, res, next) =>{
    const accountId = req.body.accountId;
    const accountName = req.body.accountName;
    const accountNumber = req.body.accountNumber;
    newBank = new Bank({
        accountId: accountId,
        accountName: accountName,
        accountNumber: accountNumber
    });
    newBank.save()
    .then(bank => {
        res.json(bank);
    })
    .catch(err => console.log(err));
});

//to update an account
 router.put('/update/:id', (req, res, next) => {
     //get id of the account
     let id = req.params.id;
     //to find account by id
     Bank.findById(id)
     .then(bank => {
        bank.accountId = req.body.accountId;
         bank.accountName = req.body.accountName;
         bank.accountNumber = req.body.accountNumber;
         


         bank.save()
         .then(bank =>{
            res.send({message: 'Account Updated Succesfully',
             status:'updated', 
             acount_details: bank })
         })
         .catch(err => console.log(err))
     })
     .catch(err => console.log(err))
 });

 
//delete account

 router.delete('/:id',(req, res, next) => {
    let id = req.params.id;
    Bank.findById(id)
    .then(bank => {
        bank.delete()
        .then(bank =>{
           res.send({message: 'Account deleted Succesfully',
            status:'deleted', 
            account_deleted: bank })
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))

 });

module.exports = router;