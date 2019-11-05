const express = require('express');
const mongoose =require('mongoose');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');


require('./models/User');       // require it at least one time to excute it 
require('./models/Survey');
require('./services/passport'); 
                                // As I said , we just have to invoke passport , 
                                // so no need to export it from its file 
// the first solution is to put the credentials inside the config file 
// the second solution is to put all the mongoURI inside the config file                                
 mongoose
      .connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
      .then( () => console.log('connection was passed succefully'))
      .catch( (err) => console.log(err));


const authRouter = require('./routes/authRoutes');
const surveysRoutes = require('./routes/surveysRoutes');
// create an application that will setup a configuration to listen
// to the request that will comming to express from the node side 
// and send them to routes
// tell app that we will use cookies 

const app = express(); 

app.use(bodyParser.json());
app.use( 
      cookieSession({
          maxAge: 60*60*60*1000,
          keys: [keys.cookieKey]
      })
)
// tell passport that we must use cookies to handle authentification
app.use(passport.initialize());
app.use(passport.session());


authRouter(app);
surveysRoutes(app);
// what  port we should listen to it
// composed from two parts the first one is for : Heroku Deployment 
// the second is for local use 
const PORT = process.env.PORT || 5000 ;
app.listen( PORT );

