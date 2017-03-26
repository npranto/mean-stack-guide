const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const User = require('./../server/models/user.schema');
const databaseConfig = require('./database.config');

const passportConfig = (passport)=>{
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
    opts.secretOrKey = databaseConfig.secret;

    passport.use(new JwtStrategy(opts, (jwt_payload, done)=>{
        console.log('JWT PAYLOAD: ', jwt_payload);
        User.getUserById(jwt_payload._doc._id, (err, userFound)=>{
            if(err){
                return done(err, false);
            }
            if(userFound){
                return done(null, userFound);
            }else{
                return done(null, false);
            }
        })
    }))
}

module.exports = passportConfig;