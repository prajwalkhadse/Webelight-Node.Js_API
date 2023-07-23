const authenticate = (req, res, next) => {
    const authToken = req.headers.authorization;
    
    // Cheaking token valid or not
    if (authToken === 'Bearer 8a6b956cf373a46255c6e532c3192ae49d86865a7a85ece8faaf571c663f22b8') {
      next(); // Valid Authentication successful
    } else {
      res.status(401).json({ error: 'Token is invalid' }); // not valid Authentication failed
    }
  };
  
  module.exports = authenticate;