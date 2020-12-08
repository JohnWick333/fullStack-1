const express = require('express');
const mongoose = require('mongoose')
const passport= require('passport')
const cookieSession = require('cookie-session')
require('./models/Users')
require('./services/passport')
const appRoutes = require('./routes/authRoutes')
const keys = require('./config/keys')

mongoose.connect(keys.mongoURI, {useNewUrlParser: true,useUnifiedTopology: true})

const app = express();
app.use(cookieSession({
    maxAge: 30*24*60*60*1000,
    keys:[keys.cookieKey]
}))

app.use(passport.initialize());
app.use(passport.session())

appRoutes(app);
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server started on port`);
});