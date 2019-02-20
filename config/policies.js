/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

  // '*': true,

  'AuthenticateController': {
    index: true // We dont need authorization here, allowing public access
  },

  '*':false, // Everything resctricted here
  'UserController': {
    create: true // We dont need authorization here, allowing public access
  },
  'ProfileController': {
   // findProfiles: 'isAuthorized',
    create: 'isAuthorized',
   // findOneProfile: 'isAuthorized'
  },
  'PhotoController': {
    // findProfiles: 'isAuthorized',
     create: 'isAuthorized',
    // findOneProfile: 'isAuthorized'
   }

};
