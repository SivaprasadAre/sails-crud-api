/**
 * ClientsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
/**
* `ClientsController.create()`
*/
create: function (req, res) {
    console.log(req.body);
    let data;
    // to convert clients name's first letter capital
    data = { first_name: req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email,
        contact:req.body.contact,
        password:req.body.password }
    Clients.create(data).fetch().exec(function(error, result) {
        console.log(error, result);
        return res.json(result);
    })
    // return res.json(data);
    },



/**
* `ClientsController.show()`
*/
show: function (req, res) {
    Clients.find().exec(function (err, category) {
        console.log(err,category);
    return res.json(category);
    });
    },



/**
* `ClientsController.showOne()`
*/
showOne: function (req, res) {
    let query;
    query = { "id": req.param('Id') }
    Clients.findOne(query).exec(function (err, category) {
    return res.json(category);
    });
    },



/**
* `ClientsController.edit()`
*/
edit: function (req, res) {
    let query;
    query = { "id": req.param('Id') }
    // to convert category to first letter capital, rest of them are small letters
    Clients.update(query,req.body).fetch().exec(function (err, category) {
    
    return res.json(category)
    })
    },



/**
* `ClientsController.delete()`
*/
delete: function (req, res) {
    let query;
    query = { "id": req.param('Id') }
    Clients.destroy(query).fetch().exec(function (err, category) {
    if (err) return(err);
    return res.json(category)
    })
    },

    
};

