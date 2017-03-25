const User = require('./../models/user.schema');

module.exports = {

    registerUser(req, res, next){
        new User(req.body.username, (err, userRegistered)=>{
            if (err){
                console.log('ERROR in registerUser()', err);
            }
            else{
                console.log('SUCCESS in registerUser()', userRegistered);
            }
        })

    },

    authenticateUser(req, res, next){
        res.send('USER: AUTHENTICATE ROUTE');
    },

    getUserProfile(req, res, next){
        res.send('USER: PROFILE ROUTE');
    },

    validate(req, res, next){
        res.send('USER: VALIDATE ROUTE');
    }

}