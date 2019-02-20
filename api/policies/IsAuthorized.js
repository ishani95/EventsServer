module.exports = function (req, res, next) {
    var token;
  
    if (req.headers && req.headers.authorization) {
      var parts = req.headers.authorization.split(' ');
      console.log('here5555555');
      if (parts.length == 2) {
        var scheme = parts[0],
          credentials = parts[1];
  
        if (/^Bearer$/i.test(scheme)) {
          token = credentials;
        }
      } else {
        console.log('here4');
        return res.status(401).json('Format is Authorization: Bearer [token]');
      }
    } else if (req.param('token')) {
      console.log('here666666');
      token = req.param('token');
      // We delete the token from param to not mess with blueprints
      delete req.query.token;
    } else {
      console.log('here77777777777');
      return res.status(401).json('No Authorization header was found');
    }
  
    /* jwToken.verify(token, function (err, token) {
      console.log('here88888888');
      if (err) {
        return res.status(401).json('Invalid Token!');}
      
      else{ 
        req.token = token;// This is the decrypted token or the payload you provided
      next();
      }
    });
  }; */
  jwToken.verify(token, function(err, token) {
    if ( err ) return res.json( 401, { err: { status: 'danger', message: 'auth.policy.invalidToken', detail: err }});
    //console.log(token);
    req.token = token;
    console.log(token);
    next();
    console.log('wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww');
  });
};