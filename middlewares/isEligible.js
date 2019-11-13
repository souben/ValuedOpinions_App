
module.exports = isEligible = (req, res, next) => {
    console.log(req.user.numberOfCredits)
    if( req.user.numberOfCredits < 1){
        res.sendStatus(403).send({ error: 'you don\'t have enough credits to do this , Please buy credits to do have more surveys'})
    }
    next();
}