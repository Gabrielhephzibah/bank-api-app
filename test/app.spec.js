const supertest = require("supertest");
const assert = require('assert');
const bank = require('../routes/apis/bank');


//Test for getting all account details
describe("GET /", function() {
    it("it should return the detail of all the bank account", function() {
      supertest(bank)
        .get("/")
        .expect({
          accountId: "accountId",
            accountName: "accountName",
            accountNumber: "accountNumber"
        })
        .end(function(err, res){
          if (err) done(err);
          done();
        });
    });
  });


    //Test for getting a single account details

  describe("GET /single/:id", function() {
    it("it should return the account details of a single bank account", function() {
      let singleAccount= {
        accountId: "accountId",
            accountName: "accountName",
            accountNumber: "accountNumber"
           }
        supertest(bank)
          .get("/single/:id")
          .expect({ singleAccount })
            .expect(function(res) {
              assert.equal(res.body.message, "Single account details" );
              done();
          });
    });
  });


  //Test for creating an account

  describe("POST /create", function(){
    it("it shoud return the account details that is created", function(){

        supertest(bank)
          .post("/create")
          .send({
            accountId: "accountid",
            accountName: "accountName",
            accountNumber: "accountNumber",
            
          })
          .expect({
            accountId: "accountid",
            accountName: "accountName",
            accountNumber: "accountNumber"
        })
          .expect(function(res) {
            assert.equal(res.body.message, "Account is Created Successfully");
            done();
          });
      });

      it("it shoud return status code 400 if nothing is sent", function(){
        supertest(bank)
          .post("/create")
          .send({})
          .expect(400)
          .expect(function(res) {
            assert.equal(res.body.message,);
            done();
          });
      });
    });
    
 

  // describe("POST /create", function(){
   
  //   });


   
    //Test for updating an account

    describe("PUT /update/:id", function(){
      it("it shoud return the details of the account that is updated", function(){
        let updateAccount = {
          accountId: "accountid",
          accountName: "accountName",
          accountNumber: "accountNumber"
          
        }
          supertest(bank)
            .post("/update/:id")
            .send({updateAccount})
            .expect(updateAccount)
            .expect(function(res) {
              assert.equal(res.body.message, "Account Updated Successfully" );
              done();
            });
        });
        it("it shoud return status code 200 if account is successfully updated", function(){
          supertest(bank)
            .post("/update/:id")
            .send({})
            .expect(200)
            .expect(function(res) {
              assert.equal(res.body.message,);
              done();
            });
        });

        it("it shoud return status code 400 if nothing is sent", function(){
          supertest(bank)
            .post("/update/:id")
            .send({})
            .expect(400)
            .expect(function(res) {
              assert.equal(res.body.message, "nothing is updated");
              done();
            });
        });
      });
  


      //Test for deleting an account

      describe("DELETE /:id", function(){
        it("it should return details of the account deleted", function(){
          let deleteAccount = {
           accountId: "accountid",
          accountName: "accountName",
          accountNumber: "accountNumber"
          }
            supertest(bank)
              .delete("/:id")
              .expect(deleteAccount)
              .expect(function(res) {
                assert.equal(res.body.message, "Acount Deleted Successfully");
                done();
              });
          });
          it("it shoud return status code 200 if account is successfully deleted ", function(){
            supertest(bank)
              .post("/:id")
              .expect(200)
              .expect(function(res) {
                assert.equal(res.body.message,);
                done();
              });
          });
  
          it("it shoud return status code 400 if no account is sent", function(){
            supertest(bank)
              .post("/:id")
              .send({})
              .expect(400)
              .expect(function(res) {
                assert.equal(res.body.message, "nothing is deleted");
                done();
              });
          });


        });


  