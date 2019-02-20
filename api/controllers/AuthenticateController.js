module.exports = {
    inputs: {
      
      email: {
        type: 'string',
        required: true
      },
  
      password: {
        type: 'string',
        required: true,
        description: 'Securely hashed representation of the user\'s login password.'
      }
      
        },
      
      
        exits: {
      
          success: {
            description: 'The requesting user agent has been successfully logged in.',
            extendedDescription:
      `Under the covers, this stores the id of the logged-in user in the session
      as the \`userId\` key.  The next time this user agent sends a request, assuming
      it includes a cookie (like a web browser), Sails will automatically make this
      user id available as req.session.userId in the corresponding action.  (Also note
      that, thanks to the included "custom" hook, when a relevant request is received
      from a logged-in user, that user's entire record from the database will be fetched
      and exposed as \`req.me\`.)`
          },
      
          badCombo: {
            description: `The provided email and password combination does not
            match any user in the database.`,
            responseType: 'unauthorized'
            // ^This uses the custom `unauthorized` response located in `api/responses/unauthorized.js`.
            // To customize the generic "unauthorized" response across this entire app, change that file
            // (see api/responses/unauthorized).
            //
            // To customize the response for _only this_ action, replace `responseType` with
            // something else.  For example, you might set `statusCode: 498` and change the
            // implementation below accordingly (see http://sailsjs.com/docs/concepts/controllers).
          }
      
        },
        index: async  function (inputs, exits) {
      var userRecord = await User.findOne({
        email: inputs.body.email
      });
      // If there was no matching user, respond thru the "badCombo" exit.
      console.log('DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD')
      if(!userRecord) {
        return exits.json(401, {err: 'invalid userName or password'});
      }
  console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASSSSSSSSSAAAA')
      // If the password doesn't match, then also exit thru "badCombo".
      await sails.helpers.passwords.checkPassword(inputs.body.password, userRecord.password)
      .intercept('incorrect', 'badCombo');
      console.log('CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC')
      // If "Remember Me" was enabled, then keep the session alive for
      // a longer amount of time.  (This causes an updated "Set Cookie"
      // response header to be sent as the result of this request -- thus
      // we must be dealing with a traditional HTTP request in order for
      // this to work.)
     
  
      // Modify the active session instance.
     // this.req.session.id = userRecord.id;
     return exits.json({
        user: userRecord,
        token: jwToken.issue({id : userRecord.id })
      });
      // Send success response (this is where the session actually gets persisted)
      
          }
    };