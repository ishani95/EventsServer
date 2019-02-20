/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create: async function (inputs, res) {
        var user = inputs.body;
        var newEmailAddress = user.email;
        console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAA');
            // Build up data for the new user record and save it to the database.
            // (Also use `fetch` to retrieve the new ID so that we can use it below.)
            var newUserRecord = await User.create(Object.assign({
             
              email: newEmailAddress,
              password: await sails.helpers.passwords.hashPassword(user.password),
              name: user.name,
              phone: user.phone

            }/* , sails.config.custom.verifyEmailAddresses? {
              emailProofToken: await sails.helpers.strings.random('url-friendly'),
              emailProofTokenExpiresAt: Date.now() + sails.config.custom.emailProofTokenTTL,
              emailStatus: 'unconfirmed'*/
            )).fetch();
            
            /* .intercept('E_UNIQUE', 'emailAlreadyInUse')
            .intercept({name: 'UsageError'}, 'invalid')
            .fetch();  */
            console.log('BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB');
          /* if (res.err) {
            console.log(res.err);
            return res.json(res.err.status, {err: err});
          } */
          //return res.ok(record);
    
       //   this.req.session.userId = newUserRecord.id;
       return res.json({user: newUserRecord, token: jwToken.issue({id: newUserRecord._id})});
          console.log('CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC');
          //return res.status(200, {user: newUserRecord, token: jwToken.issue({id: newUserRecord._id})});
          console.log('DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD');
          // If user created successfuly we return user and token as response
          /* if (newUserRecord) {
            // NOTE: payload is { id: user.id}
            console.log('DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD');
            return res.status(200, {user: newUserRecord, token: jwToken.issue({id: newUserRecord.id})});
            console.log('EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE');
          } */
        },
      datastore:'mongodbServer',

};

