module.exports = {

    registerUser(req, res, next){
        res.send('USER: REGISTER ROUTE')
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