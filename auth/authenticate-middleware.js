const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
      if (token) {
        jwt.verify(token, process.env.JWT_SECRET || "test", (err, decodedToken) => {
          if (err) {
            res.status(401).json({ message: 'Invalid Credentials' });
          } else {
            console.log(decodedToken)
            req.user = { username: decodedToken.username, user_id: decodedToken.subject }
            next()
          }
        })
    } else {
      res.status(400).json({ message: 'No credentials provided' });
    }
  };

/* module.exports = (req, res, next) => {
  if (req.session && req.session.user) {
    next();
  } else {
    res.status(401).json({ message: "Invalid session" });
  }
};
 */