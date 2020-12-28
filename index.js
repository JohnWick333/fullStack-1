const express = require('express');
const mongoose = require('mongoose')
const passport= require('passport')
const cookieSession = require('cookie-session')
require('./models/Users')
require('./services/passport')
const appRoutes = require('./routes/authRoutes')
const billingRoutes = require('./routes/billingRoutes')
const keys = require('./config/keys')
const bodyParser= require('body-parser')

mongoose.connect(keys.mongoURI, {useNewUrlParser: true,useUnifiedTopology: true})

const app = express();
app.use(bodyParser.json())
app.use(cookieSession({
    maxAge: 30*24*60*60*1000,
    keys:[keys.cookieKey]
}))

app.use(passport.initialize());
app.use(passport.session())

appRoutes(app);
billingRoutes(app);

if(process.env.NODE_ENV=='production'){
    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*',(req,res,next)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server started on port`);
});