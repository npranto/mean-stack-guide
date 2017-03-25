const User = require('./../models/user.schema');

module.exports = {

    registerUser(req, res, next){
        let newUser = new User ({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        User.addUser(newUser, (err, userAdded)=>{
            if (err){
                res.status(500).json({
                    success: false,
                    message: 'ERROR in registerUser(), ' + err,
                });
            }else{
                res.status(200).json({
                    success: true,
                    message: 'SUCCESS in registerUser()',
                    userAdded
                });
            }
        });
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