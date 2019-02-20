/**
 * ProfileController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create: async function (req, res) {
        var profile = req.body;
        


        

     //   var userId= req.session.userId;
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization,
                decoded;
            try {
                console.log('athorization');
              //  decoded = jwt.verify(authorization, secret.secretToken);req.headers.secret.secretToken
             // console.log(req.tokenSecret);
               // decoded = jwtoken.verify(authorization.split(' ')[1]);
               // console.log(decoded.id);
            } catch (e) {
                console.log('PROFILE2222222222222');
                return res.status(401).send('unauthorizeddddddddddd');
            }
            //var userId = decoded.id;
            // Fetch the user by id 
            /* User.findOne({_id: userId}).then(function(user){
                // Do something with the user
                return res.send(200);
            }); */
        }

console.log(req.token.id);

        /* User.findOne({id: token.id}).exec(function findOneCB(err, found){
            if(err) next(err);
            req.currentUser = found;
            next();
        }); */
       // var userId = req.session.userId;
        
       // var userId = req.currentUser.id;
        //console.log('server'+contact.params.);
/*  if(!Name){
return res.badRequest({err:'Invalid first_name'});
}
if(!phone_no)dvfdfdg{
return res.badRequest({err:'Invlaid last_name'});
} */

      /*   if (err) { return res.serverError(err); }

          //sails.log('Finn\'s id is:', id,name);
          return res.ok(record);
          }); */
         
              //return res.ok(rehfddfgdf2345rhgfgfdfdgjhhmjjhkdsfhjmjhfdggdcordb
              var newprofile = await Profile.create(Object.assign({
                
                 userId: req.token.id,
                 category: profile.category,
                 description: profile.description,
               }/* , sails.config.custom.verifyEmailAddresses? {
                 emailProofToken: await sails.helpers.strings.random('url-friendly'),
                 emailProofTokenExpiresAt: Date.now() + sails.config.custom.emailProofTokenTTL,
                 emailStatus: 'unconfirmed'*/
               )).fetch();

               /* if (err) {
                console.log(err);
                return res.json(err.status, {err: err});
              } */
              console.log('PRDGFGFHGGHHGQ12FO3DFI2LE211111111');
              // If user created successfuly we return user and token as response
              return res.json({profile: newprofile, token: jwToken.issue({id: req.token.id})});


            
            
},
      datastore:'mongodbServer',

};

