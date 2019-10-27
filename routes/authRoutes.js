const passport =require('passport');
const stripe = require('stripe')(require('../config/keys').stripeSecretKey)
const mongoose = require('mongoose');
const User = mongoose.model('users');
module.exports = (app, isAuthentified) => {
    app.get('/', (req,res) => {
        res.send({ li: 'hi'})
    })

    app.get('/auth/google',
        passport.authenticate( 'google',{ scope: ['profile', 'email'] })
    )

    app.get('/auth/google/callback', passport.authenticate('google'),(req, res) => res.redirect('/') )

    app.get('/api/current_user', (req, res) => {
        //res.send(req.session)
        res.send(req.user)
    })
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/')
    })

    // is Authentified && not isAuthentified() ??
    // Because we don't wanna invoke the fucntion in the first time we load our app
    // with the first choise . we're passing a reference to it , so when we make 
    // a post request we , thw app will find the refrence to the fucntion 

    app.post('/api/stripe',isAuthentified, async (req, res) => {
        

// ---> Version 1 : Using Promises 
        //const token  = req.body.id;
        // stripe.charges.create({
        //         amount: 10000,
        //         currency: 'MAD',
        //         description: 'charges emaily',
        //         source: token,
        // })
        // .then ( charge =>  { 
        //                     if(charge) {
        //                         let numberOfCredits = req.user.numberOfCredits;
        //                         req.user.updateOne({ numberOfCredits: numberOfCredits + 5})
        //                                 .then(() => { 
        //                                             // console.log(numberOfCredits)
        //                                             User.findById(req.user._id)
        //                                             .then(user => {
        //                                                 console.log(user)
        //                                                 res.send(user); 
        //                                             })
        //                                             }
        //                                     )
        //                                 }
        //                    }
                            
        // ).catch(err => console.log('Error', err))

//----> Version 2 : Let's try to use the async/await method: 
        await stripe.charges.create({
                    amount: 10000,
                    currency: 'MAD',
                    description: 'charges emaily',
                    source: req.body.id,
            });
        req.user.numberOfCredits += 5 ;
        const user =  await req.user.save();
        res.send(user);
        
        
    
})
}
// we didn't use the Router helper but i realized the idea behind all this stuff;
