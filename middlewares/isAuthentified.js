const isAuthentified = (req, res, next) => {
      if(!req.user){
        res.sendStatus(401).send({ error: 'You must log in!'});
      }
      next();
      
}
module.exports = isAuthentified;