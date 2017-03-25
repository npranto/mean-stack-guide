const userRoutes = require('./sub-routes/user.routes');

module.exports = (app) => {
    app.use('/api/user', userRoutes);
}
