
module.exports = isEligible = (req, res, next) => {
    if(!req.user.numbersOfCredits){
        res.sendStatus(403).send({ error: 'you don\'t have enough credits to do this , Please buy credits to do have more surveys'})
    }
    next();
}